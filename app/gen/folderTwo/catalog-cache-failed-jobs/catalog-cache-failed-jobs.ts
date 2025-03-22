/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchFailedJobsRequest2,
  SearchFailedJobsResponse2
} from '.././models';


/**
 * Search for objects of FailedJob
 * @summary Search for objects of FailedJob
 */
export const getSearchCatalogCacheFailedJobsUrl = () => {


  

  return `/catalog-cache/failed-jobs:search`
}

export const searchCatalogCacheFailedJobs = async (searchFailedJobsRequest2: SearchFailedJobsRequest2, options?: RequestInit): Promise<SearchFailedJobsResponse2> => {
  
  const res = await fetch(getSearchCatalogCacheFailedJobsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchFailedJobsRequest2,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchFailedJobsResponse2 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogCacheFailedJobsMetaUrl = () => {


  

  return `/catalog-cache/failed-jobs:meta`
}

export const getCatalogCacheFailedJobsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogCacheFailedJobsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


