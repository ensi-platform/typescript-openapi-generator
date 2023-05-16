import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { SearchOrdersRequest, SearchOrdersResponse, GetOrderMetaResponse, GetOrderResponse, PatchOrderRequest, PatchOrderResponse, ChangeOrderPaymentSystemRequest, ChangeOrderPaymentSystemResponse, ChangeOrderDeliveryRequest, ChangeOrderDeliveryResponse, AttachOrderFileRequest, AttachOrderFileResponse, DeleteOrderFilesRequest, DeleteOrderFilesResponse, PatchShipmentRequest, PatchShipmentResponse, PatchDeliveryRequest, PatchDeliveryResponse, GetOrderStatusesResponse, GetOrderSourcesResponse, GetPaymentMethodsResponse, GetPaymentStatusesResponse, GetDeliveryStatusesResponse, GetShipmentStatusesResponse, GetRefundStatusesResponse, CreateRefundReasonRequest, CreateRefundReasonResponse, GetRefundReasonsResponse, PatchRefundReasonRequest, PatchRefundReasonResponse, SearchOmsSettingsResponse, PatchOmsSettingsRequest, PatchOmsSettingsResponse, GetOmsSettingsMetaResponse, SearchBasketsSettingsResponse, PatchBasketsSettingsRequest, PatchBasketsSettingsResponse, GetBasketsSettingsResponse, CreateRefundRequest, CreateRefundResponse, SearchRefundsRequest, SearchRefundsResponse, GetRefundsMetaResponse, GetRefundResponse, PatchRefundRequest, PatchRefundResponse, AttachRefundFileRequest, AttachRefundFileResponse, DeleteRefundFilesRequest, DeleteRefundFilesResponse } from "./types";

export const QueryKeys = {
    searchOrders: (data?: any) => data ? ['search-orders', data] : ['search-orders'],
    getOrderMeta: () => ['get-order-meta'],
    getOrder: (id?: number | string) => id ? ['get-order', id] : ['get-order'],
    getOrderStatuses: () => ['get-order-statuses'],
    getOrderSources: () => ['get-order-sources'],
    getPaymentMethods: () => ['get-payment-methods'],
    getPaymentStatuses: () => ['get-payment-statuses'],
    getDeliveryStatuses: () => ['get-delivery-statuses'],
    getShipmentStatuses: () => ['get-shipment-statuses'],
    getRefundStatuses: () => ['get-refund-statuses'],
    getRefundReasons: () => ['get-refund-reasons'],
    searchOmsSettings: () => ['search-oms-settings'],
    getOmsSettingsMeta: () => ['get-oms-settings-meta'],
    searchBasketsSettings: () => ['search-baskets-settings'],
    getBasketsSettings: () => ['get-baskets-settings'],
    searchRefunds: (data?: any) => data ? ['search-refunds', data] : ['search-refunds'],
    getRefundsMeta: () => ['get-refunds-meta'],
    getRefund: (id?: number | string) => id ? ['get-refund', id] : ['get-refund'],
}
    ;

/** Получение объектов типа Order */
export function useSearchOrders(data: SearchOrdersRequest, enabled = true) {
    return useQuery<SearchOrdersResponse, FetchError>({
        queryKey: QueryKeys.searchOrders(data),
        queryFn: () => apiClient.post(`/orders/orders:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useOrderMeta(enabled = true) {
    return useQuery<GetOrderMetaResponse, FetchError>({
        queryKey: QueryKeys.getOrderMeta(),
        queryFn: () => apiClient.get(`/orders/orders:meta`, {}),
        enabled,
    });
}

/** Получение объекта типа Order */
export function useOrder({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetOrderResponse, FetchError>({
        queryKey: QueryKeys.getOrder(id),
        queryFn: () => apiClient.get(`/orders/orders/${id}`, { params }),
        enabled,
    });
}

/** Обновление части полей объекта типа Order */
export function usePatchOrder() {
    const queryClient = useQueryClient();

    return useMutation<PatchOrderResponse, FetchError, { id: number | string; } & PatchOrderRequest>(
        ({ id, ...data }) => apiClient.patch(`/orders/orders/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchOrders());

                queryClient.invalidateQueries(QueryKeys.getOrder(data?.id));

            },
        }
    );
}

/** Изменить систему оплаты заказа */
export function useChangeOrderPaymentSystem() {
    const queryClient = useQueryClient();

    return useMutation<ChangeOrderPaymentSystemResponse, FetchError, { id: number | string; } & ChangeOrderPaymentSystemRequest>(
        ({ id, ...data }) => apiClient.post(`/orders/orders/${id}:change-payment-method`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchOrders());

                queryClient.invalidateQueries(QueryKeys.getOrder(data?.id));

            },
        }
    );
}

