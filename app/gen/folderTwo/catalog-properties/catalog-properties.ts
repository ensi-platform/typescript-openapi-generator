/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateDirectoryValueRequest,
  CreatePropertyRequest,
  DeleteResponseResponse,
  DirectoryValueResponse,
  GetPropertyParams,
  GetResourceMetaResponseResponse,
  MassCreateDirectoryValueRequest,
  MassDirectoryValueResponse,
  MultipartFileUploadRequest,
  PatchPropertyRequest,
  PreloadFileResponseResponse,
  PropertiesTypesResponse,
  PropertyResponse,
  ReplaceDirectoryValueRequest,
  ReplacePropertyRequest,
  SearchDirectoryValuesRequest,
  SearchDirectoryValuesResponse,
  SearchPropertiesRequest0,
  SearchPropertiesResponse0
} from '.././models';


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetPropertiesMetaUrl = () => {


  

  return `/catalog/properties:meta`
}

export const getPropertiesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetPropertiesMetaUrl(),
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
 * ### Search for objects of Property

Available include values:
* _directory_

 * @summary Search for objects of Property
 */
export const getSearchPropertiesUrl = () => {


  

  return `/catalog/properties:search`
}

export const searchProperties = async (searchPropertiesRequest0: SearchPropertiesRequest0, options?: RequestInit): Promise<SearchPropertiesResponse0> => {
  
  const res = await fetch(getSearchPropertiesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchPropertiesRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchPropertiesResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating an object of Property
 * @summary Creating an object of Property
 */
export const getCreatePropertyUrl = () => {


  

  return `/catalog/properties`
}

export const createProperty = async (createPropertyRequest: CreatePropertyRequest, options?: RequestInit): Promise<PropertyResponse> => {
  
  const res = await fetch(getCreatePropertyUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createPropertyRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PropertyResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * ### Get the object of Property by ID

Available include values:
* _directory_

 * @summary Get the object of Property by ID
 */
export const getGetPropertyUrl = (id: number,
    params?: GetPropertyParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/properties/${id}?${stringifiedParams}` : `/catalog/properties/${id}`
}

export const getProperty = async (id: number,
    params?: GetPropertyParams, options?: RequestInit): Promise<PropertyResponse> => {
  
  const res = await fetch(getGetPropertyUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PropertyResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing an object of Property
 * @summary Replacing an object of Property
 */
export const getReplacePropertyUrl = (id: number,) => {


  

  return `/catalog/properties/${id}`
}

export const replaceProperty = async (id: number,
    replacePropertyRequest: ReplacePropertyRequest, options?: RequestInit): Promise<PropertyResponse> => {
  
  const res = await fetch(getReplacePropertyUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replacePropertyRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PropertyResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Property
 * @summary Patching an object of Property
 */
export const getPatchPropertyUrl = (id: number,) => {


  

  return `/catalog/properties/${id}`
}

export const patchProperty = async (id: number,
    patchPropertyRequest: PatchPropertyRequest, options?: RequestInit): Promise<PropertyResponse> => {
  
  const res = await fetch(getPatchPropertyUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchPropertyRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PropertyResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Property
 * @summary Deleting an object of Property
 */
export const getDeletePropertyUrl = (id: number,) => {


  

  return `/catalog/properties/${id}`
}

export const deleteProperty = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeletePropertyUrl(id),
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
 * Get available property types corresponding to the CatalogPropertyTypeEnum
 * @summary Get available property types
 */
export const getGetPropertiesTypesUrl = () => {


  

  return `/catalog/properties/properties-types`
}

export const getPropertiesTypes = async ( options?: RequestInit): Promise<PropertiesTypesResponse> => {
  
  const res = await fetch(getGetPropertiesTypesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PropertiesTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating an object of DirectoryValue
 * @summary Creating an object of DirectoryValue
 */
export const getCreateDirectoryValueUrl = (id: number,) => {


  

  return `/catalog/properties/${id}:add-directory`
}

export const createDirectoryValue = async (id: number,
    createDirectoryValueRequest: CreateDirectoryValueRequest, options?: RequestInit): Promise<DirectoryValueResponse> => {
  
  const res = await fetch(getCreateDirectoryValueUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createDirectoryValueRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DirectoryValueResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Mass creating of objects DirectoryValue
 * @summary Mass creating of objects DirectoryValue
 */
export const getMassCreateDirectoryValueUrl = (id: number,) => {


  

  return `/catalog/properties/${id}:mass-add-directory`
}

export const massCreateDirectoryValue = async (id: number,
    massCreateDirectoryValueRequest: MassCreateDirectoryValueRequest, options?: RequestInit): Promise<MassDirectoryValueResponse> => {
  
  const res = await fetch(getMassCreateDirectoryValueUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massCreateDirectoryValueRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: MassDirectoryValueResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of DirectoryValue
 * @summary Search for objects of DirectoryValue
 */
export const getSearchDirectoryValuesUrl = () => {


  

  return `/catalog/properties/directory:search`
}

export const searchDirectoryValues = async (searchDirectoryValuesRequest: SearchDirectoryValuesRequest, options?: RequestInit): Promise<SearchDirectoryValuesResponse> => {
  
  const res = await fetch(getSearchDirectoryValuesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDirectoryValuesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDirectoryValuesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Uploading image for DirectoryValue
 * @summary Uploading image for DirectoryValue
 */
export const getPreloadDirectoryValueImageUrl = () => {


  

  return `/catalog/properties/directory:preload-image`
}

export const preloadDirectoryValueImage = async (multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<PreloadFileResponseResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getPreloadDirectoryValueImageUrl(),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PreloadFileResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Uploading file for DirectoryValue
 * @summary Uploading file for DirectoryValue
 */
export const getPreloadDirectoryValueFileUrl = () => {


  

  return `/catalog/properties/directory:preload-file`
}

export const preloadDirectoryValueFile = async (multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<PreloadFileResponseResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getPreloadDirectoryValueFileUrl(),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PreloadFileResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of DirectoryValue by ID
 * @summary Get the object of DirectoryValue by ID
 */
export const getGetDirectoryValueUrl = (id: number,) => {


  

  return `/catalog/properties/directory/${id}`
}

export const getDirectoryValue = async (id: number, options?: RequestInit): Promise<DirectoryValueResponse> => {
  
  const res = await fetch(getGetDirectoryValueUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DirectoryValueResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing an object of DirectoryValue
 * @summary Replacing an object of DirectoryValue
 */
export const getReplaceDirectoryValueUrl = (id: number,) => {


  

  return `/catalog/properties/directory/${id}`
}

export const replaceDirectoryValue = async (id: number,
    replaceDirectoryValueRequest: ReplaceDirectoryValueRequest, options?: RequestInit): Promise<DirectoryValueResponse> => {
  
  const res = await fetch(getReplaceDirectoryValueUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceDirectoryValueRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DirectoryValueResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of DirectoryValue
 * @summary Deleting an object of DirectoryValue
 */
export const getDeleteDirectoryValueUrl = (id: number,) => {


  

  return `/catalog/properties/directory/${id}`
}

export const deleteDirectoryValue = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteDirectoryValueUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


