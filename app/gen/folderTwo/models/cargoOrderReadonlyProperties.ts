/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface CargoOrderReadonlyProperties {
  /** id */
  id: number;
  /** Номер заявки СДЭК на вызов курьера */
  cdek_intake_number: string;
  /** Номер заявки во внешней системе */
  external_id: string;
  /** Текст последней ошибки при создании заявки на вызов курьера для забора груза в службе доставки */
  error_external_id: string;
}
