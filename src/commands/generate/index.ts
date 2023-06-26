/* eslint-disable unicorn/consistent-destructuring */
import input from '@inquirer/input';
import { checkbox, select } from '@inquirer/prompts';
import { Args, Command } from '@oclif/core';

import { ReactQueryHookGenerator } from '../../codeGen/ReactQueryHookGenerator';
import { SchemaParser } from '../../common/SchemaParser';
import { runEslintAutoFix } from '../../common/helpers';
import { OverridePolicy, ParsedSchema } from '../../common/types';
import { Config, ConfigSchema, Target } from '../../config/Config';
import { getSchemaLoaderForOrigin } from '../../schemaLoaders';
import { TypeRenderer } from '../../typegen/TypeRenderer';

export default class Generate extends Command {
    static description = 'Main entrypoint';

    static examples = ['$ generate'];

    static args = {
        origin: Args.string({ description: 'File path or URL to index.yaml file', required: false }),
        output_path: Args.string({ description: 'Output root folder', required: false }),
    };

    static flags = {
        // from: Flags.string({ char: 'f', description: 'Who is saying hello', required: false }),
    };

    private conf!: ConfigSchema;
    private isSomePrompted = false;
    private parsedSchema!: ParsedSchema;

    private async applyArgsToConfig() {
        const { args } = await this.parse(Generate);

        if (args.origin) this.conf.openapi_path = args.origin;
        if (args.output_path) this.conf.output_path = args.output_path;
    }

    private async demandOpenapiPath() {
        if (!this.conf.openapi_path) {
            this.conf.openapi_path = await input({ message: 'Type origin of index.yaml (file path or URL)' });
            this.isSomePrompted = true;
        }
    }

    private async demandOutputPath() {
        if (!this.conf.output_path) {
            this.conf.output_path = await input({ message: 'Output root folder' });
            this.isSomePrompted = true;
        }
    }

    private async demandTargets() {
        if (!this.conf.targets) {
            this.conf.targets = await checkbox({
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
            this.isSomePrompted = true;
        }
    }

    private async demandOverridePolicies() {
        if (this.conf.override_policies[Target.TYPES] === undefined) {
            this.conf.override_policies[Target.TYPES] = (await select({
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
            this.isSomePrompted = true;
        }

        if (
            this.conf.targets.includes(Target.REACT_QUERY) &&
            this.conf.override_policies[Target.REACT_QUERY] === undefined
        ) {
            this.conf.override_policies[Target.REACT_QUERY] = (await select({
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
            this.isSomePrompted = true;
        }
    }

    async run(): Promise<void> {
        this.conf = await Config.load();

        // Args always override default
        await this.applyArgsToConfig();

        // If still not loaded, ask
        await this.demandOpenapiPath();
        await this.demandOutputPath();
        await this.demandTargets();
        await this.demandOverridePolicies();

        const { openapi_path, targets, override_policies } = this.conf;

        const loader = getSchemaLoaderForOrigin(openapi_path, this.conf);
        const indexDocument = await loader.loadIndex();
        console.log('Загружен документ', indexDocument.info);

        const schemaParser = new SchemaParser(indexDocument, loader, p => {
            console.log(`   ${p}% зависимостей...`);
        });

        console.log('Загружаем зависимые компоненты...');

        this.parsedSchema = await schemaParser.parse();
        console.log('   100% зависимостей загружено!');

        const { groups, derefedPathGroupedOps } = this.parsedSchema;

        const typeRenderer = new TypeRenderer({
            overridePolicy: this.conf.override_policies[Target.TYPES]!,
            parsedSchema: this.parsedSchema,
            config: this.conf,
        });

        console.log('⏳ Генерируем типы...');

        await typeRenderer.render();

        console.log('✔️ Типы сгенерированы!');

        if (targets.includes(Target.REACT_QUERY)) {
            const hookGen = new ReactQueryHookGenerator({
                config: this.conf,
                overridePolicy: override_policies[Target.REACT_QUERY]!,
                typeFetcher: operation => {
                    const types = typeRenderer.getTypesForRequest(operation.path, operation.method as any)!;
                    return types;
                },
            });

            console.log('⏳ Генерируем хуки react-query...');

            await Promise.all(
                groups.map(group => {
                    return hookGen.generate(group, derefedPathGroupedOps[group]);
                })
            );

            console.log('✔️ Хуки сгенерированы!');
        }

        console.log('⏳ Запускаем eslint --fix...');
        try {
            await runEslintAutoFix(this.conf.output_path);
        } catch {}

        console.log('✔️ Файлы приведены в соответствие с вашим prettier/eslint!');

        if (this.isSomePrompted) {
            await Config.save(this.conf);
        }
    }
}
