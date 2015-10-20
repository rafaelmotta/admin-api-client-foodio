let service = (Restangular, ApiBase) => {

  return new class CostumerApi extends ApiBase {

    fetch(params) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers')
        .get(params);
    }

    show(costumer, params = {}) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers', costumer.id)
        .get(params);
    }

    create(costumer) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .post('costumers', { costumer: costumer });
    }

    update(costumer) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('costumers', costumer.id)
        .patch({ costumer: costumer });
    }

  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('foodbox.admin.api').factory('costumerApi', service);