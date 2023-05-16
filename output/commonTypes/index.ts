
/**
 * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
 */
export interface FileProtected {}

export interface EmptyDataResponse {
  data: {} | null;
  /**
   * Объект с мета-информацией
   */
  meta?: {};
}

export interface MultipartFileUploadRequest {
  /**
   * Загружаемый файл
   */
  file?: string;
}

export interface IdsObject {
  ids: number[];
}

export interface MassOperationResult {
  data?: {
    processed: number[];
    errors: {
      /**
       * Идентификатор объекта
       */
      id: number;
      /**
       * Текст сообщения об ошибке
       */
      message: string;
    }[];
  } | null;
}

export interface RequestBodyMassOperation {
  /**
   * Идентификаторы целевых сущностей
   */
  ids: number[];
}

