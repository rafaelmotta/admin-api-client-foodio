let service = (Restangular, ApiBase) => {

  return new class EmployeeApi extends ApiBase {

    fetch(params = {}) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('employees')
        .get(params);
    }

    fetchRoles() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('employees')
        .one('roles')
        .get();
    }

    show(employee) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('employees', employee.id)
        .get();
    }

    create(employee) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .post('employees', { employee: employee });
    }

    update(employee) {
      if(angular.isArray(employee.avatar) && employee.avatar[0]) {
        return this.requestWithImage({
          url: "admin/companies/${this.company.id}/stores/${this.store.id}/employees/${employee.id}",
          method: 'PATCH',
          data: employee,
          key: 'employee',
          imgKeys: ['avatar'],
          extraKeys: ['name', 'phone', 'cellphone', 'birth_date']
        });
      }

      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('employees', employee.id)
        .patch({ employee: employee });
    }

    destroy(employee) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('employees', employee.id)
        .remove();
    }
  }
};

angular.module('foodbox.admin.api').factory('employeeApi', service);

