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

var fieldInstruct = function (_require) {
	(0, _inherits3.default)(fieldInstruct, _require);

	function fieldInstruct(wXml, wDoc, mParent) {
		(0, _classCallCheck3.default)(this, fieldInstruct);

		var _this = (0, _possibleConstructorReturn3.default)(this, (fieldInstruct.__proto__ || (0, _getPrototypeOf2.default)(fieldInstruct)).apply(this, arguments));

		wDoc.parseContext.field.instruct(wXml.textContent.trim());
		return _this;
	}

	(0, _createClass3.default)(fieldInstruct, [{
		key: 'parse',
		value: function parse() {}
	}], [{
		key: 'type',
		get: function get() {
			return 'fieldInstruct';
		}
	}]);
	return fieldInstruct;
}(require('../model'));

exports.default = fieldInstruct;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGRJbnN0cnVjdC5qcyJdLCJuYW1lcyI6WyJmaWVsZEluc3RydWN0Iiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiYXJndW1lbnRzIiwicGFyc2VDb250ZXh0IiwiZmllbGQiLCJpbnN0cnVjdCIsInRleHRDb250ZW50IiwidHJpbSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLGE7OztBQUNwQix3QkFBWUMsSUFBWixFQUFpQkMsSUFBakIsRUFBc0JDLE9BQXRCLEVBQThCO0FBQUE7O0FBQUEsbUpBQ3BCQyxTQURvQjs7QUFFN0JGLE9BQUtHLFlBQUwsQ0FBa0JDLEtBQWxCLENBQXdCQyxRQUF4QixDQUFpQ04sS0FBS08sV0FBTCxDQUFpQkMsSUFBakIsRUFBakM7QUFGNkI7QUFHN0I7Ozs7MEJBQ00sQ0FFTjs7O3NCQUNnQjtBQUFDLFVBQU8sZUFBUDtBQUF1Qjs7O0VBUkNDLFFBQVEsVUFBUixDOztrQkFBdEJWLGEiLCJmaWxlIjoiZmllbGRJbnN0cnVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZpZWxkSW5zdHJ1Y3QgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXG5cdGNvbnN0cnVjdG9yKHdYbWwsd0RvYyxtUGFyZW50KXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdHdEb2MucGFyc2VDb250ZXh0LmZpZWxkLmluc3RydWN0KHdYbWwudGV4dENvbnRlbnQudHJpbSgpKVxyXG5cdH1cclxuXHRwYXJzZSgpe1xyXG5cclxuXHR9XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdmaWVsZEluc3RydWN0J31cclxufVxyXG4iXX0=