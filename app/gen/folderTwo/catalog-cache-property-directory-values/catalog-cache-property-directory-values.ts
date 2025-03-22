/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchPropertyDirectoryValuesRequest,
  SearchPropertyDirectoryValuesResponse
} from '.././models';


/**
 * Search for objects of PropertyDirectoryValues
 * @summary Search for objects of PropertyDirectoryValues
 */
export const getSearchCatalogCachePropertyDirectoryValuesUrl = () => {


  

  return `/catalog-cache/property-directory-values:search`
}

export const searchCatalogCachePropertyDirectoryValues = async (searchPropertyDirectoryValuesRequest: SearchPropertyDirectoryValuesRequest, options?: RequestInit): Promise<SearchPropertyDirectoryValuesResponse> => {
  
  const res = await fetch(getSearchCatalogCachePropertyDirectoryValuesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchPropertyDirectoryValuesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchPropertyDirectoryValuesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCachePropertyDirectoryValuesMetaUrl = () => {


  

  return `/catalog-cache/property-directory-values:meta`
}

export const getCatalogCachePropertyDirectoryValuesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCachePropertyDirectoryValuesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


