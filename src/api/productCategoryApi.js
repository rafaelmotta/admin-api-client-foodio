let service = (Restangular, $rootScope) => {

  return new class ProductCategoryApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('product_categories')
        .get();
    }

    fetchWithProducts() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('product_categories')
        .one('product_subcategories')
        .one('products')
        .get();
    }

    show(productCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('product_categories', productCategory.id)
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productCategoryApi', service);