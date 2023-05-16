import { useMutation, useQuery } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { LoginRequest, LoginResponse, LogoutResponse, RefreshRequest, RefreshResponse, GetCurrentUserResponse } from "./types";

export const QueryKeys = {
    getCurrentUser: () => ['get-current-user'],
}
    ;

/** Вход в систему по логину/паролю */
export function useLogin() {
    return useMutation<LoginResponse, FetchError, LoginRequest>(
        (data) => apiClient.post(`/auth/login`, { data }),
    );
}

/** Выход из системы */
export function useLogout(enabled = true) {
    return useQuery<LogoutResponse, FetchError>({

        queryFn: () => apiClient.get(`/auth/logout`, {}),
        enabled,
    });
}

/** Повторная авторизация в системе */
export function useRefresh() {
    return useMutation<RefreshResponse, FetchError, RefreshRequest>(
        (data) => apiClient.post(`/auth/refresh`, { data }),
    );
}

/** Получить текущего пользователя */
export function useCurrentUser(enabled = true) {
    return useQuery<GetCurrentUserResponse, FetchError>({
        queryKey: QueryKeys.getCurrentUser(),
        queryFn: () => apiClient.get(`/auth/current-user`, {}),
        enabled,
    });
}
