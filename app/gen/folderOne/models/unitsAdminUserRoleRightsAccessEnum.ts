/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Права доступа. Расшифровка значений.
  * `1xx` Для списка заказов:
  * `101` - Пользователю доступен табличный список с фильтрами и поиском
  * `102` - Пользователю доступна детальная страница заказа со всеми вкладками и данными для просмотра
  * `103` - Пользователю доступна вкладка "Главное" для просмотра
  * `104` - Пользователю доступна вкладка "Клиент" для просмотра
  * `105` - Пользователю доступна вкладка "Товары" для просмотра
  * `106` - Пользователю доступна вкладка "Доставка" для просмотра
  * `107` - Пользователю доступна вкладка "Комментарии" для просмотра
  * `108` - Пользователю доступна вкладка "Вложения" для просмотра
  * `109` - Пользователю доступно только редактирование данных заказа (без действий)
  * `110` - Пользователю доступна функция редактирование комментариев во вкладке "Комментарии" + кнопки "Сохранить"/"Отменить"
  * `111` - Пользователю доступна функция добавления/удаления проблемы к заказу и комментария  к проблеме во вкладке "Комментариии" + кнопки "Сохранить"/"Отменить"
  * `112` - Пользователю доступна функция редактирования способа доставки во вкладке "Доставка" + кнопки "Сохранить"/"Отменить"
  * `113` - Пользователю доступна функция редактирования комментария во вкладке "Доставка" + кнопки "Сохранить"/"Отменить"
  * `114` - Пользователю доступна функция редактирования полей клиента во вкладке "Клиент" + кнопки "Сохранить"/"Отменить"
  * `115` - Пользователю доступна функция загрузка вложений во вкладке "Вложения" + кнопки "Сохранить"/"Отменить"
  * `116` - Пользователю доступна функция удаления вложений во вкладке "Вложения" + кнопки "Сохранить"/"Отменить"
  * `117` - Пользователю доступно изменение статуса заказа на детальной странице + кнопка "Действия"
  * `118` - Пользователю доступно создание заявки на возврат + кнопка "Действия"
  * `119` - Пользователю доступно редактирование списка товаров в заказе
  * `120` - Пользователю доступно изменение статуса отгрузки на детальной странице заказ
  * `2xx` Для возвратов:
  * `201` - Пользователю доступен табличный список с фильтрами и поиском
  * `202` - Пользователю доступна детальная страница возврата
  * `203` - Пользователю доступна вкладка "Главное" для просмотра
  * `204` - Пользователю доступна вкладка "Товары" для просмотра
  * `205` - Пользователю доступна вкладка "Вложения" для просмотра
  * `206` - Пользователю доступно только редактирование данных возврата (без действий)
  * `207` - Пользователю доступна функция изменение ответственного за возврат во вкладке "Главное" + кнопки "Сохранить"/"Отменить"
  * `208` - Пользователю доступна функция загрузка вложений во вкладке "Вложения" + кнопки "Сохранить"/"Отменить"
  * `209` - Пользователю доступна функция удаления вложений во вкладке "Вложения" + кнопки "Сохранить"/"Отменить"
  * `210` - Пользователю доступен табличный список с причинами возврата по кнопке "Настройка причин возврата"
  * `211` - Пользователю доступно создание причин возврата + кнопка "Добавить причину"
  * `212` - Пользователю доступно редактирование причин возврата + кнопка "Изменить причину"
  * `3xx` Для настроек:
  * `301` - Пользователю доступна для просмотра страница настроек
  * `302` - Параметры корзины. Пользователю доступно редактирование параметра + кнопка "Изменить параметр"
  * `303` - Срок оплаты заказа. Пользователю доступно редактирование параметра + кнопка "Изменить параметр"
  * `304` - Срок оформления заказа. Пользователю доступно редактирование параметра + кнопка "Изменить параметр"
  * `305` - Максимальное время обработки. Пользователю доступно редактирование параметра + кнопка "Изменить параметр"
  * `4xx` Для каталога товаров:
  * `401` - Пользователю доступен табличный список с фильтрами и поиском
  * `402` - Пользователю доступна детальная страница товара со всеми со всеми вкладками и данными для просмотра
  * `403` - Пользователь может создавать товар
  * `404` - Пользователю доступна функция редактирование любых данных товара и совершения любых действий с ним
  * `405` - Пользователю доступна вкладка "Основные данные" для просмотра
  * `406` - Пользователю доступна вкладка "Контент" для просмотра
  * `407` - Пользователю доступна вкладка "Характеристики" для просмотра
  * `408` - Пользователю доступно управление чек-боксом "Активность"
  * `409` - Пользователю доступно полное редактирование во вкладке "Контент"
  * `410` - Пользователю доступно полное редактирование во вкладке "Характеристики"
  * `411` - Пользователю доступно полное редактирование во вкладке "Основные данные"
  * `413` - Пользователь может удалять товары
  * `414` - Пользователю доступна вкладка "Товарные склейки" для просмотра
  * `415` - Пользователю доступна функция "Изменить атрибуты" в табличном списке товаров
  * `418` - Пользователю доступна миграция состояния сущностей, из которых наполняется индекс
  * `5xx` Для категорий товаров:
  * `501` - Пользователю доступен табличный список с фильтрами и поиском
  * `502` - Пользователю доступна детальная страница категории со всеми вкладками и данными для просмотра
  * `503` - Пользователю доступна функция редактирование любых данных категории и совершения любых действий с ним
  * `504` - Пользователь может создавать категории
  * `505` - Пользователь может добавлять и редактировать атрибуты категории
  * `506` - Пользователь может редактирование данные о категории (кроме активности)
  * `507` - Пользователь может удалять категории
  * `508` - Пользователю доступно управление чек-боксом "Активность"
  * `6xx` Для атрибутов товаров:
  * `601` - Пользователю доступен табличный список с фильтрами и поиском
  * `602` - Пользователю доступна детальная страница атрибутов со всеми со всеми вкладками и данными для просмотра
  * `603` - Пользователю доступно полное редактирование атрибутов, включая активность и отображение на витрине
  * `604` - Пользователь может создать новый атрибут товара и сохранить его
  * `605` - Пользователь может удалять атрибутов
  * `606` - Пользователю доступно управление чек-боксом "Активность"
  * `607` - Пользователю доступно управление чек-боксом "Отображение на витрине"
  * `7xx` Для пользователей:
  * `701` - Пользователю доступен табличный список с фильтрами и поиском
  * `702` - Пользователю доступна детальная страница пользователя со всеми со всеми вкладками и данными для просмотра
  * `703` - Пользователю доступно полное редактирование пользователя
  * `704` - Пользователю доступно управление чек-боксом "Активность"
  * `705` - Пользователю доступно изменение пароля
  * `706` - Пользователю доступно управление ролями пользователя
  * `707` - Пользователю доступно создание пользователя
  * `8xx` Для ролей:
  * `801` - Пользователю доступен табличный список с фильтрами и поиском
  * `802` - Пользователю доступна детальная страница роли со всеми со всеми вкладками и данными для просмотра
  * `803` - Создание ролей
  * `804` - Пользователю доступно полное редактирование роли
  * `805` - Пользователю доступно управление чек-боксом "Активность"
  * `806` - Пользователю доступно удаление роли
  * `9xx` Для информационных страниц:
  * `901` - Пользователю доступен табличный список с информационными страницами
  * `902` - Пользователю доступна детальная страница информационной страницы со всеми данными для просмотра
  * `903` - Пользователю доступно редактирование информационной страницы, включая управление активностью
  * `904` - Пользователю доступно управление чек-боксом "Активность"
  * `905` - Пользователю доступно создание информационной страницы
  * `906` - Пользователю доступно удаление информационной страницы
  * `10xx` Для брендов:
  * `1001` - Пользователю доступен табличный список с брендами с фильтрами и поиском
  * `1002` - Пользователю доступна детальная страница бренда со всеми данными для просмотра
  * `1003` - Пользователю доступно полное редактирование бренда, включая управление активностью
  * `1004` - Пользователю доступно управление чек-боксом "Активность"
  * `1005` - Пользователю доступно создание бренда
  * `1006` - Пользователю доступно удаление бренда
  * `11xx` Для товарных склеек:
  * `1101` - Пользователю доступен табличный список склеек с фильтрами и поиском
  * `1102` - Пользователю доступна детальная страница склейки со всеми данными для просмотра
  * `1103` - Пользователю доступно редактирование склейки (кроме изменения активности и удаления)
  * `1104` - Пользователю доступно управление чек-боксом "Активность"
  * `1105` - Пользователю доступно создание склейки
  * `1106` - Пользователю доступно удаление склейки
  * `1107` - Пользователю доступно редактирование всех полей товарной склейки
  * `12xx` Для клиентов:
  * `1201` - Пользователю доступно удаление персональных данных клиента
  * `1202` - Пользователю доступен табличный список клиентов с фильтрами и поиском
  * `1203` - Пользователю доступна детальная страница клиента со всеми со всеми данными для просмотра
  * `1204` - Пользователю доступно редактирование данных клиента
  * `13xx` Для скидок и промокодов:
  * `1301` - Пользователю доступен табличный список со скидками
  * `1302` - Пользователю доступна детальная страница скидки со всеми данными для просмотра и без возможности редактирования полей
  * `1303` - Пользователю доступно создание скидки
  * `1304` - Пользователю доступно редактирование скидки
  * `1305` - Пользователю доступно удаление скидки
  * `1306` - Пользователю доступно массовое обновление статусов скидки в табличном списке
  * `1311` - Пользователю доступен табличный список с промокодами
  * `1312` - Пользователю доступна детальная страница промокода со всеми данными для просмотра и без возможности редактирования полей
  * `1313` - Пользователю доступно создание промокода
  * `1314` - Пользователю доступно редактирование промокода
  * `1315` - Пользователю доступно удаление промокода
  * `14xx` Для баннеров:
  * `1401` - Пользователю доступен табличный список баннеров с фильтрами и поиском
  * `1402` - Пользователю доступна детальная страница баннера со всеми данными для просмотра
  * `1403` - Пользователю доступно редактирование баннера
  * `1404` - Пользователю доступно создание баннера
  * `1405` - Пользователю доступно удаление баннера
  * `15xx` Для отзывов:
  * `1501` - Пользователю доступен табличный список с отзывами с фильтрами и поиском
  * `1502` - Пользователю доступна детальная страница отзывами со всеми данными для просмотра
  * `1503` - Пользователю доступно удаление отзывов
  * `1504` - Пользователю доступно изменение статуса отзыва
  * `16xx` Для тегов:
  * `1601` - Пользователю доступен табличный список тегов с фильтрами и поиском
  * `1602` - Пользователю доступна детальная страница товарного тега со всеми данными для просмотра
  * `1603` - Пользователю доступно редактирование товарного тега
  * `1604` - Пользователю доступно создание товарного тега
  * `1605` - Пользователю доступно удаление товарного тега
  * `17xx` Для SEO:
  * `1701` - Пользователю доступен табличный список SEO-шаблонов с фильтрами и поиском
  * `1702` - Пользователю доступна детальная страница SEO-шаблонов со всеми данными для просмотра
  * `1703` - Пользователю доступно редактирование SEO-шаблонов
  * `1704` - Пользователю доступно создание SEO-шаблонов
  * `1705` - Пользователю доступно удаление SEO-шаблонов
  * `18xx` Для импортов:
  * `1801` - Пользователю доступен импорт товаров
  * `1802` - Пользователю доступен просмотр журнала импорта товаров
  * `1803` - Пользователю доступен просмотр журнала ошибок импорта товаров
  * `19xx` Для складов:
  * `1901` - Пользователю доступен табличный список складов с фильтрами и поиском
  * `1902` - Пользователю доступна детальная страница склада со всеми данными для просмотра
  * `1903` - Пользователю доступно полное редактирование во вкладке "Основные данные"
  * `1904` - Пользователю доступно полное редактирование во вкладке "Время работы"
  * `1905` - Пользователю доступно полное редактирование во вкладке "Контакты"
  * `1906` - Пользователю доступно полное редактирование во вкладке "График отгрузки"
  * `1907` - Пользователю доступно управление чек-боксом "Активность"
  * `1908` - Пользователь может создавать склад
  * `20xx` Для фидов:
  * `2001` - Пользователю доступен табличный список с настройками фидов с фильтрами и поиском
  * `2002` - Пользователю доступна детальная страница настройками фида со всеми данными для просмотра
  * `2003` - Пользователю доступно создание настроек фида
  * `2004` - Пользователю доступно редактирование настроек фида
  * `2005` - Пользователю доступна миграция состояния сущностей, из которых формируются фиды
  * `21xx` Для тарифов доставки:
  * `2101` - Пользователю доступен табличный список тарифов с фильтрами и поиском
  * `2102` - Пользователю доступна детальная страница тарифа со всеми данными для просмотра
  * `2103` - Пользователю доступно создание тарифа
  * `2104` - Пользователю доступно редактирование тарифа
  * `2105` - Пользователю доступно удаление тарифа
  * `22xx` Для продавцов:
  * `2201` - Пользователю доступен табличный список продавцов с фильтрами и поиском
  * `2202` - Пользователю доступна детальная страница продавца со всеми данными для просмотра
  * `2203` - Пользователю доступно создание продавца
  * `2204` - Пользователю доступно редактирование продавца
  * `23xx` Для статусов продукта:
  * `2301` - Пользователю доступен табличный список статусов продукта с фильтрами и поиском
  * `2302` - Пользователю доступна детальная страница статуса продукта со всеми данными для просмотра
  * `2303` - Пользователю доступно создание статуса продукта
  * `2304` - Пользователю доступно редактирование статуса продукта
  * `2305` - Пользователю доступно удаление статуса продукта
  * `25xx` Для настроек уведомлений:
  * `2501` - Пользователю доступен табличный список настроек уведомлений с фильтрами и поиском
  * `2502` - Пользователю доступна детальная страница настроек уведомлений со всеми данными для просмотра
  * `2503` - Пользователю доступно создание настроек уведомлений
  * `2504` - Пользователю доступно редактирование настроек уведомлений
  * `2505` - Пользователю доступно удаление настроек уведомлений
  * `26xx` Подключение Ensi Cloud:
  * `2601` - Пользователю доступно редактирование подключением Cloud
  * `2602` - Пользователю доступен просмотр подключения Cloud
  * `2603` - Пользователю доступно изменение активности подключения Cloud
  * `27xx` Для настройки параметров доставки:
  * `2701` - Пользователю доступно редактирование параметров доставки
  * `2702` - Пользователю доступен просмотр параметров доставки
  * `28xx` Для офферов:
  * `2801` - Пользователю доступен табличный список офферов с фильтрами и поиском
  * `2802` - Пользователю доступно полное редактирование на вкладке "Основные данные"
  * `2803` - Пользователю доступно полное редактирование на вкладке "Стоки"
  * `2804` - Пользователю доступно управление чекбоксом "Публикация"
  * `2805` - Пользователю доступно управлением полем "Стоимость"
  * `2806` - Пользователю доступна функция редактирование любых данных оффера и совершения любых действий с ним
  * `2807` - Пользователю доступна детальная страница оффера со всеми данными для просмотра
  * `2808` - Пользователю доступно обновление данных офферов
  * `2809` - Пользователю доступна миграция состояния офферов
  * `29xx` Для ПВЗ, точек самовывоза:
  * `2901` - Пользователю доступен табличный список ПВЗ с фильтрами и поиском
  * `2902` - Пользователю доступна детальная страница ПВЗ со всеми данными для просмотра
  * `2903` - Пользователю доступно полное редактирование во вкладке "Основные данные"
  * `2904` - Пользователю доступно полное редактирование во вкладке "Адрес"
  * `30xx` Для пользователей продавцов:
  * `3001` - Пользователю доступен табличный список пользователей продавца
  * `3002` - Пользователю доступна детальная страница пользователя продавца
  * `3003` - Пользователю доступно редактирование пользователя продавца
  * `3004` - Пользователю доступно создание пользователя продавца
  * `3005` - Пользователю доступно изменение активности пользователя продавца
  * `3006` - Пользователю доступно редактирование пароля пользователя продавца
  * `31xx` Для технических таблиц
  * `3101` - Пользователю доступен просмотр технических таблиц
  * `3102` - Пользователю доступно редактирование технических таблиц + запуск консольных команд
  * `32xx` Для служб доставки
  * `3201` - Пользователю доступен табличный список служб доставки с фильтрами и поиском
  * `3202` - Пользователю доступна детальная страница службы доставки со всеми данными для просмотра
  * `3203` - Пользователю доступно редактирование службы доставки
  * `3204` - Пользователю доступно добавление и удаление доступных способов оплаты из службы доставки

 */
