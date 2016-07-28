let service = (Restangular, $rootScope) => {

  return new class CityOperationApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations')
        .get();
    }

    fetchAvailable(state) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations')
        .one('available')
        .get({ state_id: state.id });
    }

    fetchWithDeliveryAreas() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations')
        .one('delivery_areas')
        .get();
    }

    fetchAvailableDeliveryAreas(cityOperation) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations', cityOperation.id)
        .one('available_delivery_areas')
        .get();
    }

    create(cityOperation) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations', cityOperation.id)
        .put();
    }

    destroy(cityOperation) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations', cityOperation.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('cityOperationApi', service);