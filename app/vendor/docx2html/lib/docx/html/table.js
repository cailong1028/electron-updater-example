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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _table = require('./style/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function (_Converter) {
	(0, _inherits3.default)(Table, _Converter);

	function Table() {
		(0, _classCallCheck3.default)(this, Table);
		return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
	}

	(0, _createClass3.default)(Table, [{
		key: 'convertStyle',
		value: function convertStyle(el) {
			(0, _get3.default)(Table.prototype.__proto__ || (0, _getPrototypeOf2.default)(Table.prototype), 'convertStyle', this).apply(this, arguments);
			var width = this.wordModel.getColWidth(),
			    html = ['<colgroup>'];
			for (var i = 0, cols = width.cols, sum = width.sum, len = cols.length; i < len; i++) {
				html.push('<col style="width:' + cols[i] * 100 / sum + '%"/>');
			}html.push('</colgroup>');
			el.innerHTML = html.join('');
			var style = this.wordModel.getDirectStyle();
			style && style.parse([new this.constructor.Properties(el.style, this)]);
			var tbody = this.doc.createElement('tbody');
			this.content.appendChild(tbody);
			this.content = tbody;
		}
	}, {
		key: 'getTableSelector',
		value: function getTableSelector() {
			var selector = '#' + (this.content.id ? this.content.id : this.content.id = this.doc.uid()),
			    level = _table2.default.prototype.PrioritiziedStyles.length;
			for (var i = 0; i < level; i++) {
				this.content.setAttribute('x' + i, 1);
				selector += '[x' + i + ']';
			}
			return selector + ">tbody";
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'table';
		}
	}]);
	return Table;
}(_converter2.default);

exports.default = Table;


