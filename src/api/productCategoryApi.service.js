let service = (Restangular, ApiBase) => {

  return new class ProductCategoryApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('product_categories')
        .get();
    }

    show(productCategory) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('product_categories', productCategory.id)
        .get();
    }
  }
};

angular.module('foodbox.admin.api').factory('productCategoryApi', service);

