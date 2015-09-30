let service = (Restangular, ApiBase) => {

  return new class OrderTypeApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types')
        .get();
    }

    fetchAvailable() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types')
        .one('available')
        .get();
    }

    create(orderType) {
      this._serializeBeforeCreate(orderType).then((serializedOrderType) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .post('order_types', { order_type: serializedOrderType });
      });
    }

    destroy(orderType) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types', orderType.id)
        .remove();
    }

    _serializeBeforeCreate(order) {
      return new Promise((resolve, reject) => {
        let data = angular.copy(order);

        data.available_order_type_id = order.available_order_type.id
        data.available_order_type = null;

        resolve(data);
      });
    }
  }
};

angular.module('foodbox.admin.api').factory('orderTypeApi', service);