Table.Properties = function (_Style$Properties) {
	(0, _inherits3.default)(Properties, _Style$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	return Properties;
}(_table2.default.Properties);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvdGFibGUuanMiXSwibmFtZXMiOlsiVGFibGUiLCJlbCIsImFyZ3VtZW50cyIsIndpZHRoIiwid29yZE1vZGVsIiwiZ2V0Q29sV2lkdGgiLCJodG1sIiwiaSIsImNvbHMiLCJzdW0iLCJsZW4iLCJsZW5ndGgiLCJwdXNoIiwiaW5uZXJIVE1MIiwiam9pbiIsInN0eWxlIiwiZ2V0RGlyZWN0U3R5bGUiLCJwYXJzZSIsImNvbnN0cnVjdG9yIiwiUHJvcGVydGllcyIsInRib2R5IiwiZG9jIiwiY3JlYXRlRWxlbWVudCIsImNvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdG9yIiwiaWQiLCJ1aWQiLCJsZXZlbCIsInByb3RvdHlwZSIsIlByaW9yaXRpemllZFN0eWxlcyIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7OytCQUdQQyxFLEVBQUc7QUFDZixxSUFBc0JDLFNBQXRCO0FBQ0EsT0FBSUMsUUFBTSxLQUFLQyxTQUFMLENBQWVDLFdBQWYsRUFBVjtBQUFBLE9BQXdDQyxPQUFLLENBQUMsWUFBRCxDQUE3QztBQUNBLFFBQUksSUFBSUMsSUFBRSxDQUFOLEVBQVFDLE9BQUtMLE1BQU1LLElBQW5CLEVBQXdCQyxNQUFJTixNQUFNTSxHQUFsQyxFQUFzQ0MsTUFBSUYsS0FBS0csTUFBbkQsRUFBMERKLElBQUVHLEdBQTVELEVBQWdFSCxHQUFoRTtBQUNDRCxTQUFLTSxJQUFMLENBQVUsdUJBQXNCSixLQUFLRCxDQUFMLElBQVEsR0FBUixHQUFZRSxHQUFsQyxHQUF1QyxNQUFqRDtBQURELElBRUFILEtBQUtNLElBQUwsQ0FBVSxhQUFWO0FBQ0FYLE1BQUdZLFNBQUgsR0FBYVAsS0FBS1EsSUFBTCxDQUFVLEVBQVYsQ0FBYjtBQUNBLE9BQUlDLFFBQU0sS0FBS1gsU0FBTCxDQUFlWSxjQUFmLEVBQVY7QUFDQUQsWUFBU0EsTUFBTUUsS0FBTixDQUFZLENBQUMsSUFBSSxLQUFLQyxXQUFMLENBQWlCQyxVQUFyQixDQUFnQ2xCLEdBQUdjLEtBQW5DLEVBQTBDLElBQTFDLENBQUQsQ0FBWixDQUFUO0FBQ0EsT0FBSUssUUFBTSxLQUFLQyxHQUFMLENBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBVjtBQUNBLFFBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QkosS0FBekI7QUFDQSxRQUFLRyxPQUFMLEdBQWFILEtBQWI7QUFDQTs7O3FDQUVpQjtBQUNqQixPQUFJSyxXQUFTLE9BQUssS0FBS0YsT0FBTCxDQUFhRyxFQUFiLEdBQWtCLEtBQUtILE9BQUwsQ0FBYUcsRUFBL0IsR0FBcUMsS0FBS0gsT0FBTCxDQUFhRyxFQUFiLEdBQWdCLEtBQUtMLEdBQUwsQ0FBU00sR0FBVCxFQUExRCxDQUFiO0FBQUEsT0FDQ0MsUUFBTSxnQkFBTUMsU0FBTixDQUFnQkMsa0JBQWhCLENBQW1DbkIsTUFEMUM7QUFFQSxRQUFJLElBQUlKLElBQUUsQ0FBVixFQUFZQSxJQUFFcUIsS0FBZCxFQUFvQnJCLEdBQXBCLEVBQXdCO0FBQ3ZCLFNBQUtnQixPQUFMLENBQWFRLFlBQWIsQ0FBMEIsTUFBSXhCLENBQTlCLEVBQWdDLENBQWhDO0FBQ0FrQixnQkFBVyxPQUFLbEIsQ0FBTCxHQUFPLEdBQWxCO0FBQ0E7QUFDRCxVQUFPa0IsV0FBUyxRQUFoQjtBQUNBOzs7c0JBeEJRO0FBQUMsVUFBTyxPQUFQO0FBQWU7Ozs7O2tCQURMekIsSzs7O0FBNEJyQkEsTUFBTW1CLFVBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQTBDLGdCQUFNQSxVQUFoRCIsImZpbGUiOiJ0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJ0ZXIgZnJvbSAnLi9jb252ZXJ0ZXInXHJcbmltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL3RhYmxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBDb252ZXJ0ZXJ7XHJcblx0Z2V0IHRhZygpe3JldHVybiAndGFibGUnfVxyXG5cclxuXHRjb252ZXJ0U3R5bGUoZWwpe1xyXG5cdFx0c3VwZXIuY29udmVydFN0eWxlKC4uLmFyZ3VtZW50cylcclxuXHRcdHZhciB3aWR0aD10aGlzLndvcmRNb2RlbC5nZXRDb2xXaWR0aCgpLCBodG1sPVsnPGNvbGdyb3VwPiddXHJcblx0XHRmb3IodmFyIGk9MCxjb2xzPXdpZHRoLmNvbHMsc3VtPXdpZHRoLnN1bSxsZW49Y29scy5sZW5ndGg7aTxsZW47aSsrKVxyXG5cdFx0XHRodG1sLnB1c2goJzxjb2wgc3R5bGU9XCJ3aWR0aDonKyhjb2xzW2ldKjEwMC9zdW0pKyclXCIvPicpXHJcblx0XHRodG1sLnB1c2goJzwvY29sZ3JvdXA+JylcclxuXHRcdGVsLmlubmVySFRNTD1odG1sLmpvaW4oJycpXHJcblx0XHR2YXIgc3R5bGU9dGhpcy53b3JkTW9kZWwuZ2V0RGlyZWN0U3R5bGUoKVxyXG5cdFx0c3R5bGUgJiYgc3R5bGUucGFyc2UoW25ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXMoZWwuc3R5bGUsIHRoaXMpXSlcclxuXHRcdHZhciB0Ym9keT10aGlzLmRvYy5jcmVhdGVFbGVtZW50KCd0Ym9keScpXHJcblx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGJvZHkpXHJcblx0XHR0aGlzLmNvbnRlbnQ9dGJvZHlcclxuXHR9XHJcblx0XHJcblx0Z2V0VGFibGVTZWxlY3Rvcigpe1xyXG5cdFx0dmFyIHNlbGVjdG9yPScjJysodGhpcy5jb250ZW50LmlkID8gdGhpcy5jb250ZW50LmlkIDogKHRoaXMuY29udGVudC5pZD10aGlzLmRvYy51aWQoKSkpLFxyXG5cdFx0XHRsZXZlbD1TdHlsZS5wcm90b3R5cGUuUHJpb3JpdGl6aWVkU3R5bGVzLmxlbmd0aDtcclxuXHRcdGZvcih2YXIgaT0wO2k8bGV2ZWw7aSsrKXtcclxuXHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgneCcraSwxKVxyXG5cdFx0XHRzZWxlY3Rvcis9KCdbeCcraSsnXScpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc2VsZWN0b3IrXCI+dGJvZHlcIlxyXG5cdH1cclxufVxyXG5cclxuVGFibGUuUHJvcGVydGllcz1jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHRcclxufSJdfQ==