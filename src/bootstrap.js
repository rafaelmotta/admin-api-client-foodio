let app = angular.module('admin.api.client.foodio', ['constants.foodio']);

let adminRestangular = (constants, RestangularProvider) => {
  return RestangularProvider.setBaseUrl(constants.adminUrl);
};

adminRestangular.$inject = ['constants', 'RestangularProvider']
angular.module('admin.api.client.foodio').config(adminRestangular);


let publicRestangular = (constants, Restangular) => {
  return Restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(constants.publicUrl);
  });
};
publicRestangular.$inject = ['constants', 'Restangular'];
app.factory('PublicRestangular', publicRestangular);