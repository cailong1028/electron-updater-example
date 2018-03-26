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

var _table = require('./style/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tr = function (_Converter) {
	(0, _inherits3.default)(Tr, _Converter);

	function Tr() {
		(0, _classCallCheck3.default)(this, Tr);
		return (0, _possibleConstructorReturn3.default)(this, (Tr.__proto__ || (0, _getPrototypeOf2.default)(Tr)).apply(this, arguments));
	}

	(0, _createClass3.default)(Tr, [{
		key: 'convertStyle',
		value: function convertStyle(el) {
			(0, _get3.default)(Tr.prototype.__proto__ || (0, _getPrototypeOf2.default)(Tr.prototype), 'convertStyle', this).apply(this, arguments);
			var style = this.wordModel.getDirectStyle();
			style && style.parse([new this.constructor.Properties(el.style, this)]);
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'tr';
		}
	}]);
	return Tr;
}(_converter2.default);

exports.default = Tr;

var Properties = function (_Style$RowProperties) {
	(0, _inherits3.default)(Properties, _Style$RowProperties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: 'cnfStyle',
		value: function cnfStyle(x) {
			var names = [],
			    PrioritiziedStyles = _table2.default.prototype.PrioritiziedStyles,
			    level = -1,
			    t;
			for (var i = 0; i < 12; i++) {
				if (x.charAt(i) == '1') {
					names.push(t = _table2.default.TableStyles[i]);
					if ((t = PrioritiziedStyles.indexOf(t)) > level) level = t;
				}
			}
			names.length && Td.addClass(this.parent.content, names.join(' '));
			for (var i = 0; i < level; i++) {
				this.parent.content.setAttribute('x' + i, 1);
			}
		}
	}]);
	return Properties;
}(_table2.default.RowProperties);

