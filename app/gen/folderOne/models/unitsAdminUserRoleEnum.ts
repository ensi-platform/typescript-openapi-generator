/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Роли. Расшифровка значений:
  * `101` - Администратор
  * `102` - Супер-администратор
  * `106` - Продукт менеджер
  * `103` - Менеджер продавцов
  * `104` - Менеджер клиентов
  * `115` - Администратор магазина
  * `116` - SEO менеджер
  * `120` - OMS. Администратор смены
  * `119` - OMS. Сборщик
  * `111` - OMS. Комплектовщик
  * `113` - OMS. Оператор call-центра
  * `114` - OMS. Сотрудник магазина
  * `112` - OMS. Логист

 */
export type UnitsAdminUserRoleEnum = typeof UnitsAdminUserRoleEnum[keyof typeof UnitsAdminUserRoleEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UnitsAdminUserRoleEnum = {
  NUMBER_101: 101,
  NUMBER_102: 102,
  NUMBER_106: 106,
  NUMBER_103: 103,
  NUMBER_104: 104,
  NUMBER_115: 115,
  NUMBER_116: 116,
  NUMBER_120: 120,
  NUMBER_119: 119,
  NUMBER_111: 111,
  NUMBER_113: 113,
  NUMBER_114: 114,
  NUMBER_112: 112,
} as const;
