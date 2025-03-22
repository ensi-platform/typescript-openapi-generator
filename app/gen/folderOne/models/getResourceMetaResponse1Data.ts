/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Field } from './field';

export type GetResourceMetaResponse1Data = {
  fields: Field[];
  /**
   * The code of the field that should be used to display a link to the detail page. This field cannot be hidden by the user
   * @nullable
   */
  detail_link: string | null;
  /** Code of the field that should be sorted by default */
  default_sort: string;
  /** Codes of fields that are output to the table by default */
  default_list: string[];
  /** Field codes that are displayed in the filter by default */
  default_filter: string[];
};
