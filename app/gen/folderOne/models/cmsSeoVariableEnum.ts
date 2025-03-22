/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные виды SEO-переменных:
  * `{название товара}` - название товара (в карточке товара)
  * `{стоимость}` - стоимость товара (в карточке товара)

 */
export type CmsSeoVariableEnum = typeof CmsSeoVariableEnum[keyof typeof CmsSeoVariableEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CmsSeoVariableEnum = {
  '{название_товара}': '{название товара}',
  '{стоимость}': '{стоимость}',
} as const;
