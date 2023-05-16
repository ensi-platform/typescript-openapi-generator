import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { GetBrandsMetaResponse, SearchBrandsRequest, SearchBrandsResponse, SearchBrandEnumValuesRequest, SearchBrandEnumValuesResponse, CreateBrandRequest, CreateBrandResponse, PreloadBrandImageRequest, PreloadBrandImageResponse, GetBrandResponse, ReplaceBrandRequest, ReplaceBrandResponse, PatchBrandRequest, PatchBrandResponse, DeleteBrandRequest, DeleteBrandResponse, UploadBrandImageRequest, UploadBrandImageResponse, DeleteBrandImageRequest, DeleteBrandImageResponse, GetCategoriesMetaResponse, GetCategoryPropertiesMetaResponse, SearchCategoriesRequest, SearchCategoriesResponse, SearchCategoryEnumValuesRequest, SearchCategoryEnumValuesResponse, CreateCategoryRequest, CreateCategoryResponse, BindCategoryPropertiesRequest, BindCategoryPropertiesResponse, GetCategoryResponse, ReplaceCategoryRequest, ReplaceCategoryResponse, DeleteCategoryRequest, DeleteCategoryResponse, GetCategoriesTreeResponse, GetPropertiesMetaResponse, SearchPropertiesRequest, SearchPropertiesResponse, CreatePropertyRequest, CreatePropertyResponse, GetPropertyResponse, ReplacePropertyRequest, ReplacePropertyResponse, PatchPropertyRequest, PatchPropertyResponse, DeletePropertyRequest, DeletePropertyResponse, GetPropertiesTypesResponse, CreateDirectoryValueRequest, CreateDirectoryValueResponse, MassCreateDirectoryValueRequest, MassCreateDirectoryValueResponse, SearchDirectoryValuesRequest, SearchDirectoryValuesResponse, PreloadDirectoryValueImageRequest, PreloadDirectoryValueImageResponse, PreloadDirectoryValueFileRequest, PreloadDirectoryValueFileResponse, GetDirectoryValueResponse, ReplaceDirectoryValueRequest, ReplaceDirectoryValueResponse, DeleteDirectoryValueRequest, DeleteDirectoryValueResponse, PreloadImageRequest, PreloadImageResponse, SearchProductsRequest, SearchProductsResponse, CreateProductRequest, CreateProductResponse, GetProductsMetaResponse, MassPatchProductsRequest, MassPatchProductsResponse, MassPatchProductsByQueryRequest, MassPatchProductsByQueryResponse, GetProductsCommonAttributesRequest, GetProductsCommonAttributesResponse, GetProductResponse, ReplaceProductRequest, ReplaceProductResponse, PatchProductRequest, PatchProductResponse, DeleteProductRequest, DeleteProductResponse, SearchProductDraftsRequest, SearchProductDraftsResponse, SearchProductDraftEnumValuesRequest, SearchProductDraftEnumValuesResponse, GetProductDraftResponse, ReplaceProductAttributesRequest, ReplaceProductAttributesResponse, PatchProductAttributesRequest, PatchProductAttributesResponse, ReplaceImagesRequest, ReplaceImagesResponse, PatchImagesRequest, PatchImagesResponse, UploadProductImageRequest, UploadProductImageResponse, DeleteProductImageRequest, DeleteProductImageResponse, SearchProductFieldsRequest, SearchProductFieldsResponse, GetProductFieldResponse, PatchProductFieldRequest, PatchProductFieldResponse, GetProductTypesResponse, SearchOffersRequest, SearchOffersResponse, CreateOfferRequest, CreateOfferResponse, GetOfferResponse, ReplaceOfferRequest, ReplaceOfferResponse, DeleteOfferRequest, DeleteOfferResponse, CreateCatalogProductGroupRequest, CreateCatalogProductGroupResponse, GetCatalogProductGroupResponse, ReplaceCatalogProductGroupRequest, ReplaceCatalogProductGroupResponse, PatchCatalogProductGroupRequest, PatchCatalogProductGroupResponse, DeleteCatalogProductGroupRequest, DeleteCatalogProductGroupResponse, BindCatalogProductGroupProductsRequest, BindCatalogProductGroupProductsResponse, DeleteCatalogProductGroupsRequest, DeleteCatalogProductGroupsResponse, GetCatalogProductGroupsMetaResponse, SearchCatalogProductGroupsRequest, SearchCatalogProductGroupsResponse, SearchOneCatalogProductGroupRequest, SearchOneCatalogProductGroupResponse, SearchBulkOperationsRequest, SearchBulkOperationsResponse, GetBulkOperationsMetaResponse } from "./types";

