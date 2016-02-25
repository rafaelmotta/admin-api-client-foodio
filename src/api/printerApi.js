let service = (Restangular, ApiBase, $q) => {
  return new class PrinterApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('printers')
        .get();
    }

    create(printer) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .post('printers', { printer: printer });
    }

    update(printer) {
       return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('printers', printer.id)
          .patch({ printer: printer });
    }

    destroy(printer) {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('printers', printer.id)
          .remove();
      }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$q'];
angular.module('admin.api.client.foodio').factory('printerApi', service);