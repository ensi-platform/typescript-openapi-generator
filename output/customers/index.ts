import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { GetCustomerMetaResponse, SearchCustomersRequest, SearchCustomersResponse, SearchCustomerEnumValuesRequest, SearchCustomerEnumValuesResponse, CreateCustomerRequest, CreateCustomerResponse, GetCustomerResponse, ReplaceCustomerRequest, ReplaceCustomerResponse, DeleteCustomerRequest, DeleteCustomerResponse, DeleteCustomerPersonalDataRequest, DeleteCustomerPersonalDataResponse, UploadCustomerAvatarRequest, UploadCustomerAvatarResponse, DeleteCustomerAvatarRequest, DeleteCustomerAvatarResponse, SearchCustomerUsersRequest, SearchCustomerUsersResponse, SearchCustomerUserEnumValuesRequest, SearchCustomerUserEnumValuesResponse, SearchOneCustomerUserRequest, SearchOneCustomerUserResponse, CreateCustomerUserRequest, CreateCustomerUserResponse, GetCustomerUserResponse, PatchCustomerUserRequest, PatchCustomerUserResponse, DeleteCustomerUserRequest, DeleteCustomerUserResponse, CustomerUserRefreshPasswordTokenRequest, CustomerUserRefreshPasswordTokenResponse, SearchCustomerAddressesRequest, SearchCustomerAddressesResponse, CreateCustomerAddressRequest, CreateCustomerAddressResponse, GetCustomerAddressResponse, ReplaceCustomerAddressRequest, ReplaceCustomerAddressResponse, DeleteCustomerAddressRequest, DeleteCustomerAddressResponse, SetCustomerAddressesAsDefaultRequest, SetCustomerAddressesAsDefaultResponse, SearchCustomerStatusesRequest, SearchCustomerStatusesResponse, SearchCustomerStatusEnumValuesRequest, SearchCustomerStatusEnumValuesResponse, CreateCustomerStatusRequest, CreateCustomerStatusResponse, GetCustomerStatusResponse, PatchCustomerStatusRequest, PatchCustomerStatusResponse, DeleteCustomerStatusRequest, DeleteCustomerStatusResponse, SearchCustomerAttributesRequest, SearchCustomerAttributesResponse, CreateCustomerAttributeRequest, CreateCustomerAttributeResponse, GetCustomerAttributeResponse, PatchCustomerAttributeRequest, PatchCustomerAttributeResponse, DeleteCustomerAttributeRequest, DeleteCustomerAttributeResponse, SearchCustomerFavoriteRequest, SearchCustomerFavoriteResponse, CreateCustomerFavoriteRequest, CreateCustomerFavoriteResponse, DeleteProductFromCustomerFavoritesRequest, DeleteProductFromCustomerFavoritesResponse, ClearCustomerFavoritesRequest, ClearCustomerFavoritesResponse, SearchCustomersInfoRequest, SearchCustomersInfoResponse, CreateCustomersInfoRequest, CreateCustomersInfoResponse, GetCustomersInfoResponse, PatchCustomersInfoRequest, PatchCustomersInfoResponse, DeleteCustomersInfoRequest, DeleteCustomersInfoResponse, SearchCustomersBonusOperationsRequest, SearchCustomersBonusOperationsResponse, CreateCustomersBonusOperationsRequest, CreateCustomersBonusOperationsResponse, GetBonusOperationResponse, PatchBonusOperationRequest, PatchBonusOperationResponse, DeleteBonusOperationRequest, DeleteBonusOperationResponse, SearchCustomerProductSubscribesRequest, SearchCustomerProductSubscribesResponse, CreateCustomerProductSubscribesRequest, CreateCustomerProductSubscribesResponse, DeleteProductFromProductSubscribesRequest, DeleteProductFromProductSubscribesResponse, ClearCustomerProductSubscribesRequest, ClearCustomerProductSubscribesResponse, SearchCustomerPreferencesRequest, SearchCustomerPreferencesResponse, GetCustomerOrderMetaResponse } from "./types";

