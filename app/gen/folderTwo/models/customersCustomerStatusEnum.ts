/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Cтатус покупателя. Расшифровка значений:
  * `1` - Создан
  * `2` - Новый (заполнены телефон и портфолио)
  * `3` - На проверке
  * `4` - Отклонен
  * `5` - Активный
  * `6` - Проблемный
  * `7` - Заблокирован
  * `8` - Потенциальный реферальный партнер
  * `9` - Временно приостановлен

 */
export type CustomersCustomerStatusEnum = typeof CustomersCustomerStatusEnum[keyof typeof CustomersCustomerStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CustomersCustomerStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
  NUMBER_9: 9,
} as const;
