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
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('payment_methods', paymentMethod.id)
        .put();
    }

    destroy(paymentMethod) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('payment_methods', paymentMethod.id)
        .remove();
    }

  }
};

angular.module('foodbox.admin.api').factory('paymentMethodApi', service);