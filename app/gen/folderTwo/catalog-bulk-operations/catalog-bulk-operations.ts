/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchBulkOperationsRequest,
  SearchBulkOperationsResponse
} from '.././models';


/**
 * Search for objects of BulkOperation
 * @summary Search for objects of BulkOperation
 */
export const getSearchBulkOperationsUrl = () => {


  

  return `/catalog/bulk-operations:search`
}

export const searchBulkOperations = async (searchBulkOperationsRequest: SearchBulkOperationsRequest, options?: RequestInit): Promise<SearchBulkOperationsResponse> => {
  
  const res = await fetch(getSearchBulkOperationsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBulkOperationsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBulkOperationsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetBulkOperationsMetaUrl = () => {


  

  return `/catalog/bulk-operations:meta`
}

export const getBulkOperationsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetBulkOperationsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


