let app = angular.module('itsdelivery-api-admin', ['constants.foodio']);

let adminRestangular = (constants, RestangularProvider) => {
  return RestangularProvider.setBaseUrl(`${constants.api}/admin`);
};

adminRestangular.$inject = ['constants', 'RestangularProvider']
angular.module('itsdelivery-api-admin').config(adminRestangular);


let publicRestangular = (constants, Restangular) => {
  return Restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(constants.api);
  });
};
publicRestangular.$inject = ['constants', 'Restangular'];
app.factory('PublicRestangular', publicRestangular);
