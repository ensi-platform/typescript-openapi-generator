/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Пол покупателя. Расшифровка значений:
  * `1` - Женщина
  * `2` - Мужчина

 */
export type CustomersCustomerGenderEnum = typeof CustomersCustomerGenderEnum[keyof typeof CustomersCustomerGenderEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CustomersCustomerGenderEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
