import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { SearchPointsRequest, SearchPointsResponse, SearchPointEnumValuesRequest, SearchPointEnumValuesResponse, GetDeliveryServiceResponse, PatchDeliveryServiceRequest, PatchDeliveryServiceResponse, SearchDeliveryServicesRequest, SearchDeliveryServicesResponse, SearchOneDeliveryServiceRequest, SearchOneDeliveryServiceResponse, AddPaymentMethodsToDeliveryServiceRequest, AddPaymentMethodsToDeliveryServiceResponse, DeletePaymentMethodFromDeliveryServiceRequest, DeletePaymentMethodFromDeliveryServiceResponse, CreateDeliveryServiceDocumentRequest, CreateDeliveryServiceDocumentResponse, GetDeliveryServiceDocumentResponse, ReplaceDeliveryServiceDocumentRequest, ReplaceDeliveryServiceDocumentResponse, PatchDeliveryServiceDocumentRequest, PatchDeliveryServiceDocumentResponse, DeleteDeliveryServiceDocumentRequest, DeleteDeliveryServiceDocumentResponse, UploadDeliveryServiceDocumentFileRequest, UploadDeliveryServiceDocumentFileResponse, DeleteDeliveryServiceDocumentFileRequest, DeleteDeliveryServiceDocumentFileResponse, SearchDeliveryServiceDocumentsRequest, SearchDeliveryServiceDocumentsResponse, SearchOneDeliveryServiceDocumentRequest, SearchOneDeliveryServiceDocumentResponse, CreateDeliveryServiceManagerRequest, CreateDeliveryServiceManagerResponse, GetDeliveryServiceManagerResponse, ReplaceDeliveryServiceManagerRequest, ReplaceDeliveryServiceManagerResponse, PatchDeliveryServiceManagerRequest, PatchDeliveryServiceManagerResponse, DeleteDeliveryServiceManagerRequest, DeleteDeliveryServiceManagerResponse, SearchDeliveryServiceManagersRequest, SearchDeliveryServiceManagersResponse, SearchOneDeliveryServiceManagerRequest, SearchOneDeliveryServiceManagerResponse, CreateFederalDistrictRequest, CreateFederalDistrictResponse, GetFederalDistrictResponse, ReplaceFederalDistrictRequest, ReplaceFederalDistrictResponse, PatchFederalDistrictRequest, PatchFederalDistrictResponse, DeleteFederalDistrictRequest, DeleteFederalDistrictResponse, SearchFederalDistrictsRequest, SearchFederalDistrictsResponse, SearchOneFederalDistrictRequest, SearchOneFederalDistrictResponse, CreateRegionRequest, CreateRegionResponse, GetRegionResponse, ReplaceRegionRequest, ReplaceRegionResponse, PatchRegionRequest, PatchRegionResponse, DeleteRegionRequest, DeleteRegionResponse, SearchRegionsRequest, SearchRegionsResponse, SearchOneRegionRequest, SearchOneRegionResponse, CreateDeliveryPriceRequest, CreateDeliveryPriceResponse, GetDeliveryPriceResponse, ReplaceDeliveryPriceRequest, ReplaceDeliveryPriceResponse, PatchDeliveryPriceRequest, PatchDeliveryPriceResponse, DeleteDeliveryPriceRequest, DeleteDeliveryPriceResponse, SearchDeliveryPricesRequest, SearchDeliveryPricesResponse, SearchOneDeliveryPriceRequest, SearchOneDeliveryPriceResponse, SearchTariffEnumValuesRequest, SearchTariffEnumValuesResponse, GetDeliveryKpiResponse, PatchDeliveryKpiRequest, PatchDeliveryKpiResponse, ReplaceDeliveryKpiRequest, ReplaceDeliveryKpiResponse, GetDeliveryKpiMetaResponse, SearchDeliveryKpiCtsRequest, SearchDeliveryKpiCtsResponse, SearchOneDeliveryKpiCtRequest, SearchOneDeliveryKpiCtResponse, GetDeliveryKpiCtResponse, CreateDeliveryKpiCtRequest, CreateDeliveryKpiCtResponse, ReplaceDeliveryKpiCtRequest, ReplaceDeliveryKpiCtResponse, DeleteDeliveryKpiCtRequest, DeleteDeliveryKpiCtResponse, SearchDeliveryKpiPptsRequest, SearchDeliveryKpiPptsResponse, SearchOneDeliveryKpiPptRequest, SearchOneDeliveryKpiPptResponse, GetDeliveryKpiPptResponse, CreateDeliveryKpiPptRequest, CreateDeliveryKpiPptResponse, ReplaceDeliveryKpiPptRequest, ReplaceDeliveryKpiPptResponse, DeleteDeliveryKpiPptRequest, DeleteDeliveryKpiPptResponse, GetDeliveryMethodsResponse, GetDeliveryServiceStatusesResponse, GetShipmentMethodsResponse, PatchCargoRequest, PatchCargoResponse, CancelCargoRequest, CancelCargoResponse, SearchCargoRequest, SearchCargoResponse, CancelCargoOrdersRequest, CancelCargoOrdersResponse, SearchCargoOrdersRequest, SearchCargoOrdersResponse } from "./types";

