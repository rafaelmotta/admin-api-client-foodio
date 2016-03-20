let service = (Restangular, $rootScope) => {
  return new class ChatApi {

    show(store, resource) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', store.id)
        .one(resource.name, resource.id)
        .one('chat')
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('chatApi', service);