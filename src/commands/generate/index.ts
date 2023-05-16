import input from '@inquirer/input';
import { checkbox, select } from '@inquirer/prompts';
import { Args, Command } from '@oclif/core';

import { ReactQueryHookGenerator } from '../../ReactQueryHookGenerator';
import { SchemaParser } from '../../SchemaParser';
import { Config, Target } from '../../config/Config';
import { getSchemaLoaderForOrigin } from '../../loader';
import { TypeParser } from '../../typegen/TypeParser';
import { TypeRenderer } from '../../typegen/TypeRenderer';
import { OverridePolicy } from '../../types';

export default class Generate extends Command {
    static description = 'Main entrypoint';

    static examples = [`$ generate`];

    static args = {
        origin: Args.string({ description: 'File path or URL to index.yaml file', required: false }),
    };

    static flags = {
        // from: Flags.string({ char: 'f', description: 'Who is saying hello', required: false }),
    };

    async run(): Promise<void> {
        const { args } = await this.parse(Generate);

        const config = await Config.load();

        // Args always override default
        if (args.origin) config.openapi_path = args.origin;

        // If still not loaded, ask
        if (!config.openapi_path) {
            args.origin = await input({ message: 'Type origin of index.yaml (file path or URL)' });
        }

        const { openapi_path } = config;

        const loader = getSchemaLoaderForOrigin(openapi_path);
        const indexDocument = await loader.loadIndex();
        console.log('Загружен документ', indexDocument.info);

        const schemaParser = new SchemaParser(indexDocument, loader, p => {
            console.log(`   ${p}% зависимостей...`);
        });

        console.log(`Загружаем зависимые компоненты...`);

        const parsedSchema = await schemaParser.parse();
        const { groups, groupedOperations, operations } = parsedSchema;
        console.log('   100% зависимостей загружено!');

        if (!config.targets) {
            config.targets = await checkbox({
                message: 'Выберите что генерировать:',
                choices: [
                    {
                        name: 'Типы',
                        value: Target.TYPES,
                        checked: true,
                        disabled: 'обязательно',
                    },
                    {
                        name: 'Перечисления (enums)',
                        value: Target.ENUMS,
                    },
                    {
                        name: 'Хуки react-query',
                        value: Target.REACT_QUERY,
                    },
                ],
            });
        }

        const parser = new TypeParser(parsedSchema);
        parser.parse();

        if (config.override_policies[Target.TYPES] === undefined) {
            config.override_policies[Target.TYPES] = (await select({
                message: 'Действие при наличии существующего файла типов...',
                choices: [
                    {
                        name: 'Перезаписать',
                        value: 'override' as OverridePolicy,
                    },
                    {
                        name: 'Пропустить',
                        value: 'skip' as OverridePolicy,
                    },
                ],
            })) as OverridePolicy;
        }

        const typeGen = new TypeRenderer({
            overridePolicy: config.override_policies[Target.TYPES]!,
        });

        await typeGen.renderCommonDependencies(operations);

        console.log('Общие типы созданы в output/commonTypes, рендерим остальные пути...');

        await Promise.all(groups.map(async group => typeGen.render(group, groupedOperations[group])));

        console.log('✔️ Типы сгенерированы!');

        if (config.targets.includes(Target.REACT_QUERY)) {
            if (config.override_policies[Target.REACT_QUERY] === undefined) {
                config.override_policies[Target.REACT_QUERY] = (await select({
                    message: 'Действие при наличии существующего файла хуков...',
                    choices: [
                        {
                            name: '⚠️ Перезаписать',
                            value: 'override' as OverridePolicy,
                        },
                        {
                            name: 'Пропустить',
                            value: 'skip' as OverridePolicy,
                        },
                    ],
                })) as OverridePolicy;
            }

            const hookGen = new ReactQueryHookGenerator({
                overridePolicy: config.override_policies[Target.REACT_QUERY]!,
            });

            await Promise.all(
                groups.map(group => {
                    return hookGen.generate(group, groupedOperations[group]);
                })
            );

            console.log('✔️ Хуки сгенерированы!');
        }
    }
}
