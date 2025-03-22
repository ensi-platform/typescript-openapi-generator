/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateFederalDistrictRequest,
  EmptyDataResponse,
  FederalDistrictResponse,
  GetFederalDistrictParams,
  PatchFederalDistrictRequest,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchFederalDistrictsRequest,
  SearchFederalDistrictsResponse
} from '.././models';


/**
 * Создание объекта типа FederalDistrict
 * @summary Создание объекта типа FederalDistrict
 */
export const getCreateFederalDistrictUrl = () => {


  

  return `/logistic/federal-districts`
}

export const createFederalDistrict = async (createFederalDistrictRequest: CreateFederalDistrictRequest, options?: RequestInit): Promise<FederalDistrictResponse> => {
  
  const res = await fetch(getCreateFederalDistrictUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createFederalDistrictRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FederalDistrictResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа FederalDistrict
 * @summary Получение объекта типа FederalDistrict
 */
export const getGetFederalDistrictUrl = (id: number,
    params?: GetFederalDistrictParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/logistic/federal-districts/${id}?${stringifiedParams}` : `/logistic/federal-districts/${id}`
}

export const getFederalDistrict = async (id: number,
    params?: GetFederalDistrictParams, options?: RequestInit): Promise<FederalDistrictResponse> => {
  
  const res = await fetch(getGetFederalDistrictUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FederalDistrictResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа FederalDistrict
 * @summary Обновления части полей объекта типа FederalDistrict
 */
export const getPatchFederalDistrictUrl = (id: number,) => {


  

  return `/logistic/federal-districts/${id}`
}

export const patchFederalDistrict = async (id: number,
    patchFederalDistrictRequest: PatchFederalDistrictRequest, options?: RequestInit): Promise<FederalDistrictResponse> => {
  
  const res = await fetch(getPatchFederalDistrictUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchFederalDistrictRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FederalDistrictResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа FederalDistrict
 * @summary Удаление объекта типа FederalDistrict
 */
export const getDeleteFederalDistrictUrl = (id: number,) => {


  

  return `/logistic/federal-districts/${id}`
}

export const deleteFederalDistrict = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteFederalDistrictUrl(id),
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
 * Поиск объектов типа FederalDistrict
 * @summary Поиск объектов типа FederalDistrict
 */
export const getSearchFederalDistrictsUrl = () => {


  

  return `/logistic/federal-districts:search`
}

export const searchFederalDistricts = async (searchFederalDistrictsRequest: SearchFederalDistrictsRequest, options?: RequestInit): Promise<SearchFederalDistrictsResponse> => {
  
  const res = await fetch(getSearchFederalDistrictsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchFederalDistrictsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchFederalDistrictsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа FederalDistrict
 * @summary Поиск объекта типа FederalDistrict
 */
export const getSearchOneFederalDistrictUrl = () => {


  

  return `/logistic/federal-districts:search-one`
}

export const searchOneFederalDistrict = async (searchFederalDistrictsRequest: SearchFederalDistrictsRequest, options?: RequestInit): Promise<FederalDistrictResponse> => {
  
  const res = await fetch(getSearchOneFederalDistrictUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchFederalDistrictsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: FederalDistrictResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск федерального округа для справочника
 * @summary Поиск федерального округа для справочника
 */
export const getSearchFederalDistrictEnumValuesUrl = () => {


  

  return `/logistic/federal-district-enum-values:search`
}

export const searchFederalDistrictEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchFederalDistrictEnumValuesUrl(),
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


