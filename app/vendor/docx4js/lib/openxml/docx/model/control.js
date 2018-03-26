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

var sdt = function (_require) {
	(0, _inherits3.default)(sdt, _require);

	function sdt() {
		(0, _classCallCheck3.default)(this, sdt);
		return (0, _possibleConstructorReturn3.default)(this, (sdt.__proto__ || (0, _getPrototypeOf2.default)(sdt)).apply(this, arguments));
	}

	(0, _createClass3.default)(sdt, [{
		key: 'getTag',
		value: function getTag(t) {
			return (t = this.wXml.$1('>sdtPr>tag')) && t.attr('w:val') || '';
		}
	}, {
		key: 'isInline',
		value: function isInline() {
			return !this.wXml.$1('p,table');
		}
	}]);
	return sdt;
}(require('./sdt'));

exports.default = sdt;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvY29udHJvbC5qcyJdLCJuYW1lcyI6WyJzZHQiLCJ0Iiwid1htbCIsIiQxIiwiYXR0ciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEc7Ozs7Ozs7Ozs7eUJBQ2JDLEMsRUFBRTtBQUNSLFVBQU8sQ0FBQ0EsSUFBRSxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxZQUFiLENBQUgsS0FBa0NGLEVBQUVHLElBQUYsQ0FBTyxPQUFQLENBQWxDLElBQXFELEVBQTVEO0FBQ0E7Ozs2QkFDUztBQUNULFVBQU8sQ0FBQyxLQUFLRixJQUFMLENBQVVDLEVBQVYsQ0FBYSxTQUFiLENBQVI7QUFDQTs7O0VBTitCRSxRQUFRLE9BQVIsQzs7a0JBQVpMLEciLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIHNkdCBleHRlbmRzIHJlcXVpcmUoJy4vc2R0Jyl7XHJcblx0Z2V0VGFnKHQpe1xyXG5cdFx0cmV0dXJuICh0PXRoaXMud1htbC4kMSgnPnNkdFByPnRhZycpKSAmJiB0LmF0dHIoJ3c6dmFsJykgfHwgJydcclxuXHR9XHJcblx0aXNJbmxpbmUoKXtcclxuXHRcdHJldHVybiAhdGhpcy53WG1sLiQxKCdwLHRhYmxlJylcclxuXHR9XHJcbn1cclxuIl19