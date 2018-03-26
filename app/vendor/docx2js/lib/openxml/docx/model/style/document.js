"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
	_inherits(Document, _require);

	function Document(wXml, wDoc, mParent) {
		_classCallCheck(this, Document);

		var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).call(this, wXml, wDoc, mParent));

		wDoc.style.setDefault(_this);
		return _this;
	}

	_createClass(Document, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJzdHlsZSIsInNldERlZmF1bHQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsUTs7O0FBQ3BCLG1CQUFZQyxJQUFaLEVBQWlCQyxJQUFqQixFQUFzQkMsT0FBdEIsRUFBOEI7QUFBQTs7QUFBQSxrSEFDdkJGLElBRHVCLEVBQ2xCQyxJQURrQixFQUNiQyxPQURhOztBQUU3QkQsT0FBS0UsS0FBTCxDQUFXQyxVQUFYO0FBRjZCO0FBRzdCOzs7OzhCQUVVO0FBQ1YsVUFBTyxJQUFQO0FBQ0E7OztzQkFFZ0I7QUFBQyxVQUFPLGdCQUFQO0FBQXdCOzs7O0VBVkxDLFFBQVEsYUFBUixDOztrQkFBakJOLFEiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIHJlcXVpcmUoXCIuL3BhcmFncmFwaFwiKXtcclxuXHRjb25zdHJ1Y3Rvcih3WG1sLHdEb2MsbVBhcmVudCl7XHJcblx0XHRzdXBlcih3WG1sLHdEb2MsbVBhcmVudClcclxuXHRcdHdEb2Muc3R5bGUuc2V0RGVmYXVsdCh0aGlzKVxyXG5cdH1cclxuXHJcblx0aXNEZWZhdWx0KCl7XHJcblx0XHRyZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdzdHlsZS5kb2N1bWVudCd9XHJcbn1cclxuIl19