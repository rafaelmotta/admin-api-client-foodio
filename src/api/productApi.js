let service = (Restangular, ApiBase, $q, $rootScope) => {
  return new class ProductApi extends ApiBase {

    fetch() {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('products')
        .get();
    }

    show(productCategory, productSubcategory, product) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('product_categories', productCategory.id)
        .one('product_subcategories', productSubcategory.id)
        .one('products', product.id)
        .get();
    }

    create(productCategory, productSubcategory, product) {
      product.product_addon_categories_attributes = [];
      product.bonifications_attributes = [];

      for (var i in product.product_addon_categories) {
        let product_addons = [];

        for(let j in product.product_addon_categories[i].product_addons) {
          product_addons.push({
            addon_id: product.product_addon_categories[i].product_addons[j].id
          });
        }

        product.product_addon_categories_attributes.push({
          addon_category_id: product.product_addon_categories[i].id,
          order: parseInt(i, 10) + 1,
          max: product.product_addon_categories[i].max || null,
          min: product.product_addon_categories[i].min || null,
          auto_fill: product.product_addon_categories[i].auto_fill || false ,
          product_addons_attributes: product_addons,
        });
      }

      for(let i in product.bonifications) {
        let b = product.bonifications[i];

        product.bonifications_attributes.push({
          auto_select: b.auto_select,
          amount: b.amount,
          bonification_attributes: {
            id: b.bonification.id
          }
        });
      }

      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/stores/${$rootScope.currentStore.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products`,
          method: 'POST',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'subtitle', 'label', 'admin_only', 'order', 'description', 'price', 'in_promotion', 'old_price', 'change_img_on_hover', 'available', 'product_subcategory_id', 'product_addon_categories_attributes']
        });
      } else {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .post('products', { product: product });
      }
    }

    update(productCategory, productSubcategory, product) {
      if(product.product_subcategory && product.product_subcategory.id) {
        product.product_subcategory_id = product.product_subcategory.id;
      }

      product.product_addon_categories_attributes = [];
      product.bonifications_attributes = [];

      for (var i in product.product_addon_categories) {
        var product_addons = [];

        for (var j in product.product_addon_categories[i].product_addons) {
          product_addons.push({
            addon_id: product.product_addon_categories[i].product_addons[j].id
          });
        }

        product.product_addon_categories_attributes.push({
          addon_category_id: product.product_addon_categories[i].addon_category.id,
          order: parseInt(i, 10) + 1,
          max: product.product_addon_categories[i].max || null,
          min: product.product_addon_categories[i].min || null,
          auto_fill: product.product_addon_categories[i].auto_fill || false,
          product_addons_attributes: product_addons
        });
      }

      for(let i in product.bonifications) {
        let b = product.bonifications[i];

        product.bonifications_attributes.push({
          auto_select: b.auto_select,
          amount: b.amount,
          bonification_attributes: {
            id: b.bonification.id
          }
        });
      }

      if(angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
        return this.requestWithImage({
          url: `companies/${$rootScope.company.id}/stores/${$rootScope.currentStore.id}/product_categories/${productCategory.id}/product_subcategories/${productSubcategory.id}/products/${product.id}`,
          method: 'PATCH',
          data: product,
          key: 'product',
          imgKeys: ['img', 'img_hover'],
          extraKeys: ['name', 'subtitle', 'label', 'admin_only', 'order', 'description', 'price', 'in_promotion', 'old_price', 'change_img_on_hover', 'available', 'product_subcategory_id', 'product_addon_categories_attributes']
        });
      } else {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .one('products', product.id)
          .patch({ product: product });
      }
    }

    destroy(productCategory, productSubcategory, product) {
        return Restangular
          .one('companies', $rootScope.company.id)
          .one('stores', $rootScope.currentStore.id)
          .one('product_categories', productCategory.id)
          .one('product_subcategories', productSubcategory.id)
          .one('products', product.id)
          .remove();
      }
  }
};

service.$inject = ['Restangular', 'ApiBase', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productApi', service);
