/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateTypeRequest,
  DeleteResponseResponse,
  PatchTypeRequest,
  SearchTypesRequest,
  SearchTypesResponse,
  TypeResponse
} from '.././models';


/**
 * Поиск типов
 * @summary Поиск типов
 */
export const getSearchTypesUrl = () => {


  

  return `/communication/types:search`
}

export const searchTypes = async (searchTypesRequest: SearchTypesRequest, options?: RequestInit): Promise<SearchTypesResponse> => {
  
  const res = await fetch(getSearchTypesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchTypesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание типа
 * @summary Создание типа
 */
export const getCreateTypeUrl = () => {


  

  return `/communication/types`
}

export const createType = async (createTypeRequest: CreateTypeRequest, options?: RequestInit): Promise<TypeResponse> => {
  
  const res = await fetch(getCreateTypeUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createTypeRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: TypeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление данных типа
 * @summary Обновление данных типа
 */
export const getPatchTypeUrl = (id: number,) => {


  

  return `/communication/types/${id}`
}

export const patchType = async (id: number,
    patchTypeRequest: PatchTypeRequest, options?: RequestInit): Promise<TypeResponse> => {
  
  const res = await fetch(getPatchTypeUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchTypeRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: TypeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление типа
 * @summary Удаление типа
 */
export const getDeleteTypeUrl = (id: number,) => {


  

  return `/communication/types/${id}`
}

export const deleteType = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteTypeUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


