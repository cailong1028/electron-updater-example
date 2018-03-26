'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _list = require('./style/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* numbering style is a normal paragraph style, plus
* numId Style with override/direct level style, 
* which inherit from abstract numbering definition
* rPr, and attribute of level style is on label only
* pPr of level style is on paragraph
list label: numId.level + abstract.level
list content: numId.level.pPr + abstract.level.pPr
priority: list style > p direct style >named style 
*/
var list = function (_require) {
	(0, _inherits3.default)(list, _require);

	function list() {
		(0, _classCallCheck3.default)(this, list);

		var _this = (0, _possibleConstructorReturn3.default)(this, (list.__proto__ || (0, _getPrototypeOf2.default)(list)).apply(this, arguments));

		var numId = function (t) {
			var numId = (t = _this.wXml.$1('>pPr>numPr')) && (t = t.$1('numId')) && (t = t.attr('w:val'));
			!numId && (t = _this.getNamedStyle()) && (numId = t.getNumId());
			return numId;
		}();

		var level = function (t) {
			return (t = _this.wXml.$1('>pPr>numPr>ilvl')) ? t.attr('w:val') : '0';
		}();

		_this.getLevel = function () {
			return level;
		};

		_this.getNumberingId = function () {
			return numId;
		};
		return _this;
	}

	(0, _createClass3.default)(list, [{
		key: 'parse',
		value: function parse() {
			var numbering = this.wDoc.parseContext.numbering;

			numbering.push(this.getNumberingId(), parseInt(this.getLevel()));
			(0, _get3.default)(list.prototype.__proto__ || (0, _getPrototypeOf2.default)(list.prototype), 'parse', this).apply(this, arguments);
		}
	}, {
		key: 'getNumberingStyle',
		value: function getNumberingStyle() {
			return this.wDoc.style.get(_list2.default.asStyleId(this.getNumberingId()));
		}
	}, {
		key: 'getLabel',
		value: function getLabel() {
			return this.wDoc.parseContext.numbering.getLabel(this.getNumberingId(), parseInt(this.getLevel()));
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'list';
		}
	}]);
	return list;
}(require('./paragraph'));

list.Context = function () {
	function _class(doc) {
		(0, _classCallCheck3.default)(this, _class);

		this.wDoc = doc;
		this._stack = new _map2.default();
	}

	(0, _createClass3.default)(_class, [{
		key: 'push',
		value: function push(id, level) {
			var list = void 0;
			if (!(list = this._stack.get(id))) this._stack.set(id, list = new _map2.default());

			list.set(level, 1 + (list.get(level) || 0));
		}
	}, {
		key: 'getLabel',
		value: function getLabel(id, level) {
			var _wDoc$style$get;

			var ctx = this._stack.get(id);
			return (_wDoc$style$get = this.wDoc.style.get(_list2.default.asStyleId(id))).getLabel.apply(_wDoc$style$get, (0, _toConsumableArray3.default)(ctx));
		}
	}]);
	return _class;
}();

