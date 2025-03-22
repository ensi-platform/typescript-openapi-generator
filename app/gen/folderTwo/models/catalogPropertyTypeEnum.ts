/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Тип данных:
 * `string` - Строка
 * `text` - Текст
 * `integer` - Целое число
 * `double` - Вещественное число
 * `boolean` - Логическое значение
 * `datetime` - Дата и время
 * `image` - Файл картинки
 * `file` - Файл
 * `color` - Цвет

 */
export type CatalogPropertyTypeEnum = typeof CatalogPropertyTypeEnum[keyof typeof CatalogPropertyTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatalogPropertyTypeEnum = {
  string: 'string',
  text: 'text',
  integer: 'integer',
  double: 'double',
  boolean: 'boolean',
  datetime: 'datetime',
  image: 'image',
  file: 'file',
  color: 'color',
} as const;
