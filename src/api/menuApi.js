let service = (Restangular, $rootScope) => {

  return new class MenuApi {

    fetch(params = {}) {
      return PublicRestangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('menu')
        .get(params);
    }

    show(product) {
      return PublicRestangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('menu', product.id)
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('menuApi', service);
