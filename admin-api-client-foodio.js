'use strict';

var app = angular.module('admin.api.client.foodio', ['constants.foodio']);

var adminRestangular = function adminRestangular(constants, RestangularProvider) {
  return RestangularProvider.setBaseUrl(constants.api + '/admin');
};

adminRestangular.$inject = ['constants', 'RestangularProvider'];
angular.module('admin.api.client.foodio').config(adminRestangular);

var publicRestangular = function publicRestangular(constants, Restangular) {
  return Restangular.withConfig(function (RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(constants.api);
  });
};
publicRestangular.$inject = ['constants', 'Restangular'];
app.factory('PublicRestangular', publicRestangular);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {
  return new ((function () {
    function AddonApi() {
      _classCallCheck(this, AddonApi);
    }

    _createClass(AddonApi, [{
      key: 'create',
      value: function create(addonCategory, addon) {
        return Restangular.one('companies', $rootScope.company.id).one('addon_categories', addonCategory.id).post('addons', { addon: addon });
      }
    }, {
      key: 'update',
      value: function update(addonCategory, addon) {
        return Restangular.one('companies', $rootScope.company.id).one('addon_categories', addonCategory.id).one('addons', addon.id).patch({ addon: addon });
      }
    }, {
      key: 'destroy',
      value: function destroy(addonCategory, addon) {
        return Restangular.one('companies', $rootScope.company.id).one('addon_categories', addonCategory.id).one('addons', addon.id).remove();
      }
    }]);

    return AddonApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('addonApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {
  return new ((function () {
    function AddonCategoryApi() {
      _classCallCheck(this, AddonCategoryApi);
    }

    _createClass(AddonCategoryApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('addon_categories').get();
      }
    }, {
      key: 'fetchWithAddons',
      value: function fetchWithAddons() {
        return Restangular.one('companies', $rootScope.company.id).one('addon_categories').one('addons').get();
      }
    }, {
      key: 'create',
      value: function create(addonCategory) {
        return Restangular.one('companies', $rootScope.company.id).post('addon_categories', { addon_category: addonCategory });
      }
    }, {
      key: 'update',
      value: function update(addonCategory) {
        return Restangular.one('companies', $rootScope.company.id).one('addon_categories', addonCategory.id).patch({ addon_category: addonCategory });
      }
    }, {
      key: 'destroy',
      value: function destroy(addonCategory) {
        return Restangular.one('companies', $rootScope.company.id).one('addon_categories', addonCategory.id).remove();
      }
    }]);

    return AddonCategoryApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('addonCategoryApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service($rootScope, $q, constants, Upload) {
  return (function () {
    function ApiBase() {
      _classCallCheck(this, ApiBase);
    }

    _createClass(ApiBase, [{
      key: 'requestWithImage',
      value: function requestWithImage() {
        var _arguments = arguments;
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        // Emite evento informando que request está começando
        $rootScope.$emit('request:start');

        return $q(function (resolve, reject) {
          var fields = {};

          angular.forEach(params.imgKeys, function (key) {
            if (params.data[key]) {
              fields[params.key + '[' + key + ']'] = params.data[key][0];
            }
          });

          angular.forEach(params.extraKeys, function (key) {
            if (params.data[key]) {
              fields[params.key + '[' + key + ']'] = params.data[key];
            }
          });

          return Upload.upload({
            url: constants.api + '/admin/' + params.url,
            method: params.method,
            fields: fields
          }).success(function (data) {
            // Emite evento informando que request acabou
            $rootScope.$emit('request:end');

            return resolve(data);
          }).error(function () {
            return reject(_arguments);
          });
        });
      }
    }]);

    return ApiBase;
  })();
};

service.$inject = ['$rootScope', '$q', 'constants', 'Upload'];
angular.module('admin.api.client.foodio').factory('ApiBase', service);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service() {
  return function DeviseBase() {
    _classCallCheck(this, DeviseBase);

    this.deviseBaseUrl = 'employee/sessions';
  };
};

angular.module('admin.api.client.foodio').factory('DeviseBase', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function CartApi() {
      _classCallCheck(this, CartApi);
    }

    _createClass(CartApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('me').one('cart').get();
      }
    }, {
      key: 'create',
      value: function create() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('me').one('cart').one('new').get();
      }
    }]);

    return CartApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cartApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service($q, Restangular, $rootScope) {

  return new ((function () {
    function CartItemApi() {
      _classCallCheck(this, CartItemApi);
    }

    _createClass(CartItemApi, [{
      key: 'create',
      value: function create(data) {
        return this._serialize(data).then(function (serializedData) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('me').one('cart').post('cart_items', { cart_item: serializedData });
        });
      }
    }, {
      key: 'update',
      value: function update(data) {
        return this._serialize(data).then(function (serializedData) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('me').one('cart').one('cart_items', data.id).patch({ cart_item: serializedData });
        });
      }
    }, {
      key: 'destroy',
      value: function destroy(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('me').one('cart').one('cart_items', data.id).remove();
      }
    }, {
      key: '_serialize',
      value: function _serialize(cartItem) {
        return $q(function (resolve, reject) {
          var data = {};

          angular.forEach(cartItem, function (value, key) {
            if (key === 'id' || key === 'amount' || key === 'note') {
              data[key] = value;
            }
          });

          data.store_product_id = cartItem.product.id;
          data.customization_fields = JSON.stringify(cartItem.customization_fields);

          data.cart_item_addons_to_put_attributes = cartItem.addons.map(function (addon) {
            return {
              store_addon_id: addon.id,
              product_addon_id: addon.product_addon_id
            };
          });

          resolve(data);
        });
      }
    }]);

    return CartItemApi;
  })())();
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cartItemApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {
  return new ((function () {
    function ChatApi() {
      _classCallCheck(this, ChatApi);
    }

    _createClass(ChatApi, [{
      key: 'show',
      value: function show(resource) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one(resource.name, resource.id).one('chat').get();
      }
    }]);

    return ChatApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('chatApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {
  return new ((function () {
    function chatMessageApi() {
      _classCallCheck(this, chatMessageApi);
    }

    _createClass(chatMessageApi, [{
      key: 'create',
      value: function create(chat, chatMessage) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('chats', chat.id).post('chat_messages', { chat_message: chatMessage });
      }
    }]);

    return chatMessageApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('chatMessageApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function CityOperationApi() {
      _classCallCheck(this, CityOperationApi);
    }

    _createClass(CityOperationApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations').get();
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable(state) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations').one('available').get({ state_id: state.id });
      }
    }, {
      key: 'fetchWithDeliveryAreas',
      value: function fetchWithDeliveryAreas() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations').one('delivery_areas').get();
      }
    }, {
      key: 'fetchAvailableDeliveryAreas',
      value: function fetchAvailableDeliveryAreas(cityOperation) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).one('available_delivery_areas').get();
      }
    }, {
      key: 'create',
      value: function create(cityOperation) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).put();
      }
    }, {
      key: 'destroy',
      value: function destroy(cityOperation) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).remove();
      }
    }]);

    return CityOperationApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('cityOperationApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(PublicRestangular, Restangular, ApiBase, $rootScope) {
  return new ((function (_ApiBase) {
    _inherits(companyApi, _ApiBase);

    function companyApi() {
      _classCallCheck(this, companyApi);

      _get(Object.getPrototypeOf(companyApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(companyApi, [{
      key: 'fetch',
      value: function fetch(company) {
        return Restangular.one('companies', company.id).get();
      }
    }, {
      key: 'fetchBySubdomain',
      value: function fetchBySubdomain(company) {
        return PublicRestangular.one('companies', company.subdomain).get();
      }
    }, {
      key: 'update',
      value: function update(company) {
        if (angular.isArray(company.logo) && company.logo[0]) {
          return this.requestWithImage({
            url: 'companies/' + company.id,
            method: 'PATCH',
            data: company,
            key: 'company',
            imgKeys: ['logo'],
            extraKeys: ['name', 'slogan', 'email', 'phone', 'secondary_phone', 'facebook', 'gplus', 'trip_advisor', 'page_title', 'meta_description', 'meta_keywords', 'description']
          });
        } else {
          return Restangular.one('companies', company.id).patch({ company: company });
        }
      }
    }]);

    return companyApi;
  })(ApiBase))();
};

service.$inject = ['PublicRestangular', 'Restangular', 'ApiBase', '$rootScope'];
angular.module('admin.api.client.foodio').factory('companyApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function CostumerAddressApi() {
      _classCallCheck(this, CostumerAddressApi);
    }

    _createClass(CostumerAddressApi, [{
      key: 'fetch',
      value: function fetch(costumer) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers', costumer.id).one('addresses').get();
      }
    }, {
      key: 'create',
      value: function create(costumer, address) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers', costumer.id).post('addresses', { address: address });
      }
    }, {
      key: 'update',
      value: function update(costumer, address) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers', costumer.id).one('addresses', address.id).patch({ address: address });
      }
    }, {
      key: 'destroy',
      value: function destroy(costumer, address) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers', costumer.id).one('addresses', address.id).remove();
      }
    }]);

    return CostumerAddressApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('costumerAddressApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function CostumerApi() {
      _classCallCheck(this, CostumerApi);
    }

    _createClass(CostumerApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers').get(params);
      }
    }, {
      key: 'show',
      value: function show(costumer) {
        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers', costumer.id).get(params);
      }
    }, {
      key: 'create',
      value: function create(costumer) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('costumers', { costumer: costumer });
      }
    }, {
      key: 'update',
      value: function update(costumer) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers', costumer.id).patch({ costumer: costumer });
      }
    }]);

    return CostumerApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('costumerApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function Factory() {
      _classCallCheck(this, Factory);
    }

    _createClass(Factory, [{
      key: 'fetch',
      value: function fetch(costumer) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('costumers', costumer.id).one('orders').get();
      }
    }]);

    return Factory;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('costumerOrderApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function CouponApi() {
      _classCallCheck(this, CouponApi);
    }

    _createClass(CouponApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('coupons').get(params);
      }
    }, {
      key: 'show',
      value: function show(coupon) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('coupons', coupon.id).get();
      }
    }, {
      key: 'create',
      value: function create(coupon) {
        var _conditions = angular.copy(coupon.conditions);
        coupon.conditions = [];

        for (var i in _conditions) {
          var type = _conditions[i].type;
          var itens = [];

          for (var j in _conditions[i].itens) {
            itens.push({ id: _conditions[i].itens[j].id });
          }

          coupon.conditions.push({ type: type, itens: itens });
        }

        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('coupons', { coupon: coupon });
      }
    }, {
      key: 'destroy',
      value: function destroy(coupon) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('coupons', coupon.id).remove();
      }
    }]);

    return CouponApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('couponApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service($q, $filter, Restangular, $rootScope) {

  return new ((function () {
    function DashboardApi() {
      _classCallCheck(this, DashboardApi);
    }

    _createClass(DashboardApi, [{
      key: '_serializeBeforeSend',
      value: function _serializeBeforeSend(params) {
        return $q(function (resolve, reject) {
          var data = {
            period: params.period ? params.period : null,
            from_time: params.fromTime ? $filter('date')(params.fromTime, "HH:mm:ss") : null,
            to_time: params.toTime ? $filter('date')(params.toTime, "HH:mm:ss") : null,
            from_date: params.fromDate ? $filter('date')(params.fromDate, "dd/MM/yyyy") : null,
            to_date: params.toDate ? $filter('date')(params.toDate, "dd/MM/yyyy") : null
          };

          return resolve(data);
        });
      }
    }, {
      key: 'fetchSales',
      value: function fetchSales() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return this._serializeBeforeSend(params).then(function (serializedParams) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('dashboard').one('sales').get(serializedParams);
        });
      }
    }]);

    return DashboardApi;
  })())();
};

