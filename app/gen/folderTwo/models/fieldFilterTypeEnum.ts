/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Типы фильтров по полям. Расшифровка значений:
  * `default` - Обычный фильтр, соответствующий типу поля
  * `like` - Аналогично default, но по подстроке
  * `many` - Фильтр принимает массив значений
  * `range` - Фильтр по диапазону

 */
export type FieldFilterTypeEnum = typeof FieldFilterTypeEnum[keyof typeof FieldFilterTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FieldFilterTypeEnum = {
  default: 'default',
  like: 'like',
  many: 'many',
  range: 'range',
} as const;
