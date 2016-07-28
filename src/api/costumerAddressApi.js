let service = (Restangular, $rootScope) => {

  return new class CostumerAddressApi {

    fetch(costumer) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .one('addresses')
        .get();
    }

    create(costumer, address) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .post('addresses', { address: address });
    }

    update(costumer, address) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .one('addresses', address.id)
        .patch({ address: address });
    }

    destroy(costumer, address) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .one('addresses', address.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('costumerAddressApi', service);