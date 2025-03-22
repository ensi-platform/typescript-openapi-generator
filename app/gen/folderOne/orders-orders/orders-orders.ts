/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetOrderParams,
  GetResourceMetaResponseResponse,
  OrderResponse,
  PatchOrderDeliveryRequest,
  PatchOrderRequest,
  SearchOrdersRequest,
  SearchOrdersResponse
} from '.././models';


/**
 * Получение объектов типа Order
 * @summary Получение объектов типа Order
 */
export const getSearchOrdersUrl = () => {


  

  return `/orders/orders:search`
}

export const searchOrders = async (searchOrdersRequest: SearchOrdersRequest, options?: RequestInit): Promise<SearchOrdersResponse> => {
  
  const res = await fetch(getSearchOrdersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchOrdersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchOrdersResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetOrderMetaUrl = () => {


  

  return `/orders/orders:meta`
}

export const getOrderMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetOrderMetaUrl(),
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
 * Получение объекта типа Order
 * @summary Получение объекта типа Order
 */
export const getGetOrderUrl = (id: number,
    params?: GetOrderParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/orders/orders/${id}?${stringifiedParams}` : `/orders/orders/${id}`
}

export const getOrder = async (id: number,
    params?: GetOrderParams, options?: RequestInit): Promise<OrderResponse> => {
  
  const res = await fetch(getGetOrderUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OrderResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление части полей объекта типа Order
 * @summary Обновление части полей объекта типа Order
 */
export const getPatchOrderUrl = (id: number,) => {


  

  return `/orders/orders/${id}`
}

export const patchOrder = async (id: number,
    patchOrderRequest: PatchOrderRequest, options?: RequestInit): Promise<OrderResponse> => {
  
  const res = await fetch(getPatchOrderUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchOrderRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OrderResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление части полей по доставке объекта типа Order
 * @summary Обновление полей по доставке объекта типа Order
 */
export const getChangeOrderDeliveryUrl = (id: number,) => {


  

  return `/orders/orders/${id}:change-delivery`
}

export const changeOrderDelivery = async (id: number,
    patchOrderDeliveryRequest: PatchOrderDeliveryRequest, options?: RequestInit): Promise<OrderResponse> => {
  
  const res = await fetch(getChangeOrderDeliveryUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchOrderDeliveryRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OrderResponse = body ? JSON.parse(body) : {}

  return data
}


