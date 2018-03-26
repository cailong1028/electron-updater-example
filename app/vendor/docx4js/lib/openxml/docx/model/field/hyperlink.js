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

var hyperlink = function (_require) {
	(0, _inherits3.default)(hyperlink, _require);

	function hyperlink(instruct) {
		(0, _classCallCheck3.default)(this, hyperlink);

		var _this = (0, _possibleConstructorReturn3.default)(this, (hyperlink.__proto__ || (0, _getPrototypeOf2.default)(hyperlink)).apply(this, arguments));

		_this.link = instruct.split('"')[1];
		return _this;
	}

	(0, _createClass3.default)(hyperlink, [{
		key: 'getLink',
		value: function getLink() {
			return this.link;
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'field.hyperlink';
		}
	}]);
	return hyperlink;
}(require('./field'));

exports.default = hyperlink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGQvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbImh5cGVybGluayIsImluc3RydWN0IiwiYXJndW1lbnRzIiwibGluayIsInNwbGl0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsUzs7O0FBQ3BCLG9CQUFZQyxRQUFaLEVBQXFCO0FBQUE7O0FBQUEsMklBQ1hDLFNBRFc7O0FBRXBCLFFBQUtDLElBQUwsR0FBVUYsU0FBU0csS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBVjtBQUZvQjtBQUdwQjs7Ozs0QkFDUTtBQUNSLFVBQU8sS0FBS0QsSUFBWjtBQUNBOzs7c0JBRWdCO0FBQUMsVUFBTyxpQkFBUDtBQUF5Qjs7O0VBVExFLFFBQVEsU0FBUixDOztrQkFBbEJMLFMiLCJmaWxlIjoiaHlwZXJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgaHlwZXJsaW5rIGV4dGVuZHMgcmVxdWlyZSgnLi9maWVsZCcpe1xyXG5cdGNvbnN0cnVjdG9yKGluc3RydWN0KXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMubGluaz1pbnN0cnVjdC5zcGxpdCgnXCInKVsxXVxyXG5cdH1cclxuXHRnZXRMaW5rKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5saW5rXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2ZpZWxkLmh5cGVybGluayd9XHJcbn1cclxuIl19