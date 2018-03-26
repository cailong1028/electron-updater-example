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

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _table = require('./style/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Td = function (_Converter) {
	(0, _inherits3.default)(Td, _Converter);

	function Td() {
		(0, _classCallCheck3.default)(this, Td);
		return (0, _possibleConstructorReturn3.default)(this, (Td.__proto__ || (0, _getPrototypeOf2.default)(Td)).apply(this, arguments));
	}

	(0, _createClass3.default)(Td, [{
		key: 'convertStyle',
		value: function convertStyle(el) {
			(0, _get3.default)(Td.prototype.__proto__ || (0, _getPrototypeOf2.default)(Td.prototype), 'convertStyle', this).apply(this, arguments);
			var style = this.wordModel.getDirectStyle();
			style && style.parse([new this.constructor.Properties(el.style, this)]);
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'td';
		}
	}]);
	return Td;
}(_converter2.default);

exports.default = Td;

var Properties = function (_Style$CellProperties) {
	(0, _inherits3.default)(Properties, _Style$CellProperties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: 'tcBorders',
		value: function tcBorders(x) {
			x.left && (this.style.borderLeft = this._border(x.left));
			x.right && (this.style.borderRight = this._border(x.right));
			x.top && (this.style.borderTop = this._border(x.top));
			x.bottom && (this.style.borderBottom = this._border(x.bottom));
		}
	}, {
		key: 'cnfStyle',
		value: function cnfStyle(x) {
			var names = [],
			    PrioritiziedStyles = _table2.default.prototype.PrioritiziedStyles,
			    level = -1,
			    t;
			for (var i = 0; i < 12; i++) {
				if (x.charAt(i) == '1') {
					names.push(t = _table2.default.TableStyles[i]);
					if ((t = PrioritiziedStyles.indexOf(t)) > level) level = t;
				}
			}
			names.length && Td.addClass(this.parent.content, names.join(' '));
			for (var i = 0; i < level; i++) {
				this.parent.content.setAttribute('x' + i, 1);
			}
		}
	}]);
	return Properties;
}(_table2.default.CellProperties);

