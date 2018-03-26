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

var documentProperty = function (_require) {
	(0, _inherits3.default)(documentProperty, _require);

	function documentProperty(wXml, b, c, name) {
		(0, _classCallCheck3.default)(this, documentProperty);

		var _this = (0, _possibleConstructorReturn3.default)(this, (documentProperty.__proto__ || (0, _getPrototypeOf2.default)(documentProperty)).apply(this, arguments));

		_this.key = name.toLowerCase();
		_this.value = wXml.$1('>sdtContent').textContent.trim();
		if (!_this.wDoc.props[_this.key]) _this.wDoc.props[_this.key] = _this.value;
		return _this;
	}

	(0, _createClass3.default)(documentProperty, null, [{
		key: 'type',
		get: function get() {
			return 'documentProperty';
		}
	}]);
	return documentProperty;
}(require('./sdt'));

exports.default = documentProperty;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZG9jdW1lbnRQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudFByb3BlcnR5Iiwid1htbCIsImIiLCJjIiwibmFtZSIsImFyZ3VtZW50cyIsImtleSIsInRvTG93ZXJDYXNlIiwidmFsdWUiLCIkMSIsInRleHRDb250ZW50IiwidHJpbSIsIndEb2MiLCJwcm9wcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLGdCOzs7QUFDcEIsMkJBQVlDLElBQVosRUFBaUJDLENBQWpCLEVBQW1CQyxDQUFuQixFQUFzQkMsSUFBdEIsRUFBMkI7QUFBQTs7QUFBQSx5SkFDakJDLFNBRGlCOztBQUUxQixRQUFLQyxHQUFMLEdBQVNGLEtBQUtHLFdBQUwsRUFBVDtBQUNBLFFBQUtDLEtBQUwsR0FBV1AsS0FBS1EsRUFBTCxDQUFRLGFBQVIsRUFBdUJDLFdBQXZCLENBQW1DQyxJQUFuQyxFQUFYO0FBQ0EsTUFBRyxDQUFDLE1BQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQixNQUFLUCxHQUFyQixDQUFKLEVBQ0MsTUFBS00sSUFBTCxDQUFVQyxLQUFWLENBQWdCLE1BQUtQLEdBQXJCLElBQTBCLE1BQUtFLEtBQS9CO0FBTHlCO0FBTTFCOzs7O3NCQUNnQjtBQUFDLFVBQU8sa0JBQVA7QUFBMEI7OztFQVJDTSxRQUFRLE9BQVIsQzs7a0JBQXpCZCxnQiIsImZpbGUiOiJkb2N1bWVudFByb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZG9jdW1lbnRQcm9wZXJ0eSBleHRlbmRzIHJlcXVpcmUoJy4vc2R0Jyl7XHJcblx0Y29uc3RydWN0b3Iod1htbCxiLGMsIG5hbWUpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5rZXk9bmFtZS50b0xvd2VyQ2FzZSgpXHJcblx0XHR0aGlzLnZhbHVlPXdYbWwuJDEoJz5zZHRDb250ZW50JykudGV4dENvbnRlbnQudHJpbSgpXHJcblx0XHRpZighdGhpcy53RG9jLnByb3BzW3RoaXMua2V5XSlcclxuXHRcdFx0dGhpcy53RG9jLnByb3BzW3RoaXMua2V5XT10aGlzLnZhbHVlXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnZG9jdW1lbnRQcm9wZXJ0eSd9XHJcbn1cclxuIl19