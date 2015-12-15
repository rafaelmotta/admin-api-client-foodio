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
          extraKeys: ['name', 'slogan', 'email', 'phone', 'secondary_phone', 'facebook', 'gplus', 'trip_advisor', 'page_title', 'meta_description', 'meta_keywords', 'description']
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
angular.module('admin.api.client.foodio').factory('companyApi', service);