Td.Properties = Properties;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvdGQuanMiXSwibmFtZXMiOlsiVGQiLCJlbCIsImFyZ3VtZW50cyIsInN0eWxlIiwid29yZE1vZGVsIiwiZ2V0RGlyZWN0U3R5bGUiLCJwYXJzZSIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsIngiLCJsZWZ0IiwiYm9yZGVyTGVmdCIsIl9ib3JkZXIiLCJyaWdodCIsImJvcmRlclJpZ2h0IiwidG9wIiwiYm9yZGVyVG9wIiwiYm90dG9tIiwiYm9yZGVyQm90dG9tIiwibmFtZXMiLCJQcmlvcml0aXppZWRTdHlsZXMiLCJwcm90b3R5cGUiLCJsZXZlbCIsInQiLCJpIiwiY2hhckF0IiwicHVzaCIsIlRhYmxlU3R5bGVzIiwiaW5kZXhPZiIsImxlbmd0aCIsImFkZENsYXNzIiwicGFyZW50IiwiY29udGVudCIsImpvaW4iLCJzZXRBdHRyaWJ1dGUiLCJDZWxsUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7OytCQUdQQyxFLEVBQUc7QUFDZiwrSEFBc0JDLFNBQXRCO0FBQ0EsT0FBSUMsUUFBTSxLQUFLQyxTQUFMLENBQWVDLGNBQWYsRUFBVjtBQUNBRixZQUFTQSxNQUFNRyxLQUFOLENBQVksQ0FBQyxJQUFJLEtBQUtDLFdBQUwsQ0FBaUJDLFVBQXJCLENBQWdDUCxHQUFHRSxLQUFuQyxFQUF5QyxJQUF6QyxDQUFELENBQVosQ0FBVDtBQUNBOzs7c0JBTlE7QUFBQyxVQUFPLElBQVA7QUFBWTs7Ozs7a0JBREZILEU7O0lBV2ZRLFU7Ozs7Ozs7Ozs7NEJBQ0tDLEMsRUFBRTtBQUNYQSxLQUFFQyxJQUFGLEtBQVcsS0FBS1AsS0FBTCxDQUFXUSxVQUFYLEdBQXNCLEtBQUtDLE9BQUwsQ0FBYUgsRUFBRUMsSUFBZixDQUFqQztBQUNBRCxLQUFFSSxLQUFGLEtBQVksS0FBS1YsS0FBTCxDQUFXVyxXQUFYLEdBQXVCLEtBQUtGLE9BQUwsQ0FBYUgsRUFBRUksS0FBZixDQUFuQztBQUNBSixLQUFFTSxHQUFGLEtBQVUsS0FBS1osS0FBTCxDQUFXYSxTQUFYLEdBQXFCLEtBQUtKLE9BQUwsQ0FBYUgsRUFBRU0sR0FBZixDQUEvQjtBQUNBTixLQUFFUSxNQUFGLEtBQWEsS0FBS2QsS0FBTCxDQUFXZSxZQUFYLEdBQXdCLEtBQUtOLE9BQUwsQ0FBYUgsRUFBRVEsTUFBZixDQUFyQztBQUNBOzs7MkJBQ1FSLEMsRUFBRTtBQUNWLE9BQUlVLFFBQU0sRUFBVjtBQUFBLE9BQWNDLHFCQUFtQixnQkFBTUMsU0FBTixDQUFnQkQsa0JBQWpEO0FBQUEsT0FBcUVFLFFBQU0sQ0FBQyxDQUE1RTtBQUFBLE9BQStFQyxDQUEvRTtBQUNBLFFBQUksSUFBSUMsSUFBRSxDQUFWLEVBQVlBLElBQUUsRUFBZCxFQUFpQkEsR0FBakIsRUFBcUI7QUFDcEIsUUFBR2YsRUFBRWdCLE1BQUYsQ0FBU0QsQ0FBVCxLQUFhLEdBQWhCLEVBQW9CO0FBQ25CTCxXQUFNTyxJQUFOLENBQVdILElBQUUsZ0JBQU1JLFdBQU4sQ0FBa0JILENBQWxCLENBQWI7QUFDQSxTQUFHLENBQUNELElBQUVILG1CQUFtQlEsT0FBbkIsQ0FBMkJMLENBQTNCLENBQUgsSUFBa0NELEtBQXJDLEVBQ0NBLFFBQU1DLENBQU47QUFDRDtBQUNEO0FBQ0RKLFNBQU1VLE1BQU4sSUFBZ0I3QixHQUFHOEIsUUFBSCxDQUFZLEtBQUtDLE1BQUwsQ0FBWUMsT0FBeEIsRUFBZ0NiLE1BQU1jLElBQU4sQ0FBVyxHQUFYLENBQWhDLENBQWhCO0FBQ0EsUUFBSSxJQUFJVCxJQUFFLENBQVYsRUFBWUEsSUFBRUYsS0FBZCxFQUFvQkUsR0FBcEI7QUFDQyxTQUFLTyxNQUFMLENBQVlDLE9BQVosQ0FBb0JFLFlBQXBCLENBQWlDLE1BQUlWLENBQXJDLEVBQXVDLENBQXZDO0FBREQ7QUFFQTs7O0VBbkJ1QixnQkFBTVcsYzs7QUFzQi9CbkMsR0FBR1EsVUFBSCxHQUFjQSxVQUFkIiwiZmlsZSI6InRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnZlcnRlciBmcm9tICcuL2NvbnZlcnRlcidcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvdGFibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZCBleHRlbmRzIENvbnZlcnRlcntcclxuXHRnZXQgdGFnKCl7cmV0dXJuICd0ZCd9XHJcblx0XHJcblx0Y29udmVydFN0eWxlKGVsKXtcclxuXHRcdHN1cGVyLmNvbnZlcnRTdHlsZSguLi5hcmd1bWVudHMpXHJcblx0XHR2YXIgc3R5bGU9dGhpcy53b3JkTW9kZWwuZ2V0RGlyZWN0U3R5bGUoKVxyXG5cdFx0c3R5bGUgJiYgc3R5bGUucGFyc2UoW25ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXMoZWwuc3R5bGUsdGhpcyldKVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5DZWxsUHJvcGVydGllc3tcclxuXHR0Y0JvcmRlcnMoeCl7XHJcblx0XHR4LmxlZnQgJiYgKHRoaXMuc3R5bGUuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5sZWZ0KSlcclxuXHRcdHgucmlnaHQgJiYgKHRoaXMuc3R5bGUuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKVxyXG5cdFx0eC50b3AgJiYgKHRoaXMuc3R5bGUuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpXHJcblx0XHR4LmJvdHRvbSAmJiAodGhpcy5zdHlsZS5ib3JkZXJCb3R0b209dGhpcy5fYm9yZGVyKHguYm90dG9tKSlcclxuXHR9XHJcblx0Y25mU3R5bGUoeCl7XHJcblx0XHR2YXIgbmFtZXM9W10sIFByaW9yaXRpemllZFN0eWxlcz1TdHlsZS5wcm90b3R5cGUuUHJpb3JpdGl6aWVkU3R5bGVzLCBsZXZlbD0tMSwgdFxyXG5cdFx0Zm9yKHZhciBpPTA7aTwxMjtpKyspe1xyXG5cdFx0XHRpZih4LmNoYXJBdChpKT09JzEnKXtcclxuXHRcdFx0XHRuYW1lcy5wdXNoKHQ9U3R5bGUuVGFibGVTdHlsZXNbaV0pXHJcblx0XHRcdFx0aWYoKHQ9UHJpb3JpdGl6aWVkU3R5bGVzLmluZGV4T2YodCkpPmxldmVsKVxyXG5cdFx0XHRcdFx0bGV2ZWw9dFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRuYW1lcy5sZW5ndGggJiYgVGQuYWRkQ2xhc3ModGhpcy5wYXJlbnQuY29udGVudCxuYW1lcy5qb2luKCcgJykpO1xyXG5cdFx0Zm9yKHZhciBpPTA7aTxsZXZlbDtpKyspXHJcblx0XHRcdHRoaXMucGFyZW50LmNvbnRlbnQuc2V0QXR0cmlidXRlKCd4JytpLDEpXHJcblx0fVxyXG59XHJcblxyXG5UZC5Qcm9wZXJ0aWVzPVByb3BlcnRpZXNcclxuXHJcblxyXG5cclxuIl19