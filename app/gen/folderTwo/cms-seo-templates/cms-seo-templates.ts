/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  AddSeoTemplateProductsRequest,
  CreateSeoTemplateRequest,
  DeleteSeoTemplateProductsRequest,
  EmptyDataResponse,
  GetResourceMetaResponseResponse,
  GetSeoTemplateTypesResponse,
  GetVariablesResponse,
  PatchSeoTemplateRequest,
  SearchSeoTemplatesRequest,
  SearchSeoTemplatesResponse,
  SeoTemplateResponse
} from '.././models';


/**
 * Creating an object of SeoTemplate
 * @summary Creating an object of SeoTemplate
 */
export const getCreateSeoTemplateUrl = () => {


  

  return `/cms/seo/templates`
}

export const createSeoTemplate = async (createSeoTemplateRequest: CreateSeoTemplateRequest, options?: RequestInit): Promise<SeoTemplateResponse> => {
  
  const res = await fetch(getCreateSeoTemplateUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createSeoTemplateRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SeoTemplateResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Linking objects of Product to object of SeoTemplate
 * @summary Linking objects of Product to object of SeoTemplate
 */
export const getAddSeoTemplateProductsUrl = (id: number,) => {


  

  return `/cms/seo/templates/${id}:add-products`
}

export const addSeoTemplateProducts = async (id: number,
    addSeoTemplateProductsRequest: AddSeoTemplateProductsRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getAddSeoTemplateProductsUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      addSeoTemplateProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting links between objects of Product and object of SeoTemplate
 * @summary Deleting links between objects of Product and object of SeoTemplate
 */
export const getDeleteSeoTemplateProductsUrl = (id: number,) => {


  

  return `/cms/seo/templates/${id}:delete-products`
}

export const deleteSeoTemplateProducts = async (id: number,
    deleteSeoTemplateProductsRequest: DeleteSeoTemplateProductsRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteSeoTemplateProductsUrl(id),
  {      
    ...options,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteSeoTemplateProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of SeoTemplate by ID
 * @summary Get the object of SeoTemplate by ID
 */
export const getGetSeoTemplateUrl = (id: number,) => {


  

  return `/cms/seo/templates/${id}`
}

export const getSeoTemplate = async (id: number, options?: RequestInit): Promise<SeoTemplateResponse> => {
  
  const res = await fetch(getGetSeoTemplateUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SeoTemplateResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of SeoTemplate
 * @summary Patching an object of SeoTemplate
 */
export const getPatchSeoTemplateUrl = (id: number,) => {


  

  return `/cms/seo/templates/${id}`
}

export const patchSeoTemplate = async (id: number,
    patchSeoTemplateRequest: PatchSeoTemplateRequest, options?: RequestInit): Promise<SeoTemplateResponse> => {
  
  const res = await fetch(getPatchSeoTemplateUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchSeoTemplateRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SeoTemplateResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of SeoTemplate
 * @summary Deleting an object of SeoTemplate
 */
export const getDeleteSeoTemplateUrl = (id: number,) => {


  

  return `/cms/seo/templates/${id}`
}

export const deleteSeoTemplate = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteSeoTemplateUrl(id),
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
 * Search for objects of SeoTemplate
 * @summary Search for objects of SeoTemplate
 */
export const getSearchSeoTemplatesUrl = () => {


  

  return `/cms/seo/templates:search`
}

export const searchSeoTemplates = async (searchSeoTemplatesRequest: SearchSeoTemplatesRequest, options?: RequestInit): Promise<SearchSeoTemplatesResponse> => {
  
  const res = await fetch(getSearchSeoTemplatesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchSeoTemplatesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchSeoTemplatesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetSeoTemplatessMetaUrl = () => {


  

  return `/cms/seo/templates:meta`
}

export const getSeoTemplatessMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetSeoTemplatessMetaUrl(),
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
 * Getting objects of CmsSeoVariable
 * @summary Getting objects of CmsSeoVariable
 */
export const getGetTemplateTypesUrl = () => {


  

  return `/cms/seo/template-types`
}

export const getTemplateTypes = async ( options?: RequestInit): Promise<GetSeoTemplateTypesResponse> => {
  
  const res = await fetch(getGetTemplateTypesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetSeoTemplateTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting objects of CmsSeoTemplateType
 * @summary Getting objects of CmsSeoTemplateType
 */
export const getGetTemplateVariablesUrl = () => {


  

  return `/cms/seo/template-variables`
}

export const getTemplateVariables = async ( options?: RequestInit): Promise<GetVariablesResponse> => {
  
  const res = await fetch(getGetTemplateVariablesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetVariablesResponse = body ? JSON.parse(body) : {}

  return data
}


