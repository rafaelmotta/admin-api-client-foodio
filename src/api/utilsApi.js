let service = (Restangular) => {

  return new class UtilsApi {

    getPauseReasons(params) {
      return Restangular
        .one('utils')
        .one('pause_reasons')
        .get();
    }

    getOrderStauses(params) {
      return Restangular
        .one('utils')
        .one('order_statuses')
        .get();
    }

    getMetaTags(params) {
      return Restangular
        .one('utils')
        .one('meta_tag_names')
        .get();
    }
  }
};

service.$inject = ['Restangular'];
angular.module('admin.api.client.foodio').factory('utilsApi', service);