let service = (Restangular, $rootScope) => {

  return new class PauseApi {

    create(pause) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('pauses', { pause: pause });
    }

    destroy(pause) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('pauses', pause.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('pauseApi', service);