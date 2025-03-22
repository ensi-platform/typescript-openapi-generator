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
export const getEntitiesMigrationFeedsUrl = () => {


  

  return `/catalog/feeds/entities:migrate`
}

export const entitiesMigrationFeeds = async ( options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getEntitiesMigrationFeedsUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


