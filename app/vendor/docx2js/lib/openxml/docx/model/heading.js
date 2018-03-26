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

var heading = function (_require) {
	(0, _inherits3.default)(heading, _require);

	function heading() {
		(0, _classCallCheck3.default)(this, heading);

		var _this = (0, _possibleConstructorReturn3.default)(this, (heading.__proto__ || (0, _getPrototypeOf2.default)(heading)).apply(this, arguments));

		_this.outlineLvl = arguments[arguments.length - 1];
		return _this;
	}

	(0, _createClass3.default)(heading, [{
		key: 'getOutlineLevel',
		value: function getOutlineLevel() {
			return this.outlineLvl;
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'heading';
		}
	}]);
	return heading;
}(require('./paragraph'));

exports.default = heading;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaGVhZGluZy5qcyJdLCJuYW1lcyI6WyJoZWFkaW5nIiwiYXJndW1lbnRzIiwib3V0bGluZUx2bCIsImxlbmd0aCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLE87OztBQUNwQixvQkFBYTtBQUFBOztBQUFBLHVJQUNIQyxTQURHOztBQUVaLFFBQUtDLFVBQUwsR0FBZ0JELFVBQVVBLFVBQVVFLE1BQVYsR0FBaUIsQ0FBM0IsQ0FBaEI7QUFGWTtBQUdaOzs7O29DQUNnQjtBQUNoQixVQUFPLEtBQUtELFVBQVo7QUFDQTs7O3NCQUNnQjtBQUFDLFVBQU8sU0FBUDtBQUFpQjs7O0VBUkNFLFFBQVEsYUFBUixDOztrQkFBaEJKLE8iLCJmaWxlIjoiaGVhZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlYWRpbmcgZXh0ZW5kcyByZXF1aXJlKCcuL3BhcmFncmFwaCcpe1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLm91dGxpbmVMdmw9YXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV1cclxuXHR9XHJcblx0Z2V0T3V0bGluZUxldmVsKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5vdXRsaW5lTHZsXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnaGVhZGluZyd9XHJcbn1cclxuIl19