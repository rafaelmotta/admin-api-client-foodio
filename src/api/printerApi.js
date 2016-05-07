let service = (Restangular, ApiBase, $q, $rootScope) => {
  return new class PrinterApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('printers')
        .get();
    }

    show(printer) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('printers', printer.id)
        .get();
    }

    create(printer) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('printers', { printer: printer });
    }

    update(printer) {
       return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('printers', printer.id)
          .patch({ printer: printer });
    }

    destroy(printer) {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('printers', printer.id)
          .remove();
      }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('printerApi', service);
