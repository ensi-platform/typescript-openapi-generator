import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { CreatePromoCodeRequest, CreatePromoCodeResponse, GetPromoCodeResponse, PatchPromoCodeRequest, PatchPromoCodeResponse, DeletePromoCodeRequest, DeletePromoCodeResponse, SearchPromoCodesRequest, SearchPromoCodesResponse, GetPromoCodesMetaResponse, GetPromoCodeStatusesResponse, CreateDiscountRequest, CreateDiscountResponse, GetDiscountResponse, PatchDiscountRequest, PatchDiscountResponse, DeleteDiscountRequest, DeleteDiscountResponse, SearchDiscountsRequest, SearchDiscountsResponse, GetDiscountsMetaResponse, MassDiscountsStatusUpdateRequest, MassDiscountsStatusUpdateResponse, PatchDiscountProductsRequest, PatchDiscountProductsResponse, DeleteDiscountProductsRequest, DeleteDiscountProductsResponse, GetDiscountStatusesResponse, GetDiscountTypesResponse, GetDiscountValueTypesResponse, GetDiscountProductResponse, SearchDiscountProductsRequest, SearchDiscountProductsResponse, GetDiscountProductsMetaResponse } from "./types";

export const QueryKeys = {
    getPromoCode: (id?: number | string) => id ? ['get-promo-code', id] : ['get-promo-code'],
    searchPromoCodes: (data?: any) => data ? ['search-promo-codes', data] : ['search-promo-codes'],
    getPromoCodesMeta: () => ['get-promo-codes-meta'],
    getPromoCodeStatuses: () => ['get-promo-code-statuses'],
    getDiscount: (id?: number | string) => id ? ['get-discount', id] : ['get-discount'],
    searchDiscounts: (data?: any) => data ? ['search-discounts', data] : ['search-discounts'],
    getDiscountsMeta: () => ['get-discounts-meta'],
    getDiscountStatuses: () => ['get-discount-statuses'],
    getDiscountTypes: () => ['get-discount-types'],
    getDiscountValueTypes: () => ['get-discount-value-types'],
    getDiscountProduct: (id?: number | string) => id ? ['get-discount-product', id] : ['get-discount-product'],
    searchDiscountProducts: (data?: any) => data ? ['search-discount-products', data] : ['search-discount-products'],
    getDiscountProductsMeta: () => ['get-discount-products-meta'],
}
    ;

/** Создание объекта типа PromoCode */
export function useCreatePromoCode() {
    return useMutation<CreatePromoCodeResponse, FetchError, CreatePromoCodeRequest>(
        (data) => apiClient.post(`/marketing/promo-codes`, { data }),
    );
}

/** Получение объекта типа PromoCode */
export function usePromoCode({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetPromoCodeResponse, FetchError>({
        queryKey: QueryKeys.getPromoCode(id),
        queryFn: () => apiClient.get(`/marketing/promo-codes/${id}`, {}),
        enabled,
    });
}

/** Обновления части полей объекта типа PromoCode */
export function usePatchPromoCode() {
    const queryClient = useQueryClient();

    return useMutation<PatchPromoCodeResponse, FetchError, { id: number | string; } & PatchPromoCodeRequest>(
        ({ id, ...data }) => apiClient.patch(`/marketing/promo-codes/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getPromoCode(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchPromoCodes());

            },
        }
    );
}

/** Удаление объекта типа PromoCode */
export function useDeletePromoCode() {
    const queryClient = useQueryClient();

    return useMutation<DeletePromoCodeResponse, FetchError, DeletePromoCodeRequest>(
        ({ id, }) => apiClient.delete(`/marketing/promo-codes/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getPromoCode(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchPromoCodes());

            },
        }
    );
}

/** Поиск объектов типа PromoCode */
export function useSearchPromoCodes(data: SearchPromoCodesRequest, enabled = true) {
    return useQuery<SearchPromoCodesResponse, FetchError>({
        queryKey: QueryKeys.searchPromoCodes(data),
        queryFn: () => apiClient.post(`/marketing/promo-codes:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function usePromoCodesMeta(enabled = true) {
    return useQuery<GetPromoCodesMetaResponse, FetchError>({
        queryKey: QueryKeys.getPromoCodesMeta(),
        queryFn: () => apiClient.get(`/marketing/promo-codes:meta`, {}),
        enabled,
    });
}

/** Получение объектов типа PromoCodeStatus */
export function usePromoCodeStatuses(enabled = true) {
    return useQuery<GetPromoCodeStatusesResponse, FetchError>({
        queryKey: QueryKeys.getPromoCodeStatuses(),
        queryFn: () => apiClient.get(`/marketing/promo-code-statuses`, {}),
        enabled,
    });
}

/** Создание объекта типа Discount */
export function useCreateDiscount() {
    return useMutation<CreateDiscountResponse, FetchError, CreateDiscountRequest>(
        (data) => apiClient.post(`/marketing/discounts`, { data }),
    );
}

/** Получение объекта типа Discount */
export function useDiscount({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetDiscountResponse, FetchError>({
        queryKey: QueryKeys.getDiscount(id),
        queryFn: () => apiClient.get(`/marketing/discounts/${id}`, { params }),
        enabled,
    });
}

/** Обновления части полей объекта типа Discount */
export function usePatchDiscount() {
    const queryClient = useQueryClient();

    return useMutation<PatchDiscountResponse, FetchError, { id: number | string; } & PatchDiscountRequest>(
        ({ id, ...data }) => apiClient.patch(`/marketing/discounts/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDiscount(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDiscounts());

            },
        }
    );
}

