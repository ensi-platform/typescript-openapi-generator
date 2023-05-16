import { CommonResponse } from "@api/common/types";
import { EmptyDataResponse } from "@api/commonTypes/index";
import { ErrorResponse } from "@api/commonTypes/errors";



export type LogoutResponse = EmptyDataResponse | ErrorResponse;
export interface LoginRequest {
  /**
   * Логин
   */
  login?: string;
  /**
   * Пароль
   */
  password?: string;
}

export type LoginResponse = ErrorResponse;
export interface RefreshRequest {
  /**
   * Refresh token
   */
  refresh_token?: string;
}

export type RefreshResponse = ErrorResponse;


        export type GetCurrentUserResponseData = {
  /**
   * Идентификатор admin-пользователя
   */
  id?: number;
  /**
   * Полное ФИО
   */
  full_name?: string;
  /**
   * Сокращенное ФИО
   */
  short_name?: string;
  /**
   * Активен
   */
  active?: boolean;
  /**
   * Логин
   */
  login?: string;
  /**
   * Фамилия
   */
  last_name?: string | null;
  /**
   * Имя
   */
  first_name?: string | null;
  /**
   * Отчество
   */
  middle_name?: string | null;
  /**
   * Email
   */
  email?: string;
  /**
   * Телефон
   */
  phone?: string;
  /**
   * Роли пользователя
   */
  roles?: number[];
  /**
   * Права пользователя
   */
  rights_access?: (
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 120
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 301
    | 302
    | 303
    | 304
    | 305
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 407
    | 408
    | 409
    | 410
    | 411
    | 412
    | 413
    | 415
    | 416
    | 417
    | 501
    | 502
    | 503
    | 504
    | 505
    | 506
    | 507
    | 508
    | 601
    | 602
    | 603
    | 604
    | 605
    | 606
    | 607
    | 701
    | 702
    | 703
    | 704
    | 705
    | 706
    | 707
    | 801
    | 802
    | 803
    | 804
    | 805
    | 806
    | 901
    | 902
    | 903
    | 904
    | 905
    | 906
    | 1001
    | 1002
    | 1003
    | 1004
    | 1005
    | 1006
    | 1101
    | 1102
    | 1103
    | 1104
    | 1105
    | 1106
    | 1201
    | 1301
    | 1302
    | 1303
    | 1304
    | 1305
    | 1306
    | 1311
    | 1312
    | 1313
    | 1314
    | 1315
    | 1601
    | 1602
    | 1603
    | 1604
    | 1605
  )[];
};

        export type GetCurrentUserResponseMeta = {};

        export type GetCurrentUserResponse = CommonResponse<GetCurrentUserResponseData, GetCurrentUserResponseMeta>;
        