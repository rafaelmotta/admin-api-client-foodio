let service = (PublicRestangular, Restangular) => {
  return new class ZipcodeApi {
    fetch(params) {
      return PublicRestangular
        .one('zipcode')
        .get(params);
    }
  }
};

service.$inject = ['PublicRestangular', 'Restangular'];
angular.module('admin.api.client.foodio').factory('zipcodeApi', service);