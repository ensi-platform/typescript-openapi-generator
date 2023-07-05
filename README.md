# typescript-openapi-generator

`typescript-openapi-generator` это пакет, который генерирует файлы с typescript определениями и файлы с хуками [react-query](https://tanstack.com/query) из определений [OpenAPI](https://spec.openapis.org/oas/v3.1.0) для работы с API в рамках платформы [ENSI](ensi.tech).

## Для кого этот пакет нужен?
Для frontend разработчиков, работающих с [ENSI](ensi.tech).

## Для чего этот пакет нужен?

- Сокращает время разработки: с помощью `typescript-openapi-generator` вам не нужно вручную писать хуки или обновлять типы для каждого API эндпоинта, определенной в спецификации OpenAPI. Он автоматически генерирует исходный код для вас, сокращая затраты на разработку.
- Обеспечивает согласованность API: `typescript-openapi-generator` гарантирует, что сгенерированные хуки и типы соответствуют спецификации OpenAPI, поскольку он напрямую полагается на спецификацию для генерации кода.
- Упрощает интеграцию API: обеспечивая плавную интеграцию вашего API с react-query, пакет упрощает процесс фетчинга, мутирования и кэширования ответов API, снижая сложность выборки данных и управления состоянием.

## Как использовать?

1. Установите пакет с помощью npm
```
npm i -g @ensi/typescript-openapi-generator
```
или yarn
```
yarn global add @ensi/typescript-openapi-generator
```

2. Перейдите в существующий, или создайте проект [admin-gui-frontend](https://gitlab.com/greensight/ensi/admin-gui/admin-gui-frontend/)

3. Запустите команду:
```
yarn ts-openapi-gen init
```

В результате будет создан файл `openapi-generator.json`

Параметры, доступные для редактирования в файле `openapi-generator.json`:
|Поле  |Назначение  | Пример|
|--|--|--|
|openapi_path  |Полный URL до index.yaml с openapi-документацией  |https://admin-gui-backend-master-dev.ensi.tech/api-docs/v1/index.yaml|
|output_path|Путь до папки, где будут сгенерированы файлы|./output/src/api
|targets|Набор включенных плагинов. В данный момент доступно только `["react-query"]`
|override_policies|Политика перезаписи. Словарь, где ключ - плагин, а значение одна из политик. В данный момент существуют политики: `"override"` - полная перезапись файла и `"skip"`- игнорирование существующих файлов|`{"react-query": "skip","types": "override"}`

Для react-query по ключу `react-query` можно так же изменить некоторые настройки:
|Поле в объекте `react-query` |Назначение  | Пример|
|--|--|--|
|imports|Массив дополнительных импортов в каждом файле с хуками|`[{ "from": "@api/client", "name": "useAuthApiClient"}]`
|hooks|Массив дополнительных строк кода в теле каждого хука|`["const apiClient = useAuthApiClient();"]`
|api_client_name|Название переменной экземпляра класса APIClient|`apiClient`
|generate_invalidations|Включить эвристическое определение ключей поисковых запросов, [подлежащих инвалидации](https://tanstack.com/query/latest/docs/react/guides/invalidations-from-mutations)|`true`

4. Сохраните файл конфигурации и напишите команду:
```
yarn ts-openapi-gen generate
```

Дождитесь окончания программы, и изучите содержимое папки, указанной в `output_path`.

> Рекомендуется использовать типы как есть, и всегда выставлять в
> `override_policies` для `types` значение  `override`. Однако хуки
> могут являться частью бизнес-логики, или требовать вспомогательных
> действий. Поэтому считайте, что фича с генерацией хуков предназначена для упрощения создания нового раздела, но не для полной автоматизации.
