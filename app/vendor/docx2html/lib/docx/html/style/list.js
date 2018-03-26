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

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListStyleType = { lowerLetter: 'lower-latin', upperLetter: 'upper-latin', lowerRoman: 'lower-roman', upperRoman: 'upper-roman' };
var cssID = _converter2.default.asCssID;

var List = function (_Style) {
	(0, _inherits3.default)(List, _Style);

	function List() {
		(0, _classCallCheck3.default)(this, List);

		var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));

		_this.levelStyles = {};
		return _this;
	}

	(0, _createClass3.default)(List, [{
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter(category) {
			if (!category) return null;
			var info = category.split(' '),
			    level = parseInt(info[0]),
			    type = info.length == 1 ? 'list' : info[1],
			    style = this.levelStyles[level],
			    levelSelector = '.' + cssID(this.wordModel.id) + '[level="' + level + '"]';

			if (!style) style = this.levelStyles[level] = {};

			if (style[type]) return style[type];

			switch (type) {
				case 'inline':
					style.inline = new _inline2.default.Properties(this.doc.createStyle(levelSelector + '>li>p>.marker:before'));
					break;
				case 'paragraph':
					style.paragraph = new this.constructor.Pr(this.doc.createStyle(levelSelector + '>li>p'), this, levelSelector);
					break;
				case 'list':
					style.list = new this.constructor.Properties(this.doc.createStyle(levelSelector + '>li>p>.marker:before'), this, levelSelector, cssID(this.wordModel.id) + '_' + level, level);
					break;
			}
			return style[type];
		}
	}]);
	return List;
}(_converter2.default);

exports.default = List;


List.Pr = function (_Paragraph$Properties) {
	(0, _inherits3.default)(Pr, _Paragraph$Properties);

	function Pr(style, parent, levelSelector) {
		(0, _classCallCheck3.default)(this, Pr);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (Pr.__proto__ || (0, _getPrototypeOf2.default)(Pr)).apply(this, arguments));

		_this2.doc = parent.doc;
		_this2.levelSelector = levelSelector;
		return _this2;
	}

	(0, _createClass3.default)(Pr, [{
		key: 'ind',
		value: function ind(x) {
			var hanging = x.hanging;
			delete x.hanging;
			_paragraph2.default.Properties.prototype.ind.call(this, x);
			x.hanging = hanging;
			x.hanging && (this.doc.createStyle(this.levelSelector + '>li>p>.marker').left = -x.hanging + 'px');
		}
	}]);
	return Pr;
}(_paragraph2.default.Properties);

