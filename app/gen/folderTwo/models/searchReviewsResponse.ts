/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Review } from './review';
import type { SearchReviewsResponseMeta } from './searchReviewsResponseMeta';

export interface SearchReviewsResponse {
  data: Review[];
  meta: SearchReviewsResponseMeta;
}
