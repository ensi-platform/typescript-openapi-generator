/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  EmptyDataResponse,
  GetPromoCodeStatusesResponse,
  GetResourceMetaResponseResponse,
  PromoCodeForCreate,
  PromoCodeForPatch,
  PromoCodeResponse,
  SearchPromoCodesRequest,
  SearchPromoCodesResponse
} from '.././models';


/**
 * Создание объекта типа PromoCode
 * @summary Создание объекта типа PromoCode
 */
export const getCreatePromoCodeUrl = () => {


  

  return `/marketing/promo-codes`
}

export const createPromoCode = async (promoCodeForCreate: PromoCodeForCreate, options?: RequestInit): Promise<PromoCodeResponse> => {
  
  const res = await fetch(getCreatePromoCodeUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      promoCodeForCreate,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PromoCodeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа PromoCode
 * @summary Получение объекта типа PromoCode
 */
export const getGetPromoCodeUrl = (id: number,) => {


  

  return `/marketing/promo-codes/${id}`
}

export const getPromoCode = async (id: number, options?: RequestInit): Promise<PromoCodeResponse> => {
  
  const res = await fetch(getGetPromoCodeUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PromoCodeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа PromoCode
 * @summary Обновления части полей объекта типа PromoCode
 */
export const getPatchPromoCodeUrl = (id: number,) => {


  

  return `/marketing/promo-codes/${id}`
}

export const patchPromoCode = async (id: number,
    promoCodeForPatch: PromoCodeForPatch, options?: RequestInit): Promise<PromoCodeResponse> => {
  
  const res = await fetch(getPatchPromoCodeUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      promoCodeForPatch,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PromoCodeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа PromoCode
 * @summary Удаление объекта типа PromoCode
 */
export const getDeletePromoCodeUrl = (id: number,) => {


  

  return `/marketing/promo-codes/${id}`
}

export const deletePromoCode = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeletePromoCodeUrl(id),
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
 * Поиск объектов типа PromoCode
 * @summary Поиск объектов типа PromoCode
 */
export const getSearchPromoCodesUrl = () => {


  

  return `/marketing/promo-codes:search`
}

export const searchPromoCodes = async (searchPromoCodesRequest: SearchPromoCodesRequest, options?: RequestInit): Promise<SearchPromoCodesResponse> => {
  
  const res = await fetch(getSearchPromoCodesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchPromoCodesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchPromoCodesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetPromoCodesMetaUrl = () => {


  

  return `/marketing/promo-codes:meta`
}

export const getPromoCodesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetPromoCodesMetaUrl(),
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
 * Получение объектов типа PromoCodeStatus
 * @summary Получение объектов типа PromoCodeStatus
 */
export const getGetPromoCodeStatusesUrl = () => {


  

  return `/marketing/promo-code-statuses`
}

export const getPromoCodeStatuses = async ( options?: RequestInit): Promise<GetPromoCodeStatusesResponse> => {
  
  const res = await fetch(getGetPromoCodeStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetPromoCodeStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


