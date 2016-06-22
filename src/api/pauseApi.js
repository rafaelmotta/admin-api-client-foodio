let service = (Restangular, $rootScope) => {

  return new class PauseApi {

    create(pause) {
      this._serializeBeforeCreate(pause).then((pause) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .post('pauses', { pause: pause });
      });
    }

    destroy(pause) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('pauses', pause.id)
        .remove();
    }

    _serializeBeforeCreate(pause) {
      return new Promise((resolve, reject) => {
        let data = {
          reason: pause.reason.alias,
          description: pause.description
        };

        resolve(data);
      });
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('pauseApi', service);
