/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodyOffsetPaginationType } from './requestBodyOffsetPaginationType';

export interface RequestBodyOffsetPagination {
  limit?: number;
  offset?: number;
  /** Pagination type */
  type?: RequestBodyOffsetPaginationType;
}
