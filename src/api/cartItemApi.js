let service = ($q, Restangular, $rootScope) => {

  return new class CartItemApi {

    // POST admin/companies/:company_id/stores/:store_id/me/cart/cart_items
    create(cart, data) {
      return this._serialize(data).then((serializedData) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('carts', cart.id)
          .post('cart_items', { cart_item: serializedData });
      });
    }

    // PATCH admin/companies/:company_id/stores/:store_id/me/cart/cart_items/:cart_item_id
    update(cart, data) {
      return this._serialize(data).then((serializedData) => {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('carts', cart.id)
          .one('cart_items', data.id)
          .patch({ cart_item: serializedData });
      });
    }

    // DELETE admin/companies/:company_id/stores/:store_id/me/cart/cart_items/:cart_item_id
    destroy(cart, data) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('carts', cart.id)
        .one('cart_items', data.id)
        .remove();
    }

    _serialize(cartItem) {
      return new Promise((resolve, reject) => {
        let toPut = [];

        for(let i in cartItem.cart_item_addons) {
          let a = cartItem.cart_item_addons[i];

          if(a.id && a.price !== null) {
            toPut.push({ product_addon_id: a.id });
          } else {
            for(let j in a) {
              let addon = a[j];
              if (addon.amount > 0) {
                toPut.push({
                  product_addon_id: addon.id,
                  amount: addon.amount
                });
              }
            }
          }
        }

        let data = {
          bonificable: cartItem.bonificable,
          amount: cartItem.amount,
          note: cartItem.note,
          product_id: cartItem.product.id,
          cart_item_addons_to_put_attributes: toPut
        };

        resolve(data);
      });
    }
  }
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('cartItemApi', service);
