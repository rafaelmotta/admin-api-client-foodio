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
      let conditions = angular.copy(coupon.conditions);
      coupon.coupon_conditions_attributes = [];

      for(let i in conditions) {
        for(let j in conditions[i].itens) {
          coupon.coupon_conditions_attributes.push({ targetable_type: conditions[i].type, targetable_id: conditions[i].itens[j].id });
        }
      }

      delete coupon.conditions;

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