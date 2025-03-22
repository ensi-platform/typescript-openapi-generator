/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  GetDeliveryMethodsResponse,
  GetDeliveryServiceStatusesResponse,
  GetShipmentMethodsResponse
} from '.././models';


/**
 * Получение объекта типа DeliveryMethod
 * @summary Получение объекта типа DeliveryMethod
 */
export const getGetDeliveryMethodsUrl = () => {


  

  return `/logistic/delivery-methods`
}

export const getDeliveryMethods = async ( options?: RequestInit): Promise<GetDeliveryMethodsResponse> => {
  
  const res = await fetch(getGetDeliveryMethodsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetDeliveryMethodsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа DeliveryServiceStatus
 * @summary Получение объекта типа DeliveryServiceStatus
 */
export const getGetDeliveryServiceStatusesUrl = () => {


  

  return `/logistic/delivery-service-statuses`
}

export const getDeliveryServiceStatuses = async ( options?: RequestInit): Promise<GetDeliveryServiceStatusesResponse> => {
  
  const res = await fetch(getGetDeliveryServiceStatusesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetDeliveryServiceStatusesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа ShipmentMethod
 * @summary Получение объекта типа ShipmentMethod
 */
export const getGetShipmentMethodsUrl = () => {


  

  return `/logistic/shipment-methods`
}

export const getShipmentMethods = async ( options?: RequestInit): Promise<GetShipmentMethodsResponse> => {
  
  const res = await fetch(getGetShipmentMethodsUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetShipmentMethodsResponse = body ? JSON.parse(body) : {}

  return data
}