service.$inject = ['$q', '$filter', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('dashboardApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service($q, Restangular, $rootScope) {

  return new ((function () {
    function DeliveryAreaApi() {
      _classCallCheck(this, DeliveryAreaApi);
    }

    _createClass(DeliveryAreaApi, [{
      key: 'fetch',
      value: function fetch(cityOperation) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).one('delivery_areas').get();
      }
    }, {
      key: 'create',
      value: function create(cityOperation, deliveryArea) {
        return this._serializeBeforeCreate(deliveryArea).then(function (serializedDeliveryArea) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).post('delivery_areas', { delivery_area: serializedDeliveryArea });
        });
      }
    }, {
      key: 'update',
      value: function update(cityOperation, deliveryArea) {
        return this._serializeBeforeEdit(deliveryArea).then(function (serializedDeliveryArea) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).one('delivery_areas', deliveryArea.id).patch({ delivery_area: serializedDeliveryArea });
        });
      }
    }, {
      key: 'destroy',
      value: function destroy(cityOperation, deliveryArea) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).one('delivery_areas', deliveryArea.id).remove();
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable(cityOperation) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('city_operations', cityOperation.id).one('delivery_areas').one('available').get();
      }
    }, {
      key: '_serializeBeforeCreate',
      value: function _serializeBeforeCreate(deliveryArea) {
        return $q(function (resolve, reject) {
          var data = {
            neighborhood_id: deliveryArea.neighborhood.id,
            tax: deliveryArea.tax || 0,
            min_order: deliveryArea.min_order || null
          };

          return resolve(data);
        });
      }
    }, {
      key: '_serializeBeforeEdit',
      value: function _serializeBeforeEdit(deliveryArea) {
        return $q(function (resolve, reject) {
          var data = {
            id: deliveryArea.id,
            tax: deliveryArea.tax || 0,
            min_order: deliveryArea.min_order || null
          };

          return resolve(data);
        });
      }
    }]);

    return DeliveryAreaApi;
  })())();
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('deliveryAreaApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function DeliveryTimeApi() {
      _classCallCheck(this, DeliveryTimeApi);
    }

    _createClass(DeliveryTimeApi, [{
      key: 'fetchForScheduling',
      value: function fetchForScheduling() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('delivery_times').one('scheduling').get();
      }
    }, {
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('delivery_times').get();
      }
    }, {
      key: 'create',
      value: function create(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('delivery_times', { delivery_time: data });
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('delivery_times', data.id).patch({ delivery_time: data });
      }
    }, {
      key: 'destroy',
      value: function destroy(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('delivery_times', data.id).remove();
      }
    }]);

    return DeliveryTimeApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('deliveryTimeApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, ApiBase, $rootScope) {

  return new ((function () {
    function EmployeeApi() {
      _classCallCheck(this, EmployeeApi);
    }

    _createClass(EmployeeApi, [{
      key: 'fetch',
      value: function fetch() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('employees').get(params);
      }
    }, {
      key: 'fetchRoles',
      value: function fetchRoles() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('employees').one('roles').get();
      }
    }, {
      key: 'show',
      value: function show(employee) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('employees', employee.id).get();
      }
    }, {
      key: 'create',
      value: function create(employee) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('employees', { employee: employee });
      }
    }, {
      key: 'update',
      value: function update(employee) {
        if (angular.isArray(employee.avatar) && employee.avatar[0]) {
          return this.requestWithImage({
            url: 'companies/' + $rootScope.company.id + '/stores/' + $rootScope.currentStore.id + '/employees/' + employee.id,
            method: 'PATCH',
            data: employee,
            key: 'employee',
            imgKeys: ['avatar'],
            extraKeys: ['name', 'phone', 'cellphone', 'birth_date']
          });
        }

        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('employees', employee.id).patch({ employee: employee });
      }
    }, {
      key: 'destroy',
      value: function destroy(employee) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('employees', employee.id).remove();
      }
    }]);

    return EmployeeApi;
  })())();
};

