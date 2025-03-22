/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateDeliveryKpiPptRequest,
  DeliveryKpiPptResponse,
  EmptyDataResponse,
  PatchDeliveryKpiPptRequest,
  SearchDeliveryKpiPptRequest,
  SearchDeliveryKpiPptResponse
} from '.././models';


/**
 * Поиск объектов типа DeliveryKpiPpt
 * @summary Поиск объектов типа DeliveryKpiPpt
 */
export const getSearchDeliveryKpiPptsUrl = () => {


  

  return `/logistic/delivery-kpi-ppt:search`
}

export const searchDeliveryKpiPpts = async (searchDeliveryKpiPptRequest: SearchDeliveryKpiPptRequest, options?: RequestInit): Promise<SearchDeliveryKpiPptResponse> => {
  
  const res = await fetch(getSearchDeliveryKpiPptsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryKpiPptRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDeliveryKpiPptResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryKpiPpt
 * @summary Поиск объекта типа DeliveryKpiPpt
 */
export const getSearchOneDeliveryKpiPptUrl = () => {


  

  return `/logistic/delivery-kpi-ppt:search-one`
}

export const searchOneDeliveryKpiPpt = async (searchDeliveryKpiPptRequest: SearchDeliveryKpiPptRequest, options?: RequestInit): Promise<DeliveryKpiPptResponse> => {
  
  const res = await fetch(getSearchOneDeliveryKpiPptUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryKpiPptRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiPptResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа DeliveryKpiPpt
 * @summary Получение объекта типа DeliveryKpiPpt
 */
export const getGetDeliveryKpiPptUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ppt/${id}`
}

export const getDeliveryKpiPpt = async (id: number, options?: RequestInit): Promise<DeliveryKpiPptResponse> => {
  
  const res = await fetch(getGetDeliveryKpiPptUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiPptResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание объекта типа DeliveryKpiPpt
 * @summary Создание объекта типа DeliveryKpiPpt
 */
export const getCreateDeliveryKpiPptUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ppt/${id}`
}

export const createDeliveryKpiPpt = async (id: number,
    createDeliveryKpiPptRequest: CreateDeliveryKpiPptRequest, options?: RequestInit): Promise<DeliveryKpiPptResponse> => {
  
  const res = await fetch(getCreateDeliveryKpiPptUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createDeliveryKpiPptRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiPptResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление объекта типа DeliveryKpiPpt
 * @summary Обновление объекта типа DeliveryKpiPpt
 */
export const getPatchDeliveryKpiPptUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ppt/${id}`
}

export const patchDeliveryKpiPpt = async (id: number,
    patchDeliveryKpiPptRequest: PatchDeliveryKpiPptRequest, options?: RequestInit): Promise<DeliveryKpiPptResponse> => {
  
  const res = await fetch(getPatchDeliveryKpiPptUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDeliveryKpiPptRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiPptResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа DeliveryKpiPpt
 * @summary Удаление объекта типа DeliveryKpiPpt
 */
export const getDeleteDeliveryKpiPptUrl = (id: number,) => {


  

  return `/logistic/delivery-kpi-ppt/${id}`
}

export const deleteDeliveryKpiPpt = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteDeliveryKpiPptUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


