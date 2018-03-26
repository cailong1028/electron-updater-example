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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookmarkStart = function (_require) {
	(0, _inherits3.default)(bookmarkStart, _require);

	function bookmarkStart() {
		(0, _classCallCheck3.default)(this, bookmarkStart);
		return (0, _possibleConstructorReturn3.default)(this, (bookmarkStart.__proto__ || (0, _getPrototypeOf2.default)(bookmarkStart)).apply(this, arguments));
	}

	(0, _createClass3.default)(bookmarkStart, [{
		key: 'parse',
		value: function parse() {
			(0, _get3.default)(bookmarkStart.prototype.__proto__ || (0, _getPrototypeOf2.default)(bookmarkStart.prototype), 'parse', this).apply(this, arguments);
			this.wDoc.parseContext.bookmark[this.wXml.attr('w:id')] = this.wXml.attr('w:name');
		}
	}, {
		key: 'getName',
		value: function getName() {
			return this.wXml.attr('w:name');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'bookmarkStart';
		}
	}]);
	return bookmarkStart;
}(require('../model'));

exports.default = bookmarkStart;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvYm9va21hcmtTdGFydC5qcyJdLCJuYW1lcyI6WyJib29rbWFya1N0YXJ0IiwiYXJndW1lbnRzIiwid0RvYyIsInBhcnNlQ29udGV4dCIsImJvb2ttYXJrIiwid1htbCIsImF0dHIiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsYTs7Ozs7Ozs7OzswQkFDYjtBQUNOLDhJQUFlQyxTQUFmO0FBQ0EsUUFBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxRQUF2QixDQUFnQyxLQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZSxNQUFmLENBQWhDLElBQXdELEtBQUtELElBQUwsQ0FBVUMsSUFBVixDQUFlLFFBQWYsQ0FBeEQ7QUFDQTs7OzRCQUNRO0FBQ1IsVUFBTyxLQUFLRCxJQUFMLENBQVVDLElBQVYsQ0FBZSxRQUFmLENBQVA7QUFDQTs7O3NCQUNnQjtBQUFDLFVBQU8sZUFBUDtBQUF1Qjs7O0VBUkNDLFFBQVEsVUFBUixDOztrQkFBdEJQLGEiLCJmaWxlIjoiYm9va21hcmtTdGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvb2ttYXJrU3RhcnQgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXG5cdHBhcnNlKCl7XHJcblx0XHRzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLndEb2MucGFyc2VDb250ZXh0LmJvb2ttYXJrW3RoaXMud1htbC5hdHRyKCd3OmlkJyldPXRoaXMud1htbC5hdHRyKCd3Om5hbWUnKVxyXG5cdH1cclxuXHRnZXROYW1lKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53WG1sLmF0dHIoJ3c6bmFtZScpXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnYm9va21hcmtTdGFydCd9XHJcbn1cclxuIl19