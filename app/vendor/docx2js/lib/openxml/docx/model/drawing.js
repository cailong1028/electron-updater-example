'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawing = function (_require) {
	(0, _inherits3.default)(Drawing, _require);

	function Drawing(wXml) {
		(0, _classCallCheck3.default)(this, Drawing);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Drawing.__proto__ || (0, _getPrototypeOf2.default)(Drawing)).apply(this, arguments));

		_this.wDrawing = null;
		return _this;
	}

	(0, _createClass3.default)(Drawing, [{
		key: 'getDirectStyle',
		value: function getDirectStyle() {
			return new this.constructor.Properties(this.wDrawing, this.wDoc, this);
		}
	}, {
		key: '_getValidChildren',
		value: function _getValidChildren() {
			return [];
		}
	}]);
	return Drawing;
}(require('../model'));

exports.default = Drawing;


Drawing.Properties = function (_Style$Properties) {
	(0, _inherits3.default)(Properties, _Style$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: '_getValidChildren',
		value: function _getValidChildren(t) {
			return [this.wXml.$1('extent'), this.wXml.$1('effectExtent')];
		}
	}, {
		key: 'extent',
		value: function extent(x) {
			//inline and anchor
			return { width: this.pt2Px(this.asPt(x.attr('cx'), 'cm')), height: this.pt2Px(this.asPt(x.attr('cy'), 'cm')) };
		}
	}, {
		key: 'effectExtent',
		value: function effectExtent(x) {
			var _this3 = this;

			return this.asObject(x, function (x) {
				return _this3.pt2Px(_this3.asPt(x, 'cm'));
			});
		}
	}, {
		key: 'distT',
		value: function distT(x) {
			if (x = parseInt(x.value)) return this.pt2Px(this.asPt(x, 'cm'));
			return this.EMPTY;
		}
	}, {
		key: 'distB',
		value: function distB(x) {
			return this.distT(x);
		}
	}, {
		key: 'distR',
		value: function distR(x) {
			return this.distT(x);
		}
	}, {
		key: 'distL',
		value: function distL(x) {
			return this.distT(x);
		}
	}], [{
		key: 'mixinSpProperties',
		value: function mixinSpProperties() {
			(0, _assign2.default)(this.naming, {
				custGeom: 'path',
				prstGeom: 'path'
			});

			(0, _assign2.default)(this.prototype, Drawing.SpProperties);
		}
	}]);
	return Properties;
}(_style2.default.Properties);

