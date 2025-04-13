# typescript-openapi-generator

`typescript-openapi-generator` is a wrapper package around [orval](https://orval.dev/).

## Who is this package for?

This package is intended for frontend developers working with [ENSI](https://ensi.tech).

## What is this package for?

-   **Reducing development time**: With `typescript-openapi-generator`, you don't need to manually write hooks or update types for each API endpoint defined in the OpenAPI specification. It automatically generates the source code for you, significantly reducing development costs.
-   **Simplifying API integration**: The package ensures smooth integration of your API with [react-query](https://tanstack.com/query), simplifying the process of fetching, mutating, and caching API responses, thereby reducing the complexity of data fetching and state management.

## Why is a wrapper needed?

Orval has limitations when working with complex schemas. To address this issue, the package performs preliminary processing: the overall schema is resolved, and then passed to orval for serialization.

## How to use?

### Install the package

```bash
npm i @ensi-platform/typescript-openapi-generator
```

or

```bash
yarn add @ensi-platform/typescript-openapi-generator
```

or

```bash
pnpm i @ensi-platform/typescript-openapi-generator
```

### Initialize the configuration

Run the command:

```
typescript-openapi-generator-init
```

As a result, a file named `typescript-openapi-generator.ts` will be created.

Parameters available for editing in the `typescript-openapi-generator.ts` file:
| Field | Purpose | Example |
|-----------------------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------|
| `cache > input` | Full URL to the `index.yaml` file containing the OpenAPI documentation | `https://admin-gui-backend-master-dev.ensi.tech/api-docs/v1/index.yaml` |
| `cache > output` | Path to the folder where the generated files will be saved | `./output/src/api` |
| `loaderOptions` | Additional loader settings | - |
| `loaderOptions > parseItem` | A method through which all schemas are recursively parsed during loading. If there are issues with the input schema, you can use `parseItem` to handle special cases or set default values. | - |
| `orval` |Orval settings (see [documentation](https://orval.dev/overview)) | - |

### Generate

Save the configuration file and run the command:

```
typescript-openapi-generator-generate
```

> This command recursively scans all references ($ref) in all OpenAPI schema definitions, downloads all files, resolves them into a single file, and passes it to orval for further processing.
