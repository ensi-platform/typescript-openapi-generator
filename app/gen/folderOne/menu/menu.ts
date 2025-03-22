/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  MenuResponse0
} from '.././models';


/**
 * Получение меню (разделы недоступные пользователю не передаются)
 * @summary Получение меню
 */
export const getGetMenuUrl = () => {


  

  return `/menu`
}

export const getMenu = async ( options?: RequestInit): Promise<MenuResponse0> => {
  
  const res = await fetch(getGetMenuUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: MenuResponse0 = body ? JSON.parse(body) : {}

  return data
}