/** Обновление части полей по доставке объекта типа Order */
export function useChangeOrderDelivery() {
    const queryClient = useQueryClient();

    return useMutation<ChangeOrderDeliveryResponse, FetchError, { id: number | string; } & ChangeOrderDeliveryRequest>(
        ({ id, ...data }) => apiClient.post(`/orders/orders/${id}:change-delivery`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchOrders());

                queryClient.invalidateQueries(QueryKeys.getOrder(data?.id));

            },
        }
    );
}

/** Прикрепить файл к заказу */
export function useAttachOrderFile() {
    const queryClient = useQueryClient();

    return useMutation<AttachOrderFileResponse, FetchError, { id: number | string; } & AttachOrderFileRequest>(
        ({ id, ...data }) => apiClient.post(`/orders/orders/${id}:attach-file`, { data: data.formData }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchOrders());

                queryClient.invalidateQueries(QueryKeys.getOrder(data?.id));

            },
        }
    );
}

/** Удалить прикрепленные файлы к заказу */
export function useDeleteOrderFiles() {
    const queryClient = useQueryClient();

    return useMutation<DeleteOrderFilesResponse, FetchError, { id: number | string; } & DeleteOrderFilesRequest>(
        ({ id, ...data }) => apiClient.delete(`/orders/orders/${id}:delete-files`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchOrders());

                queryClient.invalidateQueries(QueryKeys.getOrder(data?.id));

            },
        }
    );
}

/** Обновление части полей объекта типа Shipments */
export function usePatchShipment() {
    return useMutation<PatchShipmentResponse, FetchError, { id: number | string; } & PatchShipmentRequest>(
        ({ id, ...data }) => apiClient.patch(`/orders/shipments/${id}`, { data }),
    );
}

/** Обновление части полей объекта типа Delivery */
export function usePatchDelivery() {
    return useMutation<PatchDeliveryResponse, FetchError, { id: number | string; } & PatchDeliveryRequest>(
        ({ id, ...data }) => apiClient.patch(`/orders/deliveries/${id}`, { data }),
    );
}

/** Получение объектов типа OrderStatus */
export function useOrderStatuses(enabled = true) {
    return useQuery<GetOrderStatusesResponse, FetchError>({
        queryKey: QueryKeys.getOrderStatuses(),
        queryFn: () => apiClient.get(`/orders/order-statuses`, {}),
        enabled,
    });
}

/** Получение объектов типа OrderSource */
export function useOrderSources(enabled = true) {
    return useQuery<GetOrderSourcesResponse, FetchError>({
        queryKey: QueryKeys.getOrderSources(),
        queryFn: () => apiClient.get(`/orders/order-sources`, {}),
        enabled,
    });
}

/** Получение объектов типа PaymentMethod */
export function usePaymentMethods(enabled = true) {
    return useQuery<GetPaymentMethodsResponse, FetchError>({
        queryKey: QueryKeys.getPaymentMethods(),
        queryFn: () => apiClient.get(`/orders/payment-methods`, {}),
        enabled,
    });
}

/** Получение объектов типа PaymentStatus */
export function usePaymentStatuses(enabled = true) {
    return useQuery<GetPaymentStatusesResponse, FetchError>({
        queryKey: QueryKeys.getPaymentStatuses(),
        queryFn: () => apiClient.get(`/orders/payment-statuses`, {}),
        enabled,
    });
}

/** Получение объектов типа DeliveryStatus */
export function useDeliveryStatuses(enabled = true) {
    return useQuery<GetDeliveryStatusesResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryStatuses(),
        queryFn: () => apiClient.get(`/orders/delivery-statuses`, {}),
        enabled,
    });
}

/** Получение объектов типа ShipmentStatus */
export function useShipmentStatuses(enabled = true) {
    return useQuery<GetShipmentStatusesResponse, FetchError>({
        queryKey: QueryKeys.getShipmentStatuses(),
        queryFn: () => apiClient.get(`/orders/shipment-statuses`, {}),
        enabled,
    });
}

/** Получение объекта типа RefundStatus */
export function useRefundStatuses(enabled = true) {
    return useQuery<GetRefundStatusesResponse, FetchError>({
        queryKey: QueryKeys.getRefundStatuses(),
        queryFn: () => apiClient.get(`/orders/refund-statuses`, {}),
        enabled,
    });
}

/** Создание объекта типа RefundReason */
export function useCreateRefundReason() {
    return useMutation<CreateRefundReasonResponse, FetchError, CreateRefundReasonRequest>(
        (data) => apiClient.post(`/orders/refund-reasons`, { data }),
    );
}

/** Получение объекта типа RefundReason */
export function useRefundReasons(enabled = true) {
    return useQuery<GetRefundReasonsResponse, FetchError>({
        queryKey: QueryKeys.getRefundReasons(),
        queryFn: () => apiClient.get(`/orders/refund-reasons`, {}),
        enabled,
    });
}

