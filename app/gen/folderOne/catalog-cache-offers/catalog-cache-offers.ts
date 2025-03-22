/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchOffersRequest1,
  SearchOffersResponse1
} from '.././models';


/**
 * Search for objects of Offers
 * @summary Search for objects of Offers
 */
export const getSearchCatalogCacheOffersUrl = () => {


  

  return `/catalog-cache/offers:search`
}

export const searchCatalogCacheOffers = async (searchOffersRequest1: SearchOffersRequest1, options?: RequestInit): Promise<SearchOffersResponse1> => {
  
  const res = await fetch(getSearchCatalogCacheOffersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchOffersRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchOffersResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheOffersMetaUrl = () => {


  

  return `/catalog-cache/offers:meta`
}

export const getCatalogCacheOffersMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheOffersMetaUrl(),
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
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheDiscountsMetaUrl = () => {


  

  return `/catalog-cache/discounts:meta`
}

export const getCatalogCacheDiscountsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheDiscountsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


