/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CargoOrderFillablePropertiesStatus } from './cargoOrderFillablePropertiesStatus';

export interface CargoOrderFillableProperties {
  status?: CargoOrderFillablePropertiesStatus;
  /** Идентификатор груза */
  cargo_id?: number;
  /** Идентификатор таймслота */
  timeslot_id?: string;
  /** Дата забора груза */
  timeslot_from?: string;
  /** Дата забора груза */
  timeslot_to?: string;
  /** Дата забора груза */
  date?: string;
}
