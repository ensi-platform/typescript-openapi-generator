/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные статусы публикации отзыва:
  * `1` - новый
  * `2` - опубликован
  * `3` - отклонен

 */
export type ReviewStatusEnum = typeof ReviewStatusEnum[keyof typeof ReviewStatusEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ReviewStatusEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const;
