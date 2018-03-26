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

var _paragraph = require('./style/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paragraph = function (_require) {
	(0, _inherits3.default)(paragraph, _require);

	function paragraph() {
		(0, _classCallCheck3.default)(this, paragraph);
		return (0, _possibleConstructorReturn3.default)(this, (paragraph.__proto__ || (0, _getPrototypeOf2.default)(paragraph)).apply(this, arguments));
	}

	(0, _createClass3.default)(paragraph, [{
		key: 'getStyleId',
		value: function getStyleId(a) {
			return this._val('>pPr>pStyle') || (a = this.wDoc.style.getDefault(_paragraph2.default.type)) && a.id;
		}
	}, {
		key: 'getNamedStyle',
		value: function getNamedStyle() {
			return this.wDoc.style.get(this.getStyleId());
		}
	}, {
		key: 'getDirectStyle',
		value: function getDirectStyle(pr) {
			if (pr = this.wXml.$1('>pPr')) return new _paragraph2.default.Properties(pr, this.wDoc, this);
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore(wXml) {
			return wXml.localName == 'pPr';
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'paragraph';
		}
	}]);
	return paragraph;
}(require('../model'));

exports.default = paragraph;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbInBhcmFncmFwaCIsImEiLCJfdmFsIiwid0RvYyIsInN0eWxlIiwiZ2V0RGVmYXVsdCIsInR5cGUiLCJpZCIsImdldCIsImdldFN0eWxlSWQiLCJwciIsIndYbWwiLCIkMSIsIlByb3BlcnRpZXMiLCJsb2NhbE5hbWUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7NkJBQ1RDLEMsRUFBRTtBQUNaLFVBQU8sS0FBS0MsSUFBTCxDQUFVLGFBQVYsS0FBNEIsQ0FBQ0QsSUFBRSxLQUFLRSxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFVBQWhCLENBQTJCLG9CQUFNQyxJQUFqQyxDQUFILEtBQThDTCxFQUFFTSxFQUFuRjtBQUNBOzs7a0NBQ2M7QUFDZCxVQUFPLEtBQUtKLElBQUwsQ0FBVUMsS0FBVixDQUFnQkksR0FBaEIsQ0FBb0IsS0FBS0MsVUFBTCxFQUFwQixDQUFQO0FBQ0E7OztpQ0FDY0MsRSxFQUFHO0FBQ2pCLE9BQUdBLEtBQUcsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFOLEVBQ0MsT0FBTyxJQUFJLG9CQUFNQyxVQUFWLENBQXFCSCxFQUFyQixFQUF3QixLQUFLUCxJQUE3QixFQUFrQyxJQUFsQyxDQUFQO0FBQ0Q7OztnQ0FDYVEsSSxFQUFLO0FBQ2xCLFVBQU9BLEtBQUtHLFNBQUwsSUFBZ0IsS0FBdkI7QUFDQTs7O3NCQUNnQjtBQUFDLFVBQU8sV0FBUDtBQUFtQjs7O0VBZENDLFFBQVEsVUFBUixDOztrQkFBbEJmLFMiLCJmaWxlIjoicGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gXCIuL3N0eWxlL3BhcmFncmFwaFwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhcmFncmFwaCBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0Z2V0U3R5bGVJZChhKXtcclxuXHRcdHJldHVybiB0aGlzLl92YWwoJz5wUHI+cFN0eWxlJyl8fCAoKGE9dGhpcy53RG9jLnN0eWxlLmdldERlZmF1bHQoU3R5bGUudHlwZSkpICYmIGEuaWQpXHJcblx0fVxyXG5cdGdldE5hbWVkU3R5bGUoKXtcclxuXHRcdHJldHVybiB0aGlzLndEb2Muc3R5bGUuZ2V0KHRoaXMuZ2V0U3R5bGVJZCgpKVxyXG5cdH1cclxuXHRnZXREaXJlY3RTdHlsZShwcil7XHJcblx0XHRpZihwcj10aGlzLndYbWwuJDEoJz5wUHInKSlcclxuXHRcdFx0cmV0dXJuIG5ldyBTdHlsZS5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKVxyXG5cdH1cclxuXHRfc2hvdWxkSWdub3JlKHdYbWwpe1xyXG5cdFx0cmV0dXJuIHdYbWwubG9jYWxOYW1lPT0ncFByJ1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3BhcmFncmFwaCd9XHJcbn1cclxuIl19