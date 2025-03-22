/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Address2 } from './address2';

export interface StoreFillableProperties {
  /**
   * ID продавца
   * @nullable
   */
  seller_id?: number | null;
  /**
   * ID склада у продавца
   * @nullable
   */
  xml_id?: string | null;
  /** Флаг активности склада */
  active?: boolean;
  /** Название */
  name?: string;
  address?: Address2;
  /** Часовой пояс */
  timezone?: string;
}
