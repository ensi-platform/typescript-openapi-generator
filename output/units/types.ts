import { CommonResponse } from "@api/common/types";
import { SearchEnumValuesBody, GetResourceMetaResponse } from "@api/commonTypes/resource-meta";
import { ErrorResponse } from "@api/commonTypes/errors";
import { EmptyDataResponse } from "@api/commonTypes/index";



export type GetSellerDigestResponse = object;

export type GetSellerStatusesResponse = ErrorResponse;
export type DeleteStoreContactRequest = { id: number | string };

export type DeleteStoreContactResponse = EmptyDataResponse | ErrorResponse;

export type GetAdminUsersMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type SearchAdminUserEnumValuesRequest = SearchEnumValuesBody;

export type SearchAdminUserEnumValuesResponse = ErrorResponse;
export type RefreshPasswordTokenRequest = { id: number | string };

export type RefreshPasswordTokenResponse = EmptyDataResponse | ErrorResponse;
export type DeleteAdminUserRoleRequest = { id: number | string };

export type DeleteAdminUserRoleResponse = EmptyDataResponse | ErrorResponse;

export type GetAdminUserRolesMetaResponse = GetResourceMetaResponse | ErrorResponse;
export interface AddRolesToSellerUserRequest {
  /**
   * Идентификаторы добавляемых ролей
   */
  roles: number[];
  /**
   * Время жизни роли
   */
  expires?: string | null;
}

export type AddRolesToSellerUserResponse = EmptyDataResponse | ErrorResponse;
export interface DeleteRoleFromSellerUserRequest {
  /**
   * Идентификатор удаляемой роли
   */
  role_id: number;
}

export type DeleteRoleFromSellerUserResponse = EmptyDataResponse | ErrorResponse;
export interface AddRolesToAdminUserRequest {
  /**
   * Идентификаторы добавляемых ролей
   */
  roles: number[];
  /**
   * Время жизни роли
   */
  expires?: string | null;
}

export type AddRolesToAdminUserResponse = EmptyDataResponse | ErrorResponse;
export interface DeleteRoleFromAdminUserRequest {
  /**
   * Идентификатор удаляемой роли
   */
  role_id: number;
}

export type DeleteRoleFromAdminUserResponse = EmptyDataResponse | ErrorResponse;
export interface MassChangeActiveRequest {
  /**
   * ID пользователей
   */
  user_ids: number[];
  /**
   * Статус пользователя (true - Активен, false - Деактивирован)
   */
  active: boolean;
  /**
   * Причина деактивации
   */
  cause_deactivation?: string;
}

export type MassChangeActiveResponse = EmptyDataResponse | ErrorResponse;
export interface SetPasswordAdminUserRequest {
  /**
   * Токен из ссылки по которой перешел пользователь
   */
  token: string;
  /**
   * Новый пароль пользователя
   */
  password: string;
}

