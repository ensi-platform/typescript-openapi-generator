/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateRegionRequest,
  EmptyDataResponse,
  RegionFillableProperties,
  RegionResponse,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchRegionsRequest,
  SearchRegionsResponse
} from '.././models';


/**
 * Создание объекта типа Region
 * @summary Создание объекта типа Region
 */
export const getCreateRegionUrl = () => {


  

  return `/logistic/regions`
}

export const createRegion = async (createRegionRequest: CreateRegionRequest, options?: RequestInit): Promise<RegionResponse> => {
  
  const res = await fetch(getCreateRegionUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createRegionRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RegionResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа Region
 * @summary Получение объекта типа Region
 */
export const getGetRegionUrl = (id: number,) => {


  

  return `/logistic/regions/${id}`
}

export const getRegion = async (id: number, options?: RequestInit): Promise<RegionResponse> => {
  
  const res = await fetch(getGetRegionUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RegionResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа Region
 * @summary Обновления части полей объекта типа Region
 */
export const getPatchRegionUrl = (id: number,) => {


  

  return `/logistic/regions/${id}`
}

export const patchRegion = async (id: number,
    regionFillableProperties: RegionFillableProperties, options?: RequestInit): Promise<RegionResponse> => {
  
  const res = await fetch(getPatchRegionUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      regionFillableProperties,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RegionResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа Region
 * @summary Удаление объекта типа Region
 */
export const getDeleteRegionUrl = (id: number,) => {


  

  return `/logistic/regions/${id}`
}

export const deleteRegion = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteRegionUrl(id),
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
 * Поиск объектов типа Region
 * @summary Поиск объектов типа Region
 */
export const getSearchRegionsUrl = () => {


  

  return `/logistic/regions:search`
}

export const searchRegions = async (searchRegionsRequest: SearchRegionsRequest, options?: RequestInit): Promise<SearchRegionsResponse> => {
  
  const res = await fetch(getSearchRegionsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchRegionsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchRegionsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа Region
 * @summary Поиск объекта типа Region
 */
export const getSearchOneRegionUrl = () => {


  

  return `/logistic/regions:search-one`
}

export const searchOneRegion = async (searchRegionsRequest: SearchRegionsRequest, options?: RequestInit): Promise<RegionResponse> => {
  
  const res = await fetch(getSearchOneRegionUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchRegionsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RegionResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск регионов для справочника
 * @summary Поиск регионов для справочника
 */
export const getSearchRegionEnumValuesUrl = () => {


  

  return `/logistic/region-enum-values:search`
}

export const searchRegionEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchRegionEnumValuesUrl(),
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


