'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

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

//<w:numbering><w:num w:numId="1">
var List = function (_require) {
	(0, _inherits3.default)(List, _require);

	function List(wXml, wDoc, mParent) {
		(0, _classCallCheck3.default)(this, List);

		var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, wXml, wDoc, mParent));

		_this.id = _this.name = _this.constructor.asStyleId(wXml.attr('w:numId'));
		_this.wDoc.style.set(_this);
		_this.levels = new _map2.default();
		return _this;
	}

	(0, _createClass3.default)(List, [{
		key: '_iterate',
		value: function _iterate(f, factories, visitors) {
			for (var i = 0, children = this.wXml.$('lvlOverride'), l = children.length, t; i < l; i++) {
				t = new this.constructor.Level(children[i], this.wDoc, this);
				this.levels.set(t.level, t);
				t.parse(visitors);
			}
		}
	}, {
		key: 'getParentStyle',
		value: function getParentStyle() {
			var definition = this.wDoc.style.get(require('./numberingDefinition').asStyleId(this.wXml.$1('abstractNumId').attr('w:val')));
			if (definition.link) {
				return this.wDoc.style.get(definition.link).asNumberingStyle().getParentStyle();
			} else return definition;
		}
	}, {
		key: 'getLabel',
		value: function getLabel() {
			var _getParentStyle;

			return (_getParentStyle = this.getParentStyle()).getLabel.apply(_getParentStyle, arguments);
		}
	}, {
		key: 'getNumId',
		value: function getNumId() {
			return this.wXml.attr('w:numId');
		}
	}], [{
		key: 'asStyleId',
		value: function asStyleId(numId) {
			return '_list' + numId;
		}
	}, {
		key: 'type',
		get: function get() {
			return 'style.list';
		}
	}]);
	return List;
}(require('../style'));

