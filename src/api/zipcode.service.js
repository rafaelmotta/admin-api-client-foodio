let service = (Restangular) => {
  return new class ZipcodeApi {
    fetch(params) {
      return Restangular
        .one('zipcode')
        .get(params);
    }
  }
};

angular.module('foodbox.admin.api').factory('zipcodeApi', service);