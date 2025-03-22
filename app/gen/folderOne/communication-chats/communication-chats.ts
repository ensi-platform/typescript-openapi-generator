/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  ChatResponse,
  CreateChatRequest,
  PatchChatRequest,
  SearchChatsRequest,
  SearchChatsResponse
} from '.././models';


/**
 * Поиск чатов
 * @summary Поиск чатов
 */
export const getSearchChatsUrl = () => {


  

  return `/communication/chats:search`
}

export const searchChats = async (searchChatsRequest: SearchChatsRequest, options?: RequestInit): Promise<SearchChatsResponse> => {
  
  const res = await fetch(getSearchChatsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchChatsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchChatsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание чата
 * @summary Создание чата
 */
export const getCreateChatUrl = () => {


  

  return `/communication/chats`
}

export const createChat = async (createChatRequest: CreateChatRequest, options?: RequestInit): Promise<ChatResponse> => {
  
  const res = await fetch(getCreateChatUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createChatRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ChatResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление данных чата
 * @summary Обновление данных чата
 */
export const getPatchChatUrl = (id: number,) => {


  

  return `/communication/chats/${id}`
}

export const patchChat = async (id: number,
    patchChatRequest: PatchChatRequest, options?: RequestInit): Promise<ChatResponse> => {
  
  const res = await fetch(getPatchChatUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchChatRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ChatResponse = body ? JSON.parse(body) : {}

  return data
}


