let service = (Restangular, $rootScope) => {

  return new class CostumerApi {

    fetch(params) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers')
        .get(params);
    }

    update(costumer) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .patch({ costumer: costumer });
    }

    show(costumer, params = {}) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .get(params);
    }

    create(costumer) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('costumers', { costumer: costumer });
    }

    export() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers')
        .one('export')
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('costumerApi', service);
