let service = (Restangular, $rootScope) => {

  return new class MetaTagsApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('meta_tags')
        .get();
    }

    update(data) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('meta_tags', data.id)
        .patch({ meta_tag: data });
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('metaTagsApi', service);