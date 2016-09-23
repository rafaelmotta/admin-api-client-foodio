let service = (PublicRestangular, $rootScope) => {
  return new class CostumerInterestApi {

    // POST /costumer_interests
    create(costumer_interest) {
      return PublicRestangular
        .post('costumer_interests', { costumer_interest: costumer_interest });
    }
  }
};

service.$inject = ['PublicRestangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('costumerInterestApi', service);