export type SetPasswordAdminUserResponse = EmptyDataResponse | ErrorResponse;


        export type GetSellerDetailResponseData = {
  /**
   * Идентификатор продавца
   */
  id?: number;
  /**
   * Время изменения статуса продавца
   */
  status_at?: string;
  /**
   * Время создания продавца
   */
  created_at?: string;
  /**
   * Время обновления продавца
   */
  updated_at?: string;
} & {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
} & {
  owner?: {
    /**
     * Идентификатор пользователя продавца
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
     * ID продавца
     */
    seller_id?: number;
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  manager?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
};

        export type GetSellerDetailResponseMeta = {};

        export type GetSellerDetailResponse = CommonResponse<GetSellerDetailResponseData, GetSellerDetailResponseMeta>;
        


        export type GetStoreResponseData = {
  /**
   * Идентификатор склада
   */
  id?: number;
  /**
   * Время создания склада
   */
  created_at?: string;
  /**
   * Время обновления склада
   */
  updated_at?: string;
} & {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
} & {
  workings?: ({
    /**
     * Идентификатор записи о времени работы
     */
    id?: number;
    /**
     * Время создания записи о времени работы
     */
    created_at?: string;
    /**
     * Время обновления записи о времени работы
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Флаг активности дня работы склада
     */
    active?: boolean;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Время начала работы склада (00:00)
     */
    working_start_time?: string;
    /**
     * Время конца работы склада (00:00)
     */
    working_end_time?: string;
  })[];
  contacts?: ({
    /**
     * Идентификатор контактного лица для склада
     */
    id?: number;
    /**
     * Время создания контактного лица для склада
     */
    created_at?: string;
    /**
     * Время обновления контактного лица для склада
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Имя контактного лица
     */
    name?: string;
    /**
     * Телефон контактного лица
     */
    phone?: string;
    /**
     * Email контактного лица
     */
    email?: string;
  })[];
  pickup_times?: ({
    /**
     * Идентификатор записи о времени отгрузки
     */
    id?: number;
    /**
     * Время создания записи о времени отгрузки
     */
    created_at?: string;
    /**
     * Время обновления записи о времени отгрузки
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Код времени отгрузки у службы доставки
     */
    pickup_time_code?: string;
    /**
     * Время начала отгрузки
     */
    pickup_time_start?: string;
    /**
     * Время окончания отгрузки
     */
    pickup_time_end?: string;
    /**
     * Время выгрузки информации о грузе в службу доставки
     */
    cargo_export_time?: string;
    /**
     * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
     */
    delivery_service?: number;
  })[];
};

        export type GetStoreResponseMeta = {};

        export type GetStoreResponse = CommonResponse<GetStoreResponseData, GetStoreResponseMeta>;
        


        export type GetSellerUserResponseData = {
  /**
   * Идентификатор пользователя продавца
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
   * ID продавца
   */
  seller_id?: number;
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
};

        export type GetSellerUserResponseMeta = {};

        export type GetSellerUserResponse = CommonResponse<GetSellerUserResponseData, GetSellerUserResponseMeta>;
        


        export type GetAdminUserResponseData = {
  /**
   * Идентификатор admin-пользователя
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
};

        export type GetAdminUserResponseMeta = {} | null;

        export type GetAdminUserResponse = CommonResponse<GetAdminUserResponseData, GetAdminUserResponseMeta>;
        


        export type GetAdminUserRightsAccessResponseData = {
  /**
   * Подраздел
   */
  section?: string;
  items?: {
    /**
     * ID права доступа
     */
    id?: number;
    /**
     * Описание права доступа
     */
    title?: string;
  }[];
}[];

        export type GetAdminUserRightsAccessResponseMeta = {};

        export type GetAdminUserRightsAccessResponse = CommonResponse<GetAdminUserRightsAccessResponseData, GetAdminUserRightsAccessResponseMeta>;
        


        export type GetAdminUserRoleResponseData = {
  /**
   * ID роли
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название роли
   */
  title?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Права доступа
   */
  rights_access?: (
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 120
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 301
    | 302
    | 303
    | 304
    | 305
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 415
    | 416
    | 417
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 601
    | 602
    | 603
    | 604
    | 605
    | 606
    | 607
    | 701
    | 702
    | 703
    | 704
    | 705
    | 706
    | 707
    | 801
    | 802
    | 803
    | 804
    | 805
    | 806
    | 901
    | 902
    | 903
    | 904
    | 905
    | 906
    | 1001
    | 1002
    | 1003
    | 1004
    | 1005
    | 1006
    | 1101
    | 1102
    | 1103
    | 1104
    | 1105
    | 1106
    | 1201
    | 1301
    | 1302
    | 1303
    | 1304
    | 1305
    | 1306
    | 1311
    | 1312
    | 1313
    | 1314
    | 1315
    | 1601
    | 1602
    | 1603
    | 1604
    | 1605
  )[];
} & {};

        export type GetAdminUserRoleResponseMeta = {} | null;

        export type GetAdminUserRoleResponse = CommonResponse<GetAdminUserRoleResponseData, GetAdminUserRoleResponseMeta>;
        export interface SearchSellersRequest {
  sort?: (
    | "id"
    | "created_at"
    | "organization_name"
    | "organization_owner_full_name"
    | "organization_owner_email"
    | "organization_owner_phone"
    | "status"
    | "manager_user_name"
  )[];
  filter?: {
    /**
     * Дата регистрации (От)
     */
    created_at_from?: string;
    /**
     * Дата регистрации (До)
     */
    created_at_to?: string;
    status?: (1 | 2 | 3)[];
    /**
     * ID продавца
     */
    id?: number;
    /**
     * Название организации
     */
    legal_name?: string;
    /**
     * ФИО владельца организации
     */
    owner_full_name?: string;
    /**
     * Email владельца организации
     */
    owner_email?: string;
    /**
     * Телефон владельца организации
     */
    owner_phone?: string;
    manager_user_id?: number[];
  };
  include?: ("owner" | "manager")[];
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


        export type SearchSellersResponseData = ({
  /**
   * Идентификатор продавца
   */
  id?: number;
  /**
   * Время изменения статуса продавца
   */
  status_at?: string;
  /**
   * Время создания продавца
   */
  created_at?: string;
  /**
   * Время обновления продавца
   */
  updated_at?: string;
} & {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
} & {
  owner?: {
    /**
     * Идентификатор пользователя продавца
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
     * ID продавца
     */
    seller_id?: number;
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  manager?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
})[];

        export type SearchSellersResponseMeta = {
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

        export type SearchSellersResponse = CommonResponse<SearchSellersResponseData, SearchSellersResponseMeta>;
        export type CreateSellerRequest = {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
} & {};


        export type CreateSellerResponseData = {
  /**
   * Идентификатор продавца
   */
  id?: number;
  /**
   * Время изменения статуса продавца
   */
  status_at?: string;
  /**
   * Время создания продавца
   */
  created_at?: string;
  /**
   * Время обновления продавца
   */
  updated_at?: string;
} & {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
} & {
  owner?: {
    /**
     * Идентификатор пользователя продавца
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
     * ID продавца
     */
    seller_id?: number;
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  manager?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
};

        export type CreateSellerResponseMeta = {};

        export type CreateSellerResponse = CommonResponse<CreateSellerResponseData, CreateSellerResponseMeta>;
        export type PatchSellerRequest = {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
};


        export type PatchSellerResponseData = {
  /**
   * Идентификатор продавца
   */
  id?: number;
  /**
   * Время изменения статуса продавца
   */
  status_at?: string;
  /**
   * Время создания продавца
   */
  created_at?: string;
  /**
   * Время обновления продавца
   */
  updated_at?: string;
} & {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
} & {
  owner?: {
    /**
     * Идентификатор пользователя продавца
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
     * ID продавца
     */
    seller_id?: number;
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  manager?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
};

        export type PatchSellerResponseMeta = {};

        export type PatchSellerResponse = CommonResponse<PatchSellerResponseData, PatchSellerResponseMeta>;
        export type ReplaceSellerRequest = {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
} & {};


        export type ReplaceSellerResponseData = {
  /**
   * Идентификатор продавца
   */
  id?: number;
  /**
   * Время изменения статуса продавца
   */
  status_at?: string;
  /**
   * Время создания продавца
   */
  created_at?: string;
  /**
   * Время обновления продавца
   */
  updated_at?: string;
} & {
  /**
   * Юридическое наименование организации
   */
  legal_name?: string;
  /**
   * Внешний код
   */
  external_id?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * Юр. адрес
   */
  legal_address?: string;
  /**
   * Фактический адрес
   */
  fact_address?: string;
  /**
   * Номер банковского счета
   */
  payment_account?: string;
  /**
   * Наименование банка
   */
  bank?: string;
  /**
   * Юридический адрес банка
   */
  bank_address?: string;
  /**
   * БИК банка
   */
  bank_bik?: string;
  /**
   * Статус продавца. Расшифровка значений:
   *   * `1` - Продавец недооформлен, не дозаполнил информацию
   *   * `2` - Продавец активен
   *   * `3` - Продавец заблокирован
   *
   */
  status?: 1 | 2 | 3;
  /**
   * ID менеджера
   */
  manager_id?: number;
  /**
   * Номер корреспондентского счета банка
   */
  correspondent_account?: string;
  /**
   * Адреса складов отгрузки
   */
  storage_address?: string;
  /**
   * Сайт компании
   */
  site?: string;
  /**
   * Подтверждение о возможности работы с Платформой с использованием автоматических механизмов интеграции
   */
  can_integration?: boolean;
  /**
   * Бренды и товары, которыми торгует продавец
   */
  sale_info?: string;
  /**
   * Город продавца
   */
  city?: string;
} & {
  owner?: {
    /**
     * Идентификатор пользователя продавца
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
     * ID продавца
     */
    seller_id?: number;
    /**
     * Активен
     */
    active?: boolean;
    /**
     * Логин
     */
    login?: string;
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
  manager?: {
    /**
     * Идентификатор admin-пользователя
     */
    id?: number;
    /**
     * Полное ФИО
     */
    full_name?: string;
    /**
     * Сокращенное ФИО
     */
    short_name?: string;
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
    last_name?: string | null;
    first_name?: string | null;
    middle_name?: string | null;
    /**
     * Email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Временная зона
     */
    timezone?: string;
  } & {
    /**
     * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
     */
    roles?: ({
      /**
       * ID роли
       */
      id?: number;
    } & {
      /**
       * Название роли
       */
      title?: string;
      expires?: string | null;
    })[];
  };
};

        export type ReplaceSellerResponseMeta = {};

        export type ReplaceSellerResponse = CommonResponse<ReplaceSellerResponseData, ReplaceSellerResponseMeta>;
        export interface SearchStoresRequest {
  sort?: ("id" | "name" | "address_string" | "contact_name" | "contact_phone")[];
  filter?: {
    /**
     * ID склада
     */
    id?: number;
    /**
     * ID продавца
     */
    seller_id?: number;
    /**
     * Название склада
     */
    name?: string;
    /**
     * Адрес склада
     */
    address_string?: string;
    /**
     * ФИО контактного лица
     */
    contact_name?: string;
    /**
     * Телефон контактного лица
     */
    contact_phone?: string;
  };
  include?: "contact"[];
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


        export type SearchStoresResponseData = ({
  /**
   * Идентификатор склада
   */
  id?: number;
  /**
   * Время создания склада
   */
  created_at?: string;
  /**
   * Время обновления склада
   */
  updated_at?: string;
} & {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
} & {
  workings?: ({
    /**
     * Идентификатор записи о времени работы
     */
    id?: number;
    /**
     * Время создания записи о времени работы
     */
    created_at?: string;
    /**
     * Время обновления записи о времени работы
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Флаг активности дня работы склада
     */
    active?: boolean;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Время начала работы склада (00:00)
     */
    working_start_time?: string;
    /**
     * Время конца работы склада (00:00)
     */
    working_end_time?: string;
  })[];
  contacts?: ({
    /**
     * Идентификатор контактного лица для склада
     */
    id?: number;
    /**
     * Время создания контактного лица для склада
     */
    created_at?: string;
    /**
     * Время обновления контактного лица для склада
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Имя контактного лица
     */
    name?: string;
    /**
     * Телефон контактного лица
     */
    phone?: string;
    /**
     * Email контактного лица
     */
    email?: string;
  })[];
  pickup_times?: ({
    /**
     * Идентификатор записи о времени отгрузки
     */
    id?: number;
    /**
     * Время создания записи о времени отгрузки
     */
    created_at?: string;
    /**
     * Время обновления записи о времени отгрузки
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Код времени отгрузки у службы доставки
     */
    pickup_time_code?: string;
    /**
     * Время начала отгрузки
     */
    pickup_time_start?: string;
    /**
     * Время окончания отгрузки
     */
    pickup_time_end?: string;
    /**
     * Время выгрузки информации о грузе в службу доставки
     */
    cargo_export_time?: string;
    /**
     * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
     */
    delivery_service?: number;
  })[];
})[];

        export type SearchStoresResponseMeta = {
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

        export type SearchStoresResponse = CommonResponse<SearchStoresResponseData, SearchStoresResponseMeta>;
        export type CreateStoreRequest = {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
} & {};


        export type CreateStoreResponseData = {
  /**
   * Идентификатор склада
   */
  id?: number;
  /**
   * Время создания склада
   */
  created_at?: string;
  /**
   * Время обновления склада
   */
  updated_at?: string;
} & {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
} & {
  workings?: ({
    /**
     * Идентификатор записи о времени работы
     */
    id?: number;
    /**
     * Время создания записи о времени работы
     */
    created_at?: string;
    /**
     * Время обновления записи о времени работы
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Флаг активности дня работы склада
     */
    active?: boolean;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Время начала работы склада (00:00)
     */
    working_start_time?: string;
    /**
     * Время конца работы склада (00:00)
     */
    working_end_time?: string;
  })[];
  contacts?: ({
    /**
     * Идентификатор контактного лица для склада
     */
    id?: number;
    /**
     * Время создания контактного лица для склада
     */
    created_at?: string;
    /**
     * Время обновления контактного лица для склада
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Имя контактного лица
     */
    name?: string;
    /**
     * Телефон контактного лица
     */
    phone?: string;
    /**
     * Email контактного лица
     */
    email?: string;
  })[];
  pickup_times?: ({
    /**
     * Идентификатор записи о времени отгрузки
     */
    id?: number;
    /**
     * Время создания записи о времени отгрузки
     */
    created_at?: string;
    /**
     * Время обновления записи о времени отгрузки
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Код времени отгрузки у службы доставки
     */
    pickup_time_code?: string;
    /**
     * Время начала отгрузки
     */
    pickup_time_start?: string;
    /**
     * Время окончания отгрузки
     */
    pickup_time_end?: string;
    /**
     * Время выгрузки информации о грузе в службу доставки
     */
    cargo_export_time?: string;
    /**
     * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
     */
    delivery_service?: number;
  })[];
};

        export type CreateStoreResponseMeta = {};

        export type CreateStoreResponse = CommonResponse<CreateStoreResponseData, CreateStoreResponseMeta>;
        export type PatchStoreRequest = {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
};


        export type PatchStoreResponseData = {
  /**
   * Идентификатор склада
   */
  id?: number;
  /**
   * Время создания склада
   */
  created_at?: string;
  /**
   * Время обновления склада
   */
  updated_at?: string;
} & {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
} & {
  workings?: ({
    /**
     * Идентификатор записи о времени работы
     */
    id?: number;
    /**
     * Время создания записи о времени работы
     */
    created_at?: string;
    /**
     * Время обновления записи о времени работы
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Флаг активности дня работы склада
     */
    active?: boolean;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Время начала работы склада (00:00)
     */
    working_start_time?: string;
    /**
     * Время конца работы склада (00:00)
     */
    working_end_time?: string;
  })[];
  contacts?: ({
    /**
     * Идентификатор контактного лица для склада
     */
    id?: number;
    /**
     * Время создания контактного лица для склада
     */
    created_at?: string;
    /**
     * Время обновления контактного лица для склада
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Имя контактного лица
     */
    name?: string;
    /**
     * Телефон контактного лица
     */
    phone?: string;
    /**
     * Email контактного лица
     */
    email?: string;
  })[];
  pickup_times?: ({
    /**
     * Идентификатор записи о времени отгрузки
     */
    id?: number;
    /**
     * Время создания записи о времени отгрузки
     */
    created_at?: string;
    /**
     * Время обновления записи о времени отгрузки
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Код времени отгрузки у службы доставки
     */
    pickup_time_code?: string;
    /**
     * Время начала отгрузки
     */
    pickup_time_start?: string;
    /**
     * Время окончания отгрузки
     */
    pickup_time_end?: string;
    /**
     * Время выгрузки информации о грузе в службу доставки
     */
    cargo_export_time?: string;
    /**
     * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
     */
    delivery_service?: number;
  })[];
};

        export type PatchStoreResponseMeta = {};

        export type PatchStoreResponse = CommonResponse<PatchStoreResponseData, PatchStoreResponseMeta>;
        export type ReplaceStoreRequest = {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
} & {};


        export type ReplaceStoreResponseData = {
  /**
   * Идентификатор склада
   */
  id?: number;
  /**
   * Время создания склада
   */
  created_at?: string;
  /**
   * Время обновления склада
   */
  updated_at?: string;
} & {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * ID склада в системе продавца
   */
  xml_id?: string;
  /**
   * Флаг активности склада
   */
  active?: boolean;
  /**
   * Название
   */
  name?: string;
  /**
   * Адрес
   */
  address?: {
    /**
     * Адрес одной строкой
     */
    address_string?: string;
    /**
     * Код страны
     */
    country_code?: string;
    /**
     * Почтовый индекс
     */
    post_index?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * ФИАС ID региона
     */
    region_guid?: string;
    /**
     * Район в регионе
     */
    area?: string;
    /**
     * ФИАС ID района в регионе
     */
    area_guid?: string;
    /**
     * Город/населенный пункт
     */
    city?: string;
    /**
     * ФИАС ID города/населенного пункта
     */
    city_guid?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Строение/корпус
     */
    block?: string;
    /**
     * Квартира/офис
     */
    flat?: string;
    /**
     * Подъезд
     */
    porch?: string;
    /**
     * Этаж
     */
    floor?: string;
    /**
     * Домофон
     */
    intercom?: string;
    /**
     * Комментарий к адресу
     */
    comment?: string;
    /**
     * координаты: широта
     */
    geo_lat?: string;
    /**
     * координаты: долгота
     */
    geo_lon?: string;
  };
  /**
   * Часовой пояс
   */
  timezone?: string;
} & {
  workings?: ({
    /**
     * Идентификатор записи о времени работы
     */
    id?: number;
    /**
     * Время создания записи о времени работы
     */
    created_at?: string;
    /**
     * Время обновления записи о времени работы
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Флаг активности дня работы склада
     */
    active?: boolean;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Время начала работы склада (00:00)
     */
    working_start_time?: string;
    /**
     * Время конца работы склада (00:00)
     */
    working_end_time?: string;
  })[];
  contacts?: ({
    /**
     * Идентификатор контактного лица для склада
     */
    id?: number;
    /**
     * Время создания контактного лица для склада
     */
    created_at?: string;
    /**
     * Время обновления контактного лица для склада
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * Имя контактного лица
     */
    name?: string;
    /**
     * Телефон контактного лица
     */
    phone?: string;
    /**
     * Email контактного лица
     */
    email?: string;
  })[];
  pickup_times?: ({
    /**
     * Идентификатор записи о времени отгрузки
     */
    id?: number;
    /**
     * Время создания записи о времени отгрузки
     */
    created_at?: string;
    /**
     * Время обновления записи о времени отгрузки
     */
    updated_at?: string;
  } & {
    /**
     * ID склада
     */
    store_id?: number;
    /**
     * День недели (1-7)
     */
    day?: number;
    /**
     * Код времени отгрузки у службы доставки
     */
    pickup_time_code?: string;
    /**
     * Время начала отгрузки
     */
    pickup_time_start?: string;
    /**
     * Время окончания отгрузки
     */
    pickup_time_end?: string;
    /**
     * Время выгрузки информации о грузе в службу доставки
     */
    cargo_export_time?: string;
    /**
     * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
     */
    delivery_service?: number;
  })[];
};

        export type ReplaceStoreResponseMeta = {};

        export type ReplaceStoreResponse = CommonResponse<ReplaceStoreResponseData, ReplaceStoreResponseMeta>;
        export type CreateStoreWorkingRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Флаг активности дня работы склада
   */
  active?: boolean;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Время начала работы склада (00:00)
   */
  working_start_time?: string;
  /**
   * Время конца работы склада (00:00)
   */
  working_end_time?: string;
} & {};


        export type CreateStoreWorkingResponseData = {
  /**
   * Идентификатор записи о времени работы
   */
  id?: number;
  /**
   * Время создания записи о времени работы
   */
  created_at?: string;
  /**
   * Время обновления записи о времени работы
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Флаг активности дня работы склада
   */
  active?: boolean;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Время начала работы склада (00:00)
   */
  working_start_time?: string;
  /**
   * Время конца работы склада (00:00)
   */
  working_end_time?: string;
};

        export type CreateStoreWorkingResponseMeta = {};

        export type CreateStoreWorkingResponse = CommonResponse<CreateStoreWorkingResponseData, CreateStoreWorkingResponseMeta>;
        export type PatchStoreWorkingRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Флаг активности дня работы склада
   */
  active?: boolean;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Время начала работы склада (00:00)
   */
  working_start_time?: string;
  /**
   * Время конца работы склада (00:00)
   */
  working_end_time?: string;
};


        export type PatchStoreWorkingResponseData = {
  /**
   * Идентификатор записи о времени работы
   */
  id?: number;
  /**
   * Время создания записи о времени работы
   */
  created_at?: string;
  /**
   * Время обновления записи о времени работы
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Флаг активности дня работы склада
   */
  active?: boolean;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Время начала работы склада (00:00)
   */
  working_start_time?: string;
  /**
   * Время конца работы склада (00:00)
   */
  working_end_time?: string;
};

        export type PatchStoreWorkingResponseMeta = {};

        export type PatchStoreWorkingResponse = CommonResponse<PatchStoreWorkingResponseData, PatchStoreWorkingResponseMeta>;
        export type ReplaceStoreWorkingRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Флаг активности дня работы склада
   */
  active?: boolean;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Время начала работы склада (00:00)
   */
  working_start_time?: string;
  /**
   * Время конца работы склада (00:00)
   */
  working_end_time?: string;
} & {};


        export type ReplaceStoreWorkingResponseData = {
  /**
   * Идентификатор записи о времени работы
   */
  id?: number;
  /**
   * Время создания записи о времени работы
   */
  created_at?: string;
  /**
   * Время обновления записи о времени работы
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Флаг активности дня работы склада
   */
  active?: boolean;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Время начала работы склада (00:00)
   */
  working_start_time?: string;
  /**
   * Время конца работы склада (00:00)
   */
  working_end_time?: string;
};

        export type ReplaceStoreWorkingResponseMeta = {};

        export type ReplaceStoreWorkingResponse = CommonResponse<ReplaceStoreWorkingResponseData, ReplaceStoreWorkingResponseMeta>;
        export type CreateStorePickupTimeRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Код времени отгрузки у службы доставки
   */
  pickup_time_code?: string;
  /**
   * Время начала отгрузки
   */
  pickup_time_start?: string;
  /**
   * Время окончания отгрузки
   */
  pickup_time_end?: string;
  /**
   * Время выгрузки информации о грузе в службу доставки
   */
  cargo_export_time?: string;
  /**
   * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
   */
  delivery_service?: number;
} & {};


        export type CreateStorePickupTimeResponseData = {
  /**
   * Идентификатор записи о времени отгрузки
   */
  id?: number;
  /**
   * Время создания записи о времени отгрузки
   */
  created_at?: string;
  /**
   * Время обновления записи о времени отгрузки
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Код времени отгрузки у службы доставки
   */
  pickup_time_code?: string;
  /**
   * Время начала отгрузки
   */
  pickup_time_start?: string;
  /**
   * Время окончания отгрузки
   */
  pickup_time_end?: string;
  /**
   * Время выгрузки информации о грузе в службу доставки
   */
  cargo_export_time?: string;
  /**
   * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
   */
  delivery_service?: number;
};

        export type CreateStorePickupTimeResponseMeta = {};

        export type CreateStorePickupTimeResponse = CommonResponse<CreateStorePickupTimeResponseData, CreateStorePickupTimeResponseMeta>;
        export type PatchStorePickupTimeRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Код времени отгрузки у службы доставки
   */
  pickup_time_code?: string;
  /**
   * Время начала отгрузки
   */
  pickup_time_start?: string;
  /**
   * Время окончания отгрузки
   */
  pickup_time_end?: string;
  /**
   * Время выгрузки информации о грузе в службу доставки
   */
  cargo_export_time?: string;
  /**
   * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
   */
  delivery_service?: number;
};


        export type PatchStorePickupTimeResponseData = {
  /**
   * Идентификатор записи о времени отгрузки
   */
  id?: number;
  /**
   * Время создания записи о времени отгрузки
   */
  created_at?: string;
  /**
   * Время обновления записи о времени отгрузки
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Код времени отгрузки у службы доставки
   */
  pickup_time_code?: string;
  /**
   * Время начала отгрузки
   */
  pickup_time_start?: string;
  /**
   * Время окончания отгрузки
   */
  pickup_time_end?: string;
  /**
   * Время выгрузки информации о грузе в службу доставки
   */
  cargo_export_time?: string;
  /**
   * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
   */
  delivery_service?: number;
};

        export type PatchStorePickupTimeResponseMeta = {};

        export type PatchStorePickupTimeResponse = CommonResponse<PatchStorePickupTimeResponseData, PatchStorePickupTimeResponseMeta>;
        export type ReplaceStorePickupTimeRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Код времени отгрузки у службы доставки
   */
  pickup_time_code?: string;
  /**
   * Время начала отгрузки
   */
  pickup_time_start?: string;
  /**
   * Время окончания отгрузки
   */
  pickup_time_end?: string;
  /**
   * Время выгрузки информации о грузе в службу доставки
   */
  cargo_export_time?: string;
  /**
   * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
   */
  delivery_service?: number;
} & {};


        export type ReplaceStorePickupTimeResponseData = {
  /**
   * Идентификатор записи о времени отгрузки
   */
  id?: number;
  /**
   * Время создания записи о времени отгрузки
   */
  created_at?: string;
  /**
   * Время обновления записи о времени отгрузки
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * День недели (1-7)
   */
  day?: number;
  /**
   * Код времени отгрузки у службы доставки
   */
  pickup_time_code?: string;
  /**
   * Время начала отгрузки
   */
  pickup_time_start?: string;
  /**
   * Время окончания отгрузки
   */
  pickup_time_end?: string;
  /**
   * Время выгрузки информации о грузе в службу доставки
   */
  cargo_export_time?: string;
  /**
   * Служба доставки (если указана, то данная информация переопределяет данные дня недели без службы доставки)
   */
  delivery_service?: number;
};

        export type ReplaceStorePickupTimeResponseMeta = {};

        export type ReplaceStorePickupTimeResponse = CommonResponse<ReplaceStorePickupTimeResponseData, ReplaceStorePickupTimeResponseMeta>;
        export type CreateStoreContactRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Имя контактного лица
   */
  name?: string;
  /**
   * Телефон контактного лица
   */
  phone?: string;
  /**
   * Email контактного лица
   */
  email?: string;
} & {};


        export type CreateStoreContactResponseData = {
  /**
   * Идентификатор контактного лица для склада
   */
  id?: number;
  /**
   * Время создания контактного лица для склада
   */
  created_at?: string;
  /**
   * Время обновления контактного лица для склада
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Имя контактного лица
   */
  name?: string;
  /**
   * Телефон контактного лица
   */
  phone?: string;
  /**
   * Email контактного лица
   */
  email?: string;
};

        export type CreateStoreContactResponseMeta = {};

        export type CreateStoreContactResponse = CommonResponse<CreateStoreContactResponseData, CreateStoreContactResponseMeta>;
        export type PatchStoreContactRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Имя контактного лица
   */
  name?: string;
  /**
   * Телефон контактного лица
   */
  phone?: string;
  /**
   * Email контактного лица
   */
  email?: string;
};


        export type PatchStoreContactResponseData = {
  /**
   * Идентификатор контактного лица для склада
   */
  id?: number;
  /**
   * Время создания контактного лица для склада
   */
  created_at?: string;
  /**
   * Время обновления контактного лица для склада
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Имя контактного лица
   */
  name?: string;
  /**
   * Телефон контактного лица
   */
  phone?: string;
  /**
   * Email контактного лица
   */
  email?: string;
};

        export type PatchStoreContactResponseMeta = {};

        export type PatchStoreContactResponse = CommonResponse<PatchStoreContactResponseData, PatchStoreContactResponseMeta>;
        export type ReplaceStoreContactRequest = {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Имя контактного лица
   */
  name?: string;
  /**
   * Телефон контактного лица
   */
  phone?: string;
  /**
   * Email контактного лица
   */
  email?: string;
} & {};


        export type ReplaceStoreContactResponseData = {
  /**
   * Идентификатор контактного лица для склада
   */
  id?: number;
  /**
   * Время создания контактного лица для склада
   */
  created_at?: string;
  /**
   * Время обновления контактного лица для склада
   */
  updated_at?: string;
} & {
  /**
   * ID склада
   */
  store_id?: number;
  /**
   * Имя контактного лица
   */
  name?: string;
  /**
   * Телефон контактного лица
   */
  phone?: string;
  /**
   * Email контактного лица
   */
  email?: string;
};

        export type ReplaceStoreContactResponseMeta = {};

        export type ReplaceStoreContactResponse = CommonResponse<ReplaceStoreContactResponseData, ReplaceStoreContactResponseMeta>;
        export interface SearchSellerUsersRequest {
  sort?: ("id" | "email" | "phone" | "active" | "login" | "created_at" | "updated_at")[];
  filter?: {
    /**
     * ID пользователя
     */
    id?: number;
    /**
     * ФИО пользователя
     */
    full_name?: string;
    /**
     * Email пользователя
     */
    email?: string;
    /**
     * Телефон пользователя
     */
    phone?: string;
    /**
     * Логин пользователя
     */
    login?: string;
    /**
     * Статус пользователя (true - Активен, false - Деактивирован)
     */
    active?: boolean;
    /**
     * ID роли
     */
    role?: number;
  };
  include?: "roles"[];
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


        export type SearchSellerUsersResponseData = ({
  /**
   * Идентификатор пользователя продавца
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
   * ID продавца
   */
  seller_id?: number;
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
})[];

        export type SearchSellerUsersResponseMeta = {
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

        export type SearchSellerUsersResponse = CommonResponse<SearchSellerUsersResponseData, SearchSellerUsersResponseMeta>;
        export type CreateSellerUserRequest = {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Пароль
   */
  password?: string;
} & {};


        export type CreateSellerUserResponseData = {
  /**
   * Идентификатор пользователя продавца
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
   * ID продавца
   */
  seller_id?: number;
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
};

        export type CreateSellerUserResponseMeta = {};

        export type CreateSellerUserResponse = CommonResponse<CreateSellerUserResponseData, CreateSellerUserResponseMeta>;
        export type PatchSellerUserRequest = {
  /**
   * ID продавца
   */
  seller_id?: number;
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Пароль
   */
  password?: string;
};


        export type PatchSellerUserResponseData = {
  /**
   * Идентификатор пользователя продавца
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
   * ID продавца
   */
  seller_id?: number;
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя продавца. Объект, в котором ключ - ID роли (см. UnitsSellerUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
};

        export type PatchSellerUserResponseMeta = {};

        export type PatchSellerUserResponse = CommonResponse<PatchSellerUserResponseData, PatchSellerUserResponseMeta>;
        export interface SearchRoleRequest {
  sort?: ("id" | "created_at" | "updated_at")[];
  filter?: {
    /**
     * ID пользователя
     */
    id?: number;
    /**
     * Название роли
     */
    title?: string;
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


        export type SearchRoleResponseData = ({
  /**
   * ID роли
   */
  id?: number;
} & {
  /**
   * Название роли
   */
  title?: string;
})[];

        export type SearchRoleResponseMeta = {
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

        export type SearchRoleResponse = CommonResponse<SearchRoleResponseData, SearchRoleResponseMeta>;
        export interface SearchAdminUsersRequest {
  sort?: ("id" | "email" | "phone" | "active" | "login" | "created_at" | "updated_at")[];
  filter?: {
    /**
     * ID пользователя
     */
    id?: number;
    /**
     * Email пользователя
     */
    email?: string;
    /**
     * Телефон пользователя
     */
    phone?: string;
    /**
     * Телефон пользователя
     */
    phone_like?: string;
    /**
     * Фамилия
     */
    last_name_like?: string;
    /**
     * Имя
     */
    first_name_like?: string;
    /**
     * Отчество
     */
    middle_name_like?: string;
    /**
     * Дата создания (от)
     */
    created_at_from?: string;
    /**
     * Дата создания (до)
     */
    created_at_to?: string;
    /**
     * Дата последнего обновления (от)
     */
    updated_at_from?: string;
    /**
     * Дата последнего обновления (до)
     */
    updated_at_to?: string;
    /**
     * Логин пользователя
     */
    login?: string;
    /**
     * Статус пользователя (true - Активен, false - Деактивирован)
     */
    active?: boolean;
    /**
     * ID роли
     */
    role?: number;
  };
  include?: "roles"[];
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


        export type SearchAdminUsersResponseData = ({
  /**
   * Идентификатор admin-пользователя
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
})[];

        export type SearchAdminUsersResponseMeta = {
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

        export type SearchAdminUsersResponse = CommonResponse<SearchAdminUsersResponseData, SearchAdminUsersResponseMeta>;
        export type CreateAdminUserRequest = {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {} & {
  /**
   * Пароль
   */
  password?: string;
};


        export type CreateAdminUserResponseData = {
  /**
   * Идентификатор admin-пользователя
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
};

        export type CreateAdminUserResponseMeta = {} | null;

        export type CreateAdminUserResponse = CommonResponse<CreateAdminUserResponseData, CreateAdminUserResponseMeta>;
        export type PatchAdminUserRequest = {
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Пароль
   */
  password?: string;
} & {
  /**
   * Причина деактивации
   */
  cause_deactivation?: string;
};


        export type PatchAdminUserResponseData = {
  /**
   * Идентификатор admin-пользователя
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
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
  last_name?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Временная зона
   */
  timezone?: string;
} & {
  /**
   * Роли пользователя. Объект, в котором ключ - ID роли (см. UnitsAdminUserRoleEnum)
   */
  roles?: ({
    /**
     * ID роли
     */
    id?: number;
  } & {
    /**
     * Название роли
     */
    title?: string;
    expires?: string | null;
  })[];
};

        export type PatchAdminUserResponseMeta = {} | null;

        export type PatchAdminUserResponse = CommonResponse<PatchAdminUserResponseData, PatchAdminUserResponseMeta>;
        export type CreateAdminUserRoleRequest = {
  /**
   * Название роли
   */
  title?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Права доступа
   */
  rights_access?: (
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 120
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 301
    | 302
    | 303
    | 304
    | 305
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 415
    | 416
    | 417
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 601
    | 602
    | 603
    | 604
    | 605
    | 606
    | 607
    | 701
    | 702
    | 703
    | 704
    | 705
    | 706
    | 707
    | 801
    | 802
    | 803
    | 804
    | 805
    | 806
    | 901
    | 902
    | 903
    | 904
    | 905
    | 906
    | 1001
    | 1002
    | 1003
    | 1004
    | 1005
    | 1006
    | 1101
    | 1102
    | 1103
    | 1104
    | 1105
    | 1106
    | 1201
    | 1301
    | 1302
    | 1303
    | 1304
    | 1305
    | 1306
    | 1311
    | 1312
    | 1313
    | 1314
    | 1315
    | 1601
    | 1602
    | 1603
    | 1604
    | 1605
  )[];
} & {};


        export type CreateAdminUserRoleResponseData = {
  /**
   * ID роли
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название роли
   */
  title?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Права доступа
   */
  rights_access?: (
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 120
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 301
    | 302
    | 303
    | 304
    | 305
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 415
    | 416
    | 417
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 601
    | 602
    | 603
    | 604
    | 605
    | 606
    | 607
    | 701
    | 702
    | 703
    | 704
    | 705
    | 706
    | 707
    | 801
    | 802
    | 803
    | 804
    | 805
    | 806
    | 901
    | 902
    | 903
    | 904
    | 905
    | 906
    | 1001
    | 1002
    | 1003
    | 1004
    | 1005
    | 1006
    | 1101
    | 1102
    | 1103
    | 1104
    | 1105
    | 1106
    | 1201
    | 1301
    | 1302
    | 1303
    | 1304
    | 1305
    | 1306
    | 1311
    | 1312
    | 1313
    | 1314
    | 1315
    | 1601
    | 1602
    | 1603
    | 1604
    | 1605
  )[];
} & {};

        export type CreateAdminUserRoleResponseMeta = {} | null;

        export type CreateAdminUserRoleResponse = CommonResponse<CreateAdminUserRoleResponseData, CreateAdminUserRoleResponseMeta>;
        export type PatchAdminUserRoleRequest = {
  /**
   * Название роли
   */
  title?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Права доступа
   */
  rights_access?: (
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 120
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 301
    | 302
    | 303
    | 304
    | 305
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 415
    | 416
    | 417
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 601
    | 602
    | 603
    | 604
    | 605
    | 606
    | 607
    | 701
    | 702
    | 703
    | 704
    | 705
    | 706
    | 707
    | 801
    | 802
    | 803
    | 804
    | 805
    | 806
    | 901
    | 902
    | 903
    | 904
    | 905
    | 906
    | 1001
    | 1002
    | 1003
    | 1004
    | 1005
    | 1006
    | 1101
    | 1102
    | 1103
    | 1104
    | 1105
    | 1106
    | 1201
    | 1301
    | 1302
    | 1303
    | 1304
    | 1305
    | 1306
    | 1311
    | 1312
    | 1313
    | 1314
    | 1315
    | 1601
    | 1602
    | 1603
    | 1604
    | 1605
  )[];
};


        export type PatchAdminUserRoleResponseData = {
  /**
   * ID роли
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название роли
   */
  title?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Права доступа
   */
  rights_access?: (
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 120
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 301
    | 302
    | 303
    | 304
    | 305
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 415
    | 416
    | 417
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 601
    | 602
    | 603
    | 604
    | 605
    | 606
    | 607
    | 701
    | 702
    | 703
    | 704
    | 705
    | 706
    | 707
    | 801
    | 802
    | 803
    | 804
    | 805
    | 806
    | 901
    | 902
    | 903
    | 904
    | 905
    | 906
    | 1001
    | 1002
    | 1003
    | 1004
    | 1005
    | 1006
    | 1101
    | 1102
    | 1103
    | 1104
    | 1105
    | 1106
    | 1201
    | 1301
    | 1302
    | 1303
    | 1304
    | 1305
    | 1306
    | 1311
    | 1312
    | 1313
    | 1314
    | 1315
    | 1601
    | 1602
    | 1603
    | 1604
    | 1605
  )[];
} & {};

        export type PatchAdminUserRoleResponseMeta = {} | null;

        export type PatchAdminUserRoleResponse = CommonResponse<PatchAdminUserRoleResponseData, PatchAdminUserRoleResponseMeta>;
        export interface SearchAdminUserRolesRequest {
  sort?: ("id" | "created_at" | "updated_at")[];
  filter?: {
    /**
     * ID пользователя
     */
    id?: number;
    /**
     * Название роли
     */
    title?: string;
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


        export type SearchAdminUserRolesResponseData = ({
  /**
   * ID роли
   */
  id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
} & {
  /**
   * Название роли
   */
  title?: string;
  /**
   * Активность
   */
  active?: boolean;
  /**
   * Права доступа
   */
  rights_access?: (
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 120
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 301
    | 302
    | 303
    | 304
    | 305
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 415
    | 416
    | 417
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 601
    | 602
    | 603
    | 604
    | 605
    | 606
    | 607
    | 701
    | 702
    | 703
    | 704
    | 705
    | 706
    | 707
    | 801
    | 802
    | 803
    | 804
    | 805
    | 806
    | 901
    | 902
    | 903
    | 904
    | 905
    | 906
    | 1001
    | 1002
    | 1003
    | 1004
    | 1005
    | 1006
    | 1101
    | 1102
    | 1103
    | 1104
    | 1105
    | 1106
    | 1201
    | 1301
    | 1302
    | 1303
    | 1304
    | 1305
    | 1306
    | 1311
    | 1312
    | 1313
    | 1314
    | 1315
    | 1601
    | 1602
    | 1603
    | 1604
    | 1605
  )[];
} & {})[];

        export type SearchAdminUserRolesResponseMeta = {
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

        export type SearchAdminUserRolesResponse = CommonResponse<SearchAdminUserRolesResponseData, SearchAdminUserRolesResponseMeta>;
        