export const QueryKeys = {
    searchPoints: (data?: any) => data ? ['search-points', data] : ['search-points'],
    searchPointEnumValues: (data?: any) => data ? ['search-point-enum-values', data] : ['search-point-enum-values'],
    getDeliveryService: (id?: number | string) => id ? ['get-delivery-service', id] : ['get-delivery-service'],
    searchDeliveryServices: (data?: any) => data ? ['search-delivery-services', data] : ['search-delivery-services'],
    searchOneDeliveryService: (data?: any) => data ? ['search-one-delivery-service', data] : ['search-one-delivery-service'],
    getDeliveryServiceDocument: (id?: number | string) => id ? ['get-delivery-service-document', id] : ['get-delivery-service-document'],
    searchDeliveryServiceDocuments: (data?: any) => data ? ['search-delivery-service-documents', data] : ['search-delivery-service-documents'],
    searchOneDeliveryServiceDocument: (data?: any) => data ? ['search-one-delivery-service-document', data] : ['search-one-delivery-service-document'],
    getDeliveryServiceManager: (id?: number | string) => id ? ['get-delivery-service-manager', id] : ['get-delivery-service-manager'],
    searchDeliveryServiceManagers: (data?: any) => data ? ['search-delivery-service-managers', data] : ['search-delivery-service-managers'],
    searchOneDeliveryServiceManager: (data?: any) => data ? ['search-one-delivery-service-manager', data] : ['search-one-delivery-service-manager'],
    getFederalDistrict: (id?: number | string) => id ? ['get-federal-district', id] : ['get-federal-district'],
    searchFederalDistricts: (data?: any) => data ? ['search-federal-districts', data] : ['search-federal-districts'],
    searchOneFederalDistrict: (data?: any) => data ? ['search-one-federal-district', data] : ['search-one-federal-district'],
    getRegion: (id?: number | string) => id ? ['get-region', id] : ['get-region'],
    searchRegions: (data?: any) => data ? ['search-regions', data] : ['search-regions'],
    searchOneRegion: (data?: any) => data ? ['search-one-region', data] : ['search-one-region'],
    getDeliveryPrice: (id?: number | string) => id ? ['get-delivery-price', id] : ['get-delivery-price'],
    searchDeliveryPrices: (data?: any) => data ? ['search-delivery-prices', data] : ['search-delivery-prices'],
    searchOneDeliveryPrice: (data?: any) => data ? ['search-one-delivery-price', data] : ['search-one-delivery-price'],
    searchTariffEnumValues: (data?: any) => data ? ['search-tariff-enum-values', data] : ['search-tariff-enum-values'],
    getDeliveryKpi: () => ['get-delivery-kpi'],
    getDeliveryKpiMeta: () => ['get-delivery-kpi-meta'],
    searchDeliveryKpiCts: (data?: any) => data ? ['search-delivery-kpi-cts', data] : ['search-delivery-kpi-cts'],
    searchOneDeliveryKpiCt: (data?: any) => data ? ['search-one-delivery-kpi-ct', data] : ['search-one-delivery-kpi-ct'],
    getDeliveryKpiCt: (id?: number | string) => id ? ['get-delivery-kpi-ct', id] : ['get-delivery-kpi-ct'],
    searchDeliveryKpiPpts: (data?: any) => data ? ['search-delivery-kpi-ppts', data] : ['search-delivery-kpi-ppts'],
    searchOneDeliveryKpiPpt: (data?: any) => data ? ['search-one-delivery-kpi-ppt', data] : ['search-one-delivery-kpi-ppt'],
    getDeliveryKpiPpt: (id?: number | string) => id ? ['get-delivery-kpi-ppt', id] : ['get-delivery-kpi-ppt'],
    getDeliveryMethods: () => ['get-delivery-methods'],
    getDeliveryServiceStatuses: () => ['get-delivery-service-statuses'],
    getShipmentMethods: () => ['get-shipment-methods'],
    searchCargo: (data?: any) => data ? ['search-cargo', data] : ['search-cargo'],
    searchCargoOrders: (data?: any) => data ? ['search-cargo-orders', data] : ['search-cargo-orders'],
}
    ;

