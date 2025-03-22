/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchImagesRequest,
  SearchImagesResponse,
  SearchProductPropertyValuesRequest,
  SearchProductPropertyValuesResponse,
  SearchProductsRequest1,
  SearchProductsResponse1
} from '.././models';


/**
 * Search for objects of Products
 * @summary Search for objects of Products
 */
export const getSearchCatalogCacheProductsUrl = () => {


  

  return `/catalog-cache/products:search`
}

export const searchCatalogCacheProducts = async (searchProductsRequest1: SearchProductsRequest1, options?: RequestInit): Promise<SearchProductsResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductsRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheProductsMetaUrl = () => {


  

  return `/catalog-cache/products:meta`
}

export const getCatalogCacheProductsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheProductsMetaUrl(),
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
 * Search for objects of Images
 * @summary Search for objects of Images
 */
export const getSearchCatalogCacheImagesUrl = () => {


  

  return `/catalog-cache/images:search`
}

export const searchCatalogCacheImages = async (searchImagesRequest: SearchImagesRequest, options?: RequestInit): Promise<SearchImagesResponse> => {
  
  const res = await fetch(getSearchCatalogCacheImagesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchImagesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchImagesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheImagesMetaUrl = () => {


  

  return `/catalog-cache/images:meta`
}

export const getCatalogCacheImagesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheImagesMetaUrl(),
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
 * Search for objects of ProductPropertyValues
 * @summary Search for objects of ProductPropertyValues
 */
export const getSearchCatalogCacheProductPropertyValuesUrl = () => {


  

  return `/catalog-cache/product-property-values:search`
}

export const searchCatalogCacheProductPropertyValues = async (searchProductPropertyValuesRequest: SearchProductPropertyValuesRequest, options?: RequestInit): Promise<SearchProductPropertyValuesResponse> => {
  
  const res = await fetch(getSearchCatalogCacheProductPropertyValuesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductPropertyValuesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductPropertyValuesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheProductPropertyValuesMetaUrl = () => {


  

  return `/catalog-cache/product-property-values:meta`
}

export const getCatalogCacheProductPropertyValuesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheProductPropertyValuesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


