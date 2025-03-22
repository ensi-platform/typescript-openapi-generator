/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Timeslot } from './timeslot';

export interface DeliveryFillableProperties {
  /** желаемая дата доставки */
  date?: string;
  timeslot?: Timeslot;
  /**
   * статус отправления из DeliveryStatusEnum
   * @nullable
   */
  status?: number | null;
}