service.$inject = ['Restangular', 'ApiBase', '$rootScope'];
angular.module('admin.api.client.foodio').factory('employeeApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, DeviseBase) {

  return new ((function (_DeviseBase) {
    _inherits(LoginApi, _DeviseBase);

    function LoginApi() {
      _classCallCheck(this, LoginApi);

      _get(Object.getPrototypeOf(LoginApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(LoginApi, [{
      key: 'loginWithEmail',
      value: function loginWithEmail(employee) {
        return Restangular.service(this.deviseBaseUrl + '/sign_in').post({ employee: employee });
      }
    }]);

    return LoginApi;
  })(DeviseBase))();
};

service.$inject = ['Restangular', 'DeviseBase'];
angular.module('admin.api.client.foodio').factory('loginApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase, $rootScope) {

  return new ((function (_ApiBase) {
    _inherits(meApi, _ApiBase);

    function meApi() {
      _classCallCheck(this, meApi);

      _get(Object.getPrototypeOf(meApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(meApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('me').get();
      }
    }, {
      key: 'update',
      value: function update(employee) {
        if (employee.current_role) employee.current_role_id = employee.current_role.id;
        if (employee.current_store) employee.current_store_id = employee.current_store.id;

        if (angular.isArray(employee.avatar) && employee.avatar[0]) {
          return this.requestWithImage({
            url: 'companies/' + $rootScope.company.id + '/stores/' + $rootScope.currentStore.id + '/me',
            method: 'PATCH',
            data: employee,
            key: 'employee',
            imgKeys: ['avatar'],
            extraKeys: ['name', 'phone', 'cellphone', 'birth_date']
          });
        }

        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('me').patch({ employee: employee });
      }
    }]);

    return meApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase', '$rootScope'];
angular.module('admin.api.client.foodio').factory('meApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function MenuApi() {
      _classCallCheck(this, MenuApi);
    }

    _createClass(MenuApi, [{
      key: 'fetch',
      value: function fetch() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('menu').get(params);
      }
    }]);

    return MenuApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('menuApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function MessageApi() {
      _classCallCheck(this, MessageApi);
    }

    _createClass(MessageApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('messages').get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('messages', data.id).patch({ message: data });
      }
    }]);

    return MessageApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('messageApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function MetaTagsApi() {
      _classCallCheck(this, MetaTagsApi);
    }

    _createClass(MetaTagsApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('meta_tags').get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('meta_tags', data.id).patch({ meta_tag: data });
      }
    }]);

    return MetaTagsApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('metaTagsApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service($q, Restangular, $rootScope) {

  return new ((function () {
    function OrderApi() {
      _classCallCheck(this, OrderApi);
    }

    _createClass(OrderApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('orders').get(params);
      }
    }, {
      key: 'show',
      value: function show(order) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('orders', order.id).get();
      }
    }, {
      key: 'create',
      value: function create(order) {
        return this._serializeBeforeCreate(order).then(function (serializedOrder) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('orders', { order: serializedOrder });
        });
      }
    }, {
      key: 'update',
      value: function update(order) {
        return this._serializeBeforeUpdate(order).then(function (serializedOrder) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('orders', order.id).patch({ order: serializedOrder });
        });
      }
    }, {
      key: 'fetchStatusCount',
      value: function fetchStatusCount() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('orders').one('status_count').get();
      }
    }, {
      key: '_serializeBeforeCreate',
      value: function _serializeBeforeCreate(order) {
        return $q(function (resolve, reject) {
          var data = {
            cart_id: order.cart.id,
            payment_method_id: order.paymentMethod.id,
            order_type_id: order.orderType.id,
            note: order.note || null,
            change: order.change || null,
            costumer_id: order.costumer && order.costumer.id ? order.costumer.id : null,
            address_id: order.address && order.address.id ? order.address.id : null
          };

          if (order.scheduling) {
            if (order.scheduling.day && order.scheduling.time) {
              data.scheduling_for = {
                wday: order.scheduling.day.wday,
                from: order.scheduling.day.date + ' ' + order.scheduling.time.opening,
                to: order.scheduling.day.date + ' ' + order.scheduling.time.closing
              };
            }
          }

          return resolve(data);
        });
      }
    }, {
      key: '_serializeBeforeUpdate',
      value: function _serializeBeforeUpdate(order) {
        return $q(function (resolve, reject) {

          if (order.courier) {
            order.courier_id = order.courier.id;
          }
          if (order.address) {
            order.address_id = order.address.id;
          }

          return resolve(order);
        });
      }
    }]);

    return OrderApi;
  })())();
};

