/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  DeleteDiscountProductsRequest,
  DiscountForCreate,
  DiscountForPatch,
  DiscountResponse,
  DiscountValueTypesResponse,
  EmptyDataResponse,
  GetDiscountParams,
  GetDiscountStatusesResponse,
  GetDiscountTypesResponse,
  GetResourceMetaResponseResponse,
  MassDiscountsStatusUpdateRequest,
  PatchDiscountProductsRequest,
  SearchDiscountsRequest1,
  SearchDiscountsResponse1
} from '.././models';


/**
 * Создание объекта типа Discount
 * @summary Создание объекта типа Discount
 */
export const getCreateDiscountUrl = () => {


  

  return `/marketing/discounts`
}

export const createDiscount = async (discountForCreate: DiscountForCreate, options?: RequestInit): Promise<DiscountResponse> => {
  
  const res = await fetch(getCreateDiscountUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      discountForCreate,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DiscountResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа Discount
 * @summary Получение объекта типа Discount
 */
export const getGetDiscountUrl = (id: number,
    params?: GetDiscountParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/marketing/discounts/${id}?${stringifiedParams}` : `/marketing/discounts/${id}`
}

export const getDiscount = async (id: number,
    params?: GetDiscountParams, options?: RequestInit): Promise<DiscountResponse> => {
  
  const res = await fetch(getGetDiscountUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DiscountResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа Discount
 * @summary Обновления части полей объекта типа Discount
 */
export const getPatchDiscountUrl = (id: number,) => {


  

  return `/marketing/discounts/${id}`
}

export const patchDiscount = async (id: number,
    discountForPatch: DiscountForPatch, options?: RequestInit): Promise<DiscountResponse> => {
  
  const res = await fetch(getPatchDiscountUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      discountForPatch,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DiscountResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа Discount
 * @summary Удаление объекта типа Discount
 */
export const getDeleteDiscountUrl = (id: number,) => {


  

  return `/marketing/discounts/${id}`
}

export const deleteDiscount = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteDiscountUrl(id),
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
 * Поиск объектов типа Discount
 * @summary Поиск объектов типа Discount
 */
export const getSearchDiscountsUrl = () => {


  

  return `/marketing/discounts:search`
}

export const searchDiscounts = async (searchDiscountsRequest1: SearchDiscountsRequest1, options?: RequestInit): Promise<SearchDiscountsResponse1> => {
  
  const res = await fetch(getSearchDiscountsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDiscountsRequest1,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDiscountsResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetDiscountsMetaUrl = () => {


  

  return `/marketing/discounts:meta`
}

export const getDiscountsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetDiscountsMetaUrl(),
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
 * Массовое обновление статусов для объектов типа Discount
 * @summary Массовое обновление статусов для объектов типа Discount
 */
export const getMassDiscountsStatusUpdateUrl = () => {


  

  return `/marketing/discounts:mass-status-update`
}

export const massDiscountsStatusUpdate = async (massDiscountsStatusUpdateRequest: MassDiscountsStatusUpdateRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getMassDiscountsStatusUpdateUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massDiscountsStatusUpdateRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление только заданных продуктов в скидке
 * @summary Обновление только заданных продуктов в скидке
 */
export const getPatchDiscountProductsUrl = (id: number,) => {


  

  return `/marketing/discounts/${id}/products`
}

export const patchDiscountProducts = async (id: number,
    patchDiscountProductsRequest: PatchDiscountProductsRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getPatchDiscountProductsUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDiscountProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление заданных продуктов в скидке
 * @summary Удаление заданных продуктов в скидке
 */
export const getDeleteDiscountProductsUrl = (id: number,) => {


  

  return `/marketing/discounts/${id}/products`
}

export const deleteDiscountProducts = async (id: number,
    deleteDiscountProductsRequest: DeleteDiscountProductsRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteDiscountProductsUrl(id),
  {      
    ...options,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteDiscountProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа DiscountStatus
 * @summary Получение объектов типа DiscountStatus
 */
export const getGetDiscountStatusesUrl = () => {


  

  return `/marketing/discount-statuses`
}

export const getDiscountStatuses = async ( options?: RequestInit): Promise<GetDiscountStatusesResponse> => {
  
  const res = await fetch(getGetDiscountStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetDiscountStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа DiscountType
 * @summary Получение объектов типа DiscountType
 */
export const getGetDiscountTypesUrl = () => {


  

  return `/marketing/discount-types`
}

export const getDiscountTypes = async ( options?: RequestInit): Promise<GetDiscountTypesResponse> => {
  
  const res = await fetch(getGetDiscountTypesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetDiscountTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа DiscountValueType
 * @summary Получение объектов типа DiscountValueType
 */
export const getGetDiscountValueTypesUrl = () => {


  

  return `/marketing/discount-value-types`
}

export const getDiscountValueTypes = async ( options?: RequestInit): Promise<DiscountValueTypesResponse> => {
  
  const res = await fetch(getGetDiscountValueTypesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DiscountValueTypesResponse = body ? JSON.parse(body) : {}

  return data
}


