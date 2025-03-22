/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateRefundReasonRequest,
  EmptyDataResponse,
  GetDeliveryStatusesResponse,
  GetOrderSourcesResponse,
  GetOrderStatusesResponse,
  GetPaymentMethodsResponse,
  GetPaymentStatusesResponse,
  GetShipmentStatusesResponse,
  MultipartFileUploadRequest,
  OrderAttachFileResponse,
  OrderChangePaymentSystemRequest,
  OrderDeleteFilesRequest,
  OrderResponse,
  PatchRefundReasonRequest,
  RefundReasonResponse,
  RefundReasonsResponse,
  RefundStatusesResponse
} from '.././models';


/**
 * Изменить систему оплаты заказа
 * @summary Изменить систему оплаты заказа
 */
export const getChangeOrderPaymentSystemUrl = (id: number,) => {


  

  return `/orders/orders/${id}:change-payment-method`
}

export const changeOrderPaymentSystem = async (id: number,
    orderChangePaymentSystemRequest: OrderChangePaymentSystemRequest, options?: RequestInit): Promise<OrderResponse> => {
  
  const res = await fetch(getChangeOrderPaymentSystemUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      orderChangePaymentSystemRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OrderResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Прикрепить файл к заказу
 * @summary Прикрепить файл к заказу
 */
export const getAttachOrderFileUrl = (id: number,) => {


  

  return `/orders/orders/${id}:attach-file`
}

export const attachOrderFile = async (id: number,
    multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<OrderAttachFileResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getAttachOrderFileUrl(id),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: OrderAttachFileResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удалить прикрепленные файлы к заказу
 * @summary Удалить прикрепленные файлы к заказу
 */
export const getDeleteOrderFilesUrl = (id: number,) => {


  

  return `/orders/orders/${id}:delete-files`
}

export const deleteOrderFiles = async (id: number,
    orderDeleteFilesRequest: OrderDeleteFilesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteOrderFilesUrl(id),
  {      
    ...options,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      orderDeleteFilesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа OrderStatus
 * @summary Получение объектов типа OrderStatus
 */
export const getGetOrderStatusesUrl = () => {


  

  return `/orders/order-statuses`
}

export const getOrderStatuses = async ( options?: RequestInit): Promise<GetOrderStatusesResponse> => {
  
  const res = await fetch(getGetOrderStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetOrderStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа OrderSource
 * @summary Получение объектов типа OrderSource
 */
export const getGetOrderSourcesUrl = () => {


  

  return `/orders/order-sources`
}

export const getOrderSources = async ( options?: RequestInit): Promise<GetOrderSourcesResponse> => {
  
  const res = await fetch(getGetOrderSourcesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetOrderSourcesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа PaymentMethod
 * @summary Получение объектов типа PaymentMethod
 */
export const getGetPaymentMethodsUrl = () => {


  

  return `/orders/payment-methods`
}

export const getPaymentMethods = async ( options?: RequestInit): Promise<GetPaymentMethodsResponse> => {
  
  const res = await fetch(getGetPaymentMethodsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetPaymentMethodsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа PaymentStatus
 * @summary Получение объектов типа PaymentStatus
 */
export const getGetPaymentStatusesUrl = () => {


  

  return `/orders/payment-statuses`
}

export const getPaymentStatuses = async ( options?: RequestInit): Promise<GetPaymentStatusesResponse> => {
  
  const res = await fetch(getGetPaymentStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetPaymentStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа DeliveryStatus
 * @summary Получение объектов типа DeliveryStatus
 */
export const getGetDeliveryStatusesUrl = () => {


  

  return `/orders/delivery-statuses`
}

export const getDeliveryStatuses = async ( options?: RequestInit): Promise<GetDeliveryStatusesResponse> => {
  
  const res = await fetch(getGetDeliveryStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetDeliveryStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объектов типа ShipmentStatus
 * @summary Получение объектов типа ShipmentStatus
 */
export const getGetShipmentStatusesUrl = () => {


  

  return `/orders/shipment-statuses`
}

export const getShipmentStatuses = async ( options?: RequestInit): Promise<GetShipmentStatusesResponse> => {
  
  const res = await fetch(getGetShipmentStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetShipmentStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа RefundStatus
 * @summary Получение объекта типа RefundStatus
 */
export const getGetRefundStatusesUrl = () => {


  

  return `/orders/refund-statuses`
}

export const getRefundStatuses = async ( options?: RequestInit): Promise<RefundStatusesResponse> => {
  
  const res = await fetch(getGetRefundStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание объекта типа RefundReason
 * @summary Создание объекта типа RefundReason
 */
export const getCreateRefundReasonUrl = () => {


  

  return `/orders/refund-reasons`
}

export const createRefundReason = async (createRefundReasonRequest: CreateRefundReasonRequest, options?: RequestInit): Promise<RefundReasonResponse> => {
  
  const res = await fetch(getCreateRefundReasonUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createRefundReasonRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundReasonResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа RefundReason
 * @summary Получение объекта типа RefundReason
 */
export const getGetRefundReasonsUrl = () => {


  

  return `/orders/refund-reasons`
}

export const getRefundReasons = async ( options?: RequestInit): Promise<RefundReasonsResponse> => {
  
  const res = await fetch(getGetRefundReasonsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundReasonsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление части полей объекта типа RefundReason
 * @summary Обновление части полей объекта типа RefundReason
 */
export const getPatchRefundReasonUrl = (id: number,) => {


  

  return `/orders/refund-reasons/${id}`
}

export const patchRefundReason = async (id: number,
    patchRefundReasonRequest: PatchRefundReasonRequest, options?: RequestInit): Promise<RefundReasonResponse> => {
  
  const res = await fetch(getPatchRefundReasonUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchRefundReasonRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundReasonResponse = body ? JSON.parse(body) : {}

  return data
}


