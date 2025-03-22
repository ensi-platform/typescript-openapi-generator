/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface BannerReadonlyProperties {
  /** Идентификатор */
  id: number;
  /** Код баннера */
  code: string;
  /**
   * Ссылка на декстоп изображение
   * @nullable
   */
  desktop_image: string | null;
  /**
   * Ссылка на мобильное изображение
   * @nullable
   */
  mobile_image: string | null;
  /**
   * Идентификатор кнопки
   * @nullable
   */
  button_id: number | null;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
}