export const QueryKeys = {
    getCustomerMeta: () => ['get-customer-meta'],
    searchCustomers: (data?: any) => data ? ['search-customers', data] : ['search-customers'],
    searchCustomerEnumValues: (data?: any) => data ? ['search-customer-enum-values', data] : ['search-customer-enum-values'],
    getCustomer: (id?: number | string) => id ? ['get-customer', id] : ['get-customer'],
    searchCustomerUsers: (data?: any) => data ? ['search-customer-users', data] : ['search-customer-users'],
    searchCustomerUserEnumValues: (data?: any) => data ? ['search-customer-user-enum-values', data] : ['search-customer-user-enum-values'],
    searchOneCustomerUser: (data?: any) => data ? ['search-one-customer-user', data] : ['search-one-customer-user'],
    getCustomerUser: (id?: number | string) => id ? ['get-customer-user', id] : ['get-customer-user'],
    searchCustomerAddresses: (data?: any) => data ? ['search-customer-addresses', data] : ['search-customer-addresses'],
    getCustomerAddress: (id?: number | string) => id ? ['get-customer-address', id] : ['get-customer-address'],
    searchCustomerStatuses: (data?: any) => data ? ['search-customer-statuses', data] : ['search-customer-statuses'],
    searchCustomerStatusEnumValues: (data?: any) => data ? ['search-customer-status-enum-values', data] : ['search-customer-status-enum-values'],
    getCustomerStatus: (id?: number | string) => id ? ['get-customer-status', id] : ['get-customer-status'],
    searchCustomerAttributes: (data?: any) => data ? ['search-customer-attributes', data] : ['search-customer-attributes'],
    getCustomerAttribute: (id?: number | string) => id ? ['get-customer-attribute', id] : ['get-customer-attribute'],
    searchCustomerFavorite: (data?: any) => data ? ['search-customer-favorite', data] : ['search-customer-favorite'],
    searchCustomersInfo: (data?: any) => data ? ['search-customers-info', data] : ['search-customers-info'],
    getCustomersInfo: (id?: number | string) => id ? ['get-customers-info', id] : ['get-customers-info'],
    searchCustomersBonusOperations: (data?: any) => data ? ['search-customers-bonus-operations', data] : ['search-customers-bonus-operations'],
    getBonusOperation: (id?: number | string) => id ? ['get-bonus-operation', id] : ['get-bonus-operation'],
    searchCustomerProductSubscribes: (data?: any) => data ? ['search-customer-product-subscribes', data] : ['search-customer-product-subscribes'],
    searchCustomerPreferences: (data?: any) => data ? ['search-customer-preferences', data] : ['search-customer-preferences'],
    getCustomerOrderMeta: () => ['get-customer-order-meta'],
}
    ;

/** Получение списка доступных полей */
export function useCustomerMeta(enabled = true) {
    return useQuery<GetCustomerMetaResponse, FetchError>({
        queryKey: QueryKeys.getCustomerMeta(),
        queryFn: () => apiClient.get(`/customers/customers:meta`, {}),
        enabled,
    });
}

/** Поиск клиентов, удовлетворяющих фильтру */
export function useSearchCustomers(data: SearchCustomersRequest, enabled = true) {
    return useQuery<SearchCustomersResponse, FetchError>({
        queryKey: QueryKeys.searchCustomers(data),
        queryFn: () => apiClient.post(`/customers/customers:search`, { data }),
        enabled,
    });
}

/** Поиск покупателей для справочника */
export function useSearchCustomerEnumValues(data: SearchCustomerEnumValuesRequest, enabled = true) {
    return useQuery<SearchCustomerEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerEnumValues(data),
        queryFn: () => apiClient.post(`/customers/customer-enum-values:search`, { data }),
        enabled,
    });
}

/** Запрос на создание нового клиента */
export function useCreateCustomer() {
    return useMutation<CreateCustomerResponse, FetchError, CreateCustomerRequest>(
        (data) => apiClient.post(`/customers/customers`, { data }),
    );
}

/** Запрос на получение клиента */
export function useCustomer({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetCustomerResponse, FetchError>({
        queryKey: QueryKeys.getCustomer(id),
        queryFn: () => apiClient.get(`/customers/customers/${id}`, { params }),
        enabled,
    });
}

/** Запрос на обновление клиента */
export function useReplaceCustomer() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceCustomerResponse, FetchError, { id: number | string; } & ReplaceCustomerRequest>(
        ({ id, ...data }) => apiClient.put(`/customers/customers/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomers());

                queryClient.invalidateQueries(QueryKeys.getCustomer(data?.id));

            },
        }
    );
}

/** Запрос на удаление клиента */
export function useDeleteCustomer() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomerResponse, FetchError, DeleteCustomerRequest>(
        ({ id, }) => apiClient.delete(`/customers/customers/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomers());

                queryClient.invalidateQueries(QueryKeys.getCustomer(data?.id));

            },
        }
    );
}

