'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _drawing = require('./drawing');

var _drawing2 = _interopRequireDefault(_drawing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Graphic = function (_Drawing) {
	(0, _inherits3.default)(Graphic, _Drawing);

	function Graphic() {
		(0, _classCallCheck3.default)(this, Graphic);
		return (0, _possibleConstructorReturn3.default)(this, (Graphic.__proto__ || (0, _getPrototypeOf2.default)(Graphic)).apply(this, arguments));
	}

	(0, _createClass3.default)(Graphic, [{
		key: 'tag',
		get: function get() {
			return 'span';
		}
	}]);
	return Graphic;
}(_drawing2.default);

exports.default = Graphic;

var Properties = function (_Drawing$Properties) {
	(0, _inherits3.default)(Properties, _Drawing$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: 'solidFill',
		value: function solidFill(x) {
			this.style.backgroundColor = x;
		}
	}, {
		key: 'gradFill',
		value: function gradFill(x) {}
	}, {
		key: 'noFill',
		value: function noFill(x) {
			this.style.background = 'transparent';
		}
	}, {
		key: 'fillRef',
		value: function fillRef(x) {
			switch (typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x)) {
				case 'string':
					return this.solidFill(x);
				case 'object':
					return this.gradFill(x);
				case 'number':
					return this.noFill(x);
			}
		}
	}, {
		key: 'ln',
		value: function ln(x) {
			x.color && (this.style.borderColor = x.color);
			x.width && (this.style.borderWidth = x.width + 'px', this.style.borderStyle = 'solid');
			x.dash && (this.style.borderStyle = this.lineStyle(x.dash));
			x.cap === 'rnd' && (this.style.borderRadius = x.width * 2 + 'px');
		}
	}, {
		key: 'xfrm',
		value: function xfrm(x) {
			this.style.width = x.width + 'px';
			this.style.height = x.height + 'px';
			x.x && (this.style.left = x.x + 'px');
			x.y && (this.style.top = x.y + 'px');
		}
	}]);
	return Properties;
}(_drawing2.default.Properties);

