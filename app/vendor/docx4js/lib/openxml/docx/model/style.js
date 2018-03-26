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

var RGB = /([a-fA-F0-9]{2}?){3}?/;

var Style = function (_require) {
	(0, _inherits3.default)(Style, _require);

	function Style(wXml, wDoc, mParent) {
		(0, _classCallCheck3.default)(this, Style);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Style.__proto__ || (0, _getPrototypeOf2.default)(Style)).apply(this, arguments));

		if (wXml.attr('w:default') == '1') wDoc.style.setDefault(_this);
		_this.name = _this._val('name');
		if (_this.id = _this._attr('w:styleId')) wDoc.style.set(_this);
		return _this;
	}

	(0, _createClass3.default)(Style, [{
		key: 'getParentStyle',
		value: function getParentStyle() {
			return this.wDoc.style.get(this._val('basedOn'));
		}
	}, {
		key: 'isDefault',
		value: function isDefault() {
			return this.wXml.attr('w:default') == '1';
		}
	}, {
		key: 'getNumId',
		value: function getNumId() {
			return -1;
		}
	}, {
		key: 'getOutlineLevel',
		value: function getOutlineLevel() {
			return -1;
		}
	}]);
	return Style;
}(require('../model'));

exports.default = Style;


var naming = {};
Style.Properties = function (_require2) {
	(0, _inherits3.default)(Properties, _require2);
	(0, _createClass3.default)(Properties, null, [{
		key: 'type',
		get: function get() {
			return null;
		}
	}, {
		key: 'naming',
		get: function get() {
			return naming;
		}
	}]);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));

		_this2.values = {};
		return _this2;
	}

	(0, _createClass3.default)(Properties, [{
		key: 'parse',

		//use parent visitor to visitor style nodes and attributes
		value: function parse(visitors) {
			var _this3 = this;

			var values = this.values,
			    naming = this.constructor.naming,
			    type = this.constructor.type,
			    t;
			visitors.forEach(function (visitor) {
				[_this3._getValidChildren(), _this3.wXml.attributes].forEach(function (children) {
					for (var len = children.length, i = 0; i < len; i++) {
						var node = children[i],
						    name = node.localName;
						if (values[name] == undefined) {
							if (typeof _this3[name] == 'function') values[name] = _this3[name](node);else if (node.attr && (t = node.attr("w:val"))) //lazy default
								values[name] = t;
						}
						values[name] != _this3.EMPTY && visitor.visit(values[name], naming[name] || name, type);
					}
				});
			});
		}
	}, {
		key: '_getValidChildren',
		value: function _getValidChildren() {
			return this.wXml.childNodes;
		}
	}, {
		key: 'basedOn',
		value: function basedOn(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'asColor',
		value: function asColor(v) {
			if (!v || v.length == 0 || v == 'auto') return '#000000';
			v = v.split(' ')[0];
			return v.charAt(0) == '#' ? v : RGB.test(v) ? '#' + v : v;
		}
	}, {
		key: 'shadeColor',
		value: function shadeColor(color, percent) {
			if (!RGB.test(color)) return color;
			var R = parseInt(color.substring(1, 3), 16);
			var G = parseInt(color.substring(3, 5), 16);
			var B = parseInt(color.substring(5, 7), 16);

			R = parseInt(R * (100 + percent) / 100);
			G = parseInt(G * (100 + percent) / 100);
			B = parseInt(B * (100 + percent) / 100);

			R = R < 255 ? R : 255;
			G = G < 255 ? G : 255;
			B = B < 255 ? B : 255;

			var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
			var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
			var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

			return "#" + RR + GG + BB;
		}
	}, {
		key: 'asObject',
		value: function asObject(x, f) {
			var o = {};
			for (var i = 0, attrs = x.attributes, len = attrs.length; i < len; i++) {
				o[attrs[i].localName] = f ? f(attrs[i].value) : attrs[i].value;
			}return o;
		}
	}, {
		key: 'asPt',
		value: function asPt(x, type) {
			switch (type) {
				case 'cm':
					return parseInt(x) * 28.3464567 / 360000;
				default:
					//dxa
					return parseInt(x) / 20.0;
			}
		}
	}, {
		key: 'pt2Px',
		value: function pt2Px(x) {
			if (typeof x == 'string') x = parseFloat(x.replace('pt', ''));
			return Math.floor(x * 96 / 72);
		}
	}, {
		key: 'EMPTY',
		get: function get() {
			return -999;
		}
	}]);
	return Properties;
}(require('../model'));
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUuanMiXSwibmFtZXMiOlsiUkdCIiwiU3R5bGUiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJhcmd1bWVudHMiLCJhdHRyIiwic3R5bGUiLCJzZXREZWZhdWx0IiwibmFtZSIsIl92YWwiLCJpZCIsIl9hdHRyIiwic2V0IiwiZ2V0IiwicmVxdWlyZSIsIm5hbWluZyIsIlByb3BlcnRpZXMiLCJ2YWx1ZXMiLCJ2aXNpdG9ycyIsImNvbnN0cnVjdG9yIiwidHlwZSIsInQiLCJmb3JFYWNoIiwidmlzaXRvciIsIl9nZXRWYWxpZENoaWxkcmVuIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwibGVuIiwibGVuZ3RoIiwiaSIsIm5vZGUiLCJsb2NhbE5hbWUiLCJ1bmRlZmluZWQiLCJFTVBUWSIsInZpc2l0IiwiY2hpbGROb2RlcyIsIngiLCJ2Iiwic3BsaXQiLCJjaGFyQXQiLCJ0ZXN0IiwiY29sb3IiLCJwZXJjZW50IiwiUiIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiRyIsIkIiLCJSUiIsInRvU3RyaW5nIiwiR0ciLCJCQiIsImYiLCJvIiwiYXR0cnMiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBSSx1QkFBUjs7SUFDcUJDLEs7OztBQUNwQixnQkFBWUMsSUFBWixFQUFpQkMsSUFBakIsRUFBc0JDLE9BQXRCLEVBQThCO0FBQUE7O0FBQUEsbUlBQ3BCQyxTQURvQjs7QUFFN0IsTUFBR0gsS0FBS0ksSUFBTCxDQUFVLFdBQVYsS0FBd0IsR0FBM0IsRUFDQ0gsS0FBS0ksS0FBTCxDQUFXQyxVQUFYO0FBQ0QsUUFBS0MsSUFBTCxHQUFVLE1BQUtDLElBQUwsQ0FBVSxNQUFWLENBQVY7QUFDQSxNQUFHLE1BQUtDLEVBQUwsR0FBUSxNQUFLQyxLQUFMLENB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R0FBSyxFQUFoQixDQUFQO0FBQ0E7QUE5RUY7QUFBQTtBQUFBLHNCQVFZO0FBQUMsVUFBTyxDQUFDLEdBQVI7QUFBWTtBQVJ6QjtBQUFBO0FBQUEsRUFBMEN0QixRQUFRLFVBQVIsQ0FBMUMiLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUkdCPS8oW2EtZkEtRjAtOV17Mn0/KXszfT8vO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0Y29uc3RydWN0b3Iod1htbCx3RG9jLG1QYXJlbnQpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0aWYod1htbC5hdHRyKCd3OmRlZmF1bHQnKT09JzEnKVxyXG5cdFx0XHR3RG9jLnN0eWxlLnNldERlZmF1bHQodGhpcylcclxuXHRcdHRoaXMubmFtZT10aGlzLl92YWwoJ25hbWUnKVxyXG5cdFx0aWYodGhpcy5pZD10aGlzLl9hdHRyKCd3OnN0eWxlSWQnKSlcclxuXHRcdFx0d0RvYy5zdHlsZS5zZXQodGhpcylcclxuXHR9XHJcblx0Z2V0UGFyZW50U3R5bGUoKXtcclxuXHRcdHJldHVybiB0aGlzLndEb2Muc3R5bGUuZ2V0KHRoaXMuX3ZhbCgnYmFzZWRPbicpKVxyXG5cdH1cclxuXHRpc0RlZmF1bHQoKXtcclxuXHRcdHJldHVybiB0aGlzLndYbWwuYXR0cigndzpkZWZhdWx0Jyk9PScxJ1xyXG5cdH1cclxuXHRnZXROdW1JZCgpe1xyXG5cdFx0cmV0dXJuIC0xXHJcblx0fVxyXG5cdGdldE91dGxpbmVMZXZlbCgpe1xyXG5cdFx0cmV0dXJuIC0xXHJcblx0fVxyXG59XHJcblxyXG52YXIgbmFtaW5nPXt9XHJcblN0eWxlLlByb3BlcnRpZXM9Y2xhc3MgUHJvcGVydGllcyBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuIG51bGx9XHJcblx0c3RhdGljIGdldCBuYW1pbmcoKXtyZXR1cm4gbmFtaW5nfVxyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLnZhbHVlcz17fVxyXG5cdH1cclxuXHJcblx0Z2V0IEVNUFRZKCl7cmV0dXJuIC05OTl9XHJcblx0Ly91c2UgcGFyZW50IHZpc2l0b3IgdG8gdmlzaXRvciBzdHlsZSBub2RlcyBhbmQgYXR0cmlidXRlc1xyXG5cdHBhcnNlKHZpc2l0b3JzKXtcclxuXHRcdHZhciB2YWx1ZXM9dGhpcy52YWx1ZXMsIG5hbWluZz10aGlzLmNvbnN0cnVjdG9yLm5hbWluZywgdHlwZT10aGlzLmNvbnN0cnVjdG9yLnR5cGUsIHRcclxuXHRcdHZpc2l0b3JzLmZvckVhY2goKHZpc2l0b3IpPT57XHJcblx0XHRcdFt0aGlzLl9nZXRWYWxpZENoaWxkcmVuKCksdGhpcy53WG1sLmF0dHJpYnV0ZXNdLmZvckVhY2goKGNoaWxkcmVuKT0+e1xyXG5cdFx0XHRcdGZvcih2YXIgbGVuPWNoaWxkcmVuLmxlbmd0aCxpPTA7aTxsZW47aSsrKXtcclxuXHRcdFx0XHRcdHZhciBub2RlPWNoaWxkcmVuW2ldLCBuYW1lPW5vZGUubG9jYWxOYW1lXHJcblx0XHRcdFx0XHRpZih2YWx1ZXNbbmFtZV09PXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHRcdGlmKHR5cGVvZih0aGlzW25hbWVdKT09J2Z1bmN0aW9uJylcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZXNbbmFtZV09dGhpc1tuYW1lXShub2RlKVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmKG5vZGUuYXR0ciAmJiAodD1ub2RlLmF0dHIoXCJ3OnZhbFwiKSkpLy9sYXp5IGRlZmF1bHRcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZXNbbmFtZV09dFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFsdWVzW25hbWVdIT10aGlzLkVNUFRZICYmIHZpc2l0b3IudmlzaXQodmFsdWVzW25hbWVdLG5hbWluZ1tuYW1lXXx8bmFtZSx0eXBlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cdF9nZXRWYWxpZENoaWxkcmVuKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53WG1sLmNoaWxkTm9kZXNcclxuXHR9XHJcblx0YmFzZWRPbih4KXtcclxuXHRcdHJldHVybiB4LmF0dHIoJ3c6dmFsJylcclxuXHR9XHJcblx0YXNDb2xvcih2KXtcclxuXHRcdGlmKCF2IHx8IHYubGVuZ3RoPT0wIHx8IHY9PSdhdXRvJylcclxuXHRcdFx0cmV0dXJuICcjMDAwMDAwJ1xyXG5cdFx0dj12LnNwbGl0KCcgJylbMF1cclxuXHRcdHJldHVybiB2LmNoYXJBdCgwKT09JyMnID8gdiA6IChSR0IudGVzdCh2KSA/ICcjJyt2IDogdilcclxuXHR9XHJcblx0c2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xyXG5cdFx0aWYoIVJHQi50ZXN0KGNvbG9yKSlcclxuXHRcdFx0cmV0dXJuIGNvbG9yXHJcblx0XHR2YXIgUiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLDMpLDE2KTtcclxuXHRcdHZhciBHID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsNSksMTYpO1xyXG5cdFx0dmFyIEIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSw3KSwxNik7XHJcblxyXG5cdFx0UiA9IHBhcnNlSW50KFIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xyXG5cdFx0RyA9IHBhcnNlSW50KEcgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xyXG5cdFx0QiA9IHBhcnNlSW50KEIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xyXG5cclxuXHRcdFIgPSAoUjwyNTUpP1I6MjU1O1xyXG5cdFx0RyA9IChHPDI1NSk/RzoyNTU7XHJcblx0XHRCID0gKEI8MjU1KT9COjI1NTtcclxuXHJcblx0XHR2YXIgUlIgPSAoKFIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrUi50b1N0cmluZygxNik6Ui50b1N0cmluZygxNikpO1xyXG5cdFx0dmFyIEdHID0gKChHLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK0cudG9TdHJpbmcoMTYpOkcudG9TdHJpbmcoMTYpKTtcclxuXHRcdHZhciBCQiA9ICgoQi50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitCLnRvU3RyaW5nKDE2KTpCLnRvU3RyaW5nKDE2KSk7XHJcblxyXG5cdFx0cmV0dXJuIFwiI1wiK1JSK0dHK0JCO1xyXG5cdH1cclxuXHRhc09iamVjdCh4LCBmKXtcclxuXHRcdHZhciBvPXt9XHJcblx0XHRmb3IodmFyIGk9MCxhdHRycz14LmF0dHJpYnV0ZXMsbGVuPWF0dHJzLmxlbmd0aDtpPGxlbjtpKyspXHJcblx0XHRcdG9bYXR0cnNbaV0ubG9jYWxOYW1lXT0gZiA/IGYoYXR0cnNbaV0udmFsdWUpIDogYXR0cnNbaV0udmFsdWVcclxuXHRcdHJldHVybiBvXHJcblx0fVxyXG5cdGFzUHQoeCwgdHlwZSl7XHJcblx0XHRzd2l0Y2godHlwZSl7XHJcblx0XHRjYXNlICdjbSc6XHJcblx0XHRcdHJldHVybiBwYXJzZUludCh4KSoyOC4zNDY0NTY3LzM2MDAwMDtcclxuXHRcdGRlZmF1bHQ6Ly9keGFcclxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHgpLzIwLjBcclxuXHRcdH1cclxuXHR9XHJcblx0cHQyUHgoeCl7XHJcblx0XHRpZih0eXBlb2YoeCk9PSdzdHJpbmcnKVxyXG5cdFx0XHR4PXBhcnNlRmxvYXQoeC5yZXBsYWNlKCdwdCcsJycpKVxyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoeCo5Ni83MilcclxuXHR9XHJcbn1cclxuIl19