service.$inject = ['$q', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('orderApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $q, $rootScope) {

  return new ((function () {
    function OrderTypeApi() {
      _classCallCheck(this, OrderTypeApi);
    }

    _createClass(OrderTypeApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('order_types').get(params);
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('order_types').one('available').get();
      }
    }, {
      key: 'create',
      value: function create(orderType) {
        return this._serializeBeforeCreate(orderType).then(function (serializedOrderType) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('order_types', { order_type: serializedOrderType });
        });
      }
    }, {
      key: 'update',
      value: function update(orderType) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('order_types', orderType.id).patch({ order_type: orderType });
      }
    }, {
      key: 'destroy',
      value: function destroy(orderType) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('order_types', orderType.id).remove();
      }
    }, {
      key: '_serializeBeforeCreate',
      value: function _serializeBeforeCreate(order) {
        return $q(function (resolve, reject) {
          var data = angular.copy(order);

          data.available_order_type_id = order.availableOrderType.id;
          data.available_order_type = null;

          resolve(data);
        });
      }
    }]);

    return OrderTypeApi;
  })())();
};

service.$inject = ['Restangular', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('orderTypeApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function PageApi() {
      _classCallCheck(this, PageApi);
    }

    _createClass(PageApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('pages').get();
      }
    }, {
      key: 'show',
      value: function show() {
        return Restangular.one('companies', $rootScope.company.id).one('pages', page.id).get();
      }
    }, {
      key: 'create',
      value: function create(page) {
        return Restangular.one('companies', $rootScope.company.id).post('pages', { page: page });
      }
    }, {
      key: 'update',
      value: function update(page) {
        return Restangular.one('companies', $rootScope.company.id).one('pages', page.id).patch({ page: page });
      }
    }, {
      key: 'remove',
      value: function remove(page) {
        return Restangular.one('companies', $rootScope.company.id).one('pages', page.id).remove();
      }
    }]);

    return PageApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('pageApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function PauseApi() {
      _classCallCheck(this, PauseApi);
    }

    _createClass(PauseApi, [{
      key: 'create',
      value: function create(pause) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('pauses', { pause: pause });
      }
    }, {
      key: 'destroy',
      value: function destroy(pause) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('pauses', pause.id).remove();
      }
    }]);

    return PauseApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('pauseApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function PaymentMethodApi() {
      _classCallCheck(this, PaymentMethodApi);
    }

    _createClass(PaymentMethodApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('payment_methods').get();
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('payment_methods').one('available').get();
      }
    }, {
      key: 'create',
      value: function create(paymentMethod) {
        return this._serializeBeforeCreate(paymentMethod).then(function (serializedData) {
          return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('payment_methods', { payment_method: serializedData });
        });
      }
    }, {
      key: 'destroy',
      value: function destroy(paymentMethod) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('payment_methods', paymentMethod.id).remove();
      }
    }, {
      key: '_serializeBeforeCreate',
      value: function _serializeBeforeCreate(params) {
        return new Promise(function (resolve, reject) {
          var data = {
            available_payment_method_id: params.availablePaymentMethod.id
          };

          resolve(data);
        });
      }
    }]);

    return PaymentMethodApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('paymentMethodApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, ApiBase, $q, $rootScope) {
  return new ((function () {
    function PrinterApi() {
      _classCallCheck(this, PrinterApi);
    }

    _createClass(PrinterApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('printers').get();
      }
    }, {
      key: 'create',
      value: function create(printer) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).post('printers', { printer: printer });
      }
    }, {
      key: 'update',
      value: function update(printer) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('printers', printer.id).patch({ printer: printer });
      }
    }, {
      key: 'destroy',
      value: function destroy(printer) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('printers', printer.id).remove();
      }
    }]);

    return PrinterApi;
  })())();
};

