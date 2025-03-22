/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchSeoTemplateProductsRequest,
  SearchSeoTemplateProductsResponse,
  SeoTemplateProductResponse
} from '.././models';


/**
 * Get the object of SeoTemplateProduct by ID
 * @summary Get the object of SeoTemplateProduct by ID
 */
export const getGetSeoTemplateProductUrl = (id: number,) => {


  

  return `/cms/seo/template-products/${id}`
}

export const getSeoTemplateProduct = async (id: number, options?: RequestInit): Promise<SeoTemplateProductResponse> => {
  
  const res = await fetch(getGetSeoTemplateProductUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SeoTemplateProductResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of SeoTemplateProduct
 * @summary Search for objects of SeoTemplateProduct
 */
export const getSearchSeoTemplateProductsUrl = () => {


  

  return `/cms/seo/template-products:search`
}

export const searchSeoTemplateProducts = async (searchSeoTemplateProductsRequest: SearchSeoTemplateProductsRequest, options?: RequestInit): Promise<SearchSeoTemplateProductsResponse> => {
  
  const res = await fetch(getSearchSeoTemplateProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchSeoTemplateProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchSeoTemplateProductsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetSeoTemplateProductsMetaUrl = () => {


  

  return `/cms/seo/template-products:meta`
}

export const getSeoTemplateProductsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetSeoTemplateProductsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


