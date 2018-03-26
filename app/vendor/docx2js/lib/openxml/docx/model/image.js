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

var image = function (_require) {
	(0, _inherits3.default)(image, _require);

	function image() {
		(0, _classCallCheck3.default)(this, image);
		return (0, _possibleConstructorReturn3.default)(this, (image.__proto__ || (0, _getPrototypeOf2.default)(image)).apply(this, arguments));
	}

	(0, _createClass3.default)(image, [{
		key: 'getImage',
		value: function getImage() {
			var blip = this.wXml.$1('blip'),
			    rid = blip.attr('r:embed');
			return this.wDoc.getRel(rid);
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'image';
		}
	}]);
	return image;
}(require('./graphic'));

exports.default = image;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaW1hZ2UuanMiXSwibmFtZXMiOlsiaW1hZ2UiLCJibGlwIiwid1htbCIsIiQxIiwicmlkIiwiYXR0ciIsIndEb2MiLCJnZXRSZWwiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxLOzs7Ozs7Ozs7OzZCQUNWO0FBQ1QsT0FBSUMsT0FBSyxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxNQUFiLENBQVQ7QUFBQSxPQUErQkMsTUFBSUgsS0FBS0ksSUFBTCxDQUFVLFNBQVYsQ0FBbkM7QUFDQSxVQUFPLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkgsR0FBakIsQ0FBUDtBQUNBOzs7c0JBQ2dCO0FBQUMsVUFBTyxPQUFQO0FBQWU7OztFQUxDSSxRQUFRLFdBQVIsQzs7a0JBQWRSLEsiLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBpbWFnZSBleHRlbmRzIHJlcXVpcmUoJy4vZ3JhcGhpYycpe1xyXG5cdGdldEltYWdlKCl7XHJcblx0XHR2YXIgYmxpcD10aGlzLndYbWwuJDEoJ2JsaXAnKSwgcmlkPWJsaXAuYXR0cigncjplbWJlZCcpXHJcblx0XHRyZXR1cm4gdGhpcy53RG9jLmdldFJlbChyaWQpXHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnaW1hZ2UnfVxyXG59XHJcbiJdfQ==