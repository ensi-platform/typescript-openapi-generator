/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateStatusRequest,
  DeleteResponseResponse,
  PatchStatusRequest,
  SearchStatusesRequest,
  SearchStatusesResponse,
  StatusResponse
} from '.././models';


/**
 * Поиск статусов
 * @summary Поиск статусов
 */
export const getSearchStatusesUrl = () => {


  

  return `/communication/statuses:search`
}

export const searchStatuses = async (searchStatusesRequest: SearchStatusesRequest, options?: RequestInit): Promise<SearchStatusesResponse> => {
  
  const res = await fetch(getSearchStatusesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchStatusesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание статуса
 * @summary Создание статуса
 */
export const getCreateStatusUrl = () => {


  

  return `/communication/statuses`
}

export const createStatus = async (createStatusRequest: CreateStatusRequest, options?: RequestInit): Promise<StatusResponse> => {
  
  const res = await fetch(getCreateStatusUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createStatusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление данных статуса
 * @summary Обновление данных статуса
 */
export const getPatchStatusUrl = (id: number,) => {


  

  return `/communication/statuses/${id}`
}

export const patchStatus = async (id: number,
    patchStatusRequest: PatchStatusRequest, options?: RequestInit): Promise<StatusResponse> => {
  
  const res = await fetch(getPatchStatusUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchStatusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление статуса
 * @summary Удаление статуса
 */
export const getDeleteStatusUrl = (id: number,) => {


  

  return `/communication/statuses/${id}`
}

export const deleteStatus = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteStatusUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


