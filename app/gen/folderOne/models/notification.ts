/**
 * Не трогать руками, файлы автогенерируемые
 */
import type { NotificationReadonlyProperties } from './notificationReadonlyProperties';
import type { NotificationFillableProperties } from './notificationFillableProperties';
import type { NotificationRequiredFillableProperties } from './notificationRequiredFillableProperties';

export type Notification = NotificationReadonlyProperties & NotificationFillableProperties & NotificationRequiredFillableProperties;
