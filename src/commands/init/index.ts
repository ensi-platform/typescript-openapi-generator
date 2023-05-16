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

export default class Init extends Command {
    static description = 'Create a config file';

    static examples = [`$ init`];

    static args = {};

    static flags = {};

    async run(): Promise<void> {
        await Config.create();

        console.log('✔️ Создан файл конфигурации ./openapi-generator.json');
    }
}
