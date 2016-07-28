let service = (Restangular, $rootScope) => {

  return new class RatingApi {

    // GET /companies/:company_id/stores/:store_id/ratings
    fetch(params) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('ratings')
        .get(params);
    }

    // PATCH /companies/:company_id/stores/:store_id/ratings/:id
    update(rating) {
      if(rating.coupon && rating.coupon.id) {
        rating.coupon_id = rating.coupon.id;  
      }

      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('ratings', rating.id)
        .patch({ rating: rating });
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('itsdelivery-api-admin').factory('ratingApi', service);
