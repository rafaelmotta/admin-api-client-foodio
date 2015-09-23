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
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types', orderType.id)
        .put();
    }

    destroy(orderType) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('order_types', orderType.id)
        .remove();
    }


  }
};

angular.module('foodbox.admin.api').factory('orderTypeApi', service);