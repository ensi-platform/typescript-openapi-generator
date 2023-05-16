import { useMutation, useQuery, useQueryClient } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { SearchMenusRequest, SearchMenusResponse, SearchOneMenusRequest, SearchOneMenusResponse, ReplaceMenuTreesRequest, ReplaceMenuTreesResponse, SearchProductGroupsRequest, SearchProductGroupsResponse, SearchOneProductGroupsRequest, SearchOneProductGroupsResponse, CreateProductGroupRequest, CreateProductGroupResponse, ReplaceProductGroupRequest, ReplaceProductGroupResponse, DeleteProductGroupRequest, DeleteProductGroupResponse, UploadProductGroupFileRequest, UploadProductGroupFileResponse, DeleteProductGroupFileRequest, DeleteProductGroupFileResponse, SearchProductGroupTypesRequest, SearchProductGroupTypesResponse, SearchProductGroupFiltersRequest, SearchProductGroupFiltersResponse, SearchBannersRequest, SearchBannersResponse, SearchOneBannersRequest, SearchOneBannersResponse, CreateBannerRequest, CreateBannerResponse, ReplaceBannerRequest, ReplaceBannerResponse, DeleteBannerRequest, DeleteBannerResponse, UploadBannerFileRequest, UploadBannerFileResponse, DeleteBannerFileRequest, DeleteBannerFileResponse, SearchBannerTypesRequest, SearchBannerTypesResponse, SearchPagesRequest, SearchPagesResponse, SearchOnePageRequest, SearchOnePageResponse, CreatePageRequest, CreatePageResponse, GetPageResponse, PatchPageRequest, PatchPageResponse, DeletePageRequest, DeletePageResponse, GetPagesMetaResponse, CreateProductCategoryRequest, CreateProductCategoryResponse, GetProductCategoryResponse, ReplaceProductCategoryRequest, ReplaceProductCategoryResponse, DeleteProductCategoryRequest, DeleteProductCategoryResponse, MassDeleteProductCategoryRequest, MassDeleteProductCategoryResponse, SearchProductCategoriesRequest, SearchProductCategoriesResponse, GetProductCategoriesTreeRequest, GetProductCategoriesTreeResponse, CreateProductPimCategoryRequest, CreateProductPimCategoryResponse, GetProductPimCategoryResponse, ReplaceProductPimCategoryRequest, ReplaceProductPimCategoryResponse, DeleteProductPimCategoryRequest, DeleteProductPimCategoryResponse, SearchProductPimCategoryRequest, SearchProductPimCategoryResponse, AddProductNameplatesRequest, AddProductNameplatesResponse, DeleteProductNameplatesRequest, DeleteProductNameplatesResponse, CreateNameplateRequest, CreateNameplateResponse, GetNameplateResponse, PatchNameplateRequest, PatchNameplateResponse, DeleteNameplateRequest, DeleteNameplateResponse, AddNameplateProductsRequest, AddNameplateProductsResponse, DeleteNameplateProductsRequest, DeleteNameplateProductsResponse, SearchNameplatesRequest, SearchNameplatesResponse, GetNameplatesMetaResponse, GetNameplateProductResponse, SearchNameplateProductsRequest, SearchNameplateProductsResponse, GetNameplateProductsMetaResponse } from "./types";

