let service = (Restangular, $rootScope) => {

  return new class ProductSubcategoryApi {

    create(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('product_categories', productCategory.id)
        .post('product_subcategories', { product_subcategory: productSubcategory });
    }

    update(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .patch({ product_subcategory: productSubcategory });
    }

    destroy(productCategory, productSubcategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .remove();
    }

    fetch(productCategory) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.type)
        .one('product_subcategories')
        .one('store_products')
        .get();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productSubcategoryApi', service);