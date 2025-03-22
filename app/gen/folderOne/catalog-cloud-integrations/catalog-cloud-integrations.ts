/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CloudIntegrationResponse,
  CreateCloudIntegrationRequest,
  PatchCloudIntegrationRequest
} from '.././models';


/**
 * Get the object of CloudIntegration
 * @summary Get the object of CloudIntegration
 */
export const getGetCloudIntegrationUrl = () => {


  

  return `/catalog/cloud-integrations`
}

export const getCloudIntegration = async ( options?: RequestInit): Promise<CloudIntegrationResponse> => {
  
  const res = await fetch(getGetCloudIntegrationUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CloudIntegrationResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating an object of CloudIntegration
 * @summary Creating an object of CloudIntegration
 */
export const getCreateCloudIntegrationUrl = () => {


  

  return `/catalog/cloud-integrations`
}

export const createCloudIntegration = async (createCloudIntegrationRequest: CreateCloudIntegrationRequest, options?: RequestInit): Promise<CloudIntegrationResponse> => {
  
  const res = await fetch(getCreateCloudIntegrationUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createCloudIntegrationRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CloudIntegrationResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of CloudIntegration
 * @summary Patching an object of CloudIntegration
 */
export const getPatchCloudIntegrationUrl = () => {


  

  return `/catalog/cloud-integrations`
}

export const patchCloudIntegration = async (patchCloudIntegrationRequest: PatchCloudIntegrationRequest, options?: RequestInit): Promise<CloudIntegrationResponse> => {
  
  const res = await fetch(getPatchCloudIntegrationUrl(),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchCloudIntegrationRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: CloudIntegrationResponse = body ? JSON.parse(body) : {}

  return data
}


