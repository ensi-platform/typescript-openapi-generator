/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductDraft } from './productDraft';

export interface ProductEvent {
  id: number;
  /** Event ID from ProductEventEnum */
  event_id: number;
  /** Product ID */
  product_id: number;
  /** Created at */
  created_at: string;
  /** Updated at */
  updated_at: string;
  product?: ProductDraft;
}