service.$inject = ['Restangular', 'ApiBase', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('printerApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase, $q, $rootScope) {
  return new ((function (_ApiBase) {
    _inherits(ProductApi, _ApiBase);

    function ProductApi() {
      _classCallCheck(this, ProductApi);

      _get(Object.getPrototypeOf(ProductApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProductApi, [{
      key: 'show',
      value: function show(productCategory, productSubcategory, product) {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).one('products', product.id).get();
      }
    }, {
      key: 'create',
      value: function create(productCategory, productSubcategory, product) {
        if (angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
          return this.requestWithImage({
            url: 'companies/' + $rootScope.company.id + '/product_categories/' + productCategory.id + '/product_subcategories/' + productSubcategory.id + '/products',
            method: 'POST',
            data: product,
            key: 'product',
            imgKeys: ['img', 'img_hover'],
            extraKeys: ['name', 'title', 'admin_only', 'description', 'order', 'base_price', 'stores', 'addon_categories', 'change_img_on_hover']
          });
        } else {
          return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).post('products', { product: product });
        }
      }
    }, {
      key: 'update',
      value: function update(productCategory, productSubcategory, product) {
        if (angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
          return this.requestWithImage({
            url: 'companies/' + $rootScope.company.id + '/product_categories/' + productCategory.id + '/product_subcategories/' + productSubcategory.id + '/products/' + product.id,
            method: 'PATCH',
            data: product,
            key: 'product',
            imgKeys: ['img', 'img_hover'],
            extraKeys: ['name', 'title', 'admin_only', 'description', 'order', 'base_price', 'stores', 'addon_categories', 'change_img_on_hover']
          });
        } else {
          return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).one('products', product.id).patch({ product: product });
        }
      }
    }, {
      key: 'destroy',
      value: function destroy(productCategory, productSubcategory, product) {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).one('products', product.id).remove();
      }
    }]);

    return ProductApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase', '$q', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function ProductCategoryApi() {
      _classCallCheck(this, ProductCategoryApi);
    }

    _createClass(ProductCategoryApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories').get();
      }
    }, {
      key: 'fetchWithProducts',
      value: function fetchWithProducts() {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories').one('product_subcategories').one('products').get();
      }
    }, {
      key: 'show',
      value: function show(productCategory) {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).get();
      }
    }]);

    return ProductCategoryApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productCategoryApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function ProductSubcategoryApi() {
      _classCallCheck(this, ProductSubcategoryApi);
    }

    _createClass(ProductSubcategoryApi, [{
      key: 'create',
      value: function create(productCategory, productSubcategory) {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).post('product_subcategories', { product_subcategory: productSubcategory });
      }
    }, {
      key: 'update',
      value: function update(productCategory, productSubcategory) {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).patch({ product_subcategory: productSubcategory });
      }
    }, {
      key: 'destroy',
      value: function destroy(productCategory, productSubcategory) {
        return Restangular.one('companies', $rootScope.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).remove();
      }
    }, {
      key: 'fetch',
      value: function fetch(productCategory) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('product_categories', productCategory.type).one('product_subcategories').one('store_products').get();
      }
    }]);

    return ProductSubcategoryApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('productSubcategoryApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function RatingApi() {
      _classCallCheck(this, RatingApi);
    }

    _createClass(RatingApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('ratings').get(params);
      }
    }]);

    return RatingApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('ratingApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(PublicRestangular, Restangular) {

  return new ((function () {
    function StateApi() {
      _classCallCheck(this, StateApi);
    }

    _createClass(StateApi, [{
      key: 'fetch',
      value: function fetch() {
        return PublicRestangular.one('states').get();
      }
    }]);

    return StateApi;
  })())();
};

