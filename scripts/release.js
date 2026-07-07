#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = query => new Promise(resolve => rl.question(query, resolve));

const run = (command, options = {}) => {
    console.log(`> ${command}`);
    return execSync(command, { stdio: 'inherit', ...options });
};

const getPackageJson = () => {
    const packageJsonPath = resolve(__dirname, '../package.json');
    const content = readFileSync(packageJsonPath, 'utf-8');
    return { path: packageJsonPath, content: JSON.parse(content) };
};

const savePackageJson = (path, data) => {
    writeFileSync(path, `${JSON.stringify(data, null, 4)}\n`);
};

const bumpVersion = (version, type) => {
    const [major, minor, patch] = version.split('.').map(Number);

    switch (type) {
        case 'major': {
            return `${major + 1}.0.0`;
        }
        case 'minor': {
            return `${major}.${minor + 1}.0`;
        }
        case 'patch':
        default: {
            return `${major}.${minor}.${patch + 1}`;
        }
    }
};

const checkGitStatus = () => {
    try {
        const status = execSync('git status --porcelain', { encoding: 'utf-8' });
        return status.trim();
    } catch (error) {
        console.error('Ошибка при проверке git статуса:', error.message);
        process.exit(1);
    }
};

const main = async () => {
    console.log('🚀 Запуск процесса релиза...\n');

    // Проверяем git статус
    const gitStatus = checkGitStatus();
    if (gitStatus) {
        console.error('❌ Ошибка: есть незакоммиченные изменения:');
        console.error(gitStatus);
        console.error('\nПожалуйста, закоммитьте или сохраните изменения перед релизом.');
        process.exit(1);
    }

    // Проверяем, что мы на master/main ветке
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
    if (currentBranch !== 'master' && currentBranch !== 'main') {
        const proceed = await question(
            `⚠️  Вы не на master/main ветке (текущая: ${currentBranch}). Продолжить? (y/N): `
        );
        if (proceed.toLowerCase() !== 'y') {
            console.log('Релиз отменен.');
            process.exit(0);
        }
    }

    // Получаем текущую версию
    const { path: packageJsonPath, content: packageJson } = getPackageJson();
    const currentVersion = packageJson.version;

    console.log(`📦 Текущая версия: ${currentVersion}\n`);

    // Спрашиваем тип версии
    console.log('Выберите тип обновления версии:');
    console.log('  1) patch — исправления багов (x.x.X)');
    console.log('  2) minor — новые функции (x.X.0)');
    console.log('  3) major — breaking changes (X.0.0)');

    const versionTypeInput = await question('\nВведите номер (1-3) или тип (patch/minor/major) [1]: ');
    const versionTypeMap = { 1: 'patch', 2: 'minor', 3: 'major' };
    const versionType = versionTypeMap[versionTypeInput] || versionTypeInput || 'patch';

    if (!['patch', 'minor', 'major'].includes(versionType)) {
        console.error(`❌ Неверный тип версии: ${versionType}`);
        process.exit(1);
    }

    const newVersion = bumpVersion(currentVersion, versionType);

    console.log(`\n📋 План релиза:`);
    console.log(`   Тип: ${versionType}`);
    console.log(`   Новая версия: ${newVersion}`);

    const confirm = await question('\nПродолжить? (y/N): ');
    if (confirm.toLowerCase() !== 'y') {
        console.log('Релиз отменен.');
        process.exit(0);
    }

    // Обновляем версию в package.json
    console.log('\n📝 Обновление package.json...');
    packageJson.version = newVersion;
    savePackageJson(packageJsonPath, packageJson);

    console.log('\n🧪 Запуск тестов...');
    run('pnpm run test');

    // Собираем проект
    console.log('\n🔨 Сборка проекта...');
    run('pnpm run build');

    // Создаем коммит
    console.log('\n📤 Создание git коммита...');
    run('git add package.json');
    run(`git commit -m "chore(release): v${newVersion}"`);

    // Создаем тег
    console.log('\n🏷️  Создание git тега...');
    run(`git tag -a v${newVersion} -m "Release v${newVersion}"`);

    // Публикуем в npm
    console.log('\n📦 Публикация в npm...');
    run('cd dist && npm publish --access public');

    // Пушим изменения
    console.log('\n🚀 Пуш в репозиторий...');
    run('git push origin HEAD');
    run('git push origin --tags');

    console.log(`\n✅ Релиз v${newVersion} успешно завершен!`);
    console.log(`   npm: https://www.npmjs.com/package/${packageJson.name}/v/${newVersion}`);

    rl.close();
};

main().catch(error => {
    console.error('❌ Ошибка:', error);
    process.exit(1);
});