Tr.Properties = Properties;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvdHIuanMiXSwibmFtZXMiOlsiVHIiLCJlbCIsImFyZ3VtZW50cyIsInN0eWxlIiwid29yZE1vZGVsIiwiZ2V0RGlyZWN0U3R5bGUiLCJwYXJzZSIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsIngiLCJuYW1lcyIsIlByaW9yaXRpemllZFN0eWxlcyIsInByb3RvdHlwZSIsImxldmVsIiwidCIsImkiLCJjaGFyQXQiLCJwdXNoIiwiVGFibGVTdHlsZXMiLCJpbmRleE9mIiwibGVuZ3RoIiwiVGQiLCJhZGRDbGFzcyIsInBhcmVudCIsImNvbnRlbnQiLCJqb2luIiwic2V0QXR0cmlidXRlIiwiUm93UHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7OytCQUdQQyxFLEVBQUc7QUFDZiwrSEFBc0JDLFNBQXRCO0FBQ0EsT0FBSUMsUUFBTSxLQUFLQyxTQUFMLENBQWVDLGNBQWYsRUFBVjtBQUNBRixZQUFTQSxNQUFNRyxLQUFOLENBQVksQ0FBQyxJQUFJLEtBQUtDLFdBQUwsQ0FBaUJDLFVBQXJCLENBQWdDUCxHQUFHRSxLQUFuQyxFQUEwQyxJQUExQyxDQUFELENBQVosQ0FBVDtBQUNBOzs7c0JBTlE7QUFBQyxVQUFPLElBQVA7QUFBWTs7Ozs7a0JBREZILEU7O0lBVWZRLFU7Ozs7Ozs7Ozs7MkJBQ0lDLEMsRUFBRTtBQUNWLE9BQUlDLFFBQU0sRUFBVjtBQUFBLE9BQWNDLHFCQUFtQixnQkFBTUMsU0FBTixDQUFnQkQsa0JBQWpEO0FBQUEsT0FBcUVFLFFBQU0sQ0FBQyxDQUE1RTtBQUFBLE9BQStFQyxDQUEvRTtBQUNBLFFBQUksSUFBSUMsSUFBRSxDQUFWLEVBQVlBLElBQUUsRUFBZCxFQUFpQkEsR0FBakIsRUFBcUI7QUFDcEIsUUFBR04sRUFBRU8sTUFBRixDQUFTRCxDQUFULEtBQWEsR0FBaEIsRUFBb0I7QUFDbkJMLFdBQU1PLElBQU4sQ0FBV0gsSUFBRSxnQkFBTUksV0FBTixDQUFrQkgsQ0FBbEIsQ0FBYjtBQUNBLFNBQUcsQ0FBQ0QsSUFBRUgsbUJBQW1CUSxPQUFuQixDQUEyQkwsQ0FBM0IsQ0FBSCxJQUFrQ0QsS0FBckMsRUFDQ0EsUUFBTUMsQ0FBTjtBQUNEO0FBQ0Q7QUFDREosU0FBTVUsTUFBTixJQUFnQkMsR0FBR0MsUUFBSCxDQUFZLEtBQUtDLE1BQUwsQ0FBWUMsT0FBeEIsRUFBZ0NkLE1BQU1lLElBQU4sQ0FBVyxHQUFYLENBQWhDLENBQWhCO0FBQ0EsUUFBSSxJQUFJVixJQUFFLENBQVYsRUFBWUEsSUFBRUYsS0FBZCxFQUFvQkUsR0FBcEI7QUFDQyxTQUFLUSxNQUFMLENBQVlDLE9BQVosQ0FBb0JFLFlBQXBCLENBQWlDLE1BQUlYLENBQXJDLEVBQXVDLENBQXZDO0FBREQ7QUFFQTs7O0VBYnVCLGdCQUFNWSxhOztBQWdCL0IzQixHQUFHUSxVQUFILEdBQWNBLFVBQWQiLCJmaWxlIjoidHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udmVydGVyIGZyb20gJy4vY29udmVydGVyJ1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS90YWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyIGV4dGVuZHMgQ29udmVydGVye1xyXG5cdGdldCB0YWcoKXtyZXR1cm4gJ3RyJ31cclxuXHJcblx0Y29udmVydFN0eWxlKGVsKXtcclxuXHRcdHN1cGVyLmNvbnZlcnRTdHlsZSguLi5hcmd1bWVudHMpXHJcblx0XHR2YXIgc3R5bGU9dGhpcy53b3JkTW9kZWwuZ2V0RGlyZWN0U3R5bGUoKVxyXG5cdFx0c3R5bGUgJiYgc3R5bGUucGFyc2UoW25ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXMoZWwuc3R5bGUsIHRoaXMpXSlcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Sb3dQcm9wZXJ0aWVze1xyXG5cdGNuZlN0eWxlKHgpe1xyXG5cdFx0dmFyIG5hbWVzPVtdLCBQcmlvcml0aXppZWRTdHlsZXM9U3R5bGUucHJvdG90eXBlLlByaW9yaXRpemllZFN0eWxlcywgbGV2ZWw9LTEsIHRcclxuXHRcdGZvcih2YXIgaT0wO2k8MTI7aSsrKXtcclxuXHRcdFx0aWYoeC5jaGFyQXQoaSk9PScxJyl7XHJcblx0XHRcdFx0bmFtZXMucHVzaCh0PVN0eWxlLlRhYmxlU3R5bGVzW2ldKVxyXG5cdFx0XHRcdGlmKCh0PVByaW9yaXRpemllZFN0eWxlcy5pbmRleE9mKHQpKT5sZXZlbClcclxuXHRcdFx0XHRcdGxldmVsPXRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bmFtZXMubGVuZ3RoICYmIFRkLmFkZENsYXNzKHRoaXMucGFyZW50LmNvbnRlbnQsbmFtZXMuam9pbignICcpKTtcclxuXHRcdGZvcih2YXIgaT0wO2k8bGV2ZWw7aSsrKVxyXG5cdFx0XHR0aGlzLnBhcmVudC5jb250ZW50LnNldEF0dHJpYnV0ZSgneCcraSwxKVxyXG5cdH1cclxufVxyXG5cclxuVHIuUHJvcGVydGllcz1Qcm9wZXJ0aWVzIl19