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

var cell = function (_require) {
	(0, _inherits3.default)(cell, _require);

	function cell() {
		(0, _classCallCheck3.default)(this, cell);
		return (0, _possibleConstructorReturn3.default)(this, (cell.__proto__ || (0, _getPrototypeOf2.default)(cell)).apply(this, arguments));
	}

	(0, _createClass3.default)(cell, [{
		key: 'parse',
		value: function parse() {
			this.wDoc.parseContext.table.pushCell(this);
			(0, _get3.default)(cell.prototype.__proto__ || (0, _getPrototypeOf2.default)(cell.prototype), 'parse', this).apply(this, arguments);
			this.wDoc.parseContext.table.popCell(this);
		}
	}, {
		key: 'getDirectStyle',
		value: function getDirectStyle(pr) {
			return (pr = this.wXml.$1('>tcPr')) && new _table2.default.CellProperties(pr, this.wDoc, this);
		}
	}, {
		key: 'isFirstRow',
		value: function isFirstRow() {
			return this.wDoc.parseContext.table.isFirstRow();
		}
	}, {
		key: 'isLastRow',
		value: function isLastRow() {
			return this.wDoc.parseContext.table.isLastRow();
		}
	}, {
		key: 'isFirstCol',
		value: function isFirstCol() {
			return this.wDoc.parseContext.table.isFirstCol();
		}
	}, {
		key: 'isLastCol',
		value: function isLastCol() {
			return this.wDoc.parseContext.table.isLastCol();
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'cell';
		}
	}]);
	return cell;
}(require('../model'));

exports.default = cell;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvY2VsbC5qcyJdLCJuYW1lcyI6WyJjZWxsIiwid0RvYyIsInBhcnNlQ29udGV4dCIsInRhYmxlIiwicHVzaENlbGwiLCJhcmd1bWVudHMiLCJwb3BDZWxsIiwicHIiLCJ3WG1sIiwiJDEiLCJDZWxsUHJvcGVydGllcyIsImlzRmlyc3RSb3ciLCJpc0xhc3RSb3ciLCJpc0ZpcnN0Q29sIiwiaXNMYXN0Q29sIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7OzswQkFHYjtBQUNOLFFBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJDLFFBQTdCLENBQXNDLElBQXRDO0FBQ0EsNEhBQWVDLFNBQWY7QUFDQSxRQUFLSixJQUFMLENBQVVDLFlBQVYsQ0FBdUJDLEtBQXZCLENBQTZCRyxPQUE3QixDQUFxQyxJQUFyQztBQUNBOzs7aUNBRWNDLEUsRUFBRztBQUNqQixVQUFPLENBQUNBLEtBQUcsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixDQUFKLEtBQ0gsSUFBSSxnQkFBV0MsY0FBZixDQUE4QkgsRUFBOUIsRUFBaUMsS0FBS04sSUFBdEMsRUFBMkMsSUFBM0MsQ0FESjtBQUVBOzs7K0JBRVc7QUFDWCxVQUFPLEtBQUtBLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJRLFVBQTdCLEVBQVA7QUFDQTs7OzhCQUVVO0FBQ1YsVUFBTyxLQUFLVixJQUFMLENBQVVDLFlBQVYsQ0FBdUJDLEtBQXZCLENBQTZCUyxTQUE3QixFQUFQO0FBQ0E7OzsrQkFFVztBQUNYLFVBQU8sS0FBS1gsSUFBTCxDQUFVQyxZQUFWLENBQXVCQyxLQUF2QixDQUE2QlUsVUFBN0IsRUFBUDtBQUNBOzs7OEJBRVU7QUFDVixVQUFPLEtBQUtaLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJXLFNBQTdCLEVBQVA7QUFDQTs7O3NCQTNCZ0I7QUFBQyxVQUFPLE1BQVA7QUFBYzs7O0VBRENDLFFBQVEsVUFBUixDOztrQkFBYmYsSSIsImZpbGUiOiJjZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSBcIi4vc3R5bGUvdGFibGVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2VsbCBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdjZWxsJ31cclxuXHRcclxuXHRwYXJzZSgpe1xyXG5cdFx0dGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5wdXNoQ2VsbCh0aGlzKVxyXG5cdFx0c3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy53RG9jLnBhcnNlQ29udGV4dC50YWJsZS5wb3BDZWxsKHRoaXMpXHJcblx0fVxyXG5cdFxyXG5cdGdldERpcmVjdFN0eWxlKHByKXtcclxuXHRcdHJldHVybiAocHI9dGhpcy53WG1sLiQxKCc+dGNQcicpKVxyXG5cdFx0XHQmJiBuZXcgVGFibGVTdHlsZS5DZWxsUHJvcGVydGllcyhwcix0aGlzLndEb2MsdGhpcylcclxuXHR9XHJcblx0XHJcblx0aXNGaXJzdFJvdygpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5wYXJzZUNvbnRleHQudGFibGUuaXNGaXJzdFJvdygpXHJcblx0fVxyXG5cdFxyXG5cdGlzTGFzdFJvdygpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5wYXJzZUNvbnRleHQudGFibGUuaXNMYXN0Um93KClcclxuXHR9XHJcblx0XHJcblx0aXNGaXJzdENvbCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5wYXJzZUNvbnRleHQudGFibGUuaXNGaXJzdENvbCgpXHJcblx0fVxyXG5cdFxyXG5cdGlzTGFzdENvbCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5wYXJzZUNvbnRleHQudGFibGUuaXNMYXN0Q29sKClcclxuXHR9XHJcbn1cclxuIl19