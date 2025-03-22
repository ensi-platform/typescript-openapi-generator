/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchBasketItemsRequest,
  SearchBasketItemsResponse,
  SearchBasketsRequest,
  SearchBasketsResponse
} from '.././models';


/**
 * Search for objects of the type BasketItem
 * @summary Search for objects of the type BasketItem
 */
export const getSearchBasketItemsUrl = () => {


  

  return `/orders/basket-items:search`
}

export const searchBasketItems = async (searchBasketItemsRequest: SearchBasketItemsRequest, options?: RequestInit): Promise<SearchBasketItemsResponse> => {
  
  const res = await fetch(getSearchBasketItemsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBasketItemsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBasketItemsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetBasketItemMetaUrl = () => {


  

  return `/orders/basket-items:meta`
}

export const getBasketItemMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetBasketItemMetaUrl(),
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
 * Search for objects of the type Basket
 * @summary Search for objects of the type Basket
 */
export const getSearchBasketsUrl = () => {


  

  return `/orders/baskets:search`
}

export const searchBaskets = async (searchBasketsRequest: SearchBasketsRequest, options?: RequestInit): Promise<SearchBasketsResponse> => {
  
  const res = await fetch(getSearchBasketsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBasketsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBasketsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetBasketMetaUrl = () => {


  

  return `/orders/baskets:meta`
}

export const getBasketMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetBasketMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


