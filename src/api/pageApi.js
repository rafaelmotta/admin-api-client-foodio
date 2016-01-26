let service = (Restangular, ApiBase) => {

  return new class PageApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('pages')
        .get();
    }

    show() {
      return Restangular
        .one('companies', this.company.id)
        .one('pages', page.id)
        .get();
    }

    create(page) {
      return Restangular
        .one('companies', this.company.id)
        .post('pages', { page: page });
    }

    update(page) {
      return Restangular
        .one('companies', this.company.id)
        .one('pages', page.id)
        .patch({ page: page });
    }

    delete() {
      return Restangular
        .one('companies', this.company.id)
        .one('pages', page.id)
        .destroy();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('pageApi', service);