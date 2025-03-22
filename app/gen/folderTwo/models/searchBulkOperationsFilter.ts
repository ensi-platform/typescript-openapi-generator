/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface SearchBulkOperationsFilter {
  /** Идентификатор(ы) массовой операции */
  id?: number;
  /** Идентификатор(ы) статусов из CatalogBulkOperationStatusEnum */
  status?: number;
  /** Идентификатор(ы) действий из CatalogBulkOperationActionEnum */
  action?: string;
  /** Идентификатор(ы) сущностей из CatalogBulkOperationEntityEnum */
  entity?: string;
  /** Дата создания от */
  created_at_gte?: string;
  /** Дата создания до */
  created_at_lte?: string;
  /** Дата обновления от */
  updated_at_gte?: string;
  /** Дата обновления до */
  updated_at_lte?: string;
}
