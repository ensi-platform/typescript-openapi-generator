/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { StockReadonlyProperties } from './stockReadonlyProperties';
import type { StockFillableProperties } from './stockFillableProperties';
import type { StockFillableRequiredProperties } from './stockFillableRequiredProperties';

export type Stock = StockReadonlyProperties & StockFillableProperties & StockFillableRequiredProperties;
