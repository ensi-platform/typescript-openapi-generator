/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ResponseBodyCursorPagination } from './responseBodyCursorPagination';
import type { ResponseBodyOffsetPagination } from './responseBodyOffsetPagination';

export type ResponseBodyPagination = ResponseBodyCursorPagination | ResponseBodyOffsetPagination;
