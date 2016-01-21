let service = (Restangular, ApiBase, $q) => {
  return new class ProductApi extends ApiBase {

    fetch(productCategory, productSubcategory, product) {
      return Restangular
        .one('companies', this.company.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .one('products', product.id)
        .get();
    }

    create(productCategory, productSubcategory, product) {
      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${this.company.id}/stores/${this.store.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products/${product.id}`,
          method: 'POST',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'description', 'base_price']
        });
      } else {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .post('products', { product: product });
      }
    }

    update(productCategory, productSubcategory, product) {
      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${this.company.id}/stores/${this.store.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products/${product.id}`,
          method: 'PATCH',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'description', 'base_price']
        });
      } else {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .one('products', product.id)
          .patch({ product: product });
      }
    }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$q'];
angular.module('admin.api.client.foodio').factory('productApi', service);