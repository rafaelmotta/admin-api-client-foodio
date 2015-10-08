let factory = (Restangular, ApiBase) => {

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

angular.module('foodbox.admin.api').factory('costumerOrderApi', factory);
