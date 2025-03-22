/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  FileProtected
} from '.././models';


/**
 * Скачать приватный файл
 * @summary Скачать приватный файл
 */
export const getDownloadProtectedFileUrl = () => {


  

  return `/common/files/download-protected`
}

export const downloadProtectedFile = async (fileProtected: FileProtected, options?: RequestInit): Promise<Blob> => {
  
  const res = await fetch(getDownloadProtectedFileUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      fileProtected,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: Blob = body ? JSON.parse(body) : {}

  return data
}


