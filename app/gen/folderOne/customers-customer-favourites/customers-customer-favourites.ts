/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  ClearCustomerFavoritesRequest,
  CreateCustomerFavoritesRequest,
  DeleteCustomerFavoritesRequest,
  EmptyDataResponse,
  SearchCustomerFavoritesRequest,
  SearchCustomerFavoritesResponse
} from '.././models';


/**
 * Search for objects of CustomerFavorite
 * @summary Search for objects of CustomerFavorite
 */
export const getSearchCustomerFavoriteUrl = () => {


  

  return `/customers/favorites:search`
}

export const searchCustomerFavorite = async (searchCustomerFavoritesRequest: SearchCustomerFavoritesRequest, options?: RequestInit): Promise<SearchCustomerFavoritesResponse> => {
  
  const res = await fetch(getSearchCustomerFavoriteUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCustomerFavoritesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCustomerFavoritesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Mass creating objects of CustomerFavorite
 * @summary Mass creating objects of CustomerFavorite
 */
export const getCreateCustomerFavoritesUrl = () => {


  

  return `/customers/favorites`
}

export const createCustomerFavorites = async (createCustomerFavoritesRequest: CreateCustomerFavoritesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getCreateCustomerFavoritesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCustomerFavoritesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Mass deleting objects of CustomerFavorite
 * @summary Mass deleting objects of CustomerFavorite
 */
export const getDeleteCustomerFavoritesUrl = () => {


  

  return `/customers/favorites:delete-product`
}

export const deleteCustomerFavorites = async (deleteCustomerFavoritesRequest: DeleteCustomerFavoritesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteCustomerFavoritesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteCustomerFavoritesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting all objects of CustomerFavorite by Customer
 * @summary Deleting all objects of CustomerFavorite by Customer
 */
export const getClearCustomerFavoritesUrl = () => {


  

  return `/customers/favorites:clear`
}

export const clearCustomerFavorites = async (clearCustomerFavoritesRequest: ClearCustomerFavoritesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getClearCustomerFavoritesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      clearCustomerFavoritesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