/** Обновление части полей объекта типа RefundReason */
export function usePatchRefundReason() {
    const queryClient = useQueryClient();

    return useMutation<PatchRefundReasonResponse, FetchError, { id: number | string; } & PatchRefundReasonRequest>(
        ({ id, ...data }) => apiClient.patch(`/orders/refund-reasons/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getRefundReasons());

            },
        }
    );
}

/** Получение всех параметров */
export function useSearchOmsSettings(enabled = true) {
    return useQuery<SearchOmsSettingsResponse, FetchError>({
        queryKey: QueryKeys.searchOmsSettings(),
        queryFn: () => apiClient.get(`/orders/oms-settings`, {}),
        enabled,
    });
}

/** Обновление параметров */
export function usePatchOmsSettings() {
    return useMutation<PatchOmsSettingsResponse, FetchError, PatchOmsSettingsRequest>(
        (data) => apiClient.patch(`/orders/oms-settings`, { data }),
    );
}

/** Получение списка доступных полей для настроек параметров сервиса OMS */
export function useOmsSettingsMeta(enabled = true) {
    return useQuery<GetOmsSettingsMetaResponse, FetchError>({
        queryKey: QueryKeys.getOmsSettingsMeta(),
        queryFn: () => apiClient.get(`/orders/oms-settings:meta`, {}),
        enabled,
    });
}

/** Получение всех параметров */
export function useSearchBasketsSettings(enabled = true) {
    return useQuery<SearchBasketsSettingsResponse, FetchError>({
        queryKey: QueryKeys.searchBasketsSettings(),
        queryFn: () => apiClient.get(`/orders/baskets-settings`, {}),
        enabled,
    });
}

/** Обновление параметров */
export function usePatchBasketsSettings() {
    return useMutation<PatchBasketsSettingsResponse, FetchError, PatchBasketsSettingsRequest>(
        (data) => apiClient.patch(`/orders/baskets-settings`, { data }),
    );
}

/** Получение списка доступных полей для настроек параметров сервиса Baskets */
export function useBasketsSettings(enabled = true) {
    return useQuery<GetBasketsSettingsResponse, FetchError>({
        queryKey: QueryKeys.getBasketsSettings(),
        queryFn: () => apiClient.get(`/orders/baskets-settings:meta`, {}),
        enabled,
    });
}

/** Создание объекта типа Refund */
export function useCreateRefund() {
    return useMutation<CreateRefundResponse, FetchError, CreateRefundRequest>(
        (data) => apiClient.post(`/orders/refunds`, { data }),
    );
}

/** Поиск объектов типа Refund */
export function useSearchRefunds(data: SearchRefundsRequest, enabled = true) {
    return useQuery<SearchRefundsResponse, FetchError>({
        queryKey: QueryKeys.searchRefunds(data),
        queryFn: () => apiClient.post(`/orders/refunds:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useRefundsMeta(enabled = true) {
    return useQuery<GetRefundsMetaResponse, FetchError>({
        queryKey: QueryKeys.getRefundsMeta(),
        queryFn: () => apiClient.get(`/orders/refunds:meta`, {}),
        enabled,
    });
}

/** Получение объекта типа Refund */
export function useRefund({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetRefundResponse, FetchError>({
        queryKey: QueryKeys.getRefund(id),
        queryFn: () => apiClient.get(`/orders/refunds/${id}`, { params }),
        enabled,
    });
}

/** Обновление части полей объекта типа Refund */
export function usePatchRefund() {
    const queryClient = useQueryClient();

    return useMutation<PatchRefundResponse, FetchError, { id: number | string; } & PatchRefundRequest>(
        ({ id, ...data }) => apiClient.patch(`/orders/refunds/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchRefunds());

                queryClient.invalidateQueries(QueryKeys.getRefund(data?.id));

            },
        }
    );
}

/** Загрузка вложения для заявки на возврат */
export function useAttachRefundFile() {
    const queryClient = useQueryClient();

    return useMutation<AttachRefundFileResponse, FetchError, { id: number | string; } & AttachRefundFileRequest>(
        ({ id, ...data }) => apiClient.post(`/orders/refunds/${id}:attach-file`, { data: data.formData }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchRefunds());

                queryClient.invalidateQueries(QueryKeys.getRefund(data?.id));

            },
        }
    );
}

/** Удаление вложений для заявки на возврат */
export function useDeleteRefundFiles() {
    const queryClient = useQueryClient();

    return useMutation<DeleteRefundFilesResponse, FetchError, { id: number | string; } & DeleteRefundFilesRequest>(
        ({ id, ...data }) => apiClient.delete(`/orders/refunds/${id}:delete-files`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchRefunds());

                queryClient.invalidateQueries(QueryKeys.getRefund(data?.id));

            },
        }
    );
}
