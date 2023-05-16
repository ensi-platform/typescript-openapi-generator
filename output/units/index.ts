import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { SearchSellersRequest, SearchSellersResponse, CreateSellerRequest, CreateSellerResponse, GetSellerDetailResponse, PatchSellerRequest, PatchSellerResponse, ReplaceSellerRequest, ReplaceSellerResponse, GetSellerDigestResponse, GetSellerStatusesResponse, SearchStoresRequest, SearchStoresResponse, CreateStoreRequest, CreateStoreResponse, GetStoreResponse, PatchStoreRequest, PatchStoreResponse, ReplaceStoreRequest, ReplaceStoreResponse, CreateStoreWorkingRequest, CreateStoreWorkingResponse, PatchStoreWorkingRequest, PatchStoreWorkingResponse, ReplaceStoreWorkingRequest, ReplaceStoreWorkingResponse, CreateStorePickupTimeRequest, CreateStorePickupTimeResponse, PatchStorePickupTimeRequest, PatchStorePickupTimeResponse, ReplaceStorePickupTimeRequest, ReplaceStorePickupTimeResponse, CreateStoreContactRequest, CreateStoreContactResponse, PatchStoreContactRequest, PatchStoreContactResponse, ReplaceStoreContactRequest, ReplaceStoreContactResponse, DeleteStoreContactRequest, DeleteStoreContactResponse, SearchSellerUsersRequest, SearchSellerUsersResponse, CreateSellerUserRequest, CreateSellerUserResponse, GetSellerUserResponse, PatchSellerUserRequest, PatchSellerUserResponse, AddRolesToSellerUserRequest, AddRolesToSellerUserResponse, DeleteRoleFromSellerUserRequest, DeleteRoleFromSellerUserResponse, SearchRoleRequest, SearchRoleResponse, GetAdminUsersMetaResponse, SearchAdminUsersRequest, SearchAdminUsersResponse, SearchAdminUserEnumValuesRequest, SearchAdminUserEnumValuesResponse, CreateAdminUserRequest, CreateAdminUserResponse, GetAdminUserResponse, PatchAdminUserRequest, PatchAdminUserResponse, AddRolesToAdminUserRequest, AddRolesToAdminUserResponse, DeleteRoleFromAdminUserRequest, DeleteRoleFromAdminUserResponse, RefreshPasswordTokenRequest, RefreshPasswordTokenResponse, MassChangeActiveRequest, MassChangeActiveResponse, SetPasswordAdminUserRequest, SetPasswordAdminUserResponse, GetAdminUserRightsAccessResponse, CreateAdminUserRoleRequest, CreateAdminUserRoleResponse, GetAdminUserRoleResponse, PatchAdminUserRoleRequest, PatchAdminUserRoleResponse, DeleteAdminUserRoleRequest, DeleteAdminUserRoleResponse, SearchAdminUserRolesRequest, SearchAdminUserRolesResponse, GetAdminUserRolesMetaResponse } from "./types";

export const QueryKeys = {
    searchSellers: (data?: any) => data ? ['search-sellers', data] : ['search-sellers'],
    getSellerDetail: (id?: number | string) => id ? ['get-seller-detail', id] : ['get-seller-detail'],
    getSellerDigest: (id?: number | string) => id ? ['get-seller-digest', id] : ['get-seller-digest'],
    getSellerStatuses: () => ['get-seller-statuses'],
    searchStores: (data?: any) => data ? ['search-stores', data] : ['search-stores'],
    getStore: (id?: number | string) => id ? ['get-store', id] : ['get-store'],
    searchSellerUsers: (data?: any) => data ? ['search-seller-users', data] : ['search-seller-users'],
    getSellerUser: (id?: number | string) => id ? ['get-seller-user', id] : ['get-seller-user'],
    searchRole: (data?: any) => data ? ['search-role', data] : ['search-role'],
    getAdminUsersMeta: () => ['get-admin-users-meta'],
    searchAdminUsers: (data?: any) => data ? ['search-admin-users', data] : ['search-admin-users'],
    searchAdminUserEnumValues: (data?: any) => data ? ['search-admin-user-enum-values', data] : ['search-admin-user-enum-values'],
    getAdminUser: (id?: number | string) => id ? ['get-admin-user', id] : ['get-admin-user'],
    getAdminUserRightsAccess: () => ['get-admin-user-rights-access'],
    getAdminUserRole: (id?: number | string) => id ? ['get-admin-user-role', id] : ['get-admin-user-role'],
    searchAdminUserRoles: (data?: any) => data ? ['search-admin-user-roles', data] : ['search-admin-user-roles'],
    getAdminUserRolesMeta: () => ['get-admin-user-roles-meta'],
}
    ;

