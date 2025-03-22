/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Экземпляр меню:
  * `header_main` - Основное меню в хедере
  * `header_help` - Вспомогательное меню в хедере
  * `footer_main` - Основное меню в футере

 */
export type CmsMenuEnum = typeof CmsMenuEnum[keyof typeof CmsMenuEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CmsMenuEnum = {
  header_main: 'header_main',
  header_help: 'header_help',
  footer_main: 'footer_main',
} as const;
