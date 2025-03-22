/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Variable } from './variable';

export interface VariablesDictionary {
  /** Тип события из NotificationEventEnum */
  event: number;
  variables: Variable[];
}
