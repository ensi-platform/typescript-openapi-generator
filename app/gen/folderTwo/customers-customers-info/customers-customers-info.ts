/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateCustomerInfoRequest,
  CustomerInfoResponse,
  EmptyDataResponse,
  ReplaceCustomerInfoRequest,
  SearchCustomersInfoRequest,
  SearchCustomersInfoResponse
} from '.././models';


/**
 * Searching for crm customer information
 * @summary Searching for crm customer information
 */
export const getSearchCustomersInfoUrl = () => {


  

  return `/customers/customers-info:search`
}

export const searchCustomersInfo = async (searchCustomersInfoRequest: SearchCustomersInfoRequest, options?: RequestInit): Promise<SearchCustomersInfoResponse> => {
  
  const res = await fetch(getSearchCustomersInfoUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCustomersInfoRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCustomersInfoResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Create customer crm information
 * @summary Create customer crm information
 */
export const getCreateCustomerInfoUrl = () => {


  

  return `/customers/customers-info`
}

export const createCustomerInfo = async (createCustomerInfoRequest: CreateCustomerInfoRequest, options?: RequestInit): Promise<CustomerInfoResponse> => {
  
  const res = await fetch(getCreateCustomerInfoUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCustomerInfoRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerInfoResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to receive customer crm information by id
 * @summary Request to receive customer crm information by id
 */
export const getGetCustomersInfoUrl = (id: number,) => {


  

  return `/customers/customers-info/${id}`
}

export const getCustomersInfo = async (id: number, options?: RequestInit): Promise<CustomerInfoResponse> => {
  
  const res = await fetch(getGetCustomersInfoUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerInfoResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to update customer crm information
 * @summary Request to update customer crm information
 */
export const getPatchCustomerInfoUrl = (id: number,) => {


  

  return `/customers/customers-info/${id}`
}

export const patchCustomerInfo = async (id: number,
    replaceCustomerInfoRequest: ReplaceCustomerInfoRequest, options?: RequestInit): Promise<CustomerInfoResponse> => {
  
  const res = await fetch(getPatchCustomerInfoUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceCustomerInfoRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerInfoResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to delete customer crm information
 * @summary Request to delete customer crm information
 */
export const getDeleteCustomersInfoUrl = (id: number,) => {


  

  return `/customers/customers-info/${id}`
}

export const deleteCustomersInfo = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteCustomersInfoUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


