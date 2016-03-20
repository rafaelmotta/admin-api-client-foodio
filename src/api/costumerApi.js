let service = (Restangular, $rootScope) => {

  return new class CostumerApi {

    fetch(params) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers')
        .get(params);
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

    update(costumer) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('costumers', costumer.id)
        .patch({ costumer: costumer });
    }

  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('costumerApi', service);