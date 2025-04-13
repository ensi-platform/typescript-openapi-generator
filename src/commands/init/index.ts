import { Config } from '../../classes/Config';

export const init = async () => {
    await Config.create();

    console.log('\u001B[32m%s\u001B[0m', '✔️ Configuration file created typescript-openapi-generator.ts');
};
