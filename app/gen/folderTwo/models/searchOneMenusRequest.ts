/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { SearchMenusSort } from './searchMenusSort';
import type { SearchMenusFilter } from './searchMenusFilter';
import type { SearchMenusInclude } from './searchMenusInclude';

export interface SearchOneMenusRequest {
  sort?: SearchMenusSort;
  filter?: SearchMenusFilter;
  include?: SearchMenusInclude;
}
