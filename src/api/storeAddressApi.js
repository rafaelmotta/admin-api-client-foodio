let service = (Restangular, ApiBase) => {

  return new class StoreAddressApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('addresses')
        .get();
    }

    update(storeAddress) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('addresses', storeAddress.id)
        .patch({ address: storeAddress });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('storeAddressApi', service);
