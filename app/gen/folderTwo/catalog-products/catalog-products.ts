/**
 * Не трогать руками, файлы автогенерируемые
 */
import type {
  CreateProductRequest,
  DeleteProductAttributesRequest,
  DeleteResponseResponse,
  EmptyDataResponse,
  GetProductDraftParams,
  GetProductParams,
  GetResourceMetaResponseResponse,
  MassPatchProductsByQueryRequest,
  MassPatchProductsRequest,
  MassPatchProductsResult,
  MultipartFileUploadRequest,
  PatchProductAttributesRequest,
  PatchProductFieldRequest,
  PatchProductImagesRequest,
  PatchProductRequest,
  PreloadFileResponseResponse,
  ProductAttributesResponse,
  ProductDraftResponse,
  ProductFieldResponse,
  ProductImageDeleteRequest,
  ProductImageResponse,
  ProductImageUploadRequest,
  ProductImagesResponse,
  ProductResponse,
  ProductTariffingVolumesResponse,
  ProductTypesResponse,
  ProductUomResponse,
  ProductsCommonAttributesRequest,
  ProductsCommonAttributesResponse,
  ReplaceProductAttributesRequest,
  ReplaceProductImagesRequest,
  ReplaceProductRequest,
  SearchEnumValuesRequestBody,
  SearchEnumValuesResponseResponse,
  SearchProductDraftsRequest,
  SearchProductDraftsResponse,
  SearchProductFieldsRequest,
  SearchProductFieldsResponse,
  SearchProductsRequest0,
  SearchProductsResponse0
} from '.././models';


/**
 * Upload image for product or product attribute
 * @summary Upload image for product or product attribute
 */
export const getPreloadImageUrl = () => {


  

  return `/catalog/products:preload-image`
}

