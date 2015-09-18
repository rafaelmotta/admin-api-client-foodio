let service = ($q, Restangular, ApiBase) => {

  return new class DeliveryAreaApi extends ApiBase {

    fetch(cityOperation) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations', cityOperation.id)
        .one('delivery_areas')
        .get();
    }

    create(cityOperation, deliveryArea) {
      this._serializeBeforeCreate(deliveryArea).then( (serializedDeliveryArea) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('city_operations', cityOperation.id)
          .post('delivery_areas', { delivery_area: serializedDeliveryArea });
      });
    }

    update(cityOperation, deliveryArea) {
      this._serializeBeforeEdit(deliveryArea).then((serializedDeliveryArea) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('city_operations', cityOperation.id)
          .one('delivery_areas', deliveryArea.id)
          .patch({ delivery_area: serializedDeliveryArea });
      });
    }

    destroy(cityOperation, deliveryArea) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('city_operations', cityOperation.id)
        .one('delivery_areas', deliveryArea.id)
        .remove();
    }


    getAvailable(cityOperation) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
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

angular.module('foodbox.admin.api').factory('deliveryAreaApi', service);