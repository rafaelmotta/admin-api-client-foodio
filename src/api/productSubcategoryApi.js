let service = (Restangular, ApiBase) => {

  return new class ProductSubcategoryApi extends ApiBase {

    create(productCategory, productSubcategor) {
      return Restangular
        .one('companies', this.company.id)
        .one('product_categories', productCategory.type)
        .one('product_subcategories', { product_subcategory: productSubcategory });
    }

    update(productCategory, productSubcategory) {
      return Restangular
        .one('companies', this.company.id)
        .one('product_categories', productCategory.type)
        .one('product_subcategories', productCategory.type)
        .patch({ product_subcategory: productSubcategory });
    }

    destroy(productCategory, productSubcategor) {
      return Restangular
        .one('companies', this.company.id)
        .one('product_categories', productCategory.type)
        .one('product_subcategories', productCategory.type)
        .destroy();
    }

    fetch(productCategory) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('product_categories', productCategory.type)
        .one('product_subcategories')
        .one('store_products')
        .get();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('productSubcategoryApi', service);