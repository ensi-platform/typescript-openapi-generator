/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  AddRolesToSellerUserRequest,
  CreateSellerUserRequest,
  DeleteRoleFromSellerUserRequest,
  EmptyDataResponse,
  GetResourceMetaResponseResponse,
  GetSellerUserParams,
  PatchSellerUserRequest,
  SearchSellerUserRolesRequest,
  SearchSellerUserRolesResponse,
  SearchSellerUsersRequest,
  SearchSellerUsersResponse,
  SellerUserResponse
} from '.././models';


/**
 * Получение объектов типа SellerUser
 * @summary Получение объектов типа SellerUser
 */
export const getSearchSellerUsersUrl = () => {


  

  return `/units/seller-users:search`
}

export const searchSellerUsers = async (searchSellerUsersRequest: SearchSellerUsersRequest, options?: RequestInit): Promise<SearchSellerUsersResponse> => {
  
  const res = await fetch(getSearchSellerUsersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchSellerUsersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchSellerUsersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение списка доступных полей
 * @summary Получение списка доступных полей
 */
export const getGetSellerUsersMetaUrl = () => {


  

  return `/units/seller-users:meta`
}

export const getSellerUsersMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetSellerUsersMetaUrl(),
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
 * Создание пользователя продавца
 * @summary Создание пользователя продавца
 */
export const getCreateSellerUserUrl = () => {


  

  return `/units/seller-users`
}

export const createSellerUser = async (createSellerUserRequest: CreateSellerUserRequest, options?: RequestInit): Promise<SellerUserResponse> => {
  
  const res = await fetch(getCreateSellerUserUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createSellerUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SellerUserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа SellerUser
 * @summary Получение объекта типа SellerUser
 */
export const getGetSellerUserUrl = (id: number,
    params?: GetSellerUserParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/units/seller-users/${id}?${stringifiedParams}` : `/units/seller-users/${id}`
}

export const getSellerUser = async (id: number,
    params?: GetSellerUserParams, options?: RequestInit): Promise<SellerUserResponse> => {
  
  const res = await fetch(getGetSellerUserUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SellerUserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа SellerUser
 * @summary Частичное изменение объекта типа SellerUser
 */
export const getPatchSellerUserUrl = (id: number,) => {


  

  return `/units/seller-users/${id}`
}

export const patchSellerUser = async (id: number,
    patchSellerUserRequest: PatchSellerUserRequest, options?: RequestInit): Promise<SellerUserResponse> => {
  
  const res = await fetch(getPatchSellerUserUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchSellerUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SellerUserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Добавление ролей объекту типа SellerUser
 * @summary Добавление ролей объекту типа SellerUser
 */
export const getAddRolesToSellerUserUrl = (id: number,) => {


  

  return `/units/seller-users/${id}:add-roles`
}

export const addRolesToSellerUser = async (id: number,
    addRolesToSellerUserRequest: AddRolesToSellerUserRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getAddRolesToSellerUserUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      addRolesToSellerUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление роли у объекта типа SellerUser
 * @summary Удаление роли у объекта типа SellerUser
 */
export const getDeleteRoleFromSellerUserUrl = (id: number,) => {


  

  return `/units/seller-users/${id}:delete-role`
}

export const deleteRoleFromSellerUser = async (id: number,
    deleteRoleFromSellerUserRequest: DeleteRoleFromSellerUserRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteRoleFromSellerUserUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteRoleFromSellerUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа SellerUserRole
 * @summary Получение объектов типа SellerUserRole
 */
export const getSearchRoleUrl = () => {


  

  return `/units/seller-user-roles:search`
}

export const searchRole = async (searchSellerUserRolesRequest: SearchSellerUserRolesRequest, options?: RequestInit): Promise<SearchSellerUserRolesResponse> => {
  
  const res = await fetch(getSearchRoleUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchSellerUserRolesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchSellerUserRolesResponse = body ? JSON.parse(body) : {}

  return data
}


