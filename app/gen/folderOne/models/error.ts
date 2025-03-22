/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ErrorMeta } from './errorMeta';

export interface Error {
  code: string;
  message: string;
  /** Object with meta-information */
  meta?: ErrorMeta;
}
