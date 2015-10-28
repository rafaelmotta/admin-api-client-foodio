let service = ($q, $filter, Restangular, ApiBase) => {

  return new class DashboardApi extends ApiBase {

    _serializeBeforeSend(params) {
      return $q((resolve, reject) => {
        let data = {
          period:    params.period   ? params.period : null,
          from_time: params.fromTime ? $filter('date')(params.fromTime, "HH:mm:ss")   : null,
          to_time:   params.toTime   ? $filter('date')(params.toTime, "HH:mm:ss")     : null,
          from_date: params.fromDate ? $filter('date')(params.fromDate, "dd/MM/yyyy") : null,
          to_date:   params.toDate   ? $filter('date')(params.toDate, "dd/MM/yyyy")   : null
        };

        return resolve(data)
      });
    }

    fetchSales(params = {}) {
      return this._serializeBeforeSend(params).then((serializedParams) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('dashboard')
          .one('sales')
          .get(serializedParams);
      });
    }
  }
};

service.$inject = ['$q', '$filter', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('dashboardApi', service);