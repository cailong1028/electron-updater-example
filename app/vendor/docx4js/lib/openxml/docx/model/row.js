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

var _table = require('./style/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var row = function (_require) {
	(0, _inherits3.default)(row, _require);

	function row() {
		(0, _classCallCheck3.default)(this, row);
		return (0, _possibleConstructorReturn3.default)(this, (row.__proto__ || (0, _getPrototypeOf2.default)(row)).apply(this, arguments));
	}

	(0, _createClass3.default)(row, [{
		key: 'parse',
		value: function parse() {
			this.wDoc.parseContext.table.pushRow(this);
			(0, _get3.default)(row.prototype.__proto__ || (0, _getPrototypeOf2.default)(row.prototype), 'parse', this).apply(this, arguments);
			this.wDoc.parseContext.table.popRow(this);
		}
	}, {
		key: 'getDirectStyle',
		value: function getDirectStyle(pr) {
			return (pr = this.wXml.$1('>trPr')) && new _table2.default.RowProperties(pr, this.wDoc, this);
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'row';
		}
	}]);
	return row;
}(require('../model'));

exports.default = row;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvcm93LmpzIl0sIm5hbWVzIjpbInJvdyIsIndEb2MiLCJwYXJzZUNvbnRleHQiLCJ0YWJsZSIsInB1c2hSb3ciLCJhcmd1bWVudHMiLCJwb3BSb3ciLCJwciIsIndYbWwiLCIkMSIsIlJvd1Byb3BlcnRpZXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7OzBCQUNiO0FBQ04sUUFBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QkMsT0FBN0IsQ0FBcUMsSUFBckM7QUFDQSwwSEFBZUMsU0FBZjtBQUNBLFFBQUtKLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJHLE1BQTdCLENBQW9DLElBQXBDO0FBQ0E7OztpQ0FDY0MsRSxFQUFHO0FBQ2pCLFVBQU8sQ0FBQ0EsS0FBRyxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxPQUFiLENBQUosS0FBOEIsSUFBSSxnQkFBV0MsYUFBZixDQUE2QkgsRUFBN0IsRUFBZ0MsS0FBS04sSUFBckMsRUFBMEMsSUFBMUMsQ0FBckM7QUFDQTs7O3NCQUNnQjtBQUFDLFVBQU8sS0FBUDtBQUFhOzs7RUFUQ1UsUUFBUSxVQUFSLEM7O2tCQUFaWCxHIiwiZmlsZSI6InJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZVN0eWxlIGZyb20gJy4vc3R5bGUvdGFibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByb3cgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXG5cdHBhcnNlKCl7XHJcblx0XHR0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLnB1c2hSb3codGhpcylcclxuXHRcdHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMud0RvYy5wYXJzZUNvbnRleHQudGFibGUucG9wUm93KHRoaXMpXHJcblx0fVxyXG5cdGdldERpcmVjdFN0eWxlKHByKXtcclxuXHRcdHJldHVybiAocHI9dGhpcy53WG1sLiQxKCc+dHJQcicpKSAmJiBuZXcgVGFibGVTdHlsZS5Sb3dQcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKVxyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3Jvdyd9XHJcbn1cclxuIl19