export const QueryKeys = {
    searchMenus: (data?: any) => data ? ['search-menus', data] : ['search-menus'],
    searchOneMenus: (data?: any) => data ? ['search-one-menus', data] : ['search-one-menus'],
    searchProductGroups: (data?: any) => data ? ['search-product-groups', data] : ['search-product-groups'],
    searchOneProductGroups: (data?: any) => data ? ['search-one-product-groups', data] : ['search-one-product-groups'],
    searchProductGroupTypes: (data?: any) => data ? ['search-product-group-types', data] : ['search-product-group-types'],
    searchProductGroupFilters: (data?: any) => data ? ['search-product-group-filters', data] : ['search-product-group-filters'],
    searchBanners: (data?: any) => data ? ['search-banners', data] : ['search-banners'],
    searchOneBanners: (data?: any) => data ? ['search-one-banners', data] : ['search-one-banners'],
    searchBannerTypes: (data?: any) => data ? ['search-banner-types', data] : ['search-banner-types'],
    searchPages: (data?: any) => data ? ['search-pages', data] : ['search-pages'],
    searchOnePage: (data?: any) => data ? ['search-one-page', data] : ['search-one-page'],
    getPage: (id?: number | string) => id ? ['get-page', id] : ['get-page'],
    getPagesMeta: () => ['get-pages-meta'],
    getProductCategory: (id?: number | string) => id ? ['get-product-category', id] : ['get-product-category'],
    searchProductCategories: (data?: any) => data ? ['search-product-categories', data] : ['search-product-categories'],
    getProductCategoriesTree: (data?: any) => data ? ['get-product-categories-tree', data] : ['get-product-categories-tree'],
    getProductPimCategory: (id?: number | string) => id ? ['get-product-pim-category', id] : ['get-product-pim-category'],
    searchProductPimCategory: (data?: any) => data ? ['search-product-pim-category', data] : ['search-product-pim-category'],
    getNameplate: (id?: number | string) => id ? ['get-nameplate', id] : ['get-nameplate'],
    searchNameplates: (data?: any) => data ? ['search-nameplates', data] : ['search-nameplates'],
    getNameplatesMeta: () => ['get-nameplates-meta'],
    getNameplateProduct: (id?: number | string) => id ? ['get-nameplate-product', id] : ['get-nameplate-product'],
    searchNameplateProducts: (data?: any) => data ? ['search-nameplate-products', data] : ['search-nameplate-products'],
    getNameplateProductsMeta: () => ['get-nameplate-products-meta'],
}
    ;

/** Поиск объектов типа Menu */
export function useSearchMenus(data: SearchMenusRequest, enabled = true) {
    return useQuery<SearchMenusResponse, FetchError>({
        queryKey: QueryKeys.searchMenus(data),
        queryFn: () => apiClient.post(`/cms/menus:search`, { data }),
        enabled,
    });
}

/** Поиск объекта типа Menu */
export function useSearchOneMenus(data: SearchOneMenusRequest, enabled = true) {
    return useQuery<SearchOneMenusResponse, FetchError>({
        queryKey: QueryKeys.searchOneMenus(data),
        queryFn: () => apiClient.post(`/cms/menus:search-one`, { data }),
        enabled,
    });
}

/** Обновление дерева Menu */
export function useReplaceMenuTrees() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceMenuTreesResponse, FetchError, { id: number | string; } & ReplaceMenuTreesRequest>(
        ({ id, ...data }) => apiClient.put(`/cms/menus/${id}/trees`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchMenus());

                queryClient.invalidateQueries(QueryKeys.searchOneMenus(data));

            },
        }
    );
}

/** Поиск объектов типа ProductGroup */
export function useSearchProductGroups(data: SearchProductGroupsRequest, enabled = true) {
    return useQuery<SearchProductGroupsResponse, FetchError>({
        queryKey: QueryKeys.searchProductGroups(data),
        queryFn: () => apiClient.post(`/cms/product-groups:search`, { data }),
        enabled,
    });
}

/** Поиск объекта типа ProductGroup */
export function useSearchOneProductGroups(data: SearchOneProductGroupsRequest, enabled = true) {
    return useQuery<SearchOneProductGroupsResponse, FetchError>({
        queryKey: QueryKeys.searchOneProductGroups(data),
        queryFn: () => apiClient.post(`/cms/product-groups:search-one`, { data }),
        enabled,
    });
}

/** Создание объекта типа ProductGroup */
export function useCreateProductGroup() {
    return useMutation<CreateProductGroupResponse, FetchError, CreateProductGroupRequest>(
        (data) => apiClient.post(`/cms/product-groups`, { data }),
    );
}

