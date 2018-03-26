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

var Date = function (_Field) {
	(0, _inherits3.default)(Date, _Field);

	function Date() {
		(0, _classCallCheck3.default)(this, Date);
		return (0, _possibleConstructorReturn3.default)(this, (Date.__proto__ || (0, _getPrototypeOf2.default)(Date)).apply(this, arguments));
	}

	(0, _createClass3.default)(Date, null, [{
		key: 'type',
		get: function get() {
			return 'field.date';
		}
	}, {
		key: 'FieldCode',
		get: function get() {
			return FieldCode;
		}
	}]);
	return Date;
}(_field2.default);

exports.default = Date;

var FieldCode = function (_Code) {
	(0, _inherits3.default)(FieldCode, _Code);

	function FieldCode() {
		(0, _classCallCheck3.default)(this, FieldCode);
		return (0, _possibleConstructorReturn3.default)(this, (FieldCode.__proto__ || (0, _getPrototypeOf2.default)(FieldCode)).apply(this, arguments));
	}

	(0, _createClass3.default)(FieldCode, [{
		key: 'parse',
		value: function parse() {
			var option = null;
			while (option = this.nextSwitch()) {
				switch (option.type) {
					case '@':
						var i = option.data.indexOf('"');
						if (i != -1) this.format = option.data.substring(0, i);else this.format = option.data;
						break;
				}
			}
		}
	}]);
	return FieldCode;
}(_field.FieldCode);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGQvZGF0ZS5qcyJdLCJuYW1lcyI6WyJEYXRlIiwiRmllbGRDb2RlIiwib3B0aW9uIiwibmV4dFN3aXRjaCIsInR5cGUiLCJpIiwiZGF0YSIsImluZGV4T2YiLCJmb3JtYXQiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7OztzQkFDSDtBQUFDLFVBQU8sWUFBUDtBQUFvQjs7O3NCQUNoQjtBQUFDLFVBQU9DLFNBQVA7QUFBaUI7Ozs7O2tCQUZwQkQsSTs7SUFLZkMsUzs7Ozs7Ozs7OzswQkFDRTtBQUNOLE9BQUlDLFNBQU8sSUFBWDtBQUNBLFVBQU1BLFNBQU8sS0FBS0MsVUFBTCxFQUFiLEVBQStCO0FBQzlCLFlBQU9ELE9BQU9FLElBQWQ7QUFDQSxVQUFLLEdBQUw7QUFDQyxVQUFJQyxJQUFFSCxPQUFPSSxJQUFQLENBQVlDLE9BQVosQ0FBb0IsR0FBcEIsQ0FBTjtBQUNBLFVBQUdGLEtBQUcsQ0FBQyxDQUFQLEVBQ0MsS0FBS0csTUFBTCxHQUFZTixPQUFPSSxJQUFQLENBQVlHLFNBQVosQ0FBc0IsQ0FBdEIsRUFBd0JKLENBQXhCLENBQVosQ0FERCxLQUdDLEtBQUtHLE1BQUwsR0FBWU4sT0FBT0ksSUFBbkI7QUFDRDtBQVBEO0FBU0E7QUFDRCIsImZpbGUiOiJkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpZWxkLCB7RmllbGRDb2RlIGFzIENvZGV9IGZyb20gXCIuL2ZpZWxkXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGUgZXh0ZW5kcyBGaWVsZHtcclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2ZpZWxkLmRhdGUnfVxyXG5cdHN0YXRpYyBnZXQgRmllbGRDb2RlKCl7cmV0dXJuIEZpZWxkQ29kZX1cclxufVxyXG5cclxuY2xhc3MgRmllbGRDb2RlIGV4dGVuZHMgQ29kZXtcclxuXHRwYXJzZSgpe1xyXG5cdFx0dmFyIG9wdGlvbj1udWxsO1xyXG5cdFx0d2hpbGUob3B0aW9uPXRoaXMubmV4dFN3aXRjaCgpKXtcclxuXHRcdFx0c3dpdGNoKG9wdGlvbi50eXBlKXtcclxuXHRcdFx0Y2FzZSAnQCc6XHJcblx0XHRcdFx0dmFyIGk9b3B0aW9uLmRhdGEuaW5kZXhPZignXCInKTtcclxuXHRcdFx0XHRpZihpIT0tMSlcclxuXHRcdFx0XHRcdHRoaXMuZm9ybWF0PW9wdGlvbi5kYXRhLnN1YnN0cmluZygwLGkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMuZm9ybWF0PW9wdGlvbi5kYXRhO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==