export const QueryKeys = {
    getBrandsMeta: () => ['get-brands-meta'],
    searchBrands: (data?: any) => data ? ['search-brands', data] : ['search-brands'],
    searchBrandEnumValues: (data?: any) => data ? ['search-brand-enum-values', data] : ['search-brand-enum-values'],
    getBrand: (id?: number | string) => id ? ['get-brand', id] : ['get-brand'],
    getCategoriesMeta: () => ['get-categories-meta'],
    getCategoryPropertiesMeta: () => ['get-category-properties-meta'],
    searchCategories: (data?: any) => data ? ['search-categories', data] : ['search-categories'],
    searchCategoryEnumValues: (data?: any) => data ? ['search-category-enum-values', data] : ['search-category-enum-values'],
    getCategory: (id?: number | string) => id ? ['get-category', id] : ['get-category'],
    getCategoriesTree: () => ['get-categories-tree'],
    getPropertiesMeta: () => ['get-properties-meta'],
    searchProperties: (data?: any) => data ? ['search-properties', data] : ['search-properties'],
    getProperty: (id?: number | string) => id ? ['get-property', id] : ['get-property'],
    getPropertiesTypes: () => ['get-properties-types'],
    searchDirectoryValues: (data?: any) => data ? ['search-directory-values', data] : ['search-directory-values'],
    getDirectoryValue: (id?: number | string) => id ? ['get-directory-value', id] : ['get-directory-value'],
    searchProducts: (data?: any) => data ? ['search-products', data] : ['search-products'],
    getProductsMeta: () => ['get-products-meta'],
    getProductsCommonAttributes: (data?: any) => data ? ['get-products-common-attributes', data] : ['get-products-common-attributes'],
    getProduct: (id?: number | string) => id ? ['get-product', id] : ['get-product'],
    searchProductDrafts: (data?: any) => data ? ['search-product-drafts', data] : ['search-product-drafts'],
    searchProductDraftEnumValues: (data?: any) => data ? ['search-product-draft-enum-values', data] : ['search-product-draft-enum-values'],
    getProductDraft: (id?: number | string) => id ? ['get-product-draft', id] : ['get-product-draft'],
    searchProductFields: (data?: any) => data ? ['search-product-fields', data] : ['search-product-fields'],
    getProductField: (id?: number | string) => id ? ['get-product-field', id] : ['get-product-field'],
    getProductTypes: () => ['get-product-types'],
    searchOffers: (data?: any) => data ? ['search-offers', data] : ['search-offers'],
    getOffer: (id?: number | string) => id ? ['get-offer', id] : ['get-offer'],
    getCatalogProductGroup: (id?: number | string) => id ? ['get-catalog-product-group', id] : ['get-catalog-product-group'],
    getCatalogProductGroupsMeta: () => ['get-catalog-product-groups-meta'],
    searchCatalogProductGroups: (data?: any) => data ? ['search-catalog-product-groups', data] : ['search-catalog-product-groups'],
    searchOneCatalogProductGroup: (data?: any) => data ? ['search-one-catalog-product-group', data] : ['search-one-catalog-product-group'],
    searchBulkOperations: (data?: any) => data ? ['search-bulk-operations', data] : ['search-bulk-operations'],
    getBulkOperationsMeta: () => ['get-bulk-operations-meta'],
}
    ;

/** Получение списка доступных полей */
export function useBrandsMeta(enabled = true) {
    return useQuery<GetBrandsMetaResponse, FetchError>({
        queryKey: QueryKeys.getBrandsMeta(),
        queryFn: () => apiClient.get(`/catalog/brands:meta`, {}),
        enabled,
    });
}

/** Поиск брендов */
export function useSearchBrands(data: SearchBrandsRequest, enabled = true) {
    return useQuery<SearchBrandsResponse, FetchError>({
        queryKey: QueryKeys.searchBrands(data),
        queryFn: () => apiClient.post(`/catalog/brands:search`, { data }),
        enabled,
    });
}

/** Поиск брендов для справочника */
export function useSearchBrandEnumValues(data: SearchBrandEnumValuesRequest, enabled = true) {
    return useQuery<SearchBrandEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchBrandEnumValues(data),
        queryFn: () => apiClient.post(`/catalog/brand-enum-values:search`, { data }),
        enabled,
    });
}

/** Создание бренда */
export function useCreateBrand() {
    return useMutation<CreateBrandResponse, FetchError, CreateBrandRequest>(
        (data) => apiClient.post(`/catalog/brands`, { data }),
    );
}

/** Загрузка картинки для бренда */
export function usePreloadBrandImage() {
    return useMutation<PreloadBrandImageResponse, FetchError, PreloadBrandImageRequest>(
        (data) => apiClient.post(`/catalog/brands:preload-image`, { data: data.formData }),
    );
}

