let service = (PublicRestangular, Restangular, ApiBase) => {
  return new class companyApi extends ApiBase{

    fetch(company) {
      return Restangular
        .one('companies', company.id)
        .get();
    }

    fetchBySubdomain(company) {
      return PublicRestangular
        .one('companies', company.subdomain)
        .get();
    }

    update(company) {
      if(angular.isArray(company.logo) && company.logo[0]) {
        return this.requestWithImage({
          url: `companies/${company.id}`,
          method: 'PATCH',
          data: company,
          key: 'company',
          imgKeys: ['logo'],
          extraKeys: ['name', 'slogan', 'email', 'facebook', 'gplus', 'meta_keywords', 'meta_description', 'subdomain', 'domain', 'layout', 'theme']
        });
      } else {
        return Restangular
          .one('companies', company.id)
          .patch({ company: company });
      }
    }
  }
};

service.$inject = ['PublicRestangular', 'Restangular', 'ApiBase'];
angular.module('foodbox.admin.api').factory('companyApi', service);