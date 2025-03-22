/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  BonusOperationResponse,
  CreateBonusOperationRequest,
  EmptyDataResponse,
  PatchBonusOperationRequest,
  SearchBonusOperationsRequest,
  SearchBonusOperationsResponse
} from '.././models';


/**
 * Search for customer's bonus operations
 * @summary Search for customer's bonus operations
 */
export const getSearchCustomersBonusOperationsUrl = () => {


  

  return `/customers/bonus-operations:search`
}

export const searchCustomersBonusOperations = async (searchBonusOperationsRequest: SearchBonusOperationsRequest, options?: RequestInit): Promise<SearchBonusOperationsResponse> => {
  
  const res = await fetch(getSearchCustomersBonusOperationsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchBonusOperationsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchBonusOperationsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating customer's bonus operations
 * @summary Creating customer's bonus operations
 */
export const getCreateBonusOperationUrl = () => {


  

  return `/customers/bonus-operations`
}

export const createBonusOperation = async (createBonusOperationRequest: CreateBonusOperationRequest, options?: RequestInit): Promise<BonusOperationResponse> => {
  
  const res = await fetch(getCreateBonusOperationUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createBonusOperationRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BonusOperationResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting customer's bonus operations by id
 * @summary Getting customer's bonus operations by id
 */
export const getGetBonusOperationUrl = (id: number,) => {


  

  return `/customers/bonus-operations/${id}`
}

export const getBonusOperation = async (id: number, options?: RequestInit): Promise<BonusOperationResponse> => {
  
  const res = await fetch(getGetBonusOperationUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BonusOperationResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Updating the customer's bonus operations
 * @summary Updating the customer's bonus transaction
 */
export const getPatchBonusOperationUrl = (id: number,) => {


  

  return `/customers/bonus-operations/${id}`
}

export const patchBonusOperation = async (id: number,
    patchBonusOperationRequest: PatchBonusOperationRequest, options?: RequestInit): Promise<BonusOperationResponse> => {
  
  const res = await fetch(getPatchBonusOperationUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchBonusOperationRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: BonusOperationResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting customer bonus transactions
 * @summary Deleting customer bonus transactions
 */
export const getDeleteBonusOperationUrl = (id: number,) => {


  

  return `/customers/bonus-operations/${id}`
}

export const deleteBonusOperation = async (id: number, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteBonusOperationUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


