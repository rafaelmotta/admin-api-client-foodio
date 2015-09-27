let service = (PublicRestangular, Restangular, ApiBase) => {

  return new class MenuApi extends ApiBase {

    fetch(params = {}) {
      return PublicRestangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('menu')
        .get(params);
    }
  }
};

angular.module('foodbox.admin.api').factory('menuApi', service);