/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  PatchSeveralSettingsRequest0,
  PatchSeveralSettingsRequest1,
  SettingsResponse0,
  SettingsResponse1
} from '.././models';


/**
 * Получение всех параметров
 * @summary Получение всех параметров
 */
export const getSearchOmsSettingsUrl = () => {


  

  return `/orders/oms-settings`
}

export const searchOmsSettings = async ( options?: RequestInit): Promise<SettingsResponse0> => {
  
  const res = await fetch(getSearchOmsSettingsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SettingsResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление параметров
 * @summary Обновление параметров
 */
export const getPatchOmsSettingsUrl = () => {


  

  return `/orders/oms-settings`
}

export const patchOmsSettings = async (patchSeveralSettingsRequest0: PatchSeveralSettingsRequest0, options?: RequestInit): Promise<SettingsResponse0> => {
  
  const res = await fetch(getPatchOmsSettingsUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchSeveralSettingsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SettingsResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetOmsSettingsMetaUrl = () => {


  

  return `/orders/oms-settings:meta`
}

export const getOmsSettingsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetOmsSettingsMetaUrl(),
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
 * Получение всех параметров
 * @summary Получение всех параметров
 */
export const getSearchBasketsSettingsUrl = () => {


  

  return `/orders/baskets-settings`
}

export const searchBasketsSettings = async ( options?: RequestInit): Promise<SettingsResponse1> => {
  
  const res = await fetch(getSearchBasketsSettingsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SettingsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление параметров
 * @summary Обновление параметров
 */
export const getPatchBasketsSettingsUrl = () => {


  

  return `/orders/baskets-settings`
}

export const patchBasketsSettings = async (patchSeveralSettingsRequest1: PatchSeveralSettingsRequest1, options?: RequestInit): Promise<SettingsResponse1> => {
  
  const res = await fetch(getPatchBasketsSettingsUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchSeveralSettingsRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SettingsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetBasketsSettingsUrl = () => {


  

  return `/orders/baskets-settings:meta`
}

export const getBasketsSettings = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetBasketsSettingsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


