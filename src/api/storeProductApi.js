let service = (Restangular, ApiBase) => {

  return new class StoreProductApi extends ApiBase {

    show(storeProduct) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('store_products', storeProduct.id)
        .get();
    }

    update(storeProduct) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('store_products', storeProduct.id)
        .patch({ store_product: storeProduct });
    }

    destroy(storeProduct) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('store_products', storeProduct.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('foodbox.admin.api').factory('storeProductApi', service);
