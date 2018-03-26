'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function (_Style) {
	(0, _inherits3.default)(Table, _Style);

	function Table() {
		(0, _classCallCheck3.default)(this, Table);
		return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
	}

	(0, _createClass3.default)(Table, [{
		key: 'parse',
		value: function parse(factories) {
			(0, _get3.default)(Table.prototype.__proto__ || (0, _getPrototypeOf2.default)(Table.prototype), 'parse', this).apply(this, arguments);

			var TableStyle = this.constructor;
			for (var styles = this.wXml.$('tblStylePr'), len = styles.length, i = 0; i < len; i++) {
				var model = new TableStyle(styles[i], this.wDoc, this);
				model.id = this.id;
				model.parse(factories);
			}
		}
	}, {
		key: '_iterate',
		value: function _iterate(f, factories, visitors) {
			var pr = null;
			(pr = this.wXml.$1('>tblPr:not(:empty)')) && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);
			(pr = this.wXml.$1('>trPr:not(:empty)')) && new this.constructor.RowProperties(pr, this.wDoc, this).parse(visitors);
			(pr = this.wXml.$1('>tcPr:not(:empty)')) && new this.constructor.CellProperties(pr, this.wDoc, this).parse(visitors);
			(pr = this.wXml.$1('>pPr:not(:empty)')) && new _paragraph2.default.Properties(pr, this.wDoc, this).parse(visitors);
			(pr = this.wXml.$1('>rPr:not(:empty)')) && new _inline2.default.Properties(pr, this.wDoc, this).parse(visitors);
		}
	}, {
		key: 'getTarget',
		value: function getTarget() {
			return this.wXml.attr('w:type');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'style.table';
		}
	}]);
	return Table;
}(_style2.default);

exports.default = Table;


Table.Properties = function (_Style$Properties) {
	(0, _inherits3.default)(Properties, _Style$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: 'tblBorders',
		value: function tblBorders(x) {
			var value = {};
			for (var borders = x.childNodes, border, i = 0, len = borders.length; i < len; i++) {
				if (borders[i].nodeType !== 1) continue;
				border = value[(border = borders[i]).localName] = this.asObject(border);
				border.sz && (border.sz = border.sz / 8);
				border.color && (border.color = this.asColor(border.color));
			}
			return value;
		}
	}, {
		key: 'tblCellMar',
		value: function tblCellMar(x) {
			var value = {};
			for (var borders = x.childNodes, i = 0, len = borders.length, v; i < len; i++) {
				borders[i].nodeType == 1 && (value[borders[i].localName] = this.pt2Px(this.asPt(borders[i].attr('w:w'))));
			}return value;
		}
	}, {
		key: 'tblCellSpacing',
		value: function tblCellSpacing(x) {
			return this.pt2Px(this.asPt(x.attr('w:val')));
		}
	}, {
		key: 'tblLook',
		value: function tblLook(x) {
			return this.asObject(x, function (x) {
				return parseInt(x);
			});
		}
	}, {
		key: 'tblStyleRowBandSize',
		value: function tblStyleRowBandSize(x) {
			return parseInt(x.attr('w:val'));
		}
	}, {
		key: 'tblStyleColBandSize',
		value: function tblStyleColBandSize(x) {
			return parseInt(x.attr('w:val'));
		}
	}, {
		key: 'tblW',
		value: function tblW(x) {
			switch (x.attr('w:type')) {
				case 'pct':
					return parseInt(x.attr('w:w')) * 2 / 100 + '%';
				case 'auto':
					return 'auto';
				default:
					return this.pt2Px(this.asPt(x.attr('w:w')));
			}
		}
	}, {
		key: 'tblInd',
		value: function tblInd(x) {
			return this.pt2Px(this.asPt(x.attr('w:w')));
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'table';
		}
	}]);
	return Properties;
}(_style2.default.Properties);

