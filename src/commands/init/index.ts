import { Config } from '../../classes/Config';

export const init = async () => {
    await Config.create();

    console.log('\u{1B}[32m%s\u{1B}[0m', '✔️ Configuration file created typescript-openapi-generator.ts');
};
