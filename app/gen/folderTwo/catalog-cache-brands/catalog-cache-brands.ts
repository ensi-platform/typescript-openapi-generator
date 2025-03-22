/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchBrandsRequest1,
  SearchBrandsResponse1
} from '.././models';


/**
 * Search for objects of Brands
 * @summary Search for objects of Brands
 */
export const getSearchCatalogCacheBrandsUrl = () => {


  

  return `/catalog-cache/brands:search`
}

export const searchCatalogCacheBrands = async (searchBrandsRequest1: SearchBrandsRequest1, options?: RequestInit): Promise<SearchBrandsResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheBrandsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBrandsRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBrandsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheBrandsMetaUrl = () => {


  

  return `/catalog-cache/brands:meta`
}

export const getCatalogCacheBrandsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheBrandsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