/** Поиск пунктов приема/выдачи товара */
export function useSearchPoints(data: SearchPointsRequest, enabled = true) {
    return useQuery<SearchPointsResponse, FetchError>({
        queryKey: QueryKeys.searchPoints(data),
        queryFn: () => apiClient.post(`/logistic/points:search`, { data }),
        enabled,
    });
}

/** Поиск пунктов приема/выдачи товара для справочника */
export function useSearchPointEnumValues(data: SearchPointEnumValuesRequest, enabled = true) {
    return useQuery<SearchPointEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchPointEnumValues(data),
        queryFn: () => apiClient.post(`/logistic/point-enum-values:search`, { data }),
        enabled,
    });
}

/** Получение объекта типа DeliveryService */
export function useDeliveryService({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetDeliveryServiceResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryService(id),
        queryFn: () => apiClient.get(`/logistic/delivery-services/${id}`, { params }),
        enabled,
    });
}

/** Обновления части полей объекта типа DeliveryService */
export function usePatchDeliveryService() {
    const queryClient = useQueryClient();

    return useMutation<PatchDeliveryServiceResponse, FetchError, { id: number | string; } & PatchDeliveryServiceRequest>(
        ({ id, ...data }) => apiClient.patch(`/logistic/delivery-services/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryService(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServices());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryService(data));

            },
        }
    );
}

/** Поиск объектов типа DeliveryService */
export function useSearchDeliveryServices(data: SearchDeliveryServicesRequest, enabled = true) {
    return useQuery<SearchDeliveryServicesResponse, FetchError>({
        queryKey: QueryKeys.searchDeliveryServices(data),
        queryFn: () => apiClient.post(`/logistic/delivery-services:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа DeliveryService */
export function useSearchOneDeliveryService(data: SearchOneDeliveryServiceRequest, enabled = true) {
    return useQuery<SearchOneDeliveryServiceResponse, FetchError>({
        queryKey: QueryKeys.searchOneDeliveryService(data),
        queryFn: () => apiClient.post(`/logistic/delivery-services:search-one`, { data }),
        enabled,
    });
}

/** Добавление доступных способов оплаты службе доставки */
export function useAddPaymentMethodsToDeliveryService() {
    const queryClient = useQueryClient();

    return useMutation<AddPaymentMethodsToDeliveryServiceResponse, FetchError, { id: number | string; } & AddPaymentMethodsToDeliveryServiceRequest>(
        ({ id, ...data }) => apiClient.post(`/logistic/delivery-services/${id}:add-payment-methods`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryService(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServices());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryService(data));

            },
        }
    );
}

/** Удаление доступного способа оплаты у службы доставки */
export function useDeletePaymentMethodFromDeliveryService() {
    const queryClient = useQueryClient();

    return useMutation<DeletePaymentMethodFromDeliveryServiceResponse, FetchError, { id: number | string; } & DeletePaymentMethodFromDeliveryServiceRequest>(
        ({ id, ...data }) => apiClient.post(`/logistic/delivery-services/${id}:delete-payment-method`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryService(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServices());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryService(data));

            },
        }
    );
}

/** Создание объекта типа DeliveryServiceDocument */
export function useCreateDeliveryServiceDocument() {
    return useMutation<CreateDeliveryServiceDocumentResponse, FetchError, CreateDeliveryServiceDocumentRequest>(
        (data) => apiClient.post(`/logistic/delivery-service-documents`, { data }),
    );
}

/** Получение объекта типа DeliveryServiceDocument */
export function useDeliveryServiceDocument({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetDeliveryServiceDocumentResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryServiceDocument(id),
        queryFn: () => apiClient.get(`/logistic/delivery-service-documents/${id}`, { params }),
        enabled,
    });
}

/** Замена объекта типа DeliveryServiceDocument */
export function useReplaceDeliveryServiceDocument() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceDeliveryServiceDocumentResponse, FetchError, { id: number | string; } & ReplaceDeliveryServiceDocumentRequest>(
        ({ id, ...data }) => apiClient.put(`/logistic/delivery-service-documents/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceDocument(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceDocuments());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceDocument(data));

            },
        }
    );
}

/** Обновления части полей объекта типа DeliveryServiceDocument */
export function usePatchDeliveryServiceDocument() {
    const queryClient = useQueryClient();

    return useMutation<PatchDeliveryServiceDocumentResponse, FetchError, { id: number | string; } & PatchDeliveryServiceDocumentRequest>(
        ({ id, ...data }) => apiClient.patch(`/logistic/delivery-service-documents/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceDocument(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceDocuments());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceDocument(data));

            },
        }
    );
}

