/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  FeedPlatformsResponse,
  FeedSettingsForCreate,
  FeedSettingsForPatch,
  FeedSettingsResponse,
  FeedTypesResponse,
  GetResourceMetaResponseResponse,
  SearchFeedSettingsRequest,
  SearchFeedSettingsResponse
} from '.././models';


/**
 * Search for objects of CatalogFeedTypeEnum
 * @summary Search for objects of CatalogFeedTypeEnum
 */
export const getGetFeedTypesUrl = () => {


  

  return `/catalog/feed-types`
}

export const getFeedTypes = async ( options?: RequestInit): Promise<FeedTypesResponse> => {
  
  const res = await fetch(getGetFeedTypesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FeedTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of CatalogFeedPlatformEnum
 * @summary Search for objects of CatalogFeedPlatformEnum
 */
export const getGetFeedPlatformsUrl = () => {


  

  return `/catalog/feed-platforms`
}

export const getFeedPlatforms = async ( options?: RequestInit): Promise<FeedPlatformsResponse> => {
  
  const res = await fetch(getGetFeedPlatformsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FeedPlatformsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating an object of FeedSettings
 * @summary Creating an object of FeedSettings
 */
export const getCreateFeedSettingsUrl = () => {


  

  return `/catalog/feed-settings`
}

export const createFeedSettings = async (feedSettingsForCreate: FeedSettingsForCreate, options?: RequestInit): Promise<FeedSettingsResponse> => {
  
  const res = await fetch(getCreateFeedSettingsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      feedSettingsForCreate,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FeedSettingsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of FeedSettings by ID
 * @summary Get the object of FeedSettings by ID
 */
export const getGetFeedSettingsUrl = (id: number,) => {


  

  return `/catalog/feed-settings/${id}`
}

export const getFeedSettings = async (id: number, options?: RequestInit): Promise<FeedSettingsResponse> => {
  
  const res = await fetch(getGetFeedSettingsUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FeedSettingsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of FeedSettings
 * @summary Patching an object of FeedSettings
 */
export const getPatchFeedSettingsUrl = (id: number,) => {


  

  return `/catalog/feed-settings/${id}`
}

export const patchFeedSettings = async (id: number,
    feedSettingsForPatch: FeedSettingsForPatch, options?: RequestInit): Promise<FeedSettingsResponse> => {
  
  const res = await fetch(getPatchFeedSettingsUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      feedSettingsForPatch,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FeedSettingsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of FeedSettings
 * @summary Search for objects of FeedSettings
 */
export const getSearchFeedSettingsUrl = () => {


  

  return `/catalog/feed-settings:search`
}

export const searchFeedSettings = async (searchFeedSettingsRequest: SearchFeedSettingsRequest, options?: RequestInit): Promise<SearchFeedSettingsResponse> => {
  
  const res = await fetch(getSearchFeedSettingsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchFeedSettingsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchFeedSettingsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetFeedSettingsMetaUrl = () => {


  

  return `/catalog/feed-settings:meta`
}

export const getFeedSettingsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetFeedSettingsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


