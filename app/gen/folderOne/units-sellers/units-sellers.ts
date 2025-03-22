/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateSellerRequest,
  GetResourceMetaResponseResponse,
  GetSellerDetailParams,
  GetSellerStatusesResponse,
  PatchSellerRequest,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchSellersRequest,
  SearchSellersResponse,
  SellerResponse
} from '.././models';


/**
 * Получение объектов типа Seller
 * @summary Получение объектов типа Seller
 */
export const getSearchSellersUrl = () => {


  

  return `/units/sellers:search`
}

export const searchSellers = async (searchSellersRequest: SearchSellersRequest, options?: RequestInit): Promise<SearchSellersResponse> => {
  
  const res = await fetch(getSearchSellersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchSellersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchSellersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetSellerMetaUrl = () => {


  

  return `/units/sellers:meta`
}

export const getSellerMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetSellerMetaUrl(),
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
 * Создание продавца
 * @summary Создание продавца
 */
export const getCreateSellerUrl = () => {


  

  return `/units/sellers`
}

export const createSeller = async (createSellerRequest: CreateSellerRequest, options?: RequestInit): Promise<SellerResponse> => {
  
  const res = await fetch(getCreateSellerUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createSellerRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SellerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа Seller
 * @summary Получение объекта типа Seller
 */
export const getGetSellerDetailUrl = (id: number,
    params?: GetSellerDetailParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/units/sellers/${id}?${stringifiedParams}` : `/units/sellers/${id}`
}

export const getSellerDetail = async (id: number,
    params?: GetSellerDetailParams, options?: RequestInit): Promise<SellerResponse> => {
  
  const res = await fetch(getGetSellerDetailUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SellerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа Seller
 * @summary Частичное изменение объекта типа Seller
 */
export const getPatchSellerUrl = (id: number,) => {


  

  return `/units/sellers/${id}`
}

export const patchSeller = async (id: number,
    patchSellerRequest: PatchSellerRequest, options?: RequestInit): Promise<SellerResponse> => {
  
  const res = await fetch(getPatchSellerUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchSellerRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SellerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа SellerStatus
 * @summary Получение объектов типа SellerStatus
 */
export const getGetSellerStatusesUrl = () => {


  

  return `/units/sellers/seller-statuses`
}

export const getSellerStatuses = async ( options?: RequestInit): Promise<GetSellerStatusesResponse> => {
  
  const res = await fetch(getGetSellerStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSellerStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск продавцов для справочника
 * @summary Поиск продавцов для справочника
 */
export const getSearchSellerEnumValuesUrl = () => {


  

  return `/units/seller-enum-values:search`
}

export const searchSellerEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchSellerEnumValuesUrl(),
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


