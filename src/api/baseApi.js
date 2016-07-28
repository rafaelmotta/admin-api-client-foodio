let service = ($rootScope, $q, constants, Upload) => {
  return class ApiBase {
    constructor(){
    }

    requestWithImage(params = {}) {

      // Emite evento informando que request está começando
      $rootScope.$emit('request:start');

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
          // Emite evento informando que request acabou
          $rootScope.$emit('request:end');

          return resolve(data);
        }).error(() => {
          return reject(arguments);
        });
      });
    }
  };
};

service.$inject = ['$rootScope', '$q', 'constants', 'Upload'];
angular.module('itsdelivery-api-admin').factory('ApiBase', service);