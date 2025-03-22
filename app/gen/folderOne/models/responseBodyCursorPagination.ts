/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ResponseBodyCursorPaginationType } from './responseBodyCursorPaginationType';

export interface ResponseBodyCursorPagination {
  /** @nullable */
  cursor?: string | null;
  limit?: number;
  /** @nullable */
  next_cursor?: string | null;
  /** @nullable */
  previous_cursor?: string | null;
  /** Pagination type */
  type?: ResponseBodyCursorPaginationType;
}
