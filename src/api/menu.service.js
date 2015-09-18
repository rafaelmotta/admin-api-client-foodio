let service = (Restangular, ApiBase) => {

  return new class MenuApi extends ApiBase {

    fetch(params = {}) {
      return Restangular
        .one('companies', this.company.id)
        .one('menu')
        .get(params);
    }
  }
};

angular.module('foodbox.admin.api').factory('menuApi', service);