/** Удаление объекта типа DeliveryServiceDocument */
export function useDeleteDeliveryServiceDocument() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDeliveryServiceDocumentResponse, FetchError, DeleteDeliveryServiceDocumentRequest>(
        ({ id, }) => apiClient.delete(`/logistic/delivery-service-documents/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceDocument(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceDocuments());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceDocument(data));

            },
        }
    );
}

/** Загрузка файла с документом службы доставки */
export function useUploadDeliveryServiceDocumentFile() {
    const queryClient = useQueryClient();

    return useMutation<UploadDeliveryServiceDocumentFileResponse, FetchError, { id: number | string; } & UploadDeliveryServiceDocumentFileRequest>(
        ({ id, ...data }) => apiClient.post(`/logistic/delivery-service-documents/${id}:upload-file`, { data: data.formData }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceDocument(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceDocuments());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceDocument(data));

            },
        }
    );
}

/** Удаление файла с документом службы доставки из базы и файловой системы */
export function useDeleteDeliveryServiceDocumentFile() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDeliveryServiceDocumentFileResponse, FetchError, DeleteDeliveryServiceDocumentFileRequest>(
        ({ id, }) => apiClient.post(`/logistic/delivery-service-documents/${id}:delete-file`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceDocument(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceDocuments());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceDocument(data));

            },
        }
    );
}

/** Поиск объектов типа DeliveryServiceDocument */
export function useSearchDeliveryServiceDocuments(data: SearchDeliveryServiceDocumentsRequest, enabled = true) {
    return useQuery<SearchDeliveryServiceDocumentsResponse, FetchError>({
        queryKey: QueryKeys.searchDeliveryServiceDocuments(data),
        queryFn: () => apiClient.post(`/logistic/delivery-service-documents:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа DeliveryServiceDocument */
export function useSearchOneDeliveryServiceDocument(data: SearchOneDeliveryServiceDocumentRequest, enabled = true) {
    return useQuery<SearchOneDeliveryServiceDocumentResponse, FetchError>({
        queryKey: QueryKeys.searchOneDeliveryServiceDocument(data),
        queryFn: () => apiClient.post(`/logistic/delivery-service-documents:search-one`, { data }),
        enabled,
    });
}

/** Создание объекта типа DeliveryServiceManager */
export function useCreateDeliveryServiceManager() {
    return useMutation<CreateDeliveryServiceManagerResponse, FetchError, CreateDeliveryServiceManagerRequest>(
        (data) => apiClient.post(`/logistic/delivery-service-managers`, { data }),
    );
}

/** Получение объекта типа DeliveryServiceManager */
export function useDeliveryServiceManager({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetDeliveryServiceManagerResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryServiceManager(id),
        queryFn: () => apiClient.get(`/logistic/delivery-service-managers/${id}`, { params }),
        enabled,
    });
}

/** Замена объекта типа DeliveryServiceManager */
export function useReplaceDeliveryServiceManager() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceDeliveryServiceManagerResponse, FetchError, { id: number | string; } & ReplaceDeliveryServiceManagerRequest>(
        ({ id, ...data }) => apiClient.put(`/logistic/delivery-service-managers/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceManager(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceManagers());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceManager(data));

            },
        }
    );
}

/** Обновления части полей объекта типа DeliveryServiceManager */
export function usePatchDeliveryServiceManager() {
    const queryClient = useQueryClient();

    return useMutation<PatchDeliveryServiceManagerResponse, FetchError, { id: number | string; } & PatchDeliveryServiceManagerRequest>(
        ({ id, ...data }) => apiClient.patch(`/logistic/delivery-service-managers/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceManager(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceManagers());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceManager(data));

            },
        }
    );
}

