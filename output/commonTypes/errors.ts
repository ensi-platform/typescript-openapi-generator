
export interface ErrorResponse {
  data: {} | null;
  /**
   * Массив ошибок
   */
  errors: {
    /**
     * Строковый код ошибки
     */
    code: string;
    /**
     * Описание ошибки
     */
    message: string;
    /**
     * Объект с мета-информацией
     */
    meta?: {};
  }[];
  /**
   * Объект с мета-информацией
   */
  meta?: {};
}

