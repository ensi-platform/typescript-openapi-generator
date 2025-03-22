/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  BindCategoryPropertiesRequest,
  CategoriesTreeResponse,
  CategoryResponse,
  CreateCategoryRequest,
  DeleteResponseResponse,
  GetCategoryParams,
  GetResourceMetaResponseResponse,
  ReplaceCategoryRequest,
  SearchActualCategoryPropertiesRequest0,
  SearchActualCategoryPropertiesResponse0,
  SearchCategoriesRequest0,
  SearchCategoriesResponse0,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SuccessEmptyResponseResponse
} from '.././models';


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCategoriesMetaUrl = () => {


  

  return `/catalog/categories:meta`
}

export const getCategoriesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCategoriesMetaUrl(),
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
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetCategoryPropertiesMetaUrl = () => {


  

  return `/catalog/category-properties:meta`
}

export const getCategoryPropertiesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetCategoryPropertiesMetaUrl(),
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
 * ### Search for objects of Category

Available include values:
* _properties_ - Current attributes available for products in the category
* _hidden_properties_ - Attributes associated with a category but not used, e.g. due to inactivity

 * @summary Search for objects of Category
 */
export const getSearchCategoriesUrl = () => {


  

  return `/catalog/categories:search`
}

export const searchCategories = async (searchCategoriesRequest0: SearchCategoriesRequest0, options?: RequestInit): Promise<SearchCategoriesResponse0> => {
  
  const res = await fetch(getSearchCategoriesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCategoriesRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCategoriesResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Category for enum
 * @summary Search for objects of Category for enum
 */
export const getSearchCategoryEnumValuesUrl = () => {


  

  return `/catalog/category-enum-values:search`
}

export const searchCategoryEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchCategoryEnumValuesUrl(),
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
 * Creating an object of Category
 * @summary Creating an object of Category
 */
export const getCreateCategoryUrl = () => {


  

  return `/catalog/categories`
}

export const createCategory = async (createCategoryRequest: CreateCategoryRequest, options?: RequestInit): Promise<CategoryResponse> => {
  
  const res = await fetch(getCreateCategoryUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCategoryRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CategoryResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Changing attributes linked to a category
 * @summary Changing attributes linked to a category
 */
export const getBindCategoryPropertiesUrl = (id: number,) => {


  

  return `/catalog/categories/${id}:bind-properties`
}

export const bindCategoryProperties = async (id: number,
    bindCategoryPropertiesRequest: BindCategoryPropertiesRequest, options?: RequestInit): Promise<CategoryResponse> => {
  
  const res = await fetch(getBindCategoryPropertiesUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      bindCategoryPropertiesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CategoryResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * ### Get the object of Category by ID

Available include values:
* _properties_ - Current attributes available for products in the category
* _hidden_properties_ - Attributes associated with a category but not used, e.g. due to inactivity

 * @summary Get the object of Category by ID
 */
export const getGetCategoryUrl = (id: number,
    params?: GetCategoryParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/categories/${id}?${stringifiedParams}` : `/catalog/categories/${id}`
}

export const getCategory = async (id: number,
    params?: GetCategoryParams, options?: RequestInit): Promise<CategoryResponse> => {
  
  const res = await fetch(getGetCategoryUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CategoryResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing an object of Category
 * @summary Replacing an object of Category
 */
export const getReplaceCategoryUrl = (id: number,) => {


  

  return `/catalog/categories/${id}`
}

export const replaceCategory = async (id: number,
    replaceCategoryRequest: ReplaceCategoryRequest, options?: RequestInit): Promise<CategoryResponse> => {
  
  const res = await fetch(getReplaceCategoryUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceCategoryRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CategoryResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Category
 * @summary Deleting an object of Category
 */
export const getDeleteCategoryUrl = (id: number,) => {


  

  return `/catalog/categories/${id}`
}

export const deleteCategory = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteCategoryUrl(id),
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
 * Forming a complete category tree
 * @summary Forming a complete category tree
 */
export const getGetCategoriesTreeUrl = () => {


  

  return `/catalog/categories:tree`
}

export const getCategoriesTree = async ( options?: RequestInit): Promise<CategoriesTreeResponse> => {
  
  const res = await fetch(getGetCategoriesTreeUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CategoriesTreeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of ActualCategoryProperty
 * @summary Search for objects of ActualCategoryProperty
 */
export const getSearchActualCategoryPropertiesUrl = () => {


  

  return `/catalog/actual-category-properties:search`
}

export const searchActualCategoryProperties = async (searchActualCategoryPropertiesRequest0: SearchActualCategoryPropertiesRequest0, options?: RequestInit): Promise<SearchActualCategoryPropertiesResponse0> => {
  
  const res = await fetch(getSearchActualCategoryPropertiesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchActualCategoryPropertiesRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchActualCategoryPropertiesResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetActualCategoryPropertiesMetaUrl = () => {


  

  return `/catalog/actual-category-properties:meta`
}

export const getActualCategoryPropertiesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetActualCategoryPropertiesMetaUrl(),
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
 * Actualize all categories
 * @summary Actualize all categories
 */
export const getActualizeCategoriesUrl = () => {


  

  return `/catalog/categories:actualize`
}

export const actualizeCategories = async ( options?: RequestInit): Promise<SuccessEmptyResponseResponse> => {
  
  const res = await fetch(getActualizeCategoriesUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SuccessEmptyResponseResponse = body ? JSON.parse(body) : {}

  return data
}


