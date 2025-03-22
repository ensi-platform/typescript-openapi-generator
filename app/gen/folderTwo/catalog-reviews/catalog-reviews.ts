/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  DeleteResponseResponse,
  EmptyDataResponse,
  GetResourceMetaResponseResponse,
  GetReviewParams,
  MassDeleteBodyBody,
  PatchReviewRequest,
  ReviewResponse,
  ReviewStatusesResponse,
  SearchReviewsRequest,
  SearchReviewsResponse
} from '.././models';


/**
 * Get available review statuses corresponding to the ReviewStatusEnum
 * @summary Get available review statuses
 */
export const getGetReviewStatusesUrl = () => {


  

  return `/catalog/reviews/review-statuses`
}

export const getReviewStatuses = async ( options?: RequestInit): Promise<ReviewStatusesResponse> => {
  
  const res = await fetch(getGetReviewStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ReviewStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * ### Get the object of Review by ID

Available include values:
* _customers_ - Details of the user who created the review
* _products_ - Details of the product that was reviewed

 * @summary Get the object of Review by ID
 */
export const getGetReviewUrl = (id: number,
    params?: GetReviewParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/reviews/${id}?${stringifiedParams}` : `/catalog/reviews/${id}`
}

export const getReview = async (id: number,
    params?: GetReviewParams, options?: RequestInit): Promise<ReviewResponse> => {
  
  const res = await fetch(getGetReviewUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ReviewResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Review
 * @summary Patching an object of Review
 */
export const getPatchReviewUrl = (id: number,) => {


  

  return `/catalog/reviews/${id}`
}

export const patchReview = async (id: number,
    patchReviewRequest: PatchReviewRequest, options?: RequestInit): Promise<ReviewResponse> => {
  
  const res = await fetch(getPatchReviewUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchReviewRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ReviewResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Review
 * @summary Deleting an object of Review
 */
export const getDeleteReviewUrl = (id: number,) => {


  

  return `/catalog/reviews/${id}`
}

export const deleteReview = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteReviewUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Review
 * @summary Search for objects of Review
 */
export const getSearchReviewsUrl = () => {


  

  return `/catalog/reviews:search`
}

export const searchReviews = async (searchReviewsRequest: SearchReviewsRequest, options?: RequestInit): Promise<SearchReviewsResponse> => {
  
  const res = await fetch(getSearchReviewsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchReviewsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchReviewsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Mass deleting of object Review
 * @summary Mass deleting of object Review
 */
export const getMassDeleteReviewsUrl = () => {


  

  return `/catalog/reviews:mass-delete`
}

export const massDeleteReviews = async (massDeleteBodyBody: MassDeleteBodyBody, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getMassDeleteReviewsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massDeleteBodyBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetReviewsMetaUrl = () => {


  

  return `/catalog/reviews:meta`
}

export const getReviewsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetReviewsMetaUrl(),
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
export const getGetReviewCustomerMetaUrl = () => {


  

  return `/catalog/reviews/review-customer:meta`
}

export const getReviewCustomerMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetReviewCustomerMetaUrl(),
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
export const getGetReviewProductMetaUrl = () => {


  

  return `/catalog/reviews/review-product:meta`
}

export const getReviewProductMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetReviewProductMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


