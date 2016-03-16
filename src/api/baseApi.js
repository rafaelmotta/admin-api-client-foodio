let service = ($rootScope, $q, constants, Upload) => {
  return class ApiBase {
    constructor(){
      this.company = $rootScope.company;
      this.store = $rootScope.currentStore;

      $rootScope.$watch('company', () => {
        this.company = $rootScope.company;
      }, true);

      $rootScope.$watch('currentStore', () => {
        this.store = $rootScope.currentStore;
      }, true);
    }

    requestWithImage(params = {}) {
      return $q((resolve, reject) => {
        let fields = {};

        angular.forEach(params.imgKeys, (key) => {
          if(params.data[key]) {
            fields[`${params.key}[${key}]`] = params.data[key][0];
          }
        });

        angular.forEach(params.extraKeys, (key) => {
          if(params.data[key]) {
            fields[`${params.key}[${key}]`] = params.data[key];
          }
        });

        return Upload.upload({
          url: `${constants.api}/admin/${params.url}`,
          method: params.method,
          fields: fields
        }).success((data) => {
          return resolve(data);
        }).error(() => {
          return reject(arguments);
        });
      });
    }
  };
};

service.$inject = ['$rootScope', '$q', 'constants', 'Upload'];
angular.module('admin.api.client.foodio').factory('ApiBase', service);