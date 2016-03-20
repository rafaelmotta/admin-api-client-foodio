let service = (Restangular, $rootScope) => {

  return new class PaymentMethodApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('payment_methods')
        .get();
    }

    fetchAvailable() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('payment_methods')
        .one('available')
        .get();
    }

    create(paymentMethod) {
      return this._serializeBeforeCreate(paymentMethod).then((serializedData) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .post('payment_methods', { payment_method: serializedData });
      });
    }

    destroy(paymentMethod) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
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

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('paymentMethodApi', service);