//
// helpers.modules
//

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var ModuleHelpers = (function () {
  function ModuleHelpers() {
    _classCallCheck(this, ModuleHelpers);
  }

  _createClass(ModuleHelpers, [{
    key: 'checkRequiredParams',
    value: function checkRequiredParams(object, params, moduleName) {
      _lodash2['default'].each(params, function (name) {
        if (!object[name]) {
          throw new Error('orchestra:' + moduleName + ' required param ' + name + ' is undefined or null');
        }

        return true;
      });
    }
  }]);

  return ModuleHelpers;
})();

module.exports = new ModuleHelpers();
//# sourceMappingURL=../helpers/module.js.map