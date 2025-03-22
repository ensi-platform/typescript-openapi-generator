/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  GetStockParams,
  PatchStockRequest,
  SearchStocksRequest,
  SearchStocksResponse,
  StockResponse
} from '.././models';


/**
 * Get the object of Stock by ID
 * @summary Get the object of Stock by ID
 */
export const getGetStockUrl = (id: number,
    params?: GetStockParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/stocks/${id}?${stringifiedParams}` : `/catalog/stocks/${id}`
}

export const getStock = async (id: number,
    params?: GetStockParams, options?: RequestInit): Promise<StockResponse> => {
  
  const res = await fetch(getGetStockUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StockResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Stock
 * @summary Patching an object of Stock
 */
export const getPatchStockUrl = (id: number,) => {


  

  return `/catalog/stocks/${id}`
}

export const patchStock = async (id: number,
    patchStockRequest: PatchStockRequest, options?: RequestInit): Promise<StockResponse> => {
  
  const res = await fetch(getPatchStockUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchStockRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: StockResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Stock
 * @summary Search for objects of Stock
 */
export const getSearchStocksUrl = () => {


  

  return `/catalog/stocks:search`
}

export const searchStocks = async (searchStocksRequest: SearchStocksRequest, options?: RequestInit): Promise<SearchStocksResponse> => {
  
  const res = await fetch(getSearchStocksUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchStocksRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchStocksResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetStocksMetaUrl = () => {


  

  return `/catalog/stocks:meta`
}

export const getStocksMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetStocksMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


