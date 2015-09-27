'use strict';

var app = angular.module('foodbox.admin.api', []);

angular.module('foodbox.admin.api').constant('constants', {
  publicUrl: "http://speedy.com.br",
  adminUrl: "http://speedy.com.br/admin"
});

angular.module('foodbox.admin.api').config(function (constants, RestangularProvider) {
  RestangularProvider.setBaseUrl(constants.adminUrl);
});

app.factory('PublicRestangular', function (constants, Restangular) {
  return Restangular.withConfig(function (RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(constants.publicUrl);
  });
});
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
      key: 'getWithStoreAddons',
      value: function getWithStoreAddons() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('addon_categories').one('store_addons').get();
      }
    }]);

    return AddonCategoryApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('addonCategoryApi', service);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var apiBase = function apiBase($rootScope, $q) {
  return (function () {
    function ApiBase() {
      _classCallCheck(this, ApiBase);

      this.company = $rootScope.company;
      this.store = $rootScope.currentStore;
    }

    _createClass(ApiBase, [{
      key: "requestWithImage",
      value: function requestWithImage(param) {
        var _arguments = arguments;

        return $q(function (resolve, reject) {
          var fields = {};

          for (var i in params.extraKeys) {
            var key = params.extraKeys[i];
            fields[params.key + "[" + key + "]"] = params.data[key];
          }

          return Upload.upload({
            url: "#{ constants.baseUrl }/#{ params.url }",
            method: params.method,
            file: params.data[params.imgKeys[0]][0],
            fileFormDataName: "#{ params.key }[#{ params.imgKeys[0] }]",
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

angular.module('foodbox.admin.api').factory('ApiBase', apiBase);
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
      value: function show(resource) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one(resource.name, resource.id).one('chat').get();
      }
    }]);

    return ChatApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('chatApi', service);
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

angular.module('foodbox.admin.api').factory('chatMessageApi', service);
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

angular.module('foodbox.admin.api').factory('cityOperationApi', service);
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

angular.module('foodbox.admin.api').factory('costumerApi', service);
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

angular.module('foodbox.admin.api').factory('costumerAddressApi', service);
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

angular.module('foodbox.admin.api').factory('dashboardApi', service);
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

angular.module('foodbox.admin.api').factory('deliveryAreaApi', service);
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

angular.module('foodbox.admin.api').factory('deliveryTimeApi', service);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var deviseBase = function deviseBase() {
  return function DeviseBase() {
    _classCallCheck(this, DeviseBase);

    this.deviseBaseUrl = 'employee/sessions';
  };
};

angular.module('foodbox.admin.api').factory('DeviseBase', deviseBase);
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
            url: "admin/companies/${this.company.id}/stores/${this.store.id}/employees/${employee.id}",
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

angular.module('foodbox.admin.api').factory('employeeApi', service);
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

angular.module('foodbox.admin.api').factory('loginApi', service);
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
            url: "admin/companies/${this.company.id}/me",
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

angular.module('foodbox.admin.api').factory('meApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(MeCartApi, _ApiBase);

    function MeCartApi() {
      _classCallCheck(this, MeCartApi);

      _get(Object.getPrototypeOf(MeCartApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(MeCartApi, [{
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

    return MeCartApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('meCartApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service($q, Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(MeCartItemApi, _ApiBase);

    function MeCartItemApi() {
      _classCallCheck(this, MeCartItemApi);

      _get(Object.getPrototypeOf(MeCartItemApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(MeCartItemApi, [{
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
      value: function destroy() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('me').one('cart').one('cart_items', data.id).remove();
      }
    }, {
      key: '_serialize',
      value: function _serialize(cartItem) {

        console.log(cartItem);

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

    return MeCartItemApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('meCartItemApi', service);
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

angular.module('foodbox.admin.api').factory('menuApi', service);
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

angular.module('foodbox.admin.api').factory('messageApi', service);
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
      key: 'getStatusCount',
      value: function getStatusCount() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('orders').one('status_count').get();
      }
    }, {
      key: 'create',
      value: function create(order) {
        var _this = this;

        return this._serializeBeforeCreate(order).then(function (serializedData) {
          return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).post('orders', serializedData.id);
        });
      }
    }, {
      key: 'update',
      value: function update(order) {
        var _this2 = this;

        return this._serializeBeforeUpdate(order).then(function (serializedData) {
          return Restangular.one('companies', _this2.company.id).one('stores', _this2.store.id).post('orders', order.id).patch({ order: serializedData });
        });
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

          return resolve(data);
        });
      }
    }, {
      key: '_serializeBeforeUpdate',
      value: function _serializeBeforeUpdate() {
        return $q(function (resolve, reject) {
          if (order.courier) order.courier_id = order.courier.id;
          if (order.address) order.address_id = order.address.id;

          return resolve(order);
        });
      }
    }]);

    return OrderApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('orderApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(OrderTypeApi, _ApiBase);

    function OrderTypeApi() {
      _classCallCheck(this, OrderTypeApi);

      _get(Object.getPrototypeOf(OrderTypeApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(OrderTypeApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types').get();
      }
    }, {
      key: 'fetchAvailable',
      value: function fetchAvailable() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types').one('available').get();
      }
    }, {
      key: 'create',
      value: function create(orderType) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types', orderType.id).put();
      }
    }, {
      key: 'destroy',
      value: function destroy(orderType) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('order_types', orderType.id).remove();
      }
    }]);

    return OrderTypeApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('orderTypeApi', service);
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

angular.module('foodbox.admin.api').factory('pauseApi', service);
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

angular.module('foodbox.admin.api').factory('paymentMethodApi', service);
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
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('product_categories').get();
      }
    }, {
      key: 'show',
      value: function show(productCategory) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('product_categories', productCategory.id).get();
      }
    }]);

    return ProductCategoryApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('productCategoryApi', service);
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
      key: 'fetch',
      value: function fetch(productCategory) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('product_categories', productCategory.type).one('product_subcategories').one('store_products').get();
      }
    }]);

    return ProductSubcategoryApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('productSubcategoryApi', service);
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

angular.module('foodbox.admin.api').factory('ratingApi', service);
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

angular.module('foodbox.admin.api').factory('stateApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(StoreApi, _ApiBase);

    function StoreApi() {
      _classCallCheck(this, StoreApi);

      _get(Object.getPrototypeOf(StoreApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StoreApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).get();
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

angular.module('foodbox.admin.api').factory('storeApi', service);
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
      key: 'show',
      value: function show(addonCategory, storeAddon) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('addon_categories', addonCategory.id).one('store_addons', storeAddon.id).get();
      }
    }, {
      key: 'update',
      value: function update(addonCategory, storeAddon) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('addon_categories', addonCategory.id).one('store_addons', storeAddon.id).patch({ store_addon: storeAddon });
      }
    }, {
      key: 'destroy',
      value: function destroy(addonCategory, storeAddon) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('addon_categories', addonCategory.id).one('store_addons', storeAddon.id).remove();
      }
    }]);

    return StoreAddonApi;
  })(ApiBase))();
};

angular.module('foodbox.admin.api').factory('storeAddonApi', service);
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

angular.module('foodbox.admin.api').factory('storeAddressApi', service);
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

angular.module('foodbox.admin.api').factory('storeProductApi', service);
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

angular.module('foodbox.admin.api').factory('trackApi', service);
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
    }]);

    return UtilsApi;
  })())();
};

angular.module('foodbox.admin.api').factory('utilsApi', service);
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

angular.module('foodbox.admin.api').factory('zipcodeApi', service);