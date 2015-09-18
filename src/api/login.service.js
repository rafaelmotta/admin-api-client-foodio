let service = (Restangular, DeviseBase) => {

  return new class LoginApi extends DeviseBase {

    loginWithEmail(employee) {
      return Restangular
        .service(`${this.deviseBaseUrl}/sign_in`)
        .post({ employee: employee });
    }
  }
};

angular.module('foodbox.admin.api').factory('loginApi', service);