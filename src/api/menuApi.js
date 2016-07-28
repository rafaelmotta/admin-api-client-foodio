let service = (PublicRestangular, $rootScope) => {

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
        .get();
    }
  }
};

service.$inject = ['PublicRestangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('menuApi', service);
