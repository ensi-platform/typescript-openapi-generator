import { CommonResponse } from "@api/common/types";
import { SearchEnumValuesBody, GetResourceMetaResponse } from "@api/commonTypes/resource-meta";
import { ErrorResponse } from "@api/commonTypes/errors";
import { EmptyDataResponse } from "@api/commonTypes/index";



export type GetCustomerMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type SearchCustomerEnumValuesRequest = SearchEnumValuesBody;

export type SearchCustomerEnumValuesResponse = ErrorResponse;
export type DeleteCustomerRequest = { id: number | string };

export type DeleteCustomerResponse = EmptyDataResponse | ErrorResponse;
export type DeleteCustomerPersonalDataRequest = { id: number | string };

export type DeleteCustomerPersonalDataResponse = EmptyDataResponse | ErrorResponse;
export type SearchCustomerUserEnumValuesRequest = SearchEnumValuesBody;

export type SearchCustomerUserEnumValuesResponse = ErrorResponse;
export type DeleteCustomerUserRequest = { id: number | string };

export type DeleteCustomerUserResponse = EmptyDataResponse | ErrorResponse;
export type CustomerUserRefreshPasswordTokenRequest = { id: number | string };

export type CustomerUserRefreshPasswordTokenResponse = EmptyDataResponse | ErrorResponse;
export type DeleteCustomerAddressRequest = { id: number | string };

export type DeleteCustomerAddressResponse = EmptyDataResponse | ErrorResponse;
export type SetCustomerAddressesAsDefaultRequest = { id: number | string };

export type SetCustomerAddressesAsDefaultResponse = EmptyDataResponse | ErrorResponse;
export type SearchCustomerStatusEnumValuesRequest = SearchEnumValuesBody;

export type SearchCustomerStatusEnumValuesResponse = ErrorResponse;
export type DeleteCustomerStatusRequest = { id: number | string };

export type DeleteCustomerStatusResponse = EmptyDataResponse | ErrorResponse;
export type DeleteCustomerAttributeRequest = { id: number | string };

export type DeleteCustomerAttributeResponse = EmptyDataResponse | ErrorResponse;
export type DeleteCustomersInfoRequest = { id: number | string };

export type DeleteCustomersInfoResponse = EmptyDataResponse | ErrorResponse;
export type DeleteBonusOperationRequest = { id: number | string };

export type DeleteBonusOperationResponse = EmptyDataResponse | ErrorResponse;

export type GetCustomerOrderMetaResponse = GetResourceMetaResponse | ErrorResponse;
export interface DeleteProductFromCustomerFavoritesRequest {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
}

export type DeleteProductFromCustomerFavoritesResponse = EmptyDataResponse | ErrorResponse;
export interface ClearCustomerFavoritesRequest {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
}

export type ClearCustomerFavoritesResponse = EmptyDataResponse | ErrorResponse;
export interface DeleteProductFromProductSubscribesRequest {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
}

export type DeleteProductFromProductSubscribesResponse = EmptyDataResponse | ErrorResponse;
export interface ClearCustomerProductSubscribesRequest {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
}

