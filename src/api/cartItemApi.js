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
      return new Promise((resolve, reject) => {
        let toPut = [];
        let toRemove = [];

        for(let i in cartItem.cart_item_addons_to_put) {
          let addon = cartItem.cart_item_addons_to_put[i];
          toPut.push({ id: addon.id });
        }

        for(let i in cartItem.cart_item_addons_to_remove) {
          let addon = cartItem.cart_item_addons_to_remove[i];
          toRemove.push({ id: addon.id });
        }
        
        let data = {
          amount: cartItem.amount,
          note: cartItem.note,
          product_id: cartItem.product.id,
          cart_item_addons_to_put_attributes: toPut,
          cart_item_addons_to_remove_attributes: toRemove
        };

        resolve(data);
      });
    }
  }
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cartItemApi', service);