/** Получение объектов типа Seller */
export function useSearchSellers(data: SearchSellersRequest, enabled = true) {
    return useQuery<SearchSellersResponse, FetchError>({
        queryKey: QueryKeys.searchSellers(data),
        queryFn: () => apiClient.post(`/units/sellers:search`, { data }),
        enabled,
    });
}

/** Создание продавца */
export function useCreateSeller() {
    return useMutation<CreateSellerResponse, FetchError, CreateSellerRequest>(
        (data) => apiClient.post(`/units/sellers`, { data }),
    );
}

/** Получение объекта типа Seller */
export function useSellerDetail({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetSellerDetailResponse, FetchError>({
        queryKey: QueryKeys.getSellerDetail(id),
        queryFn: () => apiClient.get(`/units/sellers/${id}`, { params }),
        enabled,
    });
}

/** Частичное изменение объекта типа Seller */
export function usePatchSeller() {
    const queryClient = useQueryClient();

    return useMutation<PatchSellerResponse, FetchError, { id: number | string; } & PatchSellerRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/sellers/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchSellers());

                queryClient.invalidateQueries(QueryKeys.getSellerDetail(data?.id));

            },
        }
    );
}

/** Замена объекта типа Seller */
export function useReplaceSeller() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceSellerResponse, FetchError, { id: number | string; } & ReplaceSellerRequest>(
        ({ id, ...data }) => apiClient.put(`/units/sellers/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchSellers());

                queryClient.invalidateQueries(QueryKeys.getSellerDetail(data?.id));

            },
        }
    );
}

/** Получение объекта типа SellerDigest */
export function useSellerDigest({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetSellerDigestResponse, FetchError>({
        queryKey: QueryKeys.getSellerDigest(id),
        queryFn: () => apiClient.get(`/units/sellers/${id}:digest`, {}),
        enabled,
    });
}

/** Получение объектов типа SellerStatus */
export function useSellerStatuses(enabled = true) {
    return useQuery<GetSellerStatusesResponse, FetchError>({
        queryKey: QueryKeys.getSellerStatuses(),
        queryFn: () => apiClient.get(`/units/sellers/statuses`, {}),
        enabled,
    });
}

/** Получение объектов типа Store */
export function useSearchStores(data: SearchStoresRequest, enabled = true) {
    return useQuery<SearchStoresResponse, FetchError>({
        queryKey: QueryKeys.searchStores(data),
        queryFn: () => apiClient.post(`/units/stores:search`, { data }),
        enabled,
    });
}

/** Создание склада продавца */
export function useCreateStore() {
    return useMutation<CreateStoreResponse, FetchError, CreateStoreRequest>(
        (data) => apiClient.post(`/units/stores`, { data }),
    );
}

/** Получение объекта типа Store */
export function useStore({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetStoreResponse, FetchError>({
        queryKey: QueryKeys.getStore(id),
        queryFn: () => apiClient.get(`/units/stores/${id}`, { params }),
        enabled,
    });
}

/** Частичное изменение объекта типа Store */
export function usePatchStore() {
    const queryClient = useQueryClient();

    return useMutation<PatchStoreResponse, FetchError, { id: number | string; } & PatchStoreRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/stores/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchStores());

                queryClient.invalidateQueries(QueryKeys.getStore(data?.id));

            },
        }
    );
}

/** Замена объекта типа Store */
export function useReplaceStore() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceStoreResponse, FetchError, { id: number | string; } & ReplaceStoreRequest>(
        ({ id, ...data }) => apiClient.put(`/units/stores/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchStores());

                queryClient.invalidateQueries(QueryKeys.getStore(data?.id));

            },
        }
    );
}

