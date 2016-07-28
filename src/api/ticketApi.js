let service = ($q, Restangular, $rootScope) => {

  return new class TicketApi {

    fetch(params) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('tickets')
        .get(params);
    }
  }
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('ticketApi', service);
