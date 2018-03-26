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

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inline = function (_require) {
	(0, _inherits3.default)(inline, _require);

	function inline() {
		(0, _classCallCheck3.default)(this, inline);
		return (0, _possibleConstructorReturn3.default)(this, (inline.__proto__ || (0, _getPrototypeOf2.default)(inline)).apply(this, arguments));
	}

	(0, _createClass3.default)(inline, [{
		key: 'getStyleId',
		value: function getStyleId(a) {
			return this._val('>rPr>rStyle') || (a = this.wDoc.style.getDefault(_inline2.default.type)) && a.id;
		}
	}, {
		key: 'getNamedStyle',
		value: function getNamedStyle() {
			return this.wDoc.style.get(this.getStyleId());
		}
	}, {
		key: 'getDirectStyle',
		value: function getDirectStyle(pr) {
			return (pr = this.wXml.$1('>rPr')) && new _inline2.default.Properties(pr, this.wDoc, this);
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore(wXml) {
			return wXml.localName == 'rPr';
		}
	}, {
		key: 'isWebHidden',
		value: function isWebHidden() {
			return this.wXml.$1('>rPr>webHidden');
		}
	}, {
		key: 'isHidden',
		value: function isHidden() {
			return this.wXml.$1('>rPr>vanish');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'inline';
		}
	}]);
	return inline;
}(require('../model'));

exports.default = inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaW5saW5lLmpzIl0sIm5hbWVzIjpbImlubGluZSIsImEiLCJfdmFsIiwid0RvYyIsInN0eWxlIiwiZ2V0RGVmYXVsdCIsInR5cGUiLCJpZCIsImdldCIsImdldFN0eWxlSWQiLCJwciIsIndYbWwiLCIkMSIsIlByb3BlcnRpZXMiLCJsb2NhbE5hbWUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7NkJBQ1RDLEMsRUFBRTtBQUNaLFVBQU8sS0FBS0MsSUFBTCxDQUFVLGFBQVYsS0FBNkIsQ0FBQ0QsSUFBRSxLQUFLRSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFVBQWhCLENBQTJCLGlCQUFNQyxJQUFqQyxDQUFILEtBQThDTCxFQUFFTSxFQUFwRjtBQUNBOzs7a0NBQ2M7QUFDZCxVQUFPLEtBQUtKLElBQUwsQ0FBVUMsS0FBVixDQUFnQkksR0FBaEIsQ0FBb0IsS0FBS0MsVUFBTCxFQUFwQixDQUFQO0FBQ0E7OztpQ0FDY0MsRSxFQUFHO0FBQ2pCLFVBQU8sQ0FBQ0EsS0FBRyxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxNQUFiLENBQUosS0FBNkIsSUFBSSxpQkFBTUMsVUFBVixDQUFxQkgsRUFBckIsRUFBd0IsS0FBS1AsSUFBN0IsRUFBa0MsSUFBbEMsQ0FBcEM7QUFDQTs7O2dDQUNhUSxJLEVBQUs7QUFDbEIsVUFBT0EsS0FBS0csU0FBTCxJQUFnQixLQUF2QjtBQUNBOzs7Z0NBQ1k7QUFDWixVQUFPLEtBQUtILElBQUwsQ0FBVUMsRUFBVixDQUFhLGdCQUFiLENBQVA7QUFDQTs7OzZCQUNTO0FBQ1QsVUFBTyxLQUFLRCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxhQUFiLENBQVA7QUFDQTs7O3NCQUNnQjtBQUFDLFVBQU8sUUFBUDtBQUFnQjs7O0VBbkJDRyxRQUFRLFVBQVIsQzs7a0JBQWZmLE0iLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvaW5saW5lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5saW5lIGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKXtcclxuXHRnZXRTdHlsZUlkKGEpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3ZhbCgnPnJQcj5yU3R5bGUnKSB8fCAoKGE9dGhpcy53RG9jLnN0eWxlLmdldERlZmF1bHQoU3R5bGUudHlwZSkpICYmIGEuaWQpXHJcblx0fVxyXG5cdGdldE5hbWVkU3R5bGUoKXtcclxuXHRcdHJldHVybiB0aGlzLndEb2Muc3R5bGUuZ2V0KHRoaXMuZ2V0U3R5bGVJZCgpKSBcclxuXHR9XHJcblx0Z2V0RGlyZWN0U3R5bGUocHIpe1xyXG5cdFx0cmV0dXJuIChwcj10aGlzLndYbWwuJDEoJz5yUHInKSkgJiYgbmV3IFN0eWxlLlByb3BlcnRpZXMocHIsdGhpcy53RG9jLHRoaXMpXHJcblx0fVxyXG5cdF9zaG91bGRJZ25vcmUod1htbCl7XHJcblx0XHRyZXR1cm4gd1htbC5sb2NhbE5hbWU9PSdyUHInXHJcblx0fVxyXG5cdGlzV2ViSGlkZGVuKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53WG1sLiQxKCc+clByPndlYkhpZGRlbicpXHJcblx0fVxyXG5cdGlzSGlkZGVuKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53WG1sLiQxKCc+clByPnZhbmlzaCcpXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnaW5saW5lJ31cclxufVxyXG4iXX0=