/** Создание времени работы склада */
export function useCreateStoreWorking() {
    return useMutation<CreateStoreWorkingResponse, FetchError, CreateStoreWorkingRequest>(
        (data) => apiClient.post(`/units/stores-workings`, { data }),
    );
}

/** Частичное изменение объекта типа StoreWorking */
export function usePatchStoreWorking() {
    return useMutation<PatchStoreWorkingResponse, FetchError, { id: number | string; } & PatchStoreWorkingRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/stores-workings/${id}`, { data }),
    );
}

/** Замена объекта типа StoreWorking */
export function useReplaceStoreWorking() {
    return useMutation<ReplaceStoreWorkingResponse, FetchError, { id: number | string; } & ReplaceStoreWorkingRequest>(
        ({ id, ...data }) => apiClient.put(`/units/stores-workings/${id}`, { data }),
    );
}

/** Создание времени отгрузки со склада */
export function useCreateStorePickupTime() {
    return useMutation<CreateStorePickupTimeResponse, FetchError, CreateStorePickupTimeRequest>(
        (data) => apiClient.post(`/units/stores-pickup-times`, { data }),
    );
}

/** Частичное изменение объекта типа StorePickupTime */
export function usePatchStorePickupTime() {
    return useMutation<PatchStorePickupTimeResponse, FetchError, { id: number | string; } & PatchStorePickupTimeRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/stores-pickup-times/${id}`, { data }),
    );
}

/** Замена объекта типа StorePickupTime */
export function useReplaceStorePickupTime() {
    return useMutation<ReplaceStorePickupTimeResponse, FetchError, { id: number | string; } & ReplaceStorePickupTimeRequest>(
        ({ id, ...data }) => apiClient.put(`/units/stores-pickup-times/${id}`, { data }),
    );
}

/** Создание контактного лица склада */
export function useCreateStoreContact() {
    return useMutation<CreateStoreContactResponse, FetchError, CreateStoreContactRequest>(
        (data) => apiClient.post(`/units/stores-contacts`, { data }),
    );
}

