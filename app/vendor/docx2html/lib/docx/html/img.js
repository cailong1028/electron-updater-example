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

var _graphic = require('./graphic');

var _graphic2 = _interopRequireDefault(_graphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_Graphic) {
	(0, _inherits3.default)(Image, _Graphic);

	function Image() {
		(0, _classCallCheck3.default)(this, Image);
		return (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).apply(this, arguments));
	}

	(0, _createClass3.default)(Image, [{
		key: 'convertStyle',
		value: function convertStyle(el) {
			(0, _get3.default)(Image.prototype.__proto__ || (0, _getPrototypeOf2.default)(Image.prototype), 'convertStyle', this).apply(this, arguments);
			var blob = this.wordModel.getImage();
			blob && (el.src = this.doc.asImageURL(blob));
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'img';
		}
	}]);
	return Image;
}(_graphic2.default);

exports.default = Image;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvaW1nLmpzIl0sIm5hbWVzIjpbIkltYWdlIiwiZWwiLCJhcmd1bWVudHMiLCJibG9iIiwid29yZE1vZGVsIiwiZ2V0SW1hZ2UiLCJzcmMiLCJkb2MiLCJhc0ltYWdlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7OytCQUdQQyxFLEVBQUc7QUFDZixxSUFBc0JDLFNBQXRCO0FBQ0EsT0FBSUMsT0FBSyxLQUFLQyxTQUFMLENBQWVDLFFBQWYsRUFBVDtBQUNBRixZQUFTRixHQUFHSyxHQUFILEdBQU8sS0FBS0MsR0FBTCxDQUFTQyxVQUFULENBQW9CTCxJQUFwQixDQUFoQjtBQUNBOzs7c0JBTlE7QUFBQyxVQUFPLEtBQVA7QUFBYTs7Ozs7a0JBREhILEsiLCJmaWxlIjoiaW1nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyYXBoaWMgZnJvbSAnLi9ncmFwaGljJ1x0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEdyYXBoaWN7XHJcblx0Z2V0IHRhZygpe3JldHVybiAnaW1nJ31cclxuXHRcclxuXHRjb252ZXJ0U3R5bGUoZWwpe1xyXG5cdFx0c3VwZXIuY29udmVydFN0eWxlKC4uLmFyZ3VtZW50cylcclxuXHRcdHZhciBibG9iPXRoaXMud29yZE1vZGVsLmdldEltYWdlKCk7XHJcblx0XHRibG9iICYmIChlbC5zcmM9dGhpcy5kb2MuYXNJbWFnZVVSTChibG9iKSk7XHJcblx0fVxyXG59Il19