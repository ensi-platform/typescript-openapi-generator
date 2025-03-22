/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface Variable {
  /** Переменная из NotificationVariableEnum */
  id: string;
  /** Описание переменной */
  title: string;
  items: Variable[];
}
