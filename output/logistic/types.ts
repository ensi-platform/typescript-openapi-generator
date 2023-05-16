import { CommonResponse } from "@api/common/types";
import { SearchEnumValuesBody, GetResourceMetaResponse } from "@api/commonTypes/resource-meta";
import { DeliveryServiceFillableProperties, FederalDistrictFillableProperties, RegionFillableProperties, DeliveryPriceFillableProperties, DeliveryKpiFillableProperties } from "@api/commonTypes/common";
import { ErrorResponse } from "@api/commonTypes/errors";
import { EmptyDataResponse } from "@api/commonTypes/index";

export type SearchPointEnumValuesRequest = SearchEnumValuesBody;

export type SearchPointEnumValuesResponse = ErrorResponse;
export type DeleteDeliveryServiceDocumentRequest = { id: number | string };

export type DeleteDeliveryServiceDocumentResponse = EmptyDataResponse | ErrorResponse;
export type DeleteDeliveryServiceManagerRequest = { id: number | string };

export type DeleteDeliveryServiceManagerResponse = EmptyDataResponse | ErrorResponse;
export type DeleteFederalDistrictRequest = { id: number | string };

export type DeleteFederalDistrictResponse = EmptyDataResponse | ErrorResponse;
export type DeleteRegionRequest = { id: number | string };

export type DeleteRegionResponse = EmptyDataResponse | ErrorResponse;
export type DeleteDeliveryPriceRequest = { id: number | string };

export type DeleteDeliveryPriceResponse = EmptyDataResponse | ErrorResponse;
export type SearchTariffEnumValuesRequest = SearchEnumValuesBody;

export type SearchTariffEnumValuesResponse = ErrorResponse;

export type GetDeliveryKpiMetaResponse = GetResourceMetaResponse | ErrorResponse;
export type DeleteDeliveryKpiCtRequest = { id: number | string };

export type DeleteDeliveryKpiCtResponse = EmptyDataResponse | ErrorResponse;
export type DeleteDeliveryKpiPptRequest = { id: number | string };

export type DeleteDeliveryKpiPptResponse = EmptyDataResponse | ErrorResponse;
export interface AddPaymentMethodsToDeliveryServiceRequest {
  /**
   * Id добавляемых способов оплаты
   */
  payment_methods: number[];
}

export type AddPaymentMethodsToDeliveryServiceResponse = EmptyDataResponse | ErrorResponse;
export interface DeletePaymentMethodFromDeliveryServiceRequest {
  /**
   * Id удаляемого способа оплаты
   */
  payment_method: number;
}

