let service = (Restangular, ApiBase) => {
  return new class ChatApi extends ApiBase {

    show(store, resource) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', store.id)
        .one(resource.name, resource.id)
        .one('chat')
        .get();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('chatApi', service);