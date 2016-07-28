let service = (PublicRestangular, Restangular) => {

  return new class StateApi {
    fetch() {
      return PublicRestangular
        .one('states')
        .get();
    }
  }
};


service.$inject = ['PublicRestangular', 'Restangular'];
angular.module('itsdelivery-api-admin').factory('stateApi', service);