exports.default = list;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvbGlzdC5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiYXJndW1lbnRzIiwibnVtSWQiLCJ0Iiwid1htbCIsIiQxIiwiYXR0ciIsImdldE5hbWVkU3R5bGUiLCJnZXROdW1JZCIsImxldmVsIiwiZ2V0TGV2ZWwiLCJnZXROdW1iZXJpbmdJZCIsIm51bWJlcmluZyIsIndEb2MiLCJwYXJzZUNvbnRleHQiLCJwdXNoIiwicGFyc2VJbnQiLCJzdHlsZSIsImdldCIsImFzU3R5bGVJZCIsImdldExhYmVsIiwicmVxdWlyZSIsIkNvbnRleHQiLCJkb2MiLCJfc3RhY2siLCJpZCIsInNldCIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7SUFVcUJBLEk7OztBQUNwQixpQkFBYTtBQUFBOztBQUFBLGlJQUNIQyxTQURHOztBQUdaLE1BQUlDLFFBQU8sYUFBRztBQUNiLE9BQUlBLFFBQU0sQ0FBQ0MsSUFBRSxNQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxZQUFiLENBQUgsTUFBbUNGLElBQUVBLEVBQUVFLEVBQUYsQ0FBSyxPQUFMLENBQXJDLE1BQXdERixJQUFFQSxFQUFFRyxJQUFGLENBQU8sT0FBUCxDQUExRCxDQUFWO0FBQ0EsSUFBQ0osS0FBRCxLQUFXQyxJQUFFLE1BQUtJLGFBQUwsRUFBYixNQUF1Q0wsUUFBTUMsRUFBRUssUUFBRixFQUE3QztBQUNBLFVBQU9OLEtBQVA7QUFDQSxHQUpTLEVBQVY7O0FBTUEsTUFBSU8sUUFBTyxhQUFHO0FBQ2IsVUFBTyxDQUFDTixJQUFFLE1BQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGlCQUFiLENBQUgsSUFBc0NGLEVBQUVHLElBQUYsQ0FBTyxPQUFQLENBQXRDLEdBQXdELEdBQS9EO0FBQ0EsR0FGUyxFQUFWOztBQUlBLFFBQUtJLFFBQUwsR0FBYztBQUFBLFVBQUlELEtBQUo7QUFBQSxHQUFkOztBQUVBLFFBQUtFLGNBQUwsR0FBb0I7QUFBQSxVQUFJVCxLQUFKO0FBQUEsR0FBcEI7QUFmWTtBQWdCWjs7OzswQkFDTTtBQUFBLE9BQ0RVLFNBREMsR0FDVSxLQUFLQyxJQUFMLENBQVVDLFlBRHBCLENBQ0RGLFNBREM7O0FBRU5BLGFBQVVHLElBQVYsQ0FBZSxLQUFLSixjQUFMLEVBQWYsRUFBc0NLLFNBQVMsS0FBS04sUUFBTCxFQUFULENBQXRDO0FBQ0EsNEhBQWVULFNBQWY7QUFDQTs7O3NDQUVrQjtBQUNsQixVQUFPLEtBQUtZLElBQUwsQ0FBVUksS0FBVixDQUFnQkMsR0FBaEIsQ0FBb0IsZUFBTUMsU0FBTixDQUFnQixLQUFLUixjQUFMLEVBQWhCLENBQXBCLENBQVA7QUFDQTs7OzZCQUVTO0FBQ1QsVUFBTyxLQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJGLFNBQXZCLENBQWlDUSxRQUFqQyxDQUEwQyxLQUFLVCxjQUFMLEVBQTFDLEVBQWlFSyxTQUFTLEtBQUtOLFFBQUwsRUFBVCxDQUFqRSxDQUFQO0FBQ0E7OztzQkFFZ0I7QUFBQyxVQUFPLE1BQVA7QUFBYzs7O0VBaENDVyxRQUFRLGFBQVIsQzs7QUFBYnJCLEksQ0FrQ2JzQixPO0FBQ04saUJBQVlDLEdBQVosRUFBZ0I7QUFBQTs7QUFDZixPQUFLVixJQUFMLEdBQVVVLEdBQVY7QUFDQSxPQUFLQyxNQUFMLEdBQVksbUJBQVo7QUFDQTs7Ozt1QkFDSUMsRSxFQUFHaEIsSyxFQUFNO0FBQ2IsT0FBSVQsYUFBSjtBQUNBLE9BQUcsRUFBRUEsT0FBSyxLQUFLd0IsTUFBTCxDQUFZTixHQUFaLENBQWdCTyxFQUFoQixDQUFQLENBQUgsRUFDQyxLQUFLRCxNQUFMLENBQVlFLEdBQVosQ0FBZ0JELEVBQWhCLEVBQW1CekIsT0FBSyxtQkFBeEI7O0FBRURBLFFBQUswQixHQUFMLENBQVNqQixLQUFULEVBQWUsS0FBR1QsS0FBS2tCLEdBQUwsQ0FBU1QsS0FBVCxLQUFpQixDQUFwQixDQUFmO0FBQ0E7OzsyQkFFUWdCLEUsRUFBR2hCLEssRUFBTTtBQUFBOztBQUNqQixPQUFJa0IsTUFBSSxLQUFLSCxNQUFMLENBQVlOLEdBQVosQ0FBZ0JPLEVBQWhCLENBQVI7QUFDQSxVQUFPLHdCQUFLWixJQUFMLENBQVVJLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CLGVBQU1DLFNBQU4sQ0FBZ0JNLEVBQWhCLENBQXBCLEdBQXlDTCxRQUF6Qyx5REFBcURPLEdBQXJELEVBQVA7QUFDQTs7Ozs7a0JBbERrQjNCLEkiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tIFwiLi9zdHlsZS9saXN0XCJcclxuXHJcbi8qKlxyXG4qIG51bWJlcmluZyBzdHlsZSBpcyBhIG5vcm1hbCBwYXJhZ3JhcGggc3R5bGUsIHBsdXNcclxuKiBudW1JZCBTdHlsZSB3aXRoIG92ZXJyaWRlL2RpcmVjdCBsZXZlbCBzdHlsZSwgXHJcbiogd2hpY2ggaW5oZXJpdCBmcm9tIGFic3RyYWN0IG51bWJlcmluZyBkZWZpbml0aW9uXHJcbiogclByLCBhbmQgYXR0cmlidXRlIG9mIGxldmVsIHN0eWxlIGlzIG9uIGxhYmVsIG9ubHlcclxuKiBwUHIgb2YgbGV2ZWwgc3R5bGUgaXMgb24gcGFyYWdyYXBoXHJcbmxpc3QgbGFiZWw6IG51bUlkLmxldmVsICsgYWJzdHJhY3QubGV2ZWxcclxubGlzdCBjb250ZW50OiBudW1JZC5sZXZlbC5wUHIgKyBhYnN0cmFjdC5sZXZlbC5wUHJcclxucHJpb3JpdHk6IGxpc3Qgc3R5bGUgPiBwIGRpcmVjdCBzdHlsZSA+bmFtZWQgc3R5bGUgXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpc3QgZXh0ZW5kcyByZXF1aXJlKCcuL3BhcmFncmFwaCcpe1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHRcclxuXHRcdGxldCBudW1JZD0odD0+e1xyXG5cdFx0XHR2YXIgbnVtSWQ9KHQ9dGhpcy53WG1sLiQxKCc+cFByPm51bVByJykpICYmICh0PXQuJDEoJ251bUlkJykpICYmICh0PXQuYXR0cigndzp2YWwnKSlcclxuXHRcdFx0IW51bUlkICYmICh0PXRoaXMuZ2V0TmFtZWRTdHlsZSgpKSAmJiAobnVtSWQ9dC5nZXROdW1JZCgpKVxyXG5cdFx0XHRyZXR1cm4gbnVtSWRcclxuXHRcdH0pKCk7XHJcblx0XHRcclxuXHRcdGxldCBsZXZlbD0odD0+e1xyXG5cdFx0XHRyZXR1cm4gKHQ9dGhpcy53WG1sLiQxKCc+cFByPm51bVByPmlsdmwnKSkgPyB0LmF0dHIoJ3c6dmFsJykgOiAnMCdcclxuXHRcdH0pKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuZ2V0TGV2ZWw9KCk9PmxldmVsXHJcblx0XHRcclxuXHRcdHRoaXMuZ2V0TnVtYmVyaW5nSWQ9KCk9Pm51bUlkXHJcblx0fVxyXG5cdHBhcnNlKCl7XHJcblx0XHRsZXQge251bWJlcmluZ309dGhpcy53RG9jLnBhcnNlQ29udGV4dFxyXG5cdFx0bnVtYmVyaW5nLnB1c2godGhpcy5nZXROdW1iZXJpbmdJZCgpLCBwYXJzZUludCh0aGlzLmdldExldmVsKCkpKVxyXG5cdFx0c3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKVxyXG5cdH1cclxuXHRcclxuXHRnZXROdW1iZXJpbmdTdHlsZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5zdHlsZS5nZXQoU3R5bGUuYXNTdHlsZUlkKHRoaXMuZ2V0TnVtYmVyaW5nSWQoKSkpXHJcblx0fVxyXG5cclxuXHRnZXRMYWJlbCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud0RvYy5wYXJzZUNvbnRleHQubnVtYmVyaW5nLmdldExhYmVsKHRoaXMuZ2V0TnVtYmVyaW5nSWQoKSwgcGFyc2VJbnQodGhpcy5nZXRMZXZlbCgpKSlcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdsaXN0J31cclxuXHRcclxuXHRzdGF0aWMgQ29udGV4dD1jbGFzcyB7XHJcblx0XHRjb25zdHJ1Y3Rvcihkb2Mpe1xyXG5cdFx0XHR0aGlzLndEb2M9ZG9jXHJcblx0XHRcdHRoaXMuX3N0YWNrPW5ldyBNYXAoKVxyXG5cdFx0fVxyXG5cdFx0cHVzaChpZCxsZXZlbCl7XHJcblx0XHRcdGxldCBsaXN0XHJcblx0XHRcdGlmKCEobGlzdD10aGlzLl9zdGFjay5nZXQoaWQpKSlcclxuXHRcdFx0XHR0aGlzLl9zdGFjay5zZXQoaWQsbGlzdD1uZXcgTWFwKCkpXHJcblx0XHRcdFxyXG5cdFx0XHRsaXN0LnNldChsZXZlbCwxKyhsaXN0LmdldChsZXZlbCl8fDApKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRnZXRMYWJlbChpZCxsZXZlbCl7XHJcblx0XHRcdHZhciBjdHg9dGhpcy5fc3RhY2suZ2V0KGlkKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy53RG9jLnN0eWxlLmdldChTdHlsZS5hc1N0eWxlSWQoaWQpKS5nZXRMYWJlbCguLi5jdHgpXHJcblx0XHR9XHJcblx0fVxyXG59Il19