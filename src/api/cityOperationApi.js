let service = (Restangular, ApiBase) => {

  return new class CityOperationApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations')
        .get();
    }

    fetchAvailable(state) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations')
        .one('available')
        .get({ state_id: state.id });
    }

    fetchWithDeliveryAreas() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations')
        .one('delivery_areas')
        .get();
    }

    fetchAvailableDeliveryAreas(cityOperation) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations', cityOperation.id)
        .one('available_delivery_areas')
        .get();
    }

    create(cityOperation) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations', cityOperation.id)
        .put();
    }

    destroy(cityOperation) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations', cityOperation.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('cityOperationApi', service);