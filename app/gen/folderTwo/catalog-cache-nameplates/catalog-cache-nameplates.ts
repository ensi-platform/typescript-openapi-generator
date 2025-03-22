/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchNameplateProductsRequest1,
  SearchNameplateProductsResponse1,
  SearchNameplatesRequest1,
  SearchNameplatesResponse1
} from '.././models';


/**
 * Search for objects of Nameplates
 * @summary Search for objects of Nameplates
 */
export const getSearchCatalogCacheNameplatesUrl = () => {


  

  return `/catalog-cache/nameplates:search`
}

export const searchCatalogCacheNameplates = async (searchNameplatesRequest1: SearchNameplatesRequest1, options?: RequestInit): Promise<SearchNameplatesResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheNameplatesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchNameplatesRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchNameplatesResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheNameplatesMetaUrl = () => {


  

  return `/catalog-cache/nameplates:meta`
}

export const getCatalogCacheNameplatesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheNameplatesMetaUrl(),
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
 * Search for objects of NameplateProducts
 * @summary Search for objects of NameplateProducts
 */
export const getSearchCatalogCacheNameplateProductsUrl = () => {


  

  return `/catalog-cache/nameplate-products:search`
}

export const searchCatalogCacheNameplateProducts = async (searchNameplateProductsRequest1: SearchNameplateProductsRequest1, options?: RequestInit): Promise<SearchNameplateProductsResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheNameplateProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchNameplateProductsRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchNameplateProductsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheNameplateProductsMetaUrl = () => {


  

  return `/catalog-cache/nameplate-products:meta`
}

export const getCatalogCacheNameplateProductsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheNameplateProductsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


