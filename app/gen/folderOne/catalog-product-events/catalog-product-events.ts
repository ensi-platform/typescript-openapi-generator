/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  ProductEventOperationsResponse,
  ProductEventsResponse,
  SearchProductEventsRequest,
  SearchProductEventsResponse
} from '.././models';


/**
 * Search for objects of CatalogProductEventEnum
 * @summary Search for objects of CatalogProductEventEnum
 */
export const getGetProductEventsUrl = () => {


  

  return `/catalog/product-events`
}

export const getProductEvents = async ( options?: RequestInit): Promise<ProductEventsResponse> => {
  
  const res = await fetch(getGetProductEventsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductEventsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of CatalogEventOperationEnum
 * @summary Search for objects of CatalogEventOperationEnum
 */
export const getGetProductEventOperationsUrl = () => {


  

  return `/catalog/product-event-operations`
}

export const getProductEventOperations = async ( options?: RequestInit): Promise<ProductEventOperationsResponse> => {
  
  const res = await fetch(getGetProductEventOperationsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductEventOperationsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of ProductEvent
 * @summary Search for objects of ProductEvent
 */
export const getSearchProductEventUrl = () => {


  

  return `/catalog/product-events:search`
}

export const searchProductEvent = async (searchProductEventsRequest: SearchProductEventsRequest, options?: RequestInit): Promise<SearchProductEventsResponse> => {
  
  const res = await fetch(getSearchProductEventUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductEventsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductEventsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetProductEventsMetaUrl = () => {


  

  return `/catalog/product-events:meta`
}

export const getProductEventsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetProductEventsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


