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
  }
};

angular.module('foodbox.admin.api').factory('utilsApi', service);