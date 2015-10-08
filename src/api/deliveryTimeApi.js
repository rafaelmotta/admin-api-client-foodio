let service = (Restangular, ApiBase) => {

  return new class DeliveryTimeApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('delivery_times')
        .get();
    }

    create(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .post('delivery_times', { delivery_time: data });
    }

    update(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('delivery_times', data.id)
        .patch({ delivery_time: data });
    }

    destroy(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('delivery_times', data.id)
        .remove();
    }
  }
};

angular.module('foodbox.admin.api').factory('deliveryTimeApi', service);