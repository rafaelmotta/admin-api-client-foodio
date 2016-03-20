let service = (PublicRestangular, Restangular, $rootScope) => {

  return new class StoreApi {

    fetch(params) {
      return PublicRestangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .get(params);
    }

    update(data) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .patch({ store: data });
    }
  }
};

service.$inject = ['PublicRestangular', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeApi', service);
