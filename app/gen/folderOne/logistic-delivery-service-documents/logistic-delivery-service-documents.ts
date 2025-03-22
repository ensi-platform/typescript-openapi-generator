/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateDeliveryServiceDocumentRequest,
  DeliveryServiceDocumentResponse,
  EmptyDataResponse,
  GetDeliveryServiceDocumentParams,
  MultipartFileUploadRequest,
  PatchDeliveryServiceDocumentRequest,
  SearchDeliveryServiceDocumentsRequest,
  SearchDeliveryServiceDocumentsResponse
} from '.././models';


/**
 * Создание объекта типа DeliveryServiceDocument
 * @summary Создание объекта типа DeliveryServiceDocument
 */
export const getCreateDeliveryServiceDocumentUrl = () => {


  

  return `/logistic/delivery-service-documents`
}

export const createDeliveryServiceDocument = async (createDeliveryServiceDocumentRequest: CreateDeliveryServiceDocumentRequest, options?: RequestInit): Promise<DeliveryServiceDocumentResponse> => {
  
  const res = await fetch(getCreateDeliveryServiceDocumentUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createDeliveryServiceDocumentRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceDocumentResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Получение объекта типа DeliveryServiceDocument
 * @summary Получение объекта типа DeliveryServiceDocument
 */
export const getGetDeliveryServiceDocumentUrl = (id: number,
    params?: GetDeliveryServiceDocumentParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/logistic/delivery-service-documents/${id}?${stringifiedParams}` : `/logistic/delivery-service-documents/${id}`
}

export const getDeliveryServiceDocument = async (id: number,
    params?: GetDeliveryServiceDocumentParams, options?: RequestInit): Promise<DeliveryServiceDocumentResponse> => {
  
  const res = await fetch(getGetDeliveryServiceDocumentUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceDocumentResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Обновления части полей объекта типа DeliveryServiceDocument
 * @summary Обновления части полей объекта типа DeliveryServiceDocument
 */
export const getPatchDeliveryServiceDocumentUrl = (id: number,) => {


  

  return `/logistic/delivery-service-documents/${id}`
}

export const patchDeliveryServiceDocument = async (id: number,
    patchDeliveryServiceDocumentRequest: PatchDeliveryServiceDocumentRequest, options?: RequestInit): Promise<DeliveryServiceDocumentResponse> => {
  
  const res = await fetch(getPatchDeliveryServiceDocumentUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchDeliveryServiceDocumentRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceDocumentResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление объекта типа DeliveryServiceDocument
 * @summary Удаление объекта типа DeliveryServiceDocument
 */
export const getDeleteDeliveryServiceDocumentUrl = (id: number,) => {


  

  return `/logistic/delivery-service-documents/${id}`
}

export const deleteDeliveryServiceDocument = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteDeliveryServiceDocumentUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Загрузка файла с документом службы доставки
 * @summary Загрузка файла с документом службы доставки
 */
export const getUploadDeliveryServiceDocumentFileUrl = (id: number,) => {


  

  return `/logistic/delivery-service-documents/${id}:upload-file`
}

export const uploadDeliveryServiceDocumentFile = async (id: number,
    multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<DeliveryServiceDocumentResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getUploadDeliveryServiceDocumentFileUrl(id),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceDocumentResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Удаление файла с документом службы доставки из базы и файловой системы
 * @summary Удаление файла с документом службы доставки
 */
export const getDeleteDeliveryServiceDocumentFileUrl = (id: number,) => {


  

  return `/logistic/delivery-service-documents/${id}:delete-file`
}

export const deleteDeliveryServiceDocumentFile = async (id: number, options?: RequestInit): Promise<DeliveryServiceDocumentResponse> => {
  
  const res = await fetch(getDeleteDeliveryServiceDocumentFileUrl(id),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceDocumentResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryServiceDocument
 * @summary Поиск объектов типа DeliveryServiceDocument
 */
export const getSearchDeliveryServiceDocumentsUrl = () => {


  

  return `/logistic/delivery-service-documents:search`
}

export const searchDeliveryServiceDocuments = async (searchDeliveryServiceDocumentsRequest: SearchDeliveryServiceDocumentsRequest, options?: RequestInit): Promise<SearchDeliveryServiceDocumentsResponse> => {
  
  const res = await fetch(getSearchDeliveryServiceDocumentsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryServiceDocumentsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchDeliveryServiceDocumentsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Поиск объектов типа DeliveryServiceDocument
 * @summary Поиск объекта типа DeliveryServiceDocument
 */
export const getSearchOneDeliveryServiceDocumentUrl = () => {


  

  return `/logistic/delivery-service-documents:search-one`
}

export const searchOneDeliveryServiceDocument = async (searchDeliveryServiceDocumentsRequest: SearchDeliveryServiceDocumentsRequest, options?: RequestInit): Promise<DeliveryServiceDocumentResponse> => {
  
  const res = await fetch(getSearchOneDeliveryServiceDocumentUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchDeliveryServiceDocumentsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeliveryServiceDocumentResponse = body ? JSON.parse(body) : {}

  return data
}


