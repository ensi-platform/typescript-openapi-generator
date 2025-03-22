/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  DeliveryResponse,
  PatchDeliveryRequest
} from '.././models';


/**
 * Обновление части полей объекта типа Delivery
 * @summary Обновление части полей объекта типа Delivery
 */
export const getPatchDeliveryUrl = (id: number,) => {


  

  return `/orders/deliveries/${id}`
}

export const patchDelivery = async (id: number,
    patchDeliveryRequest: PatchDeliveryRequest, options?: RequestInit): Promise<DeliveryResponse> => {
  
  const res = await fetch(getPatchDeliveryUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDeliveryRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryResponse = body ? JSON.parse(body) : {}

  return data
}


