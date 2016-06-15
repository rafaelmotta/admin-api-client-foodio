let service = (Restangular, $rootScope) => {

  return new class MeCartApi {

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

    update(cart) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('me')
        .one('cart')
        .patch({ cart: cart });
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('meCartApi', service);
