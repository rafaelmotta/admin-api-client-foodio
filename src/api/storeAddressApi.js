let service = (Restangular, $rootScope) => {

  return new class StoreAddressApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addresses')
        .get();
    }

    update(storeAddress) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('addresses', storeAddress.id)
        .patch({ address: storeAddress });
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeAddressApi', service);
