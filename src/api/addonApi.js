let service = (Restangular, $rootScope) => {
  return new class AddonApi {

    create(addonCategory, addon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('addon_categories', addonCategory.id)
        .post('addons', { addon: addon });
    }

    update(addonCategory, addon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('addon_categories', addonCategory.id)
        .one('addons', addon.id)
        .patch({ addon: addon })
    }

    destroy(addonCategory, addon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('addon_categories', addonCategory.id)
        .one('addons', addon.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('addonApi', service);