/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  BrandResponse,
  CreateBrandRequest,
  DeleteResponseResponse,
  GetResourceMetaResponseResponse,
  MultipartFileUploadRequest,
  PatchBrandRequest,
  PreloadFileResponseResponse,
  ReplaceBrandRequest,
  SearchBrandsRequest0,
  SearchBrandsResponse0,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse
} from '.././models';


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetBrandsMetaUrl = () => {


  

  return `/catalog/brands:meta`
}

export const getBrandsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetBrandsMetaUrl(),
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
 * Search for objects of Brand
 * @summary Search for objects of Brand
 */
export const getSearchBrandsUrl = () => {


  

  return `/catalog/brands:search`
}

export const searchBrands = async (searchBrandsRequest0: SearchBrandsRequest0, options?: RequestInit): Promise<SearchBrandsResponse0> => {
  
  const res = await fetch(getSearchBrandsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBrandsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBrandsResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Brand for enum
 * @summary Search for objects of Brand for enum
 */
export const getSearchBrandEnumValuesUrl = () => {


  

  return `/catalog/brand-enum-values:search`
}

export const searchBrandEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchBrandEnumValuesUrl(),
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
 * Creating an object of Brand
 * @summary Creating an object of Brand
 */
export const getCreateBrandUrl = () => {


  

  return `/catalog/brands`
}

export const createBrand = async (createBrandRequest: CreateBrandRequest, options?: RequestInit): Promise<BrandResponse> => {
  
  const res = await fetch(getCreateBrandUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createBrandRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BrandResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Uploading image for brands to use
 * @summary Uploading image for brands to use
 */
export const getPreloadBrandImageUrl = () => {


  

  return `/catalog/brands:preload-image`
}

export const preloadBrandImage = async (multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<PreloadFileResponseResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getPreloadBrandImageUrl(),
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
 * Get the object of Brand by ID
 * @summary Get the object of Brand by ID
 */
export const getGetBrandUrl = (id: number,) => {


  

  return `/catalog/brands/${id}`
}

export const getBrand = async (id: number, options?: RequestInit): Promise<BrandResponse> => {
  
  const res = await fetch(getGetBrandUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BrandResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing an object of Brand
 * @summary Replacing an object of Brand
 */
export const getReplaceBrandUrl = (id: number,) => {


  

  return `/catalog/brands/${id}`
}

export const replaceBrand = async (id: number,
    replaceBrandRequest: ReplaceBrandRequest, options?: RequestInit): Promise<BrandResponse> => {
  
  const res = await fetch(getReplaceBrandUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceBrandRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BrandResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Brand
 * @summary Patching an object of Brand
 */
export const getPatchBrandUrl = (id: number,) => {


  

  return `/catalog/brands/${id}`
}

export const patchBrand = async (id: number,
    patchBrandRequest: PatchBrandRequest, options?: RequestInit): Promise<BrandResponse> => {
  
  const res = await fetch(getPatchBrandUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchBrandRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BrandResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Brand
 * @summary Deleting an object of Brand
 */
export const getDeleteBrandUrl = (id: number,) => {


  

  return `/catalog/brands/${id}`
}

export const deleteBrand = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteBrandUrl(id),
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
 * Uploading image for Brand
 * @summary Uploading image for Brand
 */
export const getUploadBrandImageUrl = (id: number,) => {


  

  return `/catalog/brands/${id}:upload-image`
}

export const uploadBrandImage = async (id: number,
    multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<BrandResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getUploadBrandImageUrl(id),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BrandResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting current Brand image
 * @summary Deleting current Brand image
 */
export const getDeleteBrandImageUrl = (id: number,) => {


  

  return `/catalog/brands/${id}:delete-image`
}

export const deleteBrandImage = async (id: number, options?: RequestInit): Promise<BrandResponse> => {
  
  const res = await fetch(getDeleteBrandImageUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BrandResponse = body ? JSON.parse(body) : {}

  return data
}