/** Замена объекта типа ProductGroup */
export function useReplaceProductGroup() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceProductGroupResponse, FetchError, { id: number | string; } & ReplaceProductGroupRequest>(
        ({ id, ...data }) => apiClient.put(`/cms/product-groups/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneProductGroups(data));

            },
        }
    );
}

/** Удаление объекта типа ProductGroup */
export function useDeleteProductGroup() {
    const queryClient = useQueryClient();

    return useMutation<DeleteProductGroupResponse, FetchError, DeleteProductGroupRequest>(
        ({ id, }) => apiClient.delete(`/cms/product-groups/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneProductGroups(data));

            },
        }
    );
}

/** Загрузка файла для объекта типа ProductGroup */
export function useUploadProductGroupFile() {
    const queryClient = useQueryClient();

    return useMutation<UploadProductGroupFileResponse, FetchError, { id: number | string; } & UploadProductGroupFileRequest>(
        ({ id, ...data }) => apiClient.post(`/cms/product-groups/${id}:upload-file`, { data: data.formData }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneProductGroups(data));

            },
        }
    );
}

/** Удаление файла для объекта типа ProductGroup */
export function useDeleteProductGroupFile() {
    const queryClient = useQueryClient();

    return useMutation<DeleteProductGroupFileResponse, FetchError, DeleteProductGroupFileRequest>(
        ({ id, }) => apiClient.post(`/cms/product-groups/${id}:delete-file`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchProductGroups());

                queryClient.invalidateQueries(QueryKeys.searchOneProductGroups(data));

            },
        }
    );
}

/** Поиск объектов типа ProductGroupType */
export function useSearchProductGroupTypes(data: SearchProductGroupTypesRequest, enabled = true) {
    return useQuery<SearchProductGroupTypesResponse, FetchError>({
        queryKey: QueryKeys.searchProductGroupTypes(data),
        queryFn: () => apiClient.post(`/cms/product-group-types:search`, { data }),
        enabled,
    });
}

/** Поиск доступных фильтров (атрибуты товаров) */
export function useSearchProductGroupFilters(data: SearchProductGroupFiltersRequest, enabled = true) {
    return useQuery<SearchProductGroupFiltersResponse, FetchError>({
        queryKey: QueryKeys.searchProductGroupFilters(data),
        queryFn: () => apiClient.post(`/cms/product-group-filters:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа Banner */
export function useSearchBanners(data: SearchBannersRequest, enabled = true) {
    return useQuery<SearchBannersResponse, FetchError>({
        queryKey: QueryKeys.searchBanners(data),
        queryFn: () => apiClient.post(`/cms/banners:search`, { data }),
        enabled,
    });
}

/** Поиск объекта типа Banner */
export function useSearchOneBanners(data: SearchOneBannersRequest, enabled = true) {
    return useQuery<SearchOneBannersResponse, FetchError>({
        queryKey: QueryKeys.searchOneBanners(data),
        queryFn: () => apiClient.post(`/cms/banners:search-one`, { data }),
        enabled,
    });
}

/** Создание объекта типа Banner */
export function useCreateBanner() {
    return useMutation<CreateBannerResponse, FetchError, CreateBannerRequest>(
        (data) => apiClient.post(`/cms/banners`, { data }),
    );
}

/** Замена объекта типа Banner */
export function useReplaceBanner() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceBannerResponse, FetchError, { id: number | string; } & ReplaceBannerRequest>(
        ({ id, ...data }) => apiClient.put(`/cms/banners/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBanners());

                queryClient.invalidateQueries(QueryKeys.searchOneBanners(data));

            },
        }
    );
}

