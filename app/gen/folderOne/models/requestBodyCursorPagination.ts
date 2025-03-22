/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodyCursorPaginationType } from './requestBodyCursorPaginationType';

export interface RequestBodyCursorPagination {
  /** @nullable */
  cursor?: string | null;
  limit?: number;
  /** Pagination type */
  type?: RequestBodyCursorPaginationType;
}