/** Удаление объекта типа DeliveryServiceManager */
export function useDeleteDeliveryServiceManager() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDeliveryServiceManagerResponse, FetchError, DeleteDeliveryServiceManagerRequest>(
        ({ id, }) => apiClient.delete(`/logistic/delivery-service-managers/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryServiceManager(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryServiceManagers());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryServiceManager(data));

            },
        }
    );
}

/** Поиск объектов типа DeliveryServiceManager */
export function useSearchDeliveryServiceManagers(data: SearchDeliveryServiceManagersRequest, enabled = true) {
    return useQuery<SearchDeliveryServiceManagersResponse, FetchError>({
        queryKey: QueryKeys.searchDeliveryServiceManagers(data),
        queryFn: () => apiClient.post(`/logistic/delivery-service-managers:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа DeliveryServiceManager */
export function useSearchOneDeliveryServiceManager(data: SearchOneDeliveryServiceManagerRequest, enabled = true) {
    return useQuery<SearchOneDeliveryServiceManagerResponse, FetchError>({
        queryKey: QueryKeys.searchOneDeliveryServiceManager(data),
        queryFn: () => apiClient.post(`/logistic/delivery-service-managers:search-one`, { data }),
        enabled,
    });
}

/** Создание объекта типа FederalDistrict */
export function useCreateFederalDistrict() {
    return useMutation<CreateFederalDistrictResponse, FetchError, CreateFederalDistrictRequest>(
        (data) => apiClient.post(`/logistic/federal-districts`, { data }),
    );
}

/** Получение объекта типа FederalDistrict */
export function useFederalDistrict({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetFederalDistrictResponse, FetchError>({
        queryKey: QueryKeys.getFederalDistrict(id),
        queryFn: () => apiClient.get(`/logistic/federal-districts/${id}`, { params }),
        enabled,
    });
}

/** Замена объекта типа FederalDistrict */
export function useReplaceFederalDistrict() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceFederalDistrictResponse, FetchError, { id: number | string; } & ReplaceFederalDistrictRequest>(
        ({ id, ...data }) => apiClient.put(`/logistic/federal-districts/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getFederalDistrict(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchFederalDistricts());

                queryClient.invalidateQueries(QueryKeys.searchOneFederalDistrict(data));

            },
        }
    );
}

/** Обновления части полей объекта типа FederalDistrict */
export function usePatchFederalDistrict() {
    const queryClient = useQueryClient();

    return useMutation<PatchFederalDistrictResponse, FetchError, { id: number | string; } & PatchFederalDistrictRequest>(
        ({ id, ...data }) => apiClient.patch(`/logistic/federal-districts/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getFederalDistrict(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchFederalDistricts());

                queryClient.invalidateQueries(QueryKeys.searchOneFederalDistrict(data));

            },
        }
    );
}

/** Удаление объекта типа FederalDistrict */
export function useDeleteFederalDistrict() {
    const queryClient = useQueryClient();

    return useMutation<DeleteFederalDistrictResponse, FetchError, DeleteFederalDistrictRequest>(
        ({ id, }) => apiClient.delete(`/logistic/federal-districts/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getFederalDistrict(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchFederalDistricts());

                queryClient.invalidateQueries(QueryKeys.searchOneFederalDistrict(data));

            },
        }
    );
}

/** Поиск объектов типа FederalDistrict */
export function useSearchFederalDistricts(data: SearchFederalDistrictsRequest, enabled = true) {
    return useQuery<SearchFederalDistrictsResponse, FetchError>({
        queryKey: QueryKeys.searchFederalDistricts(data),
        queryFn: () => apiClient.post(`/logistic/federal-districts:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа FederalDistrict */
export function useSearchOneFederalDistrict(data: SearchOneFederalDistrictRequest, enabled = true) {
    return useQuery<SearchOneFederalDistrictResponse, FetchError>({
        queryKey: QueryKeys.searchOneFederalDistrict(data),
        queryFn: () => apiClient.post(`/logistic/federal-districts:search-one`, { data }),
        enabled,
    });
}

/** Создание объекта типа Region */
export function useCreateRegion() {
    return useMutation<CreateRegionResponse, FetchError, CreateRegionRequest>(
        (data) => apiClient.post(`/logistic/regions`, { data }),
    );
}

/** Получение объекта типа Region */
export function useRegion({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetRegionResponse, FetchError>({
        queryKey: QueryKeys.getRegion(id),
        queryFn: () => apiClient.get(`/logistic/regions/${id}`, {}),
        enabled,
    });
}

/** Замена объекта типа Region */
export function useReplaceRegion() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceRegionResponse, FetchError, { id: number | string; } & ReplaceRegionRequest>(
        ({ id, ...data }) => apiClient.put(`/logistic/regions/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getRegion(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchRegions());

                queryClient.invalidateQueries(QueryKeys.searchOneRegion(data));

            },
        }
    );
}

/** Обновления части полей объекта типа Region */
export function usePatchRegion() {
    const queryClient = useQueryClient();

    return useMutation<PatchRegionResponse, FetchError, { id: number | string; } & PatchRegionRequest>(
        ({ id, ...data }) => apiClient.patch(`/logistic/regions/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getRegion(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchRegions());

                queryClient.invalidateQueries(QueryKeys.searchOneRegion(data));

            },
        }
    );
}

/** Удаление объекта типа Region */
export function useDeleteRegion() {
    const queryClient = useQueryClient();

    return useMutation<DeleteRegionResponse, FetchError, DeleteRegionRequest>(
        ({ id, }) => apiClient.delete(`/logistic/regions/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getRegion(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchRegions());

                queryClient.invalidateQueries(QueryKeys.searchOneRegion(data));

            },
        }
    );
}

/** Поиск объектов типа Region */
export function useSearchRegions(data: SearchRegionsRequest, enabled = true) {
    return useQuery<SearchRegionsResponse, FetchError>({
        queryKey: QueryKeys.searchRegions(data),
        queryFn: () => apiClient.post(`/logistic/regions:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа Region */
export function useSearchOneRegion(data: SearchOneRegionRequest, enabled = true) {
    return useQuery<SearchOneRegionResponse, FetchError>({
        queryKey: QueryKeys.searchOneRegion(data),
        queryFn: () => apiClient.post(`/logistic/regions:search-one`, { data }),
        enabled,
    });
}

/** Создание объекта типа DeliveryPrice */
export function useCreateDeliveryPrice() {
    return useMutation<CreateDeliveryPriceResponse, FetchError, CreateDeliveryPriceRequest>(
        (data) => apiClient.post(`/logistic/delivery-prices`, { data }),
    );
}

/** Получение объекта типа DeliveryPrice */
export function useDeliveryPrice({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetDeliveryPriceResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryPrice(id),
        queryFn: () => apiClient.get(`/logistic/delivery-prices/${id}`, { params }),
        enabled,
    });
}

/** Замена объекта типа DeliveryPrice */
export function useReplaceDeliveryPrice() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceDeliveryPriceResponse, FetchError, { id: number | string; } & ReplaceDeliveryPriceRequest>(
        ({ id, ...data }) => apiClient.put(`/logistic/delivery-prices/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryPrice(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryPrices());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryPrice(data));

            },
        }
    );
}

/** Обновления части полей объекта типа DeliveryPrice */
export function usePatchDeliveryPrice() {
    const queryClient = useQueryClient();

    return useMutation<PatchDeliveryPriceResponse, FetchError, { id: number | string; } & PatchDeliveryPriceRequest>(
        ({ id, ...data }) => apiClient.patch(`/logistic/delivery-prices/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryPrice(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryPrices());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryPrice(data));

            },
        }
    );
}

/** Удаление объекта типа DeliveryPrice */
export function useDeleteDeliveryPrice() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDeliveryPriceResponse, FetchError, DeleteDeliveryPriceRequest>(
        ({ id, }) => apiClient.delete(`/logistic/delivery-prices/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getDeliveryPrice(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchDeliveryPrices());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryPrice(data));

            },
        }
    );
}

/** Поиск объектов типа DeliveryPrice */
export function useSearchDeliveryPrices(data: SearchDeliveryPricesRequest, enabled = true) {
    return useQuery<SearchDeliveryPricesResponse, FetchError>({
        queryKey: QueryKeys.searchDeliveryPrices(data),
        queryFn: () => apiClient.post(`/logistic/delivery-prices:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа DeliveryPrice */
export function useSearchOneDeliveryPrice(data: SearchOneDeliveryPriceRequest, enabled = true) {
    return useQuery<SearchOneDeliveryPriceResponse, FetchError>({
        queryKey: QueryKeys.searchOneDeliveryPrice(data),
        queryFn: () => apiClient.post(`/logistic/delivery-prices:search-one`, { data }),
        enabled,
    });
}

/** Поиск тарифов для справочника */
export function useSearchTariffEnumValues(data: SearchTariffEnumValuesRequest, enabled = true) {
    return useQuery<SearchTariffEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchTariffEnumValues(data),
        queryFn: () => apiClient.post(`/logistic/tariff-enum-values:search`, { data }),
        enabled,
    });
}

/** Получение объекта типа DeliveryKpi */
export function useDeliveryKpi(enabled = true) {
    return useQuery<GetDeliveryKpiResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryKpi(),
        queryFn: () => apiClient.get(`/logistic/delivery-kpi`, {}),
        enabled,
    });
}

