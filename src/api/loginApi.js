let service = (Restangular, DeviseBase) => {

  return new class LoginApi extends DeviseBase {

    loginWithEmail(employee) {
      return Restangular
        .service(`${this.deviseBaseUrl}/sign_in`)
        .post({ employee: employee });
    }
  }
};

service.$inject = ['Restangular', 'DeviseBase'];
angular.module('admin.api.client.foodio').factory('loginApi', service);