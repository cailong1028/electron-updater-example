'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inline = function (_require) {
	_inherits(inline, _require);

	function inline() {
		_classCallCheck(this, inline);

		return _possibleConstructorReturn(this, (inline.__proto__ || Object.getPrototypeOf(inline)).apply(this, arguments));
	}

	_createClass(inline, [{
		key: 'getStyleId',
		value: function getStyleId(a) {
			return this._val('>rPr>rStyle') || (a = this.wDoc.style.getDefault(_inline2.default.type)) && a.id;
		}
	}, {
		key: 'getNamedStyle',
		value: function getNamedStyle() {
			return this.wDoc.style.get(this.getStyleId());
		}
	}, {
		key: 'getDirectStyle',
		value: function getDirectStyle(pr) {
			return (pr = this.wXml.$1('>rPr')) && new _inline2.default.Properties(pr, this.wDoc, this);
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore(wXml) {
			return wXml.localName == 'rPr';
		}
	}, {
		key: 'isWebHidden',
		value: function isWebHidden() {
			return this.wXml.$1('>rPr>webHidden');
		}
	}, {
		key: 'isHidden',
		value: function isHidden() {
			return this.wXml.$1('>rPr>vanish');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'inline';
		}
	}]);

	return inline;
}(require('../model'));

exports.default = inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaW5saW5lLmpzIl0sIm5hbWVzIjpbImlubGluZSIsImEiLCJfdmFsIiwid0RvYyIsInN0eWxlIiwiZ2V0RGVmYXVsdCIsInR5cGUiLCJpZCIsImdldCIsImdldFN0eWxlSWQiLCJwciIsIndYbWwiLCIkMSIsIlByb3BlcnRpZXMiLCJsb2NhbE5hbWUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7OzZCQUNUQyxDLEVBQUU7QUFDWixVQUFPLEtBQUtDLElBQUwsQ0FBVSxhQUFWLEtBQTZCLENBQUNELElBQUUsS0FBS0UsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxVQUFoQixDQUEyQixpQkFBTUMsSUFBakMsQ0FBSCxLQUE4Q0wsRUFBRU0sRUFBcEY7QUFDQTs7O2tDQUNjO0FBQ2QsVUFBTyxLQUFLSixJQUFMLENBQVVDLEtBQVYsQ0FBZ0JJLEdBQWhCLENBQW9CLEtBQUtDLFVBQUwsRUFBcEIsQ0FBUDtBQUNBOzs7aUNBQ2NDLEUsRUFBRztBQUNqQixVQUFPLENBQUNBLEtBQUcsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFKLEtBQTZCLElBQUksaUJBQU1DLFVBQVYsQ0FBcUJILEVBQXJCLEVBQXdCLEtBQUtQLElBQTdCLEVBQWtDLElBQWxDLENBQXBDO0FBQ0E7OztnQ0FDYVEsSSxFQUFLO0FBQ2xCLFVBQU9BLEtBQUtHLFNBQUwsSUFBZ0IsS0FBdkI7QUFDQTs7O2dDQUNZO0FBQ1osVUFBTyxLQUFLSCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxnQkFBYixDQUFQO0FBQ0E7Ozs2QkFDUztBQUNULFVBQU8sS0FBS0QsSUFBTCxDQUFVQyxFQUFWLENBQWEsYUFBYixDQUFQO0FBQ0E7OztzQkFDZ0I7QUFBQyxVQUFPLFFBQVA7QUFBZ0I7Ozs7RUFuQkNHLFFBQVEsVUFBUixDOztrQkFBZmYsTSIsImZpbGUiOiJpbmxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS9pbmxpbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmxpbmUgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXG5cdGdldFN0eWxlSWQoYSl7XHJcblx0XHRyZXR1cm4gdGhpcy5fdmFsKCc+clByPnJTdHlsZScpIHx8ICgoYT10aGlzLndEb2Muc3R5bGUuZ2V0RGVmYXVsdChTdHlsZS50eXBlKSkgJiYgYS5pZClcclxuXHR9XHJcblx0Z2V0TmFtZWRTdHlsZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQodGhpcy5nZXRTdHlsZUlkKCkpIFxyXG5cdH1cclxuXHRnZXREaXJlY3RTdHlsZShwcil7XHJcblx0XHRyZXR1cm4gKHByPXRoaXMud1htbC4kMSgnPnJQcicpKSAmJiBuZXcgU3R5bGUuUHJvcGVydGllcyhwcix0aGlzLndEb2MsdGhpcylcclxuXHR9XHJcblx0X3Nob3VsZElnbm9yZSh3WG1sKXtcclxuXHRcdHJldHVybiB3WG1sLmxvY2FsTmFtZT09J3JQcidcclxuXHR9XHJcblx0aXNXZWJIaWRkZW4oKXtcclxuXHRcdHJldHVybiB0aGlzLndYbWwuJDEoJz5yUHI+d2ViSGlkZGVuJylcclxuXHR9XHJcblx0aXNIaWRkZW4oKXtcclxuXHRcdHJldHVybiB0aGlzLndYbWwuJDEoJz5yUHI+dmFuaXNoJylcclxuXHR9XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdpbmxpbmUnfVxyXG59XHJcbiJdfQ==