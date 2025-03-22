/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { EventConditions } from './eventConditions';

export interface StatusSettingFillableProperties {
  /**
   * Код статуса
   * @nullable
   */
  code?: string | null;
  /** Название статуса */
  name?: string;
  /**
   * Цвет статуса
   * @nullable
   */
  color?: string | null;
  /** Тип статуса из ProductStatusTypeEnum */
  type?: number;
  /** Признак активности статуса */
  is_active?: boolean;
  /** Флаг по которому у товара проставляется признак активности для витрины */
  is_publication?: boolean;
  events?: EventConditions;
}
