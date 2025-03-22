/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateDeliveryServiceManagerRequest,
  DeliveryServiceManagerResponse,
  EmptyDataResponse,
  GetDeliveryServiceManagerParams,
  PatchDeliveryServiceManagerRequest,
  SearchDeliveryServiceManagersRequest,
  SearchDeliveryServiceManagersResponse
} from '.././models';


/**
 * Создание объекта типа DeliveryServiceManager
 * @summary Создание объекта типа DeliveryServiceManager
 */
export const getCreateDeliveryServiceManagerUrl = () => {


  

  return `/logistic/delivery-service-managers`
}

export const createDeliveryServiceManager = async (createDeliveryServiceManagerRequest: CreateDeliveryServiceManagerRequest, options?: RequestInit): Promise<DeliveryServiceManagerResponse> => {
  
  const res = await fetch(getCreateDeliveryServiceManagerUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createDeliveryServiceManagerRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceManagerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа DeliveryServiceManager
 * @summary Получение объекта типа DeliveryServiceManager
 */
export const getGetDeliveryServiceManagerUrl = (id: number,
    params?: GetDeliveryServiceManagerParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/logistic/delivery-service-managers/${id}?${stringifiedParams}` : `/logistic/delivery-service-managers/${id}`
}

export const getDeliveryServiceManager = async (id: number,
    params?: GetDeliveryServiceManagerParams, options?: RequestInit): Promise<DeliveryServiceManagerResponse> => {
  
  const res = await fetch(getGetDeliveryServiceManagerUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceManagerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа DeliveryServiceManager
 * @summary Обновления части полей объекта типа DeliveryServiceManager
 */
export const getPatchDeliveryServiceManagerUrl = (id: number,) => {


  

  return `/logistic/delivery-service-managers/${id}`
}

export const patchDeliveryServiceManager = async (id: number,
    patchDeliveryServiceManagerRequest: PatchDeliveryServiceManagerRequest, options?: RequestInit): Promise<DeliveryServiceManagerResponse> => {
  
  const res = await fetch(getPatchDeliveryServiceManagerUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDeliveryServiceManagerRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceManagerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа DeliveryServiceManager
 * @summary Удаление объекта типа DeliveryServiceManager
 */
export const getDeleteDeliveryServiceManagerUrl = (id: number,) => {


  

  return `/logistic/delivery-service-managers/${id}`
}

export const deleteDeliveryServiceManager = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteDeliveryServiceManagerUrl(id),
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
 * Поиск объектов типа DeliveryServiceManager
 * @summary Поиск объектов типа DeliveryServiceManager
 */
export const getSearchDeliveryServiceManagersUrl = () => {


  

  return `/logistic/delivery-service-managers:search`
}

export const searchDeliveryServiceManagers = async (searchDeliveryServiceManagersRequest: SearchDeliveryServiceManagersRequest, options?: RequestInit): Promise<SearchDeliveryServiceManagersResponse> => {
  
  const res = await fetch(getSearchDeliveryServiceManagersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryServiceManagersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDeliveryServiceManagersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryServiceManager
 * @summary Поиск объекта типа DeliveryServiceManager
 */
export const getSearchOneDeliveryServiceManagerUrl = () => {


  

  return `/logistic/delivery-service-managers:search-one`
}

export const searchOneDeliveryServiceManager = async (searchDeliveryServiceManagersRequest: SearchDeliveryServiceManagersRequest, options?: RequestInit): Promise<DeliveryServiceManagerResponse> => {
  
  const res = await fetch(getSearchOneDeliveryServiceManagerUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryServiceManagersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceManagerResponse = body ? JSON.parse(body) : {}

  return data
}


