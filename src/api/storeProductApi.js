let service = (Restangular, $rootScope) => {

  return new class StoreProductApi {

    show(storeProduct) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('store_products', storeProduct.id)
        .get();
    }

    update(storeProduct) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('store_products', storeProduct.id)
        .patch({ store_product: storeProduct });
    }

    destroy(storeProduct) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('store_products', storeProduct.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeProductApi', service);