/** Обновления части полей объекта типа DeliveryKpi */
export function usePatchDeliveryKpi() {
    return useMutation<PatchDeliveryKpiResponse, FetchError, PatchDeliveryKpiRequest>(
        (data) => apiClient.patch(`/logistic/delivery-kpi`, { data }),
    );
}

/** Замена объекта типа DeliveryKpi */
export function useReplaceDeliveryKpi() {
    return useMutation<ReplaceDeliveryKpiResponse, FetchError, ReplaceDeliveryKpiRequest>(
        (data) => apiClient.put(`/logistic/delivery-kpi`, { data }),
    );
}

/** Получение списка доступных полей */
export function useDeliveryKpiMeta(enabled = true) {
    return useQuery<GetDeliveryKpiMetaResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryKpiMeta(),
        queryFn: () => apiClient.get(`/logistic/delivery-kpi:meta`, {}),
        enabled,
    });
}

/** Поиск объектов типа DeliveryKpiCt */
export function useSearchDeliveryKpiCts(data: SearchDeliveryKpiCtsRequest, enabled = true) {
    return useQuery<SearchDeliveryKpiCtsResponse, FetchError>({
        queryKey: QueryKeys.searchDeliveryKpiCts(data),
        queryFn: () => apiClient.post(`/logistic/delivery-kpi-ct:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа DeliveryKpiCt */
export function useSearchOneDeliveryKpiCt(data: SearchOneDeliveryKpiCtRequest, enabled = true) {
    return useQuery<SearchOneDeliveryKpiCtResponse, FetchError>({
        queryKey: QueryKeys.searchOneDeliveryKpiCt(data),
        queryFn: () => apiClient.post(`/logistic/delivery-kpi-ct:search-one`, { data }),
        enabled,
    });
}

/** Получение объекта типа DeliveryKpiCt */
export function useDeliveryKpiCt({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetDeliveryKpiCtResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryKpiCt(id),
        queryFn: () => apiClient.get(`/logistic/delivery-kpi-ct/${id}`, {}),
        enabled,
    });
}

/** Создание объекта типа DeliveryKpiCt */
export function useCreateDeliveryKpiCt() {
    const queryClient = useQueryClient();

    return useMutation<CreateDeliveryKpiCtResponse, FetchError, { id: number | string; } & CreateDeliveryKpiCtRequest>(
        ({ id, ...data }) => apiClient.post(`/logistic/delivery-kpi-ct/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDeliveryKpiCts());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryKpiCt(data));

                queryClient.invalidateQueries(QueryKeys.getDeliveryKpiCt(data?.id));

            },
        }
    );
}

