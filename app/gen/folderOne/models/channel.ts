/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { ChannelReadonlyProperties } from './channelReadonlyProperties';
import type { ChannelFillableProperties } from './channelFillableProperties';
import type { ChannelRequiredFillableProperties } from './channelRequiredFillableProperties';

export type Channel = ChannelReadonlyProperties & ChannelFillableProperties & ChannelRequiredFillableProperties;
