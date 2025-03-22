/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { CurrentUserResponseData } from './currentUserResponseData';
import type { CurrentUserResponseMeta } from './currentUserResponseMeta';

export interface CurrentUserResponse {
  data: CurrentUserResponseData;
  meta?: CurrentUserResponseMeta;
}
