let apiBase = ($rootScope, $q, constants, Upload) => {
  return class ApiBase {
    constructor(){
      this.company = $rootScope.company;
      this.store = $rootScope.currentStore;

      $rootScope.$watch('currentStore', () => {
        this.store = $rootScope.currentStore;
      }, true);
    }

    requestWithImage(params = {}) {
      return $q((resolve, reject) => {
        let fields = {};

        angular.forEach(params.extraKeys, (key) => {
          fields[`${params.key}[${key}]`] = params.data[key];
        });

        return Upload.upload({
          url: `${constants.adminUrl}/${params.url}`,
          method: params.method,
          file: params.data[params.imgKeys[0]][0],
          fileFormDataName: `${params.key}[${params.imgKeys[0]}]`,
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

angular.module('foodbox.admin.api').factory('ApiBase', apiBase);
