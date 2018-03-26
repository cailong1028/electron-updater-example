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

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inline = function (_Style) {
	(0, _inherits3.default)(Inline, _Style);

	function Inline() {
		(0, _classCallCheck3.default)(this, Inline);
		return (0, _possibleConstructorReturn3.default)(this, (Inline.__proto__ || (0, _getPrototypeOf2.default)(Inline)).apply(this, arguments));
	}

	(0, _createClass3.default)(Inline, [{
		key: '_iterate',
		value: function _iterate(f, factories, visitors) {
			var pr = this.wXml.$1('>rPr');
			pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'style.inline';
		}
	}]);
	return Inline;
}(_style2.default);

Inline.Properties = function (_Style$Properties) {
	(0, _inherits3.default)(_class, _Style$Properties);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);
		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: 'rFonts',
		value: function rFonts(x) {
			var t, ascii, asia;
			if (t = x.attr('w:ascii')) ascii = t;else if (t = x.attr('w:asciiTheme')) ascii = this.wDoc.getFontTheme().get(t);

			if (t = x.attr('w:eastAsia')) asia = t;else if (t = x.attr('w:eastAsiaTheme')) asia = this.wDoc.getFontTheme().get(t);
			if (ascii || asia) return { ascii: ascii, asia: asia };
		}
	}, {
		key: 'b',
		value: function b(x) {
			return this.asToggle(x);
		}
	}, {
		key: 'sz',
		value: function sz(x) {
			return this.pt2Px(parseFloat(x.attr('w:val')) / 2);
		}
	}, {
		key: 'color',
		value: function color(x) {
			return this.asColor(x.attr('w:val') || this.wDoc.getColorTheme().get(x.attr('w:themeColor')));
		}
	}, {
		key: 'i',
		value: function i(x) {
			return this.asToggle(x);
		}
	}, {
		key: 'vanish',
		value: function vanish(x) {
			return this.asToggle(x);
		}
	}, {
		key: 'u',
		value: function u(x) {
			return this.asObject(x);
		}
	}, {
		key: 'bdr',
		value: function bdr(x) {
			var border = this.asObject(x);
			border.sz && (border.sz = border.sz / 8);
			border.color && (border.color = this.asColor(border.color));
			return border;
		}
	}, {
		key: 'lang',
		value: function lang(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'vertAlign',
		value: function vertAlign(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'highlight',
		value: function highlight(x) {
			return this.asColor(x.attr('w:val'));
		}
	}, {
		key: 'kern',
		value: function kern(x) {
			//word spacing
			return parseInt(x.attr('w:val')) / 2;
		}
	}, {
		key: 'w',
		value: function w(x) {
			//char scale
			return parseInt(x.attr('w:val')) / 100.0;
		}
	}, {
		key: 'spacing',
		value: function spacing(x) {
			//char spacing
			return this.pt2Px(this.asPt(x.attr("w:val")));
		}
	}, {
		key: 'position',
		value: function position(x) {
			//baseline shift
			return this.pt2Px(this.asPt(x.attr("w:val")));
		}
	}, {
		key: 'smallCaps',
		value: function smallCaps() {
			return true;
		}
	}, {
		key: 'asToggle',
		value: function asToggle(x) {
			var val = x.attr('w:val');
			if (!val) {
				return -1;
			} else {
				return parseInt(val);
			}
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'inline';
		}
	}]);
	return _class;
}(_style2.default.Properties);

