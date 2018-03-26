'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headingChar = function (_require) {
	(0, _inherits3.default)(headingChar, _require);
	(0, _createClass3.default)(headingChar, null, [{
		key: 'type',
		get: function get() {
			return 'headingChar';
		}
	}]);

	function headingChar() {
		(0, _classCallCheck3.default)(this, headingChar);

		var _this = (0, _possibleConstructorReturn3.default)(this, (headingChar.__proto__ || (0, _getPrototypeOf2.default)(headingChar)).apply(this, arguments));

		_this.outlineLvl = arguments[arguments.length - 1];
		return _this;
	}

	(0, _createClass3.default)(headingChar, [{
		key: 'getOutlineLevel',
		value: function getOutlineLevel() {
			return this.outlineLvl;
		}
	}]);
	return headingChar;
}(require('./inline'));

exports.default = headingChar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaGVhZGluZ0lubGluZS5qcyJdLCJuYW1lcyI6WyJoZWFkaW5nQ2hhciIsImFyZ3VtZW50cyIsIm91dGxpbmVMdmwiLCJsZW5ndGgiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxXOzs7O3NCQUNIO0FBQUMsVUFBTyxhQUFQO0FBQXFCOzs7QUFFdkMsd0JBQWE7QUFBQTs7QUFBQSwrSUFDSEMsU0FERzs7QUFFWixRQUFLQyxVQUFMLEdBQWdCRCxVQUFVQSxVQUFVRSxNQUFWLEdBQWlCLENBQTNCLENBQWhCO0FBRlk7QUFHWjs7OztvQ0FDZ0I7QUFDaEIsVUFBTyxLQUFLRCxVQUFaO0FBQ0E7OztFQVR1Q0UsUUFBUSxVQUFSLEM7O2tCQUFwQkosVyIsImZpbGUiOiJoZWFkaW5nSW5saW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGVhZGluZ0NoYXIgZXh0ZW5kcyByZXF1aXJlKCcuL2lubGluZScpe1xyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnaGVhZGluZ0NoYXInfVxyXG5cclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5vdXRsaW5lTHZsPWFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdXHJcblx0fVxyXG5cdGdldE91dGxpbmVMZXZlbCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMub3V0bGluZUx2bFxyXG5cdH1cclxuXHJcbn1cclxuIl19