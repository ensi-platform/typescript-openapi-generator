/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  EmptyDataResponse,
  IdsObject
} from '.././models';


/**
 * Linking objects of Nameplate to object of Product
 * @summary Linking objects of Nameplate to object of Product
 */
export const getAddProductNameplatesUrl = (id: number,) => {


  

  return `/cms/products/${id}:add-nameplates`
}

export const addProductNameplates = async (id: number,
    idsObject: IdsObject, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getAddProductNameplatesUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      idsObject,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting links between objects of Nameplate and object of Product
 * @summary Deleting links between objects of Nameplate and object of Product
 */
export const getDeleteProductNameplatesUrl = (id: number,) => {


  

  return `/cms/products/${id}:delete-nameplates`
}

export const deleteProductNameplates = async (id: number,
    idsObject: IdsObject, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteProductNameplatesUrl(id),
  {      
    ...options,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      idsObject,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