/** Удаление объекта типа Banner */
export function useDeleteBanner() {
    const queryClient = useQueryClient();

    return useMutation<DeleteBannerResponse, FetchError, DeleteBannerRequest>(
        ({ id, }) => apiClient.delete(`/cms/banners/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBanners());

                queryClient.invalidateQueries(QueryKeys.searchOneBanners(data));

            },
        }
    );
}

/** Загрузка файла для объекта типа Banner */
export function useUploadBannerFile() {
    const queryClient = useQueryClient();

    return useMutation<UploadBannerFileResponse, FetchError, { id: number | string; } & UploadBannerFileRequest>(
        ({ id, ...data }) => apiClient.post(`/cms/banners/${id}:upload-file`, { data: data.formData }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBanners());

                queryClient.invalidateQueries(QueryKeys.searchOneBanners(data));

            },
        }
    );
}

/** Удаление файла для объекта типа Banner */
export function useDeleteBannerFile() {
    const queryClient = useQueryClient();

    return useMutation<DeleteBannerFileResponse, FetchError, { id: number | string; } & DeleteBannerFileRequest>(
        ({ id, ...data }) => apiClient.post(`/cms/banners/${id}:delete-file`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchBanners());

                queryClient.invalidateQueries(QueryKeys.searchOneBanners(data));

            },
        }
    );
}

/** Поиск объектов типа BannerType */
export function useSearchBannerTypes(data: SearchBannerTypesRequest, enabled = true) {
    return useQuery<SearchBannerTypesResponse, FetchError>({
        queryKey: QueryKeys.searchBannerTypes(data),
        queryFn: () => apiClient.post(`/cms/banner-types:search`, { data }),
        enabled,
    });
}

/** Поиск объектов типа Page */
export function useSearchPages(data: SearchPagesRequest, enabled = true) {
    return useQuery<SearchPagesResponse, FetchError>({
        queryKey: QueryKeys.searchPages(data),
        queryFn: () => apiClient.post(`/cms/pages:search`, { data }),
        enabled,
    });
}

/** Поиск объекта типа Page */
export function useSearchOnePage(data: SearchOnePageRequest, enabled = true) {
    return useQuery<SearchOnePageResponse, FetchError>({
        queryKey: QueryKeys.searchOnePage(data),
        queryFn: () => apiClient.post(`/cms/pages:search-one`, { data }),
        enabled,
    });
}

/** Создание объекта типа Page */
export function useCreatePage() {
    return useMutation<CreatePageResponse, FetchError, CreatePageRequest>(
        (data) => apiClient.post(`/cms/pages`, { data }),
    );
}

/** Запрос Page по Id */
export function usePage({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetPageResponse, FetchError>({
        queryKey: QueryKeys.getPage(id),
        queryFn: () => apiClient.get(`/cms/pages/${id}`, {}),
        enabled,
    });
}

/** Изменение объекта типа Page */
export function usePatchPage() {
    const queryClient = useQueryClient();

    return useMutation<PatchPageResponse, FetchError, { id: number | string; } & PatchPageRequest>(
        ({ id, ...data }) => apiClient.patch(`/cms/pages/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchPages());

                queryClient.invalidateQueries(QueryKeys.searchOnePage(data));

                queryClient.invalidateQueries(QueryKeys.getPage(data?.id));

            },
        }
    );
}

/** Удаление объекта типа Page */
export function useDeletePage() {
    const queryClient = useQueryClient();

    return useMutation<DeletePageResponse, FetchError, DeletePageRequest>(
        ({ id, }) => apiClient.delete(`/cms/pages/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.searchPages());

                queryClient.invalidateQueries(QueryKeys.searchOnePage(data));

                queryClient.invalidateQueries(QueryKeys.getPage(data?.id));

            },
        }
    );
}

/** Получение списка доступных полей */
export function usePagesMeta(enabled = true) {
    return useQuery<GetPagesMetaResponse, FetchError>({
        queryKey: QueryKeys.getPagesMeta(),
        queryFn: () => apiClient.get(`/cms/pages:meta`, {}),
        enabled,
    });
}

/** Создание объекта типа ProductCategory */
export function useCreateProductCategory() {
    return useMutation<CreateProductCategoryResponse, FetchError, CreateProductCategoryRequest>(
        (data) => apiClient.post(`/cms/product-categories`, { data }),
    );
}

/** Запрос ProductCategory по ID */
export function useProductCategory({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetProductCategoryResponse, FetchError>({
        queryKey: QueryKeys.getProductCategory(id),
        queryFn: () => apiClient.get(`/cms/product-categories/${id}`, { params }),
        enabled,
    });
}

/** Замена объекта типа ProductCategory */
export function useReplaceProductCategory() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceProductCategoryResponse, FetchError, { id: number | string; } & ReplaceProductCategoryRequest>(
        ({ id, ...data }) => apiClient.put(`/cms/product-categories/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getProductCategory(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchProductCategories());

            },
        }
    );
}