export type ClearCustomerProductSubscribesResponse = EmptyDataResponse | ErrorResponse;


        export type GetCustomerResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
  avatar?: string | null;
  delete_request?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {
  addresses?: ({
    /**
     * Идентификатор адреса
     */
    id?: number;
  } & {
    /**
     * Идентификатор клиента
     */
    customer_id?: number;
    /**
     * Строка с полным описанием адреса
     */
    address_string?: string;
    /**
     * Является адресом по-умолчанию
     */
    default?: boolean;
    post_index?: string | null;
    country_code?: string | null;
    region?: string | null;
    region_guid?: string | null;
    area?: string | null;
    area_guid?: string | null;
    city?: string | null;
    /**
     * Код ФИАС города
     */
    city_guid?: string;
    street?: string | null;
    house?: string | null;
    block?: string | null;
    porch?: string | null;
    intercom?: string | null;
    floor?: string | null;
    flat?: string | null;
    comment?: string | null;
    geo_lat?: number | null;
    geo_lon?: number | null;
  })[];
  status?: {
    /**
     * Идентификатор статуса
     */
    id?: number;
  } & {
    /**
     * Название статуса
     */
    name?: string;
  };
  attributes?: ({
    /**
     * Идентификатор свойства
     */
    id?: number;
  } & {
    /**
     * Название свойства
     */
    name?: string;
  })[];
  user?: {
    /**
     * Идентификатор пользователя
     */
    id?: number;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
  };
} & {};

        export type GetCustomerResponseMeta = {
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

        export type GetCustomerResponse = CommonResponse<GetCustomerResponseData, GetCustomerResponseMeta>;
        export type UploadCustomerAvatarRequest = {
                        formData: FormData;
                        id: number | string;
                    }


        export type UploadCustomerAvatarResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
  avatar?: string | null;
  delete_request?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {
  addresses?: ({
    /**
     * Идентификатор адреса
     */
    id?: number;
  } & {
    /**
     * Идентификатор клиента
     */
    customer_id?: number;
    /**
     * Строка с полным описанием адреса
     */
    address_string?: string;
    /**
     * Является адресом по-умолчанию
     */
    default?: boolean;
    post_index?: string | null;
    country_code?: string | null;
    region?: string | null;
    region_guid?: string | null;
    area?: string | null;
    area_guid?: string | null;
    city?: string | null;
    /**
     * Код ФИАС города
     */
    city_guid?: string;
    street?: string | null;
    house?: string | null;
    block?: string | null;
    porch?: string | null;
    intercom?: string | null;
    floor?: string | null;
    flat?: string | null;
    comment?: string | null;
    geo_lat?: number | null;
    geo_lon?: number | null;
  })[];
  status?: {
    /**
     * Идентификатор статуса
     */
    id?: number;
  } & {
    /**
     * Название статуса
     */
    name?: string;
  };
  attributes?: ({
    /**
     * Идентификатор свойства
     */
    id?: number;
  } & {
    /**
     * Название свойства
     */
    name?: string;
  })[];
  user?: {
    /**
     * Идентификатор пользователя
     */
    id?: number;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
  };
} & {};

        export type UploadCustomerAvatarResponseMeta = {
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

        export type UploadCustomerAvatarResponse = CommonResponse<UploadCustomerAvatarResponseData, UploadCustomerAvatarResponseMeta>;
        export type DeleteCustomerAvatarRequest = { id: number | string };


        export type DeleteCustomerAvatarResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
  avatar?: string | null;
  delete_request?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {
  addresses?: ({
    /**
     * Идентификатор адреса
     */
    id?: number;
  } & {
    /**
     * Идентификатор клиента
     */
    customer_id?: number;
    /**
     * Строка с полным описанием адреса
     */
    address_string?: string;
    /**
     * Является адресом по-умолчанию
     */
    default?: boolean;
    post_index?: string | null;
    country_code?: string | null;
    region?: string | null;
    region_guid?: string | null;
    area?: string | null;
    area_guid?: string | null;
    city?: string | null;
    /**
     * Код ФИАС города
     */
    city_guid?: string;
    street?: string | null;
    house?: string | null;
    block?: string | null;
    porch?: string | null;
    intercom?: string | null;
    floor?: string | null;
    flat?: string | null;
    comment?: string | null;
    geo_lat?: number | null;
    geo_lon?: number | null;
  })[];
  status?: {
    /**
     * Идентификатор статуса
     */
    id?: number;
  } & {
    /**
     * Название статуса
     */
    name?: string;
  };
  attributes?: ({
    /**
     * Идентификатор свойства
     */
    id?: number;
  } & {
    /**
     * Название свойства
     */
    name?: string;
  })[];
  user?: {
    /**
     * Идентификатор пользователя
     */
    id?: number;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
  };
} & {};

        export type DeleteCustomerAvatarResponseMeta = {
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

        export type DeleteCustomerAvatarResponse = CommonResponse<DeleteCustomerAvatarResponseData, DeleteCustomerAvatarResponseMeta>;
        


        export type GetCustomerUserResponseData = {
  /**
   * Идентификатор пользователя
   */
  id?: number;
  /**
   * Дата регистрации
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
};

        export type GetCustomerUserResponseMeta = {};

        export type GetCustomerUserResponse = CommonResponse<GetCustomerUserResponseData, GetCustomerUserResponseMeta>;
        


        export type GetCustomerAddressResponseData = {
  /**
   * Идентификатор адреса
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Строка с полным описанием адреса
   */
  address_string?: string;
  /**
   * Является адресом по-умолчанию
   */
  default?: boolean;
  post_index?: string | null;
  country_code?: string | null;
  region?: string | null;
  region_guid?: string | null;
  area?: string | null;
  area_guid?: string | null;
  city?: string | null;
  /**
   * Код ФИАС города
   */
  city_guid?: string;
  street?: string | null;
  house?: string | null;
  block?: string | null;
  porch?: string | null;
  intercom?: string | null;
  floor?: string | null;
  flat?: string | null;
  comment?: string | null;
  geo_lat?: number | null;
  geo_lon?: number | null;
};

        export type GetCustomerAddressResponseMeta = {};

        export type GetCustomerAddressResponse = CommonResponse<GetCustomerAddressResponseData, GetCustomerAddressResponseMeta>;
        


        export type GetCustomerStatusResponseData = {
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Название статуса
   */
  name?: string;
};

        export type GetCustomerStatusResponseMeta = {};

        export type GetCustomerStatusResponse = CommonResponse<GetCustomerStatusResponseData, GetCustomerStatusResponseMeta>;
        


        export type GetCustomerAttributeResponseData = {
  /**
   * Идентификатор свойства
   */
  id?: number;
} & {
  /**
   * Название свойства
   */
  name?: string;
};

        export type GetCustomerAttributeResponseMeta = {};

        export type GetCustomerAttributeResponse = CommonResponse<GetCustomerAttributeResponseData, GetCustomerAttributeResponseMeta>;
        


        export type GetCustomersInfoResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
} & {
  /**
   * Идентификатор пользователя
   */
  customer_id?: number;
  kpi_sku_count?: number | null;
  kpi_sku_price_sum?: number | null;
  kpi_order_count?: number | null;
  kpi_shipment_count?: number | null;
  kpi_delivered_count?: number | null;
  kpi_delivered_sum?: number | null;
  kpi_refunded_count?: number | null;
  kpi_refunded_sum?: number | null;
  kpi_canceled_count?: number | null;
  kpi_canceled_sum?: number | null;
} & {};

        export type GetCustomersInfoResponseMeta = {};

        export type GetCustomersInfoResponse = CommonResponse<GetCustomersInfoResponseData, GetCustomersInfoResponseMeta>;
        


        export type GetBonusOperationResponseData = {
  /**
   * Идентификатор бонусной операции
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  order_number?: number | null;
  /**
   * Количество начисления/списания бонусов (с “-” при списании)
   */
  bonus_amount?: number;
  comment?: string | null;
  activation_date?: string | null;
  expiration_date?: string | null;
} & {};

        export type GetBonusOperationResponseMeta = {};

        export type GetBonusOperationResponse = CommonResponse<GetBonusOperationResponseData, GetBonusOperationResponseMeta>;
        /**
 * Доступные для сортировки поля: `id, email, phone, first_name, last_name, middle_name, birthday, last_visit_date, created_at, updated_at, active`.
 *
 */
export interface SearchCustomersRequest {
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


        export type SearchCustomersResponseData = ({
  /**
   * Идентификатор покупателя
   */
  id?: number;
  avatar?: string | null;
  delete_request?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {
  addresses?: ({
    /**
     * Идентификатор адреса
     */
    id?: number;
  } & {
    /**
     * Идентификатор клиента
     */
    customer_id?: number;
    /**
     * Строка с полным описанием адреса
     */
    address_string?: string;
    /**
     * Является адресом по-умолчанию
     */
    default?: boolean;
    post_index?: string | null;
    country_code?: string | null;
    region?: string | null;
    region_guid?: string | null;
    area?: string | null;
    area_guid?: string | null;
    city?: string | null;
    /**
     * Код ФИАС города
     */
    city_guid?: string;
    street?: string | null;
    house?: string | null;
    block?: string | null;
    porch?: string | null;
    intercom?: string | null;
    floor?: string | null;
    flat?: string | null;
    comment?: string | null;
    geo_lat?: number | null;
    geo_lon?: number | null;
  })[];
  status?: {
    /**
     * Идентификатор статуса
     */
    id?: number;
  } & {
    /**
     * Название статуса
     */
    name?: string;
  };
  attributes?: ({
    /**
     * Идентификатор свойства
     */
    id?: number;
  } & {
    /**
     * Название свойства
     */
    name?: string;
  })[];
  user?: {
    /**
     * Идентификатор пользователя
     */
    id?: number;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
  };
} & {})[];

        export type SearchCustomersResponseMeta = {
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

        export type SearchCustomersResponse = CommonResponse<SearchCustomersResponseData, SearchCustomersResponseMeta>;
        export type CreateCustomerRequest = {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {};


        export type CreateCustomerResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
  avatar?: string | null;
  delete_request?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {
  addresses?: ({
    /**
     * Идентификатор адреса
     */
    id?: number;
  } & {
    /**
     * Идентификатор клиента
     */
    customer_id?: number;
    /**
     * Строка с полным описанием адреса
     */
    address_string?: string;
    /**
     * Является адресом по-умолчанию
     */
    default?: boolean;
    post_index?: string | null;
    country_code?: string | null;
    region?: string | null;
    region_guid?: string | null;
    area?: string | null;
    area_guid?: string | null;
    city?: string | null;
    /**
     * Код ФИАС города
     */
    city_guid?: string;
    street?: string | null;
    house?: string | null;
    block?: string | null;
    porch?: string | null;
    intercom?: string | null;
    floor?: string | null;
    flat?: string | null;
    comment?: string | null;
    geo_lat?: number | null;
    geo_lon?: number | null;
  })[];
  status?: {
    /**
     * Идентификатор статуса
     */
    id?: number;
  } & {
    /**
     * Название статуса
     */
    name?: string;
  };
  attributes?: ({
    /**
     * Идентификатор свойства
     */
    id?: number;
  } & {
    /**
     * Название свойства
     */
    name?: string;
  })[];
  user?: {
    /**
     * Идентификатор пользователя
     */
    id?: number;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
  };
} & {};

        export type CreateCustomerResponseMeta = {
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

        export type CreateCustomerResponse = CommonResponse<CreateCustomerResponseData, CreateCustomerResponseMeta>;
        export type ReplaceCustomerRequest = {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {};


        export type ReplaceCustomerResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
  avatar?: string | null;
  delete_request?: string | null;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  user_id?: number | null;
  status_id?: number | null;
  manager_id?: number | null;
  yandex_metric_id?: string | null;
  google_analytics_id?: string | null;
  attribute_ids?: unknown[] | null;
  /**
   * Активность пользователя
   */
  active?: boolean;
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  gender?: number | null;
  /**
   * Пользователь создан администратором
   */
  create_by_admin?: boolean;
  city?: string | null;
  birthday?: string | null;
  last_visit_date?: string | null;
  comment_status?: string | null;
  /**
   * Временная зона
   */
  timezone?: string;
  /**
   * Удалены ли данные пользователя
   */
  is_deleted?: boolean;
  error_delete?: string | null;
} & {
  addresses?: ({
    /**
     * Идентификатор адреса
     */
    id?: number;
  } & {
    /**
     * Идентификатор клиента
     */
    customer_id?: number;
    /**
     * Строка с полным описанием адреса
     */
    address_string?: string;
    /**
     * Является адресом по-умолчанию
     */
    default?: boolean;
    post_index?: string | null;
    country_code?: string | null;
    region?: string | null;
    region_guid?: string | null;
    area?: string | null;
    area_guid?: string | null;
    city?: string | null;
    /**
     * Код ФИАС города
     */
    city_guid?: string;
    street?: string | null;
    house?: string | null;
    block?: string | null;
    porch?: string | null;
    intercom?: string | null;
    floor?: string | null;
    flat?: string | null;
    comment?: string | null;
    geo_lat?: number | null;
    geo_lon?: number | null;
  })[];
  status?: {
    /**
     * Идентификатор статуса
     */
    id?: number;
  } & {
    /**
     * Название статуса
     */
    name?: string;
  };
  attributes?: ({
    /**
     * Идентификатор свойства
     */
    id?: number;
  } & {
    /**
     * Название свойства
     */
    name?: string;
  })[];
  user?: {
    /**
     * Идентификатор пользователя
     */
    id?: number;
    /**
     * Дата регистрации
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
  };
} & {};

        export type ReplaceCustomerResponseMeta = {
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

        export type ReplaceCustomerResponse = CommonResponse<ReplaceCustomerResponseData, ReplaceCustomerResponseMeta>;
        export interface SearchCustomerUsersRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор пользователя
     */
    id?: number | null;
    /**
     * Логин
     */
    login?: string | null;
    /**
     * Активен
     */
    active?: boolean | null;
  };
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


        export type SearchCustomerUsersResponseData = ({
  /**
   * Идентификатор пользователя
   */
  id?: number;
  /**
   * Дата регистрации
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
})[];

        export type SearchCustomerUsersResponseMeta = {
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

        export type SearchCustomerUsersResponse = CommonResponse<SearchCustomerUsersResponseData, SearchCustomerUsersResponseMeta>;
        export interface SearchOneCustomerUserRequest {
  sort?: string[];
  filter?: {
    id?: number | null;
    login?: string | null;
    active?: boolean | null;
  };
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


        export type SearchOneCustomerUserResponseData = {
  /**
   * Идентификатор пользователя
   */
  id?: number;
  /**
   * Дата регистрации
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
};

        export type SearchOneCustomerUserResponseMeta = {};

        export type SearchOneCustomerUserResponse = CommonResponse<SearchOneCustomerUserResponseData, SearchOneCustomerUserResponseMeta>;
        export type CreateCustomerUserRequest = {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
} & {
  /**
   * Пароль
   */
  password?: string;
} & {};


        export type CreateCustomerUserResponseData = {
  /**
   * Идентификатор пользователя
   */
  id?: number;
  /**
   * Дата регистрации
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
};

        export type CreateCustomerUserResponseMeta = {};

        export type CreateCustomerUserResponse = CommonResponse<CreateCustomerUserResponseData, CreateCustomerUserResponseMeta>;
        export type PatchCustomerUserRequest = {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
} & {
  /**
   * Пароль
   */
  password?: string;
};


        export type PatchCustomerUserResponseData = {
  /**
   * Идентификатор пользователя
   */
  id?: number;
  /**
   * Дата регистрации
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
};

        export type PatchCustomerUserResponseMeta = {};

        export type PatchCustomerUserResponse = CommonResponse<PatchCustomerUserResponseData, PatchCustomerUserResponseMeta>;
        export interface SearchCustomerAddressesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор
     */
    id?: number | null;
    /**
     * Идентификатор пользователя
     */
    customer_id?: number | null;
    /**
     * Адрес по умолчанию
     */
    default?: boolean | null;
  };
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


        export type SearchCustomerAddressesResponseData = ({
  /**
   * Идентификатор адреса
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Строка с полным описанием адреса
   */
  address_string?: string;
  /**
   * Является адресом по-умолчанию
   */
  default?: boolean;
  post_index?: string | null;
  country_code?: string | null;
  region?: string | null;
  region_guid?: string | null;
  area?: string | null;
  area_guid?: string | null;
  city?: string | null;
  /**
   * Код ФИАС города
   */
  city_guid?: string;
  street?: string | null;
  house?: string | null;
  block?: string | null;
  porch?: string | null;
  intercom?: string | null;
  floor?: string | null;
  flat?: string | null;
  comment?: string | null;
  geo_lat?: number | null;
  geo_lon?: number | null;
})[];

        export type SearchCustomerAddressesResponseMeta = {
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

        export type SearchCustomerAddressesResponse = CommonResponse<SearchCustomerAddressesResponseData, SearchCustomerAddressesResponseMeta>;
        export type CreateCustomerAddressRequest = {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Строка с полным описанием адреса
   */
  address_string?: string;
  /**
   * Является адресом по-умолчанию
   */
  default?: boolean;
  post_index?: string | null;
  country_code?: string | null;
  region?: string | null;
  region_guid?: string | null;
  area?: string | null;
  area_guid?: string | null;
  city?: string | null;
  /**
   * Код ФИАС города
   */
  city_guid?: string;
  street?: string | null;
  house?: string | null;
  block?: string | null;
  porch?: string | null;
  intercom?: string | null;
  floor?: string | null;
  flat?: string | null;
  comment?: string | null;
  geo_lat?: number | null;
  geo_lon?: number | null;
} & {};


        export type CreateCustomerAddressResponseData = {
  /**
   * Идентификатор адреса
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Строка с полным описанием адреса
   */
  address_string?: string;
  /**
   * Является адресом по-умолчанию
   */
  default?: boolean;
  post_index?: string | null;
  country_code?: string | null;
  region?: string | null;
  region_guid?: string | null;
  area?: string | null;
  area_guid?: string | null;
  city?: string | null;
  /**
   * Код ФИАС города
   */
  city_guid?: string;
  street?: string | null;
  house?: string | null;
  block?: string | null;
  porch?: string | null;
  intercom?: string | null;
  floor?: string | null;
  flat?: string | null;
  comment?: string | null;
  geo_lat?: number | null;
  geo_lon?: number | null;
};

        export type CreateCustomerAddressResponseMeta = {};

        export type CreateCustomerAddressResponse = CommonResponse<CreateCustomerAddressResponseData, CreateCustomerAddressResponseMeta>;
        export type ReplaceCustomerAddressRequest = {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Строка с полным описанием адреса
   */
  address_string?: string;
  /**
   * Является адресом по-умолчанию
   */
  default?: boolean;
  post_index?: string | null;
  country_code?: string | null;
  region?: string | null;
  region_guid?: string | null;
  area?: string | null;
  area_guid?: string | null;
  city?: string | null;
  /**
   * Код ФИАС города
   */
  city_guid?: string;
  street?: string | null;
  house?: string | null;
  block?: string | null;
  porch?: string | null;
  intercom?: string | null;
  floor?: string | null;
  flat?: string | null;
  comment?: string | null;
  geo_lat?: number | null;
  geo_lon?: number | null;
} & {};


        export type ReplaceCustomerAddressResponseData = {
  /**
   * Идентификатор адреса
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Строка с полным описанием адреса
   */
  address_string?: string;
  /**
   * Является адресом по-умолчанию
   */
  default?: boolean;
  post_index?: string | null;
  country_code?: string | null;
  region?: string | null;
  region_guid?: string | null;
  area?: string | null;
  area_guid?: string | null;
  city?: string | null;
  /**
   * Код ФИАС города
   */
  city_guid?: string;
  street?: string | null;
  house?: string | null;
  block?: string | null;
  porch?: string | null;
  intercom?: string | null;
  floor?: string | null;
  flat?: string | null;
  comment?: string | null;
  geo_lat?: number | null;
  geo_lon?: number | null;
};

        export type ReplaceCustomerAddressResponseMeta = {};

        export type ReplaceCustomerAddressResponse = CommonResponse<ReplaceCustomerAddressResponseData, ReplaceCustomerAddressResponseMeta>;
        export interface SearchCustomerStatusesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор записи
     */
    id?: number | null;
  };
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


        export type SearchCustomerStatusesResponseData = ({
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Название статуса
   */
  name?: string;
})[];

        export type SearchCustomerStatusesResponseMeta = {
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

        export type SearchCustomerStatusesResponse = CommonResponse<SearchCustomerStatusesResponseData, SearchCustomerStatusesResponseMeta>;
        export type CreateCustomerStatusRequest = {
  /**
   * Название статуса
   */
  name?: string;
} & {};


        export type CreateCustomerStatusResponseData = {
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Название статуса
   */
  name?: string;
};

        export type CreateCustomerStatusResponseMeta = {};

        export type CreateCustomerStatusResponse = CommonResponse<CreateCustomerStatusResponseData, CreateCustomerStatusResponseMeta>;
        export type PatchCustomerStatusRequest = {
  /**
   * Название статуса
   */
  name?: string;
} & {};


        export type PatchCustomerStatusResponseData = {
  /**
   * Идентификатор статуса
   */
  id?: number;
} & {
  /**
   * Название статуса
   */
  name?: string;
};

        export type PatchCustomerStatusResponseMeta = {};

        export type PatchCustomerStatusResponse = CommonResponse<PatchCustomerStatusResponseData, PatchCustomerStatusResponseMeta>;
        export interface SearchCustomerAttributesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор записи
     */
    id?: number | null;
  };
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


        export type SearchCustomerAttributesResponseData = ({
  /**
   * Идентификатор свойства
   */
  id?: number;
} & {
  /**
   * Название свойства
   */
  name?: string;
})[];

        export type SearchCustomerAttributesResponseMeta = {
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

        export type SearchCustomerAttributesResponse = CommonResponse<SearchCustomerAttributesResponseData, SearchCustomerAttributesResponseMeta>;
        export type CreateCustomerAttributeRequest = {
  /**
   * Название свойства
   */
  name?: string;
} & {};


        export type CreateCustomerAttributeResponseData = {
  /**
   * Идентификатор свойства
   */
  id?: number;
} & {
  /**
   * Название свойства
   */
  name?: string;
};

        export type CreateCustomerAttributeResponseMeta = {};

        export type CreateCustomerAttributeResponse = CommonResponse<CreateCustomerAttributeResponseData, CreateCustomerAttributeResponseMeta>;
        export type PatchCustomerAttributeRequest = {
  /**
   * Название свойства
   */
  name?: string;
} & {};


        export type PatchCustomerAttributeResponseData = {
  /**
   * Идентификатор свойства
   */
  id?: number;
} & {
  /**
   * Название свойства
   */
  name?: string;
};

        export type PatchCustomerAttributeResponseMeta = {};

        export type PatchCustomerAttributeResponse = CommonResponse<PatchCustomerAttributeResponseData, PatchCustomerAttributeResponseMeta>;
        export interface SearchCustomerFavoriteRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор
     */
    id?: number | null;
    /**
     * Идентификатор пользователя
     */
    customer_id?: number | null;
    /**
     * Идентификатор товара
     */
    product_id?: number | null;
  };
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


        export type SearchCustomerFavoriteResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
})[];

        export type SearchCustomerFavoriteResponseMeta = {
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

        export type SearchCustomerFavoriteResponse = CommonResponse<SearchCustomerFavoriteResponseData, SearchCustomerFavoriteResponseMeta>;
        export type CreateCustomerFavoriteRequest = {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
} & {};


        export type CreateCustomerFavoriteResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
};

        export type CreateCustomerFavoriteResponseMeta = {};

        export type CreateCustomerFavoriteResponse = CommonResponse<CreateCustomerFavoriteResponseData, CreateCustomerFavoriteResponseMeta>;
        export interface SearchCustomersInfoRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор покупателя
     */
    id?: number | null;
    /**
     * Идентификатор пользователя
     */
    customer_id?: number | null;
  };
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


        export type SearchCustomersInfoResponseData = ({
  /**
   * Идентификатор покупателя
   */
  id?: number;
} & {
  /**
   * Идентификатор пользователя
   */
  customer_id?: number;
  kpi_sku_count?: number | null;
  kpi_sku_price_sum?: number | null;
  kpi_order_count?: number | null;
  kpi_shipment_count?: number | null;
  kpi_delivered_count?: number | null;
  kpi_delivered_sum?: number | null;
  kpi_refunded_count?: number | null;
  kpi_refunded_sum?: number | null;
  kpi_canceled_count?: number | null;
  kpi_canceled_sum?: number | null;
} & {})[];

        export type SearchCustomersInfoResponseMeta = {
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

        export type SearchCustomersInfoResponse = CommonResponse<SearchCustomersInfoResponseData, SearchCustomersInfoResponseMeta>;
        export type CreateCustomersInfoRequest = {
  /**
   * Идентификатор пользователя
   */
  customer_id?: number;
  /**
   * Колличетсво купленных товаров
   */
  kpi_sku_count?: number | null;
  /**
   * Сумма цен купленных товаров
   */
  kpi_sku_price_sum?: number | null;
  /**
   * Колличетсво офрмленных заказов
   */
  kpi_order_count?: number | null;
  /**
   * Колличетсво оформленных отправок
   */
  kpi_shipment_count?: number | null;
  /**
   * Колличетсво досталенных
   */
  kpi_delivered_count?: number | null;
  /**
   * Сумма цен доставленных
   */
  kpi_delivered_sum?: number | null;
  /**
   * Колличетсво возвращенных
   */
  kpi_refunded_count?: number | null;
  /**
   * Сумма цен возвращенных
   */
  kpi_refunded_sum?: number | null;
  /**
   * Колличетсво отмененных
   */
  kpi_canceled_count?: number | null;
  /**
   * Сумма цен отмененных
   */
  kpi_canceled_sum?: number | null;
} & {};


        export type CreateCustomersInfoResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
} & {
  /**
   * Идентификатор пользователя
   */
  customer_id?: number;
  kpi_sku_count?: number | null;
  kpi_sku_price_sum?: number | null;
  kpi_order_count?: number | null;
  kpi_shipment_count?: number | null;
  kpi_delivered_count?: number | null;
  kpi_delivered_sum?: number | null;
  kpi_refunded_count?: number | null;
  kpi_refunded_sum?: number | null;
  kpi_canceled_count?: number | null;
  kpi_canceled_sum?: number | null;
} & {};

        export type CreateCustomersInfoResponseMeta = {};

        export type CreateCustomersInfoResponse = CommonResponse<CreateCustomersInfoResponseData, CreateCustomersInfoResponseMeta>;
        export type PatchCustomersInfoRequest = {
  /**
   * Идентификатор пользователя
   */
  customer_id?: number;
  kpi_sku_count?: number | null;
  kpi_sku_price_sum?: number | null;
  kpi_order_count?: number | null;
  kpi_shipment_count?: number | null;
  kpi_delivered_count?: number | null;
  kpi_delivered_sum?: number | null;
  kpi_refunded_count?: number | null;
  kpi_refunded_sum?: number | null;
  kpi_canceled_count?: number | null;
  kpi_canceled_sum?: number | null;
} & {};


        export type PatchCustomersInfoResponseData = {
  /**
   * Идентификатор покупателя
   */
  id?: number;
} & {
  /**
   * Идентификатор пользователя
   */
  customer_id?: number;
  kpi_sku_count?: number | null;
  kpi_sku_price_sum?: number | null;
  kpi_order_count?: number | null;
  kpi_shipment_count?: number | null;
  kpi_delivered_count?: number | null;
  kpi_delivered_sum?: number | null;
  kpi_refunded_count?: number | null;
  kpi_refunded_sum?: number | null;
  kpi_canceled_count?: number | null;
  kpi_canceled_sum?: number | null;
} & {};

        export type PatchCustomersInfoResponseMeta = {};

        export type PatchCustomersInfoResponse = CommonResponse<PatchCustomersInfoResponseData, PatchCustomersInfoResponseMeta>;
        export interface SearchCustomersBonusOperationsRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор записи
     */
    id?: number | null;
    /**
     * Идентификатор клиента
     */
    customer_id?: number | null;
    /**
     * Номер заказа
     */
    order_number?: number | null;
    /**
     * Скоуп отбора операций начисления баллов
     */
    earning?: boolean | null;
    /**
     * Скоуп отбора операций списания баллов
     */
    spending?: boolean | null;
  };
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


        export type SearchCustomersBonusOperationsResponseData = ({
  /**
   * Идентификатор бонусной операции
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  order_number?: number | null;
  /**
   * Количество начисления/списания бонусов (с “-” при списании)
   */
  bonus_amount?: number;
  comment?: string | null;
  activation_date?: string | null;
  expiration_date?: string | null;
} & {})[];

        export type SearchCustomersBonusOperationsResponseMeta = {
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

        export type SearchCustomersBonusOperationsResponse = CommonResponse<SearchCustomersBonusOperationsResponseData, SearchCustomersBonusOperationsResponseMeta>;
        export type CreateCustomersBonusOperationsRequest = {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Номре заказа
   */
  order_number?: number | null;
  /**
   * Количество начисления/списания бонусов (с “-” при списании)
   */
  bonus_amount?: number;
  /**
   * Комментарий к бонусной операции
   */
  comment?: string | null;
  /**
   * Дата активации
   */
  activation_date?: string | null;
  /**
   * Дата сгорания
   */
  expiration_date?: string | null;
} & {};


        export type CreateCustomersBonusOperationsResponseData = {
  /**
   * Идентификатор бонусной операции
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  order_number?: number | null;
  /**
   * Количество начисления/списания бонусов (с “-” при списании)
   */
  bonus_amount?: number;
  comment?: string | null;
  activation_date?: string | null;
  expiration_date?: string | null;
} & {};

        export type CreateCustomersBonusOperationsResponseMeta = {};

        export type CreateCustomersBonusOperationsResponse = CommonResponse<CreateCustomersBonusOperationsResponseData, CreateCustomersBonusOperationsResponseMeta>;
        export type PatchBonusOperationRequest = {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  order_number?: number | null;
  /**
   * Количество начисления/списания бонусов (с “-” при списании)
   */
  bonus_amount?: number;
  comment?: string | null;
  activation_date?: string | null;
  expiration_date?: string | null;
};


        export type PatchBonusOperationResponseData = {
  /**
   * Идентификатор бонусной операции
   */
  id?: number;
} & {
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  order_number?: number | null;
  /**
   * Количество начисления/списания бонусов (с “-” при списании)
   */
  bonus_amount?: number;
  comment?: string | null;
  activation_date?: string | null;
  expiration_date?: string | null;
} & {};

        export type PatchBonusOperationResponseMeta = {};

        export type PatchBonusOperationResponse = CommonResponse<PatchBonusOperationResponseData, PatchBonusOperationResponseMeta>;
        export interface SearchCustomerProductSubscribesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор записи
     */
    id?: number | null;
    /**
     * Идентификатор клиента
     */
    customer_id?: number | null;
    /**
     * Идентификатор товара
     */
    product_id?: number | null;
  };
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


        export type SearchCustomerProductSubscribesResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
})[];

        export type SearchCustomerProductSubscribesResponseMeta = {
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

        export type SearchCustomerProductSubscribesResponse = CommonResponse<SearchCustomerProductSubscribesResponseData, SearchCustomerProductSubscribesResponseMeta>;
        export type CreateCustomerProductSubscribesRequest = {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
} & {};


        export type CreateCustomerProductSubscribesResponseData = {
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Идентификатор товара
   */
  product_id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
};

        export type CreateCustomerProductSubscribesResponseMeta = {};

        export type CreateCustomerProductSubscribesResponse = CommonResponse<CreateCustomerProductSubscribesResponseData, CreateCustomerProductSubscribesResponseMeta>;
        export interface SearchCustomerPreferencesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор записи
     */
    id?: number | null;
    /**
     * Идентификатор клиента
     */
    customer_id?: number | null;
    /**
     * Название атрибута
     */
    attribute_name?: string | null;
    /**
     * Значение атрибута атрибута
     */
    attribute_value?: string | null;
  };
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


        export type SearchCustomerPreferencesResponseData = ({
  /**
   * Идентификатор
   */
  id?: number;
} & {
  /**
   * Идентификатор записи
   */
  id?: number;
  /**
   * Идентификатор клиента
   */
  customer_id?: number;
  /**
   * Название атрибута
   */
  attribute_name?: string;
  /**
   * Значение атрибута атрибута
   */
  attribute_value?: string;
  /**
   * Колличество купленных товаров
   */
  product_count?: number;
  /**
   * Cумма стоимости купленных товаров
   */
  product_sum?: number;
})[];

        export type SearchCustomerPreferencesResponseMeta = {
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

        export type SearchCustomerPreferencesResponse = CommonResponse<SearchCustomerPreferencesResponseData, SearchCustomerPreferencesResponseMeta>;
        