exports.default = Inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvaW5saW5lLmpzIl0sIm5hbWVzIjpbIklubGluZSIsImYiLCJmYWN0b3JpZXMiLCJ2aXNpdG9ycyIsInByIiwid1htbCIsIiQxIiwiY29uc3RydWN0b3IiLCJQcm9wZXJ0aWVzIiwid0RvYyIsInBhcnNlIiwieCIsInQiLCJhc2NpaSIsImFzaWEiLCJhdHRyIiwiZ2V0Rm9udFRoZW1lIiwiZ2V0IiwiYXNUb2dnbGUiLCJwdDJQeCIsInBhcnNlRmxvYXQiLCJhc0NvbG9yIiwiZ2V0Q29sb3JUaGVtZSIsImFzT2JqZWN0IiwiYm9yZGVyIiwic3oiLCJjb2xvciIsInBhcnNlSW50IiwiYXNQdCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7OzJCQUdYQyxDLEVBQUVDLFMsRUFBVUMsUSxFQUFTO0FBQzdCLE9BQUlDLEtBQUcsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFQO0FBQ0FGLFNBQU0sSUFBSSxLQUFLRyxXQUFMLENBQWlCQyxVQUFyQixDQUFnQ0osRUFBaEMsRUFBbUMsS0FBS0ssSUFBeEMsRUFBNkMsSUFBN0MsRUFBbURDLEtBQW5ELENBQXlEUCxRQUF6RCxDQUFOO0FBQ0E7OztzQkFMZ0I7QUFBQyxVQUFPLGNBQVA7QUFBc0I7Ozs7O0FBRHBCSCxNLENBUWJRLFU7Ozs7Ozs7Ozs7eUJBR0NHLEMsRUFBRTtBQUNSLE9BQUlDLENBQUosRUFBT0MsS0FBUCxFQUFjQyxJQUFkO0FBQ0EsT0FBR0YsSUFBRUQsRUFBRUksSUFBRixDQUFPLFNBQVAsQ0FBTCxFQUNDRixRQUFNRCxDQUFOLENBREQsS0FFSyxJQUFHQSxJQUFFRCxFQUFFSSxJQUFGLENBQU8sY0FBUCxDQUFMLEVBQ0pGLFFBQU0sS0FBS0osSUFBTCxDQUFVTyxZQUFWLEdBQXlCQyxHQUF6QixDQUE2QkwsQ0FBN0IsQ0FBTjs7QUFFRCxPQUFHQSxJQUFFRCxFQUFFSSxJQUFGLENBQU8sWUFBUCxDQUFMLEVBQ0NELE9BQUtGLENBQUwsQ0FERCxLQUVLLElBQUdBLElBQUVELEVBQUVJLElBQUYsQ0FBTyxpQkFBUCxDQUFMLEVBQ0pELE9BQUssS0FBS0wsSUFBTCxDQUFVTyxZQUFWLEdBQXlCQyxHQUF6QixDQUE2QkwsQ0FBN0IsQ0FBTDtBQUNELE9BQUdDLFNBQVNDLElBQVosRUFDQyxPQUFPLEVBQUNELFlBQUQsRUFBUUMsVUFBUixFQUFQO0FBQ0Q7OztvQkFDQ0gsQyxFQUFFO0FBQ0gsVUFBTyxLQUFLTyxRQUFMLENBQWNQLENBQWQsQ0FBUDtBQUNBOzs7cUJBQ0VBLEMsRUFBRTtBQUNKLFVBQU8sS0FBS1EsS0FBTCxDQUFXQyxXQUFXVCxFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFYLElBQTRCLENBQXZDLENBQVA7QUFDQTs7O3dCQUNLSixDLEVBQUU7QUFDUCxVQUFPLEtBQUtVLE9BQUwsQ0FBY1YsRUFBRUksSUFBRixDQUFPLE9BQVAsS0FBbUIsS0FBS04sSUFBTCxDQUFVYSxhQUFWLEdBQTBCTCxHQUExQixDQUE4Qk4sRUFBRUksSUFBRixDQUFPLGNBQVAsQ0FBOUIsQ0FBakMsQ0FBUDtBQUNBOzs7b0JBQ0NKLEMsRUFBRTtBQUNILFVBQU8sS0FBS08sUUFBTCxDQUFjUCxDQUFkLENBQVA7QUFDQTs7O3lCQUNNQSxDLEVBQUU7QUFDUixVQUFPLEtBQUtPLFFBQUwsQ0FBY1AsQ0FBZCxDQUFQO0FBQ0E7OztvQkFDQ0EsQyxFQUFFO0FBQ0gsVUFBTyxLQUFLWSxRQUFMLENBQWNaLENBQWQsQ0FBUDtBQUNBOzs7c0JBQ0dBLEMsRUFBRTtBQUNMLE9BQUlhLFNBQU8sS0FBS0QsUUFBTCxDQUFjWixDQUFkLENBQVg7QUFDQWEsVUFBT0MsRUFBUCxLQUFjRCxPQUFPQyxFQUFQLEdBQVVELE9BQU9DLEVBQVAsR0FBVSxDQUFsQztBQUNBRCxVQUFPRSxLQUFQLEtBQWlCRixPQUFPRSxLQUFQLEdBQWEsS0FBS0wsT0FBTCxDQUFhRyxPQUFPRSxLQUFwQixDQUE5QjtBQUNBLFVBQU9GLE1BQVA7QUFDQTs7O3VCQUNJYixDLEVBQUU7QUFDTixVQUFPQSxFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFQO0FBQ0E7Ozs0QkFDU0osQyxFQUFFO0FBQ1gsVUFBT0EsRUFBRUksSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNBOzs7NEJBQ1NKLEMsRUFBRTtBQUNYLFVBQU8sS0FBS1UsT0FBTCxDQUFhVixFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFiLENBQVA7QUFDQTs7O3VCQUVJSixDLEVBQUU7QUFBQztBQUNQLFVBQU9nQixTQUFTaEIsRUFBRUksSUFBRixDQUFPLE9BQVAsQ0FBVCxJQUEwQixDQUFqQztBQUNBOzs7b0JBRUNKLEMsRUFBRTtBQUFDO0FBQ0osVUFBT2dCLFNBQVNoQixFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFULElBQTBCLEtBQWpDO0FBQ0E7OzswQkFFT0osQyxFQUFFO0FBQUM7QUFDVixVQUFPLEtBQUtRLEtBQUwsQ0FBVyxLQUFLUyxJQUFMLENBQVVqQixFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFWLENBQVgsQ0FBUDtBQUNBOzs7MkJBRVFKLEMsRUFBRTtBQUFDO0FBQ1gsVUFBTyxLQUFLUSxLQUFMLENBQVcsS0FBS1MsSUFBTCxDQUFVakIsRUFBRUksSUFBRixDQUFPLE9BQVAsQ0FBVixDQUFYLENBQVA7QUFDQTs7OzhCQUVVO0FBQ1YsVUFBTyxJQUFQO0FBQ0E7OzsyQkFFUUosQyxFQUFFO0FBQ1YsT0FBSWtCLE1BQUlsQixFQUFFSSxJQUFGLENBQU8sT0FBUCxDQUFSO0FBQ0EsT0FBRyxDQUFDYyxHQUFKLEVBQVE7QUFDUCxXQUFPLENBQUMsQ0FBUjtBQUNBLElBRkQsTUFFSztBQUNKLFdBQU9GLFNBQVNFLEdBQVQsQ0FBUDtBQUNBO0FBQ0Q7OztzQkE3RWdCO0FBQUMsVUFBTyxRQUFQO0FBQWdCOzs7RUFESCxnQkFBTXJCLFU7O2tCQVJsQlIsTSIsImZpbGUiOiJpbmxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi4vc3R5bGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmUgZXh0ZW5kcyBTdHlsZXtcclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3N0eWxlLmlubGluZSd9XHJcblxyXG5cdF9pdGVyYXRlKGYsZmFjdG9yaWVzLHZpc2l0b3JzKXtcclxuXHRcdHZhciBwcj10aGlzLndYbWwuJDEoJz5yUHInKVxyXG5cdFx0cHIgJiYgbmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyhwcix0aGlzLndEb2MsdGhpcykucGFyc2UodmlzaXRvcnMpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgUHJvcGVydGllcz1jbGFzcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XHJcblx0XHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2lubGluZSd9XHJcblxyXG5cdFx0ckZvbnRzKHgpe1xyXG5cdFx0XHR2YXIgdCwgYXNjaWksIGFzaWFcclxuXHRcdFx0aWYodD14LmF0dHIoJ3c6YXNjaWknKSlcclxuXHRcdFx0XHRhc2NpaT10XHJcblx0XHRcdGVsc2UgaWYodD14LmF0dHIoJ3c6YXNjaWlUaGVtZScpKVxyXG5cdFx0XHRcdGFzY2lpPXRoaXMud0RvYy5nZXRGb250VGhlbWUoKS5nZXQodClcclxuXHJcblx0XHRcdGlmKHQ9eC5hdHRyKCd3OmVhc3RBc2lhJykpXHJcblx0XHRcdFx0YXNpYT10XHJcblx0XHRcdGVsc2UgaWYodD14LmF0dHIoJ3c6ZWFzdEFzaWFUaGVtZScpKVxyXG5cdFx0XHRcdGFzaWE9dGhpcy53RG9jLmdldEZvbnRUaGVtZSgpLmdldCh0KVxyXG5cdFx0XHRpZihhc2NpaSB8fCBhc2lhKVxyXG5cdFx0XHRcdHJldHVybiB7YXNjaWksIGFzaWF9XHJcblx0XHR9XHJcblx0XHRiKHgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hc1RvZ2dsZSh4KVxyXG5cdFx0fVxyXG5cdFx0c3ooeCl7XHJcblx0XHRcdHJldHVybiB0aGlzLnB0MlB4KHBhcnNlRmxvYXQoeC5hdHRyKCd3OnZhbCcpKS8yKVxyXG5cdFx0fVxyXG5cdFx0Y29sb3IoeCl7XHJcblx0XHRcdHJldHVybiB0aGlzLmFzQ29sb3IoKHguYXR0cigndzp2YWwnKSB8fCB0aGlzLndEb2MuZ2V0Q29sb3JUaGVtZSgpLmdldCh4LmF0dHIoJ3c6dGhlbWVDb2xvcicpKSkpXHJcblx0XHR9XHJcblx0XHRpKHgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hc1RvZ2dsZSh4KVxyXG5cdFx0fVxyXG5cdFx0dmFuaXNoKHgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hc1RvZ2dsZSh4KVxyXG5cdFx0fVxyXG5cdFx0dSh4KXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYXNPYmplY3QoeClcclxuXHRcdH1cclxuXHRcdGJkcih4KXtcclxuXHRcdFx0dmFyIGJvcmRlcj10aGlzLmFzT2JqZWN0KHgpXHJcblx0XHRcdGJvcmRlci5zeiAmJiAoYm9yZGVyLnN6PWJvcmRlci5zei84KTtcclxuXHRcdFx0Ym9yZGVyLmNvbG9yICYmIChib3JkZXIuY29sb3I9dGhpcy5hc0NvbG9yKGJvcmRlci5jb2xvcikpXHJcblx0XHRcdHJldHVybiBib3JkZXJcclxuXHRcdH1cclxuXHRcdGxhbmcoeCl7XHJcblx0XHRcdHJldHVybiB4LmF0dHIoJ3c6dmFsJylcclxuXHRcdH1cclxuXHRcdHZlcnRBbGlnbih4KXtcclxuXHRcdFx0cmV0dXJuIHguYXR0cigndzp2YWwnKVxyXG5cdFx0fVxyXG5cdFx0aGlnaGxpZ2h0KHgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hc0NvbG9yKHguYXR0cigndzp2YWwnKSlcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0a2Vybih4KXsvL3dvcmQgc3BhY2luZ1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoeC5hdHRyKCd3OnZhbCcpKS8yXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHcoeCl7Ly9jaGFyIHNjYWxlXHJcblx0XHRcdHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpLzEwMC4wXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNwYWNpbmcoeCl7Ly9jaGFyIHNwYWNpbmdcclxuXHRcdFx0cmV0dXJuIHRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cihcInc6dmFsXCIpKSlcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cG9zaXRpb24oeCl7Ly9iYXNlbGluZSBzaGlmdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5hdHRyKFwidzp2YWxcIikpKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzbWFsbENhcHMoKXtcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0YXNUb2dnbGUoeCl7XHJcblx0XHRcdGxldCB2YWw9eC5hdHRyKCd3OnZhbCcpXHJcblx0XHRcdGlmKCF2YWwpe1xyXG5cdFx0XHRcdHJldHVybiAtMVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQodmFsKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==