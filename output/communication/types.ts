import { CommonResponse } from "@api/common/types";
import { EmptyDataResponse } from "@api/commonTypes/index";
import { ErrorResponse } from "@api/commonTypes/errors";

export type DeleteStatusRequest = { id: number | string };

export type DeleteStatusResponse = EmptyDataResponse | ErrorResponse;
export type DeleteThemeRequest = { id: number | string };

export type DeleteThemeResponse = EmptyDataResponse | ErrorResponse;
export type DeleteTypeRequest = { id: number | string };

export type DeleteTypeResponse = EmptyDataResponse | ErrorResponse;
export type DeleteNotificationRequest = { id: number | string };

export type DeleteNotificationResponse = EmptyDataResponse | ErrorResponse;
export type FileUploadRequest = {
                        formData: FormData;
                        
                    }

export type FileUploadResponse = ErrorResponse;
export type DeleteChannelRequest = { id: number | string };

export type DeleteChannelResponse = EmptyDataResponse | ErrorResponse;
export interface CreateBroadcastRequest {
  /**
   * Id юзеров-адресатов
   */
  user_ids?: number[];
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Тема
   */
  theme?: string;
  /**
   * Id типа
   */
  type_id?: number;
  /**
   * Id статуса
   */
  status_id?: number;
  /**
   * Текст сообщения
   */
  message?: string;
  /**
   * Прикрепленные файлы
   */
  files?: string[];
}

export type CreateBroadcastResponse = object;export interface FileDeleteRequest {
  files?: number[];
}

