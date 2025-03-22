/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CmsMenuEnum } from './cmsMenuEnum';

export interface MenuReadonlyProperties {
  /** Идентификатор */
  id: number;
  /** Название */
  name: string;
  /** Код (значение из CmsMenuEnum) */
  code: CmsMenuEnum;
}
