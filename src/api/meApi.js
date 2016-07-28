let service = (Restangular, ApiBase, $rootScope) => {

  return new class meApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('me')
        .get();
    }

    update(employee) {
      if(employee.current_role) employee.current_role_id = employee.current_role.id;
      if(employee.current_store) employee.current_store_id = employee.current_store.id

      if(angular.isArray(employee.avatar) && employee.avatar[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/stores/${$rootScope.currentStore.id}/me`,
          method: 'PATCH',
          data: employee,
          key: 'employee',
          imgKeys: ['avatar'],
          extraKeys: ['name', 'phone', 'cellphone', 'birth_date']
        });
      }

      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('me')
        .patch({ employee: employee });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('meApi', service);