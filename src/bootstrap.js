let app = angular.module('foodbox.admin.api', []);

angular.module('foodbox.admin.api').constant('constants', {
  publicUrl: "https://api-foodio.herokuapp.com",
  adminUrl: "https://api-foodio.herokuapp.com/admin",
});

let bootstrap = (constants, RestangularProvider) => {
  return RestangularProvider.setBaseUrl(constants.adminUrl);
};


let publicRestangular = (constants, Restangular) => {
  return Restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(constants.publicUrl);
  });
};

bootstrap.$inject = ['constants', 'RestangularProvider']
publicRestangular.$inject = ['constants', 'Restangular'];

angular.module('foodbox.admin.api').config(bootstrap);
app.factory('PublicRestangular', publicRestangular);