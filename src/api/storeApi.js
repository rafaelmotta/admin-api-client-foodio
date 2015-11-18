let service = (PublicRestangular, Restangular, ApiBase) => {

  return new class StoreApi extends ApiBase {

    fetch(params) {
      return PublicRestangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .get(params);
    }

    update(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .patch({ store: data });
    }
  }
};

service.$inject = ['PublicRestangular', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('storeApi', service);
