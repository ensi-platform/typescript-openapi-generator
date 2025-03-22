/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  PatchShipmentRequest,
  ShipmentResponse
} from '.././models';


/**
 * Обновление части полей объекта типа Shipments
 * @summary Обновление части полей объекта типа Shipments
 */
export const getPatchShipmentUrl = (id: number,) => {


  

  return `/orders/shipments/${id}`
}

export const patchShipment = async (id: number,
    patchShipmentRequest: PatchShipmentRequest, options?: RequestInit): Promise<ShipmentResponse> => {
  
  const res = await fetch(getPatchShipmentUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchShipmentRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ShipmentResponse = body ? JSON.parse(body) : {}

  return data
}


