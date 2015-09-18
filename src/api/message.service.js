let service = (Restangular, ApiBase) => {

  return new class MessageApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('messages')
        .get();
    }

    update(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('messages', data.id)
        .patch({ message: data });
    }
  }
};

angular.module('foodbox.admin.api').factory('messageApi', service);