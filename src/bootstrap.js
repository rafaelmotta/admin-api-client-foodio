let app = angular.module('foodbox.admin.api', []);

angular.module('foodbox.admin.api').constant('constants', {
  publicUrl: "http://speedy.com.br",
  adminUrl: "http://speedy.com.br/admin",
});

angular.module('foodbox.admin.api').config((constants, RestangularProvider) => {
  RestangularProvider.setBaseUrl(constants.adminUrl);
});

app.factory('PublicRestangular', (constants, Restangular) => {
  return Restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl(constants.publicUrl);
  });
});