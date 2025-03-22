/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  MenuResponse1,
  SearchMenusRequest,
  SearchMenusResponse,
  SearchOneMenusRequest,
  UpdateMenuTreesRequest,
  UpdateMenuTreesResponse
} from '.././models';


/**
 * Search for objects of Menu
 * @summary Search for objects of Menu
 */
export const getSearchMenusUrl = () => {


  

  return `/cms/menus:search`
}

export const searchMenus = async (searchMenusRequest: SearchMenusRequest, options?: RequestInit): Promise<SearchMenusResponse> => {
  
  const res = await fetch(getSearchMenusUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchMenusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchMenusResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for an object ofMenu
 * @summary Search for an object ofMenu
 */
export const getSearchOneMenusUrl = () => {


  

  return `/cms/menus:search-one`
}

export const searchOneMenus = async (searchOneMenusRequest: SearchOneMenusRequest, options?: RequestInit): Promise<MenuResponse1> => {
  
  const res = await fetch(getSearchOneMenusUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchOneMenusRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: MenuResponse1 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Updating the Menu tree
 * @summary Updating the Menu tree
 */
export const getReplaceMenuTreesUrl = (id: number,) => {


  

  return `/cms/menus/${id}/trees`
}

export const replaceMenuTrees = async (id: number,
    updateMenuTreesRequest: UpdateMenuTreesRequest, options?: RequestInit): Promise<UpdateMenuTreesResponse> => {
  
  const res = await fetch(getReplaceMenuTreesUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      updateMenuTreesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: UpdateMenuTreesResponse = body ? JSON.parse(body) : {}

  return data
}


