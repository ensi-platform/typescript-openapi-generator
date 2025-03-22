/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  BindProductGroupProductsRequest,
  CreateProductGroupRequest,
  DeleteResponseResponse,
  GetCatalogProductGroupParams,
  GetResourceMetaResponseResponse,
  MassDeleteBodyBody,
  MassOperationResultResponseResponse,
  PatchProductGroupRequest,
  ProductGroupResponse,
  ProductGroupsBindResponse,
  SearchProductGroupsRequest0,
  SearchProductGroupsResponse0
} from '.././models';


/**
 * Creating an object of ProductGroup
 * @summary Creating an object of ProductGroup
 */
export const getCreateProductGroupUrl = () => {


  

  return `/catalog/product-groups`
}

export const createProductGroup = async (createProductGroupRequest: CreateProductGroupRequest, options?: RequestInit): Promise<ProductGroupResponse> => {
  
  const res = await fetch(getCreateProductGroupUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createProductGroupRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductGroupResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of ProductGroup by ID
 * @summary Get the object of ProductGroup by ID
 */
export const getGetCatalogProductGroupUrl = (id: number,
    params?: GetCatalogProductGroupParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/product-groups/${id}?${stringifiedParams}` : `/catalog/product-groups/${id}`
}

export const getCatalogProductGroup = async (id: number,
    params?: GetCatalogProductGroupParams, options?: RequestInit): Promise<ProductGroupResponse> => {
  
  const res = await fetch(getGetCatalogProductGroupUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductGroupResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of ProductGroup
 * @summary Patching an object of ProductGroup
 */
export const getPatchProductGroupUrl = (id: number,) => {


  

  return `/catalog/product-groups/${id}`
}

export const patchProductGroup = async (id: number,
    patchProductGroupRequest: PatchProductGroupRequest, options?: RequestInit): Promise<ProductGroupResponse> => {
  
  const res = await fetch(getPatchProductGroupUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductGroupRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductGroupResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of ProductGroup
 * @summary Deleting an object of ProductGroup
 */
export const getDeleteCatalogProductGroupUrl = (id: number,) => {


  

  return `/catalog/product-groups/${id}`
}

export const deleteCatalogProductGroup = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteCatalogProductGroupUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Changing the products linked to the ProductGroup
 * @summary Changing the products linked to the ProductGroup
 */
export const getBindProductGroupProductsUrl = (id: number,) => {


  

  return `/catalog/product-groups/${id}:bind-products`
}

export const bindProductGroupProducts = async (id: number,
    bindProductGroupProductsRequest: BindProductGroupProductsRequest, options?: RequestInit): Promise<ProductGroupsBindResponse> => {
  
  const res = await fetch(getBindProductGroupProductsUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      bindProductGroupProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductGroupsBindResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Mass deleting objects of ProductGroup
 * @summary Mass deleting objects of ProductGroup
 */
export const getDeleteCatalogProductGroupsUrl = () => {


  

  return `/catalog/product-groups:mass-delete`
}

export const deleteCatalogProductGroups = async (massDeleteBodyBody: MassDeleteBodyBody, options?: RequestInit): Promise<MassOperationResultResponseResponse> => {
  
  const res = await fetch(getDeleteCatalogProductGroupsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massDeleteBodyBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: MassOperationResultResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCatalogProductGroupsMetaUrl = () => {


  

  return `/catalog/product-groups:meta`
}

export const getCatalogProductGroupsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCatalogProductGroupsMetaUrl(),
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
 * Search for objects of ProductGroup
 * @summary Search for objects of ProductGroup
 */
export const getSearchCatalogProductGroupsUrl = () => {


  

  return `/catalog/product-groups:search`
}

export const searchCatalogProductGroups = async (searchProductGroupsRequest0: SearchProductGroupsRequest0, options?: RequestInit): Promise<SearchProductGroupsResponse0> => {
  
  const res = await fetch(getSearchCatalogProductGroupsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductGroupsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductGroupsResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for an object of ProductGroup
 * @summary Search for an object of ProductGroup
 */
export const getSearchOneCatalogProductGroupUrl = () => {


  

  return `/catalog/product-groups:search-one`
}

export const searchOneCatalogProductGroup = async (searchProductGroupsRequest0: SearchProductGroupsRequest0, options?: RequestInit): Promise<ProductGroupResponse> => {
  
  const res = await fetch(getSearchOneCatalogProductGroupUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductGroupsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductGroupResponse = body ? JSON.parse(body) : {}

  return data
}