/** Частичное изменение объекта типа StoreContact */
export function usePatchStoreContact() {
    return useMutation<PatchStoreContactResponse, FetchError, { id: number | string; } & PatchStoreContactRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/stores-contacts/${id}`, { data }),
    );
}

/** Замена объекта типа StoreContact */
export function useReplaceStoreContact() {
    return useMutation<ReplaceStoreContactResponse, FetchError, { id: number | string; } & ReplaceStoreContactRequest>(
        ({ id, ...data }) => apiClient.put(`/units/stores-contacts/${id}`, { data }),
    );
}

/** Удаление объекта типа StoreContact */
export function useDeleteStoreContact() {
    return useMutation<DeleteStoreContactResponse, FetchError, DeleteStoreContactRequest>(
        ({ id, }) => apiClient.delete(`/units/stores-contacts/${id}`, {}),
    );
}

/** Получение объектов типа SellerUser */
export function useSearchSellerUsers(data: SearchSellerUsersRequest, enabled = true) {
    return useQuery<SearchSellerUsersResponse, FetchError>({
        queryKey: QueryKeys.searchSellerUsers(data),
        queryFn: () => apiClient.post(`/units/seller-users:search`, { data }),
        enabled,
    });
}

/** Создание пользователя продавца */
export function useCreateSellerUser() {
    return useMutation<CreateSellerUserResponse, FetchError, CreateSellerUserRequest>(
        (data) => apiClient.post(`/units/seller-users`, { data }),
    );
}

/** Получение объекта типа SellerUser */
export function useSellerUser({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetSellerUserResponse, FetchError>({
        queryKey: QueryKeys.getSellerUser(id),
        queryFn: () => apiClient.get(`/units/seller-users/${id}`, { params }),
        enabled,
    });
}

/** Частичное изменение объекта типа SellerUser */
export function usePatchSellerUser() {
    const queryClient = useQueryClient();

    return useMutation<PatchSellerUserResponse, FetchError, { id: number | string; } & PatchSellerUserRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/seller-users/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchSellerUsers());

                queryClient.invalidateQueries(QueryKeys.getSellerUser(data?.id));

            },
        }
    );
}

/** Добавление ролей объекту типа SellerUser */
export function useAddRolesToSellerUser() {
    const queryClient = useQueryClient();

    return useMutation<AddRolesToSellerUserResponse, FetchError, { id: number | string; } & AddRolesToSellerUserRequest>(
        ({ id, ...data }) => apiClient.post(`/units/seller-users/${id}:add-roles`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchSellerUsers());

                queryClient.invalidateQueries(QueryKeys.getSellerUser(data?.id));

            },
        }
    );
}

/** Удаление роли у объекта типа SellerUser */
export function useDeleteRoleFromSellerUser() {
    const queryClient = useQueryClient();

    return useMutation<DeleteRoleFromSellerUserResponse, FetchError, { id: number | string; } & DeleteRoleFromSellerUserRequest>(
        ({ id, ...data }) => apiClient.post(`/units/seller-users/${id}:delete-role`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchSellerUsers());

                queryClient.invalidateQueries(QueryKeys.getSellerUser(data?.id));

            },
        }
    );
}

/** Получение объектов типа SellerUserRole */
export function useSearchRole(data: SearchRoleRequest, enabled = true) {
    return useQuery<SearchRoleResponse, FetchError>({
        queryKey: QueryKeys.searchRole(data),
        queryFn: () => apiClient.post(`/units/seller-user-roles:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useAdminUsersMeta(enabled = true) {
    return useQuery<GetAdminUsersMetaResponse, FetchError>({
        queryKey: QueryKeys.getAdminUsersMeta(),
        queryFn: () => apiClient.get(`/units/admin-users:meta`, {}),
        enabled,
    });
}

/** Получение объектов типа AdminUser */
export function useSearchAdminUsers(data: SearchAdminUsersRequest, enabled = true) {
    return useQuery<SearchAdminUsersResponse, FetchError>({
        queryKey: QueryKeys.searchAdminUsers(data),
        queryFn: () => apiClient.post(`/units/admin-users:search`, { data }),
        enabled,
    });
}

/** Поиск пользователей для справочника */
export function useSearchAdminUserEnumValues(data: SearchAdminUserEnumValuesRequest, enabled = true) {
    return useQuery<SearchAdminUserEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchAdminUserEnumValues(data),
        queryFn: () => apiClient.post(`/units/admin-user-enum-values:search`, { data }),
        enabled,
    });
}

/** Создание объекта типа AdminUser */
export function useCreateAdminUser() {
    return useMutation<CreateAdminUserResponse, FetchError, CreateAdminUserRequest>(
        (data) => apiClient.post(`/units/admin-users`, { data }),
    );
}

/** Получение объекта типа AdminUser */
export function useAdminUser({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetAdminUserResponse, FetchError>({
        queryKey: QueryKeys.getAdminUser(id),
        queryFn: () => apiClient.get(`/units/admin-users/${id}`, { params }),
        enabled,
    });
}

/** Частичное изменение объекта типа AdminUser */
export function usePatchAdminUser() {
    const queryClient = useQueryClient();

    return useMutation<PatchAdminUserResponse, FetchError, { id: number | string; } & PatchAdminUserRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/admin-users/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchAdminUsers());

                queryClient.invalidateQueries(QueryKeys.getAdminUser(data?.id));

            },
        }
    );
}

/** Добавление ролей объекту типа AdminUser */
export function useAddRolesToAdminUser() {
    const queryClient = useQueryClient();

    return useMutation<AddRolesToAdminUserResponse, FetchError, { id: number | string; } & AddRolesToAdminUserRequest>(
        ({ id, ...data }) => apiClient.post(`/units/admin-users/${id}:add-roles`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchAdminUsers());

                queryClient.invalidateQueries(QueryKeys.getAdminUser(data?.id));

            },
        }
    );
}

