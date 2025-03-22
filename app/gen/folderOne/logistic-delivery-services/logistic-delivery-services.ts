/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  AddPaymentMethodsToDeliveryServiceRequest,
  DeletePaymentMethodFromDeliveryServiceRequest,
  DeliveryServiceFillableProperties,
  DeliveryServiceResponse,
  EmptyDataResponse,
  GetDeliveryServiceParams,
  SearchDeliveryServicesRequest,
  SearchDeliveryServicesResponse
} from '.././models';


/**
 * Получение объекта типа DeliveryService
 * @summary Получение объекта типа DeliveryService
 */
export const getGetDeliveryServiceUrl = (id: number,
    params?: GetDeliveryServiceParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/logistic/delivery-services/${id}?${stringifiedParams}` : `/logistic/delivery-services/${id}`
}

export const getDeliveryService = async (id: number,
    params?: GetDeliveryServiceParams, options?: RequestInit): Promise<DeliveryServiceResponse> => {
  
  const res = await fetch(getGetDeliveryServiceUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа DeliveryService
 * @summary Обновления части полей объекта типа DeliveryService
 */
export const getPatchDeliveryServiceUrl = (id: number,) => {


  

  return `/logistic/delivery-services/${id}`
}

export const patchDeliveryService = async (id: number,
    deliveryServiceFillableProperties: DeliveryServiceFillableProperties, options?: RequestInit): Promise<DeliveryServiceResponse> => {
  
  const res = await fetch(getPatchDeliveryServiceUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deliveryServiceFillableProperties,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryService
 * @summary Поиск объектов типа DeliveryService
 */
export const getSearchDeliveryServicesUrl = () => {


  

  return `/logistic/delivery-services:search`
}

export const searchDeliveryServices = async (searchDeliveryServicesRequest: SearchDeliveryServicesRequest, options?: RequestInit): Promise<SearchDeliveryServicesResponse> => {
  
  const res = await fetch(getSearchDeliveryServicesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryServicesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDeliveryServicesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryService
 * @summary Поиск объекта типа DeliveryService
 */
export const getSearchOneDeliveryServiceUrl = () => {


  

  return `/logistic/delivery-services:search-one`
}

export const searchOneDeliveryService = async (searchDeliveryServicesRequest: SearchDeliveryServicesRequest, options?: RequestInit): Promise<DeliveryServiceResponse> => {
  
  const res = await fetch(getSearchOneDeliveryServiceUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryServicesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Добавление доступных способов оплаты службе доставки
 * @summary Добавление доступных способов оплаты службе доставки
 */
export const getAddPaymentMethodsToDeliveryServiceUrl = (id: number,) => {


  

  return `/logistic/delivery-services/${id}:add-payment-methods`
}

export const addPaymentMethodsToDeliveryService = async (id: number,
    addPaymentMethodsToDeliveryServiceRequest: AddPaymentMethodsToDeliveryServiceRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getAddPaymentMethodsToDeliveryServiceUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      addPaymentMethodsToDeliveryServiceRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление доступного способа оплаты у службы доставки
 * @summary Удаление доступного способа оплаты у службы доставки
 */
export const getDeletePaymentMethodFromDeliveryServiceUrl = (id: number,) => {


  

  return `/logistic/delivery-services/${id}:delete-payment-method`
}

export const deletePaymentMethodFromDeliveryService = async (id: number,
    deletePaymentMethodFromDeliveryServiceRequest: DeletePaymentMethodFromDeliveryServiceRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeletePaymentMethodFromDeliveryServiceUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deletePaymentMethodFromDeliveryServiceRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