exports.default = List;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0Iiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiaWQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJhc1N0eWxlSWQiLCJhdHRyIiwic3R5bGUiLCJzZXQiLCJsZXZlbHMiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJpIiwiY2hpbGRyZW4iLCIkIiwibCIsImxlbmd0aCIsInQiLCJMZXZlbCIsImxldmVsIiwicGFyc2UiLCJkZWZpbml0aW9uIiwiZ2V0IiwicmVxdWlyZSIsIiQxIiwibGluayIsImFzTnVtYmVyaW5nU3R5bGUiLCJnZXRQYXJlbnRTdHlsZSIsImdldExhYmVsIiwiYXJndW1lbnRzIiwibnVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDcUJBLEk7OztBQUNwQixlQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBZ0M7QUFBQTs7QUFBQSxnSUFDekJGLElBRHlCLEVBQ25CQyxJQURtQixFQUNiQyxPQURhOztBQUUvQixRQUFLQyxFQUFMLEdBQVEsTUFBS0MsSUFBTCxHQUFVLE1BQUtDLFdBQUwsQ0FBaUJDLFNBQWpCLENBQTJCTixLQUFLTyxJQUFMLENBQVUsU0FBVixDQUEzQixDQUFsQjtBQUNBLFFBQUtOLElBQUwsQ0FBVU8sS0FBVixDQUFnQkMsR0FBaEI7QUFDQSxRQUFLQyxNQUFMLEdBQVksbUJBQVo7QUFKK0I7QUFLL0I7Ozs7MkJBRVFDLEMsRUFBR0MsUyxFQUFXQyxRLEVBQVM7QUFDL0IsUUFBSSxJQUFJQyxJQUFFLENBQU4sRUFBUUMsV0FBUyxLQUFLZixJQUFMLENBQVVnQixDQUFWLENBQVksYUFBWixDQUFqQixFQUE0Q0MsSUFBRUYsU0FBU0csTUFBdkQsRUFBK0RDLENBQW5FLEVBQXNFTCxJQUFFRyxDQUF4RSxFQUEyRUgsR0FBM0UsRUFBK0U7QUFDOUVLLFFBQUUsSUFBSSxLQUFLZCxXQUFMLENBQWlCZSxLQUFyQixDQUEyQkwsU0FBU0QsQ0FBVCxDQUEzQixFQUF1QyxLQUFLYixJQUE1QyxFQUFrRCxJQUFsRCxDQUFGO0FBQ0EsU0FBS1MsTUFBTCxDQUFZRCxHQUFaLENBQWdCVSxFQUFFRSxLQUFsQixFQUF3QkYsQ0FBeEI7QUFDQUEsTUFBRUcsS0FBRixDQUFRVCxRQUFSO0FBQ0E7QUFDRDs7O21DQUllO0FBQ2YsT0FBSVUsYUFBVyxLQUFLdEIsSUFBTCxDQUFVTyxLQUFWLENBQWdCZ0IsR0FBaEIsQ0FBb0JDLFFBQVEsdUJBQVIsRUFBaUNuQixTQUFqQyxDQUEyQyxLQUFLTixJQUFMLENBQVUwQixFQUFWLENBQWEsZUFBYixFQUE4Qm5CLElBQTlCLENBQW1DLE9BQW5DLENBQTNDLENBQXBCLENBQWY7QUFDQSxPQUFHZ0IsV0FBV0ksSUFBZCxFQUFtQjtBQUNsQixXQUFPLEtBQUsxQixJQUFMLENBQVVPLEtBQVYsQ0FBZ0JnQixHQUFoQixDQUFvQkQsV0FBV0ksSUFBL0IsRUFBcUNDLGdCQUFyQyxHQUF3REMsY0FBeEQsRUFBUDtBQUNBLElBRkQsTUFHQyxPQUFPTixVQUFQO0FBQ0Q7Ozs2QkFFUztBQUFBOztBQUNULFVBQU8sd0JBQUtNLGNBQUwsSUFBc0JDLFFBQXRCLHdCQUFrQ0MsU0FBbEMsQ0FBUDtBQUNBOzs7NkJBRVM7QUFDVCxVQUFPLEtBQUsvQixJQUFMLENBQVVPLElBQVYsQ0FBZSxTQUFmLENBQVA7QUFDQTs7OzRCQUVnQnlCLEssRUFBTTtBQUN0QixVQUFPLFVBQVFBLEtBQWY7QUFDQTs7O3NCQXBCZ0I7QUFBQyxVQUFPLFlBQVA7QUFBb0I7OztFQWhCTFAsUUFBUSxVQUFSLEM7O2tCQUFiMUIsSSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy88dzpudW1iZXJpbmc+PHc6bnVtIHc6bnVtSWQ9XCIxXCI+XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyByZXF1aXJlKCcuLi9zdHlsZScpe1xyXG5cdGNvbnN0cnVjdG9yKHdYbWwsIHdEb2MsIG1QYXJlbnQpe1xyXG5cdFx0c3VwZXIod1htbCwgd0RvYywgbVBhcmVudClcclxuXHRcdHRoaXMuaWQ9dGhpcy5uYW1lPXRoaXMuY29uc3RydWN0b3IuYXNTdHlsZUlkKHdYbWwuYXR0cigndzpudW1JZCcpKVxyXG5cdFx0dGhpcy53RG9jLnN0eWxlLnNldCh0aGlzKVxyXG5cdFx0dGhpcy5sZXZlbHM9bmV3IE1hcCgpXHJcblx0fVxyXG5cdFxyXG5cdF9pdGVyYXRlKGYsIGZhY3RvcmllcywgdmlzaXRvcnMpe1xyXG5cdFx0Zm9yKHZhciBpPTAsY2hpbGRyZW49dGhpcy53WG1sLiQoJ2x2bE92ZXJyaWRlJyksbD1jaGlsZHJlbi5sZW5ndGgsIHQ7IGk8bDsgaSsrKXtcclxuXHRcdFx0dD1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5MZXZlbChjaGlsZHJlbltpXSx0aGlzLndEb2MsIHRoaXMpXHJcblx0XHRcdHRoaXMubGV2ZWxzLnNldCh0LmxldmVsLHQpXHJcblx0XHRcdHQucGFyc2UodmlzaXRvcnMpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3N0eWxlLmxpc3QnfVxyXG5cclxuXHRnZXRQYXJlbnRTdHlsZSgpe1xyXG5cdFx0dmFyIGRlZmluaXRpb249dGhpcy53RG9jLnN0eWxlLmdldChyZXF1aXJlKCcuL251bWJlcmluZ0RlZmluaXRpb24nKS5hc1N0eWxlSWQodGhpcy53WG1sLiQxKCdhYnN0cmFjdE51bUlkJykuYXR0cigndzp2YWwnKSkpXHJcblx0XHRpZihkZWZpbml0aW9uLmxpbmspe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy53RG9jLnN0eWxlLmdldChkZWZpbml0aW9uLmxpbmspLmFzTnVtYmVyaW5nU3R5bGUoKS5nZXRQYXJlbnRTdHlsZSgpXHJcblx0XHR9ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZGVmaW5pdGlvblxyXG5cdH1cclxuXHRcclxuXHRnZXRMYWJlbCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGFyZW50U3R5bGUoKS5nZXRMYWJlbCguLi5hcmd1bWVudHMpXHJcblx0fVxyXG5cdFxyXG5cdGdldE51bUlkKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53WG1sLmF0dHIoJ3c6bnVtSWQnKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzU3R5bGVJZChudW1JZCl7XHJcblx0XHRyZXR1cm4gJ19saXN0JytudW1JZFxyXG5cdH1cclxufVxyXG4iXX0=