/** Получение бренда */
export function useBrand({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetBrandResponse, FetchError>({
        queryKey: QueryKeys.getBrand(id),
        queryFn: () => apiClient.get(`/catalog/brands/${id}`, {}),
        enabled,
    });
}

/** Обновление данных бренда */
export function useReplaceBrand() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceBrandResponse, FetchError, { id: number | string; } & ReplaceBrandRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/brands/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBrands());

                queryClient.invalidateQueries(QueryKeys.getBrand(data?.id));

            },
        }
    );
}

/** Обновляет отдельные поля бренда */
export function usePatchBrand() {
    const queryClient = useQueryClient();

    return useMutation<PatchBrandResponse, FetchError, { id: number | string; } & PatchBrandRequest>(
        ({ id, ...data }) => apiClient.patch(`/catalog/brands/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBrands());

                queryClient.invalidateQueries(QueryKeys.getBrand(data?.id));

            },
        }
    );
}

/** Удаление бренда */
export function useDeleteBrand() {
    const queryClient = useQueryClient();

    return useMutation<DeleteBrandResponse, FetchError, DeleteBrandRequest>(
        ({ id, }) => apiClient.delete(`/catalog/brands/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBrands());

                queryClient.invalidateQueries(QueryKeys.getBrand(data?.id));

            },
        }
    );
}

/** Загрузка картинки для бренда */
export function useUploadBrandImage() {
    const queryClient = useQueryClient();

    return useMutation<UploadBrandImageResponse, FetchError, { id: number | string; } & UploadBrandImageRequest>(
        ({ id, ...data }) => apiClient.post(`/catalog/brands/${id}:upload-image`, { data: data.formData }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBrands());

                queryClient.invalidateQueries(QueryKeys.getBrand(data?.id));

            },
        }
    );
}

/** Удаление текущей картинки бренда */
export function useDeleteBrandImage() {
    const queryClient = useQueryClient();

    return useMutation<DeleteBrandImageResponse, FetchError, DeleteBrandImageRequest>(
        ({ id, }) => apiClient.post(`/catalog/brands/${id}:delete-image`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBrands());

                queryClient.invalidateQueries(QueryKeys.getBrand(data?.id));

            },
        }
    );
}

/** Получение списка доступных полей */
export function useCategoriesMeta(enabled = true) {
    return useQuery<GetCategoriesMetaResponse, FetchError>({
        queryKey: QueryKeys.getCategoriesMeta(),
        queryFn: () => apiClient.get(`/catalog/categories:meta`, {}),
        enabled,
    });
}

/** Получение списка доступных полей для атрибутов категории */
export function useCategoryPropertiesMeta(enabled = true) {
    return useQuery<GetCategoryPropertiesMetaResponse, FetchError>({
        queryKey: QueryKeys.getCategoryPropertiesMeta(),
        queryFn: () => apiClient.get(`/catalog/category-properties:meta`, {}),
        enabled,
    });
}

/**
 * ### Поиск категорий, удовлетворяющих фильтру.
 *
 * Доступные значения include:
 * * _properties_ - Актуальные атрибуты, доступные товарам категории
 * * _hidden_properties_ - Связанные с категорией, но неиспользуемые атрибуты, например, по причине неактивности
 *
 */
export function useSearchCategories(data: SearchCategoriesRequest, enabled = true) {
    return useQuery<SearchCategoriesResponse, FetchError>({
        queryKey: QueryKeys.searchCategories(data),
        queryFn: () => apiClient.post(`/catalog/categories:search`, { data }),
        enabled,
    });
}

/** Поиск категорий для справочника */
export function useSearchCategoryEnumValues(data: SearchCategoryEnumValuesRequest, enabled = true) {
    return useQuery<SearchCategoryEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchCategoryEnumValues(data),
        queryFn: () => apiClient.post(`/catalog/category-enum-values:search`, { data }),
        enabled,
    });
}

/** Создание новой категории */
export function useCreateCategory() {
    return useMutation<CreateCategoryResponse, FetchError, CreateCategoryRequest>(
        (data) => apiClient.post(`/catalog/categories`, { data }),
    );
}

/** Запрос на изменение привязанных к категории атрибутов */
export function useBindCategoryProperties() {
    const queryClient = useQueryClient();

    return useMutation<BindCategoryPropertiesResponse, FetchError, { id: number | string; } & BindCategoryPropertiesRequest>(
        ({ id, ...data }) => apiClient.post(`/catalog/categories/${id}:bind-properties`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCategories());

                queryClient.invalidateQueries(QueryKeys.getCategory(data?.id));

            },
        }
    );
}

