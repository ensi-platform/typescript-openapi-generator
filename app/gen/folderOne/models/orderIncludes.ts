/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Delivery } from './delivery';
import type { Customer } from './customer';
import type { AdminUser } from './adminUser';
import type { OrderFile } from './orderFile';

export interface OrderIncludes {
  deliveries?: Delivery[];
  customer?: Customer;
  responsible?: AdminUser;
  files?: OrderFile[];
}
