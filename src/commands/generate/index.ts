import { Args, Command } from '@oclif/core';
import fs from 'node:fs';

import { getSchemaLoaderForOrigin } from '../../classes/Loaders';
import { OpenApiParser } from '../../classes/OpenApiSchemaParser';
import { TypesGenerator } from '../../classes/TypesGenerator';
import { runEslintAutoFix } from '../../common/helpers';
import { Config, ConfigSchema } from '../../config/Config';
import { traverseAndModify } from '../../deref';

export default class Generate extends Command {
    static description = 'Main entrypoint';

    static examples = ['$ generate'];

    static args = {
        origin: Args.string({ description: 'File path or URL to index.yaml file', required: false }),
        output_path: Args.string({ description: 'Output root folder', required: false }),
    };

    private conf!: ConfigSchema;

    private async applyArgsToConfig() {
        const { args } = await this.parse(Generate);

        if (args.origin) this.conf.openapi_path = args.origin;
        if (args.output_path) this.conf.output_path = args.output_path;
    }

    async run(): Promise<void> {
        try {
            this.conf = await Config.load();

            // Args always override default
            await this.applyArgsToConfig();

            const {
                openapi_path,
                //  targets, override_policies
            } = this.conf;

            const loader = getSchemaLoaderForOrigin(openapi_path);
            const indexDocument = await loader.loadIndex();
            if (!indexDocument) {
                throw new Error('Docuemnt is empty');
            }

            console.log('Document loaded', indexDocument.info);
            console.log('Загружаем зависимые компоненты...');

            let lastPercent = 0;
            await traverseAndModify(
                indexDocument,
                async ref => {
                    // TODO: apply load.document.before middlewares
                    const result = await loader.loadJson(ref.absolutePath);
                    // TODO: apply load.document.after, return result

                    if (!ref.target) return result;

                    return ref.target.reduce((acc, targetStr) => {
                        return acc[targetStr];
                    }, result);
                },
                progress => {
                    const percent = Number(progress.percent.toFixed(0));

                    if (percent - lastPercent < 10) return;
                    lastPercent = percent;

                    console.log(
                        `   ${progress.completedRuns} / ${progress.totalRuns} (${percent}%) dependencies loaded!`
                    );
                }
            );

            console.log('⏳ Генерируем типы...');
            await fs.writeFileSync('./output.json', JSON.stringify(indexDocument));
            const openApiSchemaParser = new OpenApiParser(indexDocument);
            const parsedSchema = await openApiSchemaParser.parse();

            const typeRenderer = new TypesGenerator(parsedSchema);
            await typeRenderer.parse();

            console.log('✔️ Типы сгенерированы!');

            console.log('⏳ Запускаем eslint --fix...');
            try {
                await runEslintAutoFix('./output');
            } catch (error) {
                console.error(error);
            }

            console.log('✔️ Файлы приведены в соответствие с вашим prettier/eslint!');
        } catch (error) {
            console.error(error);
        }
    }
}