/**
 * ### Получение категории по идентификатору.
 *
 * Доступные значения include:
 * * _properties_ - Актуальные атрибуты, доступные товарам категории
 * * _hidden_properties_ - Связанные с категорией, но неиспользуемые атрибуты, например, по причине неактивности
 *
 */
export function useCategory({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetCategoryResponse, FetchError>({
        queryKey: QueryKeys.getCategory(id),
        queryFn: () => apiClient.get(`/catalog/categories/${id}`, { params }),
        enabled,
    });
}

/** Запрос на обновление категории */
export function useReplaceCategory() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceCategoryResponse, FetchError, { id: number | string; } & ReplaceCategoryRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/categories/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCategories());

                queryClient.invalidateQueries(QueryKeys.getCategory(data?.id));

            },
        }
    );
}

/** Запрос на удаление категории */
export function useDeleteCategory() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCategoryResponse, FetchError, DeleteCategoryRequest>(
        ({ id, }) => apiClient.delete(`/catalog/categories/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchCategories());

                queryClient.invalidateQueries(QueryKeys.getCategory(data?.id));

            },
        }
    );
}

/** Формирование полного дерева категорий */
export function useCategoriesTree(enabled = true) {
    return useQuery<GetCategoriesTreeResponse, FetchError>({
        queryKey: QueryKeys.getCategoriesTree(),
        queryFn: () => apiClient.post(`/catalog/categories:tree`, {}),
        enabled,
    });
}

/** Получение списка доступных полей */
export function usePropertiesMeta(enabled = true) {
    return useQuery<GetPropertiesMetaResponse, FetchError>({
        queryKey: QueryKeys.getPropertiesMeta(),
        queryFn: () => apiClient.get(`/catalog/properties:meta`, {}),
        enabled,
    });
}

/**
 * ### Поиск свойств, удовлетворяющих фильтру
 *
 * Доступные связи: ```directory```.
 *
 */
export function useSearchProperties(data: SearchPropertiesRequest, enabled = true) {
    return useQuery<SearchPropertiesResponse, FetchError>({
        queryKey: QueryKeys.searchProperties(data),
        queryFn: () => apiClient.post(`/catalog/properties:search`, { data }),
        enabled,
    });
}

/** Запрос на создание нового свойства */
export function useCreateProperty() {
    return useMutation<CreatePropertyResponse, FetchError, CreatePropertyRequest>(
        (data) => apiClient.post(`/catalog/properties`, { data }),
    );
}

/**
 * ### Получение данных свойства
 *
 * Доступные связи: ```directory```.
 *
 */
export function useProperty({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetPropertyResponse, FetchError>({
        queryKey: QueryKeys.getProperty(id),
        queryFn: () => apiClient.get(`/catalog/properties/${id}`, { params }),
        enabled,
    });
}

/** Запрос на обновление атрибута */
export function useReplaceProperty() {
    const queryClient = useQueryClient();

    return useMutation<ReplacePropertyResponse, FetchError, { id: number | string; } & ReplacePropertyRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/properties/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProperties());

                queryClient.invalidateQueries(QueryKeys.getProperty(data?.id));

            },
        }
    );
}

/** Запрос на обновление отдельных полей атрибута */
export function usePatchProperty() {
    const queryClient = useQueryClient();

    return useMutation<PatchPropertyResponse, FetchError, { id: number | string; } & PatchPropertyRequest>(
        ({ id, ...data }) => apiClient.patch(`/catalog/properties/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProperties());

                queryClient.invalidateQueries(QueryKeys.getProperty(data?.id));

            },
        }
    );
}

