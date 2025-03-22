/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  FeedResponse,
  GetResourceMetaResponseResponse,
  SearchFeedsRequest,
  SearchFeedsResponse
} from '.././models';


/**
 * Get the object of Feed by ID
 * @summary Get the object of Feed by ID
 */
export const getGetFeedUrl = (id: number,) => {


  

  return `/catalog/feeds/${id}`
}

export const getFeed = async (id: number, options?: RequestInit): Promise<FeedResponse> => {
  
  const res = await fetch(getGetFeedUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FeedResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Feed
 * @summary Search for objects of Feed
 */
export const getSearchFeedsUrl = () => {


  

  return `/catalog/feeds:search`
}

export const searchFeeds = async (searchFeedsRequest: SearchFeedsRequest, options?: RequestInit): Promise<SearchFeedsResponse> => {
  
  const res = await fetch(getSearchFeedsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchFeedsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchFeedsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetFeedsMetaUrl = () => {


  

  return `/catalog/feeds:meta`
}

export const getFeedsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetFeedsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


