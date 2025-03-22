/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  DeliveryKpiResponse,
  GetResourceMetaResponseResponse,
  PatchDeliveryKpiRequest
} from '.././models';


/**
 * Получение объекта типа DeliveryKpi
 * @summary Получение объекта типа DeliveryKpi
 */
export const getGetDeliveryKpiUrl = () => {


  

  return `/logistic/delivery-kpi`
}

export const getDeliveryKpi = async ( options?: RequestInit): Promise<DeliveryKpiResponse> => {
  
  const res = await fetch(getGetDeliveryKpiUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа DeliveryKpi
 * @summary Обновления части полей объекта типа DeliveryKpi
 */
export const getPatchDeliveryKpiUrl = () => {


  

  return `/logistic/delivery-kpi`
}

export const patchDeliveryKpi = async (patchDeliveryKpiRequest: PatchDeliveryKpiRequest, options?: RequestInit): Promise<DeliveryKpiResponse> => {
  
  const res = await fetch(getPatchDeliveryKpiUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDeliveryKpiRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryKpiResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetDeliveryKpiMetaUrl = () => {


  

  return `/logistic/delivery-kpi:meta`
}

export const getDeliveryKpiMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetDeliveryKpiMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


