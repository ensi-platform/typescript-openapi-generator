/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Коды пунктов меню:
  * `products` - Раздел "Товары"
  * `products_catalog` - Подраздел "Товары->Каталог товаров"
  * `products_imports` - Подраздел "Товары->Импорт товаров"
  * `products_categories` - Подраздел "Товары->Категории товаров"
  * `products_attributes` - Подраздел "Товары->Атрибуты"
  * `products_brands` - Подраздел "Товары->Бренды"
  * `products_product_groups` - Подраздел "Товары->Товарные склейки"
  * `products_statuses` - Подраздел "Товары->Статусная модель"
  * `products_entities` - Подраздел "Товары->Pim сущности"
  * `products_entities_failed_jobs` - Подраздел "Товары->Pim сущности->Failed Jobs"
  * `products_entities_temp_files` - Подраздел "Товары->Pim сущности->Temp Files"
  * `products_entities_product_events` - Подраздел "Товары->Pim сущности->Product Events"
  * `products_entities_actual_category_properties` - Подраздел "Товары->Pim сущности->Actual Category Properties"
  * `products_entities_actualize_categories` - Подраздел "Товары->Pim сущности->Actualize Categories"
  * `catalog_cache_entities` - Подраздел "Товары->Catalog Cache сущности"
  * `catalog_cache_entities_failed_jobs` - Подраздел "Товары->Catalog Cache сущности->Failed Jobs"
  * `catalog_cache_entities_indexer_timestamps` - Подраздел "Товары->Catalog Cache сущности->Indexer Timestamps"
  * `catalog_cache_entities_property_directory_values` - Подраздел "Товары->Catalog Cache сущности->Property Directory Values"
  * `catalog_cache_entities_properties` - Подраздел "Товары->Catalog Cache сущности->Properties"
  * `catalog_cache_entities_products` - Подраздел "Товары->Catalog Cache сущности->Products"
  * `catalog_cache_entities_images` - Подраздел "Товары->Catalog Cache сущности->Images"
  * `catalog_cache_entities_product_property_values` - Подраздел "Товары->Catalog Cache сущности->Product Property Values"
  * `catalog_cache_entities_product_group_products` - Подраздел "Товары->Catalog Cache сущности->Product Group Products"
  * `catalog_cache_entities_product_groups` - Подраздел "Товары->Catalog Cache сущности->Product Groups"
  * `catalog_cache_entities_offers` - Подраздел "Товары->Catalog Cache сущности->Offers"
  * `catalog_cache_entities_discounts` - Подраздел "Товары->Catalog Cache сущности->Discounts"
  * `catalog_cache_entities_nameplates` - Подраздел "Товары->Catalog Cache сущности->Nameplates"
  * `catalog_cache_entities_nameplates_products` - Подраздел "Товары->Catalog Cache сущности->Nameplates Products"
  * `catalog_cache_entities_actual_category_properties` - Подраздел "Товары->Catalog Cache сущности->Actual Category Properties"
  * `catalog_cache_entities_categories` - Подраздел "Товары->Catalog Cache сущности->Categories"
  * `catalog_cache_entities_brands` - Подраздел "Товары->Catalog Cache сущности->Brands"
  * `baskets_entities` - Подраздел "Товары->Baskets сущности"
  * `baskets_entities_baskets` - Подраздел "Товары->Baskets сущности->Baskets"
  * `baskets_entities_basket_items` - Подраздел "Товары->Baskets сущности->Basket Items"
  * `orders` - Раздел "Заказы"
  * `orders_orders` - Подраздел "Заказы->Список заказов"
  * `orders_refunds` - Подраздел "Заказы->Возвраты"
  * `orders_settings` - Подраздел "Заказы->Настройки"
  * `feeds` - Раздел "Фиды"
  * `content` - Раздел "Контент"
  * `content_banners` - Подраздел "Контент->Баннеры"
  * `content_nameplates` - Подраздел "Контент->Товарные теги"
  * `content_pages` - Подраздел "Контент->Страницы"
  * `content_seo_templates` - Подраздел "Контент->SEO-шаблоны"
  * `content_technical_tables` - Подраздел "Контент->Технические таблицы"
  * `content_technical_tables_banner_types` - Подраздел "Контент->Технические таблицы->Типы банеров"
  * `logistic` - Раздел "Логистика"
  * `logistic_pickup_points` - Подраздел "Логистика->Точки самовывоза"
  * `logistic_delivery_prices` - Подраздел "Логистика->Стоимость доставки по регионам"
  * `logistic_delivery_options_settings` - Подраздел "Логистика->Параметры доставки"
  * `customers` - Раздел "Клиенты"
  * `customers_customers` - Подраздел "Клиенты->Список клиентов"
  * `customers_customers_auth` - Подраздел "Клиенты->Customers Auth Сущности"
  * `customers_customers_auth_confirmation_codes` - Подраздел "Клиенты->Customers Auth Сущности->Коды подтверждения"
  * `sellers` - Раздел "Продавцы"
  * `sellers_sellers` - Подраздел "Продавцы->Список продавцов"
  * `sellers_stores` - Подраздел "Продавцы->Склады"
  * `marketing` - Раздел "Маркетинг"
  * `marketing_promo_codes` - Подраздел "Маркетинг->Промокоды"
  * `marketing_discounts` - Подраздел "Маркетинг->Скидки"
  * `communications` - Раздел "Коммуникации"
  * `communications_notifications` - Подраздел "Коммуникации->Сервисные уведомления"
  * `communications_entities` - Подраздел "Коммуникации->Communications сущности"
  * `communications_entities_notifications` - Подраздел "Коммуникации->Communications сущности->Notifications"
  * `reviews` - Раздел "Отзывы"
  * `reviews_reviews` - Подраздел "Отзывы->Список отзывов"
  * `settings` - Раздел "Настройки"
  * `settings_users` - Подраздел "Настройки->Пользователи"
  * `settings_users_roles` - Подраздел "Настройки->Роли пользователей"
  * `settings_cloud_integration` - Подраздел "Настройки->Параметры поиска"
  * `offers` - Раздел "Офферы"
  * `offers_entities` - Подраздел "Товары->Offers сущности"
  * `offers_entities_failed_jobs` - Подраздел "Товары->Offers сущности->Failed Jobs"

 */
