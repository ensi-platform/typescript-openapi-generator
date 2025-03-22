/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetOfferParams,
  GetResourceMetaResponseResponse,
  OfferResponse,
  PatchOfferRequest,
  SearchOffersRequest0,
  SearchOffersResponse0
} from '.././models';


/**
 * Get the object of Offer by ID
 * @summary Get the object of Offer by ID
 */
export const getGetOfferUrl = (id: number,
    params?: GetOfferParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/offers/${id}?${stringifiedParams}` : `/catalog/offers/${id}`
}

export const getOffer = async (id: number,
    params?: GetOfferParams, options?: RequestInit): Promise<OfferResponse> => {
  
  const res = await fetch(getGetOfferUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OfferResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Offer
 * @summary Patching an object of Offer
 */
export const getPatchOfferUrl = (id: number,) => {


  

  return `/catalog/offers/${id}`
}

export const patchOffer = async (id: number,
    patchOfferRequest: PatchOfferRequest, options?: RequestInit): Promise<OfferResponse> => {
  
  const res = await fetch(getPatchOfferUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchOfferRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OfferResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Offer
 * @summary Search for objects of Offer
 */
export const getSearchOffersUrl = () => {


  

  return `/catalog/offers:search`
}

export const searchOffers = async (searchOffersRequest0: SearchOffersRequest0, options?: RequestInit): Promise<SearchOffersResponse0> => {
  
  const res = await fetch(getSearchOffersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchOffersRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchOffersResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetOffersMetaUrl = () => {


  

  return `/catalog/offers:meta`
}

export const getOffersMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetOffersMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


