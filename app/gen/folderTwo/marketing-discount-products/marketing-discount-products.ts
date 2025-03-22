/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  DiscountProductResponse,
  GetResourceMetaResponseResponse,
  SearchDiscountProductsRequest,
  SearchDiscountProductsResponse
} from '.././models';


/**
 * Получение объекта типа DiscountProduct
 * @summary Получение объекта типа DiscountProduct
 */
export const getGetDiscountProductUrl = (id: number,) => {


  

  return `/marketing/discounts/discount-products/${id}`
}

export const getDiscountProduct = async (id: number, options?: RequestInit): Promise<DiscountProductResponse> => {
  
  const res = await fetch(getGetDiscountProductUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DiscountProductResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DiscountProduct
 * @summary Поиск объектов типа DiscountProduct
 */
export const getSearchDiscountProductsUrl = () => {


  

  return `/marketing/discounts/discount-products:search`
}

export const searchDiscountProducts = async (searchDiscountProductsRequest: SearchDiscountProductsRequest, options?: RequestInit): Promise<SearchDiscountProductsResponse> => {
  
  const res = await fetch(getSearchDiscountProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDiscountProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDiscountProductsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetDiscountProductsMetaUrl = () => {


  

  return `/marketing/discounts/discount-products:meta`
}

export const getDiscountProductsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetDiscountProductsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


