/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateThemeRequest,
  DeleteResponseResponse,
  PatchThemeRequest,
  SearchThemesRequest,
  SearchThemesResponse,
  ThemeResponse
} from '.././models';


/**
 * Поиск тем
 * @summary Поиск тем
 */
export const getSearchThemesUrl = () => {


  

  return `/communication/themes:search`
}

export const searchThemes = async (searchThemesRequest: SearchThemesRequest, options?: RequestInit): Promise<SearchThemesResponse> => {
  
  const res = await fetch(getSearchThemesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchThemesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchThemesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание темы
 * @summary Создание темы
 */
export const getCreateThemeUrl = () => {


  

  return `/communication/themes`
}

export const createTheme = async (createThemeRequest: CreateThemeRequest, options?: RequestInit): Promise<ThemeResponse> => {
  
  const res = await fetch(getCreateThemeUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createThemeRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ThemeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление данных темы
 * @summary Обновление данных темы
 */
export const getPatchThemeUrl = (id: number,) => {


  

  return `/communication/themes/${id}`
}

export const patchTheme = async (id: number,
    patchThemeRequest: PatchThemeRequest, options?: RequestInit): Promise<ThemeResponse> => {
  
  const res = await fetch(getPatchThemeUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchThemeRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ThemeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление темы
 * @summary Удаление темы
 */
export const getDeleteThemeUrl = (id: number,) => {


  

  return `/communication/themes/${id}`
}

export const deleteTheme = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteThemeUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


