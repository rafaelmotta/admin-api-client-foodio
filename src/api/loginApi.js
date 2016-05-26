let service = (Restangular, DeviseBase) => {

  return new class LoginApi extends DeviseBase {

    loginWithEmail(employee) {
      if(employee.store && employee.store.id) {
        employee.store_id = employee.store.id;
      }

      return Restangular
        .service(`${this.deviseBaseUrl}/sign_in`)
        .post({ employee: employee });
    }
  }
};

service.$inject = ['Restangular', 'DeviseBase'];
angular.module('admin.api.client.foodio').factory('loginApi', service);