/** Запрос на удаление персональных данных клиента */
export function useDeleteCustomerPersonalData() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomerPersonalDataResponse, FetchError, DeleteCustomerPersonalDataRequest>(
        ({ id, }) => apiClient.post(`/customers/customers/${id}:delete-personal-data`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomers());

                queryClient.invalidateQueries(QueryKeys.getCustomer(data?.id));

            },
        }
    );
}

/** Загрузка файла с аватаром покупателя */
export function useUploadCustomerAvatar() {
    const queryClient = useQueryClient();

    return useMutation<UploadCustomerAvatarResponse, FetchError, { id: number | string; } & UploadCustomerAvatarRequest>(
        ({ id, ...data }) => apiClient.post(`/customers/customers/${id}:upload-avatar`, { data: data.formData }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomers());

                queryClient.invalidateQueries(QueryKeys.getCustomer(data?.id));

            },
        }
    );
}

/** Удаление аватара покупателя из базы и файловой системы */
export function useDeleteCustomerAvatar() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomerAvatarResponse, FetchError, DeleteCustomerAvatarRequest>(
        ({ id, }) => apiClient.post(`/customers/customers/${id}:delete-avatar`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomers());

                queryClient.invalidateQueries(QueryKeys.getCustomer(data?.id));

            },
        }
    );
}

/** Запрос на поиск User, удовлетворяющих фильтру */
export function useSearchCustomerUsers(data: SearchCustomerUsersRequest, enabled = true) {
    return useQuery<SearchCustomerUsersResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerUsers(data),
        queryFn: () => apiClient.post(`/customers/users:search`, { data }),
        enabled,
    });
}

/** Поиск пользователей для справочника */
export function useSearchCustomerUserEnumValues(data: SearchCustomerUserEnumValuesRequest, enabled = true) {
    return useQuery<SearchCustomerUserEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerUserEnumValues(data),
        queryFn: () => apiClient.post(`/customers/users-enum-values:search`, { data }),
        enabled,
    });
}

/** Запрос на поиск одного User, удовлетворяющих фильтру */
export function useSearchOneCustomerUser(data: SearchOneCustomerUserRequest, enabled = true) {
    return useQuery<SearchOneCustomerUserResponse, FetchError>({
        queryKey: QueryKeys.searchOneCustomerUser(data),
        queryFn: () => apiClient.post(`/customers/users:search-one`, { data }),
        enabled,
    });
}

/** Запрос на создание нового пользователя */
export function useCreateCustomerUser() {
    return useMutation<CreateCustomerUserResponse, FetchError, CreateCustomerUserRequest>(
        (data) => apiClient.post(`/customers/users`, { data }),
    );
}

/** Запрос на получение пользователя по id */
export function useCustomerUser({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetCustomerUserResponse, FetchError>({
        queryKey: QueryKeys.getCustomerUser(id),
        queryFn: () => apiClient.get(`/customers/users/${id}`, { params }),
        enabled,
    });
}

/** Запрос на обновления части полей пользователя */
export function usePatchCustomerUser() {
    const queryClient = useQueryClient();

    return useMutation<PatchCustomerUserResponse, FetchError, { id: number | string; } & PatchCustomerUserRequest>(
        ({ id, ...data }) => apiClient.patch(`/customers/users/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerUsers());

                queryClient.invalidateQueries(QueryKeys.searchOneCustomerUser(data));

                queryClient.invalidateQueries(QueryKeys.getCustomerUser(data?.id));

            },
        }
    );
}

/** Запрос на удаление пользователя */
export function useDeleteCustomerUser() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomerUserResponse, FetchError, DeleteCustomerUserRequest>(
        ({ id, }) => apiClient.delete(`/customers/users/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerUsers());

                queryClient.invalidateQueries(QueryKeys.searchOneCustomerUser(data));

                queryClient.invalidateQueries(QueryKeys.getCustomerUser(data?.id));

            },
        }
    );
}

/** Обновить токен для установки пароля у customer user */
export function useCustomerUserRefreshPasswordToken() {
    const queryClient = useQueryClient();

    return useMutation<CustomerUserRefreshPasswordTokenResponse, FetchError, CustomerUserRefreshPasswordTokenRequest>(
        ({ id, }) => apiClient.post(`/customers/users/${id}:refresh-password-token`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerUsers());

                queryClient.invalidateQueries(QueryKeys.searchOneCustomerUser(data));

                queryClient.invalidateQueries(QueryKeys.getCustomerUser(data?.id));

            },
        }
    );
}

