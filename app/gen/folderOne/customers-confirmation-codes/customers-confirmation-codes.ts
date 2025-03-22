/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetResourceMetaResponseResponse,
  SearchConfirmationCodesRequest,
  SearchConfirmationCodesResponse
} from '.././models';


/**
 * Search for customer confirmation codes
 * @summary Search for customer confirmation codes
 */
export const getCustomerConfirmationCodesSearchUrl = () => {


  

  return `/customers/confirmation-codes:search`
}

export const customerConfirmationCodesSearch = async (searchConfirmationCodesRequest: SearchConfirmationCodesRequest, options?: RequestInit): Promise<SearchConfirmationCodesResponse> => {
  
  const res = await fetch(getCustomerConfirmationCodesSearchUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchConfirmationCodesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchConfirmationCodesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getCustomerConfirmationCodesMetaUrl = () => {


  

  return `/customers/confirmation-codes:meta`
}

export const customerConfirmationCodesMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getCustomerConfirmationCodesMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


