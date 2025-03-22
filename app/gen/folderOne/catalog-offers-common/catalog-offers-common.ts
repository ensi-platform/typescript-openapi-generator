/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  EmptyDataResponse
} from '.././models';


/**
 * Start synchronization of offers data
 * @summary Start synchronization of offers data
 */
export const getSyncEntitiesUrl = () => {


  

  return `/catalog/offers/entities:sync`
}

export const syncEntities = async ( options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getSyncEntitiesUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Start synchronization of data objects from master services
 * @summary Start synchronization of data objects from master services
 */
export const getOffersMigrationUrl = () => {


  

  return `/catalog/offers:migrate`
}

export const offersMigration = async ( options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getOffersMigrationUrl(),
  {      
    ...options,
    method: 'POST'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


