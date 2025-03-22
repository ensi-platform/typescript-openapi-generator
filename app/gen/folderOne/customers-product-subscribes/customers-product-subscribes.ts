/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  ClearProductSubscribesRequest,
  CreateProductSubscribeRequest,
  DeleteProductSubscribesRequest,
  EmptyDataResponse,
  ProductSubscribeResponse,
  SearchProductSubscribesRequest,
  SearchProductSubscribesResponse
} from '.././models';


/**
 * Search for product subscriptions
 * @summary Search for product subscriptions
 */
export const getSearchCustomerProductSubscribesUrl = () => {


  

  return `/customers/product-subscribes:search`
}

export const searchCustomerProductSubscribes = async (searchProductSubscribesRequest: SearchProductSubscribesRequest, options?: RequestInit): Promise<SearchProductSubscribesResponse> => {
  
  const res = await fetch(getSearchCustomerProductSubscribesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductSubscribesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductSubscribesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating a customer subscription to a product
 * @summary Creating a customer subscription to a product
 */
export const getCreateCustomerProductSubscribesUrl = () => {


  

  return `/customers/product-subscribes`
}

export const createCustomerProductSubscribes = async (createProductSubscribeRequest: CreateProductSubscribeRequest, options?: RequestInit): Promise<ProductSubscribeResponse> => {
  
  const res = await fetch(getCreateCustomerProductSubscribesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createProductSubscribeRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductSubscribeResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting a customer's subscription to a product
 * @summary Deleting a customer's subscription to a product
 */
export const getDeleteCustomerProductSubscribesUrl = () => {


  

  return `/customers/product-subscribes:delete-product`
}

export const deleteCustomerProductSubscribes = async (deleteProductSubscribesRequest: DeleteProductSubscribesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteCustomerProductSubscribesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteProductSubscribesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting all customer subscriptions for goods
 * @summary Deleting all customer subscriptions for goods
 */
export const getClearCustomerProductSubscribesUrl = () => {


  

  return `/customers/product-subscribes:clear`
}

export const clearCustomerProductSubscribes = async (clearProductSubscribesRequest: ClearProductSubscribesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getClearCustomerProductSubscribesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      clearProductSubscribesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


