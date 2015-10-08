let service = (PublicRestangular, Restangular) => {
  return new class ZipcodeApi {
    fetch(params) {
      return PublicRestangular
        .one('zipcode')
        .get(params);
    }
  }
};

angular.module('foodbox.admin.api').factory('zipcodeApi', service);