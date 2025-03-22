/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchProductGroupProductsRequest,
  SearchProductGroupProductsResponse,
  SearchProductGroupsRequest1,
  SearchProductGroupsResponse1
} from '.././models';


/**
 * Search for objects of ProductGroups
 * @summary Search for objects of ProductGroups
 */
export const getSearchCatalogCacheProductGroupsUrl = () => {


  

  return `/catalog-cache/product-groups:search`
}

export const searchCatalogCacheProductGroups = async (searchProductGroupsRequest1: SearchProductGroupsRequest1, options?: RequestInit): Promise<SearchProductGroupsResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheProductGroupsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductGroupsRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductGroupsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheProductGroupsMetaUrl = () => {


  

  return `/catalog-cache/product-groups:meta`
}

export const getCatalogCacheProductGroupsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheProductGroupsMetaUrl(),
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
 * Search for objects of ProductGroupProducts
 * @summary Search for objects of ProductGroupProducts
 */
export const getSearchCatalogCacheProductGroupProductsUrl = () => {


  

  return `/catalog-cache/product-group-products:search`
}

export const searchCatalogCacheProductGroupProducts = async (searchProductGroupProductsRequest: SearchProductGroupProductsRequest, options?: RequestInit): Promise<SearchProductGroupProductsResponse> => {
  
  const res = await fetch(getSearchCatalogCacheProductGroupProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductGroupProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductGroupProductsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheProductGroupProductsMetaUrl = () => {


  

  return `/catalog-cache/product-group-products:meta`
}

export const getCatalogCacheProductGroupProductsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheProductGroupProductsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


