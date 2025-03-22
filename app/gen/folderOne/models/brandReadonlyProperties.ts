/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface BrandReadonlyProperties {
  /** Идентификатор бренда */
  id: number;
  /** Дата создания */
  created_at: string;
  /** Дата обновления */
  updated_at: string;
  /**
   * ### URL логотипа.

Для картинки на внешнем ресурсе совпадает с logo_url.
Если картинка загружена на сервер приложения, то в этом поле возвращает URL для публичного доступа к ней, а в
logo_url будет null.

   * @nullable
   */
  image_url: string | null;
  /**
   * ### URL логотипа на внешнем сервере.

Если для бренда была загружена картинка, то при передаче в запросе на обновление данных непустого значения
в этом поле, картинка будет удалена.

   * @nullable
   */
  logo_url: string | null;
}
