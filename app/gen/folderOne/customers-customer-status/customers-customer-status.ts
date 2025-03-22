/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateCustomerStatusRequest,
  CustomerStatusResponse,
  EmptyDataResponse,
  PatchCustomerStatusRequest,
  SearchCustomerStatusesRequest,
  SearchCustomerStatusesResponse,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse
} from '.././models';


/**
 * Search for statuses matching the filter
 * @summary Search for statuses matching the filter
 */
export const getSearchCustomerStatusesUrl = () => {


  

  return `/customers/statuses:search`
}

export const searchCustomerStatuses = async (searchCustomerStatusesRequest: SearchCustomerStatusesRequest, options?: RequestInit): Promise<SearchCustomerStatusesResponse> => {
  
  const res = await fetch(getSearchCustomerStatusesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCustomerStatusesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCustomerStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search client status for a directory
 * @summary Search client status for a directory
 */
export const getSearchCustomerStatusEnumValuesUrl = () => {


  

  return `/customers/statuses-enum-values:search`
}

export const searchCustomerStatusEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchCustomerStatusEnumValuesUrl(),
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
 * Request to create a new client status
 * @summary Request to create a new client status
 */
export const getCreateCustomerStatusUrl = () => {


  

  return `/customers/statuses`
}

export const createCustomerStatus = async (createCustomerStatusRequest: CreateCustomerStatusRequest, options?: RequestInit): Promise<CustomerStatusResponse> => {
  
  const res = await fetch(getCreateCustomerStatusUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCustomerStatusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerStatusResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to get status by id
 * @summary Request to get status by id
 */
export const getGetCustomerStatusUrl = (id: number,) => {


  

  return `/customers/statuses/${id}`
}

export const getCustomerStatus = async (id: number, options?: RequestInit): Promise<CustomerStatusResponse> => {
  
  const res = await fetch(getGetCustomerStatusUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerStatusResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to update customer status
 * @summary Request to update customer status
 */
export const getPatchCustomerStatusUrl = (id: number,) => {


  

  return `/customers/statuses/${id}`
}

export const patchCustomerStatus = async (id: number,
    patchCustomerStatusRequest: PatchCustomerStatusRequest, options?: RequestInit): Promise<CustomerStatusResponse> => {
  
  const res = await fetch(getPatchCustomerStatusUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchCustomerStatusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerStatusResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to delete customer status
 * @summary Request to delete client status
 */
export const getDeleteCustomerStatusUrl = (id: number,) => {


  

  return `/customers/statuses/${id}`
}

export const deleteCustomerStatus = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteCustomerStatusUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


