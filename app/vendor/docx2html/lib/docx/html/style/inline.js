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

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inline = function (_Style) {
	(0, _inherits3.default)(Inline, _Style);

	function Inline() {
		(0, _classCallCheck3.default)(this, Inline);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Inline.__proto__ || (0, _getPrototypeOf2.default)(Inline)).apply(this, arguments));

		_this.style = _this.wordModel.id ? _this.doc.createStyle('.' + _converter2.default.asCssID(_this.wordModel.id)) : _this.doc.createStyle('span');
		_this.inline = new _this.constructor.Properties(_this.style);
		return _this;
	}

	(0, _createClass3.default)(Inline, [{
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter() {
			return this.inline;
		}
	}]);
	return Inline;
}(_converter2.default);

exports.default = Inline;


Inline.Properties = function (_Style$Properties) {
	(0, _inherits3.default)(Properties, _Style$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: 'rFonts',
		value: function rFonts(x) {
			x ? x.ascii && (this.style.fontFamily = x.ascii) : void 0;
		}
	}, {
		key: 'b',
		value: function b(x) {
			this.style.fontWeight = 700;
		}
	}, {
		key: 'sz',
		value: function sz(x) {
			this.style.fontSize = x + 'px';
		}
	}, {
		key: 'color',
		value: function color(x) {
			this.style.color = x;
		}
	}, {
		key: 'i',
		value: function i(x) {
			this.style.fontStyle = 'italics';
		}
	}, {
		key: 'u',
		value: function u(x) {
			this.style.textDecoration = 'underline';
		}
	}, {
		key: 'bdr',
		value: function bdr(x) {
			this.style.border = this._border(x);
		}
	}, {
		key: 'lang',
		value: function lang(x) {}
	}, {
		key: 'vertAlign',
		value: function vertAlign(x) {
			switch (x) {
				case 'superscript':
					this.style.verticalAlign = 'super';
					break;
				case 'subscript':
					this.style.verticalAlign = 'sub';
					break;
			}
		}
	}, {
		key: 'highlight',
		value: function highlight(x) {
			this.style.backgroundColor = x;
		}
	}]);
	return Properties;
}(_converter2.default.Properties);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvc3R5bGUvaW5saW5lLmpzIl0sIm5hbWVzIjpbIklubGluZSIsImFyZ3VtZW50cyIsInN0eWxlIiwid29yZE1vZGVsIiwiaWQiLCJkb2MiLCJjcmVhdGVTdHlsZSIsImFzQ3NzSUQiLCJpbmxpbmUiLCJjb25zdHJ1Y3RvciIsIlByb3BlcnRpZXMiLCJ4IiwiYXNjaWkiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJmb250U3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImJvcmRlciIsIl9ib3JkZXIiLCJ2ZXJ0aWNhbEFsaWduIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFcUJBLE07OztBQUNwQixtQkFBYTtBQUFBOztBQUFBLHFJQUNIQyxTQURHOztBQUVaLFFBQUtDLEtBQUwsR0FBVyxNQUFLQyxTQUFMLENBQWVDLEVBQWYsR0FBb0IsTUFBS0MsR0FBTCxDQUFTQyxXQUFULENBQXFCLE1BQUksb0JBQU1DLE9BQU4sQ0FBYyxNQUFLSixTQUFMLENBQWVDLEVBQTdCLENBQXpCLENBQXBCLEdBQWlGLE1BQUtDLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixNQUFyQixDQUE1RjtBQUNBLFFBQUtFLE1BQUwsR0FBWSxJQUFJLE1BQUtDLFdBQUwsQ0FBaUJDLFVBQXJCLENBQWdDLE1BQUtSLEtBQXJDLENBQVo7QUFIWTtBQUlaOzs7OzRDQUN3QjtBQUN4QixVQUFPLEtBQUtNLE1BQVo7QUFDQTs7Ozs7a0JBUm1CUixNOzs7QUFXckJBLE9BQU9VLFVBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBQ1FDLENBRFIsRUFDVTtBQUNSQSxPQUFJQSxFQUFFQyxLQUFGLEtBQVksS0FBS1YsS0FBTCxDQUFXVyxVQUFYLEdBQXNCRixFQUFFQyxLQUFwQyxDQUFKLEdBQWlELEtBQUssQ0FBdEQ7QUFDQTtBQUhGO0FBQUE7QUFBQSxvQkFJR0QsQ0FKSCxFQUlLO0FBQ0gsUUFBS1QsS0FBTCxDQUFXWSxVQUFYLEdBQXNCLEdBQXRCO0FBQ0E7QUFORjtBQUFBO0FBQUEscUJBT0lILENBUEosRUFPTTtBQUNKLFFBQUtULEtBQUwsQ0FBV2EsUUFBWCxHQUFvQkosSUFBRSxJQUF0QjtBQUNBO0FBVEY7QUFBQTtBQUFBLHdCQVVPQSxDQVZQLEVBVVM7QUFDUCxRQUFLVCxLQUFMLENBQVdjLEtBQVgsR0FBaUJMLENBQWpCO0FBQ0E7QUFaRjtBQUFBO0FBQUEsb0JBYUdBLENBYkgsRUFhSztBQUNILFFBQUtULEtBQUwsQ0FBV2UsU0FBWCxHQUFxQixTQUFyQjtBQUNBO0FBZkY7QUFBQTtBQUFBLG9CQWdCR04sQ0FoQkgsRUFnQks7QUFDSCxRQUFLVCxLQUFMLENBQVdnQixjQUFYLEdBQTBCLFdBQTFCO0FBQ0E7QUFsQkY7QUFBQTtBQUFBLHNCQW1CS1AsQ0FuQkwsRUFtQk87QUFDTCxRQUFLVCxLQUFMLENBQVdpQixNQUFYLEdBQWtCLEtBQUtDLE9BQUwsQ0FBYVQsQ0FBYixDQUFsQjtBQUNBO0FBckJGO0FBQUE7QUFBQSx1QkFzQk1BLENBdEJOLEVBc0JRLENBRU47QUF4QkY7QUFBQTtBQUFBLDRCQXlCV0EsQ0F6QlgsRUF5QmE7QUFDWCxXQUFPQSxDQUFQO0FBQ0EsU0FBSyxhQUFMO0FBQ0MsVUFBS1QsS0FBTCxDQUFXbUIsYUFBWCxHQUF5QixPQUF6QjtBQUNEO0FBQ0EsU0FBSyxXQUFMO0FBQ0MsVUFBS25CLEtBQUwsQ0FBV21CLGFBQVgsR0FBeUIsS0FBekI7QUFDRDtBQU5BO0FBUUE7QUFsQ0Y7QUFBQTtBQUFBLDRCQW1DV1YsQ0FuQ1gsRUFtQ2E7QUFDWCxRQUFLVCxLQUFMLENBQVdvQixlQUFYLEdBQTJCWCxDQUEzQjtBQUNBO0FBckNGO0FBQUE7QUFBQSxFQUEyQyxvQkFBTUQsVUFBakQiLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vY29udmVydGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5saW5lIGV4dGVuZHMgU3R5bGV7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMuc3R5bGU9dGhpcy53b3JkTW9kZWwuaWQgPyB0aGlzLmRvYy5jcmVhdGVTdHlsZSgnLicrU3R5bGUuYXNDc3NJRCh0aGlzLndvcmRNb2RlbC5pZCkpIDogdGhpcy5kb2MuY3JlYXRlU3R5bGUoJ3NwYW4nKVxyXG5cdFx0dGhpcy5pbmxpbmU9bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLnN0eWxlKVxyXG5cdH1cclxuXHRfZ2V0UHJvcGVydGllc0NvbnZlcnRlcigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5saW5lXHJcblx0fVxyXG59XHJcblxyXG5JbmxpbmUuUHJvcGVydGllcz1jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHRyRm9udHMoeCl7XHJcblx0XHR4ID8geC5hc2NpaSAmJiAodGhpcy5zdHlsZS5mb250RmFtaWx5PXguYXNjaWkpIDogdm9pZCAwO1xyXG5cdH1cclxuXHRiKHgpe1xyXG5cdFx0dGhpcy5zdHlsZS5mb250V2VpZ2h0PTcwMFxyXG5cdH1cclxuXHRzeih4KXtcclxuXHRcdHRoaXMuc3R5bGUuZm9udFNpemU9eCsncHgnXHJcblx0fVxyXG5cdGNvbG9yKHgpe1xyXG5cdFx0dGhpcy5zdHlsZS5jb2xvcj14XHJcblx0fVxyXG5cdGkoeCl7XHJcblx0XHR0aGlzLnN0eWxlLmZvbnRTdHlsZT0naXRhbGljcydcclxuXHR9XHJcblx0dSh4KXtcclxuXHRcdHRoaXMuc3R5bGUudGV4dERlY29yYXRpb249J3VuZGVybGluZSdcclxuXHR9XHJcblx0YmRyKHgpe1xyXG5cdFx0dGhpcy5zdHlsZS5ib3JkZXI9dGhpcy5fYm9yZGVyKHgpXHJcblx0fVxyXG5cdGxhbmcoeCl7XHJcblx0XHRcclxuXHR9XHJcblx0dmVydEFsaWduKHgpe1xyXG5cdFx0c3dpdGNoKHgpe1xyXG5cdFx0Y2FzZSAnc3VwZXJzY3JpcHQnOlxyXG5cdFx0XHR0aGlzLnN0eWxlLnZlcnRpY2FsQWxpZ249J3N1cGVyJ1xyXG5cdFx0YnJlYWtcclxuXHRcdGNhc2UgJ3N1YnNjcmlwdCc6XHJcblx0XHRcdHRoaXMuc3R5bGUudmVydGljYWxBbGlnbj0nc3ViJ1xyXG5cdFx0YnJlYWtcclxuXHRcdH1cclxuXHR9XHJcblx0aGlnaGxpZ2h0KHgpe1xyXG5cdFx0dGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9eFxyXG5cdH1cclxufSJdfQ==