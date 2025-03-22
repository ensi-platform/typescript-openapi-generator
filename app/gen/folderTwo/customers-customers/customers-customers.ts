/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateCustomerRequest,
  CustomerResponse,
  EmptyDataResponse,
  GetCustomerParams,
  GetResourceMetaResponseResponse,
  MultipartFileUploadRequest,
  PatchCustomerRequest,
  SearchCustomersRequest,
  SearchCustomersResponse,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse
} from '.././models';


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCustomerMetaUrl = () => {


  

  return `/customers/customers:meta`
}

export const getCustomerMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCustomerMetaUrl(),
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
 * Search for customers matching the filter
 * @summary Search for customers that meet the filter
 */
export const getSearchCustomersUrl = () => {


  

  return `/customers/customers:search`
}

export const searchCustomers = async (searchCustomersRequest: SearchCustomersRequest, options?: RequestInit): Promise<SearchCustomersResponse> => {
  
  const res = await fetch(getSearchCustomersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCustomersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCustomersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for customers for a directory
 * @summary Search for customers for a directory
 */
export const getSearchCustomerEnumValuesUrl = () => {


  

  return `/customers/customer-enum-values:search`
}

export const searchCustomerEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchCustomerEnumValuesUrl(),
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
 * Request to create a new customer
 * @summary Request to create a new customer
 */
export const getCreateCustomerUrl = () => {


  

  return `/customers/customers`
}

export const createCustomer = async (createCustomerRequest: CreateCustomerRequest, options?: RequestInit): Promise<CustomerResponse> => {
  
  const res = await fetch(getCreateCustomerUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCustomerRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to get a customer
 * @summary Request to get a customer
 */
export const getGetCustomerUrl = (id: number,
    params?: GetCustomerParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/customers/customers/${id}?${stringifiedParams}` : `/customers/customers/${id}`
}

export const getCustomer = async (id: number,
    params?: GetCustomerParams, options?: RequestInit): Promise<CustomerResponse> => {
  
  const res = await fetch(getGetCustomerUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Updating an object of type Customer
 * @summary Updating an object of type Customer
 */
export const getPatchCustomerUrl = (id: number,) => {


  

  return `/customers/customers/${id}`
}

export const patchCustomer = async (id: number,
    patchCustomerRequest: PatchCustomerRequest, options?: RequestInit): Promise<CustomerResponse> => {
  
  const res = await fetch(getPatchCustomerUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchCustomerRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to delete customer's personal data
 * @summary Request to delete customer's personal data
 */
export const getDeleteCustomerPersonalDataUrl = (id: number,) => {


  

  return `/customers/customers/${id}:delete-personal-data`
}

export const deleteCustomerPersonalData = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteCustomerPersonalDataUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Uploading a file with customer avatar
 * @summary Uploading a file with customer avatar
 */
export const getUploadCustomerAvatarUrl = (id: number,) => {


  

  return `/customers/customers/${id}:upload-avatar`
}

export const uploadCustomerAvatar = async (id: number,
    multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<CustomerResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getUploadCustomerAvatarUrl(id),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting a customer avatar from the database and file system
 * @summary Deleting a customer avatar
 */
export const getDeleteCustomerAvatarUrl = (id: number,) => {


  

  return `/customers/customers/${id}:delete-avatar`
}

export const deleteCustomerAvatar = async (id: number, options?: RequestInit): Promise<CustomerResponse> => {
  
  const res = await fetch(getDeleteCustomerAvatarUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CustomerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCustomerOrderMetaUrl = () => {


  

  return `/customers/orders:meta`
}

export const getCustomerOrderMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCustomerOrderMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