List.Properties = function (_Style$Properties) {
	(0, _inherits3.default)(Properties, _Style$Properties);

	function Properties(style, parent, levelSelector, counter, level) {
		(0, _classCallCheck3.default)(this, Properties);

		var _this3 = (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));

		_this3.doc = parent.doc;
		_this3.levelSelector = levelSelector;
		_this3.level = level;
		_this3.counter = counter;
		_this3.doc.createStyle(levelSelector).counterReset = counter;
		_this3.doc.createStyle(levelSelector + '>li').counterIncrement = counter;
		return _this3;
	}

	(0, _createClass3.default)(Properties, [{
		key: 'start',
		value: function start(x) {
			this.doc.createStyle(this.levelSelector).counterReset = this.counter + ' ' + (x - 1);
		}
	}, {
		key: 'numFmt',
		value: function numFmt(x) {
			this.type = ListStyleType[x] || x;
		}
	}, {
		key: 'lvlText',
		value: function lvlText(x) {
			this.style.content = '"' + x.replace('%' + (this.level + 1), '" counter(' + this.counter + (!this.type ? '' : ',' + this.type) + ') "') + '"';
		}
	}, {
		key: 'lvlJc',
		value: function lvlJc(x) {}
	}, {
		key: 'lvlPicBulletId',
		value: function lvlPicBulletId(x) {}
	}]);
	return Properties;
}(_converter2.default.Properties);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvc3R5bGUvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0U3R5bGVUeXBlIiwibG93ZXJMZXR0ZXIiLCJ1cHBlckxldHRlciIsImxvd2VyUm9tYW4iLCJ1cHBlclJvbWFuIiwiY3NzSUQiLCJhc0Nzc0lEIiwiTGlzdCIsImFyZ3VtZW50cyIsImxldmVsU3R5bGVzIiwiY2F0ZWdvcnkiLCJpbmZvIiwic3BsaXQiLCJsZXZlbCIsInBhcnNlSW50IiwidHlwZSIsImxlbmd0aCIsInN0eWxlIiwibGV2ZWxTZWxlY3RvciIsIndvcmRNb2RlbCIsImlkIiwiaW5saW5lIiwiUHJvcGVydGllcyIsImRvYyIsImNyZWF0ZVN0eWxlIiwicGFyYWdyYXBoIiwiY29uc3RydWN0b3IiLCJQciIsImxpc3QiLCJwYXJlbnQiLCJ4IiwiaGFuZ2luZyIsInByb3RvdHlwZSIsImluZCIsImNhbGwiLCJsZWZ0IiwiY291bnRlciIsImNvdW50ZXJSZXNldCIsImNvdW50ZXJJbmNyZW1lbnQiLCJjb250ZW50IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLGdCQUFjLEVBQUNDLGFBQVksYUFBYixFQUEyQkMsYUFBWSxhQUF2QyxFQUFxREMsWUFBVyxhQUFoRSxFQUE4RUMsWUFBVyxhQUF6RixFQUFsQjtBQUNBLElBQUlDLFFBQU0sb0JBQU1DLE9BQWhCOztJQUVxQkMsSTs7O0FBQ3BCLGlCQUFhO0FBQUE7O0FBQUEsaUlBQ0hDLFNBREc7O0FBRVosUUFBS0MsV0FBTCxHQUFpQixFQUFqQjtBQUZZO0FBR1o7Ozs7MENBRXVCQyxRLEVBQVM7QUFDaEMsT0FBRyxDQUFDQSxRQUFKLEVBQ0MsT0FBTyxJQUFQO0FBQ0QsT0FBSUMsT0FBS0QsU0FBU0UsS0FBVCxDQUFlLEdBQWYsQ0FBVDtBQUFBLE9BQ0NDLFFBQU1DLFNBQVNILEtBQUssQ0FB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LEtBQW5DLEVBQTBDb0IsZ0JBQTFDLEdBQTJERixPQUEzRDtBQVB3RDtBQVF4RDs7QUFURjtBQUFBO0FBQUEsd0JBVU9OLENBVlAsRUFVUztBQUNQLFFBQUtQLEdBQUwsQ0FBU0MsV0FBVCxDQUFxQixLQUFLTixhQUExQixFQUF5Q21CLFlBQXpDLEdBQXNELEtBQUtELE9BQUwsR0FBYSxHQUFiLElBQWtCTixJQUFFLENBQXBCLENBQXREO0FBQ0E7QUFaRjtBQUFBO0FBQUEseUJBYVFBLENBYlIsRUFhVTtBQUNSLFFBQUtmLElBQUwsR0FBVWYsY0FBYzhCLENBQWQsS0FBa0JBLENBQTVCO0FBQ0E7QUFmRjtBQUFBO0FBQUEsMEJBZ0JTQSxDQWhCVCxFQWdCVztBQUNULFFBQUtiLEtBQUwsQ0FBV3NCLE9BQVgsR0FBbUIsTUFBSVQsRUFBRVUsT0FBRixDQUFVLE9BQUssS0FBSzNCLEtBQUwsR0FBVyxDQUFoQixDQUFWLEVBQTZCLGVBQWEsS0FBS3VCLE9BQWxCLElBQTJCLENBQUMsS0FBS3JCLElBQU4sR0FBYSxFQUFiLEdBQWtCLE1BQUksS0FBS0EsSUFBdEQsSUFBNEQsS0FBekYsQ0FBSixHQUFvRyxHQUF2SDtBQUNBO0FBbEJGO0FBQUE7QUFBQSx3QkFtQk9lLENBbkJQLEVBbUJTLENBRVA7QUFyQkY7QUFBQTtBQUFBLGlDQXNCZ0JBLENBdEJoQixFQXNCa0IsQ0FFaEI7QUF4QkY7QUFBQTtBQUFBLEVBQXlDLG9CQUFNUixVQUEvQyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vY29udmVydGVyJ1xyXG5pbXBvcnQgSW5saW5lIGZyb20gJy4vaW5saW5lJ1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vcGFyYWdyYXBoJ1xyXG5cclxudmFyIExpc3RTdHlsZVR5cGU9e2xvd2VyTGV0dGVyOidsb3dlci1sYXRpbicsdXBwZXJMZXR0ZXI6J3VwcGVyLWxhdGluJyxsb3dlclJvbWFuOidsb3dlci1yb21hbicsdXBwZXJSb21hbjondXBwZXItcm9tYW4nfVxyXG52YXIgY3NzSUQ9U3R5bGUuYXNDc3NJRFxyXG5cdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgU3R5bGV7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMubGV2ZWxTdHlsZXM9e31cclxuXHR9XHJcblx0XHJcblx0X2dldFByb3BlcnRpZXNDb252ZXJ0ZXIoY2F0ZWdvcnkpe1xyXG5cdFx0aWYoIWNhdGVnb3J5KVxyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0dmFyIGluZm89Y2F0ZWdvcnkuc3BsaXQoJyAnKSxcclxuXHRcdFx0bGV2ZWw9cGFyc2VJbnQoaW5mb1swXSksXHJcblx0XHRcdHR5cGU9aW5mby5sZW5ndGg9PTEgPyAnbGlzdCcgOiBpbmZvWzFdLFxyXG5cdFx0XHRzdHlsZT10aGlzLmxldmVsU3R5bGVzW2xldmVsXSxcclxuXHRcdFx0bGV2ZWxTZWxlY3Rvcj0nLicrY3NzSUQodGhpcy53b3JkTW9kZWwuaWQpKydbbGV2ZWw9XCInK2xldmVsKydcIl0nO1xyXG5cdFx0XHJcblx0XHRpZighc3R5bGUpXHJcblx0XHRcdHN0eWxlPXRoaXMubGV2ZWxTdHlsZXNbbGV2ZWxdPXt9XHJcblx0XHRcdFxyXG5cdFx0aWYoc3R5bGVbdHlwZV0pXHJcblx0XHRcdHJldHVybiBzdHlsZVt0eXBlXTtcclxuXHRcdFx0XHJcblx0XHRzd2l0Y2godHlwZSl7XHJcblx0XHRjYXNlICdpbmxpbmUnOlxyXG5cdFx0XHRzdHlsZS5pbmxpbmU9bmV3IElubGluZS5Qcm9wZXJ0aWVzKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKGxldmVsU2VsZWN0b3IrJz5saT5wPi5tYXJrZXI6YmVmb3JlJykpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICdwYXJhZ3JhcGgnOlxyXG5cdFx0XHRzdHlsZS5wYXJhZ3JhcGg9bmV3IHRoaXMuY29uc3RydWN0b3IuUHIodGhpcy5kb2MuY3JlYXRlU3R5bGUobGV2ZWxTZWxlY3RvcisnPmxpPnAnKSwgdGhpcywgbGV2ZWxTZWxlY3RvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJ2xpc3QnOlxyXG5cdFx0XHRzdHlsZS5saXN0PW5ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUobGV2ZWxTZWxlY3RvcisnPmxpPnA+Lm1hcmtlcjpiZWZvcmUnKSwgdGhpcywgbGV2ZWxTZWxlY3RvciwgY3NzSUQodGhpcy53b3JkTW9kZWwuaWQpKydfJytsZXZlbCwgbGV2ZWwpO1xyXG5cdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0eWxlW3R5cGVdXHJcblx0fVxyXG59XHJcblx0XHJcbkxpc3QuUHI9Y2xhc3MgUHIgZXh0ZW5kcyBQYXJhZ3JhcGguUHJvcGVydGllc3tcclxuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQsIGxldmVsU2VsZWN0b3Ipe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5kb2M9cGFyZW50LmRvY1xyXG5cdFx0dGhpcy5sZXZlbFNlbGVjdG9yPWxldmVsU2VsZWN0b3JcclxuXHR9XHJcblx0aW5kKHgpe1xyXG5cdFx0dmFyIGhhbmdpbmc9eC5oYW5naW5nXHJcblx0XHRkZWxldGUgeC5oYW5naW5nXHJcblx0XHRQYXJhZ3JhcGguUHJvcGVydGllcy5wcm90b3R5cGUuaW5kLmNhbGwodGhpcyx4KVxyXG5cdFx0eC5oYW5naW5nPWhhbmdpbmdcclxuXHRcdHguaGFuZ2luZyAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5sZXZlbFNlbGVjdG9yKyc+bGk+cD4ubWFya2VyJykubGVmdD0teC5oYW5naW5nKydweCcpXHJcblx0fVxyXG59XHJcblx0XHRcclxuTGlzdC5Qcm9wZXJ0aWVzPWNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xyXG5cdGNvbnN0cnVjdG9yKHN0eWxlLCBwYXJlbnQsIGxldmVsU2VsZWN0b3IsIGNvdW50ZXIsIGxldmVsKXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMuZG9jPXBhcmVudC5kb2NcclxuXHRcdHRoaXMubGV2ZWxTZWxlY3Rvcj1sZXZlbFNlbGVjdG9yXHJcblx0XHR0aGlzLmxldmVsPWxldmVsXHJcblx0XHR0aGlzLmNvdW50ZXI9Y291bnRlclxyXG5cdFx0dGhpcy5kb2MuY3JlYXRlU3R5bGUobGV2ZWxTZWxlY3RvcikuY291bnRlclJlc2V0PWNvdW50ZXJcclxuXHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKGxldmVsU2VsZWN0b3IrJz5saScpLmNvdW50ZXJJbmNyZW1lbnQ9Y291bnRlclxyXG5cdH1cclxuXHRzdGFydCh4KXtcclxuXHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMubGV2ZWxTZWxlY3RvcikuY291bnRlclJlc2V0PXRoaXMuY291bnRlcisnICcrKHgtMSlcclxuXHR9XHJcblx0bnVtRm10KHgpe1xyXG5cdFx0dGhpcy50eXBlPUxpc3RTdHlsZVR5cGVbeF18fHhcclxuXHR9XHJcblx0bHZsVGV4dCh4KXtcclxuXHRcdHRoaXMuc3R5bGUuY29udGVudD0nXCInK3gucmVwbGFjZSgnJScrKHRoaXMubGV2ZWwrMSksJ1wiIGNvdW50ZXIoJyt0aGlzLmNvdW50ZXIrKCF0aGlzLnR5cGUgPyAnJyA6ICcsJyt0aGlzLnR5cGUpKycpIFwiJykrJ1wiJ1xyXG5cdH1cclxuXHRsdmxKYyh4KXtcclxuXHRcdFxyXG5cdH1cclxuXHRsdmxQaWNCdWxsZXRJZCh4KXtcclxuXHRcdFxyXG5cdH1cclxufSJdfQ==