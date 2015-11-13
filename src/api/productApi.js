let service = (Restangular, ApiBase) => {
  return new class ProductApi extends ApiBase {
    update(product) {
      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${this.company.id}/stores/${this.store.id}/products/${product.id}`,
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
          .one('products', product.id)
          .patch({ product: product });
      }
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('productApi', service);