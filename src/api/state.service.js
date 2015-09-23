let service = (PublicRestangular, Restangular) => {

  return new class StateApi {
    fetch() {
      return PublicRestangular
        .one('states')
        .get();
    }
  }
};

angular.module('foodbox.admin.api').factory('stateApi', service);
