let apiBase = ($rootScope, $q, Upload) => {
  return class ApiBase {
    constructor(){
      this.company = $rootScope.company;
      this.store = $rootScope.currentStore;
    }

    requestWithImage(params = {}) {
      return $q((resolve, reject) => {
        let fields = {};

        angular.forEach(params.extraKeys, (key) => {
          fields[`${params.key}[${key}]`] = params.data[key];
        });

        return Upload.upload({
          url: "#{ constants.baseUrl }/#{ params.url }",
          method: params.method,
          file: params.data[params.imgKeys[0]][0],
          fileFormDataName: "#{ params.key }[#{ params.imgKeys[0] }]",
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