/** Удаление объекта типа Discount */
export function useDeleteDiscount() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDiscountResponse, FetchError, DeleteDiscountRequest>(
        ({ id, }) => apiClient.delete(`/marketing/discounts/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDiscount(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDiscounts());

            },
        }
    );
}

/** Поиск объектов типа Discount */
export function useSearchDiscounts(data: SearchDiscountsRequest, enabled = true) {
    return useQuery<SearchDiscountsResponse, FetchError>({
        queryKey: QueryKeys.searchDiscounts(data),
        queryFn: () => apiClient.post(`/marketing/discounts:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useDiscountsMeta(enabled = true) {
    return useQuery<GetDiscountsMetaResponse, FetchError>({
        queryKey: QueryKeys.getDiscountsMeta(),
        queryFn: () => apiClient.get(`/marketing/discounts:meta`, {}),
        enabled,
    });
}

/** Массовое обновление статусов для объектов типа Discount */
export function useMassDiscountsStatusUpdate() {
    return useMutation<MassDiscountsStatusUpdateResponse, FetchError, MassDiscountsStatusUpdateRequest>(
        (data) => apiClient.post(`/marketing/discounts:mass-status-update`, { data }),
    );
}

/** Обновление только заданных продуктов в скидке */
export function usePatchDiscountProducts() {
    const queryClient = useQueryClient();

    return useMutation<PatchDiscountProductsResponse, FetchError, { id: number | string; } & PatchDiscountProductsRequest>(
        ({ id, ...data }) => apiClient.post(`/marketing/discounts/${id}/products`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDiscount(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDiscounts());

            },
        }
    );
}

/** Удаление заданных продуктов в скидке */
export function useDeleteDiscountProducts() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDiscountProductsResponse, FetchError, { id: number | string; } & DeleteDiscountProductsRequest>(
        ({ id, ...data }) => apiClient.delete(`/marketing/discounts/${id}/products`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDiscount(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDiscounts());

            },
        }
    );
}

/** Получение объектов типа DiscountStatus */
export function useDiscountStatuses(enabled = true) {
    return useQuery<GetDiscountStatusesResponse, FetchError>({
        queryKey: QueryKeys.getDiscountStatuses(),
        queryFn: () => apiClient.get(`/marketing/discount-statuses`, {}),
        enabled,
    });
}

/** Получение объектов типа DiscountType */
export function useDiscountTypes(enabled = true) {
    return useQuery<GetDiscountTypesResponse, FetchError>({
        queryKey: QueryKeys.getDiscountTypes(),
        queryFn: () => apiClient.get(`/marketing/discount-types`, {}),
        enabled,
    });
}

/** Получение объектов типа DiscountValueType */
export function useDiscountValueTypes(enabled = true) {
    return useQuery<GetDiscountValueTypesResponse, FetchError>({
        queryKey: QueryKeys.getDiscountValueTypes(),
        queryFn: () => apiClient.get(`/marketing/discount-value-types`, {}),
        enabled,
    });
}

/** Получение объекта типа DiscountProduct */
export function useDiscountProduct({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetDiscountProductResponse, FetchError>({
        queryKey: QueryKeys.getDiscountProduct(id),
        queryFn: () => apiClient.get(`/marketing/discounts/discount-products/${id}`, {}),
        enabled,
    });
}

/** Поиск объектов типа DiscountProduct */
export function useSearchDiscountProducts(data: SearchDiscountProductsRequest, enabled = true) {
    return useQuery<SearchDiscountProductsResponse, FetchError>({
        queryKey: QueryKeys.searchDiscountProducts(data),
        queryFn: () => apiClient.post(`/marketing/discounts/discount-products:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useDiscountProductsMeta(enabled = true) {
    return useQuery<GetDiscountProductsMetaResponse, FetchError>({
        queryKey: QueryKeys.getDiscountProductsMeta(),
        queryFn: () => apiClient.get(`/marketing/discounts/discount-products:meta`, {}),
        enabled,
    });
}
