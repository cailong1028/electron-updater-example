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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Span = function (_Converter) {
	(0, _inherits3.default)(Span, _Converter);

	function Span() {
		(0, _classCallCheck3.default)(this, Span);
		return (0, _possibleConstructorReturn3.default)(this, (Span.__proto__ || (0, _getPrototypeOf2.default)(Span)).apply(this, arguments));
	}

	(0, _createClass3.default)(Span, [{
		key: 'convertStyle',
		value: function convertStyle(el) {
			(0, _get3.default)(Span.prototype.__proto__ || (0, _getPrototypeOf2.default)(Span.prototype), 'convertStyle', this).apply(this, arguments);
			var style = this.wordModel.getDirectStyle();
			style && style.parse([new _inline2.default.Properties(el.style)]);
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore() {
			return this.wordModel.isWebHidden() || this.wordModel.isHidden();
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'span';
		}
	}]);
	return Span;
}(_converter2.default);

exports.default = Span;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvc3Bhbi5qcyJdLCJuYW1lcyI6WyJTcGFuIiwiZWwiLCJhcmd1bWVudHMiLCJzdHlsZSIsIndvcmRNb2RlbCIsImdldERpcmVjdFN0eWxlIiwicGFyc2UiLCJQcm9wZXJ0aWVzIiwiaXNXZWJIaWRkZW4iLCJpc0hpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7OytCQUdQQyxFLEVBQUc7QUFDZixtSUFBc0JDLFNBQXRCO0FBQ0EsT0FBSUMsUUFBTSxLQUFLQyxTQUFMLENBQWVDLGNBQWYsRUFBVjtBQUNBRixZQUFTQSxNQUFNRyxLQUFOLENBQVksQ0FBQyxJQUFJLGlCQUFNQyxVQUFWLENBQXFCTixHQUFHRSxLQUF4QixDQUFELENBQVosQ0FBVDtBQUNBOzs7a0NBQ2M7QUFDZCxVQUFPLEtBQUtDLFNBQUwsQ0FBZUksV0FBZixNQUFnQyxLQUFLSixTQUFMLENBQWVLLFFBQWYsRUFBdkM7QUFDQTs7O3NCQVRRO0FBQUMsVUFBTyxNQUFQO0FBQWM7Ozs7O2tCQURKVCxJIiwiZmlsZSI6InNwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udmVydGVyIGZyb20gJy4vY29udmVydGVyJ1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS9pbmxpbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFuIGV4dGVuZHMgQ29udmVydGVye1xyXG5cdGdldCB0YWcoKXtyZXR1cm4gJ3NwYW4nfVxyXG5cdFxyXG5cdGNvbnZlcnRTdHlsZShlbCl7XHJcblx0XHRzdXBlci5jb252ZXJ0U3R5bGUoLi4uYXJndW1lbnRzKVxyXG5cdFx0dmFyIHN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHRcdHN0eWxlICYmIHN0eWxlLnBhcnNlKFtuZXcgU3R5bGUuUHJvcGVydGllcyhlbC5zdHlsZSldKVxyXG5cdH1cclxuXHRfc2hvdWxkSWdub3JlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53b3JkTW9kZWwuaXNXZWJIaWRkZW4oKSB8fCB0aGlzLndvcmRNb2RlbC5pc0hpZGRlbigpXHJcblx0fVxyXG59Il19