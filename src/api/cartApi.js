let service = (Restangular, $rootScope) => {

  return new class CartApi {

    // GET admin/companies/:company_id/stores/:store_id/carts
    new() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('carts')
        .one('new')
        .get();
    }

    // GET admin/companies/:company_id/stores/:store_id/carts/:id
    show(cart) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('carts', cart.id)
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cartApi', service);
