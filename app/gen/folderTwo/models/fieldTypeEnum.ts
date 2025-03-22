/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Типы поля. Расшифровка значений:
  * `string` - Строка
  * `email` - Email
  * `phone` - Телефон
  * `datetime` - Дата со временем
  * `date` - Дата без времени
  * `url` - Ссылка
  * `int` - Целое число
  * `price` - Цена
  * `float` - Число с плавающей точкой
  * `enum` - Перечисление
  * `bool` - Булево
  * `photo` - Фото
  * `image` - Картинка
  * `plural_numeric` - Числовое поле с несколькими типами

 */
export type FieldTypeEnum = typeof FieldTypeEnum[keyof typeof FieldTypeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FieldTypeEnum = {
  string: 'string',
  email: 'email',
  phone: 'phone',
  datetime: 'datetime',
  date: 'date',
  url: 'url',
  int: 'int',
  price: 'price',
  float: 'float',
  enum: 'enum',
  bool: 'bool',
  photo: 'photo',
  image: 'image',
  plural_numeric: 'plural_numeric',
} as const;