export type MenuItemCodeEnum = typeof MenuItemCodeEnum[keyof typeof MenuItemCodeEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MenuItemCodeEnum = {
  products: 'products',
  products_catalog: 'products_catalog',
  products_imports: 'products_imports',
  products_categories: 'products_categories',
  products_attributes: 'products_attributes',
  products_brands: 'products_brands',
  products_product_groups: 'products_product_groups',
  products_statuses: 'products_statuses',
  products_entities: 'products_entities',
  products_entities_failed_jobs: 'products_entities_failed_jobs',
  products_entities_temp_files: 'products_entities_temp_files',
  products_entities_product_events: 'products_entities_product_events',
  products_entities_actual_category_properties: 'products_entities_actual_category_properties',
  products_entities_actualize_categories: 'products_entities_actualize_categories',
  catalog_cache_entities: 'catalog_cache_entities',
  catalog_cache_entities_failed_jobs: 'catalog_cache_entities_failed_jobs',
  catalog_cache_entities_indexer_timestamps: 'catalog_cache_entities_indexer_timestamps',
  catalog_cache_entities_property_directory_values: 'catalog_cache_entities_property_directory_values',
  catalog_cache_entities_properties: 'catalog_cache_entities_properties',
  catalog_cache_entities_products: 'catalog_cache_entities_products',
  catalog_cache_entities_images: 'catalog_cache_entities_images',
  catalog_cache_entities_product_property_values: 'catalog_cache_entities_product_property_values',
  catalog_cache_entities_product_group_products: 'catalog_cache_entities_product_group_products',
  catalog_cache_entities_product_groups: 'catalog_cache_entities_product_groups',
  catalog_cache_entities_offers: 'catalog_cache_entities_offers',
  catalog_cache_entities_discounts: 'catalog_cache_entities_discounts',
  catalog_cache_entities_nameplates: 'catalog_cache_entities_nameplates',
  catalog_cache_entities_nameplates_products: 'catalog_cache_entities_nameplates_products',
  catalog_cache_entities_actual_category_properties: 'catalog_cache_entities_actual_category_properties',
  catalog_cache_entities_categories: 'catalog_cache_entities_categories',
  catalog_cache_entities_brands: 'catalog_cache_entities_brands',
  baskets_entities: 'baskets_entities',
  baskets_entities_baskets: 'baskets_entities_baskets',
  baskets_entities_basket_items: 'baskets_entities_basket_items',
  orders: 'orders',
  orders_orders: 'orders_orders',
  orders_refunds: 'orders_refunds',
  orders_settings: 'orders_settings',
  feeds: 'feeds',
  content: 'content',
  content_banners: 'content_banners',
  content_nameplates: 'content_nameplates',
  content_pages: 'content_pages',
  content_seo_templates: 'content_seo_templates',
  content_technical_tables: 'content_technical_tables',
  content_technical_tables_banner_types: 'content_technical_tables_banner_types',
  logistic: 'logistic',
  logistic_pickup_points: 'logistic_pickup_points',
  logistic_delivery_prices: 'logistic_delivery_prices',
  logistic_delivery_options_settings: 'logistic_delivery_options_settings',
  customers: 'customers',
  customers_customers: 'customers_customers',
  customers_customers_auth: 'customers_customers_auth',
  customers_customers_auth_confirmation_codes: 'customers_customers_auth_confirmation_codes',
  sellers: 'sellers',
  sellers_sellers: 'sellers_sellers',
  sellers_stores: 'sellers_stores',
  marketing: 'marketing',
  marketing_promo_codes: 'marketing_promo_codes',
  marketing_discounts: 'marketing_discounts',
  communications: 'communications',
  communications_notifications: 'communications_notifications',
  communications_entities: 'communications_entities',
  communications_entities_notifications: 'communications_entities_notifications',
  reviews: 'reviews',
  reviews_reviews: 'reviews_reviews',
  settings: 'settings',
  settings_users: 'settings_users',
  settings_users_roles: 'settings_users_roles',
  settings_cloud_integration: 'settings_cloud_integration',
  offers: 'offers',
  offers_entities: 'offers_entities',
  offers_entities_failed_jobs: 'offers_entities_failed_jobs',
} as const;
