/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateRefundRequest,
  DeleteRefundFilesRequest,
  EmptyDataResponse,
  GetRefundParams,
  GetResourceMetaResponseResponse,
  MultipartFileUploadRequest,
  PatchRefundRequest,
  RefundFileResponse,
  RefundResponse,
  SearchRefundsRequest,
  SearchRefundsResponse
} from '.././models';


/**
 * Создание объекта типа Refund
 * @summary Создание объекта типа Refund
 */
export const getCreateRefundUrl = () => {


  

  return `/orders/refunds`
}

export const createRefund = async (createRefundRequest: CreateRefundRequest, options?: RequestInit): Promise<RefundResponse> => {
  
  const res = await fetch(getCreateRefundUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createRefundRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа Refund
 * @summary Поиск объектов типа Refund
 */
export const getSearchRefundsUrl = () => {


  

  return `/orders/refunds:search`
}

export const searchRefunds = async (searchRefundsRequest: SearchRefundsRequest, options?: RequestInit): Promise<SearchRefundsResponse> => {
  
  const res = await fetch(getSearchRefundsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchRefundsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchRefundsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetRefundsMetaUrl = () => {


  

  return `/orders/refunds:meta`
}

export const getRefundsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetRefundsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа Refund
 * @summary Получение объекта типа Refund
 */
export const getGetRefundUrl = (id: number,
    params?: GetRefundParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/orders/refunds/${id}?${stringifiedParams}` : `/orders/refunds/${id}`
}

export const getRefund = async (id: number,
    params?: GetRefundParams, options?: RequestInit): Promise<RefundResponse> => {
  
  const res = await fetch(getGetRefundUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновление части полей объекта типа Refund
 * @summary Обновление части полей объекта типа Refund
 */
export const getPatchRefundUrl = (id: number,) => {


  

  return `/orders/refunds/${id}`
}

export const patchRefund = async (id: number,
    patchRefundRequest: PatchRefundRequest, options?: RequestInit): Promise<RefundResponse> => {
  
  const res = await fetch(getPatchRefundUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchRefundRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Загрузка вложения для заявки на возврат
 * @summary Загрузка вложения для заявки на возврат
 */
export const getAttachRefundFileUrl = (id: number,) => {


  

  return `/orders/refunds/${id}:attach-file`
}

export const attachRefundFile = async (id: number,
    multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<RefundFileResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getAttachRefundFileUrl(id),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: RefundFileResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление вложений для заявки на возврат
 * @summary Удаление вложений для заявки на возврат
 */
export const getDeleteRefundFilesUrl = (id: number,) => {


  

  return `/orders/refunds/${id}:delete-files`
}

export const deleteRefundFiles = async (id: number,
    deleteRefundFilesRequest: DeleteRefundFilesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteRefundFilesUrl(id),
  {      
    ...options,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteRefundFilesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