export type UnitsAdminUserRoleRightsAccessEnum = typeof UnitsAdminUserRoleRightsAccessEnum[keyof typeof UnitsAdminUserRoleRightsAccessEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UnitsAdminUserRoleRightsAccessEnum = {
  NUMBER_101: 101,
  NUMBER_102: 102,
  NUMBER_103: 103,
  NUMBER_104: 104,
  NUMBER_105: 105,
  NUMBER_106: 106,
  NUMBER_107: 107,
  NUMBER_108: 108,
  NUMBER_109: 109,
  NUMBER_110: 110,
  NUMBER_111: 111,
  NUMBER_112: 112,
  NUMBER_113: 113,
  NUMBER_114: 114,
  NUMBER_115: 115,
  NUMBER_116: 116,
  NUMBER_117: 117,
  NUMBER_118: 118,
  NUMBER_119: 119,
  NUMBER_120: 120,
  NUMBER_201: 201,
  NUMBER_202: 202,
  NUMBER_203: 203,
  NUMBER_204: 204,
  NUMBER_205: 205,
  NUMBER_206: 206,
  NUMBER_207: 207,
  NUMBER_208: 208,
  NUMBER_209: 209,
  NUMBER_210: 210,
  NUMBER_211: 211,
  NUMBER_212: 212,
  NUMBER_301: 301,
  NUMBER_302: 302,
  NUMBER_303: 303,
  NUMBER_304: 304,
  NUMBER_305: 305,
  NUMBER_401: 401,
  NUMBER_402: 402,
  NUMBER_403: 403,
  NUMBER_404: 404,
  NUMBER_405: 405,
  NUMBER_406: 406,
  NUMBER_407: 407,
  NUMBER_408: 408,
  NUMBER_409: 409,
  NUMBER_410: 410,
  NUMBER_411: 411,
  NUMBER_413: 413,
  NUMBER_414: 414,
  NUMBER_415: 415,
  NUMBER_418: 418,
  NUMBER_501: 501,
  NUMBER_502: 502,
  NUMBER_503: 503,
  NUMBER_504: 504,
  NUMBER_505: 505,
  NUMBER_506: 506,
  NUMBER_507: 507,
  NUMBER_508: 508,
  NUMBER_601: 601,
  NUMBER_602: 602,
  NUMBER_603: 603,
  NUMBER_604: 604,
  NUMBER_605: 605,
  NUMBER_606: 606,
  NUMBER_607: 607,
  NUMBER_701: 701,
  NUMBER_702: 702,
  NUMBER_703: 703,
  NUMBER_704: 704,
  NUMBER_705: 705,
  NUMBER_706: 706,
  NUMBER_707: 707,
  NUMBER_801: 801,
  NUMBER_802: 802,
  NUMBER_803: 803,
  NUMBER_804: 804,
  NUMBER_805: 805,
  NUMBER_806: 806,
  NUMBER_901: 901,
  NUMBER_902: 902,
  NUMBER_903: 903,
  NUMBER_904: 904,
  NUMBER_905: 905,
  NUMBER_906: 906,
  NUMBER_1001: 1001,
  NUMBER_1002: 1002,
  NUMBER_1003: 1003,
  NUMBER_1004: 1004,
  NUMBER_1005: 1005,
  NUMBER_1006: 1006,
  NUMBER_1101: 1101,
  NUMBER_1102: 1102,
  NUMBER_1103: 1103,
  NUMBER_1104: 1104,
  NUMBER_1105: 1105,
  NUMBER_1106: 1106,
  NUMBER_1107: 1107,
  NUMBER_1201: 1201,
  NUMBER_1202: 1202,
  NUMBER_1203: 1203,
  NUMBER_1204: 1204,
  NUMBER_1301: 1301,
  NUMBER_1302: 1302,
  NUMBER_1303: 1303,
  NUMBER_1304: 1304,
  NUMBER_1305: 1305,
  NUMBER_1306: 1306,
  NUMBER_1311: 1311,
  NUMBER_1312: 1312,
  NUMBER_1313: 1313,
  NUMBER_1314: 1314,
  NUMBER_1315: 1315,
  NUMBER_1401: 1401,
  NUMBER_1402: 1402,
  NUMBER_1403: 1403,
  NUMBER_1404: 1404,
  NUMBER_1405: 1405,
  NUMBER_1501: 1501,
  NUMBER_1502: 1502,
  NUMBER_1503: 1503,
  NUMBER_1504: 1504,
  NUMBER_1601: 1601,
  NUMBER_1602: 1602,
  NUMBER_1603: 1603,
  NUMBER_1604: 1604,
  NUMBER_1605: 1605,
  NUMBER_1701: 1701,
  NUMBER_1702: 1702,
  NUMBER_1703: 1703,
  NUMBER_1704: 1704,
  NUMBER_1705: 1705,
  NUMBER_1801: 1801,
  NUMBER_1802: 1802,
  NUMBER_1803: 1803,
  NUMBER_1901: 1901,
  NUMBER_1902: 1902,
  NUMBER_1903: 1903,
  NUMBER_1904: 1904,
  NUMBER_1905: 1905,
  NUMBER_1906: 1906,
  NUMBER_1907: 1907,
  NUMBER_1908: 1908,
  NUMBER_2001: 2001,
  NUMBER_2002: 2002,
  NUMBER_2003: 2003,
  NUMBER_2004: 2004,
  NUMBER_2005: 2005,
  NUMBER_2101: 2101,
  NUMBER_2102: 2102,
  NUMBER_2103: 2103,
  NUMBER_2104: 2104,
  NUMBER_2105: 2105,
  NUMBER_2201: 2201,
  NUMBER_2202: 2202,
  NUMBER_2203: 2203,
  NUMBER_2204: 2204,
  NUMBER_2301: 2301,
  NUMBER_2302: 2302,
  NUMBER_2303: 2303,
  NUMBER_2304: 2304,
  NUMBER_2305: 2305,
  NUMBER_2501: 2501,
  NUMBER_2502: 2502,
  NUMBER_2503: 2503,
  NUMBER_2504: 2504,
  NUMBER_2505: 2505,
  NUMBER_2601: 2601,
  NUMBER_2602: 2602,
  NUMBER_2603: 2603,
  NUMBER_2701: 2701,
  NUMBER_2702: 2702,
  NUMBER_2801: 2801,
  NUMBER_2802: 2802,
  NUMBER_2803: 2803,
  NUMBER_2804: 2804,
  NUMBER_2805: 2805,
  NUMBER_2806: 2806,
  NUMBER_2807: 2807,
  NUMBER_2808: 2808,
  NUMBER_2809: 2809,
  NUMBER_2901: 2901,
  NUMBER_2902: 2902,
  NUMBER_2903: 2903,
  NUMBER_2904: 2904,
  NUMBER_3001: 3001,
  NUMBER_3002: 3002,
  NUMBER_3003: 3003,
  NUMBER_3004: 3004,
  NUMBER_3005: 3005,
  NUMBER_3006: 3006,
  NUMBER_3101: 3101,
  NUMBER_3102: 3102,
  NUMBER_3201: 3201,
  NUMBER_3202: 3202,
  NUMBER_3203: 3203,
  NUMBER_3204: 3204,
} as const;
