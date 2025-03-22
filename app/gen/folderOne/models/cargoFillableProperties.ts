/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CargoFillablePropertiesStatus } from './cargoFillablePropertiesStatus';

export interface CargoFillableProperties {
  status?: CargoFillablePropertiesStatus;
  /** Флаг, что у груза проблемы при отгрузке */
  is_problem?: boolean;
  /** Флаг, что груз отменен */
  is_canceled?: boolean;
  /** Ширина */
  width?: number;
  /** Высота */
  height?: number;
  /** Длина */
  length?: number;
  /** Вес */
  weight?: number;
  /** Последнее сообщение мерчанта о проблеме с отгрузкой */
  shipping_problem_comment?: string;
}
