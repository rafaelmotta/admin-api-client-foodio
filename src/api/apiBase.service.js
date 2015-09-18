let apiBase = ($rootScope, $q) => {
  return class ApiBase {
    constructor(){
      this.company = $rootScope.company;
      this.store = $rootScope.currentStore;
    }

    requestWithImage(param) {
      return $q((resolve, reject) => {
        let fields = {};

        for(let i in params.extraKeys) {
          let key = params.extraKeys[i];
          fields[`${params.key}[${key}]`] = params.data[key];
        }

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
