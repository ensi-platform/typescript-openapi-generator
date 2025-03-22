/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerAddress0 } from './customerAddress0';
import type { CustomerStatus } from './customerStatus';
import type { User } from './user';

export interface CustomerIncludes {
  addresses?: CustomerAddress0[];
  status?: CustomerStatus;
  user?: User;
}
