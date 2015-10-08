let service = (Restangular, ApiBase) => {

  return new class MeCartApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('me')
        .one('cart')
        .get();
    }

    create() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('me')
        .one('cart')
        .one('new')
        .get();
    }
  }
};

angular.module('foodbox.admin.api').factory('meCartApi', service);