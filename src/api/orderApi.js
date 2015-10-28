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

    create(order) {
      return this._serializeBeforeCreate(order).then((serializedOrder) => {
        console.log(serializedOrder);

        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .post('orders', { order: serializedOrder });
      });
    }

    update(order) {
      return this._serializeBeforeUpdate(order).then((serializedOrder) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('orders', order.id)
          .patch({ order: serializedOrder });
      });
    }

    fetchStatusCount() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('orders')
        .one('status_count')
        .get();
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

        if (order.scheduling.day && order.scheduling.time) {
          data.delivery_time = {
            wday: order.scheduling.day.wday,
            from: order.scheduling.day.date + ' ' + order.scheduling.time.opening,
            to: order.scheduling.day.date + ' ' + order.scheduling.time.closing
          };
        }

        return resolve(data);
      });
    }

    _serializeBeforeUpdate(order) {
      return $q((resolve, reject) => {

        if(order.courier) {
          order.courier_id = order.courier.id;
        }
        if(order.address) {
          order.address_id = order.address.id;
        }

        return resolve(order);
      });
    }
  }
};

service.$inject = ['$q', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('orderApi', service);