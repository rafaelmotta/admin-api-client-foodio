let service = (Restangular, ApiBase) => {
  return new class ProductApi extends ApiBase {
    update(product) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('products', product.id)
        .patch({ product: product });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('productApi', service);
