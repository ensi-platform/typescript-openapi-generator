import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { SearchStatusesRequest, SearchStatusesResponse, CreateStatusRequest, CreateStatusResponse, PatchStatusRequest, PatchStatusResponse, DeleteStatusRequest, DeleteStatusResponse, SearchThemesRequest, SearchThemesResponse, CreateThemeRequest, CreateThemeResponse, PatchThemeRequest, PatchThemeResponse, DeleteThemeRequest, DeleteThemeResponse, SearchTypesRequest, SearchTypesResponse, CreateTypeRequest, CreateTypeResponse, PatchTypeRequest, PatchTypeResponse, DeleteTypeRequest, DeleteTypeResponse, SearchMessagesRequest, SearchMessagesResponse, CreateMessageRequest, CreateMessageResponse, SearchNotificationsRequest, SearchNotificationsResponse, CreateNotificationRequest, CreateNotificationResponse, PatchNotificationRequest, PatchNotificationResponse, DeleteNotificationRequest, DeleteNotificationResponse, CreateBroadcastRequest, CreateBroadcastResponse, FileUploadRequest, FileUploadResponse, FileDeleteRequest, FileDeleteResponse, SearchChannelsRequest, SearchChannelsResponse, CreateChannelRequest, CreateChannelResponse, PatchChannelRequest, PatchChannelResponse, DeleteChannelRequest, DeleteChannelResponse, SearchChatsRequest, SearchChatsResponse, CreateChatRequest, CreateChatResponse, PatchChatRequest, PatchChatResponse } from "./types";

export const QueryKeys = {
    searchStatuses: (data?: any) => data ? ['search-statuses', data] : ['search-statuses'],
    searchThemes: (data?: any) => data ? ['search-themes', data] : ['search-themes'],
    searchTypes: (data?: any) => data ? ['search-types', data] : ['search-types'],
    searchMessages: (data?: any) => data ? ['search-messages', data] : ['search-messages'],
    searchNotifications: (data?: any) => data ? ['search-notifications', data] : ['search-notifications'],
    searchChannels: (data?: any) => data ? ['search-channels', data] : ['search-channels'],
    searchChats: (data?: any) => data ? ['search-chats', data] : ['search-chats'],
}
    ;

/** Поиск статусов */
export function useSearchStatuses(data: SearchStatusesRequest, enabled = true) {
    return useQuery<SearchStatusesResponse, FetchError>({
        queryKey: QueryKeys.searchStatuses(data),
        queryFn: () => apiClient.post(`/communication/statuses:search`, { data }),
        enabled,
    });
}

/** Создание статуса */
export function useCreateStatus() {
    return useMutation<CreateStatusResponse, FetchError, CreateStatusRequest>(
        (data) => apiClient.post(`/communication/statuses`, { data }),
    );
}

/** Обновление данных статуса */
export function usePatchStatus() {
    const queryClient = useQueryClient();

    return useMutation<PatchStatusResponse, FetchError, { id: number | string; } & PatchStatusRequest>(
        ({ id, ...data }) => apiClient.patch(`/communication/statuses/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchStatuses());

            },
        }
    );
}

/** Удаление статуса */
export function useDeleteStatus() {
    const queryClient = useQueryClient();

    return useMutation<DeleteStatusResponse, FetchError, DeleteStatusRequest>(
        ({ id, }) => apiClient.delete(`/communication/statuses/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchStatuses());

            },
        }
    );
}

/** Поиск тем */
export function useSearchThemes(data: SearchThemesRequest, enabled = true) {
    return useQuery<SearchThemesResponse, FetchError>({
        queryKey: QueryKeys.searchThemes(data),
        queryFn: () => apiClient.post(`/communication/themes:search`, { data }),
        enabled,
    });
}

/** Создание темы */
export function useCreateTheme() {
    return useMutation<CreateThemeResponse, FetchError, CreateThemeRequest>(
        (data) => apiClient.post(`/communication/themes`, { data }),
    );
}

/** Обновление данных темы */
export function usePatchTheme() {
    const queryClient = useQueryClient();

    return useMutation<PatchThemeResponse, FetchError, { id: number | string; } & PatchThemeRequest>(
        ({ id, ...data }) => apiClient.patch(`/communication/themes/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchThemes());

            },
        }
    );
}

/** Удаление темы */
export function useDeleteTheme() {
    const queryClient = useQueryClient();

    return useMutation<DeleteThemeResponse, FetchError, DeleteThemeRequest>(
        ({ id, }) => apiClient.delete(`/communication/themes/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchThemes());

            },
        }
    );
}

/** Поиск типов */
export function useSearchTypes(data: SearchTypesRequest, enabled = true) {
    return useQuery<SearchTypesResponse, FetchError>({
        queryKey: QueryKeys.searchTypes(data),
        queryFn: () => apiClient.post(`/communication/types:search`, { data }),
        enabled,
    });
}

/** Создание типа */
export function useCreateType() {
    return useMutation<CreateTypeResponse, FetchError, CreateTypeRequest>(
        (data) => apiClient.post(`/communication/types`, { data }),
    );
}

