/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  EmptyDataResponse,
  OrderItemChangeQtyRequest,
  OrderItemChangeQtyResponse,
  OrderItemsAddRequest,
  OrderItemsAddResponse,
  OrderItemsDeleteRequest
} from '.././models';


/**
 * Добавление OrderItems в заказ
 * @summary Добавление OrderItems в заказ
 */
export const getAddOrderItemsUrl = (id: number,) => {


  

  return `/orders/orders/${id}:add-order-items`
}

export const addOrderItems = async (id: number,
    orderItemsAddRequest: OrderItemsAddRequest, options?: RequestInit): Promise<OrderItemsAddResponse> => {
  
  const res = await fetch(getAddOrderItemsUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      orderItemsAddRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OrderItemsAddResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление OrderItems из заказа
 * @summary Удаление OrderItems из заказа
 */
export const getDeleteOrderItemsUrl = (id: number,) => {


  

  return `/orders/orders/${id}:delete-order-items`
}

export const deleteOrderItems = async (id: number,
    orderItemsDeleteRequest: OrderItemsDeleteRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteOrderItemsUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      orderItemsDeleteRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Изменение количества OrderItem
 * @summary Изменение количества OrderItem
 */
export const getChangeOrderItemQtyUrl = (id: number,) => {


  

  return `/orders/orders/${id}:change-order-items-qty`
}

export const changeOrderItemQty = async (id: number,
    orderItemChangeQtyRequest: OrderItemChangeQtyRequest, options?: RequestInit): Promise<OrderItemChangeQtyResponse> => {
  
  const res = await fetch(getChangeOrderItemQtyUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      orderItemChangeQtyRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OrderItemChangeQtyResponse = body ? JSON.parse(body) : {}

  return data
}