/** Замена объекта типа DeliveryKpiCt */
export function useReplaceDeliveryKpiCt() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceDeliveryKpiCtResponse, FetchError, { id: number | string; } & ReplaceDeliveryKpiCtRequest>(
        ({ id, ...data }) => apiClient.put(`/logistic/delivery-kpi-ct/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDeliveryKpiCts());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryKpiCt(data));

                queryClient.invalidateQueries(QueryKeys.getDeliveryKpiCt(data?.id));

            },
        }
    );
}

/** Удаление объекта типа DeliveryKpiCt */
export function useDeleteDeliveryKpiCt() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDeliveryKpiCtResponse, FetchError, DeleteDeliveryKpiCtRequest>(
        ({ id, }) => apiClient.delete(`/logistic/delivery-kpi-ct/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDeliveryKpiCts());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryKpiCt(data));

                queryClient.invalidateQueries(QueryKeys.getDeliveryKpiCt(data?.id));

            },
        }
    );
}

/** Поиск объектов типа DeliveryKpiPpt */
export function useSearchDeliveryKpiPpts(data: SearchDeliveryKpiPptsRequest, enabled = true) {
    return useQuery<SearchDeliveryKpiPptsResponse, FetchError>({
        queryKey: QueryKeys.searchDeliveryKpiPpts(data),
        queryFn: () => apiClient.post(`/logistic/delivery-kpi-ppt:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа DeliveryKpiPpt */
export function useSearchOneDeliveryKpiPpt(data: SearchOneDeliveryKpiPptRequest, enabled = true) {
    return useQuery<SearchOneDeliveryKpiPptResponse, FetchError>({
        queryKey: QueryKeys.searchOneDeliveryKpiPpt(data),
        queryFn: () => apiClient.post(`/logistic/delivery-kpi-ppt:search-one`, { data }),
        enabled,
    });
}

/** Получение объекта типа DeliveryKpiPpt */
export function useDeliveryKpiPpt({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetDeliveryKpiPptResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryKpiPpt(id),
        queryFn: () => apiClient.get(`/logistic/delivery-kpi-ppt/${id}`, {}),
        enabled,
    });
}

/** Создание объекта типа DeliveryKpiPpt */
export function useCreateDeliveryKpiPpt() {
    const queryClient = useQueryClient();

    return useMutation<CreateDeliveryKpiPptResponse, FetchError, { id: number | string; } & CreateDeliveryKpiPptRequest>(
        ({ id, ...data }) => apiClient.post(`/logistic/delivery-kpi-ppt/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDeliveryKpiPpts());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryKpiPpt(data));

                queryClient.invalidateQueries(QueryKeys.getDeliveryKpiPpt(data?.id));

            },
        }
    );
}

