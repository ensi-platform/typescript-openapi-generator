/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { EnumValue } from './enumValue';

export type FieldEnumInfo = {
  /** Endpoint for which the list of values is available. Example of a query in SearchEnumValuesBody. The response will return the values as EnumValue */
  endpoint?: string;
  values?: EnumValue[];
};
