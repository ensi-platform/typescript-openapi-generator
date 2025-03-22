/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { VariablesDictionary } from './variablesDictionary';
import type { VariablesResponseMeta } from './variablesResponseMeta';

export interface VariablesResponse {
  data: VariablesDictionary[];
  meta?: VariablesResponseMeta;
}