var StyleNameMap = {
	firstRow: "firstRow",
	lastRow: "lastRow",
	firstColumn: "firstCol",
	lastColumn: "lastCol",
	oddVBand: "band1Vert",
	evenVBand: "band2Vert",
	oddHBand: "band1Horz",
	evenHBand: "band2Horz",
	firstRowFirstColumn: "nwCell",
	firstRowLastColumn: "neCell",
	lastRowFirstColumn: "swCell",
	lastRowLastColumn: "seCell"
};

Table.RowProperties = function (_Style$Properties2) {
	(0, _inherits3.default)(RowProperties, _Style$Properties2);

	function RowProperties() {
		(0, _classCallCheck3.default)(this, RowProperties);
		return (0, _possibleConstructorReturn3.default)(this, (RowProperties.__proto__ || (0, _getPrototypeOf2.default)(RowProperties)).apply(this, arguments));
	}

	(0, _createClass3.default)(RowProperties, [{
		key: 'cnfStyle',
		value: function cnfStyle(x, t) {
			return (0, _keys2.default)(t = this.asObject(x)).map(function (a) {
				return t[a] == '1' && StyleNameMap[a];
			}).filter(function (a) {
				return a;
			});
		}
	}, {
		key: 'tblCellSpacing',
		value: function tblCellSpacing(x) {
			return this.pt2Px(this.asPt(x.attr('w:val')));
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'row';
		}
	}]);
	return RowProperties;
}(_style2.default.Properties);

