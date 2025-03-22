/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { Product1CategoryIdsItem } from './product1CategoryIdsItem';
import type { Brand1 } from './brand1';
import type { Category1 } from './category1';
import type { Image } from './image';
import type { ProductPropertyValue } from './productPropertyValue';
import type { Nameplate1 } from './nameplate1';
import type { ProductGroup1 } from './productGroup1';
import type { Offer1 } from './offer1';

export interface Product1 {
  /** ID */
  id: number;
  /** Product ID from PIM */
  product_id: number;
  /** Publication allowed */
  allow_publish: boolean;
  /**
   * Main image file
   * @nullable
   */
  main_image_file: string | null;
  /** Category IDs from PIM */
  category_ids: Product1CategoryIdsItem[];
  /**
   * Brand ID from PIM
   * @nullable
   */
  brand_id: number | null;
  /** Name */
  name: string;
  /** CNC code */
  code: string;
  /**
   * Product description
   * @nullable
   */
  description: string | null;
  /** Product type (weight, piece, ...) from the Product Type Enum enumeration */
  type: number;
  /** Article number */
  vendor_code: string;
  /**
   * Barcode
   * @nullable
   */
  barcode: string | null;
  /**
   * Net weight (kg)
   * @nullable
   */
  weight: number | null;
  /**
   * Gross weight (kg)
   * @nullable
   */
  weight_gross: number | null;
  /**
   * Width (mm)
   * @nullable
   */
  width: number | null;
  /**
   * Height (mm)
   * @nullable
   */
  height: number | null;
  /**
   * Length (mm)
   * @nullable
   */
  length: number | null;
  /** Product 18+ */
  is_adult: boolean;
  /** Saved/created during migration of records from master services */
  is_migrated: boolean;
  /**
   * The unit of measurement from the ProductUomEnum enumeration
   * @nullable
   */
  uom: number | null;
  /**
   * The billing unit from the ProductTariffingVolumeEnum transfers
   * @nullable
   */
  tariffing_volume: number | null;
  /**
   * Order step
   * @nullable
   */
  order_step: number | null;
  /**
   * Minimum value for order
   * @nullable
   */
  order_minvol: number | null;
  /** @nullable */
  brand?: Brand1;
  categories?: Category1[];
  images?: Image[];
  product_property_values?: ProductPropertyValue[];
  /** Product nameplates */
  nameplates?: Nameplate1[];
  /**
   * Product gluing, which includes the product
   * @nullable
   */
  product_group?: ProductGroup1;
  /** Product offers */
  offers?: Offer1[];
  /** Product created at */
  created_at: string;
  /** Product updated at */
  updated_at: string;
}
