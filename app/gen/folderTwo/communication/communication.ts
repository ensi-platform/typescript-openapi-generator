/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateBroadcastRequest,
  EmptyDataResponse
} from '.././models';


/**
 * Создание рассылки
 * @summary Создание рассылки
 */
export const getCreateBroadcastUrl = () => {


  

  return `/communication/broadcasts`
}

export const createBroadcast = async (createBroadcastRequest: CreateBroadcastRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getCreateBroadcastUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createBroadcastRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


