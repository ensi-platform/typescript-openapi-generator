/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Службы доставки. Расшифровка значений:
  * `1` - B2Cpl
  * `2` - Boxberry
  * `3` - CDEK
  * `4` - Dostavista
  * `5` - DPD
  * `6` - IML
  * `7` - MaxiPost;
  * `8` - PickPoint;
  * `9` - PONY EXPRESS;
  * `10`- Почта России;

 */
export type LogisticDeliveryServiceEnum = typeof LogisticDeliveryServiceEnum[keyof typeof LogisticDeliveryServiceEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LogisticDeliveryServiceEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
  NUMBER_9: 9,
  NUMBER_10: 10,
} as const;
