/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateStatusSettingRequest,
  EmptyDataResponse,
  GetNextStatusRequest,
  GetResourceMetaResponseResponse,
  PatchStatusSettingRequest,
  ProductStatusTypesResponse,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchStatusSettingsRequest,
  SetPreviousStatusRequest,
  StatusSettingResponse,
  StatusSettingsResponse,
  StatusesResponse
} from '.././models';


/**
 * Getting available statuses from the current one
 * @summary Getting available statuses from the current one
 */
export const getNextProductStatusesUrl = () => {


  

  return `/catalog/product-statuses:next`
}

export const nextProductStatuses = async (getNextStatusRequest: GetNextStatusRequest, options?: RequestInit): Promise<StatusesResponse> => {
  
  const res = await fetch(getNextProductStatusesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      getNextStatusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Setting statuses from which you can go to the current one
 * @summary Setting statuses from which you can go to the current one
 */
export const getSetPreviousProductStatusesUrl = (id: number,) => {


  

  return `/catalog/product-statuses/${id}:set-previous`
}

export const setPreviousProductStatuses = async (id: number,
    setPreviousStatusRequest: SetPreviousStatusRequest, options?: RequestInit): Promise<StatusSettingResponse> => {
  
  const res = await fetch(getSetPreviousProductStatusesUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      setPreviousStatusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusSettingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of ProductStatusSetting for enum
 * @summary Search for objects of ProductStatusSetting for enum
 */
export const getSearchProductStatusEnumValuesUrl = () => {


  

  return `/catalog/product-status-enum-values:search`
}

export const searchProductStatusEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchProductStatusEnumValuesUrl(),
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
 * Search for objects of ProductStatusSetting
 * @summary Search for objects of ProductStatusSetting
 */
export const getSearchProductStatusesUrl = () => {


  

  return `/catalog/product-statuses:search`
}

export const searchProductStatuses = async (searchStatusSettingsRequest: SearchStatusSettingsRequest, options?: RequestInit): Promise<StatusSettingsResponse> => {
  
  const res = await fetch(getSearchProductStatusesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchStatusSettingsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusSettingsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetProductStatusesMetaUrl = () => {


  

  return `/catalog/product-statuses:meta`
}

export const getProductStatusesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetProductStatusesMetaUrl(),
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
 * Creating an object of ProductStatusSetting
 * @summary Creating an object of ProductStatusSetting
 */
export const getCreateProductStatusUrl = () => {


  

  return `/catalog/product-statuses`
}

export const createProductStatus = async (createStatusSettingRequest: CreateStatusSettingRequest, options?: RequestInit): Promise<StatusSettingResponse> => {
  
  const res = await fetch(getCreateProductStatusUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createStatusSettingRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusSettingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of ProductStatusSetting by ID
 * @summary Get the object of ProductStatusSetting by ID
 */
export const getGetProductStatusUrl = (id: number,) => {


  

  return `/catalog/product-statuses/${id}`
}

export const getProductStatus = async (id: number, options?: RequestInit): Promise<StatusSettingResponse> => {
  
  const res = await fetch(getGetProductStatusUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusSettingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of ProductStatusSetting
 * @summary Patching an object of ProductStatusSetting
 */
export const getPatchProductStatusUrl = (id: number,) => {


  

  return `/catalog/product-statuses/${id}`
}

export const patchProductStatus = async (id: number,
    patchStatusSettingRequest: PatchStatusSettingRequest, options?: RequestInit): Promise<StatusSettingResponse> => {
  
  const res = await fetch(getPatchProductStatusUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchStatusSettingRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StatusSettingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of ProductStatusSetting
 * @summary Deleting an object of ProductStatusSetting
 */
export const getDeleteProductStatusUrl = (id: number,) => {


  

  return `/catalog/product-statuses/${id}`
}

export const deleteProductStatus = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteProductStatusUrl(id),
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
 * Search for objects of CatalogProductStatusTypeEnum
 * @summary Search for objects of CatalogProductStatusTypeEnum
 */
export const getGetProductStatusTypeUrl = () => {


  

  return `/catalog/product-status-types`
}

export const getProductStatusType = async ( options?: RequestInit): Promise<ProductStatusTypesResponse> => {
  
  const res = await fetch(getGetProductStatusTypeUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductStatusTypesResponse = body ? JSON.parse(body) : {}

  return data
}


