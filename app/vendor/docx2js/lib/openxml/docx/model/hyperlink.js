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

var hyperlink = function (_require) {
	(0, _inherits3.default)(hyperlink, _require);

	function hyperlink() {
		(0, _classCallCheck3.default)(this, hyperlink);
		return (0, _possibleConstructorReturn3.default)(this, (hyperlink.__proto__ || (0, _getPrototypeOf2.default)(hyperlink)).apply(this, arguments));
	}

	(0, _createClass3.default)(hyperlink, [{
		key: 'getLink',
		value: function getLink(a) {
			return (a = this._attr('r:id')) ? this._getLocalLink(a) : '#' + this._attr('w:anchor');
		}
	}, {
		key: '_getLocalLink',
		value: function _getLocalLink(id) {
			return this.wDoc.partMain.getRel(id);
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'hyperlink';
		}
	}]);
	return hyperlink;
}(require('../model'));

exports.default = hyperlink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaHlwZXJsaW5rLmpzIl0sIm5hbWVzIjpbImh5cGVybGluayIsImEiLCJfYXR0ciIsIl9nZXRMb2NhbExpbmsiLCJpZCIsIndEb2MiLCJwYXJ0TWFpbiIsImdldFJlbCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFM7Ozs7Ozs7Ozs7MEJBR1pDLEMsRUFBRTtBQUNULFVBQU8sQ0FBQ0EsSUFBRSxLQUFLQyxLQUFMLENBQVcsTUFBWCxDQUFILElBQXlCLEtBQUtDLGFBQUwsQ0FBbUJGLENBQW5CLENBQXpCLEdBQWlELE1BQUksS0FBS0MsS0FBTCxDQUFXLFVBQVgsQ0FBNUQ7QUFDQTs7O2dDQUNhRSxFLEVBQUc7QUFDaEIsVUFBTyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLE1BQW5CLENBQTBCSCxFQUExQixDQUFQO0FBQ0E7OztzQkFQZ0I7QUFBQyxVQUFPLFdBQVA7QUFBbUI7OztFQURDSSxRQUFRLFVBQVIsQzs7a0JBQWxCUixTIiwiZmlsZSI6Imh5cGVybGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGh5cGVybGluayBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdoeXBlcmxpbmsnfVxyXG5cclxuXHRnZXRMaW5rKGEpe1xyXG5cdFx0cmV0dXJuIChhPXRoaXMuX2F0dHIoJ3I6aWQnKSkgPyB0aGlzLl9nZXRMb2NhbExpbmsoYSk6ICgnIycrdGhpcy5fYXR0cigndzphbmNob3InKSApXHJcblx0fVxyXG5cdF9nZXRMb2NhbExpbmsoaWQpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5wYXJ0TWFpbi5nZXRSZWwoaWQpXHJcblx0fVxyXG59XHJcbiJdfQ==