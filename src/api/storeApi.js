let service = (Restangular, ApiBase) => {

  return new class StoreApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .get();
    }

    update(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .patch({ store: data });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('foodbox.admin.api').factory('storeApi', service);
