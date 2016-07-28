let service = (Restangular, $rootScope) => {

  return new class Factory {

    fetch(costumer) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .one('orders')
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('costumerOrderApi', service);