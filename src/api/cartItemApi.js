let service = ($q, Restangular, ApiBase) => {

  return new class CartItemApi extends ApiBase {

    create(data) {
      return this._serialize(data).then((serializedData) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('me')
          .one('cart')
          .post('cart_items', { cart_item: serializedData });
      });
    }

    update(data) {
      return this._serialize(data).then((serializedData) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('me')
          .one('cart')
          .one('cart_items', data.id)
          .patch({ cart_item: serializedData });
      });
    }

    destroy(data) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('me')
        .one('cart')
        .one('cart_items', data.id)
        .remove();
    }

    _serialize(cartItem) {
      return $q((resolve, reject) => {
        let data = {};

        angular.forEach(cartItem, (value, key) => {
          if(key === 'id' || key === 'amount' || key === 'note') {
            data[key] = value;
          }
        });

        data.store_product_id = cartItem.product.id;
        data.customization_fields = JSON.stringify(cartItem.customization_fields);

        data.cart_item_addons_to_put_attributes = cartItem.addons.map((addon) => {
          return {
            store_addon_id: addon.id,
            product_addon_id: addon.product_addon_id
          };
        });

        resolve(data);
      });
    }
  }
};

service.$inject = ['$q', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('cartItemApi', service);