/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchPropertiesRequest1,
  SearchPropertiesResponse1
} from '.././models';


/**
 * Search for objects of Properties
 * @summary Search for objects of Properties
 */
export const getSearchCatalogCachePropertiesUrl = () => {


  

  return `/catalog-cache/properties:search`
}

export const searchCatalogCacheProperties = async (searchPropertiesRequest1: SearchPropertiesRequest1, options?: RequestInit): Promise<SearchPropertiesResponse1> => {
  
  const res = await fetch(getSearchCatalogCachePropertiesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchPropertiesRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchPropertiesResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCachePropertiesMetaUrl = () => {


  

  return `/catalog-cache/properties:meta`
}

export const getCatalogCachePropertiesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCachePropertiesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


