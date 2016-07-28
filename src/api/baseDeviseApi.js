let service = () => {
  return class DeviseBase {
    constructor(){
      this.deviseBaseUrl = 'employee/sessions';
    }
  };
};

angular.module('itsdelivery-api-admin').factory('DeviseBase', service);
