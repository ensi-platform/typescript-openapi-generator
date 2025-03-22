/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  EmptyDataResponse
} from '.././models';


/**
 * Start synchronization of data objects from master services
 * @summary Start synchronization of data objects from master services
 */
export const getEntitiesMigrationCatalogCacheUrl = () => {


  

  return `/catalog/catalog-cache/entities:migrate`
}

export const entitiesMigrationCatalogCache = async ( options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getEntitiesMigrationCatalogCacheUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