Graphic.Properties = Properties;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvZ3JhcGhpYy5qcyJdLCJuYW1lcyI6WyJHcmFwaGljIiwiUHJvcGVydGllcyIsIngiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJzb2xpZEZpbGwiLCJncmFkRmlsbCIsIm5vRmlsbCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJ3aWR0aCIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJkYXNoIiwibGluZVN0eWxlIiwiY2FwIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibGVmdCIsInkiLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7c0JBQ1g7QUFBQyxVQUFPLE1BQVA7QUFBYzs7Ozs7a0JBREpBLE87O0lBSWZDLFU7Ozs7Ozs7Ozs7NEJBQ0tDLEMsRUFBRTtBQUNYLFFBQUtDLEtBQUwsQ0FBV0MsZUFBWCxHQUEyQkYsQ0FBM0I7QUFDQTs7OzJCQUNRQSxDLEVBQUUsQ0FFVjs7O3lCQUNNQSxDLEVBQUU7QUFDUixRQUFLQyxLQUFMLENBQVdFLFVBQVgsR0FBc0IsYUFBdEI7QUFDQTs7OzBCQUNPSCxDLEVBQUU7QUFDVCxrQkFBY0EsQ0FBZCx1REFBY0EsQ0FBZDtBQUNBLFNBQUssUUFBTDtBQUNDLFlBQU8sS0FBS0ksU0FBTCxDQUFlSixDQUFmLENBQVA7QUFDRCxTQUFLLFFBQUw7QUFDQyxZQUFPLEtBQUtLLFFBQUwsQ0FBY0wsQ0FBZCxDQUFQO0FBQ0QsU0FBSyxRQUFMO0FBQ0MsWUFBTyxLQUFLTSxNQUFMLENBQVlOLENBQVosQ0FBUDtBQU5EO0FBUUE7OztxQkFDRUEsQyxFQUFFO0FBQ0pBLEtBQUVPLEtBQUYsS0FBWSxLQUFLTixLQUFMLENBQVdPLFdBQVgsR0FBdUJSLEVBQUVPLEtBQXJDO0FBQ0FQLEtBQUVTLEtBQUYsS0FBWSxLQUFLUixLQUFMLENBQVdTLFdBQVgsR0FBdUJWLEVBQUVTLEtBQUYsR0FBUSxJQUEvQixFQUFxQyxLQUFLUixLQUFMLENBQVdVLFdBQVgsR0FBdUIsT0FBeEU7QUFDQVgsS0FBRVksSUFBRixLQUFXLEtBQUtYLEtBQUwsQ0FBV1UsV0FBWCxHQUF1QixLQUFLRSxTQUFMLENBQWViLEVBQUVZLElBQWpCLENBQWxDO0FBQ0FaLEtBQUVjLEdBQUYsS0FBUSxLQUFSLEtBQWtCLEtBQUtiLEtBQUwsQ0FBV2MsWUFBWCxHQUF3QmYsRUFBRVMsS0FBRixHQUFRLENBQVIsR0FBVSxJQUFwRDtBQUNBOzs7dUJBQ0lULEMsRUFBRTtBQUNOLFFBQUtDLEtBQUwsQ0FBV1EsS0FBWCxHQUFpQlQsRUFBRVMsS0FBRixHQUFRLElBQXpCO0FBQ0EsUUFBS1IsS0FBTCxDQUFXZSxNQUFYLEdBQWtCaEIsRUFBRWdCLE1BQUYsR0FBUyxJQUEzQjtBQUNBaEIsS0FBRUEsQ0FBRixLQUFRLEtBQUtDLEtBQUwsQ0FBV2dCLElBQVgsR0FBZ0JqQixFQUFFQSxDQUFGLEdBQUksSUFBNUI7QUFDQUEsS0FBRWtCLENBQUYsS0FBUSxLQUFLakIsS0FBTCxDQUFXa0IsR0FBWCxHQUFlbkIsRUFBRWtCLENBQUYsR0FBSSxJQUEzQjtBQUNBOzs7RUEvQnVCLGtCQUFRbkIsVTs7QUFrQ2pDRCxRQUFRQyxVQUFSLEdBQW1CQSxVQUFuQiIsImZpbGUiOiJncmFwaGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJ1x0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljIGV4dGVuZHMgRHJhd2luZ3tcclxuXHRnZXQgdGFnKCl7cmV0dXJuICdzcGFuJ31cclxufVxyXG5cclxuY2xhc3MgUHJvcGVydGllcyBleHRlbmRzIERyYXdpbmcuUHJvcGVydGllc3tcclxuXHRzb2xpZEZpbGwoeCl7XHJcblx0XHR0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj14XHJcblx0fVxyXG5cdGdyYWRGaWxsKHgpe1xyXG5cdFx0XHJcblx0fVxyXG5cdG5vRmlsbCh4KXtcclxuXHRcdHRoaXMuc3R5bGUuYmFja2dyb3VuZD0ndHJhbnNwYXJlbnQnXHJcblx0fVxyXG5cdGZpbGxSZWYoeCl7XHJcblx0XHRzd2l0Y2godHlwZW9mKHgpKXtcclxuXHRcdGNhc2UgJ3N0cmluZyc6XHJcblx0XHRcdHJldHVybiB0aGlzLnNvbGlkRmlsbCh4KVxyXG5cdFx0Y2FzZSAnb2JqZWN0JzpcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JhZEZpbGwoeClcclxuXHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdHJldHVybiB0aGlzLm5vRmlsbCh4KVxyXG5cdFx0fVxyXG5cdH1cclxuXHRsbih4KXtcclxuXHRcdHguY29sb3IgJiYgKHRoaXMuc3R5bGUuYm9yZGVyQ29sb3I9eC5jb2xvcik7XHJcblx0XHR4LndpZHRoICYmICh0aGlzLnN0eWxlLmJvcmRlcldpZHRoPXgud2lkdGgrJ3B4JywgdGhpcy5zdHlsZS5ib3JkZXJTdHlsZT0nc29saWQnKTtcclxuXHRcdHguZGFzaCAmJiAodGhpcy5zdHlsZS5ib3JkZXJTdHlsZT10aGlzLmxpbmVTdHlsZSh4LmRhc2gpKTtcclxuXHRcdHguY2FwPT09J3JuZCcgJiYgKHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzPXgud2lkdGgqMisncHgnKVxyXG5cdH1cclxuXHR4ZnJtKHgpe1xyXG5cdFx0dGhpcy5zdHlsZS53aWR0aD14LndpZHRoKydweCdcclxuXHRcdHRoaXMuc3R5bGUuaGVpZ2h0PXguaGVpZ2h0KydweCdcclxuXHRcdHgueCAmJiAodGhpcy5zdHlsZS5sZWZ0PXgueCsncHgnKVxyXG5cdFx0eC55ICYmICh0aGlzLnN0eWxlLnRvcD14LnkrJ3B4JylcclxuXHR9XHJcbn1cclxuXHJcbkdyYXBoaWMuUHJvcGVydGllcz1Qcm9wZXJ0aWVzIl19