/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Review } from './review';
import type { ReviewResponseMeta } from './reviewResponseMeta';

export interface ReviewResponse {
  data: Review;
  meta?: ReviewResponseMeta;
}
