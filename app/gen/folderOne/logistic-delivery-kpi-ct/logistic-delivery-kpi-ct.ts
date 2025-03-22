/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateDeliveryKpiCtRequest,
  DeliveryKpiCtResponse,
  EmptyDataResponse,
  PatchDeliveryKpiCtRequest,
  SearchDeliveryKpiCtRequest,
  SearchDeliveryKpiCtResponse
} from '.././models';


/**
 * Поиск объектов типа DeliveryKpiCt
 * @summary Поиск объектов типа DeliveryKpiCt
 */
export const getSearchDeliveryKpiCtsUrl = () => {


  

  return `/logistic/delivery-kpi-ct:search`
}

export const searchDeliveryKpiCts = async (searchDeliveryKpiCtRequest: SearchDeliveryKpiCtRequest, options?: RequestInit): Promise<SearchDeliveryKpiCtResponse> => {
  
  const res = await fetch(getSearchDeliveryKpiCtsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryKpiCtRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDeliveryKpiCtResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryKpiCt
 * @summary Поиск объекта типа DeliveryKpiCt
 */
export const getSearchOneDeliveryKpiCtUrl = () => {


  

  return `/logistic/delivery-kpi-ct:search-one`
}

export const searchOneDeliveryKpiCt = async (searchDeliveryKpiCtRequest: SearchDeliveryKpiCtRequest, options?: RequestInit): Promise<DeliveryKpiCtResponse> => {
  
  const res = await fetch(getSearchOneDeliveryKpiCtUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryKpiCtRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiCtResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа DeliveryKpiCt
 * @summary Получение объекта типа DeliveryKpiCt
 */
export const getGetDeliveryKpiCtUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ct/${id}`
}

export const getDeliveryKpiCt = async (id: number, options?: RequestInit): Promise<DeliveryKpiCtResponse> => {
  
  const res = await fetch(getGetDeliveryKpiCtUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiCtResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание объекта типа DeliveryKpiCt
 * @summary Создание объекта типа DeliveryKpiCt
 */
export const getCreateDeliveryKpiCtUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ct/${id}`
}

export const createDeliveryKpiCt = async (id: number,
    createDeliveryKpiCtRequest: CreateDeliveryKpiCtRequest, options?: RequestInit): Promise<DeliveryKpiCtResponse> => {
  
  const res = await fetch(getCreateDeliveryKpiCtUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createDeliveryKpiCtRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiCtResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление объекта типа DeliveryKpiCt
 * @summary Обновление объекта типа DeliveryKpiCt
 */
export const getPatchDeliveryKpiCtUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ct/${id}`
}

export const patchDeliveryKpiCt = async (id: number,
    patchDeliveryKpiCtRequest: PatchDeliveryKpiCtRequest, options?: RequestInit): Promise<DeliveryKpiCtResponse> => {
  
  const res = await fetch(getPatchDeliveryKpiCtUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDeliveryKpiCtRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiCtResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа DeliveryKpiCt
 * @summary Удаление объекта типа DeliveryKpiCt
 */
export const getDeleteDeliveryKpiCtUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ct/${id}`
}

export const deleteDeliveryKpiCt = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteDeliveryKpiCtUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


