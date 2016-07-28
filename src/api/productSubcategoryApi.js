let service = (Restangular, $rootScope) => {

  return new class ProductSubcategoryApi {

    show(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .get();
    }

    create(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .post('product_subcategories', { product_subcategory: productSubcategory });
    }

    update(productCategory, productSubcategory) {
      productSubcategory.product_category_id = productSubcategory.product_category.id;

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
        .one('product_subcategories', productSubcategory.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('productSubcategoryApi', service);
