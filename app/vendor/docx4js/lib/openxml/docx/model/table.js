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

var table = function (_require) {
	(0, _inherits3.default)(table, _require);

	function table() {
		(0, _classCallCheck3.default)(this, table);
		return (0, _possibleConstructorReturn3.default)(this, (table.__proto__ || (0, _getPrototypeOf2.default)(table)).apply(this, arguments));
	}

	(0, _createClass3.default)(table, [{
		key: 'parse',
		value: function parse() {
			this.wDoc.parseContext.table.push(this);
			(0, _get3.default)(table.prototype.__proto__ || (0, _getPrototypeOf2.default)(table.prototype), 'parse', this).apply(this, arguments);
			this.wDoc.parseContext.table.pop(this);
		}
	}, {
		key: 'getStyleId',
		value: function getStyleId(a) {
			return this._val('>tblPr>tblStyle') || (a = this.wDoc.style.getDefault(_table2.default.type)) && a.id;
		}
	}, {
		key: 'getNamedStyle',
		value: function getNamedStyle() {
			return this.wDoc.style.get(this.getStyleId());
		}
	}, {
		key: 'getDirectStyle',
		value: function getDirectStyle(pr) {
			return (pr = this.wXml.$1('>tblPr')) && new _table2.default.Properties(pr, this.wDoc, this);
		}
	}, {
		key: 'getColWidth',
		value: function getColWidth() {
			var asPt = _table2.default.Properties.prototype.asPt;
			var pt2Px = _table2.default.Properties.prototype.pt2Px;
			var widths = [],
			    sum = 0;
			for (var cols = this.wXml.$('>tblGrid>gridCol'), len = cols.length, i = 0, a; i < len; i++) {
				widths.push(a = pt2Px(asPt(cols[i].attr('w:w'))));
				sum += a;
			}
			return { sum: sum, cols: widths };
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore(wXml) {
			return wXml.localName == 'tblPr' || wXml.localName == 'tblGrid';
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'table';
		}
	}]);
	return table;
}(require('../model'));

table.Context = function () {
	function _class(doc) {
		(0, _classCallCheck3.default)(this, _class);

		this.wDoc = doc;
		this._stack = [];
		this._current = null;
	}

	(0, _createClass3.default)(_class, [{
		key: 'push',
		value: function push(table) {
			this._stack.push(this._current = new TableContext(table));
		}
	}, {
		key: 'pushRow',
		value: function pushRow(row) {
			this._current.pushRow(row);
		}
	}, {
		key: 'pushCell',
		value: function pushCell(cell) {
			this._current.pushCell(cell);
		}
	}, {
		key: 'pop',
		value: function pop() {
			this._stack.pop();
		}
	}, {
		key: 'popRow',
		value: function popRow() {
			this._current.popRow();
		}
	}, {
		key: 'popCell',
		value: function popCell() {
			this._current.popCell();
		}
	}, {
		key: 'isFirstRow',
		value: function isFirstRow() {
			return this._current.isFirstRow();
		}
	}, {
		key: 'isLastRow',
		value: function isLastRow() {
			return this._current.isLastRow();
		}
	}, {
		key: 'isFirstCol',
		value: function isFirstCol() {
			return this._current.isFirstCol();
		}
	}, {
		key: 'isLastCol',
		value: function isLastCol() {
			return this._current.isLastCol();
		}
	}]);
	return _class;
}();

exports.default = table;

var TableContext = function () {
	function TableContext(converter) {
		(0, _classCallCheck3.default)(this, TableContext);

		this.rows = converter.wXml.$('tr').length; //@todo:nested table not work
		this.cols = converter.wXml.$('>tblGrid>gridCol').length;
		this.currentRow = 0;
		this.currentCell = 0;
	}

	(0, _createClass3.default)(TableContext, [{
		key: 'pushRow',
		value: function pushRow(row) {
			this.currentRow++;
		}
	}, {
		key: 'pushCell',
		value: function pushCell(cell) {
			this.currentCell++;
		}
	}, {
		key: 'popRow',
		value: function popRow(row) {
			this.currentCell = 0;
		}
	}, {
		key: 'popCell',
		value: function popCell(cell) {}
	}, {
		key: 'isFirstRow',
		value: function isFirstRow() {
			return this.currentRow == 1;
		}
	}, {
		key: 'isLastRow',
		value: function isLastRow() {
			return this.currentRow == this.rows;
		}
	}, {
		key: 'isFirstCol',
		value: function isFirstCol() {
			return this.currentCell == 1;
		}
	}, {
		key: 'isLastCol',
		value: function isLastCol() {
			return this.currentCell == this.cols;
		}
	}]);
	return TableContext;
}();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvdGFibGUuanMiXSwibmFtZXMiOlsidGFibGUiLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwicHVzaCIsImFyZ3VtZW50cyIsInBvcCIsImEiLCJfdmFsIiwic3R5bGUiLCJnZXREZWZhdWx0IiwidHlwZSIsImlkIiwiZ2V0IiwiZ2V0U3R5bGVJZCIsInByIiwid1htbCIsIiQxIiwiUHJvcGVydGllcyIsImFzUHQiLCJwcm90b3R5cGUiLCJwdDJQeCIsIndpZHRocyIsInN1bSIsImNvbHMiLCIkIiwibGVuIiwibGVuZ3RoIiwiaSIsImF0dHIiLCJsb2NhbE5hbWUiLCJyZXF1aXJlIiwiQ29udGV4dCIsImRvYyIsIl9zdGFjayIsIl9jdXJyZW50IiwiVGFibGVDb250ZXh0Iiwicm93IiwicHVzaFJvdyIsImNlbGwiLCJwdXNoQ2VsbCIsInBvcFJvdyIsInBvcENlbGwiLCJpc0ZpcnN0Um93IiwiaXNMYXN0Um93IiwiaXNGaXJzdENvbCIsImlzTGFzdENvbCIsImNvbnZlcnRlciIsInJvd3MiLCJjdXJyZW50Um93IiwiY3VycmVudENlbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFJcUJBLEs7Ozs7Ozs7Ozs7MEJBQ2I7QUFDTixRQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJGLEtBQXZCLENBQTZCRyxJQUE3QixDQUFrQyxJQUFsQztBQUNBLDhIQUFlQyxTQUFmO0FBQ0EsUUFBS0gsSUFBTCxDQUFVQyxZQUFWLENBQXVCRixLQUF2QixDQUE2QkssR0FBN0IsQ0FBaUMsSUFBakM7QUFDQTs7OzZCQUVVQyxDLEVBQUU7QUFDWixVQUFPLEtBQUtDLElBQUwsQ0FBVSxpQkFBVixLQUFpQyxDQUFDRCxJQUFFLEtBQUtMLElBQUwsQ0FBVU8sS0FBVixDQUFnQkMsVUFBaEIsQ0FBMkIsZ0JBQVdDLElBQXRDLENBQUgsS0FBbURKLEVBQUVLLEVBQTdG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LFdBQUwsR0FBaUIsQ0FBakI7QUFDQTs7OzswQkFDT2IsRyxFQUFJO0FBQ1gsUUFBS1ksVUFBTDtBQUNBOzs7MkJBRVFWLEksRUFBSztBQUNiLFFBQUtXLFdBQUw7QUFDQTs7O3lCQUVNYixHLEVBQUk7QUFDVixRQUFLYSxXQUFMLEdBQWlCLENBQWpCO0FBQ0E7OzswQkFFT1gsSSxFQUFLLENBRVo7OzsrQkFFVztBQUNYLFVBQU8sS0FBS1UsVUFBTCxJQUFpQixDQUF4QjtBQUNBOzs7OEJBRVU7QUFDVixVQUFPLEtBQUtBLFVBQUwsSUFBaUIsS0FBS0QsSUFBN0I7QUFDQTs7OytCQUVXO0FBQ1gsVUFBTyxLQUFLRSxXQUFMLElBQWtCLENBQXpCO0FBQ0E7Ozs4QkFFVTtBQUNWLFVBQU8sS0FBS0EsV0FBTCxJQUFrQixLQUFLMUIsSUFBOUI7QUFDQSIsImZpbGUiOiJ0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZVN0eWxlIGZyb20gXCIuL3N0eWxlL3RhYmxlXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFibGUgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXG5cdHBhcnNlKCl7XHJcblx0XHR0aGlzLndEb2MucGFyc2VDb250ZXh0LnRhYmxlLnB1c2godGhpcylcclxuXHRcdHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMud0RvYy5wYXJzZUNvbnRleHQudGFibGUucG9wKHRoaXMpXHJcblx0fVxyXG5cdFxyXG5cdGdldFN0eWxlSWQoYSl7XHJcblx0XHRyZXR1cm4gdGhpcy5fdmFsKCc+dGJsUHI+dGJsU3R5bGUnKSB8fCAoKGE9dGhpcy53RG9jLnN0eWxlLmdldERlZmF1bHQoVGFibGVTdHlsZS50eXBlKSkgJiYgYS5pZClcclxuXHR9XHJcblx0Z2V0TmFtZWRTdHlsZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQodGhpcy5nZXRTdHlsZUlkKCkpXHJcblx0fVxyXG5cdGdldERpcmVjdFN0eWxlKHByKXtcclxuXHRcdHJldHVybiAocHI9dGhpcy53WG1sLiQxKCc+dGJsUHInKSkgJiYgbmV3IFRhYmxlU3R5bGUuUHJvcGVydGllcyhwcix0aGlzLndEb2MsdGhpcylcclxuXHR9XHJcblx0Z2V0Q29sV2lkdGgoKXtcclxuXHRcdGxldCBhc1B0PVRhYmxlU3R5bGUuUHJvcGVydGllcy5wcm90b3R5cGUuYXNQdFxyXG5cdFx0bGV0IHB0MlB4PVRhYmxlU3R5bGUuUHJvcGVydGllcy5wcm90b3R5cGUucHQyUHhcclxuXHRcdHZhciB3aWR0aHM9W10sIHN1bT0wXHJcblx0XHRmb3IodmFyIGNvbHM9dGhpcy53WG1sLiQoJz50YmxHcmlkPmdyaWRDb2wnKSxsZW49Y29scy5sZW5ndGgsaT0wLGE7aTxsZW47aSsrKXtcclxuXHRcdFx0d2lkdGhzLnB1c2goYT1wdDJQeChhc1B0KGNvbHNbaV0uYXR0cigndzp3JykpKSlcclxuXHRcdFx0c3VtKz1hXHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge3N1bTpzdW0sIGNvbHM6d2lkdGhzfTtcclxuXHR9XHJcblx0X3Nob3VsZElnbm9yZSh3WG1sKXtcclxuXHRcdHJldHVybiB3WG1sLmxvY2FsTmFtZT09J3RibFByJ3x8d1htbC5sb2NhbE5hbWU9PSd0YmxHcmlkJ1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3RhYmxlJ31cclxuXHRcclxuXHRzdGF0aWMgQ29udGV4dD1jbGFzc3tcclxuXHRcdGNvbnN0cnVjdG9yKGRvYyl7XHJcblx0XHRcdHRoaXMud0RvYz1kb2NcclxuXHRcdFx0dGhpcy5fc3RhY2s9W11cclxuXHRcdFx0dGhpcy5fY3VycmVudD1udWxsXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1c2godGFibGUpe1xyXG5cdFx0XHR0aGlzLl9zdGFjay5wdXNoKHRoaXMuX2N1cnJlbnQ9bmV3IFRhYmxlQ29udGV4dCh0YWJsZSkpXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHB1c2hSb3cocm93KXtcclxuXHRcdFx0dGhpcy5fY3VycmVudC5wdXNoUm93KHJvdylcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cHVzaENlbGwoY2VsbCl7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnQucHVzaENlbGwoY2VsbClcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cG9wKCl7XHJcblx0XHRcdHRoaXMuX3N0YWNrLnBvcCgpXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHBvcFJvdygpe1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50LnBvcFJvdygpXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHBvcENlbGwoKXtcclxuXHRcdFx0dGhpcy5fY3VycmVudC5wb3BDZWxsKClcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aXNGaXJzdFJvdygpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fY3VycmVudC5pc0ZpcnN0Um93KClcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aXNMYXN0Um93KCl7XHJcblx0XHRcdHJldHVybiB0aGlzLl9jdXJyZW50LmlzTGFzdFJvdygpXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlzRmlyc3RDb2woKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQuaXNGaXJzdENvbCgpXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlzTGFzdENvbCgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fY3VycmVudC5pc0xhc3RDb2woKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgVGFibGVDb250ZXh0e1xyXG5cdGNvbnN0cnVjdG9yKGNvbnZlcnRlcil7XHJcblx0XHR0aGlzLnJvd3M9Y29udmVydGVyLndYbWwuJCgndHInKS5sZW5ndGgvL0B0b2RvOm5lc3RlZCB0YWJsZSBub3Qgd29ya1xyXG5cdFx0dGhpcy5jb2xzPWNvbnZlcnRlci53WG1sLiQoJz50YmxHcmlkPmdyaWRDb2wnKS5sZW5ndGhcclxuXHRcdHRoaXMuY3VycmVudFJvdz0wXHJcblx0XHR0aGlzLmN1cnJlbnRDZWxsPTBcclxuXHR9XHJcblx0cHVzaFJvdyhyb3cpe1xyXG5cdFx0dGhpcy5jdXJyZW50Um93KytcclxuXHR9XHJcblx0XHJcblx0cHVzaENlbGwoY2VsbCl7XHJcblx0XHR0aGlzLmN1cnJlbnRDZWxsKytcclxuXHR9XHJcblx0XHJcblx0cG9wUm93KHJvdyl7XHJcblx0XHR0aGlzLmN1cnJlbnRDZWxsPTBcclxuXHR9XHJcblx0XHJcblx0cG9wQ2VsbChjZWxsKXtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRpc0ZpcnN0Um93KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50Um93PT0xXHJcblx0fVxyXG5cdFxyXG5cdGlzTGFzdFJvdygpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFJvdz09dGhpcy5yb3dzXHJcblx0fVxyXG5cdFxyXG5cdGlzRmlyc3RDb2woKXtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRDZWxsPT0xXHJcblx0fVxyXG5cdFxyXG5cdGlzTGFzdENvbCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudENlbGw9PXRoaXMuY29sc1xyXG5cdH1cclxufVxyXG4iXX0=