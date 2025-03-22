/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchTempFilesRequest,
  SearchTempFilesResponse
} from '.././models';


/**
 * Search for objects of TempFiles
 * @summary Search for objects of TempFiles
 */
export const getSearchPimTempFilesUrl = () => {


  

  return `/catalog/pim/temp-files:search`
}

export const searchPimTempFiles = async (searchTempFilesRequest: SearchTempFilesRequest, options?: RequestInit): Promise<SearchTempFilesResponse> => {
  
  const res = await fetch(getSearchPimTempFilesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchTempFilesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchTempFilesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetPimTempFilesMetaUrl = () => {


  

  return `/catalog/pim/temp-files:meta`
}

export const getPimTempFilesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetPimTempFilesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