export const preloadImage = async (multipartFileUploadRequest: MultipartFileUploadRequest, options?: RequestInit): Promise<PreloadFileResponseResponse> => {
    const formData = new FormData();
if(multipartFileUploadRequest.file !== undefined) {
 formData.append('file', multipartFileUploadRequest.file)
 }

  const res = await fetch(getPreloadImageUrl(),
  {      
    ...options,
    method: 'POST'
    ,
    body: 
      formData,
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: PreloadFileResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * ### Search for objects of Product

Available include values:
* _brand_
* _categories_
* _images_
* _attributes_
* _product_groups_
* _product_groups.category_
* _product_groups.main_product_
* _product_groups.products_
* _no_filled_required_attributes_

 * @summary Search for objects of Product
 */
export const getSearchProductsUrl = () => {


  

  return `/catalog/products:search`
}

export const searchProducts = async (searchProductsRequest0: SearchProductsRequest0, options?: RequestInit): Promise<SearchProductsResponse0> => {
  
  const res = await fetch(getSearchProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductsRequest0,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductsResponse0 = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating an object of Product

 * @summary Creating an object of Product
 */
export const getCreateProductUrl = () => {


  

  return `/catalog/products`
}

export const createProduct = async (createProductRequest: CreateProductRequest, options?: RequestInit): Promise<ProductDraftResponse> => {
  
  const res = await fetch(getCreateProductUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createProductRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductDraftResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Mass patching of object Product
 * @summary Mass patching of object Product
 */
export const getMassPatchProductsUrl = () => {


  

  return `/catalog/products:mass-patch`
}

export const massPatchProducts = async (massPatchProductsRequest: MassPatchProductsRequest, options?: RequestInit): Promise<MassPatchProductsResult> => {
  
  const res = await fetch(getMassPatchProductsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massPatchProductsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: MassPatchProductsResult = body ? JSON.parse(body) : {}

  return data
}


/**
 * Mass patching of object Product by filter
 * @summary Mass patching of object Product by filter
 */
export const getMassPatchProductsByQueryUrl = () => {


  

  return `/catalog/products:mass-patch-by-query`
}

export const massPatchProductsByQuery = async (massPatchProductsByQueryRequest: MassPatchProductsByQueryRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getMassPatchProductsByQueryUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      massPatchProductsByQueryRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting common attributes for selected products
 * @summary Getting common attributes for selected products
 */
export const getGetProductsCommonAttributesUrl = () => {


  

  return `/catalog/products:common-attributes`
}

export const getProductsCommonAttributes = async (productsCommonAttributesRequest: ProductsCommonAttributesRequest, options?: RequestInit): Promise<ProductsCommonAttributesResponse> => {
  
  const res = await fetch(getGetProductsCommonAttributesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      productsCommonAttributesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductsCommonAttributesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of Product by ID
 * @summary Get the object of Product by ID
 */
export const getGetProductUrl = (id: number,
    params?: GetProductParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/products/${id}?${stringifiedParams}` : `/catalog/products/${id}`
}

export const getProduct = async (id: number,
    params?: GetProductParams, options?: RequestInit): Promise<ProductResponse> => {
  
  const res = await fetch(getGetProductUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing an object of Product
 * @summary Replacing an object of Product
 */
export const getReplaceProductUrl = (id: number,) => {


  

  return `/catalog/products/${id}`
}

export const replaceProduct = async (id: number,
    replaceProductRequest: ReplaceProductRequest, options?: RequestInit): Promise<ProductDraftResponse> => {
  
  const res = await fetch(getReplaceProductUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceProductRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductDraftResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of Product
 * @summary Patching an object of Product
 */
export const getPatchProductUrl = (id: number,) => {


  

  return `/catalog/products/${id}`
}

export const patchProduct = async (id: number,
    patchProductRequest: PatchProductRequest, options?: RequestInit): Promise<ProductDraftResponse> => {
  
  const res = await fetch(getPatchProductUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductDraftResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting an object of Product
 * @summary Deleting an object of Product
 */
export const getDeleteProductUrl = (id: number,) => {


  

  return `/catalog/products/${id}`
}

export const deleteProduct = async (id: number, options?: RequestInit): Promise<DeleteResponseResponse> => {
  
  const res = await fetch(getDeleteProductUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: DeleteResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * ### Search for objects of ProductDraft

Available include values:
* _brand_
* _categories_
* _images_
* _attributes_
* _product_groups_
* _product_groups.category_
* _product_groups.main_product_
* _product_groups.products_
* _no_filled_required_attributes_

 * @summary Search for objects of ProductDraft
 */
export const getSearchProductDraftsUrl = () => {


  

  return `/catalog/products/drafts:search`
}

export const searchProductDrafts = async (searchProductDraftsRequest: SearchProductDraftsRequest, options?: RequestInit): Promise<SearchProductDraftsResponse> => {
  
  const res = await fetch(getSearchProductDraftsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductDraftsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductDraftsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Getting a list of available fields
 * @summary Getting a list of available fields
 */
export const getGetProductsMetaUrl = () => {


  

  return `/catalog/products/drafts:meta`
}

export const getProductsMeta = async ( options?: RequestInit): Promise<GetResourceMetaResponseResponse> => {
  
  const res = await fetch(getGetProductsMetaUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetResourceMetaResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of ProductDraft for enum
 * @summary Search for objects of ProductDraft for enum
 */
export const getSearchProductDraftEnumValuesUrl = () => {


  

  return `/catalog/products/draft-enum-values:search`
}

export const searchProductDraftEnumValues = async (searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchProductDraftEnumValuesUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchEnumValuesRequestBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchEnumValuesResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * ### Search for objects of ProductDraft

Available include values:
* _brand_
* _categories_
* _images_
* _attributes_
* _product_groups_
* _product_groups.category_
* _product_groups.main_product_
* _product_groups.products_

 * @summary Search for objects of ProductDraft
 */
export const getGetProductDraftUrl = (id: number,
    params?: GetProductDraftParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `/catalog/products/drafts/${id}?${stringifiedParams}` : `/catalog/products/drafts/${id}`
}

export const getProductDraft = async (id: number,
    params?: GetProductDraftParams, options?: RequestInit): Promise<ProductDraftResponse> => {
  
  const res = await fetch(getGetProductDraftUrl(id,params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductDraftResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of Product for enum
 * @summary Search for objects of Product for enum
 */
export const getSearchProductsPropertyEnumValuesUrl = (property: string,) => {


  

  return `/catalog/products/${property}/enum-values:search`
}

export const searchProductsPropertyEnumValues = async (property: string,
    searchEnumValuesRequestBody: SearchEnumValuesRequestBody, options?: RequestInit): Promise<SearchEnumValuesResponseResponse> => {
  
  const res = await fetch(getSearchProductsPropertyEnumValuesUrl(property),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchEnumValuesRequestBody,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchEnumValuesResponseResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing all product attributes. All not specified in the request attributes will be deleted
 * @summary Replacing all product attributes
 */
export const getReplaceProductAttributesUrl = (id: number,) => {


  

  return `/catalog/products/${id}/attributes`
}

export const replaceProductAttributes = async (id: number,
    replaceProductAttributesRequest: ReplaceProductAttributesRequest, options?: RequestInit): Promise<ProductAttributesResponse> => {
  
  const res = await fetch(getReplaceProductAttributesUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceProductAttributesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductAttributesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating new attributes and updating specified ones. Attributes not specified in the request won't be changed
 * @summary Patching product attributes
 */
export const getPatchProductAttributesUrl = (id: number,) => {


  

  return `/catalog/products/${id}/attributes`
}

export const patchProductAttributes = async (id: number,
    patchProductAttributesRequest: PatchProductAttributesRequest, options?: RequestInit): Promise<ProductAttributesResponse> => {
  
  const res = await fetch(getPatchProductAttributesUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductAttributesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductAttributesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting object of ProductAttribute
 * @summary Deleting object of ProductAttribute
 */
export const getDeleteProductAttributesUrl = (id: number,) => {


  

  return `/catalog/products/${id}/attributes`
}

export const deleteProductAttributes = async (id: number,
    deleteProductAttributesRequest: DeleteProductAttributesRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteProductAttributesUrl(id),
  {      
    ...options,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      deleteProductAttributesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Replacing all product images. All not specified in request images will be deleted
 * @summary Replacing all product images
 */
export const getReplaceImagesUrl = (id: number,) => {


  

  return `/catalog/products/${id}/images`
}

export const replaceImages = async (id: number,
    replaceProductImagesRequest: ReplaceProductImagesRequest, options?: RequestInit): Promise<ProductImagesResponse> => {
  
  const res = await fetch(getReplaceImagesUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      replaceProductImagesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductImagesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Creating new images and updating specified ones. Images not specified in the request won't be changed
 * @summary Patching product images
 */
export const getPatchImagesUrl = (id: number,) => {


  

  return `/catalog/products/${id}/images`
}

export const patchImages = async (id: number,
    patchProductImagesRequest: PatchProductImagesRequest, options?: RequestInit): Promise<ProductImagesResponse> => {
  
  const res = await fetch(getPatchImagesUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductImagesRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductImagesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Uploading product image
 * @summary Uploading product image
 */
export const getUploadProductImageUrl = (id: number,) => {


  

  return `/catalog/products/${id}:upload-image`
}

export const uploadProductImage = async (id: number,
    productImageUploadRequest: ProductImageUploadRequest, options?: RequestInit): Promise<ProductImageResponse> => {
  
  const res = await fetch(getUploadProductImageUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      productImageUploadRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductImageResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Deleting product image
 * @summary Deleting product image
 */
export const getDeleteProductImageUrl = (id: number,) => {


  

  return `/catalog/products/${id}:delete-image`
}

export const deleteProductImage = async (id: number,
    productImageDeleteRequest: ProductImageDeleteRequest, options?: RequestInit): Promise<EmptyDataResponse> => {
  
  const res = await fetch(getDeleteProductImageUrl(id),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      productImageDeleteRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: EmptyDataResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Search for objects of ProductField
 * @summary Search for objects of ProductField
 */
export const getSearchProductFieldsUrl = () => {


  

  return `/catalog/products/fields:search`
}

export const searchProductFields = async (searchProductFieldsRequest: SearchProductFieldsRequest, options?: RequestInit): Promise<SearchProductFieldsResponse> => {
  
  const res = await fetch(getSearchProductFieldsUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      searchProductFieldsRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: SearchProductFieldsResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get the object of ProductField by ID
 * @summary Get the object of ProductField by ID
 */
export const getGetProductFieldUrl = (id: number,) => {


  

  return `/catalog/products/fields/${id}`
}

export const getProductField = async (id: number, options?: RequestInit): Promise<ProductFieldResponse> => {
  
  const res = await fetch(getGetProductFieldUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductFieldResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Patching an object of ProductField
 * @summary Patching an object of ProductField
 */
export const getPatchProductFieldUrl = (id: number,) => {


  

  return `/catalog/products/fields/${id}`
}

export const patchProductField = async (id: number,
    patchProductFieldRequest: PatchProductFieldRequest, options?: RequestInit): Promise<ProductFieldResponse> => {
  
  const res = await fetch(getPatchProductFieldUrl(id),
  {      
    ...options,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      patchProductFieldRequest,)
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductFieldResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get available product types corresponding to the values of the CatalogProductTypeEnum
 * @summary Get available product types
 */
export const getGetProductTypesUrl = () => {


  

  return `/catalog/products/product-types`
}

export const getProductTypes = async ( options?: RequestInit): Promise<ProductTypesResponse> => {
  
  const res = await fetch(getGetProductTypesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductTypesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get available product tariffs corresponding to the values of the CatalogProductTariffingVolumeEnum
 * @summary Get available product tariffs
 */
export const getGetProductTariffingVolumesUrl = () => {


  

  return `/catalog/products/product-tariffing-volumes`
}

export const getProductTariffingVolumes = async ( options?: RequestInit): Promise<ProductTariffingVolumesResponse> => {
  
  const res = await fetch(getGetProductTariffingVolumesUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductTariffingVolumesResponse = body ? JSON.parse(body) : {}

  return data
}


/**
 * Get available units of measure for a product corresponding to the values of the CatalogProductUomEnum
 * @summary Get available units of measure for a product
 */
export const getGetProductUomUrl = () => {


  

  return `/catalog/products/product-uom`
}

export const getProductUom = async ( options?: RequestInit): Promise<ProductUomResponse> => {
  
  const res = await fetch(getGetProductUomUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: ProductUomResponse = body ? JSON.parse(body) : {}

  return data
}


