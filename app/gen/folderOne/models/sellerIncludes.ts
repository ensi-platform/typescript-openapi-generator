/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { AdminUser } from './adminUser';
import type { Store } from './store';

export interface SellerIncludes {
  manager?: AdminUser;
  stores?: Store[];
}
