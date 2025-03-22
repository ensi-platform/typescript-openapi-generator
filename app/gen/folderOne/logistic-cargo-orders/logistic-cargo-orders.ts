/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CargoOrderResponse,
  CargoResponse,
  PatchCargoRequest,
  SearchCargoOrdersRequest,
  SearchCargoOrdersResponse,
  SearchCargoRequest,
  SearchCargoResponse
} from '.././models';


/**
 * Обновить данные по грузу
 * @summary Обновить данные по грузу
 */
export const getPatchCargoUrl = (id: number,) => {


  

  return `/logistic/cargo/${id}`
}

export const patchCargo = async (id: number,
    patchCargoRequest: PatchCargoRequest, options?: RequestInit): Promise<CargoResponse> => {
  
  const res = await fetch(getPatchCargoUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchCargoRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CargoResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Отмена груза
 * @summary Отмена груза
 */
export const getCancelCargoUrl = (id: number,) => {


  

  return `/logistic/cargo/${id}:cancel`
}

export const cancelCargo = async (id: number, options?: RequestInit): Promise<CargoResponse> => {
  
  const res = await fetch(getCancelCargoUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CargoResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск грузов
 * @summary Поиск грузов
 */
export const getSearchCargoUrl = () => {


  

  return `/logistic/cargo:search`
}

export const searchCargo = async (searchCargoRequest: SearchCargoRequest, options?: RequestInit): Promise<SearchCargoResponse> => {
  
  const res = await fetch(getSearchCargoUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCargoRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCargoResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Отменить заказ на забор груза
 * @summary Отменить заказ на забор груза
 */
export const getCancelCargoOrdersUrl = (id: number,) => {


  

  return `/logistic/cargo-orders/${id}:cancel`
}

export const cancelCargoOrders = async (id: number, options?: RequestInit): Promise<CargoOrderResponse> => {
  
  const res = await fetch(getCancelCargoOrdersUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CargoOrderResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск заказов на забор груза
 * @summary Поиск заказов на забор груза
 */
export const getSearchCargoOrdersUrl = () => {


  

  return `/logistic/cargo-orders:search`
}

export const searchCargoOrders = async (searchCargoOrdersRequest: SearchCargoOrdersRequest, options?: RequestInit): Promise<SearchCargoOrdersResponse> => {
  
  const res = await fetch(getSearchCargoOrdersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchCargoOrdersRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchCargoOrdersResponse = body ? JSON.parse(body) : {}

  return data
}


