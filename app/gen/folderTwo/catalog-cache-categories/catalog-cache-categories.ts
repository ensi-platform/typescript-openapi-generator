/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchActualCategoryPropertiesRequest1,
  SearchActualCategoryPropertiesResponse1,
  SearchCategoriesRequest1,
  SearchCategoriesResponse1
} from '.././models';


/**
 * Search for objects of CategoryProperties
 * @summary Search for objects of CategoryProperties
 */
export const getSearchCatalogCacheCategoryPropertiesUrl = () => {


  

  return `/catalog-cache/category-properties:search`
}

export const searchCatalogCacheCategoryProperties = async (searchActualCategoryPropertiesRequest1: SearchActualCategoryPropertiesRequest1, options?: RequestInit): Promise<SearchActualCategoryPropertiesResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheCategoryPropertiesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchActualCategoryPropertiesRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchActualCategoryPropertiesResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheCategoryPropertiesMetaUrl = () => {


  

  return `/catalog-cache/category-properties:meta`
}

export const getCatalogCacheCategoryPropertiesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheCategoryPropertiesMetaUrl(),
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
 * Search for objects of Categories
 * @summary Search for objects of Categories
 */
export const getSearchCatalogCacheCategoriesUrl = () => {


  

  return `/catalog-cache/categories:search`
}

export const searchCatalogCacheCategories = async (searchCategoriesRequest1: SearchCategoriesRequest1, options?: RequestInit): Promise<SearchCategoriesResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheCategoriesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCategoriesRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCategoriesResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheCategoriesMetaUrl = () => {


  

  return `/catalog-cache/categories:meta`
}

export const getCatalogCacheCategoriesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheCategoriesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


