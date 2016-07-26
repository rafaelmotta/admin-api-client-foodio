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
      let data = angular.copy(coupon);
      data.coupon_conditions_attributes = [];

      for(let i in coupon.conditions) {
        if(coupon.conditions[i].itens.length) {
          for(let j in coupon.conditions[i].itens) {
            let type = coupon.conditions[i].type;
            let id = coupon.conditions[i].itens[j].id;

            if(id) {
              data.coupon_conditions_attributes.push({
                targetable_type: type, targetable_id: id
              });
            }
          }
        }
      }

      delete data.conditions;

      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .post('coupons', { coupon: data });
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