/** Запрос на удаление ProductCategory */
export function useDeleteProductCategory() {
    const queryClient = useQueryClient();

    return useMutation<DeleteProductCategoryResponse, FetchError, DeleteProductCategoryRequest>(
        ({ id, }) => apiClient.delete(`/cms/product-categories/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getProductCategory(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchProductCategories());

            },
        }
    );
}

/** Массовое удаление объектов типа ProductCategory */
export function useMassDeleteProductCategory() {
    return useMutation<MassDeleteProductCategoryResponse, FetchError, MassDeleteProductCategoryRequest>(
        (data) => apiClient.post(`/cms/product-categories:mass-delete`, { data }),
    );
}

/** Поиск объектов типа ProductCategory */
export function useSearchProductCategories(data: SearchProductCategoriesRequest, enabled = true) {
    return useQuery<SearchProductCategoriesResponse, FetchError>({
        queryKey: QueryKeys.searchProductCategories(data),
        queryFn: () => apiClient.post(`/cms/product-categories:search`, { data }),
        enabled,
    });
}

/** Формирование дерева категорий */
export function useProductCategoriesTree(data: GetProductCategoriesTreeRequest, enabled = true) {
    return useQuery<GetProductCategoriesTreeResponse, FetchError>({
        queryKey: QueryKeys.getProductCategoriesTree(data),
        queryFn: () => apiClient.post(`/cms/product-categories:tree`, { data }),
        enabled,
    });
}

/** Создание объекта типа ProductPimCategory */
export function useCreateProductPimCategory() {
    return useMutation<CreateProductPimCategoryResponse, FetchError, CreateProductPimCategoryRequest>(
        (data) => apiClient.post(`/cms/product-categories/pim-categories`, { data }),
    );
}

/** Запрос ProductPimCategory по ID */
export function useProductPimCategory({ id, }: { id: number | string; }, params: Record<string, any> = {}, enabled = true) {
    return useQuery<GetProductPimCategoryResponse, FetchError>({
        queryKey: QueryKeys.getProductPimCategory(id),
        queryFn: () => apiClient.get(`/cms/product-categories/pim-categories/${id}`, { params }),
        enabled,
    });
}

/** Замена объекта типа ProductPimCategory */
export function useReplaceProductPimCategory() {
    const queryClient = useQueryClient();

    return useMutation<ReplaceProductPimCategoryResponse, FetchError, { id: number | string; } & ReplaceProductPimCategoryRequest>(
        ({ id, ...data }) => apiClient.put(`/cms/product-categories/pim-categories/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getProductPimCategory(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchProductPimCategory());

            },
        }
    );
}