/** Поиск адресов, удовлетворяющих фильтру */
export function useSearchCustomerAddresses(data: SearchCustomerAddressesRequest, enabled = true) {
    return useQuery<SearchCustomerAddressesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerAddresses(data),
        queryFn: () => apiClient.post(`/customers/addresses:search`, { data }),
        enabled,
    });
}

/** Запрос на создание нового адреса клиента */
export function useCreateCustomerAddress() {
    return useMutation<CreateCustomerAddressResponse, FetchError, CreateCustomerAddressRequest>(
        (data) => apiClient.post(`/customers/addresses`, { data }),
    );
}

/** Запрос на получение адреса по id */
export function useCustomerAddress({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetCustomerAddressResponse, FetchError>({
        queryKey: QueryKeys.getCustomerAddress(id),
        queryFn: () => apiClient.get(`/customers/addresses/${id}`, {}),
        enabled,
    });
}

/** Запрос на обновление адресса клиента */
export function useReplaceCustomerAddress() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceCustomerAddressResponse, FetchError, { id: number | string; } & ReplaceCustomerAddressRequest>(
        ({ id, ...data }) => apiClient.put(`/customers/addresses/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerAddresses());

                queryClient.invalidateQueries(QueryKeys.getCustomerAddress(data?.id));

            },
        }
    );
}

/** Запрос на удаление адреса клиента */
export function useDeleteCustomerAddress() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomerAddressResponse, FetchError, DeleteCustomerAddressRequest>(
        ({ id, }) => apiClient.delete(`/customers/addresses/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerAddresses());

                queryClient.invalidateQueries(QueryKeys.getCustomerAddress(data?.id));

            },
        }
    );
}

/** Запрос на установку адреса по-умолчанию */
export function useSetCustomerAddressesAsDefault() {
    const queryClient = useQueryClient();

    return useMutation<SetCustomerAddressesAsDefaultResponse, FetchError, SetCustomerAddressesAsDefaultRequest>(
        ({ id, }) => apiClient.post(`/customers/addresses/${id}:set-as-default`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerAddresses());

                queryClient.invalidateQueries(QueryKeys.getCustomerAddress(data?.id));

            },
        }
    );
}

/** Поиск статусов, удовлетворяющих фильтру */
export function useSearchCustomerStatuses(data: SearchCustomerStatusesRequest, enabled = true) {
    return useQuery<SearchCustomerStatusesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerStatuses(data),
        queryFn: () => apiClient.post(`/customers/statuses:search`, { data }),
        enabled,
    });
}

/** Поиск клиентского статуса для справочника */
export function useSearchCustomerStatusEnumValues(data: SearchCustomerStatusEnumValuesRequest, enabled = true) {
    return useQuery<SearchCustomerStatusEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerStatusEnumValues(data),
        queryFn: () => apiClient.post(`/customers/statuses-enum-values:search`, { data }),
        enabled,
    });
}

/** Запрос на создание нового клиентского статуса */
export function useCreateCustomerStatus() {
    return useMutation<CreateCustomerStatusResponse, FetchError, CreateCustomerStatusRequest>(
        (data) => apiClient.post(`/customers/statuses`, { data }),
    );
}

/** Запрос на получение статуса по id */
export function useCustomerStatus({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetCustomerStatusResponse, FetchError>({
        queryKey: QueryKeys.getCustomerStatus(id),
        queryFn: () => apiClient.get(`/customers/statuses/${id}`, {}),
        enabled,
    });
}

/** Запрос на обновление клиентского статуса */
export function usePatchCustomerStatus() {
    const queryClient = useQueryClient();

    return useMutation<PatchCustomerStatusResponse, FetchError, { id: number | string; } & PatchCustomerStatusRequest>(
        ({ id, ...data }) => apiClient.patch(`/customers/statuses/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerStatuses());

                queryClient.invalidateQueries(QueryKeys.getCustomerStatus(data?.id));

            },
        }
    );
}

/** Запрос на удаление клиентского статуса */
export function useDeleteCustomerStatus() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomerStatusResponse, FetchError, DeleteCustomerStatusRequest>(
        ({ id, }) => apiClient.delete(`/customers/statuses/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerStatuses());

                queryClient.invalidateQueries(QueryKeys.getCustomerStatus(data?.id));

            },
        }
    );
}

