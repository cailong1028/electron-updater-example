'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var header = function (_require) {
	_inherits(header, _require);

	function header(wXml, wDoc, mParent, location) {
		_classCallCheck(this, header);

		var _this = _possibleConstructorReturn(this, (header.__proto__ || Object.getPrototypeOf(header)).apply(this, arguments));

		_this.location = location;
		return _this;
	}

	_createClass(header, null, [{
		key: 'type',
		get: function get() {
			return 'header';
		}
	}]);

	return header;
}(require('../model'));

exports.default = header;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImhlYWRlciIsIndYbWwiLCJ3RG9jIiwibVBhcmVudCIsImxvY2F0aW9uIiwiYXJndW1lbnRzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLE07OztBQUNwQixpQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDQyxRQUFqQyxFQUEwQztBQUFBOztBQUFBLCtHQUNoQ0MsU0FEZ0M7O0FBRXpDLFFBQUtELFFBQUwsR0FBY0EsUUFBZDtBQUZ5QztBQUd6Qzs7OztzQkFDZ0I7QUFBQyxVQUFPLFFBQVA7QUFBZ0I7Ozs7RUFMQ0UsUUFBUSxVQUFSLEM7O2tCQUFmTixNIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlYWRlciBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0Y29uc3RydWN0b3Iod1htbCwgd0RvYywgbVBhcmVudCwgbG9jYXRpb24pe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5sb2NhdGlvbj1sb2NhdGlvblxyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2hlYWRlcid9XHJcbn1cclxuIl19