/** Обновление данных типа */
export function usePatchType() {
    const queryClient = useQueryClient();

    return useMutation<PatchTypeResponse, FetchError, { id: number | string; } & PatchTypeRequest>(
        ({ id, ...data }) => apiClient.patch(`/communication/types/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchTypes());

            },
        }
    );
}

/** Удаление типа */
export function useDeleteType() {
    const queryClient = useQueryClient();

    return useMutation<DeleteTypeResponse, FetchError, DeleteTypeRequest>(
        ({ id, }) => apiClient.delete(`/communication/types/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchTypes());

            },
        }
    );
}

/** Поиск сообщений */
export function useSearchMessages(data: SearchMessagesRequest, enabled = true) {
    return useQuery<SearchMessagesResponse, FetchError>({
        queryKey: QueryKeys.searchMessages(data),
        queryFn: () => apiClient.post(`/communication/messages:search`, { data }),
        enabled,
    });
}

/** Создание сообщения */
export function useCreateMessage() {
    return useMutation<CreateMessageResponse, FetchError, CreateMessageRequest>(
        (data) => apiClient.post(`/communication/messages`, { data }),
    );
}

/** Поиск уведомлений */
export function useSearchNotifications(data: SearchNotificationsRequest, enabled = true) {
    return useQuery<SearchNotificationsResponse, FetchError>({
        queryKey: QueryKeys.searchNotifications(data),
        queryFn: () => apiClient.post(`/communication/notifications:search`, { data }),
        enabled,
    });
}

/** Создание уведомления */
export function useCreateNotification() {
    return useMutation<CreateNotificationResponse, FetchError, CreateNotificationRequest>(
        (data) => apiClient.post(`/communication/notifications`, { data }),
    );
}

/** Обновление данных уведомления */
export function usePatchNotification() {
    const queryClient = useQueryClient();

    return useMutation<PatchNotificationResponse, FetchError, { id: number | string; } & PatchNotificationRequest>(
        ({ id, ...data }) => apiClient.patch(`/communication/notifications/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchNotifications());

            },
        }
    );
}

/** Удаление уведомления */
export function useDeleteNotification() {
    const queryClient = useQueryClient();

    return useMutation<DeleteNotificationResponse, FetchError, DeleteNotificationRequest>(
        ({ id, }) => apiClient.delete(`/communication/notifications/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchNotifications());

            },
        }
    );
}

/** Создание рассылки */
export function useCreateBroadcast() {
    return useMutation<CreateBroadcastResponse, FetchError, CreateBroadcastRequest>(
        (data) => apiClient.post(`/communication/broadcasts`, { data }),
    );
}

/** Загрузка файла */
export function useFileUpload() {
    return useMutation<FileUploadResponse, FetchError, FileUploadRequest>(
        (data) => apiClient.post(`/communication/file-upload`, { data: data.formData }),
    );
}

/** Удаление файлов */
export function useFileDelete() {
    return useMutation<FileDeleteResponse, FetchError, FileDeleteRequest>(
        (data) => apiClient.post(`/communication/file-delete`, { data }),
    );
}

/** Поиск каналов */
export function useSearchChannels(data: SearchChannelsRequest, enabled = true) {
    return useQuery<SearchChannelsResponse, FetchError>({
        queryKey: QueryKeys.searchChannels(data),
        queryFn: () => apiClient.post(`/communication/channels:search`, { data }),
        enabled,
    });
}

/** Создание канала */
export function useCreateChannel() {
    return useMutation<CreateChannelResponse, FetchError, CreateChannelRequest>(
        (data) => apiClient.post(`/communication/channels`, { data }),
    );
}

/** Обновление данных канала */
export function usePatchChannel() {
    const queryClient = useQueryClient();

    return useMutation<PatchChannelResponse, FetchError, { id: number | string; } & PatchChannelRequest>(
        ({ id, ...data }) => apiClient.patch(`/communication/channels/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchChannels());

            },
        }
    );
}

/** Удаление канала */
export function useDeleteChannel() {
    const queryClient = useQueryClient();

    return useMutation<DeleteChannelResponse, FetchError, DeleteChannelRequest>(
        ({ id, }) => apiClient.delete(`/communication/channels/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchChannels());

            },
        }
    );
}

/** Поиск чатов */
export function useSearchChats(data: SearchChatsRequest, enabled = true) {
    return useQuery<SearchChatsResponse, FetchError>({
        queryKey: QueryKeys.searchChats(data),
        queryFn: () => apiClient.post(`/communication/chats:search`, { data }),
        enabled,
    });
}

/** Создание чата */
export function useCreateChat() {
    return useMutation<CreateChatResponse, FetchError, CreateChatRequest>(
        (data) => apiClient.post(`/communication/chats`, { data }),
    );
}

/** Обновление данных чата */
export function usePatchChat() {
    const queryClient = useQueryClient();

    return useMutation<PatchChatResponse, FetchError, { id: number | string; } & PatchChatRequest>(
        ({ id, ...data }) => apiClient.patch(`/communication/chats/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchChats());

            },
        }
    );
}
