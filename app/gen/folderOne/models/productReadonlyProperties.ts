/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ProductReadonlyPropertiesTariffingVolume } from './productReadonlyPropertiesTariffingVolume';

export interface ProductReadonlyProperties {
  id: number;
  /**
   * Unit of tariffication from CatalogProductTariffingVolumeEnum from PIM
   * @nullable
   */
  tariffing_volume: ProductReadonlyPropertiesTariffingVolume;
  /** @nullable */
  main_image_file: string | null;
  /** Create time */
  created_at: string;
  /** Update time */
  updated_at: string;
}
