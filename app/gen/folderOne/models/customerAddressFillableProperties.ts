/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CustomerAddressFillablePropertiesAddress } from './customerAddressFillablePropertiesAddress';

export interface CustomerAddressFillableProperties {
  /** Идентификатор клиента */
  customer_id?: number;
  /** Является адресом по-умолчанию */
  default?: boolean;
  address?: CustomerAddressFillablePropertiesAddress;
}
