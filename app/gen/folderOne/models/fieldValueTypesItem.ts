/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { FieldValueTypesItemFieldValue } from './fieldValueTypesItemFieldValue';

export type FieldValueTypesItem = {
  /** Filter type */
  type: string;
  /** Name of the field by which the type is determined */
  field: string;
  /** Field value to which this type corresponds */
  field_value: FieldValueTypesItemFieldValue;
};