export type DeletePaymentMethodFromDeliveryServiceResponse = EmptyDataResponse | ErrorResponse;


        export type GetDeliveryServiceResponseData = {
  /**
   * Идентификатор службы доставки
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
   * Название
   */
  name?: string;
  /**
   * Дата регистрации
   */
  registered_at?: string;
  legal_info_company_name?: string | null;
  legal_info_company_address?: {} | null;
  legal_info_inn?: string | null;
  legal_info_payment_account?: string | null;
  legal_info_bik?: string | null;
  legal_info_bank?: string | null;
  legal_info_bank_correspondent_account?: string | null;
  general_manager_name?: string | null;
  contract_number?: string | null;
  contract_date?: string | null;
  vat_rate?: number | null;
  taxation_type?: number | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - Активен
   *   * `2` - Не активен
   *
   */
  status?: 1 | 2;
  comment?: string | null;
  apiship_key?: string | null;
  /**
   * Приоритет (чем меньше, тем выше)
   */
  priority?: number;
  /**
   * Максимальное кол-во отправлений в день
   */
  max_shipments_per_day?: number;
  /**
   * Время создания заявки для забора отправления день-в-день
   */
  max_cargo_export_time?: string;
  /**
   * Консолидация многоместных отправлений?
   */
  do_consolidation?: boolean;
  /**
   * Расконсолидация многоместных отправлений?
   */
  do_deconsolidation?: boolean;
  /**
   * Осуществляет нулевую милю?
   */
  do_zero_mile?: boolean;
  /**
   * Осуществляет экспресс-доставку?
   */
  do_express_delivery?: boolean;
  /**
   * Принимает возвраты?
   */
  do_return?: boolean;
  /**
   * Осуществляет доставку опасных грузов?
   */
  do_dangerous_products_delivery?: boolean;
  /**
   * Перевозка крупногабаритных грузов?
   */
  do_transportation_oversized_cargo?: boolean;
  /**
   * Добавлять услугу частичного отказ в заказ на доставку?
   */
  add_partial_reject_service?: boolean;
  /**
   * Добавлять услугу страхования груза в заказ на доставку?
   */
  add_insurance_service?: boolean;
  /**
   * Добавлять услугу примерки в заказ на доставку?
   */
  add_fitting_service?: boolean;
  /**
   * Добавлять услугу возврата в заказ на доставку?
   */
  add_return_service?: boolean;
  /**
   * Добавлять услугу вскрытия при получении в заказ на доставку?
   */
  add_open_service?: boolean;
  /**
   * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
   */
  pct?: number;
} & {
  payment_methods?: number[];
};

        export type GetDeliveryServiceResponseMeta = {};

        export type GetDeliveryServiceResponse = CommonResponse<GetDeliveryServiceResponseData, GetDeliveryServiceResponseMeta>;
        export type PatchDeliveryServiceRequest = DeliveryServiceFillableProperties;


        export type PatchDeliveryServiceResponseData = {
  /**
   * Идентификатор службы доставки
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
   * Название
   */
  name?: string;
  /**
   * Дата регистрации
   */
  registered_at?: string;
  legal_info_company_name?: string | null;
  legal_info_company_address?: {} | null;
  legal_info_inn?: string | null;
  legal_info_payment_account?: string | null;
  legal_info_bik?: string | null;
  legal_info_bank?: string | null;
  legal_info_bank_correspondent_account?: string | null;
  general_manager_name?: string | null;
  contract_number?: string | null;
  contract_date?: string | null;
  vat_rate?: number | null;
  taxation_type?: number | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - Активен
   *   * `2` - Не активен
   *
   */
  status?: 1 | 2;
  comment?: string | null;
  apiship_key?: string | null;
  /**
   * Приоритет (чем меньше, тем выше)
   */
  priority?: number;
  /**
   * Максимальное кол-во отправлений в день
   */
  max_shipments_per_day?: number;
  /**
   * Время создания заявки для забора отправления день-в-день
   */
  max_cargo_export_time?: string;
  /**
   * Консолидация многоместных отправлений?
   */
  do_consolidation?: boolean;
  /**
   * Расконсолидация многоместных отправлений?
   */
  do_deconsolidation?: boolean;
  /**
   * Осуществляет нулевую милю?
   */
  do_zero_mile?: boolean;
  /**
   * Осуществляет экспресс-доставку?
   */
  do_express_delivery?: boolean;
  /**
   * Принимает возвраты?
   */
  do_return?: boolean;
  /**
   * Осуществляет доставку опасных грузов?
   */
  do_dangerous_products_delivery?: boolean;
  /**
   * Перевозка крупногабаритных грузов?
   */
  do_transportation_oversized_cargo?: boolean;
  /**
   * Добавлять услугу частичного отказ в заказ на доставку?
   */
  add_partial_reject_service?: boolean;
  /**
   * Добавлять услугу страхования груза в заказ на доставку?
   */
  add_insurance_service?: boolean;
  /**
   * Добавлять услугу примерки в заказ на доставку?
   */
  add_fitting_service?: boolean;
  /**
   * Добавлять услугу возврата в заказ на доставку?
   */
  add_return_service?: boolean;
  /**
   * Добавлять услугу вскрытия при получении в заказ на доставку?
   */
  add_open_service?: boolean;
  /**
   * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
   */
  pct?: number;
} & {
  payment_methods?: number[];
};

        export type PatchDeliveryServiceResponseMeta = {};

        export type PatchDeliveryServiceResponse = CommonResponse<PatchDeliveryServiceResponseData, PatchDeliveryServiceResponseMeta>;
        


        export type GetDeliveryServiceDocumentResponseData = {
  /**
   * Идентификатор документа
   */
  id?: number;
  /**
   * Информация о файле в виде объекта. Для потребителя неважно какие внутри ключи
   */
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type GetDeliveryServiceDocumentResponseMeta = {};

        export type GetDeliveryServiceDocumentResponse = CommonResponse<GetDeliveryServiceDocumentResponseData, GetDeliveryServiceDocumentResponseMeta>;
        export type UploadDeliveryServiceDocumentFileRequest = {
                        formData: FormData;
                        id: number | string;
                    }


        export type UploadDeliveryServiceDocumentFileResponseData = {
  /**
   * Идентификатор документа
   */
  id?: number;
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type UploadDeliveryServiceDocumentFileResponseMeta = {};

        export type UploadDeliveryServiceDocumentFileResponse = CommonResponse<UploadDeliveryServiceDocumentFileResponseData, UploadDeliveryServiceDocumentFileResponseMeta>;
        export type DeleteDeliveryServiceDocumentFileRequest = { id: number | string };


        export type DeleteDeliveryServiceDocumentFileResponseData = {
  /**
   * Идентификатор документа
   */
  id?: number;
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type DeleteDeliveryServiceDocumentFileResponseMeta = {};

        export type DeleteDeliveryServiceDocumentFileResponse = CommonResponse<DeleteDeliveryServiceDocumentFileResponseData, DeleteDeliveryServiceDocumentFileResponseMeta>;
        


        export type GetDeliveryServiceManagerResponseData = {
  /**
   * Идентификатор менеджера
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type GetDeliveryServiceManagerResponseMeta = {};

        export type GetDeliveryServiceManagerResponse = CommonResponse<GetDeliveryServiceManagerResponseData, GetDeliveryServiceManagerResponseMeta>;
        


        export type GetFederalDistrictResponseData = {
  /**
   * Идентификатор федерального округа
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
   * Название
   */
  name?: string;
} & {
  /**
   * Регионы
   */
  regions?: ({
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  })[];
};

        export type GetFederalDistrictResponseMeta = {};

        export type GetFederalDistrictResponse = CommonResponse<GetFederalDistrictResponseData, GetFederalDistrictResponseMeta>;
        export type PatchFederalDistrictRequest = FederalDistrictFillableProperties;


        export type PatchFederalDistrictResponseData = {
  /**
   * Идентификатор федерального округа
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
   * Название
   */
  name?: string;
} & {
  /**
   * Регионы
   */
  regions?: ({
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  })[];
};

        export type PatchFederalDistrictResponseMeta = {};

        export type PatchFederalDistrictResponse = CommonResponse<PatchFederalDistrictResponseData, PatchFederalDistrictResponseMeta>;
        


        export type GetRegionResponseData = {
  /**
   * Идентификатор региона
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
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
};

        export type GetRegionResponseMeta = {};

        export type GetRegionResponse = CommonResponse<GetRegionResponseData, GetRegionResponseMeta>;
        export type PatchRegionRequest = RegionFillableProperties;


        export type PatchRegionResponseData = {
  /**
   * Идентификатор региона
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
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
};

        export type PatchRegionResponseMeta = {};

        export type PatchRegionResponse = CommonResponse<PatchRegionResponseData, PatchRegionResponseMeta>;
        


        export type GetDeliveryPriceResponseData = {
  /**
   * Идентификатор цены доставки
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
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {
  federal_district?: {
    /**
     * Идентификатор федерального округа
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
     * Название
     */
    name?: string;
  } & {
    /**
     * Регионы
     */
    regions?: ({
      /**
       * Идентификатор региона
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
       * Id федерального округа
       */
      federal_district_id?: number;
      /**
       * Название
       */
      name?: string;
      /**
       * Id ФИАС
       */
      guid?: string;
    })[];
  };
  region?: {
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  };
};

        export type GetDeliveryPriceResponseMeta = {};

        export type GetDeliveryPriceResponse = CommonResponse<GetDeliveryPriceResponseData, GetDeliveryPriceResponseMeta>;
        export type PatchDeliveryPriceRequest = DeliveryPriceFillableProperties;


        export type PatchDeliveryPriceResponseData = {
  /**
   * Идентификатор цены доставки
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
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {
  federal_district?: {
    /**
     * Идентификатор федерального округа
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
     * Название
     */
    name?: string;
  } & {
    /**
     * Регионы
     */
    regions?: ({
      /**
       * Идентификатор региона
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
       * Id федерального округа
       */
      federal_district_id?: number;
      /**
       * Название
       */
      name?: string;
      /**
       * Id ФИАС
       */
      guid?: string;
    })[];
  };
  region?: {
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  };
};

        export type PatchDeliveryPriceResponseMeta = {};

        export type PatchDeliveryPriceResponse = CommonResponse<PatchDeliveryPriceResponseData, PatchDeliveryPriceResponseMeta>;
        


        export type GetDeliveryKpiResponseData = {
  /**
   * Ready-To-Go time - время для проверки заказа АОЗ до его передачи в MAS (мин)
   */
  rtg?: number;
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
} & {
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
};

        export type GetDeliveryKpiResponseMeta = {};

        export type GetDeliveryKpiResponse = CommonResponse<GetDeliveryKpiResponseData, GetDeliveryKpiResponseMeta>;
        export type PatchDeliveryKpiRequest = DeliveryKpiFillableProperties;


        export type PatchDeliveryKpiResponseData = {
  /**
   * Ready-To-Go time - время для проверки заказа АОЗ до его передачи в MAS (мин)
   */
  rtg?: number;
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
} & {
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
};

        export type PatchDeliveryKpiResponseMeta = {};

        export type PatchDeliveryKpiResponse = CommonResponse<PatchDeliveryKpiResponseData, PatchDeliveryKpiResponseMeta>;
        


        export type GetDeliveryKpiCtResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
};

        export type GetDeliveryKpiCtResponseMeta = {};

        export type GetDeliveryKpiCtResponse = CommonResponse<GetDeliveryKpiCtResponseData, GetDeliveryKpiCtResponseMeta>;
        


        export type GetDeliveryKpiPptResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
};

        export type GetDeliveryKpiPptResponseMeta = {};

        export type GetDeliveryKpiPptResponse = CommonResponse<GetDeliveryKpiPptResponseData, GetDeliveryKpiPptResponseMeta>;
        


        export type GetDeliveryMethodsResponseData = ({
  /**
   * Идентификатор способа доставки
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
})[];

        export type GetDeliveryMethodsResponseMeta = {};

        export type GetDeliveryMethodsResponse = CommonResponse<GetDeliveryMethodsResponseData, GetDeliveryMethodsResponseMeta>;
        


        export type GetDeliveryServiceStatusesResponseData = ({
  /**
   * Идентификатор статуса службы доставки
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
})[];

        export type GetDeliveryServiceStatusesResponseMeta = {};

        export type GetDeliveryServiceStatusesResponse = CommonResponse<GetDeliveryServiceStatusesResponseData, GetDeliveryServiceStatusesResponseMeta>;
        


        export type GetShipmentMethodsResponseData = ({
  /**
   * Идентификатор способа отгрузки (доставки на нулевой миле - доставка от мерчанта до распределительного центра)
   */
  id?: number;
} & {
  /**
   * Название
   */
  name?: string;
})[];

        export type GetShipmentMethodsResponseMeta = {};

        export type GetShipmentMethodsResponse = CommonResponse<GetShipmentMethodsResponseData, GetShipmentMethodsResponseMeta>;
        export type CancelCargoRequest = { id: number | string };


        export type CancelCargoResponseData = {
  /**
   * id
   */
  id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор склада продавца
   */
  store_id?: number;
  /**
   * Идентификатор сервиса доставки
   */
  delivery_service_id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Дата установки статуса
   */
  status_at?: string;
  /**
   * Дата установки флага проблемного груза
   */
  is_problem_at?: string;
  /**
   * Дата установки флага отмены груза
   */
  is_canceled_at?: string;
} & {
  status?: number & (1 | 2);
  /**
   * Флаг, что у груза проблемы при отгрузке
   */
  is_problem?: boolean;
  /**
   * Флаг, что груз отменен
   */
  is_canceled?: boolean;
  /**
   * Ширина
   */
  width?: number;
  /**
   * Высота
   */
  height?: number;
  /**
   * Длина
   */
  length?: number;
  /**
   * Вес
   */
  weight?: number;
  /**
   * Последнее сообщение мерчанта о проблеме с отгрузкой
   */
  shipping_problem_comment?: string;
} & {
  /**
   * Ссылки на отправления в OMS
   */
  shipments?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * номер отгрузки
     */
    number?: string;
    /**
     * ид отправления
     */
    delivery_id?: number;
    /**
     * ид мерчанта
     */
    seller_id?: number;
    /**
     * ид склада
     */
    store_id?: number;
    /**
     * дата установки статуса
     */
    status_at?: string;
    /**
     * сумма товаров отгрузки (расчитывается автоматически), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * статус отгрузки из OrdersShipmentStatusEnum
     */
    status?: number;
  } & {
    /**
     * Объект типа Delivery
     */
    delivery?: {};
    order_items?: ({
      /**
       * id элемента корзины
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * ID отгрузки
       */
      shipment_id?: number;
      /**
       * ID оффера
       */
      offer_id?: number;
      /**
       * Название товара
       */
      name?: string;
      /**
       * Кол-во товара
       */
      qty?: number;
      /**
       * Цена товара (цена * qty - скидки), коп.
       */
      price?: number;
      /**
       * Цена единичного товара (в коп.)
       */
      price_per_one?: number;
      /**
       * Цена товара до скидок (цена * qty), коп.
       */
      cost?: number;
      /**
       * Цена единичного товара до скидок (в коп.)
       */
      cost_per_one?: number;
      /**
       * Информация о товаре
       */
      product_data?: {
        /**
         * Вес нетто товара (кг)
         */
        weight?: number;
        /**
         * Вес брутто товара (кг)
         */
        weight_gross?: number;
        /**
         * Ширина товара (мм)
         */
        width?: number;
        /**
         * Высота товара (мм)
         */
        height?: number;
        /**
         * Длина товара (мм)
         */
        length?: number;
        /**
         * место хранения в магазине
         */
        storage_address?: string | null;
        /**
         * артикул (EAN)
         */
        barcode?: string | null;
      };
      /**
       * Количество возвращаемых элементов корзины в заявке
       */
      refund_qty?: number | null;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & {
        main_image_url: string | null;
        main_image_file: string | null;
      } & ({
          external_id?: string | null;
          barcode?: string | null;
        } & {
          category_id?: number | null;
          brand_id?: number | null;
          /**
           * Название товара
           */
          name?: string;
          code?: string | null;
          description?: string | null;
          /**
           * Тип товара из CatalogProductTypeEnum
           */
          type?: number;
          /**
           * Публикация разрешена
           */
          allow_publish?: boolean;
          /**
           * Артикул
           */
          vendor_code?: string;
          weight?: number | null;
          weight_gross?: number | null;
          length?: number | null;
          width?: number | null;
          height?: number | null;
          is_adult?: boolean | null;
          base_price?: number | null;
        }) & {
          brand?: {
            /**
             * Идентификатор бренда
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
            image_url?: string | null;
            logo_url?: string | null;
          } & {
            /**
             * Название бренда
             */
            name?: string;
            /**
             * Активность бренда
             */
            is_active?: boolean;
            code?: string | null;
            description?: string | null;
          } & {};
          category?: {
            /**
             * Идентификатор категории
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
            /**
             * Признак активности с учетом иерархии
             */
            is_real_active?: boolean;
          } & {
            /**
             * Название категории
             */
            name?: string;
            /**
             * Код категории
             */
            code?: string;
            parent_id?: number | null;
            /**
             * Категория наследует атрибуты родительской
             */
            is_inherits_properties?: boolean;
            /**
             * Признак активности данной категории
             */
            is_active?: boolean;
          } & {
            properties?: {
              /**
               * Название свойства
               */
              name?: string;
              /**
               * Публичное наименование
               */
              display_name?: string;
              /**
               * Код свойства
               */
              code?: string;
              /**
               * Тип свойства из PropertyTypeEnum
               */
              type?: string;
              /**
               * Подсказка при заполнении для значения
               */
              hint_value?: string;
              /**
               * Подсказка при заполнении для названия значения
               */
              hint_value_name?: string;
              /**
               * Поддерживает множественные значения
               */
              is_multiple?: boolean;
              /**
               * Выводится в фильтрах на витрине
               */
              is_filterable?: boolean;
              /**
               * Выводить на витрине
               */
              is_public?: boolean;
              /**
               * Активность атрибут
               */
              is_active?: boolean;
              /**
               * Атрибут имеет справочник значений
               */
              has_directory?: boolean;
              /**
               * Наследуемой от родительской категории атрибут
               */
              is_inherited?: boolean;
              /**
               * Атрибут обязателен для заполнения
               */
              is_required?: boolean;
              /**
               * Признак системного атрибута
               */
              is_system?: boolean;
              /**
               * Атрибут модерируется
               */
              is_moderated?: boolean;
              /**
               * Свойство используется для склейки товаров
               */
              is_gluing?: boolean;
              /**
               * Признак общего для всех категорий атрибута
               */
              is_common?: boolean;
              /**
               * Идентификатор атрибута, которому принадлежит значение
               */
              property_id?: number;
            }[];
            hidden_properties?: {
              /**
               * Название свойства
               */
              name?: string;
              /**
               * Публичное наименование
               */
              display_name?: string;
              /**
               * Код свойства
               */
              code?: string;
              /**
               * Тип свойства из PropertyTypeEnum
               */
              type?: string;
              /**
               * Подсказка при заполнении для значения
               */
              hint_value?: string;
              /**
               * Подсказка при заполнении для названия значения
               */
              hint_value_name?: string;
              /**
               * Поддерживает множественные значения
               */
              is_multiple?: boolean;
              /**
               * Выводится в фильтрах на витрине
               */
              is_filterable?: boolean;
              /**
               * Выводить на витрине
               */
              is_public?: boolean;
              /**
               * Активность атрибут
               */
              is_active?: boolean;
              /**
               * Атрибут имеет справочник значений
               */
              has_directory?: boolean;
              /**
               * Наследуемой от родительской категории атрибут
               */
              is_inherited?: boolean;
              /**
               * Атрибут обязателен для заполнения
               */
              is_required?: boolean;
              /**
               * Признак системного атрибута
               */
              is_system?: boolean;
              /**
               * Атрибут модерируется
               */
              is_moderated?: boolean;
              /**
               * Свойство используется для склейки товаров
               */
              is_gluing?: boolean;
              /**
               * Признак общего для всех категорий атрибута
               */
              is_common?: boolean;
              /**
               * Идентификатор атрибута, которому принадлежит значение
               */
              property_id?: number;
            }[];
          };
          images?: ({
            /**
             * Идентификатор картинки
             */
            id?: number;
            /**
             * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
             */
            is_external?: boolean;
            /**
             * URL картинки
             */
            url?: string;
          } & {
            name?: string | null;
            /**
             * Порядок сортирковки в коллекции картинок
             */
            sort?: number;
          })[];
          attributes?: ({
            /**
             * Тип значения из PropertyTypeEnum
             */
            type?: string;
            /**
             * Ссылка на файл
             */
            url?: string;
          } & {
            /**
             * Идентификатор атрибута
             */
            property_id?: number;
            /**
             * Значение элемента справочника (string|number|integer|boolean)
             */
            value?: string | boolean | number;
            name?: string | null;
            /**
             * Идентификатор значения справочника. Если установлен, то value и name задавать не нужно.
             */
            directory_value_id?: number;
          })[];
          product_groups?: ({
            /**
             * Идентификатор склейки
             */
            id?: number;
            /**
             * Кол-во товаров в склейке
             */
            products_count?: number;
            main_product_image?: string | null;
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
             * Идентификатор категории
             */
            category_id?: number;
            main_product_id?: number | null;
            /**
             * Название
             */
            name?: string;
            /**
             * Активность
             */
            is_active?: boolean;
          } & {
            category?: {
              /**
               * Идентификатор категории
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
              /**
               * Признак активности с учетом иерархии
               */
              is_real_active?: boolean;
            } & {
              /**
               * Название категории
               */
              name?: string;
              /**
               * Код категории
               */
              code?: string;
              parent_id?: number | null;
              /**
               * Категория наследует атрибуты родительской
               */
              is_inherits_properties?: boolean;
              /**
               * Признак активности данной категории
               */
              is_active?: boolean;
            } & {
              properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
              hidden_properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
            };
            main_product?: {
              /**
               * Идентификатор товара
               */
              id: number;
              /**
               * Дата создания
               */
              created_at: string;
              /**
               * Дата обновления
               */
              updated_at: string;
            } & ({
              external_id?: string | null;
              barcode?: string | null;
            } & {
              category_id?: number | null;
              brand_id?: number | null;
              /**
               * Название товара
               */
              name?: string;
              code?: string | null;
              description?: string | null;
              /**
               * Тип товара из CatalogProductTypeEnum
               */
              type?: number;
              /**
               * Публикация разрешена
               */
              allow_publish?: boolean;
              /**
               * Артикул
               */
              vendor_code?: string;
              weight?: number | null;
              weight_gross?: number | null;
              length?: number | null;
              width?: number | null;
              height?: number | null;
              is_adult?: boolean | null;
              base_price?: number | null;
            }) & {};
            products?: ({
              /**
               * Идентификатор товара
               */
              id: number;
              /**
               * Дата создания
               */
              created_at: string;
              /**
               * Дата обновления
               */
              updated_at: string;
            } & ({
              external_id?: string | null;
              barcode?: string | null;
            } & {
              category_id?: number | null;
              brand_id?: number | null;
              /**
               * Название товара
               */
              name?: string;
              code?: string | null;
              description?: string | null;
              /**
               * Тип товара из CatalogProductTypeEnum
               */
              type?: number;
              /**
               * Публикация разрешена
               */
              allow_publish?: boolean;
              /**
               * Артикул
               */
              vendor_code?: string;
              weight?: number | null;
              weight_gross?: number | null;
              length?: number | null;
              width?: number | null;
              height?: number | null;
              is_adult?: boolean | null;
              base_price?: number | null;
            }) & {})[];
          } & {})[];
          /**
           * Есть ли незаполненные обязательные атрибуты
           */
          no_filled_required_attributes?: boolean;
        } & {};
      stock?: {
        /**
         * Идентификатор стока
         */
        id?: number;
      } & {
        /**
         * ID склада
         */
        store_id?: number;
        /**
         * ID товарного предложения
         */
        offer_id?: number;
        /**
         * Идентификатор товара
         */
        product_id?: number;
        /**
         * Количество товара для резервирования
         */
        qty?: number;
      } & {};
    })[];
    store?: {
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
    seller?: {
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
        /**
         * Фамилия
         */
        last_name?: string | null;
        /**
         * Имя
         */
        first_name?: string | null;
        /**
         * Отчество
         */
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
          /**
           * Время жизни роли
           */
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
        /**
         * Фамилия
         */
        last_name?: string | null;
        /**
         * Имя
         */
        first_name?: string | null;
        /**
         * Отчество
         */
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
          /**
           * Время жизни роли
           */
          expires?: string | null;
        })[];
      };
    };
  })[];
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type CancelCargoResponseMeta = {};

        export type CancelCargoResponse = CommonResponse<CancelCargoResponseData, CancelCargoResponseMeta>;
        export type CancelCargoOrdersRequest = { id: number | string };


        export type CancelCargoOrdersResponseData = {
  /**
   * id
   */
  id?: number;
  /**
   * Номер заявки СДЭК на вызов курьера
   */
  cdek_intake_number?: string;
  /**
   * Номер заявки во внешней системе
   */
  external_id?: string;
  /**
   * Текст последней ошибки при создании заявки на вызов курьера для забора груза в службе доставки
   */
  error_external_id?: string;
} & {
  status?: number & (1 | 2 | 3);
  /**
   * Идентификатор груза
   */
  cargo_id?: number;
  /**
   * Идентификатор таймслота
   */
  timeslot_id?: string;
  /**
   * Дата забора груза
   */
  timeslot_from?: string;
  /**
   * Дата забора груза
   */
  timeslot_to?: string;
  /**
   * Дата забора груза
   */
  date?: string;
} & {
  cargo?: {
    /**
     * id
     */
    id?: number;
    /**
     * Идентификатор продавца
     */
    seller_id?: number;
    /**
     * Идентификатор склада продавца
     */
    store_id?: number;
    /**
     * Идентификатор сервиса доставки
     */
    delivery_service_id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Дата установки статуса
     */
    status_at?: string;
    /**
     * Дата установки флага проблемного груза
     */
    is_problem_at?: string;
    /**
     * Дата установки флага отмены груза
     */
    is_canceled_at?: string;
  } & {
    status?: number & (1 | 2);
    /**
     * Флаг, что у груза проблемы при отгрузке
     */
    is_problem?: boolean;
    /**
     * Флаг, что груз отменен
     */
    is_canceled?: boolean;
    /**
     * Ширина
     */
    width?: number;
    /**
     * Высота
     */
    height?: number;
    /**
     * Длина
     */
    length?: number;
    /**
     * Вес
     */
    weight?: number;
    /**
     * Последнее сообщение мерчанта о проблеме с отгрузкой
     */
    shipping_problem_comment?: string;
  } & {
    /**
     * Ссылки на отправления в OMS
     */
    shipments?: ({
      /**
       * идентификатор
       */
      id?: number;
      /**
       * номер отгрузки
       */
      number?: string;
      /**
       * ид отправления
       */
      delivery_id?: number;
      /**
       * ид мерчанта
       */
      seller_id?: number;
      /**
       * ид склада
       */
      store_id?: number;
      /**
       * дата установки статуса
       */
      status_at?: string;
      /**
       * сумма товаров отгрузки (расчитывается автоматически), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * статус отгрузки из OrdersShipmentStatusEnum
       */
      status?: number;
    } & {
      /**
       * Объект типа Delivery
       */
      delivery?: {};
      order_items?: ({
        /**
         * id элемента корзины
         */
        id?: number;
        /**
         * ID заказа
         */
        order_id?: number;
        /**
         * ID отгрузки
         */
        shipment_id?: number;
        /**
         * ID оффера
         */
        offer_id?: number;
        /**
         * Название товара
         */
        name?: string;
        /**
         * Кол-во товара
         */
        qty?: number;
        /**
         * Цена товара (цена * qty - скидки), коп.
         */
        price?: number;
        /**
         * Цена единичного товара (в коп.)
         */
        price_per_one?: number;
        /**
         * Цена товара до скидок (цена * qty), коп.
         */
        cost?: number;
        /**
         * Цена единичного товара до скидок (в коп.)
         */
        cost_per_one?: number;
        /**
         * Информация о товаре
         */
        product_data?: {
          /**
           * Вес нетто товара (кг)
           */
          weight?: number;
          /**
           * Вес брутто товара (кг)
           */
          weight_gross?: number;
          /**
           * Ширина товара (мм)
           */
          width?: number;
          /**
           * Высота товара (мм)
           */
          height?: number;
          /**
           * Длина товара (мм)
           */
          length?: number;
          storage_address?: string | null;
          barcode?: string | null;
        };
        refund_qty?: number | null;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
      } & {
        product?: {
          /**
           * Идентификатор товара
           */
          id: number;
          /**
           * Дата создания
           */
          created_at: string;
          /**
           * Дата обновления
           */
          updated_at: string;
        } & {
          main_image_url: string | null;
          main_image_file: string | null;
        } & ({
            external_id?: string | null;
            barcode?: string | null;
          } & {
            category_id?: number | null;
            brand_id?: number | null;
            /**
             * Название товара
             */
            name?: string;
            code?: string | null;
            description?: string | null;
            /**
             * Тип товара из CatalogProductTypeEnum
             */
            type?: number;
            /**
             * Публикация разрешена
             */
            allow_publish?: boolean;
            /**
             * Артикул
             */
            vendor_code?: string;
            weight?: number | null;
            weight_gross?: number | null;
            length?: number | null;
            width?: number | null;
            height?: number | null;
            is_adult?: boolean | null;
            base_price?: number | null;
          }) & {
            brand?: {
              /**
               * Идентификатор бренда
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
              image_url?: string | null;
              logo_url?: string | null;
            } & {
              /**
               * Название бренда
               */
              name?: string;
              /**
               * Активность бренда
               */
              is_active?: boolean;
              code?: string | null;
              description?: string | null;
            } & {};
            category?: {
              /**
               * Идентификатор категории
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
              /**
               * Признак активности с учетом иерархии
               */
              is_real_active?: boolean;
            } & {
              /**
               * Название категории
               */
              name?: string;
              /**
               * Код категории
               */
              code?: string;
              parent_id?: number | null;
              /**
               * Категория наследует атрибуты родительской
               */
              is_inherits_properties?: boolean;
              /**
               * Признак активности данной категории
               */
              is_active?: boolean;
            } & {
              properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
              hidden_properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
            };
            images?: ({
              /**
               * Идентификатор картинки
               */
              id?: number;
              /**
               * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
               */
              is_external?: boolean;
              /**
               * URL картинки
               */
              url?: string;
            } & {
              name?: string | null;
              /**
               * Порядок сортирковки в коллекции картинок
               */
              sort?: number;
            })[];
            attributes?: ({
              /**
               * Тип значения из PropertyTypeEnum
               */
              type?: string;
              /**
               * Ссылка на файл
               */
              url?: string;
            } & {
              /**
               * Идентификатор атрибута
               */
              property_id?: number;
              /**
               * Значение элемента справочника (string|number|integer|boolean)
               */
              value?: string | boolean | number;
              name?: string | null;
              /**
               * Идентификатор значения справочника. Если установлен, то value и name задавать не нужно.
               */
              directory_value_id?: number;
            })[];
            product_groups?: ({
              /**
               * Идентификатор склейки
               */
              id?: number;
              /**
               * Кол-во товаров в склейке
               */
              products_count?: number;
              main_product_image?: string | null;
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
               * Идентификатор категории
               */
              category_id?: number;
              main_product_id?: number | null;
              /**
               * Название
               */
              name?: string;
              /**
               * Активность
               */
              is_active?: boolean;
            } & {
              category?: {
                /**
                 * Идентификатор категории
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
                /**
                 * Признак активности с учетом иерархии
                 */
                is_real_active?: boolean;
              } & {
                /**
                 * Название категории
                 */
                name?: string;
                /**
                 * Код категории
                 */
                code?: string;
                parent_id?: number | null;
                /**
                 * Категория наследует атрибуты родительской
                 */
                is_inherits_properties?: boolean;
                /**
                 * Признак активности данной категории
                 */
                is_active?: boolean;
              } & {
                properties?: {
                  /**
                   * Название свойства
                   */
                  name?: string;
                  /**
                   * Публичное наименование
                   */
                  display_name?: string;
                  /**
                   * Код свойства
                   */
                  code?: string;
                  /**
                   * Тип свойства из PropertyTypeEnum
                   */
                  type?: string;
                  /**
                   * Подсказка при заполнении для значения
                   */
                  hint_value?: string;
                  /**
                   * Подсказка при заполнении для названия значения
                   */
                  hint_value_name?: string;
                  /**
                   * Поддерживает множественные значения
                   */
                  is_multiple?: boolean;
                  /**
                   * Выводится в фильтрах на витрине
                   */
                  is_filterable?: boolean;
                  /**
                   * Выводить на витрине
                   */
                  is_public?: boolean;
                  /**
                   * Активность атрибут
                   */
                  is_active?: boolean;
                  /**
                   * Атрибут имеет справочник значений
                   */
                  has_directory?: boolean;
                  /**
                   * Наследуемой от родительской категории атрибут
                   */
                  is_inherited?: boolean;
                  /**
                   * Атрибут обязателен для заполнения
                   */
                  is_required?: boolean;
                  /**
                   * Признак системного атрибута
                   */
                  is_system?: boolean;
                  /**
                   * Атрибут модерируется
                   */
                  is_moderated?: boolean;
                  /**
                   * Свойство используется для склейки товаров
                   */
                  is_gluing?: boolean;
                  /**
                   * Признак общего для всех категорий атрибута
                   */
                  is_common?: boolean;
                  /**
                   * Идентификатор атрибута, которому принадлежит значение
                   */
                  property_id?: number;
                }[];
                hidden_properties?: {
                  /**
                   * Название свойства
                   */
                  name?: string;
                  /**
                   * Публичное наименование
                   */
                  display_name?: string;
                  /**
                   * Код свойства
                   */
                  code?: string;
                  /**
                   * Тип свойства из PropertyTypeEnum
                   */
                  type?: string;
                  /**
                   * Подсказка при заполнении для значения
                   */
                  hint_value?: string;
                  /**
                   * Подсказка при заполнении для названия значения
                   */
                  hint_value_name?: string;
                  /**
                   * Поддерживает множественные значения
                   */
                  is_multiple?: boolean;
                  /**
                   * Выводится в фильтрах на витрине
                   */
                  is_filterable?: boolean;
                  /**
                   * Выводить на витрине
                   */
                  is_public?: boolean;
                  /**
                   * Активность атрибут
                   */
                  is_active?: boolean;
                  /**
                   * Атрибут имеет справочник значений
                   */
                  has_directory?: boolean;
                  /**
                   * Наследуемой от родительской категории атрибут
                   */
                  is_inherited?: boolean;
                  /**
                   * Атрибут обязателен для заполнения
                   */
                  is_required?: boolean;
                  /**
                   * Признак системного атрибута
                   */
                  is_system?: boolean;
                  /**
                   * Атрибут модерируется
                   */
                  is_moderated?: boolean;
                  /**
                   * Свойство используется для склейки товаров
                   */
                  is_gluing?: boolean;
                  /**
                   * Признак общего для всех категорий атрибута
                   */
                  is_common?: boolean;
                  /**
                   * Идентификатор атрибута, которому принадлежит значение
                   */
                  property_id?: number;
                }[];
              };
              main_product?: {
                /**
                 * Идентификатор товара
                 */
                id: number;
                /**
                 * Дата создания
                 */
                created_at: string;
                /**
                 * Дата обновления
                 */
                updated_at: string;
              } & ({
                external_id?: string | null;
                barcode?: string | null;
              } & {
                category_id?: number | null;
                brand_id?: number | null;
                /**
                 * Название товара
                 */
                name?: string;
                code?: string | null;
                description?: string | null;
                /**
                 * Тип товара из CatalogProductTypeEnum
                 */
                type?: number;
                /**
                 * Публикация разрешена
                 */
                allow_publish?: boolean;
                /**
                 * Артикул
                 */
                vendor_code?: string;
                weight?: number | null;
                weight_gross?: number | null;
                length?: number | null;
                width?: number | null;
                height?: number | null;
                is_adult?: boolean | null;
                base_price?: number | null;
              }) & {};
              products?: ({
                /**
                 * Идентификатор товара
                 */
                id: number;
                /**
                 * Дата создания
                 */
                created_at: string;
                /**
                 * Дата обновления
                 */
                updated_at: string;
              } & ({
                external_id?: string | null;
                barcode?: string | null;
              } & {
                category_id?: number | null;
                brand_id?: number | null;
                /**
                 * Название товара
                 */
                name?: string;
                code?: string | null;
                description?: string | null;
                /**
                 * Тип товара из CatalogProductTypeEnum
                 */
                type?: number;
                /**
                 * Публикация разрешена
                 */
                allow_publish?: boolean;
                /**
                 * Артикул
                 */
                vendor_code?: string;
                weight?: number | null;
                weight_gross?: number | null;
                length?: number | null;
                width?: number | null;
                height?: number | null;
                is_adult?: boolean | null;
                base_price?: number | null;
              }) & {})[];
            } & {})[];
            /**
             * Есть ли незаполненные обязательные атрибуты
             */
            no_filled_required_attributes?: boolean;
          } & {};
        stock?: {
          /**
           * Идентификатор стока
           */
          id?: number;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * ID товарного предложения
           */
          offer_id?: number;
          /**
           * Идентификатор товара
           */
          product_id?: number;
          /**
           * Количество товара для резервирования
           */
          qty?: number;
        } & {};
      })[];
      store?: {
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
      seller?: {
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
    })[];
    delivery_service?: {
      /**
       * Идентификатор службы доставки
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
       * Название
       */
      name?: string;
      /**
       * Дата регистрации
       */
      registered_at?: string;
      legal_info_company_name?: string | null;
      legal_info_company_address?: {} | null;
      legal_info_inn?: string | null;
      legal_info_payment_account?: string | null;
      legal_info_bik?: string | null;
      legal_info_bank?: string | null;
      legal_info_bank_correspondent_account?: string | null;
      general_manager_name?: string | null;
      contract_number?: string | null;
      contract_date?: string | null;
      vat_rate?: number | null;
      taxation_type?: number | null;
      /**
       * Службы доставки. Расшифровка значений:
       *   * `1` - Активен
       *   * `2` - Не активен
       *
       */
      status?: 1 | 2;
      comment?: string | null;
      apiship_key?: string | null;
      /**
       * Приоритет (чем меньше, тем выше)
       */
      priority?: number;
      /**
       * Максимальное кол-во отправлений в день
       */
      max_shipments_per_day?: number;
      /**
       * Время создания заявки для забора отправления день-в-день
       */
      max_cargo_export_time?: string;
      /**
       * Консолидация многоместных отправлений?
       */
      do_consolidation?: boolean;
      /**
       * Расконсолидация многоместных отправлений?
       */
      do_deconsolidation?: boolean;
      /**
       * Осуществляет нулевую милю?
       */
      do_zero_mile?: boolean;
      /**
       * Осуществляет экспресс-доставку?
       */
      do_express_delivery?: boolean;
      /**
       * Принимает возвраты?
       */
      do_return?: boolean;
      /**
       * Осуществляет доставку опасных грузов?
       */
      do_dangerous_products_delivery?: boolean;
      /**
       * Перевозка крупногабаритных грузов?
       */
      do_transportation_oversized_cargo?: boolean;
      /**
       * Добавлять услугу частичного отказ в заказ на доставку?
       */
      add_partial_reject_service?: boolean;
      /**
       * Добавлять услугу страхования груза в заказ на доставку?
       */
      add_insurance_service?: boolean;
      /**
       * Добавлять услугу примерки в заказ на доставку?
       */
      add_fitting_service?: boolean;
      /**
       * Добавлять услугу возврата в заказ на доставку?
       */
      add_return_service?: boolean;
      /**
       * Добавлять услугу вскрытия при получении в заказ на доставку?
       */
      add_open_service?: boolean;
      /**
       * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
       */
      pct?: number;
    } & {
      payment_methods?: number[];
    };
  };
};

        export type CancelCargoOrdersResponseMeta = {};

        export type CancelCargoOrdersResponse = CommonResponse<CancelCargoOrdersResponseData, CancelCargoOrdersResponseMeta>;
        export interface SearchPointsRequest {
  sort?: string[];
  filter?: {} & {
    /**
     * Идентификатор пункта
     */
    id?: number;
    delivery_service?: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10);
    type?: number & (1 | 2 | 3 | 4);
    /**
     * Название пункта
     */
    name?: string;
    /**
     * Id пункта у службы доставки
     */
    external_id?: string;
    /**
     * Возможна ли оплата картой
     */
    has_payment_card?: boolean;
    /**
     * E-mail
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Активность
     */
    active?: boolean;
  };
  include?: ("metro_stations" | "metro_stations.metro_line")[];
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


        export type SearchPointsResponseData = ({
  /**
   * Идентификатор пункта
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
  delivery_service?: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10);
  type?: number & (1 | 2 | 3 | 4);
  /**
   * Название пункта
   */
  name?: string;
  /**
   * Id пункта у службы доставки
   */
  external_id?: string;
  /**
   * Id пункта у ApiShip
   */
  apiship_external_id?: string;
  /**
   * Возможна ли оплата картой
   */
  has_payment_card?: boolean;
  address?: {} | null;
  /**
   * ФИАС id населенного пункта
   */
  city_guid?: string | null;
  /**
   * E-mail
   */
  email?: string | null;
  /**
   * Телефон
   */
  phone?: string | null;
  /**
   * График работы
   */
  timetable?: string | null;
  /**
   * Активность
   */
  active?: boolean;
} & {
  /**
   * Станции метро
   */
  metro_stations?: ({
    /**
     * Идентификатор станции метро
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
     * Id линии метро
     */
    metro_line_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * ФИАС id населенного пункта
     */
    city_guid?: string;
  } & {
    /**
     * Линия метро
     */
    metro_line?: ({
      /**
       * Идентификатор линии метро
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
       * Название
       */
      name?: string;
    })[];
  })[];
})[];

        export type SearchPointsResponseMeta = {
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

        export type SearchPointsResponse = CommonResponse<SearchPointsResponseData, SearchPointsResponseMeta>;
        export interface SearchDeliveryServicesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор службы доставки
     */
    id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Юр. название компании
     */
    legal_info_company_name?: string | null;
    /**
     * ИНН
     */
    legal_info_inn?: string | null;
    /**
     * р/с
     */
    legal_info_payment_account?: string | null;
    /**
     * БИК
     */
    legal_info_bik?: string | null;
    /**
     * Банк
     */
    legal_info_bank?: string | null;
    /**
     * К/с банка
     */
    legal_info_bank_correspondent_account?: string | null;
    /**
     * ФИО ген. директора
     */
    general_manager_name?: string | null;
    /**
     * Номер договора
     */
    contract_number?: string | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    /**
     * Комментарий
     */
    comment?: string | null;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
  };
  include?: "payment_methods"[];
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


        export type SearchDeliveryServicesResponseData = ({
  /**
   * Идентификатор службы доставки
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
   * Название
   */
  name?: string;
  /**
   * Дата регистрации
   */
  registered_at?: string;
  legal_info_company_name?: string | null;
  legal_info_company_address?: {} | null;
  legal_info_inn?: string | null;
  legal_info_payment_account?: string | null;
  legal_info_bik?: string | null;
  legal_info_bank?: string | null;
  legal_info_bank_correspondent_account?: string | null;
  general_manager_name?: string | null;
  contract_number?: string | null;
  contract_date?: string | null;
  vat_rate?: number | null;
  taxation_type?: number | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - Активен
   *   * `2` - Не активен
   *
   */
  status?: 1 | 2;
  comment?: string | null;
  apiship_key?: string | null;
  /**
   * Приоритет (чем меньше, тем выше)
   */
  priority?: number;
  /**
   * Максимальное кол-во отправлений в день
   */
  max_shipments_per_day?: number;
  /**
   * Время создания заявки для забора отправления день-в-день
   */
  max_cargo_export_time?: string;
  /**
   * Консолидация многоместных отправлений?
   */
  do_consolidation?: boolean;
  /**
   * Расконсолидация многоместных отправлений?
   */
  do_deconsolidation?: boolean;
  /**
   * Осуществляет нулевую милю?
   */
  do_zero_mile?: boolean;
  /**
   * Осуществляет экспресс-доставку?
   */
  do_express_delivery?: boolean;
  /**
   * Принимает возвраты?
   */
  do_return?: boolean;
  /**
   * Осуществляет доставку опасных грузов?
   */
  do_dangerous_products_delivery?: boolean;
  /**
   * Перевозка крупногабаритных грузов?
   */
  do_transportation_oversized_cargo?: boolean;
  /**
   * Добавлять услугу частичного отказ в заказ на доставку?
   */
  add_partial_reject_service?: boolean;
  /**
   * Добавлять услугу страхования груза в заказ на доставку?
   */
  add_insurance_service?: boolean;
  /**
   * Добавлять услугу примерки в заказ на доставку?
   */
  add_fitting_service?: boolean;
  /**
   * Добавлять услугу возврата в заказ на доставку?
   */
  add_return_service?: boolean;
  /**
   * Добавлять услугу вскрытия при получении в заказ на доставку?
   */
  add_open_service?: boolean;
  /**
   * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
   */
  pct?: number;
} & {
  payment_methods?: number[];
})[];

        export type SearchDeliveryServicesResponseMeta = {
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

        export type SearchDeliveryServicesResponse = CommonResponse<SearchDeliveryServicesResponseData, SearchDeliveryServicesResponseMeta>;
        export interface SearchOneDeliveryServiceRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор службы доставки
     */
    id?: number;
    /**
     * Название
     */
    name?: string;
    legal_info_company_name?: string | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
  };
  include?: "payment_methods"[];
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


        export type SearchOneDeliveryServiceResponseData = {
  /**
   * Идентификатор службы доставки
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
   * Название
   */
  name?: string;
  /**
   * Дата регистрации
   */
  registered_at?: string;
  legal_info_company_name?: string | null;
  legal_info_company_address?: {} | null;
  legal_info_inn?: string | null;
  legal_info_payment_account?: string | null;
  legal_info_bik?: string | null;
  legal_info_bank?: string | null;
  legal_info_bank_correspondent_account?: string | null;
  general_manager_name?: string | null;
  contract_number?: string | null;
  contract_date?: string | null;
  vat_rate?: number | null;
  taxation_type?: number | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - Активен
   *   * `2` - Не активен
   *
   */
  status?: 1 | 2;
  comment?: string | null;
  apiship_key?: string | null;
  /**
   * Приоритет (чем меньше, тем выше)
   */
  priority?: number;
  /**
   * Максимальное кол-во отправлений в день
   */
  max_shipments_per_day?: number;
  /**
   * Время создания заявки для забора отправления день-в-день
   */
  max_cargo_export_time?: string;
  /**
   * Консолидация многоместных отправлений?
   */
  do_consolidation?: boolean;
  /**
   * Расконсолидация многоместных отправлений?
   */
  do_deconsolidation?: boolean;
  /**
   * Осуществляет нулевую милю?
   */
  do_zero_mile?: boolean;
  /**
   * Осуществляет экспресс-доставку?
   */
  do_express_delivery?: boolean;
  /**
   * Принимает возвраты?
   */
  do_return?: boolean;
  /**
   * Осуществляет доставку опасных грузов?
   */
  do_dangerous_products_delivery?: boolean;
  /**
   * Перевозка крупногабаритных грузов?
   */
  do_transportation_oversized_cargo?: boolean;
  /**
   * Добавлять услугу частичного отказ в заказ на доставку?
   */
  add_partial_reject_service?: boolean;
  /**
   * Добавлять услугу страхования груза в заказ на доставку?
   */
  add_insurance_service?: boolean;
  /**
   * Добавлять услугу примерки в заказ на доставку?
   */
  add_fitting_service?: boolean;
  /**
   * Добавлять услугу возврата в заказ на доставку?
   */
  add_return_service?: boolean;
  /**
   * Добавлять услугу вскрытия при получении в заказ на доставку?
   */
  add_open_service?: boolean;
  /**
   * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
   */
  pct?: number;
} & {
  payment_methods?: number[];
};

        export type SearchOneDeliveryServiceResponseMeta = {};

        export type SearchOneDeliveryServiceResponse = CommonResponse<SearchOneDeliveryServiceResponseData, SearchOneDeliveryServiceResponseMeta>;
        export type CreateDeliveryServiceDocumentRequest = {
  /**
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {};


        export type CreateDeliveryServiceDocumentResponseData = {
  /**
   * Идентификатор документа
   */
  id?: number;
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type CreateDeliveryServiceDocumentResponseMeta = {};

        export type CreateDeliveryServiceDocumentResponse = CommonResponse<CreateDeliveryServiceDocumentResponseData, CreateDeliveryServiceDocumentResponseMeta>;
        export type ReplaceDeliveryServiceDocumentRequest = {
  /**
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {};


        export type ReplaceDeliveryServiceDocumentResponseData = {
  /**
   * Идентификатор документа
   */
  id?: number;
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type ReplaceDeliveryServiceDocumentResponseMeta = {};

        export type ReplaceDeliveryServiceDocumentResponse = CommonResponse<ReplaceDeliveryServiceDocumentResponseData, ReplaceDeliveryServiceDocumentResponseMeta>;
        export type PatchDeliveryServiceDocumentRequest = {
  /**
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
};


        export type PatchDeliveryServiceDocumentResponseData = {
  /**
   * Идентификатор документа
   */
  id?: number;
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type PatchDeliveryServiceDocumentResponseMeta = {};

        export type PatchDeliveryServiceDocumentResponse = CommonResponse<PatchDeliveryServiceDocumentResponseData, PatchDeliveryServiceDocumentResponseMeta>;
        export interface SearchDeliveryServiceDocumentsRequest {
  sort?: string[];
  filter?: {} & {
    /**
     * Идентификатор документа
     */
    id?: number;
    /**
     * Id службы доставки
     */
    delivery_service_id?: number;
    /**
     * Название
     */
    name?: string;
  };
  include?: "delivery_service"[];
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


        export type SearchDeliveryServiceDocumentsResponseData = ({
  /**
   * Идентификатор документа
   */
  id?: number;
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
})[];

        export type SearchDeliveryServiceDocumentsResponseMeta = {
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

        export type SearchDeliveryServiceDocumentsResponse = CommonResponse<SearchDeliveryServiceDocumentsResponseData, SearchDeliveryServiceDocumentsResponseMeta>;
        export interface SearchOneDeliveryServiceDocumentRequest {
  sort?: string[];
  filter?: {} & {
    /**
     * Идентификатор документа
     */
    id?: number;
    /**
     * Id службы доставки
     */
    delivery_service_id?: number;
    /**
     * Название
     */
    name?: string;
  };
  include?: "delivery_service"[];
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


        export type SearchOneDeliveryServiceDocumentResponseData = {
  /**
   * Идентификатор документа
   */
  id?: number;
  file?: {} | null;
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * Название
   */
  name?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type SearchOneDeliveryServiceDocumentResponseMeta = {};

        export type SearchOneDeliveryServiceDocumentResponse = CommonResponse<SearchOneDeliveryServiceDocumentResponseData, SearchOneDeliveryServiceDocumentResponseMeta>;
        export type CreateDeliveryServiceManagerRequest = {
  /**
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {};


        export type CreateDeliveryServiceManagerResponseData = {
  /**
   * Идентификатор менеджера
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type CreateDeliveryServiceManagerResponseMeta = {};

        export type CreateDeliveryServiceManagerResponse = CommonResponse<CreateDeliveryServiceManagerResponseData, CreateDeliveryServiceManagerResponseMeta>;
        export type ReplaceDeliveryServiceManagerRequest = {
  /**
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {};


        export type ReplaceDeliveryServiceManagerResponseData = {
  /**
   * Идентификатор менеджера
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type ReplaceDeliveryServiceManagerResponseMeta = {};

        export type ReplaceDeliveryServiceManagerResponse = CommonResponse<ReplaceDeliveryServiceManagerResponseData, ReplaceDeliveryServiceManagerResponseMeta>;
        export type PatchDeliveryServiceManagerRequest = {
  /**
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
};


        export type PatchDeliveryServiceManagerResponseData = {
  /**
   * Идентификатор менеджера
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type PatchDeliveryServiceManagerResponseMeta = {};

        export type PatchDeliveryServiceManagerResponse = CommonResponse<PatchDeliveryServiceManagerResponseData, PatchDeliveryServiceManagerResponseMeta>;
        export interface SearchDeliveryServiceManagersRequest {
  sort?: string[];
  filter?: {} & {
    /**
     * Идентификатор менеджера
     */
    id?: number;
    /**
     * Id службы доставки
     */
    delivery_service_id?: number;
    /**
     * ФИО менеджера
     */
    name?: string;
    /**
     * Телефон менеджера
     */
    phone?: string;
    /**
     * E-mail менеджера
     */
    email?: string;
  };
  include?: "delivery_service"[];
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


        export type SearchDeliveryServiceManagersResponseData = ({
  /**
   * Идентификатор менеджера
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
})[];

        export type SearchDeliveryServiceManagersResponseMeta = {
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

        export type SearchDeliveryServiceManagersResponse = CommonResponse<SearchDeliveryServiceManagersResponseData, SearchDeliveryServiceManagersResponseMeta>;
        export interface SearchOneDeliveryServiceManagerRequest {
  sort?: string[];
  filter?: {} & {
    /**
     * Идентификатор менеджера
     */
    id?: number;
    /**
     * Id службы доставки
     */
    delivery_service_id?: number;
    /**
     * ФИО менеджера
     */
    name?: string;
    /**
     * Телефон менеджера
     */
    phone?: string;
    /**
     * E-mail менеджера
     */
    email?: string;
  };
  include?: "delivery_service"[];
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


        export type SearchOneDeliveryServiceManagerResponseData = {
  /**
   * Идентификатор менеджера
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
   * Id службы доставки
   */
  delivery_service_id?: number;
  /**
   * ФИО менеджера
   */
  name?: string;
  /**
   * Телефон менеджера
   */
  phone?: string;
  /**
   * E-mail менеджера
   */
  email?: string;
} & {
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type SearchOneDeliveryServiceManagerResponseMeta = {};

        export type SearchOneDeliveryServiceManagerResponse = CommonResponse<SearchOneDeliveryServiceManagerResponseData, SearchOneDeliveryServiceManagerResponseMeta>;
        export type CreateFederalDistrictRequest = {
  /**
   * Название
   */
  name?: string;
} & {};


        export type CreateFederalDistrictResponseData = {
  /**
   * Идентификатор федерального округа
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
   * Название
   */
  name?: string;
} & {
  /**
   * Регионы
   */
  regions?: ({
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  })[];
};

        export type CreateFederalDistrictResponseMeta = {};

        export type CreateFederalDistrictResponse = CommonResponse<CreateFederalDistrictResponseData, CreateFederalDistrictResponseMeta>;
        export type ReplaceFederalDistrictRequest = {
  /**
   * Название
   */
  name?: string;
} & {};


        export type ReplaceFederalDistrictResponseData = {
  /**
   * Идентификатор федерального округа
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
   * Название
   */
  name?: string;
} & {
  /**
   * Регионы
   */
  regions?: ({
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  })[];
};

        export type ReplaceFederalDistrictResponseMeta = {};

        export type ReplaceFederalDistrictResponse = CommonResponse<ReplaceFederalDistrictResponseData, ReplaceFederalDistrictResponseMeta>;
        export interface SearchFederalDistrictsRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор федерального округа
     */
    id?: number;
    /**
     * Название
     */
    name?: string;
  };
  include?: "regions"[];
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


        export type SearchFederalDistrictsResponseData = ({
  /**
   * Идентификатор федерального округа
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
   * Название
   */
  name?: string;
} & {
  /**
   * Регионы
   */
  regions?: ({
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  })[];
})[];

        export type SearchFederalDistrictsResponseMeta = {
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

        export type SearchFederalDistrictsResponse = CommonResponse<SearchFederalDistrictsResponseData, SearchFederalDistrictsResponseMeta>;
        export interface SearchOneFederalDistrictRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор федерального округа
     */
    id?: number;
    /**
     * Название
     */
    name?: string;
  };
  include?: "regions"[];
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


        export type SearchOneFederalDistrictResponseData = {
  /**
   * Идентификатор федерального округа
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
   * Название
   */
  name?: string;
} & {
  /**
   * Регионы
   */
  regions?: ({
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  })[];
};

        export type SearchOneFederalDistrictResponseMeta = {};

        export type SearchOneFederalDistrictResponse = CommonResponse<SearchOneFederalDistrictResponseData, SearchOneFederalDistrictResponseMeta>;
        export type CreateRegionRequest = {
  /**
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
} & {};


        export type CreateRegionResponseData = {
  /**
   * Идентификатор региона
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
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
};

        export type CreateRegionResponseMeta = {};

        export type CreateRegionResponse = CommonResponse<CreateRegionResponseData, CreateRegionResponseMeta>;
        export type ReplaceRegionRequest = {
  /**
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
} & {};


        export type ReplaceRegionResponseData = {
  /**
   * Идентификатор региона
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
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
};

        export type ReplaceRegionResponseMeta = {};

        export type ReplaceRegionResponse = CommonResponse<ReplaceRegionResponseData, ReplaceRegionResponseMeta>;
        export interface SearchRegionsRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор региона
     */
    id?: number;
    /**
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
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


        export type SearchRegionsResponseData = ({
  /**
   * Идентификатор региона
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
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
})[];

        export type SearchRegionsResponseMeta = {
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

        export type SearchRegionsResponse = CommonResponse<SearchRegionsResponseData, SearchRegionsResponseMeta>;
        export interface SearchOneRegionRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор региона
     */
    id?: number;
    /**
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
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


        export type SearchOneRegionResponseData = {
  /**
   * Идентификатор региона
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
   * Id федерального округа
   */
  federal_district_id?: number;
  /**
   * Название
   */
  name?: string;
  /**
   * Id ФИАС
   */
  guid?: string;
};

        export type SearchOneRegionResponseMeta = {};

        export type SearchOneRegionResponse = CommonResponse<SearchOneRegionResponseData, SearchOneRegionResponseMeta>;
        export type CreateDeliveryPriceRequest = {
  /**
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {};


        export type CreateDeliveryPriceResponseData = {
  /**
   * Идентификатор цены доставки
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
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {
  federal_district?: {
    /**
     * Идентификатор федерального округа
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
     * Название
     */
    name?: string;
  } & {
    /**
     * Регионы
     */
    regions?: ({
      /**
       * Идентификатор региона
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
       * Id федерального округа
       */
      federal_district_id?: number;
      /**
       * Название
       */
      name?: string;
      /**
       * Id ФИАС
       */
      guid?: string;
    })[];
  };
  region?: {
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  };
};

        export type CreateDeliveryPriceResponseMeta = {};

        export type CreateDeliveryPriceResponse = CommonResponse<CreateDeliveryPriceResponseData, CreateDeliveryPriceResponseMeta>;
        export type ReplaceDeliveryPriceRequest = {
  /**
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {};


        export type ReplaceDeliveryPriceResponseData = {
  /**
   * Идентификатор цены доставки
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
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {
  federal_district?: {
    /**
     * Идентификатор федерального округа
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
     * Название
     */
    name?: string;
  } & {
    /**
     * Регионы
     */
    regions?: ({
      /**
       * Идентификатор региона
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
       * Id федерального округа
       */
      federal_district_id?: number;
      /**
       * Название
       */
      name?: string;
      /**
       * Id ФИАС
       */
      guid?: string;
    })[];
  };
  region?: {
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  };
};

        export type ReplaceDeliveryPriceResponseMeta = {};

        export type ReplaceDeliveryPriceResponse = CommonResponse<ReplaceDeliveryPriceResponseData, ReplaceDeliveryPriceResponseMeta>;
        export interface SearchDeliveryPricesRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор цены доставки
     */
    id?: number;
    /**
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Id региона
     */
    region_id?: number;
    /**
     * Id ФИАС
     */
    region_guid?: string;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - B2Cpl
     *   * `2` - Boxberry
     *   * `3` - CDEK
     *   * `4` - Dostavista
     *   * `5` - DPD
     *   * `6` - IML
     *   * `7` - MaxiPost;
     *   * `8` - PickPoint;
     *   * `9` - PONY EXPRESS;
     *   * `10`- Почта России;
     *
     */
    delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    /**
     * Тип точки выдачи заказов. Расшифровка значений:
     *   * `1` - Курьерская доставка
     *   * `2` - Самовывоз
     *
     */
    delivery_method?: 1 | 2;
  };
  include?: ("federal_district" | "region")[];
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


        export type SearchDeliveryPricesResponseData = ({
  /**
   * Идентификатор цены доставки
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
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {
  federal_district?: {
    /**
     * Идентификатор федерального округа
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
     * Название
     */
    name?: string;
  } & {
    /**
     * Регионы
     */
    regions?: ({
      /**
       * Идентификатор региона
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
       * Id федерального округа
       */
      federal_district_id?: number;
      /**
       * Название
       */
      name?: string;
      /**
       * Id ФИАС
       */
      guid?: string;
    })[];
  };
  region?: {
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  };
})[];

        export type SearchDeliveryPricesResponseMeta = {
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

        export type SearchDeliveryPricesResponse = CommonResponse<SearchDeliveryPricesResponseData, SearchDeliveryPricesResponseMeta>;
        export interface SearchOneDeliveryPriceRequest {
  sort?: string[];
  filter?: {
    /**
     * Идентификатор цены доставки
     */
    id?: number;
    /**
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Id региона
     */
    region_id?: number;
    /**
     * Id ФИАС
     */
    region_guid?: string;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - B2Cpl
     *   * `2` - Boxberry
     *   * `3` - CDEK
     *   * `4` - Dostavista
     *   * `5` - DPD
     *   * `6` - IML
     *   * `7` - MaxiPost;
     *   * `8` - PickPoint;
     *   * `9` - PONY EXPRESS;
     *   * `10`- Почта России;
     *
     */
    delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    /**
     * Тип точки выдачи заказов. Расшифровка значений:
     *   * `1` - Курьерская доставка
     *   * `2` - Самовывоз
     *
     */
    delivery_method?: 1 | 2;
  };
  include?: ("federal_district" | "region")[];
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


        export type SearchOneDeliveryPriceResponseData = {
  /**
   * Идентификатор цены доставки
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
   * Id федерального округа
   */
  federal_district_id?: number;
  region_id?: number | null;
  region_guid?: string | null;
  /**
   * Службы доставки. Расшифровка значений:
   *   * `1` - B2Cpl
   *   * `2` - Boxberry
   *   * `3` - CDEK
   *   * `4` - Dostavista
   *   * `5` - DPD
   *   * `6` - IML
   *   * `7` - MaxiPost;
   *   * `8` - PickPoint;
   *   * `9` - PONY EXPRESS;
   *   * `10`- Почта России;
   *
   */
  delivery_service?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Тип точки выдачи заказов. Расшифровка значений:
   *   * `1` - Курьерская доставка
   *   * `2` - Самовывоз
   *
   */
  delivery_method?: 1 | 2;
  /**
   * Цена
   */
  price?: number;
} & {
  federal_district?: {
    /**
     * Идентификатор федерального округа
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
     * Название
     */
    name?: string;
  } & {
    /**
     * Регионы
     */
    regions?: ({
      /**
       * Идентификатор региона
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
       * Id федерального округа
       */
      federal_district_id?: number;
      /**
       * Название
       */
      name?: string;
      /**
       * Id ФИАС
       */
      guid?: string;
    })[];
  };
  region?: {
    /**
     * Идентификатор региона
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
     * Id федерального округа
     */
    federal_district_id?: number;
    /**
     * Название
     */
    name?: string;
    /**
     * Id ФИАС
     */
    guid?: string;
  };
};

        export type SearchOneDeliveryPriceResponseMeta = {};

        export type SearchOneDeliveryPriceResponse = CommonResponse<SearchOneDeliveryPriceResponseData, SearchOneDeliveryPriceResponseMeta>;
        export type ReplaceDeliveryKpiRequest = {
  /**
   * Ready-To-Go time - время для проверки заказа АОЗ до его передачи в MAS (мин)
   */
  rtg?: number;
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
} & {};


        export type ReplaceDeliveryKpiResponseData = {
  /**
   * Ready-To-Go time - время для проверки заказа АОЗ до его передачи в MAS (мин)
   */
  rtg?: number;
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
} & {
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
};

        export type ReplaceDeliveryKpiResponseMeta = {};

        export type ReplaceDeliveryKpiResponse = CommonResponse<ReplaceDeliveryKpiResponseData, ReplaceDeliveryKpiResponseMeta>;
        export interface SearchDeliveryKpiCtsRequest {
  sort?: string[];
  filter?: {
    /**
     * Id продавца
     */
    seller_id?: number;
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


        export type SearchDeliveryKpiCtsResponseData = ({
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
})[];

        export type SearchDeliveryKpiCtsResponseMeta = {
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

        export type SearchDeliveryKpiCtsResponse = CommonResponse<SearchDeliveryKpiCtsResponseData, SearchDeliveryKpiCtsResponseMeta>;
        export interface SearchOneDeliveryKpiCtRequest {
  sort?: string[];
  filter?: {
    /**
     * Id продавца
     */
    seller_id?: number;
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


        export type SearchOneDeliveryKpiCtResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
};

        export type SearchOneDeliveryKpiCtResponseMeta = {};

        export type SearchOneDeliveryKpiCtResponse = CommonResponse<SearchOneDeliveryKpiCtResponseData, SearchOneDeliveryKpiCtResponseMeta>;
        export type CreateDeliveryKpiCtRequest = {
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
} & {};


        export type CreateDeliveryKpiCtResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
};

        export type CreateDeliveryKpiCtResponseMeta = {};

        export type CreateDeliveryKpiCtResponse = CommonResponse<CreateDeliveryKpiCtResponseData, CreateDeliveryKpiCtResponseMeta>;
        export type ReplaceDeliveryKpiCtRequest = {
  /**
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
} & {};


        export type ReplaceDeliveryKpiCtResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Confirmation Time - время перехода Отправления из статуса “Ожидает подтверждения” в статус “На комплектации” (мин)
   */
  ct?: number;
};

        export type ReplaceDeliveryKpiCtResponseMeta = {};

        export type ReplaceDeliveryKpiCtResponse = CommonResponse<ReplaceDeliveryKpiCtResponseData, ReplaceDeliveryKpiCtResponseMeta>;
        export interface SearchDeliveryKpiPptsRequest {
  sort?: string[];
  filter?: {
    /**
     * Id продавца
     */
    seller_id?: number;
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


        export type SearchDeliveryKpiPptsResponseData = ({
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
})[];

        export type SearchDeliveryKpiPptsResponseMeta = {
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

        export type SearchDeliveryKpiPptsResponse = CommonResponse<SearchDeliveryKpiPptsResponseData, SearchDeliveryKpiPptsResponseMeta>;
        export interface SearchOneDeliveryKpiPptRequest {
  sort?: string[];
  filter?: {
    /**
     * Id продавца
     */
    seller_id?: number;
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


        export type SearchOneDeliveryKpiPptResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
};

        export type SearchOneDeliveryKpiPptResponseMeta = {};

        export type SearchOneDeliveryKpiPptResponse = CommonResponse<SearchOneDeliveryKpiPptResponseData, SearchOneDeliveryKpiPptResponseMeta>;
        export type CreateDeliveryKpiPptRequest = {
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
} & {};


        export type CreateDeliveryKpiPptResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
};

        export type CreateDeliveryKpiPptResponseMeta = {};

        export type CreateDeliveryKpiPptResponse = CommonResponse<CreateDeliveryKpiPptResponseData, CreateDeliveryKpiPptResponseMeta>;
        export type ReplaceDeliveryKpiPptRequest = {
  /**
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
} & {};


        export type ReplaceDeliveryKpiPptResponseData = {
  /**
   * Id продавца
   */
  seller_id?: number;
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
   * Planned Processing Time - плановое время для прохождения Отправлением статусов от “На комплектации” до “Готов к передаче ЛО” (мин)
   */
  ppt?: number;
};

        export type ReplaceDeliveryKpiPptResponseMeta = {};

        export type ReplaceDeliveryKpiPptResponse = CommonResponse<ReplaceDeliveryKpiPptResponseData, ReplaceDeliveryKpiPptResponseMeta>;
        export type PatchCargoRequest = {
  status?: number & (1 | 2);
  /**
   * Флаг, что у груза проблемы при отгрузке
   */
  is_problem?: boolean;
  /**
   * Флаг, что груз отменен
   */
  is_canceled?: boolean;
  /**
   * Ширина
   */
  width?: number;
  /**
   * Высота
   */
  height?: number;
  /**
   * Длина
   */
  length?: number;
  /**
   * Вес
   */
  weight?: number;
  /**
   * Последнее сообщение мерчанта о проблеме с отгрузкой
   */
  shipping_problem_comment?: string;
};


        export type PatchCargoResponseData = {
  /**
   * id
   */
  id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор склада продавца
   */
  store_id?: number;
  /**
   * Идентификатор сервиса доставки
   */
  delivery_service_id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Дата установки статуса
   */
  status_at?: string;
  /**
   * Дата установки флага проблемного груза
   */
  is_problem_at?: string;
  /**
   * Дата установки флага отмены груза
   */
  is_canceled_at?: string;
} & {
  status?: number & (1 | 2);
  /**
   * Флаг, что у груза проблемы при отгрузке
   */
  is_problem?: boolean;
  /**
   * Флаг, что груз отменен
   */
  is_canceled?: boolean;
  /**
   * Ширина
   */
  width?: number;
  /**
   * Высота
   */
  height?: number;
  /**
   * Длина
   */
  length?: number;
  /**
   * Вес
   */
  weight?: number;
  /**
   * Последнее сообщение мерчанта о проблеме с отгрузкой
   */
  shipping_problem_comment?: string;
} & {
  /**
   * Ссылки на отправления в OMS
   */
  shipments?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * номер отгрузки
     */
    number?: string;
    /**
     * ид отправления
     */
    delivery_id?: number;
    /**
     * ид мерчанта
     */
    seller_id?: number;
    /**
     * ид склада
     */
    store_id?: number;
    /**
     * дата установки статуса
     */
    status_at?: string;
    /**
     * сумма товаров отгрузки (расчитывается автоматически), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * статус отгрузки из OrdersShipmentStatusEnum
     */
    status?: number;
  } & {
    /**
     * Объект типа Delivery
     */
    delivery?: {};
    order_items?: ({
      /**
       * id элемента корзины
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * ID отгрузки
       */
      shipment_id?: number;
      /**
       * ID оффера
       */
      offer_id?: number;
      /**
       * Название товара
       */
      name?: string;
      /**
       * Кол-во товара
       */
      qty?: number;
      /**
       * Цена товара (цена * qty - скидки), коп.
       */
      price?: number;
      /**
       * Цена единичного товара (в коп.)
       */
      price_per_one?: number;
      /**
       * Цена товара до скидок (цена * qty), коп.
       */
      cost?: number;
      /**
       * Цена единичного товара до скидок (в коп.)
       */
      cost_per_one?: number;
      /**
       * Информация о товаре
       */
      product_data?: {
        /**
         * Вес нетто товара (кг)
         */
        weight?: number;
        /**
         * Вес брутто товара (кг)
         */
        weight_gross?: number;
        /**
         * Ширина товара (мм)
         */
        width?: number;
        /**
         * Высота товара (мм)
         */
        height?: number;
        /**
         * Длина товара (мм)
         */
        length?: number;
        storage_address?: string | null;
        barcode?: string | null;
      };
      refund_qty?: number | null;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & {
        main_image_url: string | null;
        main_image_file: string | null;
      } & ({
          external_id?: string | null;
          barcode?: string | null;
        } & {
          category_id?: number | null;
          brand_id?: number | null;
          /**
           * Название товара
           */
          name?: string;
          code?: string | null;
          description?: string | null;
          /**
           * Тип товара из CatalogProductTypeEnum
           */
          type?: number;
          /**
           * Публикация разрешена
           */
          allow_publish?: boolean;
          /**
           * Артикул
           */
          vendor_code?: string;
          weight?: number | null;
          weight_gross?: number | null;
          length?: number | null;
          width?: number | null;
          height?: number | null;
          is_adult?: boolean | null;
          base_price?: number | null;
        }) & {
          brand?: {
            /**
             * Идентификатор бренда
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
            image_url?: string | null;
            logo_url?: string | null;
          } & {
            /**
             * Название бренда
             */
            name?: string;
            /**
             * Активность бренда
             */
            is_active?: boolean;
            code?: string | null;
            description?: string | null;
          } & {};
          category?: {
            /**
             * Идентификатор категории
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
            /**
             * Признак активности с учетом иерархии
             */
            is_real_active?: boolean;
          } & {
            /**
             * Название категории
             */
            name?: string;
            /**
             * Код категории
             */
            code?: string;
            parent_id?: number | null;
            /**
             * Категория наследует атрибуты родительской
             */
            is_inherits_properties?: boolean;
            /**
             * Признак активности данной категории
             */
            is_active?: boolean;
          } & {
            properties?: {
              /**
               * Название свойства
               */
              name?: string;
              /**
               * Публичное наименование
               */
              display_name?: string;
              /**
               * Код свойства
               */
              code?: string;
              /**
               * Тип свойства из PropertyTypeEnum
               */
              type?: string;
              /**
               * Подсказка при заполнении для значения
               */
              hint_value?: string;
              /**
               * Подсказка при заполнении для названия значения
               */
              hint_value_name?: string;
              /**
               * Поддерживает множественные значения
               */
              is_multiple?: boolean;
              /**
               * Выводится в фильтрах на витрине
               */
              is_filterable?: boolean;
              /**
               * Выводить на витрине
               */
              is_public?: boolean;
              /**
               * Активность атрибут
               */
              is_active?: boolean;
              /**
               * Атрибут имеет справочник значений
               */
              has_directory?: boolean;
              /**
               * Наследуемой от родительской категории атрибут
               */
              is_inherited?: boolean;
              /**
               * Атрибут обязателен для заполнения
               */
              is_required?: boolean;
              /**
               * Признак системного атрибута
               */
              is_system?: boolean;
              /**
               * Атрибут модерируется
               */
              is_moderated?: boolean;
              /**
               * Свойство используется для склейки товаров
               */
              is_gluing?: boolean;
              /**
               * Признак общего для всех категорий атрибута
               */
              is_common?: boolean;
              /**
               * Идентификатор атрибута, которому принадлежит значение
               */
              property_id?: number;
            }[];
            hidden_properties?: {
              /**
               * Название свойства
               */
              name?: string;
              /**
               * Публичное наименование
               */
              display_name?: string;
              /**
               * Код свойства
               */
              code?: string;
              /**
               * Тип свойства из PropertyTypeEnum
               */
              type?: string;
              /**
               * Подсказка при заполнении для значения
               */
              hint_value?: string;
              /**
               * Подсказка при заполнении для названия значения
               */
              hint_value_name?: string;
              /**
               * Поддерживает множественные значения
               */
              is_multiple?: boolean;
              /**
               * Выводится в фильтрах на витрине
               */
              is_filterable?: boolean;
              /**
               * Выводить на витрине
               */
              is_public?: boolean;
              /**
               * Активность атрибут
               */
              is_active?: boolean;
              /**
               * Атрибут имеет справочник значений
               */
              has_directory?: boolean;
              /**
               * Наследуемой от родительской категории атрибут
               */
              is_inherited?: boolean;
              /**
               * Атрибут обязателен для заполнения
               */
              is_required?: boolean;
              /**
               * Признак системного атрибута
               */
              is_system?: boolean;
              /**
               * Атрибут модерируется
               */
              is_moderated?: boolean;
              /**
               * Свойство используется для склейки товаров
               */
              is_gluing?: boolean;
              /**
               * Признак общего для всех категорий атрибута
               */
              is_common?: boolean;
              /**
               * Идентификатор атрибута, которому принадлежит значение
               */
              property_id?: number;
            }[];
          };
          images?: ({
            /**
             * Идентификатор картинки
             */
            id?: number;
            /**
             * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
             */
            is_external?: boolean;
            /**
             * URL картинки
             */
            url?: string;
          } & {
            name?: string | null;
            /**
             * Порядок сортирковки в коллекции картинок
             */
            sort?: number;
          })[];
          attributes?: ({
            /**
             * Тип значения из PropertyTypeEnum
             */
            type?: string;
            /**
             * Ссылка на файл
             */
            url?: string;
          } & {
            /**
             * Идентификатор атрибута
             */
            property_id?: number;
            /**
             * Значение элемента справочника (string|number|integer|boolean)
             */
            value?: string | boolean | number;
            name?: string | null;
            /**
             * Идентификатор значения справочника. Если установлен, то value и name задавать не нужно.
             */
            directory_value_id?: number;
          })[];
          product_groups?: ({
            /**
             * Идентификатор склейки
             */
            id?: number;
            /**
             * Кол-во товаров в склейке
             */
            products_count?: number;
            main_product_image?: string | null;
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
             * Идентификатор категории
             */
            category_id?: number;
            main_product_id?: number | null;
            /**
             * Название
             */
            name?: string;
            /**
             * Активность
             */
            is_active?: boolean;
          } & {
            category?: {
              /**
               * Идентификатор категории
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
              /**
               * Признак активности с учетом иерархии
               */
              is_real_active?: boolean;
            } & {
              /**
               * Название категории
               */
              name?: string;
              /**
               * Код категории
               */
              code?: string;
              parent_id?: number | null;
              /**
               * Категория наследует атрибуты родительской
               */
              is_inherits_properties?: boolean;
              /**
               * Признак активности данной категории
               */
              is_active?: boolean;
            } & {
              properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
              hidden_properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
            };
            main_product?: {
              /**
               * Идентификатор товара
               */
              id: number;
              /**
               * Дата создания
               */
              created_at: string;
              /**
               * Дата обновления
               */
              updated_at: string;
            } & ({
              external_id?: string | null;
              barcode?: string | null;
            } & {
              category_id?: number | null;
              brand_id?: number | null;
              /**
               * Название товара
               */
              name?: string;
              code?: string | null;
              description?: string | null;
              /**
               * Тип товара из CatalogProductTypeEnum
               */
              type?: number;
              /**
               * Публикация разрешена
               */
              allow_publish?: boolean;
              /**
               * Артикул
               */
              vendor_code?: string;
              weight?: number | null;
              weight_gross?: number | null;
              length?: number | null;
              width?: number | null;
              height?: number | null;
              is_adult?: boolean | null;
              base_price?: number | null;
            }) & {};
            products?: ({
              /**
               * Идентификатор товара
               */
              id: number;
              /**
               * Дата создания
               */
              created_at: string;
              /**
               * Дата обновления
               */
              updated_at: string;
            } & ({
              external_id?: string | null;
              barcode?: string | null;
            } & {
              category_id?: number | null;
              brand_id?: number | null;
              /**
               * Название товара
               */
              name?: string;
              code?: string | null;
              description?: string | null;
              /**
               * Тип товара из CatalogProductTypeEnum
               */
              type?: number;
              /**
               * Публикация разрешена
               */
              allow_publish?: boolean;
              /**
               * Артикул
               */
              vendor_code?: string;
              weight?: number | null;
              weight_gross?: number | null;
              length?: number | null;
              width?: number | null;
              height?: number | null;
              is_adult?: boolean | null;
              base_price?: number | null;
            }) & {})[];
          } & {})[];
          /**
           * Есть ли незаполненные обязательные атрибуты
           */
          no_filled_required_attributes?: boolean;
        } & {};
      stock?: {
        /**
         * Идентификатор стока
         */
        id?: number;
      } & {
        /**
         * ID склада
         */
        store_id?: number;
        /**
         * ID товарного предложения
         */
        offer_id?: number;
        /**
         * Идентификатор товара
         */
        product_id?: number;
        /**
         * Количество товара для резервирования
         */
        qty?: number;
      } & {};
    })[];
    store?: {
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
    seller?: {
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
  })[];
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
};

        export type PatchCargoResponseMeta = {};

        export type PatchCargoResponse = CommonResponse<PatchCargoResponseData, PatchCargoResponseMeta>;
        export interface SearchCargoRequest {
  sort?: string[];
  filter?: {} & {
    /**
     * Идентификатор продавца
     */
    seller_id?: number;
    /**
     * Идентификатор склада продавца
     */
    store_id?: number;
    /**
     * Статус
     */
    status?: number;
  };
  include?: ("shipments" | "delivery_service")[];
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


        export type SearchCargoResponseData = ({
  /**
   * id
   */
  id?: number;
  /**
   * Идентификатор продавца
   */
  seller_id?: number;
  /**
   * Идентификатор склада продавца
   */
  store_id?: number;
  /**
   * Идентификатор сервиса доставки
   */
  delivery_service_id?: number;
  /**
   * Дата создания
   */
  created_at?: string;
  /**
   * Дата обновления
   */
  updated_at?: string;
  /**
   * Дата установки статуса
   */
  status_at?: string;
  /**
   * Дата установки флага проблемного груза
   */
  is_problem_at?: string;
  /**
   * Дата установки флага отмены груза
   */
  is_canceled_at?: string;
} & {
  status?: number & (1 | 2);
  /**
   * Флаг, что у груза проблемы при отгрузке
   */
  is_problem?: boolean;
  /**
   * Флаг, что груз отменен
   */
  is_canceled?: boolean;
  /**
   * Ширина
   */
  width?: number;
  /**
   * Высота
   */
  height?: number;
  /**
   * Длина
   */
  length?: number;
  /**
   * Вес
   */
  weight?: number;
  /**
   * Последнее сообщение мерчанта о проблеме с отгрузкой
   */
  shipping_problem_comment?: string;
} & {
  /**
   * Ссылки на отправления в OMS
   */
  shipments?: ({
    /**
     * идентификатор
     */
    id?: number;
    /**
     * номер отгрузки
     */
    number?: string;
    /**
     * ид отправления
     */
    delivery_id?: number;
    /**
     * ид мерчанта
     */
    seller_id?: number;
    /**
     * ид склада
     */
    store_id?: number;
    /**
     * дата установки статуса
     */
    status_at?: string;
    /**
     * сумма товаров отгрузки (расчитывается автоматически), коп.
     */
    cost?: number;
    /**
     * ширина (мм)
     */
    width?: number;
    /**
     * высота (мм)
     */
    height?: number;
    /**
     * длина (мм)
     */
    length?: number;
    /**
     * вес (кг)
     */
    weight?: number;
    /**
     * дата создания
     */
    created_at?: string;
    /**
     * дата обновления
     */
    updated_at?: string;
  } & {
    /**
     * статус отгрузки из OrdersShipmentStatusEnum
     */
    status?: number;
  } & {
    /**
     * Объект типа Delivery
     */
    delivery?: {};
    order_items?: ({
      /**
       * id элемента корзины
       */
      id?: number;
      /**
       * ID заказа
       */
      order_id?: number;
      /**
       * ID отгрузки
       */
      shipment_id?: number;
      /**
       * ID оффера
       */
      offer_id?: number;
      /**
       * Название товара
       */
      name?: string;
      /**
       * Кол-во товара
       */
      qty?: number;
      /**
       * Цена товара (цена * qty - скидки), коп.
       */
      price?: number;
      /**
       * Цена единичного товара (в коп.)
       */
      price_per_one?: number;
      /**
       * Цена товара до скидок (цена * qty), коп.
       */
      cost?: number;
      /**
       * Цена единичного товара до скидок (в коп.)
       */
      cost_per_one?: number;
      /**
       * Информация о товаре
       */
      product_data?: {
        /**
         * Вес нетто товара (кг)
         */
        weight?: number;
        /**
         * Вес брутто товара (кг)
         */
        weight_gross?: number;
        /**
         * Ширина товара (мм)
         */
        width?: number;
        /**
         * Высота товара (мм)
         */
        height?: number;
        /**
         * Длина товара (мм)
         */
        length?: number;
        storage_address?: string | null;
        barcode?: string | null;
      };
      refund_qty?: number | null;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      product?: {
        /**
         * Идентификатор товара
         */
        id: number;
        /**
         * Дата создания
         */
        created_at: string;
        /**
         * Дата обновления
         */
        updated_at: string;
      } & {
        main_image_url: string | null;
        main_image_file: string | null;
      } & ({
          external_id?: string | null;
          barcode?: string | null;
        } & {
          category_id?: number | null;
          brand_id?: number | null;
          /**
           * Название товара
           */
          name?: string;
          code?: string | null;
          description?: string | null;
          /**
           * Тип товара из CatalogProductTypeEnum
           */
          type?: number;
          /**
           * Публикация разрешена
           */
          allow_publish?: boolean;
          /**
           * Артикул
           */
          vendor_code?: string;
          weight?: number | null;
          weight_gross?: number | null;
          length?: number | null;
          width?: number | null;
          height?: number | null;
          is_adult?: boolean | null;
          base_price?: number | null;
        }) & {
          brand?: {
            /**
             * Идентификатор бренда
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
            image_url?: string | null;
            logo_url?: string | null;
          } & {
            /**
             * Название бренда
             */
            name?: string;
            /**
             * Активность бренда
             */
            is_active?: boolean;
            code?: string | null;
            description?: string | null;
          } & {};
          category?: {
            /**
             * Идентификатор категории
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
            /**
             * Признак активности с учетом иерархии
             */
            is_real_active?: boolean;
          } & {
            /**
             * Название категории
             */
            name?: string;
            /**
             * Код категории
             */
            code?: string;
            parent_id?: number | null;
            /**
             * Категория наследует атрибуты родительской
             */
            is_inherits_properties?: boolean;
            /**
             * Признак активности данной категории
             */
            is_active?: boolean;
          } & {
            properties?: {
              /**
               * Название свойства
               */
              name?: string;
              /**
               * Публичное наименование
               */
              display_name?: string;
              /**
               * Код свойства
               */
              code?: string;
              /**
               * Тип свойства из PropertyTypeEnum
               */
              type?: string;
              /**
               * Подсказка при заполнении для значения
               */
              hint_value?: string;
              /**
               * Подсказка при заполнении для названия значения
               */
              hint_value_name?: string;
              /**
               * Поддерживает множественные значения
               */
              is_multiple?: boolean;
              /**
               * Выводится в фильтрах на витрине
               */
              is_filterable?: boolean;
              /**
               * Выводить на витрине
               */
              is_public?: boolean;
              /**
               * Активность атрибут
               */
              is_active?: boolean;
              /**
               * Атрибут имеет справочник значений
               */
              has_directory?: boolean;
              /**
               * Наследуемой от родительской категории атрибут
               */
              is_inherited?: boolean;
              /**
               * Атрибут обязателен для заполнения
               */
              is_required?: boolean;
              /**
               * Признак системного атрибута
               */
              is_system?: boolean;
              /**
               * Атрибут модерируется
               */
              is_moderated?: boolean;
              /**
               * Свойство используется для склейки товаров
               */
              is_gluing?: boolean;
              /**
               * Признак общего для всех категорий атрибута
               */
              is_common?: boolean;
              /**
               * Идентификатор атрибута, которому принадлежит значение
               */
              property_id?: number;
            }[];
            hidden_properties?: {
              /**
               * Название свойства
               */
              name?: string;
              /**
               * Публичное наименование
               */
              display_name?: string;
              /**
               * Код свойства
               */
              code?: string;
              /**
               * Тип свойства из PropertyTypeEnum
               */
              type?: string;
              /**
               * Подсказка при заполнении для значения
               */
              hint_value?: string;
              /**
               * Подсказка при заполнении для названия значения
               */
              hint_value_name?: string;
              /**
               * Поддерживает множественные значения
               */
              is_multiple?: boolean;
              /**
               * Выводится в фильтрах на витрине
               */
              is_filterable?: boolean;
              /**
               * Выводить на витрине
               */
              is_public?: boolean;
              /**
               * Активность атрибут
               */
              is_active?: boolean;
              /**
               * Атрибут имеет справочник значений
               */
              has_directory?: boolean;
              /**
               * Наследуемой от родительской категории атрибут
               */
              is_inherited?: boolean;
              /**
               * Атрибут обязателен для заполнения
               */
              is_required?: boolean;
              /**
               * Признак системного атрибута
               */
              is_system?: boolean;
              /**
               * Атрибут модерируется
               */
              is_moderated?: boolean;
              /**
               * Свойство используется для склейки товаров
               */
              is_gluing?: boolean;
              /**
               * Признак общего для всех категорий атрибута
               */
              is_common?: boolean;
              /**
               * Идентификатор атрибута, которому принадлежит значение
               */
              property_id?: number;
            }[];
          };
          images?: ({
            /**
             * Идентификатор картинки
             */
            id?: number;
            /**
             * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
             */
            is_external?: boolean;
            /**
             * URL картинки
             */
            url?: string;
          } & {
            name?: string | null;
            /**
             * Порядок сортирковки в коллекции картинок
             */
            sort?: number;
          })[];
          attributes?: ({
            /**
             * Тип значения из PropertyTypeEnum
             */
            type?: string;
            /**
             * Ссылка на файл
             */
            url?: string;
          } & {
            /**
             * Идентификатор атрибута
             */
            property_id?: number;
            /**
             * Значение элемента справочника (string|number|integer|boolean)
             */
            value?: string | boolean | number;
            name?: string | null;
            /**
             * Идентификатор значения справочника. Если установлен, то value и name задавать не нужно.
             */
            directory_value_id?: number;
          })[];
          product_groups?: ({
            /**
             * Идентификатор склейки
             */
            id?: number;
            /**
             * Кол-во товаров в склейке
             */
            products_count?: number;
            main_product_image?: string | null;
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
             * Идентификатор категории
             */
            category_id?: number;
            main_product_id?: number | null;
            /**
             * Название
             */
            name?: string;
            /**
             * Активность
             */
            is_active?: boolean;
          } & {
            category?: {
              /**
               * Идентификатор категории
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
              /**
               * Признак активности с учетом иерархии
               */
              is_real_active?: boolean;
            } & {
              /**
               * Название категории
               */
              name?: string;
              /**
               * Код категории
               */
              code?: string;
              parent_id?: number | null;
              /**
               * Категория наследует атрибуты родительской
               */
              is_inherits_properties?: boolean;
              /**
               * Признак активности данной категории
               */
              is_active?: boolean;
            } & {
              properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
              hidden_properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
            };
            main_product?: {
              /**
               * Идентификатор товара
               */
              id: number;
              /**
               * Дата создания
               */
              created_at: string;
              /**
               * Дата обновления
               */
              updated_at: string;
            } & ({
              external_id?: string | null;
              barcode?: string | null;
            } & {
              category_id?: number | null;
              brand_id?: number | null;
              /**
               * Название товара
               */
              name?: string;
              code?: string | null;
              description?: string | null;
              /**
               * Тип товара из CatalogProductTypeEnum
               */
              type?: number;
              /**
               * Публикация разрешена
               */
              allow_publish?: boolean;
              /**
               * Артикул
               */
              vendor_code?: string;
              weight?: number | null;
              weight_gross?: number | null;
              length?: number | null;
              width?: number | null;
              height?: number | null;
              is_adult?: boolean | null;
              base_price?: number | null;
            }) & {};
            products?: ({
              /**
               * Идентификатор товара
               */
              id: number;
              /**
               * Дата создания
               */
              created_at: string;
              /**
               * Дата обновления
               */
              updated_at: string;
            } & ({
              external_id?: string | null;
              barcode?: string | null;
            } & {
              category_id?: number | null;
              brand_id?: number | null;
              /**
               * Название товара
               */
              name?: string;
              code?: string | null;
              description?: string | null;
              /**
               * Тип товара из CatalogProductTypeEnum
               */
              type?: number;
              /**
               * Публикация разрешена
               */
              allow_publish?: boolean;
              /**
               * Артикул
               */
              vendor_code?: string;
              weight?: number | null;
              weight_gross?: number | null;
              length?: number | null;
              width?: number | null;
              height?: number | null;
              is_adult?: boolean | null;
              base_price?: number | null;
            }) & {})[];
          } & {})[];
          /**
           * Есть ли незаполненные обязательные атрибуты
           */
          no_filled_required_attributes?: boolean;
        } & {};
      stock?: {
        /**
         * Идентификатор стока
         */
        id?: number;
      } & {
        /**
         * ID склада
         */
        store_id?: number;
        /**
         * ID товарного предложения
         */
        offer_id?: number;
        /**
         * Идентификатор товара
         */
        product_id?: number;
        /**
         * Количество товара для резервирования
         */
        qty?: number;
      } & {};
    })[];
    store?: {
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
    seller?: {
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
  })[];
  delivery_service?: {
    /**
     * Идентификатор службы доставки
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
     * Название
     */
    name?: string;
    /**
     * Дата регистрации
     */
    registered_at?: string;
    legal_info_company_name?: string | null;
    legal_info_company_address?: {} | null;
    legal_info_inn?: string | null;
    legal_info_payment_account?: string | null;
    legal_info_bik?: string | null;
    legal_info_bank?: string | null;
    legal_info_bank_correspondent_account?: string | null;
    general_manager_name?: string | null;
    contract_number?: string | null;
    contract_date?: string | null;
    vat_rate?: number | null;
    taxation_type?: number | null;
    /**
     * Службы доставки. Расшифровка значений:
     *   * `1` - Активен
     *   * `2` - Не активен
     *
     */
    status?: 1 | 2;
    comment?: string | null;
    apiship_key?: string | null;
    /**
     * Приоритет (чем меньше, тем выше)
     */
    priority?: number;
    /**
     * Максимальное кол-во отправлений в день
     */
    max_shipments_per_day?: number;
    /**
     * Время создания заявки для забора отправления день-в-день
     */
    max_cargo_export_time?: string;
    /**
     * Консолидация многоместных отправлений?
     */
    do_consolidation?: boolean;
    /**
     * Расконсолидация многоместных отправлений?
     */
    do_deconsolidation?: boolean;
    /**
     * Осуществляет нулевую милю?
     */
    do_zero_mile?: boolean;
    /**
     * Осуществляет экспресс-доставку?
     */
    do_express_delivery?: boolean;
    /**
     * Принимает возвраты?
     */
    do_return?: boolean;
    /**
     * Осуществляет доставку опасных грузов?
     */
    do_dangerous_products_delivery?: boolean;
    /**
     * Перевозка крупногабаритных грузов?
     */
    do_transportation_oversized_cargo?: boolean;
    /**
     * Добавлять услугу частичного отказ в заказ на доставку?
     */
    add_partial_reject_service?: boolean;
    /**
     * Добавлять услугу страхования груза в заказ на доставку?
     */
    add_insurance_service?: boolean;
    /**
     * Добавлять услугу примерки в заказ на доставку?
     */
    add_fitting_service?: boolean;
    /**
     * Добавлять услугу возврата в заказ на доставку?
     */
    add_return_service?: boolean;
    /**
     * Добавлять услугу вскрытия при получении в заказ на доставку?
     */
    add_open_service?: boolean;
    /**
     * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
     */
    pct?: number;
  } & {
    payment_methods?: number[];
  };
})[];

        export type SearchCargoResponseMeta = {
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

        export type SearchCargoResponse = CommonResponse<SearchCargoResponseData, SearchCargoResponseMeta>;
        export interface SearchCargoOrdersRequest {
  sort?: string[];
  filter?: {} & {
    /**
     * Дата забора груза
     */
    date?: string;
    /**
     * Идентификатор таймслота
     */
    timeslot_id?: string;
    /**
     * Статус
     */
    status?: number;
  };
  include?: "cargo"[];
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


        export type SearchCargoOrdersResponseData = ({
  /**
   * id
   */
  id?: number;
  /**
   * Номер заявки СДЭК на вызов курьера
   */
  cdek_intake_number?: string;
  /**
   * Номер заявки во внешней системе
   */
  external_id?: string;
  /**
   * Текст последней ошибки при создании заявки на вызов курьера для забора груза в службе доставки
   */
  error_external_id?: string;
} & {
  status?: number & (1 | 2 | 3);
  /**
   * Идентификатор груза
   */
  cargo_id?: number;
  /**
   * Идентификатор таймслота
   */
  timeslot_id?: string;
  /**
   * Дата забора груза
   */
  timeslot_from?: string;
  /**
   * Дата забора груза
   */
  timeslot_to?: string;
  /**
   * Дата забора груза
   */
  date?: string;
} & {
  cargo?: {
    /**
     * id
     */
    id?: number;
    /**
     * Идентификатор продавца
     */
    seller_id?: number;
    /**
     * Идентификатор склада продавца
     */
    store_id?: number;
    /**
     * Идентификатор сервиса доставки
     */
    delivery_service_id?: number;
    /**
     * Дата создания
     */
    created_at?: string;
    /**
     * Дата обновления
     */
    updated_at?: string;
    /**
     * Дата установки статуса
     */
    status_at?: string;
    /**
     * Дата установки флага проблемного груза
     */
    is_problem_at?: string;
    /**
     * Дата установки флага отмены груза
     */
    is_canceled_at?: string;
  } & {
    status?: number & (1 | 2);
    /**
     * Флаг, что у груза проблемы при отгрузке
     */
    is_problem?: boolean;
    /**
     * Флаг, что груз отменен
     */
    is_canceled?: boolean;
    /**
     * Ширина
     */
    width?: number;
    /**
     * Высота
     */
    height?: number;
    /**
     * Длина
     */
    length?: number;
    /**
     * Вес
     */
    weight?: number;
    /**
     * Последнее сообщение мерчанта о проблеме с отгрузкой
     */
    shipping_problem_comment?: string;
  } & {
    /**
     * Ссылки на отправления в OMS
     */
    shipments?: ({
      /**
       * идентификатор
       */
      id?: number;
      /**
       * номер отгрузки
       */
      number?: string;
      /**
       * ид отправления
       */
      delivery_id?: number;
      /**
       * ид мерчанта
       */
      seller_id?: number;
      /**
       * ид склада
       */
      store_id?: number;
      /**
       * дата установки статуса
       */
      status_at?: string;
      /**
       * сумма товаров отгрузки (расчитывается автоматически), коп.
       */
      cost?: number;
      /**
       * ширина (мм)
       */
      width?: number;
      /**
       * высота (мм)
       */
      height?: number;
      /**
       * длина (мм)
       */
      length?: number;
      /**
       * вес (кг)
       */
      weight?: number;
      /**
       * дата создания
       */
      created_at?: string;
      /**
       * дата обновления
       */
      updated_at?: string;
    } & {
      /**
       * статус отгрузки из OrdersShipmentStatusEnum
       */
      status?: number;
    } & {
      /**
       * Объект типа Delivery
       */
      delivery?: {};
      order_items?: ({
        /**
         * id элемента корзины
         */
        id?: number;
        /**
         * ID заказа
         */
        order_id?: number;
        /**
         * ID отгрузки
         */
        shipment_id?: number;
        /**
         * ID оффера
         */
        offer_id?: number;
        /**
         * Название товара
         */
        name?: string;
        /**
         * Кол-во товара
         */
        qty?: number;
        /**
         * Цена товара (цена * qty - скидки), коп.
         */
        price?: number;
        /**
         * Цена единичного товара (в коп.)
         */
        price_per_one?: number;
        /**
         * Цена товара до скидок (цена * qty), коп.
         */
        cost?: number;
        /**
         * Цена единичного товара до скидок (в коп.)
         */
        cost_per_one?: number;
        /**
         * Информация о товаре
         */
        product_data?: {
          /**
           * Вес нетто товара (кг)
           */
          weight?: number;
          /**
           * Вес брутто товара (кг)
           */
          weight_gross?: number;
          /**
           * Ширина товара (мм)
           */
          width?: number;
          /**
           * Высота товара (мм)
           */
          height?: number;
          /**
           * Длина товара (мм)
           */
          length?: number;
          storage_address?: string | null;
          barcode?: string | null;
        };
        refund_qty?: number | null;
        /**
         * дата создания
         */
        created_at?: string;
        /**
         * дата обновления
         */
        updated_at?: string;
      } & {
        product?: {
          /**
           * Идентификатор товара
           */
          id: number;
          /**
           * Дата создания
           */
          created_at: string;
          /**
           * Дата обновления
           */
          updated_at: string;
        } & {
          main_image_url: string | null;
          main_image_file: string | null;
        } & ({
            external_id?: string | null;
            barcode?: string | null;
          } & {
            category_id?: number | null;
            brand_id?: number | null;
            /**
             * Название товара
             */
            name?: string;
            code?: string | null;
            description?: string | null;
            /**
             * Тип товара из CatalogProductTypeEnum
             */
            type?: number;
            /**
             * Публикация разрешена
             */
            allow_publish?: boolean;
            /**
             * Артикул
             */
            vendor_code?: string;
            weight?: number | null;
            weight_gross?: number | null;
            length?: number | null;
            width?: number | null;
            height?: number | null;
            is_adult?: boolean | null;
            base_price?: number | null;
          }) & {
            brand?: {
              /**
               * Идентификатор бренда
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
              image_url?: string | null;
              logo_url?: string | null;
            } & {
              /**
               * Название бренда
               */
              name?: string;
              /**
               * Активность бренда
               */
              is_active?: boolean;
              code?: string | null;
              description?: string | null;
            } & {};
            category?: {
              /**
               * Идентификатор категории
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
              /**
               * Признак активности с учетом иерархии
               */
              is_real_active?: boolean;
            } & {
              /**
               * Название категории
               */
              name?: string;
              /**
               * Код категории
               */
              code?: string;
              parent_id?: number | null;
              /**
               * Категория наследует атрибуты родительской
               */
              is_inherits_properties?: boolean;
              /**
               * Признак активности данной категории
               */
              is_active?: boolean;
            } & {
              properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
              hidden_properties?: {
                /**
                 * Название свойства
                 */
                name?: string;
                /**
                 * Публичное наименование
                 */
                display_name?: string;
                /**
                 * Код свойства
                 */
                code?: string;
                /**
                 * Тип свойства из PropertyTypeEnum
                 */
                type?: string;
                /**
                 * Подсказка при заполнении для значения
                 */
                hint_value?: string;
                /**
                 * Подсказка при заполнении для названия значения
                 */
                hint_value_name?: string;
                /**
                 * Поддерживает множественные значения
                 */
                is_multiple?: boolean;
                /**
                 * Выводится в фильтрах на витрине
                 */
                is_filterable?: boolean;
                /**
                 * Выводить на витрине
                 */
                is_public?: boolean;
                /**
                 * Активность атрибут
                 */
                is_active?: boolean;
                /**
                 * Атрибут имеет справочник значений
                 */
                has_directory?: boolean;
                /**
                 * Наследуемой от родительской категории атрибут
                 */
                is_inherited?: boolean;
                /**
                 * Атрибут обязателен для заполнения
                 */
                is_required?: boolean;
                /**
                 * Признак системного атрибута
                 */
                is_system?: boolean;
                /**
                 * Атрибут модерируется
                 */
                is_moderated?: boolean;
                /**
                 * Свойство используется для склейки товаров
                 */
                is_gluing?: boolean;
                /**
                 * Признак общего для всех категорий атрибута
                 */
                is_common?: boolean;
                /**
                 * Идентификатор атрибута, которому принадлежит значение
                 */
                property_id?: number;
              }[];
            };
            images?: ({
              /**
               * Идентификатор картинки
               */
              id?: number;
              /**
               * true означает, что картинка хранится во внешнем источнике, false - в хранилище PIM
               */
              is_external?: boolean;
              /**
               * URL картинки
               */
              url?: string;
            } & {
              name?: string | null;
              /**
               * Порядок сортирковки в коллекции картинок
               */
              sort?: number;
            })[];
            attributes?: ({
              /**
               * Тип значения из PropertyTypeEnum
               */
              type?: string;
              /**
               * Ссылка на файл
               */
              url?: string;
            } & {
              /**
               * Идентификатор атрибута
               */
              property_id?: number;
              /**
               * Значение элемента справочника (string|number|integer|boolean)
               */
              value?: string | boolean | number;
              name?: string | null;
              /**
               * Идентификатор значения справочника. Если установлен, то value и name задавать не нужно.
               */
              directory_value_id?: number;
            })[];
            product_groups?: ({
              /**
               * Идентификатор склейки
               */
              id?: number;
              /**
               * Кол-во товаров в склейке
               */
              products_count?: number;
              main_product_image?: string | null;
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
               * Идентификатор категории
               */
              category_id?: number;
              main_product_id?: number | null;
              /**
               * Название
               */
              name?: string;
              /**
               * Активность
               */
              is_active?: boolean;
            } & {
              category?: {
                /**
                 * Идентификатор категории
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
                /**
                 * Признак активности с учетом иерархии
                 */
                is_real_active?: boolean;
              } & {
                /**
                 * Название категории
                 */
                name?: string;
                /**
                 * Код категории
                 */
                code?: string;
                parent_id?: number | null;
                /**
                 * Категория наследует атрибуты родительской
                 */
                is_inherits_properties?: boolean;
                /**
                 * Признак активности данной категории
                 */
                is_active?: boolean;
              } & {
                properties?: {
                  /**
                   * Название свойства
                   */
                  name?: string;
                  /**
                   * Публичное наименование
                   */
                  display_name?: string;
                  /**
                   * Код свойства
                   */
                  code?: string;
                  /**
                   * Тип свойства из PropertyTypeEnum
                   */
                  type?: string;
                  /**
                   * Подсказка при заполнении для значения
                   */
                  hint_value?: string;
                  /**
                   * Подсказка при заполнении для названия значения
                   */
                  hint_value_name?: string;
                  /**
                   * Поддерживает множественные значения
                   */
                  is_multiple?: boolean;
                  /**
                   * Выводится в фильтрах на витрине
                   */
                  is_filterable?: boolean;
                  /**
                   * Выводить на витрине
                   */
                  is_public?: boolean;
                  /**
                   * Активность атрибут
                   */
                  is_active?: boolean;
                  /**
                   * Атрибут имеет справочник значений
                   */
                  has_directory?: boolean;
                  /**
                   * Наследуемой от родительской категории атрибут
                   */
                  is_inherited?: boolean;
                  /**
                   * Атрибут обязателен для заполнения
                   */
                  is_required?: boolean;
                  /**
                   * Признак системного атрибута
                   */
                  is_system?: boolean;
                  /**
                   * Атрибут модерируется
                   */
                  is_moderated?: boolean;
                  /**
                   * Свойство используется для склейки товаров
                   */
                  is_gluing?: boolean;
                  /**
                   * Признак общего для всех категорий атрибута
                   */
                  is_common?: boolean;
                  /**
                   * Идентификатор атрибута, которому принадлежит значение
                   */
                  property_id?: number;
                }[];
                hidden_properties?: {
                  /**
                   * Название свойства
                   */
                  name?: string;
                  /**
                   * Публичное наименование
                   */
                  display_name?: string;
                  /**
                   * Код свойства
                   */
                  code?: string;
                  /**
                   * Тип свойства из PropertyTypeEnum
                   */
                  type?: string;
                  /**
                   * Подсказка при заполнении для значения
                   */
                  hint_value?: string;
                  /**
                   * Подсказка при заполнении для названия значения
                   */
                  hint_value_name?: string;
                  /**
                   * Поддерживает множественные значения
                   */
                  is_multiple?: boolean;
                  /**
                   * Выводится в фильтрах на витрине
                   */
                  is_filterable?: boolean;
                  /**
                   * Выводить на витрине
                   */
                  is_public?: boolean;
                  /**
                   * Активность атрибут
                   */
                  is_active?: boolean;
                  /**
                   * Атрибут имеет справочник значений
                   */
                  has_directory?: boolean;
                  /**
                   * Наследуемой от родительской категории атрибут
                   */
                  is_inherited?: boolean;
                  /**
                   * Атрибут обязателен для заполнения
                   */
                  is_required?: boolean;
                  /**
                   * Признак системного атрибута
                   */
                  is_system?: boolean;
                  /**
                   * Атрибут модерируется
                   */
                  is_moderated?: boolean;
                  /**
                   * Свойство используется для склейки товаров
                   */
                  is_gluing?: boolean;
                  /**
                   * Признак общего для всех категорий атрибута
                   */
                  is_common?: boolean;
                  /**
                   * Идентификатор атрибута, которому принадлежит значение
                   */
                  property_id?: number;
                }[];
              };
              main_product?: {
                /**
                 * Идентификатор товара
                 */
                id: number;
                /**
                 * Дата создания
                 */
                created_at: string;
                /**
                 * Дата обновления
                 */
                updated_at: string;
              } & ({
                external_id?: string | null;
                barcode?: string | null;
              } & {
                category_id?: number | null;
                brand_id?: number | null;
                /**
                 * Название товара
                 */
                name?: string;
                code?: string | null;
                description?: string | null;
                /**
                 * Тип товара из CatalogProductTypeEnum
                 */
                type?: number;
                /**
                 * Публикация разрешена
                 */
                allow_publish?: boolean;
                /**
                 * Артикул
                 */
                vendor_code?: string;
                weight?: number | null;
                weight_gross?: number | null;
                length?: number | null;
                width?: number | null;
                height?: number | null;
                is_adult?: boolean | null;
                base_price?: number | null;
              }) & {};
              products?: ({
                /**
                 * Идентификатор товара
                 */
                id: number;
                /**
                 * Дата создания
                 */
                created_at: string;
                /**
                 * Дата обновления
                 */
                updated_at: string;
              } & ({
                external_id?: string | null;
                barcode?: string | null;
              } & {
                category_id?: number | null;
                brand_id?: number | null;
                /**
                 * Название товара
                 */
                name?: string;
                code?: string | null;
                description?: string | null;
                /**
                 * Тип товара из CatalogProductTypeEnum
                 */
                type?: number;
                /**
                 * Публикация разрешена
                 */
                allow_publish?: boolean;
                /**
                 * Артикул
                 */
                vendor_code?: string;
                weight?: number | null;
                weight_gross?: number | null;
                length?: number | null;
                width?: number | null;
                height?: number | null;
                is_adult?: boolean | null;
                base_price?: number | null;
              }) & {})[];
            } & {})[];
            /**
             * Есть ли незаполненные обязательные атрибуты
             */
            no_filled_required_attributes?: boolean;
          } & {};
        stock?: {
          /**
           * Идентификатор стока
           */
          id?: number;
        } & {
          /**
           * ID склада
           */
          store_id?: number;
          /**
           * ID товарного предложения
           */
          offer_id?: number;
          /**
           * Идентификатор товара
           */
          product_id?: number;
          /**
           * Количество товара для резервирования
           */
          qty?: number;
        } & {};
      })[];
      store?: {
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
      seller?: {
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
    })[];
    delivery_service?: {
      /**
       * Идентификатор службы доставки
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
       * Название
       */
      name?: string;
      /**
       * Дата регистрации
       */
      registered_at?: string;
      legal_info_company_name?: string | null;
      legal_info_company_address?: {} | null;
      legal_info_inn?: string | null;
      legal_info_payment_account?: string | null;
      legal_info_bik?: string | null;
      legal_info_bank?: string | null;
      legal_info_bank_correspondent_account?: string | null;
      general_manager_name?: string | null;
      contract_number?: string | null;
      contract_date?: string | null;
      vat_rate?: number | null;
      taxation_type?: number | null;
      /**
       * Службы доставки. Расшифровка значений:
       *   * `1` - Активен
       *   * `2` - Не активен
       *
       */
      status?: 1 | 2;
      comment?: string | null;
      apiship_key?: string | null;
      /**
       * Приоритет (чем меньше, тем выше)
       */
      priority?: number;
      /**
       * Максимальное кол-во отправлений в день
       */
      max_shipments_per_day?: number;
      /**
       * Время создания заявки для забора отправления день-в-день
       */
      max_cargo_export_time?: string;
      /**
       * Консолидация многоместных отправлений?
       */
      do_consolidation?: boolean;
      /**
       * Расконсолидация многоместных отправлений?
       */
      do_deconsolidation?: boolean;
      /**
       * Осуществляет нулевую милю?
       */
      do_zero_mile?: boolean;
      /**
       * Осуществляет экспресс-доставку?
       */
      do_express_delivery?: boolean;
      /**
       * Принимает возвраты?
       */
      do_return?: boolean;
      /**
       * Осуществляет доставку опасных грузов?
       */
      do_dangerous_products_delivery?: boolean;
      /**
       * Перевозка крупногабаритных грузов?
       */
      do_transportation_oversized_cargo?: boolean;
      /**
       * Добавлять услугу частичного отказ в заказ на доставку?
       */
      add_partial_reject_service?: boolean;
      /**
       * Добавлять услугу страхования груза в заказ на доставку?
       */
      add_insurance_service?: boolean;
      /**
       * Добавлять услугу примерки в заказ на доставку?
       */
      add_fitting_service?: boolean;
      /**
       * Добавлять услугу возврата в заказ на доставку?
       */
      add_return_service?: boolean;
      /**
       * Добавлять услугу вскрытия при получении в заказ на доставку?
       */
      add_open_service?: boolean;
      /**
       * Planned Consolidation Time - плановое время доставки заказа от склада мерчанта до логистического хаба ЛО и обработки заказа в сортировочном центре или хабе на стороне ЛО (мин)
       */
      pct?: number;
    } & {
      payment_methods?: number[];
    };
  };
})[];

        export type SearchCargoOrdersResponseMeta = {
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

        export type SearchCargoOrdersResponse = CommonResponse<SearchCargoOrdersResponseData, SearchCargoOrdersResponseMeta>;
        