/** Замена объекта типа DeliveryKpiPpt */
export function useReplaceDeliveryKpiPpt() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceDeliveryKpiPptResponse, FetchError, { id: number | string; } & ReplaceDeliveryKpiPptRequest>(
        ({ id, ...data }) => apiClient.put(`/logistic/delivery-kpi-ppt/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDeliveryKpiPpts());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryKpiPpt(data));

                queryClient.invalidateQueries(QueryKeys.getDeliveryKpiPpt(data?.id));

            },
        }
    );
}

/** Удаление объекта типа DeliveryKpiPpt */
export function useDeleteDeliveryKpiPpt() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDeliveryKpiPptResponse, FetchError, DeleteDeliveryKpiPptRequest>(
        ({ id, }) => apiClient.delete(`/logistic/delivery-kpi-ppt/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDeliveryKpiPpts());

                queryClient.invalidateQueries(QueryKeys.searchOneDeliveryKpiPpt(data));

                queryClient.invalidateQueries(QueryKeys.getDeliveryKpiPpt(data?.id));

            },
        }
    );
}

/** Получение объекта типа DeliveryMethod */
export function useDeliveryMethods(enabled = true) {
    return useQuery<GetDeliveryMethodsResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryMethods(),
        queryFn: () => apiClient.get(`/logistic/delivery-methods`, {}),
        enabled,
    });
}

/** Получение объекта типа DeliveryServiceStatus */
export function useDeliveryServiceStatuses(enabled = true) {
    return useQuery<GetDeliveryServiceStatusesResponse, FetchError>({
        queryKey: QueryKeys.getDeliveryServiceStatuses(),
        queryFn: () => apiClient.get(`/logistic/delivery-service-statuses`, {}),
        enabled,
    });
}

/** Получение объекта типа ShipmentMethod */
export function useShipmentMethods(enabled = true) {
    return useQuery<GetShipmentMethodsResponse, FetchError>({
        queryKey: QueryKeys.getShipmentMethods(),
        queryFn: () => apiClient.get(`/logistic/shipment-methods`, {}),
        enabled,
    });
}

/** Обновить данные по грузу */
export function usePatchCargo() {
    const queryClient = useQueryClient();

    return useMutation<PatchCargoResponse, FetchError, { id: number | string; } & PatchCargoRequest>(
        ({ id, ...data }) => apiClient.patch(`/logistic/cargo/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCargo());

            },
        }
    );
}

/** Отмена груза */
export function useCancelCargo() {
    const queryClient = useQueryClient();

    return useMutation<CancelCargoResponse, FetchError, CancelCargoRequest>(
        ({ id, }) => apiClient.post(`/logistic/cargo/${id}:cancel`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCargo());

            },
        }
    );
}

/** Поиск грузов */
export function useSearchCargo(data: SearchCargoRequest, enabled = true) {
    return useQuery<SearchCargoResponse, FetchError>({
        queryKey: QueryKeys.searchCargo(data),
        queryFn: () => apiClient.post(`/logistic/cargo:search`, { data }),
        enabled,
    });
}

/** Отменить заказ на забор груза */
export function useCancelCargoOrders() {
    const queryClient = useQueryClient();

    return useMutation<CancelCargoOrdersResponse, FetchError, CancelCargoOrdersRequest>(
        ({ id, }) => apiClient.post(`/logistic/cargo-orders/${id}:cancel`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCargoOrders());

            },
        }
    );
}

/** Поиск заказов на забор груза */
export function useSearchCargoOrders(data: SearchCargoOrdersRequest, enabled = true) {
    return useQuery<SearchCargoOrdersResponse, FetchError>({
        queryKey: QueryKeys.searchCargoOrders(data),
        queryFn: () => apiClient.post(`/logistic/cargo-orders:search`, { data }),
        enabled,
    });
}
