let service = (Restangular, $rootScope) => {

  return new class StoreAddonApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('store_addons')
        .get();
    }

    show(storeAddon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('store_addons', storeAddon.id)
        .get();
    }

    update(storeAddon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('store_addons', storeAddon.id)
        .patch({ store_addon: storeAddon });
    }

    destroy(storeAddon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('store_addons', storeAddon.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeAddonApi', service);