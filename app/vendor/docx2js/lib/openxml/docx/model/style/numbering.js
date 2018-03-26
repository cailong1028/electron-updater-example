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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//<styls><style type="numbering">
var Numbering = function (_require) {
	(0, _inherits3.default)(Numbering, _require);

	function Numbering() {
		(0, _classCallCheck3.default)(this, Numbering);
		return (0, _possibleConstructorReturn3.default)(this, (Numbering.__proto__ || (0, _getPrototypeOf2.default)(Numbering)).apply(this, arguments));
	}

	(0, _createClass3.default)(Numbering, [{
		key: 'getNumId',
		value: function getNumId() {
			return this.wXml.$1('numId').attr('w:val');
		}
	}, {
		key: 'asNumberingStyle',
		value: function asNumberingStyle() {
			return this.wDoc.style.get(require('./list').asStyleId(this.getNumId()));
		}
	}, {
		key: '_iterate',
		value: function _iterate() {}
	}], [{
		key: 'type',
		get: function get() {
			return 'style.numbering';
		}
	}]);
	return Numbering;
}(require('../style'));

exports.default = Numbering;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvbnVtYmVyaW5nLmpzIl0sIm5hbWVzIjpbIk51bWJlcmluZyIsIndYbWwiLCIkMSIsImF0dHIiLCJ3RG9jIiwic3R5bGUiLCJnZXQiLCJyZXF1aXJlIiwiYXNTdHlsZUlkIiwiZ2V0TnVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUNxQkEsUzs7Ozs7Ozs7Ozs2QkFHVjtBQUNULFVBQU8sS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQkMsSUFBdEIsQ0FBMkIsT0FBM0IsQ0FBUDtBQUNBOzs7cUNBRWlCO0FBQ2pCLFVBQU8sS0FBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUFoQixDQUFvQkMsUUFBUSxRQUFSLEVBQWtCQyxTQUFsQixDQUE0QixLQUFLQyxRQUFMLEVBQTVCLENBQXBCLENBQVA7QUFDQTs7OzZCQUVTLENBRVQ7OztzQkFaZ0I7QUFBQyxVQUFPLGlCQUFQO0FBQXlCOzs7RUFETEYsUUFBUSxVQUFSLEM7O2tCQUFsQlAsUyIsImZpbGUiOiJudW1iZXJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLzxzdHlscz48c3R5bGUgdHlwZT1cIm51bWJlcmluZ1wiPlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJpbmcgZXh0ZW5kcyByZXF1aXJlKCcuLi9zdHlsZScpe1xyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnc3R5bGUubnVtYmVyaW5nJ31cclxuXHJcblx0Z2V0TnVtSWQoKXtcclxuXHRcdHJldHVybiB0aGlzLndYbWwuJDEoJ251bUlkJykuYXR0cigndzp2YWwnKVxyXG5cdH1cclxuXHJcblx0YXNOdW1iZXJpbmdTdHlsZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQocmVxdWlyZSgnLi9saXN0JykuYXNTdHlsZUlkKHRoaXMuZ2V0TnVtSWQoKSkpXHJcblx0fVxyXG5cclxuXHRfaXRlcmF0ZSgpe1xyXG5cdFx0XHJcblx0fVxyXG59XHJcbiJdfQ==