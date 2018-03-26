'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

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

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

var _numbering = require('./numbering');

var _numbering2 = _interopRequireDefault(_numbering);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = function (_Style) {
	(0, _inherits3.default)(Paragraph, _Style);

	function Paragraph() {
		(0, _classCallCheck3.default)(this, Paragraph);
		return (0, _possibleConstructorReturn3.default)(this, (Paragraph.__proto__ || (0, _getPrototypeOf2.default)(Paragraph)).apply(this, arguments));
	}

	(0, _createClass3.default)(Paragraph, [{
		key: 'getOutlineLevel',
		value: function getOutlineLevel(v) {
			if ((v = this._val('outlineLvl')) != null) return parseInt(v);
			if ((v = this.getParentStyle()) != null && v.getOutlineLevel) return v.getOutlineLevel();
			return -1;
		}
	}, {
		key: 'getNumId',
		value: function getNumId(v) {
			if ((v = this._val('numId')) != null) return v;
			if ((v = this.getParentStyle()) != null && v.getNumId) return v.getNumId();
			return -1;
		}
	}, {
		key: 'asNumberingStyle',
		value: function asNumberingStyle() {
			var _Numbering$prototype$;

			return (_Numbering$prototype$ = _numbering2.default.prototype.asNumberingStyle).call.apply(_Numbering$prototype$, [this].concat(Array.prototype.slice.call(arguments)));
		}
	}, {
		key: '_iterate',
		value: function _iterate(f, factories, visitors) {
			var pr = this.wXml.$1('pPr');
			pr && new this.constructor.Properties(pr, this.wDoc, this).parse(visitors);

			(pr = this.wXml.$1('rPr')) && new _inline2.default.Properties(pr, this.wDoc, this).parse(visitors);

			(pr = this.wXml.$1('numPr')) && new _numbering2.default.Properties(pr, this.wDoc, this).parse(visitors);

			(pr = this.wXml.$1('framePr')) && new this.constructor.FrameProperties(pr, this.wDoc, this).parse(visitors);
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'style.paragraph';
		}
	}, {
		key: 'Properties',
		get: function get() {
			return Properties;
		}
	}, {
		key: 'FrameProperties',
		get: function get() {
			return FrameProperties;
		}
	}]);
	return Paragraph;
}(_style2.default);

exports.default = Paragraph;

var Properties = function (_Style$Properties) {
	(0, _inherits3.default)(Properties, _Style$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: 'jc',
		value: function jc(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'ind',
		value: function ind(x) {
			var _this3 = this;

			return this.asObject(x, function (a) {
				return _this3.pt2Px(_this3.asPt(a));
			});
		}
	}, {
		key: 'spacing',
		value: function spacing(x) {
			var r = this.asObject(x),
			    o = {};

			if (!r.beforeAutospacing && r.beforeLines) o.top = this.pt2Px(this.asPt(r.beforeLines));else if (r.before) o.top = this.pt2Px(this.asPt(r.before));

			if (!r.afterAutospacing && r.afterLines) o.bottom = this.pt2Px(this.asPt(r.afterLines));else if (r.after) o.bottom = this.pt2Px(this.asPt(r.after));

			if (!r.line) return o;

			switch (x.lineRule) {
				case 'atLeast':
				case 'exact':
					o.lineHeight = this.pt2Px(this.asPt(x.line));
					break;
				case 'auto':
				default:
					o.lineHeight = parseInt(r.line) * 100 / 240 + '%';
			}
			o.lineRule = x.lineRule;
			return o;
		}
	}, {
		key: 'pBdr',
		value: function pBdr(x) {
			var r = {};
			var bdr = _inline2.default.Properties.prototype.bdr.bind(this);
			(0, _from2.default)(x.childNodes).forEach(function (a) {
				return a.localName && (r[a.localName] = bdr(a));
			});
			return r;
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'paragraph';
		}
	}]);
	return Properties;
}(_style2.default.Properties);

