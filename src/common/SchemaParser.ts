import type { OpenAPIV3 } from 'openapi-types';

import { ConfigSchema } from '../config/Config';
import { augmentPathsOperations } from './helpers';
import { AugmentedOperation } from './types';

export type ParsedSchema = {
    document: OpenAPIV3.Document;
    operations: AugmentedOperation[];
};

export interface ParsedPath {
    relativePath: string;
    name: string;
    originalPath: string;
}

export class SchemaParser {
    private schemaObject!: OpenAPIV3.Document;
    private config: ConfigSchema;

    constructor(config: ConfigSchema, schemaObject: OpenAPIV3.Document) {
        this.config = config;
        this.schemaObject = schemaObject;
    }

    async parse(): Promise<ParsedSchema> {
        const paths = Object.keys(this.schemaObject.paths);
        if (!paths) throw new Error('[SchemaParser] No paths found in openapi schema.');

        const operations = augmentPathsOperations(this.schemaObject.paths, this.config, undefined, {
            '/common/files/download-protected': '/common',
            '/cms/banner*': '/cms/banners',
            '/cms/nameplates/nameplate-products': '/cms/nameplates',
            '/cms/seo/template*': '/cms/seo/templates',
            '/auth/login': '/auth',
            '/auth/logout': '/auth',
            '/auth/refresh': '/auth',
            '/auth/current-user': '/auth',
            '/logistic/point-enum-values': '/logistic/points',
            '/logistic/delivery-service*': '/logistic/delivery-services',
            '/logistic/federal-district-enum-values': '/logistic/federal-districts',
            '/logistic/region-enum-values': '/logistic/regions',
            '/logistic/cargo-orders': '/logistic/cargo',
            '/logistic/shipment-methods': '/logistic/shipments',
            '/orders/order-statuses': '/orders/orders',
            '/orders/order-sources': '/orders/orders',
            '/orders/payment-methods': '/orders/payments',
            '/orders/payment-statuses': '/orders/payments',
            '/orders/delivery-statuses': '/orders/deliveries',
            '/orders/shipment-statuses': '/orders/shipments',
            '/orders/refund-statuses': '/orders/refunds',
            '/orders/refund-reasons': '/orders/refunds',
            '/catalog/brand-enum-values': '/catalog/brands',
            '/catalog/category-properties': '/catalog/categories',
            '/catalog/category-enum-values': '/catalog/categories',
            '/catalog/properties/properties-types': '/catalog/properties',
            '/catalog/properties/directory': '/catalog/properties',
            '/catalog/products*': '/catalog/products',
            '/catalog/product-statuses': '/catalog/products',
            '/catalog/product-import-warnings': '/catalog/product-imports',
            '/catalog/product-status-enum-values': '/catalog/products',
            '/catalog/product-status-types': '/catalog/products',
            '/catalog/product-events': '/catalog/products',
            '/catalog/product-event-operations': '/catalog/products',
            '/catalog/reviews/review-statuses': '/catalog/reviews',
            '/catalog/reviews/review-customer': '/catalog/reviews',
            '/catalog/reviews/review-product': '/catalog/reviews',
            '/catalog/feed-types': '/catalog/feeds',
            '/catalog/feed-platforms': '/catalog/feeds',
            '/catalog/feed-settings': '/catalog/feeds',
            '/catalog/cloud-integrations': '',
            '/customers/customer-enum-values': '/customers/customers',
            '/customers/users': '/customers/customers',
            '/customers/users-enum-values': '/customers/customers',
            '/customers/addresses': '/customers/customers',
            '/customers/statuses': '/customers/customers',
            '/customers/statuses-enum-values': '/customers/customers',
            '/customers/favorites': '/customers/customers',
            '/customers/customers-info': '/customers/customers',
            '/customers/bonus-operations': '/customers/customers',
            '/customers/product-subscribes': '/customers/customers',
            '/customers/preferences': '/customers/customers',
            '/customers/orders': '/customers/customers',
            '/marketing/promo-code-statuses': '/marketing/promo-codes',
            '/marketing/discount*': '/marketing/discounts',
            '/communication/types': '/communication/common',
            '/communication/notification-setting*': '/communication/notification-settings',
            '/units/sellers/seller-statuses': '/units/sellers',
            '/units/seller-enum-values': '/units/sellers',
            '/units/stores-workings': '/units/stores',
            '/units/stores-pickup-times': '/units/stores',
            '/units/stores-contacts': '/units/stores',
            '/units/seller-users': '/units/sellers',
            '/units/seller-user-roles': '/units/sellers',
            '/units/admin-user-enum-values': '/units/admin-users',
            '/units/admin-users/mass/change-active': '/units/admin-users',
            '/units/admin-users/set-password': '/units/admin-users',
            '/units/admin-users/right-access': '/units/admin-users',
            '/units/admin-user-roles': '/units/admin-users',
        });

        return {
            document: this.schemaObject,
            operations,
        };
    }
}