Drawing.SpProperties = {
	xfrm: function xfrm(x) {
		var ext = x.$1('ext'),
		    offset = x.$1('off');
		return this.world = {
			width: this.pt2Px(this.asPt(ext.attr('cx'), 'cm')),
			height: this.pt2Px(this.asPt(ext.attr('cy'), 'cm')),
			x: this.pt2Px(this.asPt(offset.attr('x'), 'cm')),
			y: this.pt2Px(this.asPt(offset.attr('y'), 'cm')),
			rotation: parseInt(x.attr('rot') || 0) / 60000
		};
	},
	solidFill: function solidFill(x) {
		var elColor = x.firstChild,
		    color = this.asColor(elColor.attr('val')),
		    t;

		if (color == 'phClr') return 'phClr';

		switch (elColor.localName) {
			case 'schemeClr':
				color = this.wDoc.getColorTheme().get(color);
				break;
		}

		if (t = elColor.$1('shade')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

		if (t = elColor.$1('lumOff')) color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

		return color;
	},
	noFill: function noFill(x) {
		return 1;
	},
	gradFill: function gradFill(x) {
		var type = x.$1('lin,path'),
		    o = this.asObject(type),
		    stops = [];
		for (var gs = x.$('gs'), a, i = 0, len = gs.length; i < len; i++) {
			stops.push({ position: parseInt(gs[i].attr('pos')) / 1000, color: this.solidFill(gs[i]) });
		}o.ang && (o.angel = parseInt(o.ang) / 60000, delete o.ang);
		o.path && (o.rect = this.asObject(type.firstChild, function (x) {
			return parseInt(x) / 1000;
		}));
		o.path = type.localName == 'lin' ? 'linear' : o.path;
		o.stops = stops;
		return o;
	},
	ln: function ln(x) {
		if (x.$1('noFill')) return { width: 0 };

		var o = this.asObject(x),
		    t;

		(t = x.$1('solidFill')) && (o.color = this.solidFill(t));

		(t = o.w) && (o.width = this.asPt(t, 'cm')) && delete o.w;
		(t = x.$1('prstDash')) && (o.dash = t.attr('val'));
		return o;
	},
	effectLst: function effectLst(x) {},
	blipFill: function blipFill(x) {
		return this.wDoc.getRel(x.$1('blip').attr('r:embed'));
	},
	prstGeom: function prstGeom(x) {
		var px = this.pt2Px,
		    w = px(this.world.width),
		    h = px(this.world.height);
		switch (x.attr('prst')) {
			case 'leftBrace':
				return { shape: 'path', path: 'M ' + w + ' 0 L 0 ' + h / 2 + ' L ' + w + ' ' + h + ' Z' };
			default:
				return { shape: x.attr('prst') };
		}
	},
	custGeom: function custGeom(x) {
		var path = [],
		    px = function (x) {
			return this.pt2Px(this.asPt(x, 'cm'));
		}.bind(this);
		for (var a, children = x.$1('path').childNodes, len = children.length, i = 0; i < len; i++) {
			a = children[i];
			switch (a.localName) {
				case 'moveTo':
					path.push('M ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
					break;
				case 'lnTo':
					path.push('L ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
					break;
					break;
				case 'cubicBezTo':
					path.push('L ' + px(a.childNodes[0].attr('x')) + ' ' + px(a.childNodes[0].attr('y')));
					path.push('Q ' + px(a.childNodes[1].attr('x')) + ' ' + px(a.childNodes[1].attr('y')) + ' ' + px(a.childNodes[2].attr('x')) + ' ' + px(a.childNodes[2].attr('y')));
					break;
			}
		}
		return { shape: 'path', path: path.join(' ') };
	}
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZHJhd2luZy5qcyJdLCJuYW1lcyI6WyJEcmF3aW5nIiwid1htbCIsImFyZ3VtZW50cyIsIndEcmF3aW5nIiwiY29uc3RydWN0b3IiLCJQcm9wZXJ0aWVzIiwid0RvYyIsInJlcXVpcmUiLCJ0IiwiJDEiLCJ4Iiwid2lkdGgiLCJwdDJQeCIsImFzUHQiLCJhdHRyIiwiaGVpZ2h0IiwiYXNPYmplY3QiLCJwYXJzZUludCIsInZhbHVlIiwiRU1QVFkiLCJkaXN0VCIsIm5hbWluZyIsImN1c3RHZW9tIiwicHJzdEdlb20iLCJwcm90b3R5cGUiLCJTcFByb3BlcnRpZXMiLCJ4ZnJtIiwiZXh0Iiwib2Zmc2V0Iiwid29ybGQiLCJ5Iiwicm90YXRpb24iLCJzb2xpZEZpbGwiLCJlbENvbG9yIiwiZmlyc3RDaGlsZCIsImNvbG9yIiwiYXNDb2xvciIsImxvY2FsTmFtZSIsImdldENvbG9yVGhlbWUiLCJnZXQiLCJzaGFkZUNvbG9yIiwibm9GaWxsIiwiZ3JhZEZpbGwiLCJ0eXBlIiwibyIsInN0b3BzIiwiZ3MiLCIkIiwiYSIsImkiLCJsZW4iLCJsZW5ndGgiLCJwdXNoIiwicG9zaXRpb24iLCJhbmciLCJhbmdlbCIsInBhdGgiLCJyZWN0IiwibG4iLCJ3IiwiZGFzaCIsImVmZmVjdExzdCIsImJsaXBGaWxsIiwiZ2V0UmVsIiwicHgiLCJoIiwic2hhcGUiLCJiaW5kIiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVxQkEsTzs7O0FBQ3BCLGtCQUFZQyxJQUFaLEVBQWlCO0FBQUE7O0FBQUEsdUlBQ1BDLFNBRE87O0FBRWhCLFFBQUtDLFFBQUwsR0FBYyxJQUFkO0FBRmdCO0FBR2hCOzs7O21DQUNlO0FBQ2YsVUFBTyxJQUFJLEtBQUtDLFdBQUwsQ0FBaUJDLFVBQXJCLENBQWdDLEtBQUtGLFFB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LFVBQUYsQ0FBYSxDQUFiLEVBQWdCdkQsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBSCxDQUFMLEdBQW1DLEdBQW5DLEdBQXVDa0QsR0FBR2hCLEVBQUVxQixVQUFGLENBQWEsQ0FBYixFQUFnQnZELElBQWhCLENBQXFCLEdBQXJCLENBQUgsQ0FBakQ7QUFDQTBDLFVBQUtKLElBQUwsQ0FBVSxPQUFLWSxHQUFHaEIsRUFBRXFCLFVBQUYsQ0FBYSxDQUFiLEVBQWdCdkQsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBSCxDQUFMLEdBQW1DLEdBQW5DLEdBQXVDa0QsR0FBR2hCLEVBQUVxQixVQUFGLENBQWEsQ0FBYixFQUFnQnZELElBQWhCLENBQXFCLEdBQXJCLENBQUgsQ0FBdkMsR0FDUixHQURRLEdBQ0prRCxHQUFHaEIsRUFBRXFCLFVBQUYsQ0FBYSxDQUFiLEVBQWdCdkQsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBSCxDQURJLEdBQzBCLEdBRDFCLEdBQzhCa0QsR0FBR2hCLEVBQUVxQixVQUFGLENBQWEsQ0FBYixFQUFnQnZELElBQWhCLENBQXFCLEdBQXJCLENBQUgsQ0FEeEM7QUFFRDtBQVpBO0FBY0E7QUFDRCxTQUFPLEVBQUNvRCxPQUFNLE1BQVAsRUFBZVYsTUFBS0EsS0FBS2MsSUFBTCxDQUFVLEdBQVYsQ0FBcEIsRUFBUDtBQUNBO0FBNUZtQixDQUFyQiIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUnXHJccmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXHRjb25zdHJ1Y3Rvcih3WG1sKXtcclx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcdFx0dGhpcy53RHJhd2luZz1udWxsXHJcdH1cclx0Z2V0RGlyZWN0U3R5bGUoKXtcclx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLndEcmF3aW5nLHRoaXMud0RvYywgdGhpcylcclx0fVxyXHRfZ2V0VmFsaWRDaGlsZHJlbigpe1xyXHRcdHJldHVybiBbXVxyXHR9XHJ9XHJcckRyYXdpbmcuUHJvcGVydGllcz1jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclx0X2dldFZhbGlkQ2hpbGRyZW4odCl7XHJcdFx0cmV0dXJuIFt0aGlzLndYbWwuJDEoJ2V4dGVudCcpLCB0aGlzLndYbWwuJDEoJ2VmZmVjdEV4dGVudCcpXVxyXHR9XHJcdGV4dGVudCh4KXsvL2lubGluZSBhbmQgYW5jaG9yXHJcdFx0cmV0dXJuIHt3aWR0aDp0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ2N4JyksJ2NtJykpLGhlaWdodDp0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmF0dHIoJ2N5JyksJ2NtJykpfVxyXHR9XHJcdGVmZmVjdEV4dGVudCh4KXtcclx0XHRyZXR1cm4gdGhpcy5hc09iamVjdCh4LHg9PnRoaXMucHQyUHgodGhpcy5hc1B0KHgsJ2NtJykpKVxyXHR9XHJcdGRpc3RUKHgpe1xyXHRcdGlmKHg9cGFyc2VJbnQoeC52YWx1ZSkpXHJcdFx0XHRyZXR1cm4gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeCwnY20nKSlcclx0XHRyZXR1cm4gdGhpcy5FTVBUWVxyXHR9XHJcdGRpc3RCKHgpe1xyXHRcdHJldHVybiB0aGlzLmRpc3RUKHgpXHJcdH1cclx0ZGlzdFIoeCl7XHJcdFx0cmV0dXJuIHRoaXMuZGlzdFQoeClcclx0fVxyXHRkaXN0TCh4KXtcclx0XHRyZXR1cm4gdGhpcy5kaXN0VCh4KVxyXHR9XHJcblx0XHJcblx0c3RhdGljIG1peGluU3BQcm9wZXJ0aWVzKCl7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMubmFtaW5nLHtcclxuXHRcdFx0Y3VzdEdlb206J3BhdGgnLFxyXG5cdFx0XHRwcnN0R2VvbToncGF0aCdcclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5wcm90b3R5cGUsRHJhd2luZy5TcFByb3BlcnRpZXMpXHJcblx0fVxyfVxyXHJEcmF3aW5nLlNwUHJvcGVydGllcz17XHJcdHhmcm0oeCl7XHJcdFx0dmFyIGV4dD14LiQxKCdleHQnKSwgb2Zmc2V0PXguJDEoJ29mZicpXHJcdFx0cmV0dXJuIHRoaXMud29ybGQ9e1xyXHRcdFx0d2lkdGg6dGhpcy5wdDJQeCh0aGlzLmFzUHQoZXh0LmF0dHIoJ2N4JyksJ2NtJykpLFxyXHRcdFx0aGVpZ2h0OnRoaXMucHQyUHgodGhpcy5hc1B0KGV4dC5hdHRyKCdjeScpLCdjbScpKSxcclx0XHRcdHg6dGhpcy5wdDJQeCh0aGlzLmFzUHQob2Zmc2V0LmF0dHIoJ3gnKSwnY20nKSksXHJcdFx0XHR5OnRoaXMucHQyUHgodGhpcy5hc1B0KG9mZnNldC5hdHRyKCd5JyksJ2NtJykpLFxyXHRcdFx0cm90YXRpb246IHBhcnNlSW50KHguYXR0cigncm90Jyl8fDApLzYwMDAwXHJcdFx0fVxyXHR9LFxyXHRzb2xpZEZpbGwoeCl7XHJcdFx0dmFyIGVsQ29sb3I9eC5maXJzdENoaWxkLFxyXHRcdFx0Y29sb3I9dGhpcy5hc0NvbG9yKGVsQ29sb3IuYXR0cigndmFsJykpLCB0O1xyXHJcdFx0aWYoY29sb3I9PSdwaENscicpXHJcdFx0XHRyZXR1cm4gJ3BoQ2xyJ1xyXHJcdFx0c3dpdGNoKGVsQ29sb3IubG9jYWxOYW1lKXtcclx0XHRjYXNlICdzY2hlbWVDbHInOlxyXHRcdFx0Y29sb3I9dGhpcy53RG9jLmdldENvbG9yVGhlbWUoKS5nZXQoY29sb3IpXHJcdFx0XHRicmVha1xyXHRcdH1cclxyXHRcdGlmKHQ9ZWxDb2xvci4kMSgnc2hhZGUnKSlcclx0XHRcdGNvbG9yPXRoaXMuc2hhZGVDb2xvcihjb2xvciwtMSpwYXJzZUludCh0LmF0dHIoJ3ZhbCcpKS8xMDAwKVxyXHJcdFx0aWYodD1lbENvbG9yLiQxKCdsdW1PZmYnKSlcclx0XHRcdGNvbG9yPXRoaXMuc2hhZGVDb2xvcihjb2xvciwtMSpwYXJzZUludCh0LmF0dHIoJ3ZhbCcpKS8xMDAwKVxyXHJcdFx0cmV0dXJuIGNvbG9yXHJcdH0sXHJcdG5vRmlsbCh4KXtcclx0XHRyZXR1cm4gMVxyXHR9LFxyXHRncmFkRmlsbCh4KXtcclx0XHR2YXIgdHlwZT14LiQxKCdsaW4scGF0aCcpLCBvPXRoaXMuYXNPYmplY3QodHlwZSksIHN0b3BzPVtdXHJcdFx0Zm9yKHZhciBncz14LiQoJ2dzJyksYSxpPTAsbGVuPWdzLmxlbmd0aDtpPGxlbjtpKyspXHJcdFx0XHRzdG9wcy5wdXNoKHtwb3NpdGlvbjpwYXJzZUludChnc1tpXS5hdHRyKCdwb3MnKSkvMTAwMCwgY29sb3I6dGhpcy5zb2xpZEZpbGwoZ3NbaV0pfSlcclx0XHRvLmFuZyAmJiAoby5hbmdlbD1wYXJzZUludChvLmFuZykvNjAwMDAsIGRlbGV0ZSBvLmFuZyk7XHJcdFx0by5wYXRoICYmIChvLnJlY3Q9dGhpcy5hc09iamVjdCh0eXBlLmZpcnN0Q2hpbGQsICh4KT0+cGFyc2VJbnQoeCkvMTAwMCkpO1xyXHRcdG8ucGF0aD10eXBlLmxvY2FsTmFtZT09J2xpbicgPyAnbGluZWFyJyA6IG8ucGF0aDtcclx0XHRvLnN0b3BzPXN0b3BzXHJcdFx0cmV0dXJuIG9cclx0fSxcclx0bG4oeCl7XHJcdFx0aWYoeC4kMSgnbm9GaWxsJykpXHJcdFx0XHRyZXR1cm4ge3dpZHRoOjB9XHJcclx0XHR2YXIgbz10aGlzLmFzT2JqZWN0KHgpLCB0O1xyXHJcdFx0KHQ9eC4kMSgnc29saWRGaWxsJykpICYmIChvLmNvbG9yPXRoaXMuc29saWRGaWxsKHQpKTtcclxyXHRcdCh0PW8udykgJiYgKG8ud2lkdGg9dGhpcy5hc1B0KHQsJ2NtJykpICYmIChkZWxldGUgby53KTtcclx0XHQodD14LiQxKCdwcnN0RGFzaCcpKSAmJiAoby5kYXNoPXQuYXR0cigndmFsJykpO1xyXHRcdHJldHVybiBvXHJcdH0sXHJcdGVmZmVjdExzdCh4KXtcclxyXHR9LFxyXHRibGlwRmlsbCh4KXtcclx0XHRyZXR1cm4gdGhpcy53RG9jLmdldFJlbCh4LiQxKCdibGlwJykuYXR0cigncjplbWJlZCcpKVxyXHR9LFxyXHRwcnN0R2VvbSh4KXtcclx0XHR2YXIgcHg9dGhpcy5wdDJQeCwgdz1weCh0aGlzLndvcmxkLndpZHRoKSwgaD1weCh0aGlzLndvcmxkLmhlaWdodCk7XHJcdFx0c3dpdGNoKHguYXR0cigncHJzdCcpKXtcclx0XHRjYXNlICdsZWZ0QnJhY2UnOlxyXHRcdFx0cmV0dXJuIHtzaGFwZToncGF0aCcsIHBhdGg6J00gJyt3KycgMCBMIDAgJytoLzIrJyBMICcrdysnICcraCsnIFonfVxyXHRcdGRlZmF1bHQ6XHJcdFx0XHRyZXR1cm4ge3NoYXBlOnguYXR0cigncHJzdCcpfVxyXHRcdH1cclx0fSxcclx0Y3VzdEdlb20oeCl7XHJcdFx0dmFyIHBhdGg9W10sIHB4PWZ1bmN0aW9uKHgpe3JldHVybiB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LCdjbScpKX0uYmluZCh0aGlzKTtcclx0XHRmb3IodmFyIGEsIGNoaWxkcmVuPXguJDEoJ3BhdGgnKS5jaGlsZE5vZGVzLCBsZW49Y2hpbGRyZW4ubGVuZ3RoLGk9MDtpPGxlbjtpKyspe1xyXHRcdFx0YT1jaGlsZHJlbltpXVxyXHRcdFx0c3dpdGNoKGEubG9jYWxOYW1lKXtcclx0XHRcdGNhc2UgJ21vdmVUbyc6XHJcdFx0XHRcdHBhdGgucHVzaCgnTSAnK3B4KGEuZmlyc3RDaGlsZC5hdHRyKCd4JykpKycgJytweChhLmZpcnN0Q2hpbGQuYXR0cigneScpKSlcclx0XHRcdFx0YnJlYWtcclx0XHRcdGNhc2UgJ2xuVG8nOlxyXHRcdFx0XHRwYXRoLnB1c2goJ0wgJytweChhLmZpcnN0Q2hpbGQuYXR0cigneCcpKSsnICcrcHgoYS5maXJzdENoaWxkLmF0dHIoJ3knKSkpXHJcdFx0XHRcdGJyZWFrXHJcdFx0XHRicmVha1xyXHRcdFx0Y2FzZSAnY3ViaWNCZXpUbyc6XHJcdFx0XHRcdHBhdGgucHVzaCgnTCAnK3B4KGEuY2hpbGROb2Rlc1swXS5hdHRyKCd4JykpKycgJytweChhLmNoaWxkTm9kZXNbMF0uYXR0cigneScpKSlcclx0XHRcdFx0cGF0aC5wdXNoKCdRICcrcHgoYS5jaGlsZE5vZGVzWzFdLmF0dHIoJ3gnKSkrJyAnK3B4KGEuY2hpbGROb2Rlc1sxXS5hdHRyKCd5JykpXHJcdFx0XHRcdFx0KycgJytweChhLmNoaWxkTm9kZXNbMl0uYXR0cigneCcpKSsnICcrcHgoYS5jaGlsZE5vZGVzWzJdLmF0dHIoJ3knKSkpXHJcdFx0XHRicmVha1xyXHRcdFx0fVxyXHRcdH1cclx0XHRyZXR1cm4ge3NoYXBlOidwYXRoJywgcGF0aDpwYXRoLmpvaW4oJyAnKX1cclx0fVxyfVxyIl19