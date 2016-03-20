let service = (PublicRestangular, Restangular, $rootScope) => {

  return new class MenuApi {

    fetch(params = {}) {
      return PublicRestangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('menu')
        .get(params);
    }
  }
};

service.$inject = ['PublicRestangular', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('menuApi', service);