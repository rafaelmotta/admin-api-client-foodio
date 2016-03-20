let service = (Restangular, ApiBase, $q, $rootScope) => {
  return new class ProductApi {

    show(productCategory, productSubcategory, product) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .one('products', product.id)
        .get();
    }

    create(productCategory, productSubcategory, product) {
      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products`,
          method: 'POST',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'title', 'description', 'order', 'base_price', 'stores', 'addon_categories', 'change_img_on_hover']
        });
      } else {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .post('products', { product: product });
      }
    }

    update(productCategory, productSubcategory, product) {
      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products/${product.id}`,
          method: 'PATCH',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'title', 'description', 'order', 'base_price', 'stores', 'addon_categories', 'change_img_on_hover']
        });
      } else {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .one('products', product.id)
          .patch({ product: product });
      }
    }

    destroy(productCategory, productSubcategory, product) {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .one('products', product.id)
          .remove();
      }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productApi', service);