/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  DeleteResponseResponse,
  GetResourceMetaResponseResponse,
  IndexerTimestampResponse,
  PatchIndexerTimestampRequest,
  SearchIndexerTimestampsRequest,
  SearchIndexerTimestampsResponse
} from '.././models';


/**
 * Search for objects of IndexerTimestamp
 * @summary Search for objects of IndexerTimestamp
 */
export const getSearchCatalogCacheIndexerTimestampUrl = () => {


  

  return `/catalog-cache/indexer-timestamps:search`
}

export const searchCatalogCacheIndexerTimestamp = async (searchIndexerTimestampsRequest: SearchIndexerTimestampsRequest, options?: RequestInit): Promise<SearchIndexerTimestampsResponse> => {
  
  const res = await fetch(getSearchCatalogCacheIndexerTimestampUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchIndexerTimestampsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchIndexerTimestampsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheIndexerTimestampsMetaUrl = () => {


  

  return `/catalog-cache/indexer-timestamps:meta`
}

export const getCatalogCacheIndexerTimestampsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheIndexerTimestampsMetaUrl(),
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
 * Patching an object of IndexerTimestamp
 * @summary Patching an object of IndexerTimestamp
 */
export const getPatchCatalogCacheIndexerTimestampUrl = (id: number,) => {


  

  return `/catalog-cache/indexer-timestamps/${id}`
}

export const patchCatalogCacheIndexerTimestamp = async (id: number,
    patchIndexerTimestampRequest: PatchIndexerTimestampRequest, options?: RequestInit): Promise<IndexerTimestampResponse> => {
  
  const res = await fetch(getPatchCatalogCacheIndexerTimestampUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchIndexerTimestampRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: IndexerTimestampResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of IndexerTimestamp
 * @summary Deleting an object of IndexerTimestamp
 */
export const getDeleteCatalogCacheIndexerTimestampUrl = (id: number,) => {


  

  return `/catalog-cache/indexer-timestamps/${id}`
}

export const deleteCatalogCacheIndexerTimestamp = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteCatalogCacheIndexerTimestampUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


