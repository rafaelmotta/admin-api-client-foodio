let deviseBase = () => {
  return class DeviseBase {
    constructor(){
      this.deviseBaseUrl = 'employee/sessions';
    }
  };
};

angular.module('foodbox.admin.api').factory('DeviseBase', deviseBase);
