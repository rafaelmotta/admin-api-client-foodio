let service = (Restangular, $rootScope) => {

  return new class ProductSubcategoryApi {

    show(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
    }

    create(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .post('product_subcategories', { product_subcategory: productSubcategory });
    }

    update(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .patch({ product_subcategory: productSubcategory });
    }

    destroy(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productCategory.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productSubcategoryApi', service);