export type FileDeleteResponse = object;export interface SearchStatusesRequest {
  sort?: string[];
  filter?: {};
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
}


        export type SearchStatusesResponseData = ({
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Имя статуса
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * По умолчанию
   */
  default?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {})[];

        export type SearchStatusesResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchStatusesResponse = CommonResponse<SearchStatusesResponseData, SearchStatusesResponseMeta>;
        export type CreateStatusRequest = {
  /**
   * Имя статуса
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * По умолчанию
   */
  default?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};


        export type CreateStatusResponseData = {
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Имя статуса
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * По умолчанию
   */
  default?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};

        export type CreateStatusResponseMeta = {};

        export type CreateStatusResponse = CommonResponse<CreateStatusResponseData, CreateStatusResponseMeta>;
        export type PatchStatusRequest = {
  /**
   * Имя статуса
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * По умолчанию
   */
  default?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
};


        export type PatchStatusResponseData = {
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Имя статуса
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * По умолчанию
   */
  default?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};

        export type PatchStatusResponseMeta = {};

        export type PatchStatusResponse = CommonResponse<PatchStatusResponseData, PatchStatusResponseMeta>;
        export interface SearchThemesRequest {
  sort?: string[];
  filter?: {};
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
}


        export type SearchThemesResponseData = ({
  /**
   * Идентификатор темы
   */
  id?: number;
} & {
  /**
   * Имя темы
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {})[];

        export type SearchThemesResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchThemesResponse = CommonResponse<SearchThemesResponseData, SearchThemesResponseMeta>;
        export type CreateThemeRequest = {
  /**
   * Имя темы
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};


        export type CreateThemeResponseData = {
  /**
   * Идентификатор темы
   */
  id?: number;
} & {
  /**
   * Имя темы
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};

        export type CreateThemeResponseMeta = {};

        export type CreateThemeResponse = CommonResponse<CreateThemeResponseData, CreateThemeResponseMeta>;
        export type PatchThemeRequest = {
  /**
   * Имя темы
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
};


        export type PatchThemeResponseData = {
  /**
   * Идентификатор темы
   */
  id?: number;
} & {
  /**
   * Имя темы
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};

        export type PatchThemeResponseMeta = {};

        export type PatchThemeResponse = CommonResponse<PatchThemeResponseData, PatchThemeResponseMeta>;
        export interface SearchTypesRequest {
  sort?: string[];
  filter?: {};
  include?: string[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
}


        export type SearchTypesResponseData = ({
  /**
   * Идентификатор типа
   */
  id?: number;
} & {
  /**
   * Имя типа
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {})[];

        export type SearchTypesResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchTypesResponse = CommonResponse<SearchTypesResponseData, SearchTypesResponseMeta>;
        export type CreateTypeRequest = {
  /**
   * Имя типа
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};


        export type CreateTypeResponseData = {
  /**
   * Идентификатор типа
   */
  id?: number;
} & {
  /**
   * Имя типа
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};

        export type CreateTypeResponseMeta = {};

        export type CreateTypeResponse = CommonResponse<CreateTypeResponseData, CreateTypeResponseMeta>;
        export type PatchTypeRequest = {
  /**
   * Имя типа
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
};


        export type PatchTypeResponseData = {
  /**
   * Идентификатор типа
   */
  id?: number;
} & {
  /**
   * Имя типа
   */
  name?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Каналы
   */
  channel?: number[];
} & {};

        export type PatchTypeResponseMeta = {};

        export type PatchTypeResponse = CommonResponse<PatchTypeResponseData, PatchTypeResponseMeta>;
        export interface SearchMessagesRequest {
  filter?: {
    /**
     * Id юзера
     */
    user_id?: number;
    /**
     * Id чата
     */
    chat_id?: number;
    /**
     * Тема чата
     */
    "chat.theme_like"?: string;
    /**
     * Id типа чата
     */
    "chat.type_id"?: number;
    /**
     * Непрочитанный админом чат
     */
    "chat.unread_admin"?: boolean;
    /**
     * Дата отправления (От)
     */
    created_at_from?: string;
    /**
     * Дата отправления (До)
     */
    created_at_to?: string;
  };
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
}


        export type SearchMessagesResponseData = ({
  /**
   * Идентификатор сообщения
   */
  id?: number;
  /**
   * Прикрепленные файлы
   */
  files?: {}[];
  /**
   * Дата создания сообщения
   */
  created_at?: string;
} & {
  /**
   * Идентификатор пользователя
   */
  user_id?: number;
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Идентификатор чата
   */
  chat_id?: number;
  /**
   * Содержание сообщения
   */
  text?: string;
} & {})[];

        export type SearchMessagesResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchMessagesResponse = CommonResponse<SearchMessagesResponseData, SearchMessagesResponseMeta>;
        export type CreateMessageRequest = {
  /**
   * Идентификатор пользователя
   */
  user_id?: number;
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Идентификатор чата
   */
  chat_id?: number;
  /**
   * Содержание сообщения
   */
  text?: string;
} & {
  /**
   * Прикрепленные файлы
   */
  files?: string[] | null;
} & {};


        export type CreateMessageResponseData = {
  /**
   * Идентификатор сообщения
   */
  id?: number;
  /**
   * Прикрепленные файлы
   */
  files?: {}[];
  /**
   * Дата создания сообщения
   */
  created_at?: string;
} & {
  /**
   * Идентификатор пользователя
   */
  user_id?: number;
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Идентификатор чата
   */
  chat_id?: number;
  /**
   * Содержание сообщения
   */
  text?: string;
} & {};

        export type CreateMessageResponseMeta = {};

        export type CreateMessageResponse = CommonResponse<CreateMessageResponseData, CreateMessageResponseMeta>;
        export interface SearchNotificationsRequest {
  filter?: {};
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
}


        export type SearchNotificationsResponseData = ({
  /**
   * Идентификатор уведомления
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Id типа
   */
  type?: number;
  /**
   * Тема
   */
  theme?: string;
  /**
   * Отправитель
   */
  sender?: string;
  /**
   * Id канала
   */
  channel?: number;
} & {})[];

        export type SearchNotificationsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchNotificationsResponse = CommonResponse<SearchNotificationsResponseData, SearchNotificationsResponseMeta>;
        export type CreateNotificationRequest = {
  /**
   * Название
   */
  name?: string;
  /**
   * Id типа
   */
  type?: number;
  /**
   * Тема
   */
  theme?: string;
  /**
   * Отправитель
   */
  sender?: string;
  /**
   * Id канала
   */
  channel?: number;
} & {};


        export type CreateNotificationResponseData = {
  /**
   * Идентификатор уведомления
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Id типа
   */
  type?: number;
  /**
   * Тема
   */
  theme?: string;
  /**
   * Отправитель
   */
  sender?: string;
  /**
   * Id канала
   */
  channel?: number;
} & {};

        export type CreateNotificationResponseMeta = {};

        export type CreateNotificationResponse = CommonResponse<CreateNotificationResponseData, CreateNotificationResponseMeta>;
        export type PatchNotificationRequest = {
  /**
   * Название
   */
  name?: string;
  /**
   * Id типа
   */
  type?: number;
  /**
   * Тема
   */
  theme?: string;
  /**
   * Отправитель
   */
  sender?: string;
  /**
   * Id канала
   */
  channel?: number;
};


        export type PatchNotificationResponseData = {
  /**
   * Идентификатор уведомления
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
  /**
   * Id типа
   */
  type?: number;
  /**
   * Тема
   */
  theme?: string;
  /**
   * Отправитель
   */
  sender?: string;
  /**
   * Id канала
   */
  channel?: number;
} & {};

        export type PatchNotificationResponseMeta = {};

        export type PatchNotificationResponse = CommonResponse<PatchNotificationResponseData, PatchNotificationResponseMeta>;
        export interface SearchChannelsRequest {
  filter?: {
    /**
     * Идентификаторы каналов
     */
    id?: number[];
    /**
     * Название или часть названия канала
     */
    name?: string;
  };
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
}


        export type SearchChannelsResponseData = ({
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Имя канала
   */
  name?: string;
})[];

        export type SearchChannelsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchChannelsResponse = CommonResponse<SearchChannelsResponseData, SearchChannelsResponseMeta>;
        export type CreateChannelRequest = {
  /**
   * Имя канала
   */
  name?: string;
} & {};


        export type CreateChannelResponseData = {
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Имя канала
   */
  name?: string;
};

        export type CreateChannelResponseMeta = {};

        export type CreateChannelResponse = CommonResponse<CreateChannelResponseData, CreateChannelResponseMeta>;
        export type PatchChannelRequest = {
  /**
   * Имя канала
   */
  name?: string;
};


        export type PatchChannelResponseData = {
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Имя канала
   */
  name?: string;
};

        export type PatchChannelResponseMeta = {};

        export type PatchChannelResponse = CommonResponse<PatchChannelResponseData, PatchChannelResponseMeta>;
        export interface SearchChatsRequest {
  filter?: {
    /**
     * Тема
     */
    theme_like?: string;
    /**
     * Id типа
     */
    type_id?: number;
    /**
     * Непрочитанное админом
     */
    unread_admin?: boolean;
  };
  include?: "messages"[];
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
}


        export type SearchChatsResponseData = ({
  /**
   * Идентификатор чата
   */
  id?: number;
} & {
  /**
   * Идентификатор пользователя
   */
  user_id?: number;
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Тема чата
   */
  theme?: string;
  /**
   * Id типа чата
   */
  type_id?: number;
} & {
  /**
   * Сообщения из чата
   */
  messages?: ({
    /**
     * Идентификатор сообщения
     */
    id?: number;
    /**
     * Прикрепленные файлы
     */
    files?: {}[];
    /**
     * Дата создания сообщения
     */
    created_at?: string;
  } & {
    /**
     * Идентификатор пользователя
     */
    user_id?: number;
    /**
     * Тип пользователя
     */
    user_type?: number & (1 | 2 | 3);
    /**
     * Идентификатор чата
     */
    chat_id?: number;
    /**
     * Содержание сообщения
     */
    text?: string;
  } & {})[];
})[];

        export type SearchChatsResponseMeta = {
  pagination?:
    | {
        cursor?: string | null;
        limit?: number;
        next_cursor?: string | null;
        previous_cursor?: string | null;
        /**
         * Тип пагинации
         */
        type?: string & "cursor";
      }
    | {
        limit?: number;
        offset?: number;
        total?: number;
        /**
         * Тип пагинации
         */
        type?: string & "offset";
      };
};

        export type SearchChatsResponse = CommonResponse<SearchChatsResponseData, SearchChatsResponseMeta>;
        export type CreateChatRequest = {
  /**
   * Идентификатор пользователя
   */
  user_id?: number;
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Тема чата
   */
  theme?: string;
  /**
   * Id типа чата
   */
  type_id?: number;
} & {};


        export type CreateChatResponseData = {
  /**
   * Идентификатор чата
   */
  id?: number;
} & {
  /**
   * Идентификатор пользователя
   */
  user_id?: number;
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Тема чата
   */
  theme?: string;
  /**
   * Id типа чата
   */
  type_id?: number;
} & {
  /**
   * Сообщения из чата
   */
  messages?: ({
    /**
     * Идентификатор сообщения
     */
    id?: number;
    /**
     * Прикрепленные файлы
     */
    files?: {}[];
    /**
     * Дата создания сообщения
     */
    created_at?: string;
  } & {
    /**
     * Идентификатор пользователя
     */
    user_id?: number;
    /**
     * Тип пользователя
     */
    user_type?: number & (1 | 2 | 3);
    /**
     * Идентификатор чата
     */
    chat_id?: number;
    /**
     * Содержание сообщения
     */
    text?: string;
  } & {})[];
};

        export type CreateChatResponseMeta = {};

        export type CreateChatResponse = CommonResponse<CreateChatResponseData, CreateChatResponseMeta>;
        export interface PatchChatRequest {
  /**
   * Тема чата
   */
  theme?: string;
  /**
   * Id типа чата
   */
  type_id?: number;
}


        export type PatchChatResponseData = {
  /**
   * Идентификатор чата
   */
  id?: number;
} & {
  /**
   * Идентификатор пользователя
   */
  user_id?: number;
  /**
   * Тип пользователя
   */
  user_type?: number & (1 | 2 | 3);
  /**
   * Тема чата
   */
  theme?: string;
  /**
   * Id типа чата
   */
  type_id?: number;
} & {
  /**
   * Сообщения из чата
   */
  messages?: ({
    /**
     * Идентификатор сообщения
     */
    id?: number;
    /**
     * Прикрепленные файлы
     */
    files?: {}[];
    /**
     * Дата создания сообщения
     */
    created_at?: string;
  } & {
    /**
     * Идентификатор пользователя
     */
    user_id?: number;
    /**
     * Тип пользователя
     */
    user_type?: number & (1 | 2 | 3);
    /**
     * Идентификатор чата
     */
    chat_id?: number;
    /**
     * Содержание сообщения
     */
    text?: string;
  } & {})[];
};

        export type PatchChatResponseMeta = {};

        export type PatchChatResponse = CommonResponse<PatchChatResponseData, PatchChatResponseMeta>;
        