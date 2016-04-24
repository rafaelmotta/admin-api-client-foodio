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