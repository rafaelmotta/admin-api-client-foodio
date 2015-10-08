let service = (Restangular) => {
  return new class companyApi {

    create(company) {
      return Restangular
        .one('companies', company.id)
        .get();
    }

    update(company) {
      return Restangular
        .one('companies', this.company.id)
        .patch({ company: company });
    }
  }
};

angular.module('foodbox.admin.api').factory('companyApi', service);