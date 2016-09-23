let service = (PublicRetangular, $rootScope) => {
  return new class CostumerInterestApi {

    // POST /costumer_interests
    create(costumer_interest) {
      return PublicRetangular
        .post('costumer_interests', { costumer_interest: costumer_interest });
    }
  }
};

service.$inject = ['PublicRetangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('costumerInterestApi', service);
