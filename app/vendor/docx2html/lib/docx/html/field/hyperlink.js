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

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uptrim(el) {
	var parent = el.parentNode;
	parent.removeChild(el);
	if (parent.childNodes.length == 0) uptrim(parent);
}

var Hyperlink = function (_Field) {
	(0, _inherits3.default)(Hyperlink, _Field);

	function Hyperlink() {
		(0, _classCallCheck3.default)(this, Hyperlink);
		return (0, _possibleConstructorReturn3.default)(this, (Hyperlink.__proto__ || (0, _getPrototypeOf2.default)(Hyperlink)).apply(this, arguments));
	}

	(0, _createClass3.default)(Hyperlink, [{
		key: 'convert',
		value: function convert(elEnd) {
			//cl 1803
			// var a=this.doc.createElement('a')
			// a.href=this.wordModel.getLink()
			// elEnd.id=this.doc.uid()
			//
			// var current=this.elStart, parent=current.parentNode
			// while(!parent.querySelector('#'+elEnd.id)){
			// 	current=parent
			// 	parent=current.parentNode
			// }
			// parent.insertBefore(a, current)
			// while(a.nextSibling)
			// 	a.appendChild(a.nextSibling)
			//
			// uptrim(this.elStart)
			// uptrim(elEnd)
		}
	}]);
	return Hyperlink;
}(_field2.default);

exports.default = Hyperlink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvZmllbGQvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbInVwdHJpbSIsImVsIiwicGFyZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIkh5cGVybGluayIsImVsRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxFQUFoQixFQUFtQjtBQUNsQixLQUFJQyxTQUFPRCxHQUFHRSxVQUFkO0FBQ0FELFFBQU9FLFdBQVAsQ0FBbUJILEVBQW5CO0FBQ0EsS0FBR0MsT0FBT0csVUFBUCxDQUFrQkMsTUFBbEIsSUFBMEIsQ0FBN0IsRUFDQ04sT0FBT0UsTUFBUDtBQUNEOztJQUNvQkssUzs7Ozs7Ozs7OzswQkFDWkMsSyxFQUFNO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7a0JBbEJtQkQsUyIsImZpbGUiOiJoeXBlcmxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmllbGQgZnJvbSAnLi9maWVsZCdcclxuXHJcbmZ1bmN0aW9uIHVwdHJpbShlbCl7XHJcblx0dmFyIHBhcmVudD1lbC5wYXJlbnROb2RlXHJcblx0cGFyZW50LnJlbW92ZUNoaWxkKGVsKVxyXG5cdGlmKHBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aD09MClcclxuXHRcdHVwdHJpbShwYXJlbnQpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHlwZXJsaW5rIGV4dGVuZHMgRmllbGR7XHJcblx0Y29udmVydChlbEVuZCl7XHJcblx0XHQvL2NsIDE4MDNcclxuXHRcdC8vIHZhciBhPXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cdFx0Ly8gYS5ocmVmPXRoaXMud29yZE1vZGVsLmdldExpbmsoKVxyXG5cdFx0Ly8gZWxFbmQuaWQ9dGhpcy5kb2MudWlkKClcclxuXHRcdC8vXHJcblx0XHQvLyB2YXIgY3VycmVudD10aGlzLmVsU3RhcnQsIHBhcmVudD1jdXJyZW50LnBhcmVudE5vZGVcclxuXHRcdC8vIHdoaWxlKCFwYXJlbnQucXVlcnlTZWxlY3RvcignIycrZWxFbmQuaWQpKXtcclxuXHRcdC8vIFx0Y3VycmVudD1wYXJlbnRcclxuXHRcdC8vIFx0cGFyZW50PWN1cnJlbnQucGFyZW50Tm9kZVxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gcGFyZW50Lmluc2VydEJlZm9yZShhLCBjdXJyZW50KVxyXG5cdFx0Ly8gd2hpbGUoYS5uZXh0U2libGluZylcclxuXHRcdC8vIFx0YS5hcHBlbmRDaGlsZChhLm5leHRTaWJsaW5nKVxyXG5cdFx0Ly9cclxuXHRcdC8vIHVwdHJpbSh0aGlzLmVsU3RhcnQpXHJcblx0XHQvLyB1cHRyaW0oZWxFbmQpXHJcblx0fVxyXG59Il19