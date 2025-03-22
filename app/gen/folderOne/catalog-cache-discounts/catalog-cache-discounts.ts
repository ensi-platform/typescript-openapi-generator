/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  SearchDiscountsRequest0,
  SearchDiscountsResponse0
} from '.././models';


/**
 * Search for objects of Discounts
 * @summary Search for objects of Discounts
 */
export const getSearchCatalogCacheDiscountsUrl = () => {


  

  return `/catalog-cache/discounts:search`
}

export const searchCatalogCacheDiscounts = async (searchDiscountsRequest0: SearchDiscountsRequest0, options?: RequestInit): Promise<SearchDiscountsResponse0> => {
  
  const res = await fetch(getSearchCatalogCacheDiscountsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDiscountsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDiscountsResponse0 = body ? JSON.parse(body) : {}

  return data
}


