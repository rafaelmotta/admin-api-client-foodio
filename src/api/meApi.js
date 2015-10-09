let service = (Restangular, ApiBase) => {

  return new class meApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('me')
        .get();
    }

    update(employee) {
      if(employee.current_role) employee.current_role_id = employee.current_role.id;
      if(employee.current_store) employee.current_store_id = employee.current_store.id

      if(angular.isArray(employee.avatar) && employee.avatar[0]) {
        return this.requestWithImage({
          url: `companies/${this.company.id}/stores/${this.store.id}/me`,
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
        .one('me')
        .patch({ employee: employee });
    }
  }
};

angular.module('foodbox.admin.api').factory('meApi', service);


