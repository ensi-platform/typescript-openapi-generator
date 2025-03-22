/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateProductImportRequest,
  GetResourceMetaResponseResponse,
  MultipartFileUploadRequest,
  PreloadFileResponseResponse,
  ProductImportResponse,
  SearchProductImportWarningsRequest,
  SearchProductImportWarningsResponse,
  SearchProductImportsRequest,
  SearchProductImportsResponse
} from '.././models';


/**
 * Creating an object of ProductImport and starting import
 * @summary Creating an object of ProductImport
 */
export const getCreateProductImportUrl = () => {


  

  return `/catalog/product-imports`
}

export const createProductImport = async (createProductImportRequest: CreateProductImportRequest, options?: RequestInit): Promise<ProductImportResponse> => {
  
  const res = await fetch(getCreateProductImportUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createProductImportRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductImportResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Uploading a file for ProductImport
 * @summary Uploading a file for ProductImport
 */
export const getPreloadImportFileUrl = () => {


  

  return `/catalog/product-imports:preload-file`
}

export const preloadImportFile = async (multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<PreloadFileResponseResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getPreloadImportFileUrl(),
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
 * Search for objects of ProductImport
 * @summary Search for objects of ProductImport
 */
export const getSearchProductImportsUrl = () => {


  

  return `/catalog/product-imports:search`
}

export const searchProductImports = async (searchProductImportsRequest: SearchProductImportsRequest, options?: RequestInit): Promise<SearchProductImportsResponse> => {
  
  const res = await fetch(getSearchProductImportsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductImportsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductImportsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields for ProductImport
 * @summary Getting a list of available fields for ProductImport
 */
export const getGetProductImportsMetaUrl = () => {


  

  return `/catalog/product-imports:meta`
}

export const getProductImportsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetProductImportsMetaUrl(),
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
 * Search for objects of ProductImportWarning
 * @summary Search for objects of ProductImportWarning
 */
export const getSearchProductImportWarningsUrl = () => {


  

  return `/catalog/product-import-warnings:search`
}

export const searchProductImportWarnings = async (searchProductImportWarningsRequest: SearchProductImportWarningsRequest, options?: RequestInit): Promise<SearchProductImportWarningsResponse> => {
  
  const res = await fetch(getSearchProductImportWarningsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductImportWarningsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductImportWarningsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields for ProductImportWarning
 * @summary Getting a list of available fields for ProductImportWarning
 */
export const getGetProductImportWarningsMetaUrl = () => {


  

  return `/catalog/product-import-warnings:meta`
}

export const getProductImportWarningsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetProductImportWarningsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


