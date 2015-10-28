let service = () => {
  return class DeviseBase {
    constructor(){
      this.deviseBaseUrl = 'employee/sessions';
    }
  };
};

angular.module('admin.api.client.foodio').factory('DeviseBase', service);
