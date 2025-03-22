/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateUserRequest,
  EmptyDataResponse,
  GetCustomerUserParams,
  PatchUserRequest,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchUsersRequest,
  SearchUsersResponse,
  SuccessEmptyResponseResponse,
  UserResponse
} from '.././models';


/**
 * Request to search for a User matching the filter
 * @summary Request to search for a User matching the filter
 */
export const getSearchCustomerUsersUrl = () => {


  

  return `/customers/users:search`
}

export const searchCustomerUsers = async (searchUsersRequest: SearchUsersRequest, options?: RequestInit): Promise<SearchUsersResponse> => {
  
  const res = await fetch(getSearchCustomerUsersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchUsersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchUsersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search users for a directory
 * @summary Search users for directory
 */
export const getSearchCustomerUserEnumValuesUrl = () => {


  

  return `/customers/users-enum-values:search`
}

export const searchCustomerUserEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchCustomerUserEnumValuesUrl(),
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
 * Request to search for one User matching the filter
 * @summary Request to search for one User matching the filter
 */
export const getSearchOneCustomerUserUrl = () => {


  

  return `/customers/users:search-one`
}

export const searchOneCustomerUser = async (searchUsersRequest: SearchUsersRequest, options?: RequestInit): Promise<UserResponse> => {
  
  const res = await fetch(getSearchOneCustomerUserUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchUsersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: UserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to create a new user
 * @summary Request to create a new user
 */
export const getCreateCustomerUserUrl = () => {


  

  return `/customers/users`
}

export const createCustomerUser = async (createUserRequest: CreateUserRequest, options?: RequestInit): Promise<UserResponse> => {
  
  const res = await fetch(getCreateCustomerUserUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: UserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to get user by id
 * @summary Request to get user by id
 */
export const getGetCustomerUserUrl = (id: number,
    params?: GetCustomerUserParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/customers/users/${id}?${stringifiedParams}` : `/customers/users/${id}`
}

export const getCustomerUser = async (id: number,
    params?: GetCustomerUserParams, options?: RequestInit): Promise<UserResponse> => {
  
  const res = await fetch(getGetCustomerUserUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: UserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to update part of user's fields
 * @summary Request to update part of user's fields
 */
export const getPatchCustomerUserUrl = (id: number,) => {


  

  return `/customers/users/${id}`
}

export const patchCustomerUser = async (id: number,
    patchUserRequest: PatchUserRequest, options?: RequestInit): Promise<UserResponse> => {
  
  const res = await fetch(getPatchCustomerUserUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: UserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Request to delete a user
 * @summary Request to delete a user
 */
export const getDeleteCustomerUserUrl = (id: number,) => {


  

  return `/customers/users/${id}`
}

export const deleteCustomerUser = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteCustomerUserUrl(id),
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
 * Update token for password setting for customer user
 * @summary Update token for password setting for customer user
 */
export const getCustomerUserRefreshPasswordTokenUrl = (id: number,) => {


  

  return `/customers/users/${id}:refresh-password-token`
}

export const customerUserRefreshPasswordToken = async (id: number, options?: RequestInit): Promise<SuccessEmptyResponseResponse> => {
  
  const res = await fetch(getCustomerUserRefreshPasswordTokenUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SuccessEmptyResponseResponse = body ? JSON.parse(body) : {}

  return data
}


