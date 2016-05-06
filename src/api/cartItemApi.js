let service = ($q, Restangular, $rootScope) => {

  return new class CartItemApi {

    // POST admin/companies/:company_id/stores/:store_id/me/cart/cart_items
    create(data) {
      return this._serialize(data).then((serializedData) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('me')
          .one('cart')
          .post('cart_items', { cart_item: serializedData });
      });
    }

    // PATCH admin/companies/:company_id/stores/:store_id/me/cart/cart_items/:cart_item_id
    update(data) {
      return this._serialize(data).then((serializedData) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('me')
          .one('cart')
          .one('cart_items', data.id)
          .patch({ cart_item: serializedData });
      });
    }

    // DELETE admin/companies/:company_id/stores/:store_id/me/cart/cart_items/:cart_item_id
    destroy(data) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
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

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cartItemApi', service);
