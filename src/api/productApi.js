let service = (Restangular, ApiBase, $q, $rootScope) => {
  return new class ProductApi extends ApiBase {

    show(productCategory, productSubcategory, product) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .one('products', product.id)
        .get();
    }

    create(productCategory, productSubcategory, product) {
      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/stores/${$rootScope.currentStore.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products`,
          method: 'POST',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'subtitle', 'label', 'admin_only', 'order', 'description', 'price', 'in_promotion', 'old_price', 'change_img_on_hover', 'available', 'product_subcategory_id']
        });
      } else {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .post('products', { product: product });
      }
    }

    update(productCategory, productSubcategory, product) {
      product.product_subcategory_id = product.product_subcategory.id;

      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/stores/${$rootScope.currentStore.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products/${product.id}`,
          method: 'PATCH',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'subtitle', 'label', 'admin_only', 'order', 'description', 'price', 'in_promotion', 'old_price', 'change_img_on_hover', 'available', 'product_subcategory_id']
        });
      } else {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .one('products', product.id)
          .patch({ product: product });
      }
    }

    destroy(productCategory, productSubcategory, product) {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .one('products', product.id)
          .remove();
      }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productApi', service);