service.$inject = ['PublicRestangular', 'Restangular'];
angular.module('admin.api.client.foodio').factory('stateApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function StoreAddonApi() {
      _classCallCheck(this, StoreAddonApi);
    }

    _createClass(StoreAddonApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('store_addons').get();
      }
    }, {
      key: 'show',
      value: function show(storeAddon) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('store_addons', storeAddon.id).get();
      }
    }, {
      key: 'update',
      value: function update(storeAddon) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('store_addons', storeAddon.id).patch({ store_addon: storeAddon });
      }
    }, {
      key: 'destroy',
      value: function destroy(storeAddon) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('store_addons', storeAddon.id).remove();
      }
    }]);

    return StoreAddonApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeAddonApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function StoreAddressApi() {
      _classCallCheck(this, StoreAddressApi);
    }

    _createClass(StoreAddressApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('addresses').get();
      }
    }, {
      key: 'update',
      value: function update(storeAddress) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('addresses', storeAddress.id).patch({ address: storeAddress });
      }
    }]);

    return StoreAddressApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeAddressApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(PublicRestangular, Restangular, $rootScope) {

  return new ((function () {
    function StoreApi() {
      _classCallCheck(this, StoreApi);
    }

    _createClass(StoreApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return PublicRestangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).get(params);
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).patch({ store: data });
      }
    }]);

    return StoreApi;
  })())();
};

