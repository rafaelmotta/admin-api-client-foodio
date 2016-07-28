let service = (Restangular, $rootScope) => {

  return new class ProductCategoryApi {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories')
        .get();
    }

    fetchWithSubcategories() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories')
        .one('product_subcategories')
        .get();
    }

    fetchWithProducts() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories')
        .one('product_subcategories')
        .one('products')
        .get();
    }

    show(productCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .get();
    }

    create(productCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('product_categories', { product_category: productCategory });
    }

    update(productCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .patch({ product_category: productCategory });
    }

    destroy(productCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('productCategoryApi', service);
