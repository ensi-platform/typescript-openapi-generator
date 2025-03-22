/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateCustomerAddressRequest,
  CustomerAddressResponse,
  EmptyDataResponse,
  ReplaceCustomerAddressRequest,
  SearchCustomerAddressesRequest,
  SearchCustomerAddressesResponse
} from '.././models';


/**
 * Searching for addresses that match the filter
 * @summary Searching for addresses that match the filter
 */
export const getSearchCustomerAddressesUrl = () => {


  

  return `/customers/addresses:search`
}

export const searchCustomerAddresses = async (searchCustomerAddressesRequest: SearchCustomerAddressesRequest, options?: RequestInit): Promise<SearchCustomerAddressesResponse> => {
  
  const res = await fetch(getSearchCustomerAddressesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCustomerAddressesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCustomerAddressesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to create a new customer address
 * @summary Request to create a new customer address
 */
export const getCreateCustomerAddressUrl = () => {


  

  return `/customers/addresses`
}

export const createCustomerAddress = async (createCustomerAddressRequest: CreateCustomerAddressRequest, options?: RequestInit): Promise<CustomerAddressResponse> => {
  
  const res = await fetch(getCreateCustomerAddressUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCustomerAddressRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerAddressResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to get address by id
 * @summary Request to get address by id
 */
export const getGetCustomerAddressUrl = (id: number,) => {


  

  return `/customers/addresses/${id}`
}

export const getCustomerAddress = async (id: number, options?: RequestInit): Promise<CustomerAddressResponse> => {
  
  const res = await fetch(getGetCustomerAddressUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerAddressResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to update customer address
 * @summary Request to update customer address
 */
export const getReplaceCustomerAddressUrl = (id: number,) => {


  

  return `/customers/addresses/${id}`
}

export const replaceCustomerAddress = async (id: number,
    replaceCustomerAddressRequest: ReplaceCustomerAddressRequest, options?: RequestInit): Promise<CustomerAddressResponse> => {
  
  const res = await fetch(getReplaceCustomerAddressUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceCustomerAddressRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerAddressResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to delete customer address
 * @summary Request to delete customer address
 */
export const getDeleteCustomerAddressUrl = (id: number,) => {


  

  return `/customers/addresses/${id}`
}

export const deleteCustomerAddress = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteCustomerAddressUrl(id),
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
 * Request to set default address
 * @summary Request to set default address
 */
export const getSetCustomerAddressesAsDefaultUrl = (id: number,) => {


  

  return `/customers/addresses/${id}:set-as-default`
}

export const setCustomerAddressesAsDefault = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getSetCustomerAddressesAsDefaultUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


