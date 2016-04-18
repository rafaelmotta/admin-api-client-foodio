let service = (Restangular, $rootScope) => {

  return new class MenuApi {

    fetch(params = {}) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('menu')
        .get(params);
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('menuApi', service);