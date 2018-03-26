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

var _converter3 = require('./style/converter');

var _converter4 = _interopRequireDefault(_converter3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AZ = /[A-Z]/g,
    r = function r(a) {
	return '-' + a.toLowerCase();
},
    clozed = /Z$/gi;

function asStyle(x) {
	var a = [];
	for (var i in x) {
		!$.isFunction(x[i]) && a.push(i.replace(AZ, r) + ':' + x[i]);
	}return a.join(';');
}

var Shape = function (_Converter) {
	(0, _inherits3.default)(Shape, _Converter);

	function Shape() {
		(0, _classCallCheck3.default)(this, Shape);
		return (0, _possibleConstructorReturn3.default)(this, (Shape.__proto__ || (0, _getPrototypeOf2.default)(Shape)).apply(this, arguments));
	}

	(0, _createClass3.default)(Shape, [{
		key: 'convertStyle',
		value: function convertStyle(el) {
			el.style.position = 'absolute';
			el.style.overflow = 'hidden';

			var pathStyle = { stroke: 'black', strokeWidth: 2, fillOpacity: 0 },
			    bgStyle = this.makeBackgroundStyle();
			(0, _get3.default)(Shape.prototype.__proto__ || (0, _getPrototypeOf2.default)(Shape.prototype), 'convertStyle', this).apply(this, arguments);
			var style = this.wordModel.getDirectStyle(),
			    propConverter = new this.constructor.Properties(el.style, this, pathStyle, bgStyle);
			style && style.parse([propConverter]);
			if (this.path) {
				if (el.style.background) pathStyle.fillOpacity = 0;
				var bgImage = el.style.background,
				    grad = pathStyle.grad;
				delete pathStyle.grad;

				var svg = '<svg xmlns="http://www.w3.org/2000/svg">' + (grad ? '<defs>' + grad + '</defs>' : '') + this.path + ' style="' + asStyle(pathStyle) + '" /></svg>';
				var svgImage = 'url(' + this.doc.asImageURL(svg) + ')';
				bgStyle.backgroundImage = svgImage;
				bgStyle.backgroundSize = '100% 100%';
			}
		}
	}, {
		key: 'makeBackgroundStyle',
		value: function makeBackgroundStyle() {
			//make background el to hold svg background
			var id = 'shape' + this.doc.uid();
			this.content.setAttribute('id', id);
			var style = this.doc.createStyle('#' + id + '::before');
			style.content = '""';
			style.zIndex = -1;
			style.position = 'absolute';
			style.width = '100%';
			style.height = '100%';
			style.left = 0;
			style.top = 0;
			return style;
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'div';
		}
	}]);
	return Shape;
}(_converter2.default);

exports.default = Shape;


Shape.Properties = function (_Style$Properties) {
	(0, _inherits3.default)(Properties, _Style$Properties);

	function Properties(style, parent, pathStyle, bgStyle) {
		(0, _classCallCheck3.default)(this, Properties);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));

		_this2.pathStyle = pathStyle;
		_this2.bgStyle = bgStyle;
		return _this2;
	}

	(0, _createClass3.default)(Properties, [{
		key: 'xfrm',
		value: function xfrm(x) {
			this.style.width = x.width + 'px';
			this.style.height = x.height + 'px';
			x.x && (this.style.left = x.x + 'px');
			x.y && (this.style.top = x.y + 'px');

			x.rotation && this.styless('transform', 'rotate(' + x.rotation + 'deg)');

			this.world = x;
		}
	}, {
		key: 'ln',
		value: function ln(x) {
			x.color && (this.pathStyle.stroke = x.color);
			x.width != undefined && (this.pathStyle.strokeWidth = x.width + 'px');

			switch (x.cap) {
				case 'rnd':
					this.pathStyle.strokeLinecap = 'round';
					break;
				default:

			}

			if (x.dash) {
				switch (this.lineStyle(x.dash)) {
					case 'dotted':
						this.pathStyle.strokeDasharray = "5,5";
						break;
						break;
					case 'dashed':
						this.pathStyle.strokeDasharray = "10,10";
						break;
				}
			}
		}
	}, {
		key: 'solidFill',
		value: function solidFill(x) {
			this.pathStyle.fill = x;
			this.pathStyle.fillOpacity = 1;
		}
	}, {
		key: 'gradFill',
		value: function gradFill(x) {
			if (this.style.backgroundImage) return;

			var grad = [];
			switch (x.path) {
				case 'linear':
					grad.push('<linearGradient id="grad"');
					switch (x.angel) {
						case 0:
							grad.push('x1="0%" y1="0%" x2="100%" y2="0%">');
							break;
						case 90:
							grad.push('x1="0%" y1="0%" x2="0%" y2="100%">');
							break;
						case 180:
							grad.push('x1="100%" y1="0%" x2="0%" y2="0%">');
							break;
						case 270:
							grad.push('x1="0%" y1="100%" x2="0%" y2="0%">');
							break;
					}
					grad.push('</linearGradient>');
					break;
				case 'circle':
					grad.push('<radialGradient  id="grad"');
					grad.push('cx="50%" cy="50%" r="50%" fx="50%" fy="50%">');
					grad.push('</radialGradient>');
					break;
			}
			var end = grad.pop();
			for (var i = 0, len = x.stops.length, a; i < len; i++) {
				grad.push('<stop offset="' + (a = x.stops[i]).position + '%" style="stop-opacity:1;stop-color:' + a.color + '"/>');
			}grad.push(end);

			this.pathStyle.grad = grad.join(' ');
			this.pathStyle.fill = 'url(#grad)';
			this.pathStyle.fillOpacity = 1;
		}
	}, {
		key: 'blipFill',
		value: function blipFill(x) {
			this.style.background = 'url(' + this.doc.asImageURL(x) + ')';
			this.style.backgroundSize = '100% 100%';
			this.noFill();
		}
	}, {
		key: 'noFill',
		value: function noFill(x) {
			this.pathStyle.fillOpacity = 0;
		}
	}, {
		key: 'lnRef',
		value: function lnRef(x) {
			this.ln(x);
		}
	}, {
		key: 'fillRef',
		value: function fillRef(x) {
			if (this.style.backgroundImage) return;

			if (typeof x.path != 'undefined') return this.gradFill(x);

			if (typeof x == 'string') this.pathStyle.fill = x;else if (typeof x.color != 'undefined') this.pathStyle.fill = x.color;else return;
			this.pathStyle.fillOpacity = 1;
		}
	}, {
		key: 'fontRef',
		value: function fontRef(x) {
			x.color && (this.style.color = x.color);
			x.family && (this.style.fontFamily = x.family);
		}
	}, {
		key: 'path',
		value: function path(x, t) {
			switch (x.shape) {
				case 'line':
					this.parent.path = '<line x1="0" y1="0" x2="' + this.world.width + 'pt" y2="' + this.world.height + 'pt"';
					break;
				case 'rect':
					this.parent.path = '<rect width="' + this.world.width + 'pt" height="' + this.world.height + 'pt"';
					break;
				case 'roundRect':
					this.parent.path = '<rect rx="' + (t = Math.min(this.world.width, this.world.height) / 12) + 'pt" ry="' + t + 'pt" width="' + this.world.width + 'pt" height="' + this.world.height + 'pt"';
					break;
				case 'ellipse':
					this.parent.path = '<ellipse cx="' + this.world.width / 2 + 'pt" cy="' + this.world.height / 2 + 'pt" rx="' + this.world.width / 2 + 'pt" ry="' + this.world.height / 2 + 'pt"';
					break;
				case 'path':
					this.parent.path = '<path d="' + x.path + '"';
					if (!clozed.test(x.path)) this.noFill();
					break;
			}
		}
	}, {
		key: 'spAutoFit',
		value: function spAutoFit() {
			this.style.height = 'auto';
		}
	}, {
		key: 'lIns',
		value: function lIns(x) {
			this.style.paddingLeft = x + 'px';
		}
	}, {
		key: 'tIns',
		value: function tIns(x) {
			this.style.paddingTop = x + 'px';
		}
	}, {
		key: 'rIns',
		value: function rIns(x) {
			this.style.paddingRight = x + 'px';
		}
	}, {
		key: 'bIns',
		value: function bIns(x) {
			this.style.paddingBottom = x + 'px';
		}
	}, {
		key: 'anchor',
		value: function anchor(x) {
			this.style.display = 'table-cell';
			this.style.verticalAlign = x;
		}
	}, {
		key: 'vert',
		value: function vert(x) {
			this.style.height = this.world.width + 'px';
			this.style.width = this.world.height + 'px';
			var delta = (this.world.width - this.world.height) / 2;

			this.bgStyle.height = this.world.height + 'px';
			this.bgStyle.width = this.world.width + 'px';
			this.styless('transform', 'translate(-' + delta + 'pt,' + delta + 'pt) rotate(-' + x + 'deg) ', this.bgStyle);

			this.styless('transform', 'translate(' + delta + 'pt,-' + delta + 'pt) rotate(' + (x + this.world.rotation || 0) + 'deg)');
		}
	}]);
	return Properties;
}(_converter4.default.Properties);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvc2hhcGUuanMiXSwibmFtZXMiOlsiQVoiLCJyIiwiYSIsInRvTG93ZXJDYXNlIiwiY2xvemVkIiwiYXNTdHlsZSIsIngiLCJpIiwiJCIsImlzRnVuY3Rpb24iLCJwdXNoIiwicmVwbGFjZSIsImpvaW4iLCJTaGFwZSIsImVsIiwic3R5bGUiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwicGF0aFN0eWxlIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJmaWxsT3BhY2l0eSIsImJnU3R5bGUiLCJtYWtlQmFja2dyb3VuZFN0eWxlIiwiYXJndW1lbnRzIiwid29yZE1vZGVsIiwiZ2V0RGlyZWN0U3R5bGUiLCJwcm9wQ29udmVydGVyIiwiY29uc3RydWN0b3IiLCJQcm9wZXJ0aWVzIiwicGFyc2UiLCJwYXRoIiwiYmFja2dyb3VuZCIsImJnSW1hZ2UiLCJncmFkIiwic3ZnIiwic3ZnSW1hZ2UiLCJkb2MiLCJhc0ltYWdlVVJMIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJpZCIsInVpZCIsImNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVTdHlsZSIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsInBhcmVudCIsInkiLCJyb3RhdGlvbiIsInN0eWxlc3MiLCJ3b3JsZCIsImNvbG9yIiwidW5kZWZpbmVkIiwiY2FwIiwic3Ryb2tlTGluZWNhcCIsImRhc2giLCJsaW5lU3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJmaWxsIiwiYW5nZWwiLCJlbmQiLCJwb3AiLCJsZW4iLCJzdG9wcyIsImxlbmd0aCIsIm5vRmlsbCIsImxuIiwiZ3JhZEZpbGwiLCJmYW1pbHkiLCJmb250RmFtaWx5IiwidCIsInNoYXBlIiwiTWF0aCIsIm1pbiIsInRlc3QiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiZGlzcGxheSIsInZlcnRp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QWhDLElBQStDaEYsSUFBRSxLQUFLaUQsS0FBTCxDQUFXRixRQUFiLElBQXVCLENBQXRFLElBQXlFLE1BQWxHO0FBQ0E7QUFwS0Y7QUFBQTtBQUFBLEVBQTBDLG9CQUFNeEIsVUFBaEQiLCJmaWxlIjoic2hhcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udmVydGVyIGZyb20gJy4vY29udmVydGVyJ1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS9jb252ZXJ0ZXInXHJcblxyXG52YXIgQVo9L1tBLVpdL2csIFxyXG5cdHI9ZnVuY3Rpb24oYSl7cmV0dXJuICctJythLnRvTG93ZXJDYXNlKCl9LFxyXG5cdGNsb3plZD0vWiQvZ2k7XHJcblx0XHJcbmZ1bmN0aW9uIGFzU3R5bGUoeCl7XHJcblx0dmFyIGE9W11cclxuXHRmb3IodmFyIGkgaW4geClcclxuXHRcdCEkLmlzRnVuY3Rpb24oeFtpXSkgJiYgYS5wdXNoKGkucmVwbGFjZShBWixyKSsnOicreFtpXSlcclxuXHRyZXR1cm4gYS5qb2luKCc7JylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBDb252ZXJ0ZXJ7XHJcblx0Z2V0IHRhZygpe3JldHVybiAnZGl2J31cclxuXHRcclxuXHRjb252ZXJ0U3R5bGUoZWwpe1xyXG5cdFx0ZWwuc3R5bGUucG9zaXRpb249J2Fic29sdXRlJ1xyXG5cdFx0ZWwuc3R5bGUub3ZlcmZsb3c9J2hpZGRlbidcclxuXHJcblx0XHR2YXIgcGF0aFN0eWxlPXtzdHJva2U6J2JsYWNrJywgc3Ryb2tlV2lkdGg6MiwgZmlsbE9wYWNpdHk6MH0sXHJcblx0XHRcdGJnU3R5bGU9dGhpcy5tYWtlQmFja2dyb3VuZFN0eWxlKCk7XHJcblx0XHRzdXBlci5jb252ZXJ0U3R5bGUoLi4uYXJndW1lbnRzKVxyXG5cdFx0dmFyIHN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKCksXHJcblx0XHRcdHByb3BDb252ZXJ0ZXI9bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyhlbC5zdHlsZSx0aGlzLCBwYXRoU3R5bGUsIGJnU3R5bGUpO1xyXG5cdFx0c3R5bGUgJiYgc3R5bGUucGFyc2UoW3Byb3BDb252ZXJ0ZXJdKVxyXG5cdFx0aWYodGhpcy5wYXRoKXtcclxuXHRcdFx0aWYoZWwuc3R5bGUuYmFja2dyb3VuZClcclxuXHRcdFx0XHRwYXRoU3R5bGUuZmlsbE9wYWNpdHk9MFxyXG5cdFx0XHR2YXIgYmdJbWFnZT1lbC5zdHlsZS5iYWNrZ3JvdW5kLFxyXG5cdFx0XHRcdGdyYWQ9cGF0aFN0eWxlLmdyYWQ7XHJcblx0XHRcdGRlbGV0ZSBwYXRoU3R5bGUuZ3JhZDtcdFx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHN2Zz0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+J1xyXG5cdFx0XHRcdFx0KyhncmFkID8gJzxkZWZzPicrZ3JhZCsnPC9kZWZzPicgOiAnJylcclxuXHRcdFx0XHRcdCt0aGlzLnBhdGgrJyBzdHlsZT1cIicrYXNTdHlsZShwYXRoU3R5bGUpKydcIiAvPjwvc3ZnPic7XHJcblx0XHRcdHZhciBzdmdJbWFnZT0ndXJsKCcrdGhpcy5kb2MuYXNJbWFnZVVSTChzdmcpKycpJztcclxuXHRcdFx0YmdTdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9c3ZnSW1hZ2VcclxuXHRcdFx0YmdTdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nMTAwJSAxMDAlJ1xyXG5cdFx0fVxyXG5cdH1cclxuXHRtYWtlQmFja2dyb3VuZFN0eWxlKCl7XHJcblx0XHQvL21ha2UgYmFja2dyb3VuZCBlbCB0byBob2xkIHN2ZyBiYWNrZ3JvdW5kXHJcblx0XHR2YXIgaWQ9J3NoYXBlJyt0aGlzLmRvYy51aWQoKVxyXG5cdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLGlkKVxyXG5cdFx0dmFyIHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKCcjJytpZCsnOjpiZWZvcmUnKVxyXG5cdFx0c3R5bGUuY29udGVudD0nXCJcIidcclxuXHRcdHN0eWxlLnpJbmRleD0tMVxyXG5cdFx0c3R5bGUucG9zaXRpb249J2Fic29sdXRlJ1xyXG5cdFx0c3R5bGUud2lkdGg9JzEwMCUnXHJcblx0XHRzdHlsZS5oZWlnaHQ9JzEwMCUnXHJcblx0XHRzdHlsZS5sZWZ0PTBcclxuXHRcdHN0eWxlLnRvcD0wXHJcblx0XHRyZXR1cm4gc3R5bGVcclxuXHR9XHJcbn1cclxuXHJcblNoYXBlLlByb3BlcnRpZXM9Y2xhc3MgUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XHJcblx0Y29uc3RydWN0b3Ioc3R5bGUscGFyZW50LCBwYXRoU3R5bGUsIGJnU3R5bGUpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5wYXRoU3R5bGU9cGF0aFN0eWxlXHJcblx0XHR0aGlzLmJnU3R5bGU9YmdTdHlsZVxyXG5cdH1cclxuXHJcblx0eGZybSh4KXtcclxuXHRcdHRoaXMuc3R5bGUud2lkdGg9eC53aWR0aCsncHgnXHJcblx0XHR0aGlzLnN0eWxlLmhlaWdodD14LmhlaWdodCsncHgnXHJcblx0XHR4LnggJiYgKHRoaXMuc3R5bGUubGVmdD14LngrJ3B4JylcclxuXHRcdHgueSAmJiAodGhpcy5zdHlsZS50b3A9eC55KydweCcpXHJcblx0XHRcclxuXHRcdHgucm90YXRpb24gJiYgdGhpcy5zdHlsZXNzKCd0cmFuc2Zvcm0nLCdyb3RhdGUoJyt4LnJvdGF0aW9uKydkZWcpJylcclxuXHRcdFxyXG5cdFx0dGhpcy53b3JsZD14XHJcblx0fVxyXG5cdGxuKHgpe1xyXG5cdFx0eC5jb2xvciAmJiAodGhpcy5wYXRoU3R5bGUuc3Ryb2tlPXguY29sb3IpO1xyXG5cdFx0eC53aWR0aCE9dW5kZWZpbmVkICYmICh0aGlzLnBhdGhTdHlsZS5zdHJva2VXaWR0aD14LndpZHRoKydweCcpO1xyXG5cdFx0XHJcblx0XHRzd2l0Y2goeC5jYXApe1xyXG5cdFx0Y2FzZSAncm5kJzpcclxuXHRcdFx0dGhpcy5wYXRoU3R5bGUuc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcblx0XHRcdGJyZWFrXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYoeC5kYXNoKXtcclxuXHRcdFx0c3dpdGNoKHRoaXMubGluZVN0eWxlKHguZGFzaCkpe1xyXG5cdFx0XHRjYXNlICdkb3R0ZWQnOlxyXG5cdFx0XHRcdHRoaXMucGF0aFN0eWxlLnN0cm9rZURhc2hhcnJheT1cIjUsNVwiXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnZGFzaGVkJzpcclxuXHRcdFx0XHR0aGlzLnBhdGhTdHlsZS5zdHJva2VEYXNoYXJyYXk9XCIxMCwxMFwiXHJcblx0XHRcdGJyZWFrXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0c29saWRGaWxsKHgpe1xyXG5cdFx0dGhpcy5wYXRoU3R5bGUuZmlsbD14XHJcblx0XHR0aGlzLnBhdGhTdHlsZS5maWxsT3BhY2l0eT0xXHJcblx0fVxyXG5cdGdyYWRGaWxsKHgpe1xyXG5cdFx0aWYodGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpXHJcblx0XHRcdHJldHVyblxyXG5cdFx0XHRcclxuXHRcdHZhciBncmFkPVtdXHJcblx0XHRzd2l0Y2goeC5wYXRoKXtcclxuXHRcdGNhc2UgJ2xpbmVhcic6XHJcblx0XHRcdGdyYWQucHVzaCgnPGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZFwiJylcclxuXHRcdFx0c3dpdGNoKHguYW5nZWwpe1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0Z3JhZC5wdXNoKCd4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMCVcIj4nKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgOTA6XHJcblx0XHRcdFx0Z3JhZC5wdXNoKCd4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMCVcIiB5Mj1cIjEwMCVcIj4nKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgMTgwOlxyXG5cdFx0XHRcdGdyYWQucHVzaCgneDE9XCIxMDAlXCIgeTE9XCIwJVwiIHgyPVwiMCVcIiB5Mj1cIjAlXCI+JylcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIDI3MDpcclxuXHRcdFx0XHRncmFkLnB1c2goJ3gxPVwiMCVcIiB5MT1cIjEwMCVcIiB4Mj1cIjAlXCIgeTI9XCIwJVwiPicpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fVxyXG5cdFx0XHRncmFkLnB1c2goJzwvbGluZWFyR3JhZGllbnQ+JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJ2NpcmNsZSc6XHJcblx0XHRcdGdyYWQucHVzaCgnPHJhZGlhbEdyYWRpZW50ICBpZD1cImdyYWRcIicpXHJcblx0XHRcdGdyYWQucHVzaCgnY3g9XCI1MCVcIiBjeT1cIjUwJVwiIHI9XCI1MCVcIiBmeD1cIjUwJVwiIGZ5PVwiNTAlXCI+JylcclxuXHRcdFx0Z3JhZC5wdXNoKCc8L3JhZGlhbEdyYWRpZW50PicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHR2YXIgZW5kPWdyYWQucG9wKClcclxuXHRcdGZvcih2YXIgaT0wLGxlbj14LnN0b3BzLmxlbmd0aCxhO2k8bGVuO2krKylcclxuXHRcdFx0Z3JhZC5wdXNoKCc8c3RvcCBvZmZzZXQ9XCInKyhhPXguc3RvcHNbaV0pLnBvc2l0aW9uKyclXCIgc3R5bGU9XCJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOicrYS5jb2xvcisnXCIvPicpXHJcblx0XHRncmFkLnB1c2goZW5kKVxyXG5cdFx0XHJcblx0XHR0aGlzLnBhdGhTdHlsZS5ncmFkPWdyYWQuam9pbignICcpXHJcblx0XHR0aGlzLnBhdGhTdHlsZS5maWxsPSd1cmwoI2dyYWQpJ1xyXG5cdFx0dGhpcy5wYXRoU3R5bGUuZmlsbE9wYWNpdHk9MVxyXG5cdH1cclxuXHRibGlwRmlsbCh4KXtcclxuXHRcdHRoaXMuc3R5bGUuYmFja2dyb3VuZD0ndXJsKCcrdGhpcy5kb2MuYXNJbWFnZVVSTCh4KSsnKSdcclxuXHRcdHRoaXMuc3R5bGUuYmFja2dyb3VuZFNpemU9JzEwMCUgMTAwJSdcclxuXHRcdHRoaXMubm9GaWxsKClcclxuXHR9XHJcblx0bm9GaWxsKHgpe1xyXG5cdFx0dGhpcy5wYXRoU3R5bGUuZmlsbE9wYWNpdHk9MFxyXG5cdH1cclxuXHRsblJlZih4KXtcclxuXHRcdHRoaXMubG4oeClcclxuXHR9XHJcblx0ZmlsbFJlZih4KXtcclxuXHRcdGlmKHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlKVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdFxyXG5cdFx0aWYodHlwZW9mKHgucGF0aCkhPSd1bmRlZmluZWQnKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmFkRmlsbCh4KTtcclxuXHRcdFx0XHJcblx0XHRpZih0eXBlb2YoeCk9PSdzdHJpbmcnKVxyXG5cdFx0XHR0aGlzLnBhdGhTdHlsZS5maWxsPXhcclxuXHRcdGVsc2UgaWYodHlwZW9mKHguY29sb3IpIT0ndW5kZWZpbmVkJylcclxuXHRcdFx0dGhpcy5wYXRoU3R5bGUuZmlsbD14LmNvbG9yXHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybjtcclxuXHRcdHRoaXMucGF0aFN0eWxlLmZpbGxPcGFjaXR5PTFcclxuXHR9XHJcblx0Zm9udFJlZih4KXtcclxuXHRcdHguY29sb3IgJiYgKHRoaXMuc3R5bGUuY29sb3I9eC5jb2xvcik7XHJcblx0XHR4LmZhbWlseSAmJiAodGhpcy5zdHlsZS5mb250RmFtaWx5PXguZmFtaWx5KTtcclxuXHR9XHJcblx0cGF0aCh4LCB0KXtcclxuXHRcdHN3aXRjaCh4LnNoYXBlKXtcclxuXHRcdGNhc2UgJ2xpbmUnOlxyXG5cdFx0XHR0aGlzLnBhcmVudC5wYXRoPSc8bGluZSB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIicrdGhpcy53b3JsZC53aWR0aCsncHRcIiB5Mj1cIicrdGhpcy53b3JsZC5oZWlnaHQrJ3B0XCInXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICdyZWN0JzpcclxuXHRcdFx0dGhpcy5wYXJlbnQucGF0aD0nPHJlY3Qgd2lkdGg9XCInK3RoaXMud29ybGQud2lkdGgrJ3B0XCIgaGVpZ2h0PVwiJyt0aGlzLndvcmxkLmhlaWdodCsncHRcIidcclxuXHRcdFx0YnJlYWs7XHRcclxuXHRcdGNhc2UgJ3JvdW5kUmVjdCc6XHJcblx0XHRcdHRoaXMucGFyZW50LnBhdGg9JzxyZWN0IHJ4PVwiJysodD1NYXRoLm1pbih0aGlzLndvcmxkLndpZHRoLCB0aGlzLndvcmxkLmhlaWdodCkvMTIpKydwdFwiIHJ5PVwiJyt0KydwdFwiIHdpZHRoPVwiJyt0aGlzLndvcmxkLndpZHRoKydwdFwiIGhlaWdodD1cIicrdGhpcy53b3JsZC5oZWlnaHQrJ3B0XCInXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnZWxsaXBzZSc6XHJcblx0XHRcdHRoaXMucGFyZW50LnBhdGg9JzxlbGxpcHNlIGN4PVwiJyt0aGlzLndvcmxkLndpZHRoLzIrJ3B0XCIgY3k9XCInK3RoaXMud29ybGQuaGVpZ2h0LzIrJ3B0XCIgcng9XCInK3RoaXMud29ybGQud2lkdGgvMisncHRcIiByeT1cIicrdGhpcy53b3JsZC5oZWlnaHQvMisncHRcIidcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJ3BhdGgnOlxyXG5cdFx0XHR0aGlzLnBhcmVudC5wYXRoPSc8cGF0aCBkPVwiJyt4LnBhdGgrJ1wiJ1xyXG5cdFx0XHRpZighY2xvemVkLnRlc3QoeC5wYXRoKSlcclxuXHRcdFx0XHR0aGlzLm5vRmlsbCgpXHJcblx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0fVxyXG5cdHNwQXV0b0ZpdCgpe1xyXG5cdFx0dGhpcy5zdHlsZS5oZWlnaHQ9J2F1dG8nXHJcblx0fVxyXG5cdGxJbnMoeCl7XHJcblx0XHR0aGlzLnN0eWxlLnBhZGRpbmdMZWZ0PXgrJ3B4J1xyXG5cdH1cclxuXHR0SW5zKHgpe1xyXG5cdFx0dGhpcy5zdHlsZS5wYWRkaW5nVG9wPXgrJ3B4J1xyXG5cdH1cclxuXHRySW5zKHgpe1xyXG5cdFx0dGhpcy5zdHlsZS5wYWRkaW5nUmlnaHQ9eCsncHgnXHJcblx0fVxyXG5cdGJJbnMoeCl7XHJcblx0XHR0aGlzLnN0eWxlLnBhZGRpbmdCb3R0b209eCsncHgnXHJcblx0fVxyXG5cdGFuY2hvcih4KXtcclxuXHRcdHRoaXMuc3R5bGUuZGlzcGxheT0ndGFibGUtY2VsbCdcclxuXHRcdHRoaXMuc3R5bGUudmVydGljYWxBbGlnbj14XHJcblx0fVxyXG5cdHZlcnQoeCl7XHJcblx0XHR0aGlzLnN0eWxlLmhlaWdodD10aGlzLndvcmxkLndpZHRoKydweCdcclxuXHRcdHRoaXMuc3R5bGUud2lkdGg9dGhpcy53b3JsZC5oZWlnaHQrJ3B4J1xyXG5cdFx0dmFyIGRlbHRhPSh0aGlzLndvcmxkLndpZHRoLXRoaXMud29ybGQuaGVpZ2h0KS8yXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0dGhpcy5iZ1N0eWxlLmhlaWdodD10aGlzLndvcmxkLmhlaWdodCsncHgnXHJcblx0XHR0aGlzLmJnU3R5bGUud2lkdGg9dGhpcy53b3JsZC53aWR0aCsncHgnXHJcblx0XHR0aGlzLnN0eWxlc3MoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgtJytkZWx0YSsncHQsJytkZWx0YSsncHQpIHJvdGF0ZSgtJyt4KydkZWcpICcsIHRoaXMuYmdTdHlsZSlcclxuXHJcblx0XHR0aGlzLnN0eWxlc3MoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnK2RlbHRhKydwdCwtJytkZWx0YSsncHQpIHJvdGF0ZSgnKyh4K3RoaXMud29ybGQucm90YXRpb258fDApKydkZWcpJylcclxuXHR9XHJcbn0iXX0=