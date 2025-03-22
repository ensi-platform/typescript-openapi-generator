/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  BannerResponse,
  CreateBannersRequest,
  DeleteBannerFileRequest,
  EmptyDataResponse,
  GetBannerButtonLocationsResponse,
  GetBannerButtonTypesResponse,
  GetResourceMetaResponseResponse,
  ReplaceBannersRequest,
  SearchBannerTypesRequest,
  SearchBannerTypesResponse,
  SearchBannersRequest,
  SearchBannersResponse,
  SearchOneBannerRequest,
  UploadBannerFileBody,
  UploadBannerFileResponse
} from '.././models';


/**
 * Search for objects of Banner
 * @summary Search for objects of Banner
 */
export const getSearchBannersUrl = () => {


  

  return `/cms/banners:search`
}

export const searchBanners = async (searchBannersRequest: SearchBannersRequest, options?: RequestInit): Promise<SearchBannersResponse> => {
  
  const res = await fetch(getSearchBannersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBannersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBannersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for an object of Banner
 * @summary Search for an object of Banner
 */
export const getSearchOneBannerUrl = () => {


  

  return `/cms/banners:search-one`
}

export const searchOneBanner = async (searchOneBannerRequest: SearchOneBannerRequest, options?: RequestInit): Promise<BannerResponse> => {
  
  const res = await fetch(getSearchOneBannerUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchOneBannerRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BannerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating an object of Banner
 * @summary Creating an object of Banner
 */
export const getCreateBannerUrl = () => {


  

  return `/cms/banners`
}

export const createBanner = async (createBannersRequest: CreateBannersRequest, options?: RequestInit): Promise<BannerResponse> => {
  
  const res = await fetch(getCreateBannerUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createBannersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BannerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing an object of Banner
 * @summary Replacing an object of Banner
 */
export const getReplaceBannerUrl = (id: number,) => {


  

  return `/cms/banners/${id}`
}

export const replaceBanner = async (id: number,
    replaceBannersRequest: ReplaceBannersRequest, options?: RequestInit): Promise<BannerResponse> => {
  
  const res = await fetch(getReplaceBannerUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceBannersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BannerResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Banner
 * @summary Deleting an object of Banner
 */
export const getDeleteBannerUrl = (id: number,) => {


  

  return `/cms/banners/${id}`
}

export const deleteBanner = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteBannerUrl(id),
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
export const getGetBannersMetaUrl = () => {


  

  return `/cms/banners:meta`
}

export const getBannersMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetBannersMetaUrl(),
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
 * Uploading file for object type Banner
 * @summary Uploading file for object type Banner
 */
export const getUploadBannerFileUrl = (id: number,) => {


  

  return `/cms/banners/${id}:upload-file`
}

export const uploadBannerFile = async (id: number,
    uploadBannerFileBody: UploadBannerFileBody, options?: RequestInit): Promise<UploadBannerFileResponse> => {
    const formData = new FormData();
if(uploadBannerFileBody.type !== undefined) {
 formData.append('type', uploadBannerFileBody.type)
 }
if(uploadBannerFileBody.file !== undefined) {
 formData.append('file', uploadBannerFileBody.file)
 }

  const res = await fetch(getUploadBannerFileUrl(id),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: UploadBannerFileResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting a file for an object of type Banner
 * @summary Deleting a file for an object of type Banner
 */
export const getDeleteBannerFileUrl = (id: number,) => {


  

  return `/cms/banners/${id}:delete-file`
}

export const deleteBannerFile = async (id: number,
    deleteBannerFileRequest: DeleteBannerFileRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteBannerFileUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteBannerFileRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of BannerType
 * @summary Search for objects of BannerType
 */
export const getSearchBannerTypesUrl = () => {


  

  return `/cms/banner-types:search`
}

export const searchBannerTypes = async (searchBannerTypesRequest: SearchBannerTypesRequest, options?: RequestInit): Promise<SearchBannerTypesResponse> => {
  
  const res = await fetch(getSearchBannerTypesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBannerTypesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBannerTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetBannerTypesMetaUrl = () => {


  

  return `/cms/banner-types:meta`
}

export const getBannerTypesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetBannerTypesMetaUrl(),
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
 * Getting objects of BannerButtonType
 * @summary Getting objects of BannerButtonType
 */
export const getGetBannerButtonTypesUrl = () => {


  

  return `/cms/banner-button-types`
}

export const getBannerButtonTypes = async ( options?: RequestInit): Promise<GetBannerButtonTypesResponse> => {
  
  const res = await fetch(getGetBannerButtonTypesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetBannerButtonTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting objects of BannerButtonLocation
 * @summary Getting objects of BannerButtonLocation
 */
export const getGetBannerButtonLocationsUrl = () => {


  

  return `/cms/banner-button-locations`
}

export const getBannerButtonLocations = async ( options?: RequestInit): Promise<GetBannerButtonLocationsResponse> => {
  
  const res = await fetch(getGetBannerButtonLocationsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetBannerButtonLocationsResponse = body ? JSON.parse(body) : {}

  return data
}


