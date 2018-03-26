'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Style) {
	_inherits(Table, _Style);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'parse',
		value: function parse(factories) {
			_get(Table.prototype.__proto__ || Object.getPrototypeOf(Table.prototype), 'parse', this).apply(this, arguments);

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
	_inherits(Properties, _Style$Properties);

	function Properties() {
		_classCallCheck(this, Properties);

		return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	}

	_createClass(Properties, [{
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
	_inherits(RowProperties, _Style$Properties2);

	function RowProperties() {
		_classCallCheck(this, RowProperties);

		return _possibleConstructorReturn(this, (RowProperties.__proto__ || Object.getPrototypeOf(RowProperties)).apply(this, arguments));
	}

	_createClass(RowProperties, [{
		key: 'cnfStyle',
		value: function cnfStyle(x, t) {
			return Object.keys(t = this.asObject(x)).map(function (a) {
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
	_inherits(CellProperties, _Style$Properties3);

	function CellProperties() {
		_classCallCheck(this, CellProperties);

		return _possibleConstructorReturn(this, (CellProperties.__proto__ || Object.getPrototypeOf(CellProperties)).apply(this, arguments));
	}

	_createClass(CellProperties, [{
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
			return Object.keys(t = this.asObject(x)).map(function (a) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvdGFibGUuanMiXSwibmFtZXMiOlsiVGFibGUiLCJmYWN0b3JpZXMiLCJhcmd1bWVudHMiLCJUYWJsZVN0eWxlIiwiY29uc3RydWN0b3IiLCJzdHlsZXMiLCJ3WG1sIiwiJCIsImxlbiIsImxlbmd0aCIsImkiLCJtb2RlbCIsIndEb2MiLCJpZCIsInBhcnNlIiwiZiIsInZpc2l0b3JzIiwicHIiLCIkMSIsIlByb3BlcnRpZXMiLCJSb3dQcm9wZXJ0aWVzIiwiQ2VsbFByb3BlcnRpZXMiLCJhdHRyIiwieCIsInZhbHVlIiwiYm9yZGVycyIsImNoaWxkTm9kZXMiLCJib3JkZXIiLCJub2RlVHlwZSIsImxvY2FsTmFtZSIsImFzT2JqZWN0Iiwic3oiLCJjb2xvciIsImFzQ29sb3IiLCJ2IiwicHQyUHgiLCJhc1B0IiwicGFyc2VJbnQiLCJTdHlsZU5hbWVNYXAiLCJmaXJzdFJvdyIsImxhc3RSb3ciLCJmaXJzdENvbHVtbiIsImxhc3RDb2x1bW4iLCJvZGRWQmFuZCIsImV2ZW5WQmFuZCIsIm9kZEhCYW5kIiwiZXZlbkhCYW5kIiwiZmlyc3RSb3dGaXJzdENvbHVtbiIsImZpcnN0Um93TGFzdENvbHVtbiIsImxhc3RSb3dGaXJzdENvbHVtbiIsImxhc3RSb3dMYXN0Q29sdW1uIiwidCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJhIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7O3dCQUNkQyxTLEVBQVU7QUFDZix3R0FBZUMsU0FBZjs7QUFFQSxPQUFJQyxhQUFXLEtBQUtDLFdBQXBCO0FBQ0EsUUFBSSxJQUFJQyxTQUFPLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixDQUFZLFlBQVosQ0FBWCxFQUFzQ0MsTUFBSUgsT0FBT0ksTUFBakQsRUFBeURDLElBQUUsQ0FBL0QsRUFBaUVBLElB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QUFBQSxXQUFHSCxFQUFFSSxDQUFGLEtBQU0sR0FBTixJQUFhakIsYUFBYWlCLENBQWIsQ0FBaEI7QUFBQSxJQUFwQyxFQUFxRUMsTUFBckUsQ0FBNEU7QUFBQSxXQUFHRCxDQUFIO0FBQUEsSUFBNUUsQ0FBUDtBQUNBO0FBaEJGO0FBQUE7QUFBQSwyQkFpQlVoQyxDQWpCVixFQWlCWTtBQUNWLFVBQU9BLEVBQUVELElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDQTtBQW5CRjtBQUFBO0FBQUEsc0JBb0JrQjtBQUFDLFVBQU8sTUFBUDtBQUFjO0FBcEJqQzs7QUFBQTtBQUFBLEVBQWtELGdCQUFNSCxVQUF4RCIsImZpbGUiOiJ0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZSdcclxuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL3BhcmFncmFwaCdcclxuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgU3R5bGV7XHJcblx0cGFyc2UoZmFjdG9yaWVzKXtcclxuXHRcdHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cylcclxuXHJcblx0XHR2YXIgVGFibGVTdHlsZT10aGlzLmNvbnN0cnVjdG9yXHJcblx0XHRmb3IodmFyIHN0eWxlcz10aGlzLndYbWwuJCgndGJsU3R5bGVQcicpLCBsZW49c3R5bGVzLmxlbmd0aCwgaT0wO2k8bGVuO2krKyl7XHJcblx0XHRcdHZhciBtb2RlbD1uZXcgVGFibGVTdHlsZShzdHlsZXNbaV0sdGhpcy53RG9jLHRoaXMpXHJcblx0XHRcdG1vZGVsLmlkPXRoaXMuaWRcclxuXHRcdFx0bW9kZWwucGFyc2UoZmFjdG9yaWVzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKXtcclxuXHRcdHZhciBwcj1udWxsO1xyXG5cdFx0KHByPXRoaXMud1htbC4kMSgnPnRibFByOm5vdCg6ZW1wdHkpJykpICYmIG5ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcclxuXHRcdChwcj10aGlzLndYbWwuJDEoJz50clByOm5vdCg6ZW1wdHkpJykpICYmIG5ldyB0aGlzLmNvbnN0cnVjdG9yLlJvd1Byb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcclxuXHRcdChwcj10aGlzLndYbWwuJDEoJz50Y1ByOm5vdCg6ZW1wdHkpJykpICYmIG5ldyB0aGlzLmNvbnN0cnVjdG9yLkNlbGxQcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XHJcblx0XHQocHI9dGhpcy53WG1sLiQxKCc+cFByOm5vdCg6ZW1wdHkpJykpICYmIG5ldyBQYXJhZ3JhcGguUHJvcGVydGllcyhwcix0aGlzLndEb2MsdGhpcykucGFyc2UodmlzaXRvcnMpO1xyXG5cdFx0KHByPXRoaXMud1htbC4kMSgnPnJQcjpub3QoOmVtcHR5KScpKSAmJiBuZXcgSW5saW5lLlByb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcclxuXHR9XHJcblx0Z2V0VGFyZ2V0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy53WG1sLmF0dHIoJ3c6dHlwZScpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3N0eWxlLnRhYmxlJ31cclxufVxyXG5cclxuVGFibGUuUHJvcGVydGllcz1jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHR0YmxCb3JkZXJzKHgpe1xyXG5cdFx0dmFyIHZhbHVlPXt9O1xyXG5cdFx0Zm9yKHZhciBib3JkZXJzPXguY2hpbGROb2Rlcyxib3JkZXIsaT0wLGxlbj1ib3JkZXJzLmxlbmd0aDtpPGxlbjtpKyspe1xyXG5cdFx0XHRpZihib3JkZXJzW2ldLm5vZGVUeXBlIT09MSkgY29udGludWVcclxuXHRcdFx0Ym9yZGVyPXZhbHVlWyhib3JkZXI9Ym9yZGVyc1tpXSkubG9jYWxOYW1lXT10aGlzLmFzT2JqZWN0KGJvcmRlcilcclxuXHRcdFx0Ym9yZGVyLnN6ICYmIChib3JkZXIuc3o9Ym9yZGVyLnN6LzgpO1xyXG5cdFx0XHRib3JkZXIuY29sb3IgJiYgKGJvcmRlci5jb2xvcj10aGlzLmFzQ29sb3IoYm9yZGVyLmNvbG9yKSlcclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH1cclxuXHR0YmxDZWxsTWFyKHgpe1xyXG5cdFx0dmFyIHZhbHVlPXt9O1xyXG5cdFx0Zm9yKHZhciBib3JkZXJzPXguY2hpbGROb2RlcyxpPTAsbGVuPWJvcmRlcnMubGVuZ3RoLHY7aTxsZW47aSsrKVxyXG5cdFx0XHRib3JkZXJzW2ldLm5vZGVUeXBlPT0xICYmICh2YWx1ZVtib3JkZXJzW2ldLmxvY2FsTmFtZV09dGhpcy5wdDJQeCh0aGlzLmFzUHQoYm9yZGVyc1tpXS5hdHRyKCd3OncnKSkpKVxyXG5cdFx0cmV0dXJuIHZhbHVlXHJcblx0fVxyXG5cdHRibENlbGxTcGFjaW5nKHgpe1xyXG5cdFx0cmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp2YWwnKSkpXHJcblx0fVxyXG5cdHRibExvb2soeCl7XHJcblx0XHRyZXR1cm4gdGhpcy5hc09iamVjdCh4LGZ1bmN0aW9uKHgpe3JldHVybiBwYXJzZUludCh4KX0pXHJcblx0fVxyXG5cdHRibFN0eWxlUm93QmFuZFNpemUoeCl7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQoeC5hdHRyKCd3OnZhbCcpKVxyXG5cdH1cclxuXHR0YmxTdHlsZUNvbEJhbmRTaXplKHgpe1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KHguYXR0cigndzp2YWwnKSlcclxuXHR9XHJcblx0dGJsVyh4KXtcclxuXHRcdHN3aXRjaCh4LmF0dHIoJ3c6dHlwZScpKXtcclxuXHRcdGNhc2UgJ3BjdCc6XHJcblx0XHRcdHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dycpKSoyLzEwMCsnJSdcclxuXHRcdGNhc2UgJ2F1dG8nOlxyXG5cdFx0XHRyZXR1cm4gJ2F1dG8nXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCd3OncnKSkpXHJcblx0XHR9XHJcblx0fVxyXG5cdHRibEluZCh4KXtcclxuXHRcdHJldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ3c6dycpKSlcclxuXHR9XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICd0YWJsZSd9XHJcbn1cclxuXHJcbnZhciBTdHlsZU5hbWVNYXA9e1xyXG5cdGZpcnN0Um93OlwiZmlyc3RSb3dcIixcclxuXHRsYXN0Um93OlwibGFzdFJvd1wiLFxyXG5cdGZpcnN0Q29sdW1uOlwiZmlyc3RDb2xcIixcclxuXHRsYXN0Q29sdW1uOlwibGFzdENvbFwiLCBcclxuXHRvZGRWQmFuZDpcImJhbmQxVmVydFwiICxcclxuXHRldmVuVkJhbmQ6XCJiYW5kMlZlcnRcIiAsXHJcblx0b2RkSEJhbmQ6XCJiYW5kMUhvcnpcIiAsXHJcblx0ZXZlbkhCYW5kOlwiYmFuZDJIb3J6XCIgLFxyXG5cdGZpcnN0Um93Rmlyc3RDb2x1bW46XCJud0NlbGxcIiAsXHJcblx0Zmlyc3RSb3dMYXN0Q29sdW1uOlwibmVDZWxsXCIgLFxyXG5cdGxhc3RSb3dGaXJzdENvbHVtbjpcInN3Q2VsbFwiICxcclxuXHRsYXN0Um93TGFzdENvbHVtbjpcInNlQ2VsbFwiXHJcbn1cclxuXHJcblRhYmxlLlJvd1Byb3BlcnRpZXM9Y2xhc3MgUm93UHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XHJcblx0Y25mU3R5bGUoeCx0KXtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0PXRoaXMuYXNPYmplY3QoeCkpLm1hcChhPT50W2FdPT0nMScgJiYgU3R5bGVOYW1lTWFwW2FdKS5maWx0ZXIoYT0+YSlcclxuXHR9XHJcblx0dGJsQ2VsbFNwYWNpbmcoeCl7XHJcblx0XHRyZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKCd3OnZhbCcpKSlcclxuXHR9XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdyb3cnfVxyXG59XHJcblxyXG5UYWJsZS5DZWxsUHJvcGVydGllcz1jbGFzcyBDZWxsUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XHJcblx0dGNCb3JkZXJzKHgpe1xyXG5cdFx0dmFyIHZhbHVlPXt9O1xyXG5cdFx0Zm9yKHZhciBib3JkZXJzPXguY2hpbGROb2Rlcyxib3JkZXIsaT0wLGxlbj1ib3JkZXJzLmxlbmd0aDtpPGxlbjtpKyspe1xyXG5cdFx0XHRpZihib3JkZXJzW2ldLm5vZGVUeXBlIT09MSkgY29udGludWVcclxuXHRcdFx0Ym9yZGVyPXZhbHVlWyhib3JkZXI9Ym9yZGVyc1tpXSkubG9jYWxOYW1lXT10aGlzLmFzT2JqZWN0KGJvcmRlcilcclxuXHRcdFx0Ym9yZGVyLnN6ICYmIChib3JkZXIuc3o9Ym9yZGVyLnN6LzgpO1xyXG5cdFx0XHRib3JkZXIuY29sb3IgJiYgKGJvcmRlci5jb2xvcj10aGlzLmFzQ29sb3IoYm9yZGVyLmNvbG9yKSlcclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH1cclxuXHRzaGQoeCl7XHJcblx0XHRyZXR1cm4gdGhpcy5hc0NvbG9yKHguYXR0cigndzpmaWxsJykpXHJcblx0fVxyXG5cdGNuZlN0eWxlKHgsdCl7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModD10aGlzLmFzT2JqZWN0KHgpKS5tYXAoYT0+dFthXT09JzEnICYmIFN0eWxlTmFtZU1hcFthXSkuZmlsdGVyKGE9PmEpXHJcblx0fVxyXG5cdGdyaWRTcGFuKHgpe1xyXG5cdFx0cmV0dXJuIHguYXR0cigndzp2YWwnKVxyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2NlbGwnfVxyXG59XHJcbiJdfQ==