import { Command } from '@oclif/core';
import fs from 'node:fs';
import path from 'node:path';
import { generate } from 'orval';
import yaml from 'yaml';

import { DuplicateResolver } from '../../classes/DuplicateResolver';
import { Loader } from '../../classes/Loader';
import { RefResolver } from '../../classes/RefResolver';

// setInterval(() => {
//     const memoryUsage = process.memoryUsage();
//     console.log(`
//         Память приложения:
//         Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB
//         Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB
//         RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB
//     `);
// }, 1000);

// export default class Generate extends Command {
//     static description = 'Main entrypoint';

//     static examples = ['$ generate'];

//     static args = {
//         origin: Args.string({ description: 'File path or URL to index.yaml file', required: false }),
//         output_path: Args.string({ description: 'Output root folder', required: false }),
//     };

//     private conf!: ConfigSchema;

//     private async applyArgsToConfig() {
//         const { args } = await this.parse(Generate);

//         if (args.origin) this.conf.openapi_path = args.origin;
//         if (args.output_path) this.conf.output_path = args.output_path;
//     }

//     async run(): Promise<void> {
//         try {
//             this.conf = await Config.load();

//             // Args always override default
//             await this.applyArgsToConfig();

//             const {
//                 openapi_path,
//                 //  targets, override_policies
//             } = this.conf;

//             const loader = getSchemaLoaderForOrigin(openapi_path);
//             const indexDocument = await loader.loadIndex();
//             if (!indexDocument) {
//                 throw new Error('Docuemnt is empty');
//             }

//             console.log('Document loaded', indexDocument.info);
//             console.log('Загружаем зависимые компоненты...');

//             let lastPercent = 0;
//             try {
//                 await traverseAndModify(
//                     indexDocument,
//                     async ref => {
//                         // TODO: apply load.document.before middlewares
//                         const result = await loader.loadJson(ref.absolutePath);
//                         // TODO: apply load.document.after, return result
//                         // console.log(ref.absolutePath);
//                         if (!ref.target) return result;

//                         return ref.target.reduce((acc, targetStr) => {
//                             return acc[targetStr];
//                         }, result);
//                     },
//                     progress => {
//                         const percent = Number(progress.percent.toFixed(0));

//                         if (percent - lastPercent < 10) return;
//                         lastPercent = percent;

//                         console.log(
//                             `   ${progress.completedRuns} / ${progress.totalRuns} (${percent}%) dependencies loaded!`
//                         );
//                     }
//                 );
//             } catch (error) {
//                 console.error('Ошибка при обработке объекта:', error);
//             }

//             // console.log('⏳ Генерируем типы...');
//             await fs.writeFileSync('./output123.json', JSON.stringify(indexDocument));
//             // const openApiSchemaParser = new OpenApiParser(indexDocument);
//             // const parsedSchema = await openApiSchemaParser.parse();

//             // const typeRenderer = new TypesGenerator(parsedSchema);
//             // await typeRenderer.parse();

//             // console.log('✔️ Типы сгенерированы!');

//             // console.log('⏳ Запускаем eslint --fix...');
//             // try {
//             //     await runEslintAutoFix('./output');
//             // } catch (error) {
//             //     console.error(error);
//             // }

//             // console.log('✔️ Файлы приведены в соответствие с вашим prettier/eslint!');
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }

const CACHE_DIR = './cache';
const OPENAPI_URL = 'https://admin-gui-backend-master-dev.ensi.tech/api-docs/v1/index.yaml';
const RESOLVED_SCHEMA_PATH = './cache/api-docs/v1/resolved-schema.yaml';
export default class Generate extends Command {
    async run(): Promise<void> {
        try {
            if (!fs.existsSync(CACHE_DIR)) {
                fs.mkdirSync(CACHE_DIR, { recursive: true });
                console.info(`Created cache directory: ${CACHE_DIR}`);
            }

            const loader = new Loader(OPENAPI_URL, CACHE_DIR);
            console.info('Starting recursive file download...');

            await loader.download();
            const pathname = new URL(OPENAPI_URL).pathname;
            const pathToIndex = path.join(CACHE_DIR, pathname);

            const duplicateResolver = new DuplicateResolver(pathToIndex);

            const duplicateMap = duplicateResolver.resolve();
            const refResolver = new RefResolver(pathToIndex, duplicateMap);

            const resolvedSchema = await refResolver.resolve();

            const yamlString = yaml.stringify(resolvedSchema);
            fs.writeFileSync(RESOLVED_SCHEMA_PATH, yamlString);

            await generate({
                output: {
                    override: {
                        header: () => ['Не трогать руками, файлы автогенерируемые'],

                        /**
                         * /customers/product-subscribes:clear post
                {
                  tags: [ 'customers_preferences' ],
                  operationId: 'searchCustomerPreferences',
                  'x-lg-handler': 'App\\Http\\ApiV1\\Modules\\Customers\\Controllers\\CustomersPreferencesController@search',
                  'x-lg-skip-request-generation': true,
                  summary: 'Поиск предпочтений клиента',
                  description: 'Поиск предпочтений клиента',
                  requestBody: { required: true, content: { 'application/json': [Object] } },
                  responses: {
                    '200': { description: 'Успешный ответ', content: [Object] },
                    '400': { description: 'Bad Request', content: [Object] },
                    '401': { description: 'Unauthorized', content: [Object] },
                    '404': { description: 'Not Found', content: [Object] },
                    '500': { description: 'Internal Server Error', content: [Object] }
                  }
                         */
                        // operationName: (operation: any, route: string, verb: any) => {
                        //   console.log(operation, route, verb);
                        //   return route;
                        // },
                    },
                    mode: 'tags-split', // Разделение кода по тегам
                    // schema: false,
                    target: './app/gen/',
                    schemas: './app/gen/models',
                    client: 'fetch',
                    // baseUrl: 'http://localhost:3000', // Базовый URL API
                    prettier: true, // Форматирование с помощью Prettier
                },
                input: {
                    // validation: true,
                    target: './cache/api-docs/v1/resolved-schema.yaml', // Ссылка на OpenAPI-спецификацию
                    // target:
                    //   'https://admin-gui-backend-master-dev.ensi.tech/api-docs/v1/index.yaml',
                    // override: {
                    //   transformer: './transformer.js',
                    // },
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
}