/** Запрос на удаление ProductPimCategory */
export function useDeleteProductPimCategory() {
    const queryClient = useQueryClient();

    return useMutation<DeleteProductPimCategoryResponse, FetchError, DeleteProductPimCategoryRequest>(
        ({ id, }) => apiClient.delete(`/cms/product-categories/pim-categories/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getProductPimCategory(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchProductPimCategory());

            },
        }
    );
}

/** Поиск объектов типа ProductPimCategory */
export function useSearchProductPimCategory(data: SearchProductPimCategoryRequest, enabled = true) {
    return useQuery<SearchProductPimCategoryResponse, FetchError>({
        queryKey: QueryKeys.searchProductPimCategory(data),
        queryFn: () => apiClient.post(`/cms/product-categories/pim-categories:search`, { data }),
        enabled,
    });
}

/** Привязка объектов типа Nameplate */
export function useAddProductNameplates() {
    return useMutation<AddProductNameplatesResponse, FetchError, { id: number | string; } & AddProductNameplatesRequest>(
        ({ id, ...data }) => apiClient.post(`/cms/products/${id}:add-nameplates`, { data }),
    );
}

/** Удаления связи с объектами типа Nameplate */
export function useDeleteProductNameplates() {
    return useMutation<DeleteProductNameplatesResponse, FetchError, { id: number | string; } & DeleteProductNameplatesRequest>(
        ({ id, ...data }) => apiClient.delete(`/cms/products/${id}:delete-nameplates`, { data }),
    );
}

/** Создание объекта типа Nameplate */
export function useCreateNameplate() {
    return useMutation<CreateNameplateResponse, FetchError, CreateNameplateRequest>(
        (data) => apiClient.post(`/cms/nameplates`, { data }),
    );
}

/** Получение объекта типа Nameplate */
export function useNameplate({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetNameplateResponse, FetchError>({
        queryKey: QueryKeys.getNameplate(id),
        queryFn: () => apiClient.get(`/cms/nameplates/${id}`, {}),
        enabled,
    });
}

/** Обновления части полей объекта типа Nameplate */
export function usePatchNameplate() {
    const queryClient = useQueryClient();

    return useMutation<PatchNameplateResponse, FetchError, { id: number | string; } & PatchNameplateRequest>(
        ({ id, ...data }) => apiClient.patch(`/cms/nameplates/${id}`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getNameplate(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchNameplates());

            },
        }
    );
}

/** Удаление объекта типа Nameplate */
export function useDeleteNameplate() {
    const queryClient = useQueryClient();

    return useMutation<DeleteNameplateResponse, FetchError, DeleteNameplateRequest>(
        ({ id, }) => apiClient.delete(`/cms/nameplates/${id}`, {}),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getNameplate(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchNameplates());

            },
        }
    );
}

/** Привязка продукта к Nameplate */
export function useAddNameplateProducts() {
    const queryClient = useQueryClient();

    return useMutation<AddNameplateProductsResponse, FetchError, { id: number | string; } & AddNameplateProductsRequest>(
        ({ id, ...data }) => apiClient.post(`/cms/nameplates/${id}:add-products`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getNameplate(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchNameplates());

            },
        }
    );
}

/** Удаления связи у продукта и Nameplate */
export function useDeleteNameplateProducts() {
    const queryClient = useQueryClient();

    return useMutation<DeleteNameplateProductsResponse, FetchError, { id: number | string; } & DeleteNameplateProductsRequest>(
        ({ id, ...data }) => apiClient.delete(`/cms/nameplates/${id}:delete-products`, { data }),
        {
            onSuccess: ({ data }) => {
                queryClient.invalidateQueries(QueryKeys.getNameplate(data?.id));

                queryClient.invalidateQueries(QueryKeys.searchNameplates());

            },
        }
    );
}

/** Поиск объектов типа Nameplate */
export function useSearchNameplates(data: SearchNameplatesRequest, enabled = true) {
    return useQuery<SearchNameplatesResponse, FetchError>({
        queryKey: QueryKeys.searchNameplates(data),
        queryFn: () => apiClient.post(`/cms/nameplates:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useNameplatesMeta(enabled = true) {
    return useQuery<GetNameplatesMetaResponse, FetchError>({
        queryKey: QueryKeys.getNameplatesMeta(),
        queryFn: () => apiClient.get(`/cms/nameplates:meta`, {}),
        enabled,
    });
}

/** Получение объекта типа ProductNameplateLink */
export function useNameplateProduct({ id, }: { id: number | string; }, enabled = true) {
    return useQuery<GetNameplateProductResponse, FetchError>({
        queryKey: QueryKeys.getNameplateProduct(id),
        queryFn: () => apiClient.get(`/cms/nameplates/nameplate-products/${id}`, {}),
        enabled,
    });
}

/** Поиск объектов типа ProductNameplateLink */
export function useSearchNameplateProducts(data: SearchNameplateProductsRequest, enabled = true) {
    return useQuery<SearchNameplateProductsResponse, FetchError>({
        queryKey: QueryKeys.searchNameplateProducts(data),
        queryFn: () => apiClient.post(`/cms/nameplates/nameplate-products:search`, { data }),
        enabled,
    });
}

/** Получение списка доступных полей */
export function useNameplateProductsMeta(enabled = true) {
    return useQuery<GetNameplateProductsMetaResponse, FetchError>({
        queryKey: QueryKeys.getNameplateProductsMeta(),
        queryFn: () => apiClient.get(`/cms/nameplates/nameplate-products:meta`, {}),
        enabled,
    });
}
