let service = (Restangular, ApiBase) => {

  return new class StoreAddonApi extends ApiBase {

    show(addonCategory, storeAddon) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('addon_categories', addonCategory.id)
        .one('store_addons', storeAddon.id)
        .get();
    }

    update(addonCategory, storeAddon) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('addon_categories', addonCategory.id)
        .one('store_addons', storeAddon.id)
        .patch({ store_addon: storeAddon });
    }

    destroy(addonCategory, storeAddon) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('addon_categories', addonCategory.id)
        .one('store_addons', storeAddon.id)
        .remove();
    }
  }
};

angular.module('foodbox.admin.api').factory('storeAddonApi', service);