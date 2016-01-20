let service = (Restangular, ApiBase) => {

  return new class StoreAddonApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('store_addons')
        .get();
    }

    show(storeAddon) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('store_addons', storeAddon.id)
        .get();
    }

    update(storeAddon) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('store_addons', storeAddon.id)
        .patch({ store_addon: storeAddon });
    }

    destroy(storeAddon) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('store_addons', storeAddon.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('storeAddonApi', service);