let service = (Restangular, ApiBase) => {

  return new class PauseApi extends ApiBase {

    create(pause) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .post('pauses', { pause: pause });
    }

    destroy(pause) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('pauses', pause.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('foodbox.admin.api').factory('pauseApi', service);