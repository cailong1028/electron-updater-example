'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var symbol = function (_require) {
	(0, _inherits3.default)(symbol, _require);

	function symbol() {
		(0, _classCallCheck3.default)(this, symbol);
		return (0, _possibleConstructorReturn3.default)(this, (symbol.__proto__ || (0, _getPrototypeOf2.default)(symbol)).apply(this, arguments));
	}

	(0, _createClass3.default)(symbol, [{
		key: 'getText',
		value: function getText() {
			return String.fromCharCode(ParseInt('0x' + this._attr('w:char')));
		}
	}, {
		key: 'getFont',
		value: function getFont() {
			return this._attr('w:font');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'symbol';
		}
	}]);
	return symbol;
}(require('./text'));

exports.default = symbol;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3ltYm9sLmpzIl0sIm5hbWVzIjpbInN5bWJvbCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIlBhcnNlSW50IiwiX2F0dHIiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxNOzs7Ozs7Ozs7OzRCQUVYO0FBQ1IsVUFBT0MsT0FBT0MsWUFBUCxDQUFvQkMsU0FBUyxPQUFLLEtBQUtDLEtBQUwsQ0FBVyxRQUFYLENBQWQsQ0FBcEIsQ0FBUDtBQUNBOzs7NEJBQ1E7QUFDUixVQUFPLEtBQUtBLEtBQUwsQ0FBVyxRQUFYLENBQVA7QUFDQTs7O3NCQU5nQjtBQUFDLFVBQU8sUUFBUDtBQUFnQjs7O0VBRENDLFFBQVEsUUFBUixDOztrQkFBZkwsTSIsImZpbGUiOiJzeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBzeW1ib2wgZXh0ZW5kcyByZXF1aXJlKCcuL3RleHQnKXtcclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3N5bWJvbCd9XHJcblx0Z2V0VGV4dCgpe1xyXG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoUGFyc2VJbnQoJzB4Jyt0aGlzLl9hdHRyKCd3OmNoYXInKSkpXHJcblx0fVxyXG5cdGdldEZvbnQoKXtcclxuXHRcdHJldHVybiB0aGlzLl9hdHRyKCd3OmZvbnQnKVxyXG5cdH1cclxufVxyXG4iXX0=