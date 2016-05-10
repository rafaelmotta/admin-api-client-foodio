let service = (Restangular, $rootScope) => {
  return new class AddonCategoryApi {

    // GET admin/companies/:company_id/stores/:store_id/addon_categories
    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories')
        .get();
    }

    // GET admin/companies/:company_id/stores/:store_id/addon_categories/:id
    show(addonCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories', addonCategory.id)
        .get();
    }

    // POST admin/companies/:company_id/stores/:store_id/addon_categories
    create(addonCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('addon_categories', { addon_category: addonCategory })
    }

    // PATCH admin/companies/:company_id/stores/:store_id/addon_categories/:addon_category_d
    update(addonCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories', addonCategory.id)
        .patch({ addon_category: addonCategory })
    }

    // DELETE admin/companies/:company_id/stores/:store_id/addon_categories/:addon_category_id
    destroy(addonCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories', addonCategory.id)
        .remove();
    }

    // GET admin/companies/:company_id/stores/:store_id/addon_categories/addons
    fetchWithAddons() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addon_categories')
        .one('addons')
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('addonCategoryApi', service);
