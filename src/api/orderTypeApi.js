let service = (Restangular, $q, $rootScope) => {

  return new class OrderTypeApi {

    // GET admin/companies/:company_id/stores/:store_id/order_types
    fetch(params) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('order_types')
        .get(params);
    }

    // GET admin/companies/:company_id/stores/:store_id/order_types/available
    fetchAvailable() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('order_types')
        .one('available')
        .get();
    }

    // POST admin/companies/:company_id/stores/:store_id/order_types
    create(orderType) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('order_types', { order_type: orderType });
    }

    // PUT admin/companies/:company_id/stores/:store_id/order_types/:id
    update(orderType) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('order_types', orderType.id)
        .patch({ order_type: orderType });
    }

    // DELETE admin/companies/:company_id/stores/:store_id/order_types/:id
    destroy(orderType) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('order_types', orderType.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('orderTypeApi', service);
