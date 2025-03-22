/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface FailedJobProperties2 {
  id: number;
  /** Job uuid */
  uuid: string;
  connection: string;
  queue: string;
  /** Full message payload */
  payload: string;
  /** Exception (with stack trace) */
  exception: string;
  failed_at: string;
}
