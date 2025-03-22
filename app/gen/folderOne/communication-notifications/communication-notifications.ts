/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateNotificationSettingRequest,
  EmptyDataResponse,
  GetNotificationSettingChannelsResponse,
  GetNotificationSettingEventsResponse,
  GetResourceMetaResponseResponse,
  NotificationSettingResponse,
  PatchNotificationSettingRequest,
  SearchNotificationSettingsRequest,
  SearchNotificationSettingsResponse,
  SearchNotificationsRequest,
  SearchNotificationsResponse,
  VariablesResponse
} from '.././models';


/**
 * Search for objects of Notification
 * @summary Search for objects of Notification
 */
export const getSearchNotificationsUrl = () => {


  

  return `/communication/notifications:search`
}

export const searchNotifications = async (searchNotificationsRequest: SearchNotificationsRequest, options?: RequestInit): Promise<SearchNotificationsResponse> => {
  
  const res = await fetch(getSearchNotificationsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchNotificationsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchNotificationsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetNotificationsMetaUrl = () => {


  

  return `/communication/notifications:meta`
}

export const getNotificationsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetNotificationsMetaUrl(),
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
 * Создание объекта типа NotificationSetting
 * @summary Создание объекта типа NotificationSetting
 */
export const getCreateNotificationSettingUrl = () => {


  

  return `/communication/notification-settings`
}

export const createNotificationSetting = async (createNotificationSettingRequest: CreateNotificationSettingRequest, options?: RequestInit): Promise<NotificationSettingResponse> => {
  
  const res = await fetch(getCreateNotificationSettingUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createNotificationSettingRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: NotificationSettingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа NotificationSetting
 * @summary Получение объекта типа NotificationSetting
 */
export const getGetNotificationSettingUrl = (id: number,) => {


  

  return `/communication/notification-settings/${id}`
}

export const getNotificationSetting = async (id: number, options?: RequestInit): Promise<NotificationSettingResponse> => {
  
  const res = await fetch(getGetNotificationSettingUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: NotificationSettingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Изменение объекта типа типа NotificationSetting
 * @summary Изменение объекта типа типа NotificationSetting
 */
export const getPatchNotificationSettingUrl = (id: number,) => {


  

  return `/communication/notification-settings/${id}`
}

export const patchNotificationSetting = async (id: number,
    patchNotificationSettingRequest: PatchNotificationSettingRequest, options?: RequestInit): Promise<NotificationSettingResponse> => {
  
  const res = await fetch(getPatchNotificationSettingUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchNotificationSettingRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: NotificationSettingResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа NotificationSetting
 * @summary Удаление объекта типа NotificationSetting
 */
export const getDeleteNotificationSettingUrl = (id: number,) => {


  

  return `/communication/notification-settings/${id}`
}

export const deleteNotificationSetting = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteNotificationSettingUrl(id),
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
 * Поиск объектов типа NotificationSetting
 * @summary Поиск объектов типа NotificationSetting
 */
export const getSearchNotificationSettingsUrl = () => {


  

  return `/communication/notification-settings:search`
}

export const searchNotificationSettings = async (searchNotificationSettingsRequest: SearchNotificationSettingsRequest, options?: RequestInit): Promise<SearchNotificationSettingsResponse> => {
  
  const res = await fetch(getSearchNotificationSettingsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchNotificationSettingsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchNotificationSettingsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetNotificationSettingsMetaUrl = () => {


  

  return `/communication/notification-settings:meta`
}

export const getNotificationSettingsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetNotificationSettingsMetaUrl(),
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
 * Получение объектов типа NotificationChannel
 * @summary Получение объектов типа NotificationChannel
 */
export const getGetNotificationSettingChannelsUrl = () => {


  

  return `/communication/notification-setting-channels`
}

export const getNotificationSettingChannels = async ( options?: RequestInit): Promise<GetNotificationSettingChannelsResponse> => {
  
  const res = await fetch(getGetNotificationSettingChannelsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetNotificationSettingChannelsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа NotificationEvent
 * @summary Получение объектов типа NotificationEvent
 */
export const getGetNotificationSettingEventsUrl = () => {


  

  return `/communication/notification-setting-events`
}

export const getNotificationSettingEvents = async ( options?: RequestInit): Promise<GetNotificationSettingEventsResponse> => {
  
  const res = await fetch(getGetNotificationSettingEventsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetNotificationSettingEventsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение справочника доступных переменных по типу события
 * @summary Получение справочника доступных переменных по типу события
 */
export const getGetNotificationSettingVariablesUrl = () => {


  

  return `/communication/notification-setting-variables`
}

export const getNotificationSettingVariables = async ( options?: RequestInit): Promise<VariablesResponse> => {
  
  const res = await fetch(getGetNotificationSettingVariablesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: VariablesResponse = body ? JSON.parse(body) : {}

  return data
}


