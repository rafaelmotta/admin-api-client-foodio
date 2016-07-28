let service = ($q, Restangular, $rootScope) => {

  return new class DeliveryAreaApi {

    fetch(cityOperation) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations', cityOperation.id)
        .one('delivery_areas')
        .get();
    }

    create(cityOperation, deliveryArea) {
      return this._serializeBeforeCreate(deliveryArea).then( (serializedDeliveryArea) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('city_operations', cityOperation.id)
          .post('delivery_areas', { delivery_area: serializedDeliveryArea });
      });
    }

    update(cityOperation, deliveryArea) {
      return this._serializeBeforeEdit(deliveryArea).then((serializedDeliveryArea) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('city_operations', cityOperation.id)
          .one('delivery_areas', deliveryArea.id)
          .patch({ delivery_area: serializedDeliveryArea });
      });
    }

    destroy(cityOperation, deliveryArea) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations', cityOperation.id)
        .one('delivery_areas', deliveryArea.id)
        .remove();
    }


    fetchAvailable(cityOperation) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('city_operations', cityOperation.id)
        .one('delivery_areas')
        .one('available')
        .get();
    }

    _serializeBeforeCreate(deliveryArea) {
      return $q((resolve, reject) => {
        let data = {
          neighborhood_id: deliveryArea.neighborhood.id,
          tax: deliveryArea.tax || 0,
          min_order: deliveryArea.min_order || null
        };

        return resolve(data);
      });
    }

    _serializeBeforeEdit(deliveryArea) {
      return $q((resolve, reject) => {
        let data = {
          id: deliveryArea.id,
          tax: deliveryArea.tax || 0,
          min_order: deliveryArea.min_order || null
        };

        return resolve(data);
      });
    }
  }
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('deliveryAreaApi', service);