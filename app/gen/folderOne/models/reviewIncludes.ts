/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Customer } from './customer';
import type { Product0 } from './product0';

export interface ReviewIncludes {
  /** Пользователь, оставивший отзыв */
  customer?: Customer;
  /** Товар, на который оставивлен отзыв */
  product?: Product0;
}
