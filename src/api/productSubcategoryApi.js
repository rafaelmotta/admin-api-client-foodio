let service = (Restangular, ApiBase) => {

  return new class ProductSubcategoryApi extends ApiBase {

    fetch(productCategory) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('product_categories', productCategory.type)
        .one('product_subcategories')
        .one('store_products')
        .get();
    }
  }
};

angular.module('foodbox.admin.api').factory('productSubcategoryApi', service);