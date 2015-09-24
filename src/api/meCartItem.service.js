let service = ($q, Restangular, ApiBase) => {

  return new class MeCartItemApi extends ApiBase {

    create(data) {
      return this._serializeCartItem.call(data).then((serializedData) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('me')
          .one('cart')
          .post('cart_items', { cart_item: serializedData });
      });
    }

    update(data) {
      return this._serializeCartItem.call(data).then((serializedData) => {
        return Restangular
          .one('companies', this.company.id)
          .one('stores', this.store.id)
          .one('me')
          .one('cart')
          .one('cart_items', data.id)
          .patch({ cart_item: data });
      });
    }

    destroy() {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('me')
        .one('cart')
        .one('cart_items', data.id)
        .remove();
    }

    _serializeCartItem(data) {
      return $q((resolve, reject) => {
        let cartItem = {};
        let _cartItem = angular.copy(data);

        _.each(_cartItem, (value, key) => {
          if(key === 'id' || key === 'amount' || key === 'note') {
            cartItem[key] = value;
          }
        });

        cartItem.store_product_id = _cartItem.product.id;

        cartItem.customization_fields = JSON.stringify(_cartItem.customization_fields);

        cartItem.cart_item_addons_to_put_attributes = _.map(_cartItem.addons, (addon) => {
          return {
            store_addon_id: addon.id,
            product_addon_id: addon.product_addon_id
          }
        });

        return resolve(cartItem);
      });
    }
  }
};

angular.module('foodbox.admin.api').factory('meCartItemApi', service);
