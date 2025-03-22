/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateAttachment200,
  MassDeleteAttachments200,
  MassDeleteBodyBody,
  MultipartFileUploadRequest
} from '.././models';


/**
 * Загрузка вложения
 * @summary Загрузка вложения
 */
export const getCreateAttachmentUrl = () => {


  

  return `/communication/attachments`
}

export const createAttachment = async (multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<CreateAttachment200> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getCreateAttachmentUrl(),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CreateAttachment200 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Массовое удаление вложений
 * @summary Массовое удаление вложений
 */
export const getMassDeleteAttachmentsUrl = () => {


  

  return `/communication/attachments:mass-delete`
}

export const massDeleteAttachments = async (massDeleteBodyBody: MassDeleteBodyBody, options?: RequestInit): Promise<MassDeleteAttachments200> => {
  
  const res = await fetch(getMassDeleteAttachmentsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massDeleteBodyBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: MassDeleteAttachments200 = body ? JSON.parse(body) : {}

  return data
}


