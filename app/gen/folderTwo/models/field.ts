/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FieldValueTypesItem } from './fieldValueTypesItem';
import type { FieldEnumInfo } from './fieldEnumInfo';

export interface Field {
  /** Field symbol code */
  code: string;
  /** Field name */
  name: string;
  /** Whether the field is available for output to the table */
  list: boolean;
  /** Field type from FieldTypeEnum */
  type: string;
  /** The field is nested in a related object */
  is_object: boolean;
  /** The field is an array */
  is_array: boolean;
  /**
   * Include code by which the linked object can be loaded
   * @nullable
   */
  include: string | null;
  /** Type values, to display a field with multiple types */
  value_types?: FieldValueTypesItem[];
  enum_info?: FieldEnumInfo;
  /** Whether the field is available for sorting */
  sort: boolean;
  /** Key to be passed to sort on this field */
  sort_key?: string;
  /**
   * Filter type on the given field from FieldFilterTypeEnum
   * @nullable
   */
  filter: string | null;
  /** If the range filter type is the key under which the FROM value is to be passed */
  filter_range_key_from?: string;
  /** If filter type by range - the key under which the value TO is to be transferred */
  filter_range_key_to?: string;
  /** If the filter type is regular - the key under which the value should be transferred */
  filter_key?: string;
}
