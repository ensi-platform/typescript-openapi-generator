/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchBrandsFilter {
  /** Идентификатор(ы) бренда */
  id?: number;
  /** Название или часть названия бренда */
  name_like?: string;
  /** Код или часть кода бренда */
  code_like?: string;
  /** Описание или часть описания бренда */
  description_like?: string;
  is_active?: boolean[];
  /** Дата создания от */
  created_at_gte?: string;
  /** Дата создания до */
  created_at_lte?: string;
  /** Дата обновления от */
  updated_at_gte?: string;
  /** Дата обновления до */
  updated_at_lte?: string;
}
