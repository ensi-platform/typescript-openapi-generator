/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { BannerButtonForCreate } from './bannerButtonForCreate';

export interface BannerFillableProperties {
  /** Название */
  name?: string;
  /** Активность */
  is_active?: boolean;
  /** Значение сортировки */
  sort?: number;
  /**
   * Ссылка
   * @nullable
   */
  url?: string | null;
  /**
   * Идентификатор типа
   * @nullable
   */
  type_id?: number | null;
  button?: BannerButtonForCreate;
}
