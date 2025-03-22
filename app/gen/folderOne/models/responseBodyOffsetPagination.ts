/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ResponseBodyOffsetPaginationType } from './responseBodyOffsetPaginationType';

export interface ResponseBodyOffsetPagination {
  limit?: number;
  offset?: number;
  total?: number;
  /** Pagination type */
  type?: ResponseBodyOffsetPaginationType;
}