var FrameProperties = function (_Style$Properties2) {
	(0, _inherits3.default)(FrameProperties, _Style$Properties2);

	function FrameProperties() {
		(0, _classCallCheck3.default)(this, FrameProperties);
		return (0, _possibleConstructorReturn3.default)(this, (FrameProperties.__proto__ || (0, _getPrototypeOf2.default)(FrameProperties)).apply(this, arguments));
	}

	(0, _createClass3.default)(FrameProperties, null, [{
		key: 'type',
		get: function get() {
			return 'frame';
		}
	}]);
	return FrameProperties;
}(_style2.default.Properties);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbIlBhcmFncmFwaCIsInYiLCJfdmFsIiwicGFyc2VJbnQiLCJnZXRQYXJlbnRTdHlsZSIsImdldE91dGxpbmVMZXZlbCIsImdldE51bUlkIiwicHJvdG90eXBlIiwiYXNOdW1iZXJpbmdTdHlsZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwciIsIndYbWwiLCIkMSIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsIndEb2MiLCJwYXJzZSIsIkZyYW1lUHJvcGVydGllcyIsIngiLCJhdHRyIiwiYXNPYmplY3QiLCJwdDJQeCIsImFzUHQiLCJhIiwiciIsIm8iLCJiZWZvcmVBdXRvc3BhY2luZyIsImJlZm9yZUxpbmVzIiwidG9wIiwiYmVmb3JlIiwiYWZ0ZXJBdXRvc3BhY2luZyIsImFmdGVyTGluZXMiLCJib3R0b20iLCJhZnRlciIsImxpbmUiLCJsaW5lUnVsZSIsImxpbmVIZWlnaHQiLCJiZHIiLCJiaW5kIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJsb2NhbE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7O2tDQUNKQyxDLEVBQUU7QUFDakIsT0FBRyxDQUFDQSxJQUFFLEtBQUtDLElBQUwsQ0FBVSxZQUFWLENBQUgsS0FBNkIsSUFBaEMsRUFDQyxPQUFPQyxTQUFTRixDQUFULENBQVA7QUFDRCxPQUFHLENBQUNBLElBQUUsS0FBS0csY0FBTCxFQUFILEtBQTJCLElBQTNCLElBQW1DSCxFQUFFSSxlQUF4QyxFQUNDLE9BQU9KLEVBQUVJLGVBQUYsRUFBUDtBQUNELFVBQU8sQ0FBQyxDQUFSO0FBQ0E7OzsyQkFDUUosQyxFQUFFO0FBQ1YsT0FBRyxDQUFDQSxJQUFFLEtB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LENBQVQ7O0FBRUQsT0FBRyxDQUFDVCxFQUFFVSxJQUFOLEVBQ0MsT0FBT1QsQ0FBUDs7QUFFRCxXQUFPUCxFQUFFaUIsUUFBVDtBQUNBLFNBQUssU0FBTDtBQUNBLFNBQUssT0FBTDtBQUNDVixPQUFFVyxVQUFGLEdBQWEsS0FBS2YsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVUosRUFBRWdCLElBQVosQ0FBWCxDQUFiO0FBQ0E7QUFDRCxTQUFLLE1BQUw7QUFDQTtBQUNDVCxPQUFFVyxVQUFGLEdBQWNyQyxTQUFTeUIsRUFBRVUsSUFBWCxJQUFpQixHQUFqQixHQUFxQixHQUF0QixHQUEyQixHQUF4QztBQVBEO0FBU0FULEtBQUVVLFFBQUYsR0FBV2pCLEVBQUVpQixRQUFiO0FBQ0EsVUFBT1YsQ0FBUDtBQUNBOzs7dUJBQ0lQLEMsRUFBRTtBQUNOLE9BQUlNLElBQUUsRUFBTjtBQUNBLE9BQUlhLE1BQUksaUJBQU92QixVQUFQLENBQWtCWCxTQUFsQixDQUE0QmtDLEdBQTVCLENBQWdDQyxJQUFoQyxDQUFxQyxJQUFyQyxDQUFSO0FBQ0EsdUJBQVdwQixFQUFFcUIsVUFBYixFQUF5QkMsT0FBekIsQ0FBaUM7QUFBQSxXQUFHakIsRUFBRWtCLFNBQUYsS0FBZ0JqQixFQUFFRCxFQUFFa0IsU0FBSixJQUFlSixJQUFJZCxDQUFKLENBQS9CLENBQUg7QUFBQSxJQUFqQztBQUNBLFVBQU9DLENBQVA7QUFDQTs7O3NCQUNnQjtBQUFDLFVBQU8sV0FBUDtBQUFtQjs7O0VBekNiLGdCQUFNVixVOztJQTRDekJHLGU7Ozs7Ozs7Ozs7c0JBQ1k7QUFBQyxVQUFPLE9BQVA7QUFBZTs7O0VBREosZ0JBQU1ILFUiLCJmaWxlIjoicGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlJ1xyXG5pbXBvcnQgSW5saW5lIGZyb20gJy4vaW5saW5lJ1xyXG5pbXBvcnQgTnVtYmVyaW5nIGZyb20gJy4vbnVtYmVyaW5nJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGggZXh0ZW5kcyBTdHlsZXtcclxuXHRnZXRPdXRsaW5lTGV2ZWwodil7XHJcblx0XHRpZigodj10aGlzLl92YWwoJ291dGxpbmVMdmwnKSkhPW51bGwpXHJcblx0XHRcdHJldHVybiBwYXJzZUludCh2KVxyXG5cdFx0aWYoKHY9dGhpcy5nZXRQYXJlbnRTdHlsZSgpKSE9bnVsbCAmJiB2LmdldE91dGxpbmVMZXZlbClcclxuXHRcdFx0cmV0dXJuIHYuZ2V0T3V0bGluZUxldmVsKClcclxuXHRcdHJldHVybiAtMVxyXG5cdH1cclxuXHRnZXROdW1JZCh2KXtcclxuXHRcdGlmKCh2PXRoaXMuX3ZhbCgnbnVtSWQnKSkhPW51bGwpXHJcblx0XHRcdHJldHVybiB2XHJcblx0XHRpZigodj10aGlzLmdldFBhcmVudFN0eWxlKCkpIT1udWxsICYmIHYuZ2V0TnVtSWQpXHJcblx0XHRcdHJldHVybiB2LmdldE51bUlkKClcclxuXHRcdHJldHVybiAtMVxyXG5cdH1cclxuXHRhc051bWJlcmluZ1N0eWxlKCl7XHJcblx0XHRyZXR1cm4gTnVtYmVyaW5nLnByb3RvdHlwZS5hc051bWJlcmluZ1N0eWxlLmNhbGwodGhpcywuLi5hcmd1bWVudHMpXHJcblx0fVxyXG5cdF9pdGVyYXRlKGYsIGZhY3RvcmllcywgdmlzaXRvcnMpe1xyXG5cdFx0dmFyIHByPXRoaXMud1htbC4kMSgncFByJylcclxuXHRcdHByICYmIG5ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcclxuXHJcblx0XHQocHI9dGhpcy53WG1sLiQxKCdyUHInKSkgJiYgbmV3IElubGluZS5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XHJcblxyXG5cdFx0KHByPXRoaXMud1htbC4kMSgnbnVtUHInKSkgJiYgbmV3IE51bWJlcmluZy5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKS5wYXJzZSh2aXNpdG9ycyk7XHJcblxyXG5cdFx0KHByPXRoaXMud1htbC4kMSgnZnJhbWVQcicpKSAmJiBuZXcgdGhpcy5jb25zdHJ1Y3Rvci5GcmFtZVByb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHZpc2l0b3JzKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnc3R5bGUucGFyYWdyYXBoJ31cclxuXHJcblx0c3RhdGljIGdldCBQcm9wZXJ0aWVzKCl7cmV0dXJuIFByb3BlcnRpZXN9XHJcblxyXG5cdHN0YXRpYyBnZXQgRnJhbWVQcm9wZXJ0aWVzKCl7cmV0dXJuIEZyYW1lUHJvcGVydGllc31cclxufVxyXG5jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHRqYyh4KXtcclxuXHRcdHJldHVybiB4LmF0dHIoJ3c6dmFsJylcclxuXHR9XHJcblx0aW5kKHgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuYXNPYmplY3QoeCwgYT0+dGhpcy5wdDJQeCh0aGlzLmFzUHQoYSkpKVxyXG5cdH1cclxuXHRzcGFjaW5nKHgpe1xyXG5cdFx0dmFyIHI9dGhpcy5hc09iamVjdCh4KSwgbz17fVxyXG5cclxuXHRcdGlmKCFyLmJlZm9yZUF1dG9zcGFjaW5nICYmIHIuYmVmb3JlTGluZXMpXHJcblx0XHRcdG8udG9wPXRoaXMucHQyUHgodGhpcy5hc1B0KHIuYmVmb3JlTGluZXMpKVxyXG5cdFx0ZWxzZSBpZihyLmJlZm9yZSlcclxuXHRcdFx0by50b3A9dGhpcy5wdDJQeCh0aGlzLmFzUHQoci5iZWZvcmUpKVxyXG5cclxuXHRcdGlmKCFyLmFmdGVyQXV0b3NwYWNpbmcgJiYgci5hZnRlckxpbmVzKVxyXG5cdFx0XHRvLmJvdHRvbT10aGlzLnB0MlB4KHRoaXMuYXNQdChyLmFmdGVyTGluZXMpKVxyXG5cdFx0ZWxzZSBpZihyLmFmdGVyKVxyXG5cdFx0XHRvLmJvdHRvbT10aGlzLnB0MlB4KHRoaXMuYXNQdChyLmFmdGVyKSlcclxuXHJcblx0XHRpZighci5saW5lKVxyXG5cdFx0XHRyZXR1cm4gb1xyXG5cclxuXHRcdHN3aXRjaCh4LmxpbmVSdWxlKXtcclxuXHRcdGNhc2UgJ2F0TGVhc3QnOlxyXG5cdFx0Y2FzZSAnZXhhY3QnOlxyXG5cdFx0XHRvLmxpbmVIZWlnaHQ9dGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5saW5lKSlcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJ2F1dG8nOlxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0by5saW5lSGVpZ2h0PShwYXJzZUludChyLmxpbmUpKjEwMC8yNDApKyclJ1xyXG5cdFx0fVxyXG5cdFx0by5saW5lUnVsZT14LmxpbmVSdWxlXHJcblx0XHRyZXR1cm4gb1xyXG5cdH1cclxuXHRwQmRyKHgpe1xyXG5cdFx0bGV0IHI9e31cclxuXHRcdGxldCBiZHI9SW5saW5lLlByb3BlcnRpZXMucHJvdG90eXBlLmJkci5iaW5kKHRoaXMpXHJcblx0XHRBcnJheS5mcm9tKHguY2hpbGROb2RlcykuZm9yRWFjaChhPT5hLmxvY2FsTmFtZSAmJiAoclthLmxvY2FsTmFtZV09YmRyKGEpKSlcclxuXHRcdHJldHVybiByXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAncGFyYWdyYXBoJ31cclxufVxyXG5cclxuY2xhc3MgRnJhbWVQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2ZyYW1lJ31cclxufVxyXG4iXX0=