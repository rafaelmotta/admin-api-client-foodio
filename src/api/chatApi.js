let service = (Restangular, $rootScope) => {
  return new class ChatApi {

    show(resource) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one(resource.name, resource.id)
        .one('chat')
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('chatApi', service);