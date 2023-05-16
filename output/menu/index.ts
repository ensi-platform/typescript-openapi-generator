import { useMutation, useQuery } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { GetMenuResponse } from "./types";

export const QueryKeys = {
    getMenu: () => ['get-menu'],
}
    ;

/** Получение меню (разделы недоступные пользователю не передаются) */
export function useMenu(enabled = true) {
    return useQuery<GetMenuResponse, FetchError>({
        queryKey: QueryKeys.getMenu(),
        queryFn: () => apiClient.get(`/menu`, {}),
        enabled,
    });
}
