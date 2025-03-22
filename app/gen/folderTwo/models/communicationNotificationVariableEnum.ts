/**
 * Не трогать руками, файлы автогенерируемые
 */

/**
 * Доступные виды переменных в уведомлениях:
  * `{order_products}` - список продуктов в заказе
  * `{delivery_products}` - список продуктов в отправлении
  * `{product_name}` - название товара (связано с order_products или delivery_products)
  * `{product_qty}` - количество товара в позиции (связано с order_products или delivery_products)
  * `{product_price}` - цена позиции с товаром со скидкой (связано с order_products или delivery_products)
  * `{product_cost}` - цена позиции с товаром без скидки (связано с order_products или delivery_products)
  * `{product_image}` - ссылка главного изображения товара (связано с order_products или delivery_products)
  * `{order_receiver_name}` - имя получателя
  * `{order_receiver_phone}` - телефон получателя
  * `{order_number}` - номер заказа
  * `{order_payment_link}` - ссылка на оплату
  * `{order_price}` - итоговая стоимость заказа
  * `{order_products_price}` - стоимость товаров в заказе
  * `{order_delivery_price}` - стоимость доставки
  * `{order_delivery_method}` - метод доставки
  * `{order_delivery_address}` - адрес доставки
  * `{order_delivery_point}` - точка самовывоза
  * `{order_delivery_comment}` - комментарий к доставке
  * `{order_deliveries}` - отправления в заказе
  * `{order_delivery_number}` - номер отправления (связано с order_deliveries, если событие связано с заказом)
  * `{order_delivery_date}` - дата доставки отправления (связано с order_deliveries, если событие связано с заказом)
  * `{order_delivery_timeslot}` - временной диапазон доставки отправления (связано с order_deliveries, если событие связано с заказом)
  * `{customer_name}` - имя клиента
  * `{confirmation_code}` - код подтверждения

 */
export type CommunicationNotificationVariableEnum = typeof CommunicationNotificationVariableEnum[keyof typeof CommunicationNotificationVariableEnum];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CommunicationNotificationVariableEnum = {
  '{order_products}': '{order_products}',
  '{delivery_products}': '{delivery_products}',
  '{product_name}': '{product_name}',
  '{product_qty}': '{product_qty}',
  '{product_price}': '{product_price}',
  '{product_cost}': '{product_cost}',
  '{product_image}': '{product_image}',
  '{order_receiver_name}': '{order_receiver_name}',
  '{order_receiver_phone}': '{order_receiver_phone}',
  '{order_number}': '{order_number}',
  '{order_payment_link}': '{order_payment_link}',
  '{order_price}': '{order_price}',
  '{order_products_price}': '{order_products_price}',
  '{order_delivery_price}': '{order_delivery_price}',
  '{order_delivery_method}': '{order_delivery_method}',
  '{order_delivery_address}': '{order_delivery_address}',
  '{order_delivery_point}': '{order_delivery_point}',
  '{order_delivery_comment}': '{order_delivery_comment}',
  '{order_deliveries}': '{order_deliveries}',
  '{order_delivery_number}': '{order_delivery_number}',
  '{order_delivery_date}': '{order_delivery_date}',
  '{order_delivery_timeslot}': '{order_delivery_timeslot}',
  '{customer_name}': '{customer_name}',
  '{confirmation_code}': '{confirmation_code}',
} as const;
