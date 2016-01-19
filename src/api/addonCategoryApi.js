let service = (Restangular, ApiBase) => {
  return new class AddonCategoryApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('addon_categories')
        .get();
    }

    create(addonCategory) {
      return Restangular
        .one('companies', this.company.id)
        .post('addon_categories', { addon_category: addonCategory })
    }

    update(addonCategory) {
      return Restangular
        .one('companies', this.company.id)
        .one('addon_categories', addonCategory.id)
        .patch({ addon_category: addonCategory })
    }

    destroy(addonCategory) {
      return Restangular
        .one('companies', this.company.id)
        .one('addon_categories', addonCategory.id)
        .remove();
    }

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