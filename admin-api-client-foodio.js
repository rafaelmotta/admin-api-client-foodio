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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(AddonApi, _ApiBase);

    function AddonApi() {
      _classCallCheck(this, AddonApi);

      _get(Object.getPrototypeOf(AddonApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(AddonApi, [{
      key: 'create',
      value: function create(addonCategory, addon) {
        return Restangular.one('companies', this.company.id).one('addon_categories', addonCategory.id).post('addons', { addon: addon });
      }
    }, {
      key: 'update',
      value: function update(addonCategory, addon) {
        return Restangular.one('companies', this.company.id).one('addon_categories', addonCategory.id).one('addons', addon.id).patch({ addon: addon });
      }
    }, {
      key: 'destroy',
      value: function destroy(addonCategory, addon) {
        return Restangular.one('companies', this.company.id).one('addon_categories', addonCategory.id).one('addons', addon.id).remove();
      }
    }]);

    return AddonApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('addonApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(AddonCategoryApi, _ApiBase);

    function AddonCategoryApi() {
      _classCallCheck(this, AddonCategoryApi);

      _get(Object.getPrototypeOf(AddonCategoryApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(AddonCategoryApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('addon_categories').get();
      }
    }, {
      key: 'fetchWithAddons',
      value: function fetchWithAddons() {
        return Restangular.one('companies', this.company.id).one('addon_categories').one('addons').get();
      }
    }, {
      key: 'create',
      value: function create(addonCategory) {
        return Restangular.one('companies', this.company.id).post('addon_categories', { addon_category: addonCategory });
      }
    }, {
      key: 'update',
      value: function update(addonCategory) {
        return Restangular.one('companies', this.company.id).one('addon_categories', addonCategory.id).patch({ addon_category: addonCategory });
      }
    }, {
      key: 'destroy',
      value: function destroy(addonCategory) {
        return Restangular.one('companies', this.company.id).one('addon_categories', addonCategory.id).remove();
      }
    }]);

    return AddonCategoryApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('addonCategoryApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var service = function service($rootScope, $q, constants, Upload) {
  return (function () {
    function ApiBase() {
      var _this = this;

      _classCallCheck(this, ApiBase);

      this.company = $rootScope.company;
      this.store = $rootScope.currentStore;

      $rootScope.$watch('company', function () {
        _this.company = $rootScope.company;
      }, true);

      $rootScope.$watch('currentStore', function () {
        _this.store = $rootScope.currentStore;
      }, true);
    }

    _createClass(ApiBase, [{
      key: 'requestWithImage',
      value: function requestWithImage() {
        var _arguments = arguments;
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return $q(function (resolve, reject) {
          var fields = {};

          angular.forEach(params.extraKeys, function (key) {
            fields[params.key + '[' + key + ']'] = params.data[key];
          });

          return Upload.upload({
            url: constants.api + '/admin/' + params.url,
            method: params.method,
            file: params.data[params.imgKeys[0]][0],
            fileFormDataName: params.key + '[' + params.imgKeys[0] + ']',
            fields: fields
          }).success(function (data) {
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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(CartApi, _ApiBase);

    function CartApi() {
      _classCallCheck(this, CartApi);

      _get(Object.getPrototypeOf(CartApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CartApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('me').one('cart').get();
      }
    }, {
      key: 'create',
      value: function create() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('me').one('cart').one('new').get();
      }
    }]);

    return CartApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('cartApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service($q, Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(CartItemApi, _ApiBase);

    function CartItemApi() {
      _classCallCheck(this, CartItemApi);

      _get(Object.getPrototypeOf(CartItemApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CartItemApi, [{
      key: 'create',
      value: function create(data) {
        var _this = this;

        return this._serialize(data).then(function (serializedData) {
          return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).one('me').one('cart').post('cart_items', { cart_item: serializedData });
        });
      }
    }, {
      key: 'update',
      value: function update(data) {
        var _this2 = this;

        return this._serialize(data).then(function (serializedData) {
          return Restangular.one('companies', _this2.company.id).one('stores', _this2.store.id).one('me').one('cart').one('cart_items', data.id).patch({ cart_item: serializedData });
        });
      }
    }, {
      key: 'destroy',
      value: function destroy(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('me').one('cart').one('cart_items', data.id).remove();
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
  })(ApiBase))();
};

service.$inject = ['$q', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('cartItemApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(ChatApi, _ApiBase);

    function ChatApi() {
      _classCallCheck(this, ChatApi);

      _get(Object.getPrototypeOf(ChatApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ChatApi, [{
      key: 'show',
      value: function show(store, resource) {
        return Restangular.one('companies', this.company.id).one('stores', store.id).one(resource.name, resource.id).one('chat').get();
      }
    }]);

    return ChatApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('chatApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(chatMessageApi, _ApiBase);

    function chatMessageApi() {
      _classCallCheck(this, chatMessageApi);

      _get(Object.getPrototypeOf(chatMessageApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(chatMessageApi, [{
      key: 'create',
      value: function create(chat, chatMessage) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('chats', chat.id).post('chat_messages', { chat_message: chatMessage });
      }
    }]);

    return chatMessageApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('chatMessageApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(CityOperationApi, _ApiBase);

    function CityOperationApi() {
      _classCallCheck(this, CityOperationApi);

      _get(Object.getPrototypeOf(CityOperationApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CityOperationApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations').get();
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable(state) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations').one('available').get({ state_id: state.id });
      }
    }, {
      key: 'fetchWithDeliveryAreas',
      value: function fetchWithDeliveryAreas() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations').one('delivery_areas').get();
      }
    }, {
      key: 'fetchAvailableDeliveryAreas',
      value: function fetchAvailableDeliveryAreas(cityOperation) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations', cityOperation.id).one('available_delivery_areas').get();
      }
    }, {
      key: 'create',
      value: function create(cityOperation) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations', cityOperation.id).put();
      }
    }, {
      key: 'destroy',
      value: function destroy(cityOperation) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations', cityOperation.id).remove();
      }
    }]);

    return CityOperationApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('cityOperationApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(PublicRestangular, Restangular, ApiBase) {
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

service.$inject = ['PublicRestangular', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('companyApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(CostumerAddressApi, _ApiBase);

    function CostumerAddressApi() {
      _classCallCheck(this, CostumerAddressApi);

      _get(Object.getPrototypeOf(CostumerAddressApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CostumerAddressApi, [{
      key: 'fetch',
      value: function fetch(costumer) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers', costumer.id).one('addresses').get();
      }
    }, {
      key: 'create',
      value: function create(costumer, address) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers', costumer.id).post('addresses', { address: address });
      }
    }, {
      key: 'update',
      value: function update(costumer, address) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers', costumer.id).one('addresses', address.id).patch({ address: address });
      }
    }, {
      key: 'destroy',
      value: function destroy(costumer, address) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers', costumer.id).one('addresses', address.id).remove();
      }
    }]);

    return CostumerAddressApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('costumerAddressApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(CostumerApi, _ApiBase);

    function CostumerApi() {
      _classCallCheck(this, CostumerApi);

      _get(Object.getPrototypeOf(CostumerApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CostumerApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers').get(params);
      }
    }, {
      key: 'show',
      value: function show(costumer) {
        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers', costumer.id).get(params);
      }
    }, {
      key: 'create',
      value: function create(costumer) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).post('costumers', { costumer: costumer });
      }
    }, {
      key: 'update',
      value: function update(costumer) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers', costumer.id).patch({ costumer: costumer });
      }
    }]);

    return CostumerApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('costumerApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(Factory, _ApiBase);

    function Factory() {
      _classCallCheck(this, Factory);

      _get(Object.getPrototypeOf(Factory.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Factory, [{
      key: 'fetch',
      value: function fetch(costumer) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('costumers', costumer.id).one('orders').get();
      }
    }]);

    return Factory;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('costumerOrderApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service($q, $filter, Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(DashboardApi, _ApiBase);

    function DashboardApi() {
      _classCallCheck(this, DashboardApi);

      _get(Object.getPrototypeOf(DashboardApi.prototype), 'constructor', this).apply(this, arguments);
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
        var _this = this;

        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return this._serializeBeforeSend(params).then(function (serializedParams) {
          return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).one('dashboard').one('sales').get(serializedParams);
        });
      }
    }]);

    return DashboardApi;
  })(ApiBase))();
};

service.$inject = ['$q', '$filter', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('dashboardApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service($q, Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(DeliveryAreaApi, _ApiBase);

    function DeliveryAreaApi() {
      _classCallCheck(this, DeliveryAreaApi);

      _get(Object.getPrototypeOf(DeliveryAreaApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DeliveryAreaApi, [{
      key: 'fetch',
      value: function fetch(cityOperation) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations', cityOperation.id).one('delivery_areas').get();
      }
    }, {
      key: 'create',
      value: function create(cityOperation, deliveryArea) {
        var _this = this;

        return this._serializeBeforeCreate(deliveryArea).then(function (serializedDeliveryArea) {
          return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).one('city_operations', cityOperation.id).post('delivery_areas', { delivery_area: serializedDeliveryArea });
        });
      }
    }, {
      key: 'update',
      value: function update(cityOperation, deliveryArea) {
        var _this2 = this;

        return this._serializeBeforeEdit(deliveryArea).then(function (serializedDeliveryArea) {
          return Restangular.one('companies', _this2.company.id).one('stores', _this2.store.id).one('city_operations', cityOperation.id).one('delivery_areas', deliveryArea.id).patch({ delivery_area: serializedDeliveryArea });
        });
      }
    }, {
      key: 'destroy',
      value: function destroy(cityOperation, deliveryArea) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations', cityOperation.id).one('delivery_areas', deliveryArea.id).remove();
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable(cityOperation) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('city_operations', cityOperation.id).one('delivery_areas').one('available').get();
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
  })(ApiBase))();
};

service.$inject = ['$q', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('deliveryAreaApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(DeliveryTimeApi, _ApiBase);

    function DeliveryTimeApi() {
      _classCallCheck(this, DeliveryTimeApi);

      _get(Object.getPrototypeOf(DeliveryTimeApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DeliveryTimeApi, [{
      key: 'fetchForScheduling',
      value: function fetchForScheduling() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('delivery_times').one('scheduling').get();
      }
    }, {
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('delivery_times').get();
      }
    }, {
      key: 'create',
      value: function create(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).post('delivery_times', { delivery_time: data });
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('delivery_times', data.id).patch({ delivery_time: data });
      }
    }, {
      key: 'destroy',
      value: function destroy(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('delivery_times', data.id).remove();
      }
    }]);

    return DeliveryTimeApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('deliveryTimeApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(EmployeeApi, _ApiBase);

    function EmployeeApi() {
      _classCallCheck(this, EmployeeApi);

      _get(Object.getPrototypeOf(EmployeeApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(EmployeeApi, [{
      key: 'fetch',
      value: function fetch() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('employees').get(params);
      }
    }, {
      key: 'fetchRoles',
      value: function fetchRoles() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('employees').one('roles').get();
      }
    }, {
      key: 'show',
      value: function show(employee) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('employees', employee.id).get();
      }
    }, {
      key: 'create',
      value: function create(employee) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).post('employees', { employee: employee });
      }
    }, {
      key: 'update',
      value: function update(employee) {
        if (angular.isArray(employee.avatar) && employee.avatar[0]) {
          return this.requestWithImage({
            url: 'companies/' + this.company.id + '/stores/' + this.store.id + '/employees/' + employee.id,
            method: 'PATCH',
            data: employee,
            key: 'employee',
            imgKeys: ['avatar'],
            extraKeys: ['name', 'phone', 'cellphone', 'birth_date']
          });
        }

        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('employees', employee.id).patch({ employee: employee });
      }
    }, {
      key: 'destroy',
      value: function destroy(employee) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('employees', employee.id).remove();
      }
    }]);

    return EmployeeApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
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

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(meApi, _ApiBase);

    function meApi() {
      _classCallCheck(this, meApi);

      _get(Object.getPrototypeOf(meApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(meApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('me').get();
      }
    }, {
      key: 'update',
      value: function update(employee) {
        if (employee.current_role) employee.current_role_id = employee.current_role.id;
        if (employee.current_store) employee.current_store_id = employee.current_store.id;

        if (angular.isArray(employee.avatar) && employee.avatar[0]) {
          return this.requestWithImage({
            url: 'companies/' + this.company.id + '/stores/' + this.store.id + '/me',
            method: 'PATCH',
            data: employee,
            key: 'employee',
            imgKeys: ['avatar'],
            extraKeys: ['name', 'phone', 'cellphone', 'birth_date']
          });
        }

        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('me').patch({ employee: employee });
      }
    }]);

    return meApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('meApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(PublicRestangular, Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(MenuApi, _ApiBase);

    function MenuApi() {
      _classCallCheck(this, MenuApi);

      _get(Object.getPrototypeOf(MenuApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(MenuApi, [{
      key: 'fetch',
      value: function fetch() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return PublicRestangular.one('companies', this.company.id).one('stores', this.store.id).one('menu').get(params);
      }
    }]);

    return MenuApi;
  })(ApiBase))();
};

service.$inject = ['PublicRestangular', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('menuApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(MessageApi, _ApiBase);

    function MessageApi() {
      _classCallCheck(this, MessageApi);

      _get(Object.getPrototypeOf(MessageApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(MessageApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('messages').get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('messages', data.id).patch({ message: data });
      }
    }]);

    return MessageApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('messageApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(MetaTagsApi, _ApiBase);

    function MetaTagsApi() {
      _classCallCheck(this, MetaTagsApi);

      _get(Object.getPrototypeOf(MetaTagsApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(MetaTagsApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('meta_tags').get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('meta_tags', data.id).patch({ meta_tag: data });
      }
    }]);

    return MetaTagsApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('metaTagsApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service($q, Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(OrderApi, _ApiBase);

    function OrderApi() {
      _classCallCheck(this, OrderApi);

      _get(Object.getPrototypeOf(OrderApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(OrderApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('orders').get(params);
      }
    }, {
      key: 'show',
      value: function show(order) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('orders', order.id).get();
      }
    }, {
      key: 'create',
      value: function create(order) {
        var _this = this;

        return this._serializeBeforeCreate(order).then(function (serializedOrder) {
          return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).post('orders', { order: serializedOrder });
        });
      }
    }, {
      key: 'update',
      value: function update(order) {
        var _this2 = this;

        return this._serializeBeforeUpdate(order).then(function (serializedOrder) {
          return Restangular.one('companies', _this2.company.id).one('stores', _this2.store.id).one('orders', order.id).patch({ order: serializedOrder });
        });
      }
    }, {
      key: 'fetchStatusCount',
      value: function fetchStatusCount() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('orders').one('status_count').get();
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
  })(ApiBase))();
};

service.$inject = ['$q', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('orderApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, $q, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(OrderTypeApi, _ApiBase);

    function OrderTypeApi() {
      _classCallCheck(this, OrderTypeApi);

      _get(Object.getPrototypeOf(OrderTypeApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(OrderTypeApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types').get(params);
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types').one('available').get();
      }
    }, {
      key: 'create',
      value: function create(orderType) {
        var _this = this;

        return this._serializeBeforeCreate(orderType).then(function (serializedOrderType) {
          return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).post('order_types', { order_type: serializedOrderType });
        });
      }
    }, {
      key: 'update',
      value: function update(orderType) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types', orderType.id).patch({ order_type: orderType });
      }
    }, {
      key: 'destroy',
      value: function destroy(orderType) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types', orderType.id).remove();
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
  })(ApiBase))();
};

service.$inject = ['Restangular', '$q', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('orderTypeApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(PagesApi, _ApiBase);

    function PagesApi() {
      _classCallCheck(this, PagesApi);

      _get(Object.getPrototypeOf(PagesApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PagesApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('pages').get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('pages', data.id).patch({ page: data });
      }
    }]);

    return PagesApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('pagesApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(PauseApi, _ApiBase);

    function PauseApi() {
      _classCallCheck(this, PauseApi);

      _get(Object.getPrototypeOf(PauseApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PauseApi, [{
      key: 'create',
      value: function create(pause) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).post('pauses', { pause: pause });
      }
    }, {
      key: 'destroy',
      value: function destroy(pause) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('pauses', pause.id).remove();
      }
    }]);

    return PauseApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('pauseApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(PaymentMethodApi, _ApiBase);

    function PaymentMethodApi() {
      _classCallCheck(this, PaymentMethodApi);

      _get(Object.getPrototypeOf(PaymentMethodApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PaymentMethodApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('payment_methods').get();
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('payment_methods').one('available').get();
      }
    }, {
      key: 'create',
      value: function create(paymentMethod) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('payment_methods', paymentMethod.id).put();
      }
    }, {
      key: 'destroy',
      value: function destroy(paymentMethod) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('payment_methods', paymentMethod.id).remove();
      }
    }]);

    return PaymentMethodApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('paymentMethodApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase, $q) {
  return new ((function (_ApiBase) {
    _inherits(ProductApi, _ApiBase);

    function ProductApi() {
      _classCallCheck(this, ProductApi);

      _get(Object.getPrototypeOf(ProductApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProductApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('product_categories').one('product_subcategories').one('products').get();
      }
    }, {
      key: 'create',
      value: function create(product) {
        var _this = this;

        return this._serializeBeforeCreate(product).then(function (product) {
          if (angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
            return _this.requestWithImage({
              url: 'companies/' + _this.company.id + '/stores/' + _this.store.id + '/products',
              method: 'POST',
              data: product,
              key: 'product',
              imgKeys: ['img', 'img_hover'],
              extraKeys: ['name', 'description', 'base_price']
            });
          } else {
            return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).post('products', { product: product });
          }
        });
      }
    }, {
      key: 'update',
      value: function update(product) {
        if (angular.isArray(product.img) && product.img[0] || angular.isArray(product.img_hover) && product.img_hover[0]) {
          return this.requestWithImage({
            url: 'companies/' + this.company.id + '/stores/' + this.store.id + '/products/' + product.id,
            method: 'PATCH',
            data: product,
            key: 'product',
            imgKeys: ['img', 'img_hover'],
            extraKeys: ['name', 'description', 'base_price']
          });
        } else {
          return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('products', product.id).patch({ product: product });
        }
      }
    }, {
      key: '_serializeBeforeCreate',
      value: function _serializeBeforeCreate(product) {
        return $q(function (resolve, reject) {
          var data = angular.copy(product);

          data.product_subcategory_id = data.category.id;
          delete data.category;

          resolve(data);
        });
      }
    }]);

    return ProductApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase', '$q'];
angular.module('admin.api.client.foodio').factory('productApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(ProductCategoryApi, _ApiBase);

    function ProductCategoryApi() {
      _classCallCheck(this, ProductCategoryApi);

      _get(Object.getPrototypeOf(ProductCategoryApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProductCategoryApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('product_categories').get();
      }
    }, {
      key: 'show',
      value: function show(productCategory) {
        return Restangular.one('companies', this.company.id).one('product_categories', productCategory.id).get();
      }
    }]);

    return ProductCategoryApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('productCategoryApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(ProductSubcategoryApi, _ApiBase);

    function ProductSubcategoryApi() {
      _classCallCheck(this, ProductSubcategoryApi);

      _get(Object.getPrototypeOf(ProductSubcategoryApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProductSubcategoryApi, [{
      key: 'create',
      value: function create(productCategory, productSubcategory) {
        return Restangular.one('companies', this.company.id).one('product_categories', productCategory.id).post('product_subcategories', { product_subcategory: productSubcategory });
      }
    }, {
      key: 'update',
      value: function update(productCategory, productSubcategory) {
        return Restangular.one('companies', this.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).patch({ product_subcategory: productSubcategory });
      }
    }, {
      key: 'destroy',
      value: function destroy(productCategory, productSubcategory) {
        return Restangular.one('companies', this.company.id).one('product_categories', productCategory.id).one('product_subcategories', productSubcategory.id).remove();
      }
    }, {
      key: 'fetch',
      value: function fetch(productCategory) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('product_categories', productCategory.type).one('product_subcategories').one('store_products').get();
      }
    }]);

    return ProductSubcategoryApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('productSubcategoryApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(RatingApi, _ApiBase);

    function RatingApi() {
      _classCallCheck(this, RatingApi);

      _get(Object.getPrototypeOf(RatingApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(RatingApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('ratings').get(params);
      }
    }]);

    return RatingApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(StoreAddonApi, _ApiBase);

    function StoreAddonApi() {
      _classCallCheck(this, StoreAddonApi);

      _get(Object.getPrototypeOf(StoreAddonApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StoreAddonApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_addons').get();
      }
    }, {
      key: 'show',
      value: function show(storeAddon) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_addons', storeAddon.id).get();
      }
    }, {
      key: 'update',
      value: function update(storeAddon) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_addons', storeAddon.id).patch({ store_addon: storeAddon });
      }
    }, {
      key: 'destroy',
      value: function destroy(storeAddon) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_addons', storeAddon.id).remove();
      }
    }]);

    return StoreAddonApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('storeAddonApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(StoreAddressApi, _ApiBase);

    function StoreAddressApi() {
      _classCallCheck(this, StoreAddressApi);

      _get(Object.getPrototypeOf(StoreAddressApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StoreAddressApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('addresses').get();
      }
    }, {
      key: 'update',
      value: function update(storeAddress) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('addresses', storeAddress.id).patch({ address: storeAddress });
      }
    }]);

    return StoreAddressApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('storeAddressApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(PublicRestangular, Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(StoreApi, _ApiBase);

    function StoreApi() {
      _classCallCheck(this, StoreApi);

      _get(Object.getPrototypeOf(StoreApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StoreApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return PublicRestangular.one('companies', this.company.id).one('stores', this.store.id).get(params);
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).patch({ store: data });
      }
    }]);

    return StoreApi;
  })(ApiBase))();
};

service.$inject = ['PublicRestangular', 'Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('storeApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(StoreProductApi, _ApiBase);

    function StoreProductApi() {
      _classCallCheck(this, StoreProductApi);

      _get(Object.getPrototypeOf(StoreProductApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StoreProductApi, [{
      key: 'show',
      value: function show(storeProduct) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_products', storeProduct.id).get();
      }
    }, {
      key: 'update',
      value: function update(storeProduct) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_products', storeProduct.id).patch({ store_product: storeProduct });
      }
    }, {
      key: 'destroy',
      value: function destroy(storeProduct) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_products', storeProduct.id).remove();
      }
    }]);

    return StoreProductApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('admin.api.client.foodio').factory('storeProductApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(TrackApi, _ApiBase);

    function TrackApi() {
      _classCallCheck(this, TrackApi);

      _get(Object.getPrototypeOf(TrackApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TrackApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('tracks').get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('tracks', data.id).patch({ track: data });
      }
    }]);

    return TrackApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
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