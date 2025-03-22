/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  SearchMessagesRequest,
  SearchMessagesResponse
} from '.././models';


/**
 * Поиск сообщений
 * @summary Поиск сообщений
 */
export const getSearchMessagesUrl = () => {


  

  return `/communication/messages:search`
}

export const searchMessages = async (searchMessagesRequest: SearchMessagesRequest, options?: RequestInit): Promise<SearchMessagesResponse> => {
  
  const res = await fetch(getSearchMessagesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchMessagesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchMessagesResponse = body ? JSON.parse(body) : {}

  return data
}


