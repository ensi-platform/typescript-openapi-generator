/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  AddRolesToAdminUserRequest,
  AdminUserResponse,
  AdminUserRoleResponse,
  CreateAdminUserRequest,
  CreateAdminUserRoleRequest,
  DeleteRoleFromAdminUserRequest,
  EmptyDataResponse,
  GetAdminUserParams,
  GetAdminUserRoleParams,
  GetResourceMetaResponseResponse,
  MassChangeActiveRequest,
  PatchAdminUserRequest,
  PatchAdminUserRoleRequest,
  RightsAccessResponse,
  SearchAdminUserRolesRequest,
  SearchAdminUserRolesResponse,
  SearchAdminUsersRequest,
  SearchAdminUsersResponse,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SetAdminUserPasswordBody,
  SuccessEmptyResponseResponse
} from '.././models';


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetAdminUsersMetaUrl = () => {


  

  return `/units/admin-users:meta`
}

export const getAdminUsersMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetAdminUsersMetaUrl(),
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
 * Получение объектов типа AdminUser
 * @summary Получение объектов типа AdminUser
 */
export const getSearchAdminUsersUrl = () => {


  

  return `/units/admin-users:search`
}

export const searchAdminUsers = async (searchAdminUsersRequest: SearchAdminUsersRequest, options?: RequestInit): Promise<SearchAdminUsersResponse> => {
  
  const res = await fetch(getSearchAdminUsersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchAdminUsersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchAdminUsersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск пользователей для справочника
 * @summary Поиск пользователей для справочника
 */
export const getSearchAdminUserEnumValuesUrl = () => {


  

  return `/units/admin-user-enum-values:search`
}

export const searchAdminUserEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchAdminUserEnumValuesUrl(),
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
 * Создание объекта типа AdminUser
 * @summary Создание объекта типа AdminUser
 */
export const getCreateAdminUserUrl = () => {


  

  return `/units/admin-users`
}

export const createAdminUser = async (createAdminUserRequest: CreateAdminUserRequest, options?: RequestInit): Promise<AdminUserResponse> => {
  
  const res = await fetch(getCreateAdminUserUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createAdminUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AdminUserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа AdminUser
 * @summary Получение объекта типа AdminUser
 */
export const getGetAdminUserUrl = (id: number,
    params?: GetAdminUserParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/units/admin-users/${id}?${stringifiedParams}` : `/units/admin-users/${id}`
}

export const getAdminUser = async (id: number,
    params?: GetAdminUserParams, options?: RequestInit): Promise<AdminUserResponse> => {
  
  const res = await fetch(getGetAdminUserUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AdminUserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа AdminUser
 * @summary Частичное изменение объекта типа AdminUser
 */
export const getPatchAdminUserUrl = (id: number,) => {


  

  return `/units/admin-users/${id}`
}

export const patchAdminUser = async (id: number,
    patchAdminUserRequest: PatchAdminUserRequest, options?: RequestInit): Promise<AdminUserResponse> => {
  
  const res = await fetch(getPatchAdminUserUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchAdminUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AdminUserResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Добавление ролей объекту типа AdminUser
 * @summary Добавление ролей объекту типа AdminUser
 */
export const getAddRolesToAdminUserUrl = (id: number,) => {


  

  return `/units/admin-users/${id}:add-roles`
}

export const addRolesToAdminUser = async (id: number,
    addRolesToAdminUserRequest: AddRolesToAdminUserRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getAddRolesToAdminUserUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      addRolesToAdminUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление роли у объекта типа AdminUser
 * @summary Удаление роли у объекта типа AdminUser
 */
export const getDeleteRoleFromAdminUserUrl = (id: number,) => {


  

  return `/units/admin-users/${id}:delete-role`
}

export const deleteRoleFromAdminUser = async (id: number,
    deleteRoleFromAdminUserRequest: DeleteRoleFromAdminUserRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteRoleFromAdminUserUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteRoleFromAdminUserRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновить токен для установки пароля
 * @summary Обновление токена для установки пароля
 */
export const getRefreshPasswordTokenUrl = (id: string,) => {


  

  return `/units/admin-users/${id}:refresh-password-token`
}

export const refreshPasswordToken = async (id: string, options?: RequestInit): Promise<SuccessEmptyResponseResponse> => {
  
  const res = await fetch(getRefreshPasswordTokenUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SuccessEmptyResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Массовая активация/деактивация пользователей
 * @summary Массовая активация/деактивация пользователей
 */
export const getMassChangeActiveUrl = () => {


  

  return `/units/admin-users/mass/change-active`
}

export const massChangeActive = async (massChangeActiveRequest: MassChangeActiveRequest, options?: RequestInit): Promise<SuccessEmptyResponseResponse> => {
  
  const res = await fetch(getMassChangeActiveUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massChangeActiveRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SuccessEmptyResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Установка пароля пользователем
 * @summary Установка пароля пользователем
 */
export const getSetAdminUserPasswordUrl = () => {


  

  return `/units/admin-users/set-password`
}

export const setAdminUserPassword = async (setAdminUserPasswordBody: SetAdminUserPasswordBody, options?: RequestInit): Promise<SuccessEmptyResponseResponse> => {
  
  const res = await fetch(getSetAdminUserPasswordUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      setAdminUserPasswordBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SuccessEmptyResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение справочника прав доступа
 * @summary Получение справочника прав доступа
 */
export const getGetAdminUserRightsAccessUrl = () => {


  

  return `/units/admin-users/right-access`
}

export const getAdminUserRightsAccess = async ( options?: RequestInit): Promise<RightsAccessResponse> => {
  
  const res = await fetch(getGetAdminUserRightsAccessUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RightsAccessResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание объекта типа AdminUserRole
 * @summary Создание объекта типа AdminUserRole
 */
export const getCreateAdminUserRoleUrl = () => {


  

  return `/units/admin-user-roles`
}

export const createAdminUserRole = async (createAdminUserRoleRequest: CreateAdminUserRoleRequest, options?: RequestInit): Promise<AdminUserRoleResponse> => {
  
  const res = await fetch(getCreateAdminUserRoleUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createAdminUserRoleRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AdminUserRoleResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа AdminUserRole
 * @summary Получение объекта типа AdminUserRole
 */
export const getGetAdminUserRoleUrl = (id: number,
    params?: GetAdminUserRoleParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/units/admin-user-roles/${id}?${stringifiedParams}` : `/units/admin-user-roles/${id}`
}

export const getAdminUserRole = async (id: number,
    params?: GetAdminUserRoleParams, options?: RequestInit): Promise<AdminUserRoleResponse> => {
  
  const res = await fetch(getGetAdminUserRoleUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AdminUserRoleResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Частичное изменение объекта типа AdminUser
 * @summary Частичное изменение объекта типа AdminUser
 */
export const getPatchAdminUserRoleUrl = (id: number,) => {


  

  return `/units/admin-user-roles/${id}`
}

export const patchAdminUserRole = async (id: number,
    patchAdminUserRoleRequest: PatchAdminUserRoleRequest, options?: RequestInit): Promise<AdminUserRoleResponse> => {
  
  const res = await fetch(getPatchAdminUserRoleUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchAdminUserRoleRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AdminUserRoleResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа AdminUserRole
 * @summary Удаление объекта типа AdminUserRole
 */
export const getDeleteAdminUserRoleUrl = (id: number,) => {


  

  return `/units/admin-user-roles/${id}`
}

export const deleteAdminUserRole = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteAdminUserRoleUrl(id),
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
 * Получение объектов типа AdminUserRole
 * @summary Получение объектов типа AdminUserRole
 */
export const getSearchAdminUserRolesUrl = () => {


  

  return `/units/admin-user-roles:search`
}

export const searchAdminUserRoles = async (searchAdminUserRolesRequest: SearchAdminUserRolesRequest, options?: RequestInit): Promise<SearchAdminUserRolesResponse> => {
  
  const res = await fetch(getSearchAdminUserRolesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchAdminUserRolesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchAdminUserRolesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetAdminUserRolesMetaUrl = () => {


  

  return `/units/admin-user-roles:meta`
}

export const getAdminUserRolesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetAdminUserRolesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


