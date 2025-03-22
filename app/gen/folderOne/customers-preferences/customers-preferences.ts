/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  SearchPreferencesRequest,
  SearchPreferencesResponse
} from '.././models';


/**
 * Search for customer preferences
 * @summary Search for customer preferences
 */
export const getSearchCustomerPreferencesUrl = () => {


  

  return `/customers/preferences:search`
}

export const searchCustomerPreferences = async (searchPreferencesRequest: SearchPreferencesRequest, options?: RequestInit): Promise<SearchPreferencesResponse> => {
  
  const res = await fetch(getSearchCustomerPreferencesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchPreferencesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchPreferencesResponse = body ? JSON.parse(body) : {}

  return data
}


