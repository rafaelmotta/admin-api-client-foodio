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
        let data = {
          amount: cartItem.amount,
          note: cartItem.note,
          product_id: cartItem.product.id,
        };

        resolve(data);
      });
    }
  }
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cartItemApi', service);
