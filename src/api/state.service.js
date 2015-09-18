let service = (Restangular) => {

  return new class StateApi {

    fetch() {
      return Restangular
        .one('states')
        .get();
    }
  }
};

angular.module('foodbox.admin.api').factory('stateApi', service);
