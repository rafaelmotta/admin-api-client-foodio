let service = (Restangular, ApiBase) => {

  return new class ProductCategoryApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('product_categories')
        .get();
    }

    show(productCategory) {
      return Restangular
        .one('companies', this.company.id)
        .one('product_categories', productCategory.id)
        .get();
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('productCategoryApi', service);