let service = ($q, Restangular, ApiBase) => {

  return new class OrderApi extends ApiBase {

    fetch(params) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('orders')
        .get(params);
    }

    show(order) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('orders', order.id)
        .get();
    }

    getStatusCount() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('orders')
        .one('status_count')
        .get();
    }

    create(order) {
      return this._serializeBeforeCreate(order).then( (serializedData) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .post('orders', serializedData.id);
      });
    }

    update(order) {
      return this._serializeBeforeUpdate(order).then((serializedData) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .post('orders', order.id)
          .patch({ order: serializedData });
      });
    }

    _serializeBeforeCreate(order) {
      return $q((resolve, reject) => {
        let data = {
          cart_id: order.cart.id,
          payment_method_id: order.paymentMethod.id,
          order_type_id: order.orderType.id,
          note: order.note || null,
          change: order.change || null,
          costumer_id: (order.costumer && order.costumer.id) ? order.costumer.id : null,
          address_id: (order.address && order.address.id) ? order.address.id : null
        };

        return resolve(data);
      });
    }

    _serializeBeforeUpdate() {
      return $q((resolve, reject) => {
        if(order.courier) order.courier_id = order.courier.id;
        if(order.address) order.address_id = order.address.id;

        return resolve(order);
      });
    }
  }
};

angular.module('foodbox.admin.api').factory('orderApi', service);