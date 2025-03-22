/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { EmptyDataResponseData } from './emptyDataResponseData';
import type { EmptyDataResponseMeta } from './emptyDataResponseMeta';

export interface EmptyDataResponse {
  /** @nullable */
  data: EmptyDataResponseData;
  /** Object with meta-information */
  meta?: EmptyDataResponseMeta;
}
