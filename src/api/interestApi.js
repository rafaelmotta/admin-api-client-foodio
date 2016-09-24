let service = (PublicRestangular, $rootScope) => {
  return new class interestApi {

    // POST /costumer_interests
    create(costumer_interest) {
      return PublicRestangular
        .one('itsdelivery')
        .post('interest', { costumer_interest: costumer_interest });
    }
  }
};

service.$inject = ['PublicRestangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('interestApi', service);
