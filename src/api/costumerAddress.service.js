let service = (Restangular, ApiBase) => {

  return new class CostumerAddressApi extends ApiBase {

    fetch(costumer) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers', costumer.id)
        .one('addresses')
        .get();
    }

    create(costumer, address) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers', costumer.id)
        .post('addresses', { address: address });
    }

    update(costumer, address) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers', costumer.id)
        .patch('addresses', { address: address });
    }

    destroy(costumer, address) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers', costumer.id)
        .one('addresses', address.id)
        .remove();
    }
  }
};

angular.module('foodbox.admin.api').factory('costumerAddressApi', service);
