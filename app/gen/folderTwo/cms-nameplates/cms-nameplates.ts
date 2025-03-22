/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateNameplateRequest,
  EmptyDataResponse,
  GetResourceMetaResponseResponse,
  IdsObject,
  NameplateResponse,
  PatchNameplateRequest,
  SearchNameplatesRequest0,
  SearchNameplatesResponse0
} from '.././models';


/**
 * Creating an object of Nameplate
 * @summary Creating an object of Nameplate
 */
export const getCreateNameplateUrl = () => {


  

  return `/cms/nameplates`
}

export const createNameplate = async (createNameplateRequest: CreateNameplateRequest, options?: RequestInit): Promise<NameplateResponse> => {
  
  const res = await fetch(getCreateNameplateUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createNameplateRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: NameplateResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of Nameplate by ID
 * @summary Get the object of Nameplate by ID
 */
export const getGetNameplateUrl = (id: number,) => {


  

  return `/cms/nameplates/${id}`
}

export const getNameplate = async (id: number, options?: RequestInit): Promise<NameplateResponse> => {
  
  const res = await fetch(getGetNameplateUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: NameplateResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Nameplate
 * @summary Patching an object of Nameplate
 */
export const getPatchNameplateUrl = (id: number,) => {


  

  return `/cms/nameplates/${id}`
}

export const patchNameplate = async (id: number,
    patchNameplateRequest: PatchNameplateRequest, options?: RequestInit): Promise<NameplateResponse> => {
  
  const res = await fetch(getPatchNameplateUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchNameplateRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: NameplateResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Nameplate
 * @summary Deleting an object of Nameplate
 */
export const getDeleteNameplateUrl = (id: number,) => {


  

  return `/cms/nameplates/${id}`
}

export const deleteNameplate = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteNameplateUrl(id),
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
 * Linking objects of Product to object of Nameplate
 * @summary Linking objects of Product to object of Nameplate
 */
export const getAddNameplateProductsUrl = (id: number,) => {


  

  return `/cms/nameplates/${id}:add-products`
}

export const addNameplateProducts = async (id: number,
    idsObject: IdsObject, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getAddNameplateProductsUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      idsObject,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting links between objects of Product and object of Nameplate
 * @summary Deleting links between objects of Product and object of Nameplate
 */
export const getDeleteNameplateProductsUrl = (id: number,) => {


  

  return `/cms/nameplates/${id}:delete-products`
}

export const deleteNameplateProducts = async (id: number,
    idsObject: IdsObject, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteNameplateProductsUrl(id),
  {      
    ...options,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      idsObject,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Nameplate
 * @summary Search for objects of Nameplate
 */
export const getSearchNameplatesUrl = () => {


  

  return `/cms/nameplates:search`
}

export const searchNameplates = async (searchNameplatesRequest0: SearchNameplatesRequest0, options?: RequestInit): Promise<SearchNameplatesResponse0> => {
  
  const res = await fetch(getSearchNameplatesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchNameplatesRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchNameplatesResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetNameplatesMetaUrl = () => {


  

  return `/cms/nameplates:meta`
}

export const getNameplatesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetNameplatesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


