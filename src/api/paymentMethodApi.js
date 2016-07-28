let service = (Restangular, $rootScope) => {

  return new class PaymentMethodApi {

    // GET admin/companies/:company_id/stores/:store_id/payment_methods
    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('payment_methods')
        .get();
    }

    // GET admin/companies/:company_id/stores/:store_id/payment_methods/available
    fetchAvailable() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('payment_methods')
        .one('available')
        .get();
    }

    // CREATE admin/companies/:company_id/stores/:store_id/payment_methods
    create(paymentMethod) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('payment_methods', { payment_method: paymentMethod });
    }

    // DELETE admin/companies/:company_id/stores/:store_id/payment_methods/:id
    destroy(paymentMethod) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('payment_methods', paymentMethod.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('paymentMethodApi', service);
