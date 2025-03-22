/**
 * Не трогать руками, файлы автогенерируемые
 */

export interface IndexerTimestampReadonlyProperties {
  id: number;
  /** The base name of the index (products, categories) */
  index: string;
  /** The branch where indexing takes place */
  stage: string;
  /** Index hash */
  index_hash: string;
  /** This setting is for the current hash */
  is_current_index: boolean;
  /** This setting is for the current APP_STAGE */
  is_current_stage: boolean;
  /** This setting is for current settings */
  is_current: boolean;
}
