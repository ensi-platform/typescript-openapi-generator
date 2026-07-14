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

const runCapture = (command, options = {}) => execSync(command, { encoding: 'utf-8', ...options }).trim();

const run = (command, options = {}) => {
    console.log(`> ${command}`);
    return execSync(command, { stdio: 'inherit', ...options });
};

const tagExists = tag => {
    try {
        runCapture(`git rev-parse refs/tags/${tag}`);
        return true;
    } catch {
        return false;
    }
};

const remoteTagExists = tag => {
    try {
        return runCapture(`git ls-remote --tags origin refs/tags/${tag}`).length > 0;
    } catch {
        return false;
    }
};

const assertReleaseTagIsFree = version => {
    const tagName = `v${version}`;
    const conflicts = [];

    if (tagExists(tagName)) {
        conflicts.push(`локальный тег ${tagName}`);
    }

    if (remoteTagExists(tagName)) {
        conflicts.push(`удалённый тег ${tagName}`);
    }

    if (conflicts.length === 0) {
        return;
    }

    throw new Error(
        `${conflicts.join(', ')} уже существует. Выберите другой тип версии или удалите тег перед релизом.`
    );
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

const getGitStatus = () => {
    try {
        return execSync('git status --porcelain', { encoding: 'utf-8' }).trim();
    } catch (error) {
        console.error('Ошибка при проверке git статуса:', error.message);
        process.exit(1);
    }
};

const stashWorkingTreeIfNeeded = () => {
    const gitStatus = getGitStatus();
    if (!gitStatus) {
        return false;
    }

    console.log('📦 Есть незакоммиченные изменения — stash перед релизом:');
    console.log(gitStatus);
    run('git stash push -u -m "release-script: auto-stash before release"');
    return true;
};

const restoreStashIfNeeded = didStash => {
    if (!didStash) {
        return;
    }

    console.log('\n📦 Восстановление stash...');
    try {
        run('git stash pop');
    } catch (error) {
        console.error('⚠️  Не удалось сделать git stash pop автоматически.');
        console.error('Восстанови вручную: git stash pop');
        console.error('Причина:', error instanceof Error ? error.message : error);
    }
};

const main = async () => {
    console.log('🚀 Запуск процесса релиза...\n');

    const didStash = stashWorkingTreeIfNeeded();

    try {
        // Проверяем, что мы на master/main ветке
        const currentBranch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
        if (currentBranch !== 'master' && currentBranch !== 'main') {
            const proceed = await question(
                `⚠️  Вы не на master/main ветке (текущая: ${currentBranch}). Продолжить? (y/N): `
            );
            if (proceed.toLowerCase() !== 'y') {
                console.log('Релиз отменен.');
                restoreStashIfNeeded(didStash);
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
            restoreStashIfNeeded(didStash);
            process.exit(1);
        }

        const newVersion = bumpVersion(currentVersion, versionType);

        console.log(`\n📋 План релиза:`);
        console.log(`   Тип: ${versionType}`);
        console.log(`   Новая версия: ${newVersion}`);

        const confirm = await question('\nПродолжить? (y/N): ');
        if (confirm.toLowerCase() !== 'y') {
            console.log('Релиз отменен.');
            restoreStashIfNeeded(didStash);
            process.exit(0);
        }

        assertReleaseTagIsFree(newVersion);

        // Обновляем версию в package.json
        console.log('\n📝 Обновление package.json...');
        packageJson.version = newVersion;
        savePackageJson(packageJsonPath, packageJson);

        console.log('\n🧪 Запуск тестов...');
        run('pnpm run test');

        // Собираем проект
        console.log('\n🔨 Сборка проекта...');
        run('pnpm run build');

        // Публикуем в npm до git commit/tag — иначе при ошибке publish остаются git-артефакты без пакета
        console.log('\n📦 Публикация в npm...');
        run('cd dist && npm publish --access public');

        const tagName = `v${newVersion}`;

        try {
            // Создаем коммит
            console.log('\n📤 Создание git коммита...');
            run('git add package.json');
            run(`git commit -m "chore(release): v${newVersion}"`);

            // Создаем тег
            console.log('\n🏷️  Создание git тега...');
            if (tagExists(tagName)) {
                const tagCommit = runCapture(`git rev-parse refs/tags/${tagName}^{commit}`);
                const headCommit = runCapture('git rev-parse HEAD');

                if (tagCommit === headCommit) {
                    console.log(`ℹ️  Тег ${tagName} уже указывает на текущий коммит, пропускаем.`);
                } else {
                    throw new Error(`Тег ${tagName} уже существует на другом коммите.`);
                }
            } else {
                run(`git tag -a ${tagName} -m "Release ${tagName}"`);
            }

            // Пушим изменения
            console.log('\n🚀 Пуш в репозиторий...');
            run('git push origin HEAD');
            run('git push origin --tags');
        } catch (error) {
            console.error('\n❌ Git-шаги упали, но пакет уже опубликован в npm.');
            console.error(`   npm: https://www.npmjs.com/package/${packageJson.name}/v/${newVersion}`);
            console.error('Добей git руками:');
            console.error('  git add package.json');
            console.error(`  git commit -m "chore(release): v${newVersion}"`);
            console.error(`  git tag -a ${tagName} -m "Release ${tagName}"`);
            console.error('  git push origin HEAD');
            console.error('  git push origin --tags');
            console.error('\nПричина:', error instanceof Error ? error.message : error);
            restoreStashIfNeeded(didStash);
            process.exit(1);
        }

        console.log(`\n✅ Релиз v${newVersion} успешно завершен!`);
        console.log(`   npm: https://www.npmjs.com/package/${packageJson.name}/v/${newVersion}`);
    } catch (error) {
        restoreStashIfNeeded(didStash);
        throw error;
    }

    restoreStashIfNeeded(didStash);
    rl.close();
};

main().catch(error => {
    console.error('❌ Ошибка:', error);
    process.exit(1);
});
