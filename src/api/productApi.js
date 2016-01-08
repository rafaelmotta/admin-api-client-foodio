let service = (Restangular, ApiBase, $q) => {
  return new class ProductApi extends ApiBase {

    create(product) {
      return this._serializeBeforeCreate(product).then((product) => {
        if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
          return this.requestWithImage({
            url: `companies/${this.company.id}/stores/${this.store.id}/products`,
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
            .post('products', { product: product });
        }
      });
    }

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

    _serializeBeforeCreate(product) {
      return $q((resolve, reject) => {
        let data = angular.copy(product);

        data.product_subcategory_id = data.category.id;
        delete data.category;

        resolve(data);
      });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$q'];
angular.module('admin.api.client.foodio').factory('productApi', service);