/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetPointParams,
  GetResourceMetaResponseResponse,
  PatchPointRequest,
  PointResponse,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchPointsRequest,
  SearchPointsResponse
} from '.././models';


/**
 * Получение объекта типа Point
 * @summary Получение объекта типа Point
 */
export const getGetPointUrl = (id: number,
    params?: GetPointParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/logistic/points/${id}?${stringifiedParams}` : `/logistic/points/${id}`
}

export const getPoint = async (id: number,
    params?: GetPointParams, options?: RequestInit): Promise<PointResponse> => {
  
  const res = await fetch(getGetPointUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PointResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа Point
 * @summary Обновления части полей объекта типа Point
 */
export const getPatchPointUrl = (id: number,) => {


  

  return `/logistic/points/${id}`
}

export const patchPoint = async (id: number,
    patchPointRequest: PatchPointRequest, options?: RequestInit): Promise<PointResponse> => {
  
  const res = await fetch(getPatchPointUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchPointRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PointResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск пунктов приема/выдачи товара
 * @summary Поиск пунктов приема/выдачи товара
 */
export const getSearchPointsUrl = () => {


  

  return `/logistic/points:search`
}

export const searchPoints = async (searchPointsRequest: SearchPointsRequest, options?: RequestInit): Promise<SearchPointsResponse> => {
  
  const res = await fetch(getSearchPointsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchPointsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchPointsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetPointMetaUrl = () => {


  

  return `/logistic/points:meta`
}

export const getPointMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetPointMetaUrl(),
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
 * Поиск пунктов приема/выдачи товара для справочника
 * @summary Поиск пунктов приема/выдачи товара для справочника
 */
export const getSearchPointEnumValuesUrl = () => {


  

  return `/logistic/point-enum-values:search`
}

export const searchPointEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchPointEnumValuesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchEnumValuesRequestBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchEnumValuesResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryService для справочника
 * @summary Поиск объектов типа DeliveryService для справочника
 */
export const getSearchDeliveryServiceEnumValuesUrl = () => {


  

  return `/logistic/delivery-service-enum-values:search`
}

export const searchDeliveryServiceEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchDeliveryServiceEnumValuesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchEnumValuesRequestBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchEnumValuesResponseResponse = body ? JSON.parse(body) : {}

  return data
}


