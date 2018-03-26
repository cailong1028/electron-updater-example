"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Document = function (_require) {
	(0, _inherits3.default)(Document, _require);

	function Document(wXml, wDoc, mParent) {
		(0, _classCallCheck3.default)(this, Document);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).call(this, wXml, wDoc, mParent));

		wDoc.style.setDefault(_this);
		return _this;
	}

	(0, _createClass3.default)(Document, [{
		key: "isDefault",
		value: function isDefault() {
			return true;
		}
	}], [{
		key: "type",
		get: function get() {
			return 'style.document';
		}
	}]);
	return Document;
}(require("./paragraph"));

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJzdHlsZSIsInNldERlZmF1bHQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxROzs7QUFDcEIsbUJBQVlDLElBQVosRUFBaUJDLElBQWpCLEVBQXNCQyxPQUF0QixFQUE4QjtBQUFBOztBQUFBLHdJQUN2QkYsSUFEdUIsRUFDbEJDLElBRGtCLEVBQ2JDLE9BRGE7O0FBRTdCRCxPQUFLRSxLQUFMLENBQVdDLFVBQVg7QUFGNkI7QUFHN0I7Ozs7OEJBRVU7QUFDVixVQUFPLElBQVA7QUFDQTs7O3NCQUVnQjtBQUFDLFVBQU8sZ0JBQVA7QUFBd0I7OztFQVZMQyxRQUFRLGFBQVIsQzs7a0JBQWpCTixRIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKFwiLi9wYXJhZ3JhcGhcIil7XHJcblx0Y29uc3RydWN0b3Iod1htbCx3RG9jLG1QYXJlbnQpe1xyXG5cdFx0c3VwZXIod1htbCx3RG9jLG1QYXJlbnQpXHJcblx0XHR3RG9jLnN0eWxlLnNldERlZmF1bHQodGhpcylcclxuXHR9XHJcblxyXG5cdGlzRGVmYXVsdCgpe1xyXG5cdFx0cmV0dXJuIHRydWVcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnc3R5bGUuZG9jdW1lbnQnfVxyXG59XHJcbiJdfQ==