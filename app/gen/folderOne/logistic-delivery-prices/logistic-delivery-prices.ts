/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateDeliveryPriceRequest,
  DeliveryPriceResponse,
  EmptyDataResponse,
  GetDeliveryPriceParams,
  GetResourceMetaResponseResponse,
  PatchDeliveryPriceRequest,
  SearchDeliveryPricesRequest,
  SearchDeliveryPricesResponse
} from '.././models';


/**
 * Создание объекта типа DeliveryPrice
 * @summary Создание объекта типа DeliveryPrice
 */
export const getCreateDeliveryPriceUrl = () => {


  

  return `/logistic/delivery-prices`
}

export const createDeliveryPrice = async (createDeliveryPriceRequest: CreateDeliveryPriceRequest, options?: RequestInit): Promise<DeliveryPriceResponse> => {
  
  const res = await fetch(getCreateDeliveryPriceUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createDeliveryPriceRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryPriceResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа DeliveryPrice
 * @summary Получение объекта типа DeliveryPrice
 */
export const getGetDeliveryPriceUrl = (id: number,
    params?: GetDeliveryPriceParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/logistic/delivery-prices/${id}?${stringifiedParams}` : `/logistic/delivery-prices/${id}`
}

export const getDeliveryPrice = async (id: number,
    params?: GetDeliveryPriceParams, options?: RequestInit): Promise<DeliveryPriceResponse> => {
  
  const res = await fetch(getGetDeliveryPriceUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryPriceResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа DeliveryPrice
 * @summary Обновления части полей объекта типа DeliveryPrice
 */
export const getPatchDeliveryPriceUrl = (id: number,) => {


  

  return `/logistic/delivery-prices/${id}`
}

export const patchDeliveryPrice = async (id: number,
    patchDeliveryPriceRequest: PatchDeliveryPriceRequest, options?: RequestInit): Promise<DeliveryPriceResponse> => {
  
  const res = await fetch(getPatchDeliveryPriceUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDeliveryPriceRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryPriceResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа DeliveryPrice
 * @summary Удаление объекта типа DeliveryPrice
 */
export const getDeleteDeliveryPriceUrl = (id: number,) => {


  

  return `/logistic/delivery-prices/${id}`
}

export const deleteDeliveryPrice = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteDeliveryPriceUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryPrice
 * @summary Поиск объектов типа DeliveryPrice
 */
export const getSearchDeliveryPricesUrl = () => {


  

  return `/logistic/delivery-prices:search`
}

export const searchDeliveryPrices = async (searchDeliveryPricesRequest: SearchDeliveryPricesRequest, options?: RequestInit): Promise<SearchDeliveryPricesResponse> => {
  
  const res = await fetch(getSearchDeliveryPricesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryPricesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDeliveryPricesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryPrice
 * @summary Поиск объекта типа DeliveryPrice
 */
export const getSearchOneDeliveryPriceUrl = () => {


  

  return `/logistic/delivery-prices:search-one`
}

export const searchOneDeliveryPrice = async (searchDeliveryPricesRequest: SearchDeliveryPricesRequest, options?: RequestInit): Promise<DeliveryPriceResponse> => {
  
  const res = await fetch(getSearchOneDeliveryPriceUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryPricesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryPriceResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetDeliveryPriceMetaUrl = () => {


  

  return `/logistic/delivery-prices:meta`
}

export const getDeliveryPriceMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetDeliveryPriceMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