/** Запрос на удаление свойства */
export function useDeleteProperty() {
    const queryClient = useQueryClient();

    return useMutation<DeletePropertyResponse, FetchError, DeletePropertyRequest>(
        ({ id, }) => apiClient.delete(`/catalog/properties/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProperties());

                queryClient.invalidateQueries(QueryKeys.getProperty(data?.id));

            },
        }
    );
}

/** Получение доступных типов свойств, соответствующих значениям перечисления CatalogPropertyTypeEnum */
export function usePropertiesTypes(enabled = true) {
    return useQuery<GetPropertiesTypesResponse, FetchError>({
        queryKey: QueryKeys.getPropertiesTypes(),
        queryFn: () => apiClient.get(`/catalog/properties/properties-types`, {}),
        enabled,
    });
}

/** Запрос на создание нового значения справочника */
export function useCreateDirectoryValue() {
    const queryClient = useQueryClient();

    return useMutation<CreateDirectoryValueResponse, FetchError, { id: number | string; } & CreateDirectoryValueRequest>(
        ({ id, ...data }) => apiClient.post(`/catalog/properties/${id}:add-directory`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProperties());

                queryClient.invalidateQueries(QueryKeys.getProperty(data?.id));

            },
        }
    );
}

/** Запрос на создание новых значений справочника */
export function useMassCreateDirectoryValue() {
    const queryClient = useQueryClient();

    return useMutation<MassCreateDirectoryValueResponse, FetchError, { id: number | string; } & MassCreateDirectoryValueRequest>(
        ({ id, ...data }) => apiClient.post(`/catalog/properties/${id}:mass-add-directory`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProperties());

                queryClient.invalidateQueries(QueryKeys.getProperty(data?.id));

            },
        }
    );
}

/** Поиск значений справочников, удовлетворяющих фильтру */
export function useSearchDirectoryValues(data: SearchDirectoryValuesRequest, enabled = true) {
    return useQuery<SearchDirectoryValuesResponse, FetchError>({
        queryKey: QueryKeys.searchDirectoryValues(data),
        queryFn: () => apiClient.post(`/catalog/properties/directory:search`, { data }),
        enabled,
    });
}

/** Загрузка картинки для значения справочника */
export function usePreloadDirectoryValueImage() {
    return useMutation<PreloadDirectoryValueImageResponse, FetchError, PreloadDirectoryValueImageRequest>(
        (data) => apiClient.post(`/catalog/properties/directory:preload-image`, { data: data.formData }),
    );
}

/** Загрузка файла для значения справочника */
export function usePreloadDirectoryValueFile() {
    return useMutation<PreloadDirectoryValueFileResponse, FetchError, PreloadDirectoryValueFileRequest>(
        (data) => apiClient.post(`/catalog/properties/directory:preload-file`, { data: data.formData }),
    );
}

/** Возвращает данные значения справочника */
export function useDirectoryValue({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetDirectoryValueResponse, FetchError>({
        queryKey: QueryKeys.getDirectoryValue(id),
        queryFn: () => apiClient.get(`/catalog/properties/directory/${id}`, {}),
        enabled,
    });
}

/** Запрос на обновление значения справочника */
export function useReplaceDirectoryValue() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceDirectoryValueResponse, FetchError, { id: number | string; } & ReplaceDirectoryValueRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/properties/directory/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDirectoryValues());

                queryClient.invalidateQueries(QueryKeys.getDirectoryValue(data?.id));

            },
        }
    );
}

/** Запрос на удаление значения справочника */
export function useDeleteDirectoryValue() {
    const queryClient = useQueryClient();

    return useMutation<DeleteDirectoryValueResponse, FetchError, DeleteDirectoryValueRequest>(
        ({ id, }) => apiClient.delete(`/catalog/properties/directory/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchDirectoryValues());

                queryClient.invalidateQueries(QueryKeys.getDirectoryValue(data?.id));

            },
        }
    );
}

/** Загрузка картинки для товара или атрибута товара */
export function usePreloadImage() {
    return useMutation<PreloadImageResponse, FetchError, PreloadImageRequest>(
        (data) => apiClient.post(`/catalog/products:preload-image`, { data: data.formData }),
    );
}

/**
 * ### Поиск опубликованных товаров, удовлетворяющих фильтру
 *
 * Доступные значения include:
 * * _brand_ - Бренд
 * * _category_ - Категория
 * * _images_ - Изображения
 * * _attributes_ - Атрибуты с их значениями для товара
 * * _product_groups_ - Склейки, в которых состоит товар
 * * _product_groups.category_ - Склейки, в которых состоит товар, с данными по категории
 * * _product_groups.main_product_ - Склейки, в которых состоит товар, с данными по главному товару
 * * _product_groups.products_ - Склейки, в которых состоит товар, с данными по товарам склейки
 * * _no_filled_required_attributes_ - Есть ли у товара незаполненные обязательные атрибуты
 *
 */
export function useSearchProducts(data: SearchProductsRequest, enabled = true) {
    return useQuery<SearchProductsResponse, FetchError>({
        queryKey: QueryKeys.searchProducts(data),
        queryFn: () => apiClient.post(`/catalog/products:search`, { data }),
        enabled,
    });
}

/**
 * Создает новый товар и предложение по умолчанию с нулевым идентификатором продавца. Если передана цена `base_price`, она устанавливается в предложении.
 *
 */
export function useCreateProduct() {
    return useMutation<CreateProductResponse, FetchError, CreateProductRequest>(
        (data) => apiClient.post(`/catalog/products`, { data }),
    );
}

