angular.module('foodbox.admin.api', []);

angular.module('foodbox.admin.api').constant('constants', {
  baseUrl: "http://speedy.com.br/admin"
});

angular.module('foodbox.admin.api').config((constants, RestangularProvider) => {
  RestangularProvider.setBaseUrl(constants.baseUrl);
});