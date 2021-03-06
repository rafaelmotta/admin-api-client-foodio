let service = (Restangular, $rootScope) => {

  return new class PageApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('pages')
        .get();
    }

    show(page) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('pages', page.id)
        .get();
    }

    create(page) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .post('pages', { page: page });
    }

    update(page) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('pages', page.id)
        .patch({ page: page });
    }

    remove(page) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('pages', page.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('pageApi', service);