service.$inject = ['PublicRestangular', 'Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function StoreProductApi() {
      _classCallCheck(this, StoreProductApi);
    }

    _createClass(StoreProductApi, [{
      key: 'show',
      value: function show(storeProduct) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('store_products', storeProduct.id).get();
      }
    }, {
      key: 'update',
      value: function update(storeProduct) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('store_products', storeProduct.id).patch({ store_product: storeProduct });
      }
    }, {
      key: 'destroy',
      value: function destroy(storeProduct) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('store_products', storeProduct.id).remove();
      }
    }]);

    return StoreProductApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('storeProductApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular, $rootScope) {

  return new ((function () {
    function TrackApi() {
      _classCallCheck(this, TrackApi);
    }

    _createClass(TrackApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('tracks').get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', $rootScope.company.id).one('stores', $rootScope.currentStore.id).one('tracks', data.id).patch({ track: data });
      }
    }]);

    return TrackApi;
  })())();
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('trackApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(Restangular) {

  return new ((function () {
    function UtilsApi() {
      _classCallCheck(this, UtilsApi);
    }

    _createClass(UtilsApi, [{
      key: 'getPauseReasons',
      value: function getPauseReasons(params) {
        return Restangular.one('utils').one('pause_reasons').get();
      }
    }, {
      key: 'getOrderStauses',
      value: function getOrderStauses(params) {
        return Restangular.one('utils').one('order_statuses').get();
      }
    }, {
      key: 'getMetaTags',
      value: function getMetaTags(params) {
        return Restangular.one('utils').one('meta_tag_names').get();
      }
    }]);

    return UtilsApi;
  })())();
};

service.$inject = ['Restangular'];
angular.module('admin.api.client.foodio').factory('utilsApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service(PublicRestangular, Restangular) {
  return new ((function () {
    function ZipcodeApi() {
      _classCallCheck(this, ZipcodeApi);
    }

    _createClass(ZipcodeApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return PublicRestangular.one('zipcode').get(params);
      }
    }]);

    return ZipcodeApi;
  })())();
};

service.$inject = ['PublicRestangular', 'Restangular'];
angular.module('admin.api.client.foodio').factory('zipcodeApi', service);