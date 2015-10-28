let service = (Restangular, ApiBase) => {

  return new class Factory extends ApiBase {

    fetch(costumer) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers', costumer.id)
        .one('orders')
        .get();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('costumerOrderApi', service);