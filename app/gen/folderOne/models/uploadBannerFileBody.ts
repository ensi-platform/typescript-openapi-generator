/**
 * Не трогать руками, файлы автогенерируемые
 */

export type UploadBannerFileBody = {
  /** Image type (value from BannerImageTypeEnum) */
  type?: string;
  /** Uploaded file */
  file?: Blob;
};
