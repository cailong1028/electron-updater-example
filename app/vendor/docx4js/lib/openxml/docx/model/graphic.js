'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _drawing = require('./drawing');

var _drawing2 = _interopRequireDefault(_drawing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Graphic = function (_Drawing) {
	(0, _inherits3.default)(Graphic, _Drawing);

	function Graphic(wXml) {
		(0, _classCallCheck3.default)(this, Graphic);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Graphic.__proto__ || (0, _getPrototypeOf2.default)(Graphic)).apply(this, arguments));

		_this.wDrawing = wXml;
		return _this;
	}

	return Graphic;
}(_drawing2.default);

exports.default = Graphic;


var naming = null;

Graphic.Properties = function (_Drawing$Properties) {
	(0, _inherits3.default)(Properties, _Drawing$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: '_getValidChildren',
		value: function _getValidChildren(t) {
			return (0, _get3.default)(Properties.prototype.__proto__ || (0, _getPrototypeOf2.default)(Properties.prototype), '_getValidChildren', this).apply(this, arguments).concat(this.wXml.$1('spPr').childNodes.asArray());
		}
	}], [{
		key: 'naming',
		get: function get() {
			if (!naming) naming = (0, _assign2.default)({}, _drawing2.default.Properties.naming, _drawing2.default.SpProperties.naming);
			return naming;
		}
	}]);
	return Properties;
}(_drawing2.default.Properties);

Graphic.Properties.mixinSpProperties();
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZ3JhcGhpYy5qcyJdLCJuYW1lcyI6WyJHcmFwaGljIiwid1htbCIsImFyZ3VtZW50cyIsIndEcmF3aW5nIiwibmFtaW5nIiwiUHJvcGVydGllcyIsInQiLCJjb25jYXQiLCIkMSIsImNoaWxkTm9kZXMiLCJhc0FycmF5IiwiU3BQcm9wZXJ0aWVzIiwibWl4aW5TcFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxPOzs7QUFDcEIsa0JBQVlDLElBQVosRUFBaUI7QUFBQTs7QUFBQSx1SUFDUEMsU0FETzs7QUFFaEIsUUFBS0MsUUFBTCxHQUFjRixJQUFkO0FBRmdCO0FBR2hCOzs7OztrQkFKbUJELE87OztBQU9yQixJQUFJSSxTQUFPLElBQVg7O0FBRUFKLFFBQVFLLFVBQVI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsb0NBT21CQyxDQVBuQixFQU9xQjtBQUNuQixVQUFPLGlKQUEyQkosU0FBM0IsRUFDTEssTUFESyxDQUNFLEtBQUtOLElBQUwsQ0FBVU8sRUFBVixDQUFhLE1BQWIsRUFBcUJDLFVBQXJCLENBQWdDQyxPQUFoQyxFQURGLENBQVA7QUFFQTtBQVZGO0FBQUE7QUFBQSxzQkFDb0I7QUFDbEIsT0FBRyxDQUFDTixNQUFKLEVBQ0NBLFNBQU8sc0JBQWMsRUFBZCxFQUFpQixrQkFBUUMsVUFBUixDQUFtQkQsTUFBcEMsRUFBMkMsa0JBQVFPLFlBQVIsQ0FBcUJQLE1BQWhFLENBQVA7QUFDRCxVQUFPQSxNQUFQO0FBQ0E7QUFMRjtBQUFBO0FBQUEsRUFBNEMsa0JBQVFDLFVBQXBEOztBQWNBTCxRQUFRSyxVQUFSLENBQW1CTyxpQkFBbkIiLCJmaWxlIjoiZ3JhcGhpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmF3aW5nIGZyb20gJy4vZHJhd2luZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWMgZXh0ZW5kcyBEcmF3aW5ne1xyXG5cdGNvbnN0cnVjdG9yKHdYbWwpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy53RHJhd2luZz13WG1sXHJcblx0fVxyXG59XHJcblxyXG52YXIgbmFtaW5nPW51bGw7XHJcblxyXG5HcmFwaGljLlByb3BlcnRpZXM9Y2xhc3MgUHJvcGVydGllcyBleHRlbmRzIERyYXdpbmcuUHJvcGVydGllc3tcclxuXHRzdGF0aWMgZ2V0IG5hbWluZygpe1xyXG5cdFx0aWYoIW5hbWluZylcclxuXHRcdFx0bmFtaW5nPU9iamVjdC5hc3NpZ24oe30sRHJhd2luZy5Qcm9wZXJ0aWVzLm5hbWluZyxEcmF3aW5nLlNwUHJvcGVydGllcy5uYW1pbmcpXHJcblx0XHRyZXR1cm4gbmFtaW5nXHJcblx0fVxyXG5cdFxyXG5cdF9nZXRWYWxpZENoaWxkcmVuKHQpe1xyXG5cdFx0cmV0dXJuIHN1cGVyLl9nZXRWYWxpZENoaWxkcmVuKC4uLmFyZ3VtZW50cylcclxuXHRcdFx0LmNvbmNhdCh0aGlzLndYbWwuJDEoJ3NwUHInKS5jaGlsZE5vZGVzLmFzQXJyYXkoKSlcclxuXHR9XHJcbn1cclxuXHJcblxyXG5HcmFwaGljLlByb3BlcnRpZXMubWl4aW5TcFByb3BlcnRpZXMoKSJdfQ==