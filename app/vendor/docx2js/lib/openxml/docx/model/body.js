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

var Body = function (_require) {
	(0, _inherits3.default)(Body, _require);

	function Body() {
		(0, _classCallCheck3.default)(this, Body);
		return (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).apply(this, arguments));
	}

	(0, _createClass3.default)(Body, [{
		key: '_getValidChildren',
		value: function _getValidChildren() {
			return this.wXml.$('sectPr');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'body';
		}
	}]);
	return Body;
}(require('../model'));

exports.default = Body;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvYm9keS5qcyJdLCJuYW1lcyI6WyJCb2R5Iiwid1htbCIsIiQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxJOzs7Ozs7Ozs7O3NDQUNEO0FBQ2xCLFVBQU8sS0FBS0MsSUFBTCxDQUFVQyxDQUFWLENBQVksUUFBWixDQUFQO0FBQ0E7OztzQkFFZ0I7QUFBQyxVQUFPLE1BQVA7QUFBYzs7O0VBTENDLFFBQVEsVUFBUixDOztrQkFBYkgsSSIsImZpbGUiOiJib2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0X2dldFZhbGlkQ2hpbGRyZW4oKXtcclxuXHRcdHJldHVybiB0aGlzLndYbWwuJCgnc2VjdFByJylcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnYm9keSd9XHJcbn1cclxuIl19