/** Получение списка доступных полей для списка товаров */
export function useProductsMeta(enabled = true) {
    return useQuery<GetProductsMetaResponse, FetchError>({
        queryKey: QueryKeys.getProductsMeta(),
        queryFn: () => apiClient.get(`/catalog/products:meta`, {}),
        enabled,
    });
}

/** Массовое изменение товаров */
export function useMassPatchProducts() {
    return useMutation<MassPatchProductsResponse, FetchError, MassPatchProductsRequest>(
        (data) => apiClient.post(`/catalog/products:mass-patch`, { data }),
    );
}

/** Массовое изменение заданной выборки товаров */
export function useMassPatchProductsByQuery() {
    return useMutation<MassPatchProductsByQueryResponse, FetchError, MassPatchProductsByQueryRequest>(
        (data) => apiClient.post(`/catalog/products:mass-patch-by-query`, { data }),
    );
}

/** Получить общие атрибуты выбранных товаров */
export function useProductsCommonAttributes(data: GetProductsCommonAttributesRequest, enabled = true) {
    return useQuery<GetProductsCommonAttributesResponse, FetchError>({
        queryKey: QueryKeys.getProductsCommonAttributes(data),
        queryFn: () => apiClient.post(`/catalog/products:common-attributes`, { data }),
        enabled,
    });
}

