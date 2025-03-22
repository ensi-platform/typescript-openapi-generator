/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateStoreContactRequest,
  CreateStorePickupTimeRequest,
  CreateStoreRequest,
  CreateStoreWorkingRequest,
  EmptyDataResponse,
  GetResourceMetaResponseResponse,
  GetStoreParams,
  PatchStoreContactRequest,
  PatchStorePickupTimeRequest,
  PatchStoreRequest,
  PatchStoreWorkingRequest,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchStoresRequest,
  SearchStoresResponse,
  StoreContactResponse,
  StorePickupTimeResponse,
  StoreResponse,
  StoreWorkingResponse
} from '.././models';


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetStoressMetaUrl = () => {


  

  return `/units/stores:meta`
}

export const getStoressMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetStoressMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа Store
 * @summary Получение объектов типа Store
 */
export const getSearchStoresUrl = () => {


  

  return `/units/stores:search`
}

export const searchStores = async (searchStoresRequest: SearchStoresRequest, options?: RequestInit): Promise<SearchStoresResponse> => {
  
  const res = await fetch(getSearchStoresUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchStoresRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchStoresResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск магазина для справочника
 * @summary Поиск магазина для справочника
 */
export const getSearchStoreEnumValuesUrl = () => {


  

  return `/units/store-enum-values:search`
}

export const searchStoreEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchStoreEnumValuesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchEnumValuesRequestBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchEnumValuesResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание склада продавца
 * @summary Создание склада продавца
 */
export const getCreateStoreUrl = () => {


  

  return `/units/stores`
}

export const createStore = async (createStoreRequest: CreateStoreRequest, options?: RequestInit): Promise<StoreResponse> => {
  
  const res = await fetch(getCreateStoreUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createStoreRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StoreResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа Store
 * @summary Получение объекта типа Store
 */
export const getGetStoreUrl = (id: number,
    params?: GetStoreParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/units/stores/${id}?${stringifiedParams}` : `/units/stores/${id}`
}

export const getStore = async (id: number,
    params?: GetStoreParams, options?: RequestInit): Promise<StoreResponse> => {
  
  const res = await fetch(getGetStoreUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StoreResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа Store
 * @summary Частичное изменение объекта типа Store
 */
export const getPatchStoreUrl = (id: number,) => {


  

  return `/units/stores/${id}`
}

export const patchStore = async (id: number,
    patchStoreRequest: PatchStoreRequest, options?: RequestInit): Promise<StoreResponse> => {
  
  const res = await fetch(getPatchStoreUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchStoreRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StoreResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание времени работы склада
 * @summary Создание времени работы склада
 */
export const getCreateStoreWorkingUrl = () => {


  

  return `/units/stores-workings`
}

export const createStoreWorking = async (createStoreWorkingRequest: CreateStoreWorkingRequest, options?: RequestInit): Promise<StoreWorkingResponse> => {
  
  const res = await fetch(getCreateStoreWorkingUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createStoreWorkingRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StoreWorkingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа StoreWorking
 * @summary Частичное изменение объекта типа StoreWorking
 */
export const getPatchStoreWorkingUrl = (id: number,) => {


  

  return `/units/stores-workings/${id}`
}

export const patchStoreWorking = async (id: number,
    patchStoreWorkingRequest: PatchStoreWorkingRequest, options?: RequestInit): Promise<StoreWorkingResponse> => {
  
  const res = await fetch(getPatchStoreWorkingUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchStoreWorkingRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StoreWorkingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа StoreWorking
 * @summary Удалить запись о времени работы склада
 */
export const getDeleteStoreWorkingUrl = (id: number,) => {


  

  return `/units/stores-workings/${id}`
}

export const deleteStoreWorking = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteStoreWorkingUrl(id),
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
 * Создание времени отгрузки со склада
 * @summary Создание времени отгрузки со склада
 */
export const getCreateStorePickupTimeUrl = () => {


  

  return `/units/stores-pickup-times`
}

export const createStorePickupTime = async (createStorePickupTimeRequest: CreateStorePickupTimeRequest, options?: RequestInit): Promise<StorePickupTimeResponse> => {
  
  const res = await fetch(getCreateStorePickupTimeUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createStorePickupTimeRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StorePickupTimeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа StorePickupTime
 * @summary Частичное изменение объекта типа StorePickupTime
 */
export const getPatchStorePickupTimeUrl = (id: number,) => {


  

  return `/units/stores-pickup-times/${id}`
}

export const patchStorePickupTime = async (id: number,
    patchStorePickupTimeRequest: PatchStorePickupTimeRequest, options?: RequestInit): Promise<StorePickupTimeResponse> => {
  
  const res = await fetch(getPatchStorePickupTimeUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchStorePickupTimeRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StorePickupTimeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа StorePickupTime
 * @summary Удалить запись о времени отгрузки со склада
 */
export const getDeleteStorePickupTimeUrl = (id: number,) => {


  

  return `/units/stores-pickup-times/${id}`
}

export const deleteStorePickupTime = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteStorePickupTimeUrl(id),
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
 * Создание контактного лица склада
 * @summary Создание контактного лица склада
 */
export const getCreateStoreContactUrl = () => {


  

  return `/units/stores-contacts`
}

export const createStoreContact = async (createStoreContactRequest: CreateStoreContactRequest, options?: RequestInit): Promise<StoreContactResponse> => {
  
  const res = await fetch(getCreateStoreContactUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createStoreContactRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StoreContactResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа StoreContact
 * @summary Частичное изменение объекта типа StoreContact
 */
export const getPatchStoreContactUrl = (id: number,) => {


  

  return `/units/stores-contacts/${id}`
}

export const patchStoreContact = async (id: number,
    patchStoreContactRequest: PatchStoreContactRequest, options?: RequestInit): Promise<StoreContactResponse> => {
  
  const res = await fetch(getPatchStoreContactUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchStoreContactRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StoreContactResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа StoreContact
 * @summary Удаление объекта типа StoreContact
 */
export const getDeleteStoreContactUrl = (id: number,) => {


  

  return `/units/stores-contacts/${id}`
}

export const deleteStoreContact = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteStoreContactUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