/** Поиск атрибутов, удовлетворяющих фильтру */
export function useSearchCustomerAttributes(data: SearchCustomerAttributesRequest, enabled = true) {
    return useQuery<SearchCustomerAttributesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerAttributes(data),
        queryFn: () => apiClient.post(`/customers/attributes:search`, { data }),
        enabled,
    });
}

/** Запрос на создание нового клиентского атрибута */
export function useCreateCustomerAttribute() {
    return useMutation<CreateCustomerAttributeResponse, FetchError, CreateCustomerAttributeRequest>(
        (data) => apiClient.post(`/customers/attributes`, { data }),
    );
}

/** Запрос на получение атрибута по id */
export function useCustomerAttribute({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetCustomerAttributeResponse, FetchError>({
        queryKey: QueryKeys.getCustomerAttribute(id),
        queryFn: () => apiClient.get(`/customers/attributes/${id}`, {}),
        enabled,
    });
}

/** Запрос на обновление клиентского атрибута */
export function usePatchCustomerAttribute() {
    const queryClient = useQueryClient();

    return useMutation<PatchCustomerAttributeResponse, FetchError, { id: number | string; } & PatchCustomerAttributeRequest>(
        ({ id, ...data }) => apiClient.patch(`/customers/attributes/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerAttributes());

                queryClient.invalidateQueries(QueryKeys.getCustomerAttribute(data?.id));

            },
        }
    );
}

/** Запрос на удаление клиентского атрибута */
export function useDeleteCustomerAttribute() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomerAttributeResponse, FetchError, DeleteCustomerAttributeRequest>(
        ({ id, }) => apiClient.delete(`/customers/attributes/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomerAttributes());

                queryClient.invalidateQueries(QueryKeys.getCustomerAttribute(data?.id));

            },
        }
    );
}

/** Поиск избранного */
export function useSearchCustomerFavorite(data: SearchCustomerFavoriteRequest, enabled = true) {
    return useQuery<SearchCustomerFavoriteResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerFavorite(data),
        queryFn: () => apiClient.post(`/customers/favorites:search`, { data }),
        enabled,
    });
}

/** Создание избранного товара в списке избранного клиента */
export function useCreateCustomerFavorite() {
    return useMutation<CreateCustomerFavoriteResponse, FetchError, CreateCustomerFavoriteRequest>(
        (data) => apiClient.post(`/customers/favorites`, { data }),
    );
}

/** Удаление товара из списка избранного клиента */
export function useDeleteProductFromCustomerFavorites() {
    return useMutation<DeleteProductFromCustomerFavoritesResponse, FetchError, DeleteProductFromCustomerFavoritesRequest>(
        (data) => apiClient.post(`/customers/favorites:delete-product`, { data }),
    );
}

/** Удаление всех товаров из списка избранного клиента */
export function useClearCustomerFavorites() {
    return useMutation<ClearCustomerFavoritesResponse, FetchError, ClearCustomerFavoritesRequest>(
        (data) => apiClient.post(`/customers/favorites:clear`, { data }),
    );
}

/** Поиск crm информации клиента */
export function useSearchCustomersInfo(data: SearchCustomersInfoRequest, enabled = true) {
    return useQuery<SearchCustomersInfoResponse, FetchError>({
        queryKey: QueryKeys.searchCustomersInfo(data),
        queryFn: () => apiClient.post(`/customers/customers-info:search`, { data }),
        enabled,
    });
}

/** Создание crm информации клиента */
export function useCreateCustomersInfo() {
    return useMutation<CreateCustomersInfoResponse, FetchError, CreateCustomersInfoRequest>(
        (data) => apiClient.post(`/customers/customers-info`, { data }),
    );
}

/** Запрос на получение crm информации клиента по id */
export function useCustomersInfo({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetCustomersInfoResponse, FetchError>({
        queryKey: QueryKeys.getCustomersInfo(id),
        queryFn: () => apiClient.get(`/customers/customers-info/${id}`, {}),
        enabled,
    });
}

/** Запрос на обновление crm информации клиента */
export function usePatchCustomersInfo() {
    const queryClient = useQueryClient();

    return useMutation<PatchCustomersInfoResponse, FetchError, { id: number | string; } & PatchCustomersInfoRequest>(
        ({ id, ...data }) => apiClient.patch(`/customers/customers-info/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomersInfo());

                queryClient.invalidateQueries(QueryKeys.getCustomersInfo(data?.id));

            },
        }
    );
}

/** Запрос на удаление crm информации клиента */
export function useDeleteCustomersInfo() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCustomersInfoResponse, FetchError, DeleteCustomersInfoRequest>(
        ({ id, }) => apiClient.delete(`/customers/customers-info/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomersInfo());

                queryClient.invalidateQueries(QueryKeys.getCustomersInfo(data?.id));

            },
        }
    );
}

