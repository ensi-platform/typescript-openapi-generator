/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  NameplateProductResponse,
  SearchNameplateProductsRequest0,
  SearchNameplateProductsResponse0
} from '.././models';


/**
 * Get the object of ProductNameplateLink by ID
 * @summary Get the object of ProductNameplateLink by ID
 */
export const getGetNameplateProductUrl = (id: number,) => {


  

  return `/cms/nameplates/nameplate-products/${id}`
}

export const getNameplateProduct = async (id: number, options?: RequestInit): Promise<NameplateProductResponse> => {
  
  const res = await fetch(getGetNameplateProductUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: NameplateProductResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of ProductNameplateLink
 * @summary Search for objects of ProductNameplateLink
 */
export const getSearchNameplateProductsUrl = () => {


  

  return `/cms/nameplates/nameplate-products:search`
}

export const searchNameplateProducts = async (searchNameplateProductsRequest0: SearchNameplateProductsRequest0, options?: RequestInit): Promise<SearchNameplateProductsResponse0> => {
  
  const res = await fetch(getSearchNameplateProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchNameplateProductsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchNameplateProductsResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetNameplateProductsMetaUrl = () => {


  

  return `/cms/nameplates/nameplate-products:meta`
}

export const getNameplateProductsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetNameplateProductsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


