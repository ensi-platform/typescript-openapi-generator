import { Command } from '@oclif/core';

import { Config } from '../../config/Config';

export default class Init extends Command {
    static description = 'Create a config file';

    static examples = ['$ init'];

    static args = {};

    static flags = {};

    async run(): Promise<void> {
        await Config.create();

        console.log('✔️ Создан файл конфигурации ./openapi-generator.json');
    }
}