Table.CellProperties = function (_Style$Properties3) {
	(0, _inherits3.default)(CellProperties, _Style$Properties3);

	function CellProperties() {
		(0, _classCallCheck3.default)(this, CellProperties);
		return (0, _possibleConstructorReturn3.default)(this, (CellProperties.__proto__ || (0, _getPrototypeOf2.default)(CellProperties)).apply(this, arguments));
	}

	(0, _createClass3.default)(CellProperties, [{
		key: 'tcBorders',
		value: function tcBorders(x) {
			var value = {};
			for (var borders = x.childNodes, border, i = 0, len = borders.length; i < len; i++) {
				if (borders[i].nodeType !== 1) continue;
				border = value[(border = borders[i]).localName] = this.asObject(border);
				border.sz && (border.sz = border.sz / 8);
				border.color && (border.color = this.asColor(border.color));
			}
			return value;
		}
	}, {
		key: 'shd',
		value: function shd(x) {
			return this.asColor(x.attr('w:fill'));
		}
	}, {
		key: 'cnfStyle',
		value: function cnfStyle(x, t) {
			return (0, _keys2.default)(t = this.asObject(x)).map(function (a) {
				return t[a] == '1' && StyleNameMap[a];
			}).filter(function (a) {
				return a;
			});
		}
	}, {
		key: 'gridSpan',
		value: function gridSpan(x) {
			return x.attr('w:val');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'cell';
		}
	}]);
	return CellProperties;
}(_style2.default.Properties);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvdGFibGUuanMiXSwibmFtZXMiOlsiVGFibGUiLCJmYWN0b3JpZXMiLCJhcmd1bWVudHMiLCJUYWJsZVN0eWxlIiwiY29uc3RydWN0b3IiLCJzdHlsZXMiLCJ3WG1sIiwiJCIsImxlbiIsImxlbmd0aCIsImkiLCJtb2RlbCIsIndEb2MiLCJpZCIsInBhcnNlIiwiZiIsInZpc2l0b3JzIiwicHIiLCIkMSIsIlByb3BlcnRpZXMiLCJSb3dQcm9wZXJ0aWVzIiwiQ2VsbFByb3BlcnRpZXMiLCJhdHRyIiwieCIsInZhbHVlIiwiYm9yZGVycyIsImNoaWxkTm9kZXMiLCJib3JkZXIiLCJub2RlVHlwZSIsImxvY2FsTmFtZSIsImFzT2JqZWN0Iiwic3oiLCJjb2xvciIsImFzQ29sb3IiLCJ2IiwicHQyUHgiLCJhc1B0IiwicGFyc2VJbnQiLCJTdHlsZU5hbWVNYXAiLCJmaXJzdFJvdyIsImxhc3RSb3ciLCJmaXJzdENvbHVtbiIsImxhc3RDb2x1bW4iLCJvZGRWQmFuZCIsImV2ZW5WQmFuZCIsIm9kZEhCYW5kIiwiZXZlbkhCYW5kIiwiZmlyc3RSb3dGaXJzdENvbHVtbiIsImZpcnN0Um93TGFzdENvbHVtbiIsImxhc3RSb3dGaXJzdENvbHVtbiIsImxhc3RSb3dMYXN0Q29sdW1uIiwidCIsIm1hcCIsImEiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozt3QkFDZEMsUyxFQUFVO0FBQ2YsOEhBQWVDLFNBQWY7O0FBRUEsT0FBSUMsYUFBVyxLQUFLQyxXQUFwQjtBQUNBLFFBQUksSUFBSUMsU0FBTyxLQUFLQyxJQUFMLENBQVVDLENBQVYsQ0FBWSxZQUFaLENBQVgsRUFBc0NDLE1BQUlILE9BQU9JLE1BQWpELEVBQXlEQyxJQUFFLENBQS9ELEVBQWlFQSxJ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QU4sSUFBYWYsYUFBYWUsQ0FBYixDQUFoQjtBQUFBLElBQXBDLEVBQXFFQyxNQUFyRSxDQUE0RTtBQUFBLFdBQUdELENBQUg7QUFBQSxJQUE1RSxDQUFQO0FBQ0E7QUFoQkY7QUFBQTtBQUFBLDJCQWlCVTlCLENBakJWLEVBaUJZO0FBQ1YsVUFBT0EsRUFBRUQsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNBO0FBbkJGO0FBQUE7QUFBQSxzQkFvQmtCO0FBQUMsVUFBTyxNQUFQO0FBQWM7QUFwQmpDO0FBQUE7QUFBQSxFQUFrRCxnQkFBTUgsVUFBeEQiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnXHJcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9wYXJhZ3JhcGgnXHJcbmltcG9ydCBJbmxpbmUgZnJvbSAnLi9pbmxpbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFN0eWxle1xyXG5cdHBhcnNlKGZhY3Rvcmllcyl7XHJcblx0XHRzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpXHJcblxyXG5cdFx0dmFyIFRhYmxlU3R5bGU9dGhpcy5jb25zdHJ1Y3RvclxyXG5cdFx0Zm9yKHZhciBzdHlsZXM9dGhpcy53WG1sLiQoJ3RibFN0eWxlUHInKSwgbGVuPXN0eWxlcy5sZW5ndGgsIGk9MDtpPGxlbjtpKyspe1xyXG5cdFx0XHR2YXIgbW9kZWw9bmV3IFRhYmxlU3R5bGUoc3R5bGVzW2ldLHRoaXMud0RvYyx0aGlzKVxyXG5cdFx0XHRtb2RlbC5pZD10aGlzLmlkXHJcblx0XHRcdG1vZGVsLnBhcnNlKGZhY3RvcmllcylcclxuXHRcdH1cclxuXHR9XHJcblx0X2l0ZXJhdGUoZiwgZmFjdG9yaWVzLCB2aXNpdG9ycyl7XHJcblx0XHR2YXIgcHI9bnVsbDtcclxuXHRcdChwcj10aGlzLndYbWwuJDEoJz50YmxQcjpub3QoOmVtcHR5KScpKSAmJiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XHJcblx0XHQocHI9dGhpcy53WG1sLiQxKCc+dHJQcjpub3QoOmVtcHR5KScpKSAmJiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5Sb3dQcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XHJcblx0XHQocHI9dGhpcy53WG1sLiQxKCc+dGNQcjpub3QoOmVtcHR5KScpKSAmJiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5DZWxsUHJvcGVydGllcyhwcix0aGlzLndEb2MsdGhpcykucGFyc2UodmlzaXRvcnMpO1xyXG5cdFx0KHByPXRoaXMud1htbC4kMSgnPnBQcjpub3QoOmVtcHR5KScpKSAmJiBuZXcgUGFyYWdyYXBoLlByb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcclxuXHRcdChwcj10aGlzLndYbWwuJDEoJz5yUHI6bm90KDplbXB0eSknKSkgJiYgbmV3IElubGluZS5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XHJcblx0fVxyXG5cdGdldFRhcmdldCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud1htbC5hdHRyKCd3OnR5cGUnKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdzdHlsZS50YWJsZSd9XHJcbn1cclxuXHJcblRhYmxlLlByb3BlcnRpZXM9Y2xhc3MgUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XHJcblx0dGJsQm9yZGVycyh4KXtcclxuXHRcdHZhciB2YWx1ZT17fTtcclxuXHRcdGZvcih2YXIgYm9yZGVycz14LmNoaWxkTm9kZXMsYm9yZGVyLGk9MCxsZW49Ym9yZGVycy5sZW5ndGg7aTxsZW47aSsrKXtcclxuXHRcdFx0aWYoYm9yZGVyc1tpXS5ub2RlVHlwZSE9PTEpIGNvbnRpbnVlXHJcblx0XHRcdGJvcmRlcj12YWx1ZVsoYm9yZGVyPWJvcmRlcnNbaV0pLmxvY2FsTmFtZV09dGhpcy5hc09iamVjdChib3JkZXIpXHJcblx0XHRcdGJvcmRlci5zeiAmJiAoYm9yZGVyLnN6PWJvcmRlci5zei84KTtcclxuXHRcdFx0Ym9yZGVyLmNvbG9yICYmIChib3JkZXIuY29sb3I9dGhpcy5hc0NvbG9yKGJvcmRlci5jb2xvcikpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblx0dGJsQ2VsbE1hcih4KXtcclxuXHRcdHZhciB2YWx1ZT17fTtcclxuXHRcdGZvcih2YXIgYm9yZGVycz14LmNoaWxkTm9kZXMsaT0wLGxlbj1ib3JkZXJzLmxlbmd0aCx2O2k8bGVuO2krKylcclxuXHRcdFx0Ym9yZGVyc1tpXS5ub2RlVHlwZT09MSAmJiAodmFsdWVbYm9yZGVyc1tpXS5sb2NhbE5hbWVdPXRoaXMucHQyUHgodGhpcy5hc1B0KGJvcmRlcnNbaV0uYXR0cigndzp3JykpKSlcclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH1cclxuXHR0YmxDZWxsU3BhY2luZyh4KXtcclxuXHRcdHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dmFsJykpKVxyXG5cdH1cclxuXHR0YmxMb29rKHgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuYXNPYmplY3QoeCxmdW5jdGlvbih4KXtyZXR1cm4gcGFyc2VJbnQoeCl9KVxyXG5cdH1cclxuXHR0YmxTdHlsZVJvd0JhbmRTaXplKHgpe1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KHguYXR0cigndzp2YWwnKSlcclxuXHR9XHJcblx0dGJsU3R5bGVDb2xCYW5kU2l6ZSh4KXtcclxuXHRcdHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpXHJcblx0fVxyXG5cdHRibFcoeCl7XHJcblx0XHRzd2l0Y2goeC5hdHRyKCd3OnR5cGUnKSl7XHJcblx0XHRjYXNlICdwY3QnOlxyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoeC5hdHRyKCd3OncnKSkqMi8xMDArJyUnXHJcblx0XHRjYXNlICdhdXRvJzpcclxuXHRcdFx0cmV0dXJuICdhdXRvJ1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp3JykpKVxyXG5cdFx0fVxyXG5cdH1cclxuXHR0YmxJbmQoeCl7XHJcblx0XHRyZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCd3OncnKSkpXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAndGFibGUnfVxyXG59XHJcblxyXG52YXIgU3R5bGVOYW1lTWFwPXtcclxuXHRmaXJzdFJvdzpcImZpcnN0Um93XCIsXHJcblx0bGFzdFJvdzpcImxhc3RSb3dcIixcclxuXHRmaXJzdENvbHVtbjpcImZpcnN0Q29sXCIsXHJcblx0bGFzdENvbHVtbjpcImxhc3RDb2xcIiwgXHJcblx0b2RkVkJhbmQ6XCJiYW5kMVZlcnRcIiAsXHJcblx0ZXZlblZCYW5kOlwiYmFuZDJWZXJ0XCIgLFxyXG5cdG9kZEhCYW5kOlwiYmFuZDFIb3J6XCIgLFxyXG5cdGV2ZW5IQmFuZDpcImJhbmQySG9yelwiICxcclxuXHRmaXJzdFJvd0ZpcnN0Q29sdW1uOlwibndDZWxsXCIgLFxyXG5cdGZpcnN0Um93TGFzdENvbHVtbjpcIm5lQ2VsbFwiICxcclxuXHRsYXN0Um93Rmlyc3RDb2x1bW46XCJzd0NlbGxcIiAsXHJcblx0bGFzdFJvd0xhc3RDb2x1bW46XCJzZUNlbGxcIlxyXG59XHJcblxyXG5UYWJsZS5Sb3dQcm9wZXJ0aWVzPWNsYXNzIFJvd1Byb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xyXG5cdGNuZlN0eWxlKHgsdCl7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModD10aGlzLmFzT2JqZWN0KHgpKS5tYXAoYT0+dFthXT09JzEnICYmIFN0eWxlTmFtZU1hcFthXSkuZmlsdGVyKGE9PmEpXHJcblx0fVxyXG5cdHRibENlbGxTcGFjaW5nKHgpe1xyXG5cdFx0cmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp2YWwnKSkpXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAncm93J31cclxufVxyXG5cclxuVGFibGUuQ2VsbFByb3BlcnRpZXM9Y2xhc3MgQ2VsbFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xyXG5cdHRjQm9yZGVycyh4KXtcclxuXHRcdHZhciB2YWx1ZT17fTtcclxuXHRcdGZvcih2YXIgYm9yZGVycz14LmNoaWxkTm9kZXMsYm9yZGVyLGk9MCxsZW49Ym9yZGVycy5sZW5ndGg7aTxsZW47aSsrKXtcclxuXHRcdFx0aWYoYm9yZGVyc1tpXS5ub2RlVHlwZSE9PTEpIGNvbnRpbnVlXHJcblx0XHRcdGJvcmRlcj12YWx1ZVsoYm9yZGVyPWJvcmRlcnNbaV0pLmxvY2FsTmFtZV09dGhpcy5hc09iamVjdChib3JkZXIpXHJcblx0XHRcdGJvcmRlci5zeiAmJiAoYm9yZGVyLnN6PWJvcmRlci5zei84KTtcclxuXHRcdFx0Ym9yZGVyLmNvbG9yICYmIChib3JkZXIuY29sb3I9dGhpcy5hc0NvbG9yKGJvcmRlci5jb2xvcikpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblx0c2hkKHgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuYXNDb2xvcih4LmF0dHIoJ3c6ZmlsbCcpKVxyXG5cdH1cclxuXHRjbmZTdHlsZSh4LHQpe1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHQ9dGhpcy5hc09iamVjdCh4KSkubWFwKGE9PnRbYV09PScxJyAmJiBTdHlsZU5hbWVNYXBbYV0pLmZpbHRlcihhPT5hKVxyXG5cdH1cclxuXHRncmlkU3Bhbih4KXtcclxuXHRcdHJldHVybiB4LmF0dHIoJ3c6dmFsJylcclxuXHR9XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdjZWxsJ31cclxufVxyXG4iXX0=