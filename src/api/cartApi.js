let service = (Restangular, $rootScope) => {

  return new class CartApi {

    // GET admin/companies/:company_id/stores/:store_id/me/cart
    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('me')
        .one('cart')
        .get();
    }

    // POST admin/companies/:company_id/stores/:store_id/me/cart
    create() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('me')
        .one('cart')
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cartApi', service);
