let service = (Restangular, ApiBase) => {
  return new class AddonCategoryApi extends ApiBase {
    getWithStoreAddons() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('addon_categories')
        .one('store_addons')
        .get();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('addonCategoryApi', service);