/** Запрос на получение данных опубликованного товара */
export function useProduct({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetProductResponse, FetchError>({
        queryKey: QueryKeys.getProduct(id),
        queryFn: () => apiClient.get(`/catalog/products/${id}`, { params }),
        enabled,
    });
}

/** Запрос на обновление товара */
export function useReplaceProduct() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceProductResponse, FetchError, { id: number | string; } & ReplaceProductRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/products/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Запрос на обновление отдельных полей товара */
export function usePatchProduct() {
    const queryClient = useQueryClient();

    return useMutation<PatchProductResponse, FetchError, { id: number | string; } & PatchProductRequest>(
        ({ id, ...data }) => apiClient.patch(`/catalog/products/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Запрос на удаление товара */
export function useDeleteProduct() {
    const queryClient = useQueryClient();

    return useMutation<DeleteProductResponse, FetchError, DeleteProductRequest>(
        ({ id, }) => apiClient.delete(`/catalog/products/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/**
 * ### Поиск черновиков товаров, удовлетворяющих фильтру
 *
 * Доступные значения include:
 * * _brand_ - Бренд
 * * _category_ - Категория
 * * _images_ - Изображения
 * * _attributes_ - Атрибуты с их значениями для товара
 * * _product_groups_ - Склейки, в которых состоит товар
 * * _product_groups.category_ - Склейки, в которых состоит товар, с данными по категории
 * * _product_groups.main_product_ - Склейки, в которых состоит товар, с данными по главному товару
 * * _product_groups.products_ - Склейки, в которых состоит товар, с данными по товарам склейки
 * * _no_filled_required_attributes_ - Есть ли у товара незаполненные обязательные атрибуты
 *
 */
export function useSearchProductDrafts(data: SearchProductDraftsRequest, enabled = true) {
    return useQuery<SearchProductDraftsResponse, FetchError>({
        queryKey: QueryKeys.searchProductDrafts(data),
        queryFn: () => apiClient.post(`/catalog/products/drafts:search`, { data }),
        enabled,
    });
}

/** Поиск черновиков товаров для справочника */
export function useSearchProductDraftEnumValues(data: SearchProductDraftEnumValuesRequest, enabled = true) {
    return useQuery<SearchProductDraftEnumValuesResponse, FetchError>({
        queryKey: QueryKeys.searchProductDraftEnumValues(data),
        queryFn: () => apiClient.post(`/catalog/products/draft-enum-values:search`, { data }),
        enabled,
    });
}

/**
 * ### Запрос на получение черновика товара
 *
 * Доступные значения include:
 * * _brand_ - Бренд
 * * _category_ - Категория
 * * _images_ - Изображения
 * * _attributes_ - Атрибуты с их значениями для товара
 * * _product_groups_ - Склейки, в которых состоит товар
 * * _product_groups.category_ - Склейки, в которых состоит товар, с данными по категории
 * * _product_groups.main_product_ - Склейки, в которых состоит товар, с данными по главному товару
 * * _product_groups.products_ - Склейки, в которых состоит товар, с данными по товарам склейки
 *
 */
export function useProductDraft({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetProductDraftResponse, FetchError>({
        queryKey: QueryKeys.getProductDraft(id),
        queryFn: () => apiClient.get(`/catalog/products/drafts/${id}`, { params }),
        enabled,
    });
}

/** Запрос на изменение всех значений атрибутов товара */
export function useReplaceProductAttributes() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceProductAttributesResponse, FetchError, { id: number | string; } & ReplaceProductAttributesRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/products/${id}/attributes`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Запрос на изменение отдельных значений атрибутов товара */
export function usePatchProductAttributes() {
    const queryClient = useQueryClient();

    return useMutation<PatchProductAttributesResponse, FetchError, { id: number | string; } & PatchProductAttributesRequest>(
        ({ id, ...data }) => apiClient.patch(`/catalog/products/${id}/attributes`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Обновление всех картинок товара. Не указанные в запросе будут удалены. */
export function useReplaceImages() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceImagesResponse, FetchError, { id: number | string; } & ReplaceImagesRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/products/${id}/images`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Добавление новых и обновление только заданных картинок. Не указанные в запросе не изменяются. */
export function usePatchImages() {
    const queryClient = useQueryClient();

    return useMutation<PatchImagesResponse, FetchError, { id: number | string; } & PatchImagesRequest>(
        ({ id, ...data }) => apiClient.patch(`/catalog/products/${id}/images`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Загрузка картинки товара */
export function useUploadProductImage() {
    const queryClient = useQueryClient();

    return useMutation<UploadProductImageResponse, FetchError, { id: number | string; } & UploadProductImageRequest>(
        ({ id, ...data }) => apiClient.post(`/catalog/products/${id}:upload-image`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Удаление картинки товара */
export function useDeleteProductImage() {
    const queryClient = useQueryClient();

    return useMutation<DeleteProductImageResponse, FetchError, { id: number | string; } & DeleteProductImageRequest>(
        ({ id, ...data }) => apiClient.post(`/catalog/products/${id}:delete-image`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProducts());

                queryClient.invalidateQueries(QueryKeys.getProduct(data?.id));

            },
        }
    );
}

/** Поиск полей товаров, удовлетворяющих условиям отбора */
export function useSearchProductFields(data: SearchProductFieldsRequest, enabled = true) {
    return useQuery<SearchProductFieldsResponse, FetchError>({
        queryKey: QueryKeys.searchProductFields(data),
        queryFn: () => apiClient.post(`/catalog/products/fields:search`, { data }),
        enabled,
    });
}

/** Получение настроек поля по идентификатору */
export function useProductField({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetProductFieldResponse, FetchError>({
        queryKey: QueryKeys.getProductField(id),
        queryFn: () => apiClient.get(`/catalog/products/fields/${id}`, {}),
        enabled,
    });
}

/** Обновление настроек поля товара */
export function usePatchProductField() {
    const queryClient = useQueryClient();

    return useMutation<PatchProductFieldResponse, FetchError, { id: number | string; } & PatchProductFieldRequest>(
        ({ id, ...data }) => apiClient.patch(`/catalog/products/fields/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProductFields());

                queryClient.invalidateQueries(QueryKeys.getProductField(data?.id));

            },
        }
    );
}

/** Получение доступных типов товаров, соответствующих значениям перечисления CatalogProductTypeEnum */
export function useProductTypes(enabled = true) {
    return useQuery<GetProductTypesResponse, FetchError>({
        queryKey: QueryKeys.getProductTypes(),
        queryFn: () => apiClient.get(`/catalog/products/product-types`, {}),
        enabled,
    });
}

/** Поиск офферов, удовлетворяющих фильтру */
export function useSearchOffers(data: SearchOffersRequest, enabled = true) {
    return useQuery<SearchOffersResponse, FetchError>({
        queryKey: QueryKeys.searchOffers(data),
        queryFn: () => apiClient.post(`/catalog/offers:search`, { data }),
        enabled,
    });
}

/** Запрос на создание нового оффера */
export function useCreateOffer() {
    return useMutation<CreateOfferResponse, FetchError, CreateOfferRequest>(
        (data) => apiClient.post(`/catalog/offers`, { data }),
    );
}

/** Запрос на получение оффера */
export function useOffer({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetOfferResponse, FetchError>({
        queryKey: QueryKeys.getOffer(id),
        queryFn: () => apiClient.get(`/catalog/offers/${id}`, { params }),
        enabled,
    });
}

/** Запрос на редактирование нового оффера */
export function useReplaceOffer() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceOfferResponse, FetchError, { id: number | string; } & ReplaceOfferRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/offers/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchOffers());

                queryClient.invalidateQueries(QueryKeys.getOffer(data?.id));

            },
        }
    );
}

/** Удаление объекта типа Offer */
export function useDeleteOffer() {
    const queryClient = useQueryClient();

    return useMutation<DeleteOfferResponse, FetchError, DeleteOfferRequest>(
        ({ id, }) => apiClient.delete(`/catalog/offers/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchOffers());

                queryClient.invalidateQueries(QueryKeys.getOffer(data?.id));

            },
        }
    );
}

/** Запрос на создание новой склейки */
export function useCreateCatalogProductGroup() {
    return useMutation<CreateCatalogProductGroupResponse, FetchError, CreateCatalogProductGroupRequest>(
        (data) => apiClient.post(`/catalog/product-groups`, { data }),
    );
}

/** Запрос на получение склейки товаров */
export function useCatalogProductGroup({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetCatalogProductGroupResponse, FetchError>({
        queryKey: QueryKeys.getCatalogProductGroup(id),
        queryFn: () => apiClient.get(`/catalog/product-groups/${id}`, { params }),
        enabled,
    });
}

/** Запрос на обновление данных склейки */
export function useReplaceCatalogProductGroup() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceCatalogProductGroupResponse, FetchError, { id: number | string; } & ReplaceCatalogProductGroupRequest>(
        ({ id, ...data }) => apiClient.put(`/catalog/product-groups/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getCatalogProductGroup(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchCatalogProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneCatalogProductGroup(data));

            },
        }
    );
}

/** Запрос на обновление отдельных данных склейки */
export function usePatchCatalogProductGroup() {
    const queryClient = useQueryClient();

    return useMutation<PatchCatalogProductGroupResponse, FetchError, { id: number | string; } & PatchCatalogProductGroupRequest>(
        ({ id, ...data }) => apiClient.patch(`/catalog/product-groups/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getCatalogProductGroup(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchCatalogProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneCatalogProductGroup(data));

            },
        }
    );
}

/** Запрос на удаление склейки */
export function useDeleteCatalogProductGroup() {
    const queryClient = useQueryClient();

    return useMutation<DeleteCatalogProductGroupResponse, FetchError, DeleteCatalogProductGroupRequest>(
        ({ id, }) => apiClient.delete(`/catalog/product-groups/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getCatalogProductGroup(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchCatalogProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneCatalogProductGroup(data));

            },
        }
    );
}

/** Запрос на изменение привязанных к товарной склейке товаров */
export function useBindCatalogProductGroupProducts() {
    const queryClient = useQueryClient();

    return useMutation<BindCatalogProductGroupProductsResponse, FetchError, { id: number | string; } & BindCatalogProductGroupProductsRequest>(
        ({ id, ...data }) => apiClient.post(`/catalog/product-groups/${id}:bind-products`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getCatalogProductGroup(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchCatalogProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneCatalogProductGroup(data));

            },
        }
    );
}

/** Массовое удаление товарных склеек */
export function useDeleteCatalogProductGroups() {
    return useMutation<DeleteCatalogProductGroupsResponse, FetchError, DeleteCatalogProductGroupsRequest>(
        (data) => apiClient.post(`/catalog/product-groups:mass-delete`, { data }),
    );
}

/** Получение списка доступных полей для списка склеек */
export function useCatalogProductGroupsMeta(enabled = true) {
    return useQuery<GetCatalogProductGroupsMetaResponse, FetchError>({
        queryKey: QueryKeys.getCatalogProductGroupsMeta(),
        queryFn: () => apiClient.get(`/catalog/product-groups:meta`, {}),
        enabled,
    });
}

/** Поиск склеек, удовлетворяющих фильтру */
export function useSearchCatalogProductGroups(data: SearchCatalogProductGroupsRequest, enabled = true) {
    return useQuery<SearchCatalogProductGroupsResponse, FetchError>({
        queryKey: QueryKeys.searchCatalogProductGroups(data),
        queryFn: () => apiClient.post(`/catalog/product-groups:search`, { data }),
        enabled,
    });
}

/** Поиск склейки, удовлетворяющей фильтру */
export function useSearchOneCatalogProductGroup(data: SearchOneCatalogProductGroupRequest, enabled = true) {
    return useQuery<SearchOneCatalogProductGroupResponse, FetchError>({
        queryKey: QueryKeys.searchOneCatalogProductGroup(data),
        queryFn: () => apiClient.post(`/catalog/product-groups:search-one`, { data }),
        enabled,
    });
}

/** Поиск массовых операций */
export function useSearchBulkOperations(data: SearchBulkOperationsRequest, enabled = true) {
    return useQuery<SearchBulkOperationsResponse, FetchError>({
        queryKey: QueryKeys.searchBulkOperations(data),
        queryFn: () => apiClient.post(`/catalog/bulk-operations:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useBulkOperationsMeta(enabled = true) {
    return useQuery<GetBulkOperationsMetaResponse, FetchError>({
        queryKey: QueryKeys.getBulkOperationsMeta(),
        queryFn: () => apiClient.get(`/catalog/bulk-operations:meta`, {}),
        enabled,
    });
}
