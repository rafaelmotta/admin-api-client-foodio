let service = (Restangular, ApiBase) => {

  return new class PagesApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('pages')
        .get();
    }

    update(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('pages', data.id)
        .patch({ page: data });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('pagesApi', service);