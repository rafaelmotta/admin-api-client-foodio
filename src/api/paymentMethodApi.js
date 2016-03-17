let service = (Restangular, ApiBase) => {

  return new class PaymentMethodApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('payment_methods')
        .get();
    }

    fetchAvailable() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('payment_methods')
        .one('available')
        .get();
    }

    create(paymentMethod) {
      return this._serializeBeforeCreate(paymentMethod).then((serializedData) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .post('payment_methods', { payment_method: serializedData });
      });
    }

    destroy(paymentMethod) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('payment_methods', paymentMethod.id)
        .remove();
    }

    _serializeBeforeCreate(params) {
      return new Promise((resolve, reject) => {
        let data = {
          available_payment_method_id: params.availablePaymentMethod.id
        };

        resolve(data);
      });
    }

  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('paymentMethodApi', service);