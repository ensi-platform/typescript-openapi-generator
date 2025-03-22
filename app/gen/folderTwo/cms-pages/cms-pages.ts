/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreatePageRequest,
  EmptyDataResponse,
  GetResourceMetaResponseResponse,
  PageResponse,
  PatchPageRequest,
  SearchOnePageRequest,
  SearchPagesRequest,
  SearchPagesResponse
} from '.././models';


/**
 * Search for objects of Page
 * @summary Search for objects of Page
 */
export const getSearchPagesUrl = () => {


  

  return `/cms/pages:search`
}

export const searchPages = async (searchPagesRequest: SearchPagesRequest, options?: RequestInit): Promise<SearchPagesResponse> => {
  
  const res = await fetch(getSearchPagesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchPagesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchPagesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for an object ofPage
 * @summary Search for an object ofPage
 */
export const getSearchOnePageUrl = () => {


  

  return `/cms/pages:search-one`
}

export const searchOnePage = async (searchOnePageRequest: SearchOnePageRequest, options?: RequestInit): Promise<PageResponse> => {
  
  const res = await fetch(getSearchOnePageUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchOnePageRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PageResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating an object of Page
 * @summary Creating an object of Page
 */
export const getCreatePageUrl = () => {


  

  return `/cms/pages`
}

export const createPage = async (createPageRequest: CreatePageRequest, options?: RequestInit): Promise<PageResponse> => {
  
  const res = await fetch(getCreatePageUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createPageRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PageResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of Page by ID
 * @summary Get the object of Page by ID
 */
export const getGetPageUrl = (id: number,) => {


  

  return `/cms/pages/${id}`
}

export const getPage = async (id: number, options?: RequestInit): Promise<PageResponse> => {
  
  const res = await fetch(getGetPageUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PageResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Page
 * @summary Patching an object of Page
 */
export const getPatchPageUrl = (id: number,) => {


  

  return `/cms/pages/${id}`
}

export const patchPage = async (id: number,
    patchPageRequest: PatchPageRequest, options?: RequestInit): Promise<PageResponse> => {
  
  const res = await fetch(getPatchPageUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchPageRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PageResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Page
 * @summary Deleting an object of Page
 */
export const getDeletePageUrl = (id: number,) => {


  

  return `/cms/pages/${id}`
}

export const deletePage = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeletePageUrl(id),
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
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetPagesMetaUrl = () => {


  

  return `/cms/pages:meta`
}

export const getPagesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetPagesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


