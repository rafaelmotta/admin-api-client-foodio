let service = (Restangular, $rootScope) => {

  return new class DeliveryTimeApi {

    fetchForScheduling() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('delivery_times')
        .one('scheduling')
        .get();
    }

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('delivery_times')
        .get();
    }

    create(data) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('delivery_times', { delivery_time: data });
    }

    update(data) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('delivery_times', data.id)
        .patch({ delivery_time: data });
    }

    destroy(data) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('delivery_times', data.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('deliveryTimeApi', service);