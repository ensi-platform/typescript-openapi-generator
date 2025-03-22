/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface ProductAttributeValueEditProperties {
  /** Идентификатор предварительно загруженного файла. Допустим только для атрибутов типа IMAGE. Если установлен, то поля value и directory_value_id должны отсутствовать. Поле name может быть задано, например, для описания картинки.
 */
  preload_file_id?: number;
  /** Отметить атрибут на удаление. */
  mark_to_delete?: boolean;
}