/** Удаление роли у объекта типа AdminUser */
export function useDeleteRoleFromAdminUser() {
    const queryClient = useQueryClient();

    return useMutation<DeleteRoleFromAdminUserResponse, FetchError, { id: number | string; } & DeleteRoleFromAdminUserRequest>(
        ({ id, ...data }) => apiClient.post(`/units/admin-users/${id}:delete-role`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchAdminUsers());

                queryClient.invalidateQueries(QueryKeys.getAdminUser(data?.id));

            },
        }
    );
}

/** Обновить токен для установки пароля */
export function useRefreshPasswordToken() {
    const queryClient = useQueryClient();

    return useMutation<RefreshPasswordTokenResponse, FetchError, RefreshPasswordTokenRequest>(
        ({ id, }) => apiClient.post(`/units/admin-users/${id}:refresh-password-token`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchAdminUsers());

                queryClient.invalidateQueries(QueryKeys.getAdminUser(data?.id));

            },
        }
    );
}

/** Массовая активация/деактивация пользователей */
export function useMassChangeActive() {
    return useMutation<MassChangeActiveResponse, FetchError, MassChangeActiveRequest>(
        (data) => apiClient.post(`/units/admin-users/mass/change-active`, { data }),
    );
}

/** Установка пароля пользователем */
export function useSetPasswordAdminUser() {
    return useMutation<SetPasswordAdminUserResponse, FetchError, SetPasswordAdminUserRequest>(
        (data) => apiClient.post(`/units/admin-users/set-password`, { data }),
    );
}

/** Получение справочника прав доступа */
export function useAdminUserRightsAccess(enabled = true) {
    return useQuery<GetAdminUserRightsAccessResponse, FetchError>({
        queryKey: QueryKeys.getAdminUserRightsAccess(),
        queryFn: () => apiClient.get(`/units/admin-users/right-access`, {}),
        enabled,
    });
}

/** Создание объекта типа AdminUserRole */
export function useCreateAdminUserRole() {
    return useMutation<CreateAdminUserRoleResponse, FetchError, CreateAdminUserRoleRequest>(
        (data) => apiClient.post(`/units/admin-user-roles`, { data }),
    );
}

/** Получение объекта типа AdminUserRole */
export function useAdminUserRole({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetAdminUserRoleResponse, FetchError>({
        queryKey: QueryKeys.getAdminUserRole(id),
        queryFn: () => apiClient.get(`/units/admin-user-roles/${id}`, { params }),
        enabled,
    });
}

/** Частичное изменение объекта типа AdminUser */
export function usePatchAdminUserRole() {
    const queryClient = useQueryClient();

    return useMutation<PatchAdminUserRoleResponse, FetchError, { id: number | string; } & PatchAdminUserRoleRequest>(
        ({ id, ...data }) => apiClient.patch(`/units/admin-user-roles/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getAdminUserRole(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchAdminUserRoles());

            },
        }
    );
}

/** Удаление объекта типа AdminUserRole */
export function useDeleteAdminUserRole() {
    const queryClient = useQueryClient();

    return useMutation<DeleteAdminUserRoleResponse, FetchError, DeleteAdminUserRoleRequest>(
        ({ id, }) => apiClient.delete(`/units/admin-user-roles/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getAdminUserRole(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchAdminUserRoles());

            },
        }
    );
}

/** Получение объектов типа AdminUserRole */
export function useSearchAdminUserRoles(data: SearchAdminUserRolesRequest, enabled = true) {
    return useQuery<SearchAdminUserRolesResponse, FetchError>({
        queryKey: QueryKeys.searchAdminUserRoles(data),
        queryFn: () => apiClient.post(`/units/admin-user-roles:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useAdminUserRolesMeta(enabled = true) {
    return useQuery<GetAdminUserRolesMetaResponse, FetchError>({
        queryKey: QueryKeys.getAdminUserRolesMeta(),
        queryFn: () => apiClient.get(`/units/admin-user-roles:meta`, {}),
        enabled,
    });
}
