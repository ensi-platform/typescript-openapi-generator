import { ANY_CONST } from '../constants';

export const hasAnyValue = (value: string) => {
    return value.replaceAll(/\/\*[\S\s]*?\*\//g, '').includes(ANY_CONST);
};
