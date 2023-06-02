const regex = /{([^}]+)}/g;

// eslint-disable-next-line no-template-curly-in-string
export const replacePathVariables = (str: string) => str.replaceAll(regex, '${$1}');

/**
 * @example
 * extractPathVariables("/clients/{clientId}/customers/{customerId}:search-something");
 * ["clientId", "customerId"]
 */
export const extractPathVariables = (str: string) => {
    const variables: Set<string> = new Set();

    let match = regex.exec(str);
    while (match !== null) {
        variables.add(match[1]);
        match = regex.exec(str);
    }

    return [...variables.values()];
};
