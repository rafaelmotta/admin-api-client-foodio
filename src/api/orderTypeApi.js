let service = (Restangular, $q, ApiBase) => {

  return new class OrderTypeApi extends ApiBase {

    fetch(params) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types')
        .get(params);
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
      return this._serializeBeforeCreate(orderType).then((serializedOrderType) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .post('order_types', { order_type: serializedOrderType });
      });
    }

    update(orderType) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types', orderType.id)
        .patch({ order_type: orderType });
    }

    destroy(orderType) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types', orderType.id)
        .remove();
    }

    _serializeBeforeCreate(order) {
      return $q((resolve, reject) => {
        let data = angular.copy(order);

        data.available_order_type_id = order.availableOrderType.id
        data.available_order_type = null;

        resolve(data);
      });
    }
  }
};

service.$inject = ['Restangular', '$q', 'ApiBase'];
angular.module('foodbox.admin.api').factory('orderTypeApi', service);