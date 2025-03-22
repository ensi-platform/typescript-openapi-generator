/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  AuthResponse,
  CurrentUserResponse,
  LoginRequest,
  RefreshRequest,
  SuccessEmptyResponseResponse
} from '.././models';


/**
 * Вход в систему по логину/паролю
 * @summary Вход в систему по логину/паролю
 */
export const getLoginUrl = () => {


  

  return `/auth/login`
}

export const login = async (loginRequest: LoginRequest, options?: RequestInit): Promise<AuthResponse> => {
  
  const res = await fetch(getLoginUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      loginRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AuthResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Выход из системы
 * @summary Выход из системы
 */
export const getLogoutUrl = () => {


  

  return `/auth/logout`
}

export const logout = async ( options?: RequestInit): Promise<SuccessEmptyResponseResponse> => {
  
  const res = await fetch(getLogoutUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SuccessEmptyResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Повторная авторизация в системе
 * @summary Повторная авторизация в системе с использованием refresh_token
 */
export const getRefreshUrl = () => {


  

  return `/auth/refresh`
}

export const refresh = async (refreshRequest: RefreshRequest, options?: RequestInit): Promise<AuthResponse> => {
  
  const res = await fetch(getRefreshUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      refreshRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: AuthResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получить текущего пользователя
 * @summary Получить текущего пользователя
 */
export const getGetCurrentUserUrl = () => {


  

  return `/auth/current-user`
}

export const getCurrentUser = async ( options?: RequestInit): Promise<CurrentUserResponse> => {
  
  const res = await fetch(getGetCurrentUserUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CurrentUserResponse = body ? JSON.parse(body) : {}

  return data
}


