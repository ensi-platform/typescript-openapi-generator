# typescript-openapi-generator

`typescript-openapi-generator` — обёртка над [orval](https://orval.dev/).

## Для кого пакет

Для фронтенд-разработчиков, работающих с [ENSI](https://ensi.tech).

## Зачем он нужен

- **Меньше ручной работы**: не нужно вручную писать хуки и обновлять типы под каждый endpoint из OpenAPI — код генерируется автоматически.
- **Проще встраивать API**: интеграция с [react-query](https://tanstack.com/query) — запросы, мутации и кэш без лишней сложности.

## Зачем обёртка над Orval

У Orval есть ограничения на сложные схемы. Пакет сначала разрешает общую схему, затем передаёт результат в Orval для сериализации.

## Как пользоваться

### Установка

Пакет ставьте в **devDependencies** — он нужен для генерации кода, а не в рантайме приложения.

```bash
npm i -D @ensi-platform/typescript-openapi-generator
```

или

```bash
yarn add -D @ensi-platform/typescript-openapi-generator
```

или

```bash
pnpm add -D @ensi-platform/typescript-openapi-generator
```

### Инициализация конфигурации

Выполните:

```
typescript-openapi-generator-init
```

Будет создан файл `typescript-openapi-generator.ts`.

Параметры, которые правят в `typescript-openapi-generator.ts`:

| Поле | Назначение | Пример |
|------|------------|--------|
| `cache > input` | Точка входа OpenAPI: URL `http`/`https`, URL `file://` или путь в ФС (относительные пути считаются от каталога, из которого запускают `typescript-openapi-generator-generate`) | См. [источники входа](#input-sources-cacheinput) |
| `cache > output` | Каталог, куда сохранять сгенерированные файлы | `./output/src/api` |
| `loaderOptions` | Дополнительные настройки загрузчика | — |
| `loaderOptions > parseItem` | Обход схем при загрузке; можно обработать особые случаи или подставить значения по умолчанию | — |
| `orval` | Настройки Orval ([документация](https://orval.dev/overview)) | — |

<a id="input-sources-cacheinput"></a>

### Источники входа (`cache[].input`)

- **Удалённый URL** — как раньше; указывайте корневой файл спеки (например `index.yaml`).
- **Путь в файловой системе** — относительно текущего каталога запуска или абсолютный; внутри инструмент приводит его к `file:` URL.

    ```ts
    // Относительно cwd (удобно в репозитории)
    input: './specs/openapi/index.yaml',

    // Абсолютный путь (macOS / Linux)
    input: '/Users/you/project/specs/openapi/index.yaml',
    ```

- **URL `file://`** — если уже есть file URL или нужен путь в виде URL. Строка должна начинаться с `file://`; нормализация как в Node.js для `file:` URL.

    **macOS / Linux** — после `file:` три слэша для абсолютного пути (`file://` + `/` + путь):

    ```ts
    input: 'file:///Users/you/project/specs/openapi/index.yaml',
    ```

    **Windows** — в URL без обратных слэшей; прямые слэши и форма без хоста `file:///C:/...`:

    ```ts
    input: 'file:///C:/Users/you/project/specs/openapi/index.yaml',
    ```

    Если в пути есть пробелы или другие зарезервированные символы — закодируйте их в строке `file://` (например пробел → `%20`) либо укажите обычный путь в `input` без префикса `file://`.

### Генерация

Сохраните конфиг и выполните:

```
typescript-openapi-generator-generate
```

> Команда обходит все `$ref` в схемах OpenAPI, подтягивает файлы, собирает одну согласованную спецификацию и передаёт её в Orval.
