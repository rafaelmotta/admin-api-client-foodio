let service = (Restangular, $rootScope) => {

  return new class PauseApi {

    create(pause) {
      return this._serializeBeforeCreate(pause).then((serializedData) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .post('pauses', { pause: serializedData });
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

        return resolve(data);
      });
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('pauseApi', service);
