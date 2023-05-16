
export type ProductPimCategoryForCreate = {} & {
  /**
   * Идентификатор продуктовой категории в CMS
   */
  product_category_id?: number | null;
  /**
   * Код категории в ПИМе
   */
  code?: string;
  filters?: ({} & {
    /**
     * Код
     */
    code?: string;
    /**
     * Значение
     */
    value?: string;
  })[];
};

