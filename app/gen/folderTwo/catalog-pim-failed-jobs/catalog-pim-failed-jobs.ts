/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchFailedJobsRequest0,
  SearchFailedJobsResponse0
} from '.././models';


/**
 * Search for objects of FailedJob
 * @summary Search for objects of FailedJob
 */
export const getSearchPimFailedJobsUrl = () => {


  

  return `/catalog/pim/failed-jobs:search`
}

export const searchPimFailedJobs = async (searchFailedJobsRequest0: SearchFailedJobsRequest0, options?: RequestInit): Promise<SearchFailedJobsResponse0> => {
  
  const res = await fetch(getSearchPimFailedJobsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchFailedJobsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchFailedJobsResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetPimFailedJobsMetaUrl = () => {


  

  return `/catalog/pim/failed-jobs:meta`
}

export const getPimFailedJobsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetPimFailedJobsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


