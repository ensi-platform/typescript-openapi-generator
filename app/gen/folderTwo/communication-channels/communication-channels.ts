/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  ChannelResponse,
  CreateChannelRequest,
  DeleteResponseResponse,
  PatchChannelRequest,
  SearchChannelsRequest,
  SearchChannelsResponse
} from '.././models';


/**
 * Поиск каналов
 * @summary Поиск каналов
 */
export const getSearchChannelsUrl = () => {


  

  return `/communication/channels:search`
}

export const searchChannels = async (searchChannelsRequest: SearchChannelsRequest, options?: RequestInit): Promise<SearchChannelsResponse> => {
  
  const res = await fetch(getSearchChannelsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchChannelsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchChannelsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Создание канала
 * @summary Создание канала
 */
export const getCreateChannelUrl = () => {


  

  return `/communication/channels`
}

export const createChannel = async (createChannelRequest: CreateChannelRequest, options?: RequestInit): Promise<ChannelResponse> => {
  
  const res = await fetch(getCreateChannelUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createChannelRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ChannelResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление данных канала
 * @summary Обновление данных канала
 */
export const getPatchChannelUrl = (id: number,) => {


  

  return `/communication/channels/${id}`
}

export const patchChannel = async (id: number,
    patchChannelRequest: PatchChannelRequest, options?: RequestInit): Promise<ChannelResponse> => {
  
  const res = await fetch(getPatchChannelUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchChannelRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ChannelResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление канала
 * @summary Удаление канала
 */
export const getDeleteChannelUrl = (id: number,) => {


  

  return `/communication/channels/${id}`
}

export const deleteChannel = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteChannelUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


