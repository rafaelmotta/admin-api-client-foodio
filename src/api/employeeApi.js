let service = (Restangular, $rootScope) => {

  return new class EmployeeApi {

    fetch(params = {}) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('employees')
        .get(params);
    }

    fetchRoles() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('employees')
        .one('roles')
        .get();
    }

    show(employee) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('employees', employee.id)
        .get();
    }

    create(employee) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('employees', { employee: employee });
    }

    update(employee) {
      if(angular.isArray(employee.avatar) && employee.avatar[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/stores/${$rootScope.currentStore.id}/employees/${employee.id}`,
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
        .one('employees', employee.id)
        .patch({ employee: employee });
    }

    destroy(employee) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('employees', employee.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('employeeApi', service);

