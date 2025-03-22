/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchFailedJobsRequest1,
  SearchFailedJobsResponse1
} from '.././models';


/**
 * Search for objects of FailedJob
 * @summary Search for objects of FailedJob
 */
export const getSearchAnalyticsFailedJobsUrl = () => {


  

  return `/catalog/offers/failed-jobs:search`
}

export const searchAnalyticsFailedJobs = async (searchFailedJobsRequest1: SearchFailedJobsRequest1, options?: RequestInit): Promise<SearchFailedJobsResponse1> => {
  
  const res = await fetch(getSearchAnalyticsFailedJobsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchFailedJobsRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchFailedJobsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetAnalyticsFailedJobsMetaUrl = () => {


  

  return `/catalog/offers/failed-jobs:meta`
}

export const getAnalyticsFailedJobsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetAnalyticsFailedJobsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


