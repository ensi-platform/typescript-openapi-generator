/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodyCursorPagination } from './requestBodyCursorPagination';
import type { RequestBodyOffsetPagination } from './requestBodyOffsetPagination';

export type RequestBodyPagination = RequestBodyCursorPagination | RequestBodyOffsetPagination;
