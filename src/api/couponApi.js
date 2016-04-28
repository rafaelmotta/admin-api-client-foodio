let service = (Restangular, $rootScope) => {

  return new class CouponApi {

    fetch(params) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('coupons')
        .get(params);
    }

    show(coupon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('coupons', coupon.id)
        .get();
    }

    create(coupon) {
      let _conditions = angular.copy(coupon.conditions);
      coupon.conditions = [];

      for(let i in _conditions) {
        let type = _conditions[i].type
        let itens = [];

        for(let j in _conditions[i].itens) {
          itens.push({ id: _conditions[i].itens[j].id });
        }

        coupon.conditions.push({ type: type, itens: itens });
      }

      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('coupons', { coupon: coupon });
    }

    destroy(coupon) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('coupons', coupon.id)
        .remove();
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('couponApi', service);