/** Поиск бонусных операций клиента */
export function useSearchCustomersBonusOperations(data: SearchCustomersBonusOperationsRequest, enabled = true) {
    return useQuery<SearchCustomersBonusOperationsResponse, FetchError>({
        queryKey: QueryKeys.searchCustomersBonusOperations(data),
        queryFn: () => apiClient.post(`/customers/bonus-operations:search`, { data }),
        enabled,
    });
}

/** Создание бонусной операций клиента */
export function useCreateCustomersBonusOperations() {
    return useMutation<CreateCustomersBonusOperationsResponse, FetchError, CreateCustomersBonusOperationsRequest>(
        (data) => apiClient.post(`/customers/bonus-operations`, { data }),
    );
}

/** Получение  бонусной операций клиента по id */
export function useBonusOperation({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetBonusOperationResponse, FetchError>({
        queryKey: QueryKeys.getBonusOperation(id),
        queryFn: () => apiClient.get(`/customers/bonus-operations/${id}`, {}),
        enabled,
    });
}

/** Обновление бонусной операций клиента */
export function usePatchBonusOperation() {
    const queryClient = useQueryClient();

    return useMutation<PatchBonusOperationResponse, FetchError, { id: number | string; } & PatchBonusOperationRequest>(
        ({ id, ...data }) => apiClient.patch(`/customers/bonus-operations/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomersBonusOperations());

                queryClient.invalidateQueries(QueryKeys.getBonusOperation(data?.id));

            },
        }
    );
}

/** Удаление бонусной операций клиента */
export function useDeleteBonusOperation() {
    const queryClient = useQueryClient();

    return useMutation<DeleteBonusOperationResponse, FetchError, DeleteBonusOperationRequest>(
        ({ id, }) => apiClient.delete(`/customers/bonus-operations/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCustomersBonusOperations());

                queryClient.invalidateQueries(QueryKeys.getBonusOperation(data?.id));

            },
        }
    );
}

/** Поиск подписок на товары */
export function useSearchCustomerProductSubscribes(data: SearchCustomerProductSubscribesRequest, enabled = true) {
    return useQuery<SearchCustomerProductSubscribesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerProductSubscribes(data),
        queryFn: () => apiClient.post(`/customers/product-subscribes:search`, { data }),
        enabled,
    });
}

/** Создание подписки клиента на товар */
export function useCreateCustomerProductSubscribes() {
    return useMutation<CreateCustomerProductSubscribesResponse, FetchError, CreateCustomerProductSubscribesRequest>(
        (data) => apiClient.post(`/customers/product-subscribes`, { data }),
    );
}

/** Удаление подписки клиента на товара */
export function useDeleteProductFromProductSubscribes() {
    return useMutation<DeleteProductFromProductSubscribesResponse, FetchError, DeleteProductFromProductSubscribesRequest>(
        (data) => apiClient.post(`/customers/product-subscribes:delete-product`, { data }),
    );
}

/** Удаление всех подписок клиента на товары */
export function useClearCustomerProductSubscribes() {
    return useMutation<ClearCustomerProductSubscribesResponse, FetchError, ClearCustomerProductSubscribesRequest>(
        (data) => apiClient.post(`/customers/product-subscribes:clear`, { data }),
    );
}

/** Поиск предпочтений клиента */
export function useSearchCustomerPreferences(data: SearchCustomerPreferencesRequest, enabled = true) {
    return useQuery<SearchCustomerPreferencesResponse, FetchError>({
        queryKey: QueryKeys.searchCustomerPreferences(data),
        queryFn: () => apiClient.post(`/customers/preferences:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useCustomerOrderMeta(enabled = true) {
    return useQuery<GetCustomerOrderMetaResponse, FetchError>({
        queryKey: QueryKeys.getCustomerOrderMeta(),
        queryFn: () => apiClient.get(`/customers/orders:meta`, {}),
        enabled,
    });
}
