/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { RequestBodySort } from './requestBodySort';
import type { SearchSeoTemplateProductsFilter } from './searchSeoTemplateProductsFilter';
import type { SearchSeoTemplateProductsRequestIncludeItem } from './searchSeoTemplateProductsRequestIncludeItem';
import type { RequestBodyPagination } from './requestBodyPagination';

export interface SearchSeoTemplateProductsRequest {
  sort?: RequestBodySort;
  filter?: SearchSeoTemplateProductsFilter;
  include?: SearchSeoTemplateProductsRequestIncludeItem[];
  pagination?: RequestBodyPagination;
}
