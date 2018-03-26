'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

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

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Document = function (_require) {
	(0, _inherits3.default)(Document, _require);

	function Document() {
		(0, _classCallCheck3.default)(this, Document);
		return (0, _possibleConstructorReturn3.default)(this, (Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).apply(this, arguments));
	}

	(0, _createClass3.default)(Document, [{
		key: 'parse',
		value: function parse() {
			var _this2 = this;

			var visitors = (0, _get3.default)(Document.prototype.__proto__ || (0, _getPrototypeOf2.default)(Document.prototype), 'parse', this).apply(this, arguments);
			visitors.forEach(function (a) {
				return a.props = _this2.wDoc.props;
			});
			return visitors;
		}
	}, {
		key: '_getValidChildren',
		value: function _getValidChildren() {
			var children = [this.wDoc.getPart('styles').documentElement, this.wXml.$1('body')];
			var numbering = this.wDoc.getPart('word/numbering.xml');
			if (numbering) children.splice(1, 0, numbering.documentElement);
			return children;
		}

		/**
  * return color string, or
  * WeakMap:{bwmode,fillcolor,targetscreesize,color2,angle,focus,type}
  */

	}, {
		key: 'getBackgroundStyle',
		value: function getBackgroundStyle() {
			var pr = this.wXml.$1('>background');
			var stylePr = new _inline2.default.Properties(pr, this.wDoc, this);
			if (pr) {
				var fill = this.wXml.$1('fill');
				if (fill) {
					var attr = new _weakMap2.default();
					fill.attributes.forEach(function (a) {
						return attr.set(a.localName, a.value);
					});
					fill.parentNode.attributes.forEach(function (a) {
						return attr.set(a.localName, a.value);
					});
					if (attr.has('fillcolor')) attr.fillcolor = stylePr.asColor(attr.get('fillcolor'));
					if (attr.has('color2')) attr.color2 = stylePr.asColor(attr.get('color2'));

					return attr;
				} else {
					return stylePr.color(pr);
				}
			}
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'document';
		}
	}]);
	return Document;
}(require('../model'));

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJ2aXNpdG9ycyIsImFyZ3VtZW50cyIsImZvckVhY2giLCJhIiwicHJvcHMiLCJ3RG9jIiwiY2hpbGRyZW4iLCJnZXRQYXJ0IiwiZG9jdW1lbnRFbGVtZW50Iiwid1htbCIsIiQxIiwibnVtYmVyaW5nIiwic3BsaWNlIiwicHIiLCJzdHlsZVByIiwiUHJvcGVydGllcyIsImZpbGwiLCJhdHRyIiwiYXR0cmlidXRlcyIsInNldCIsImxvY2FsTmFtZSIsInZhbHVlIiwicGFyZW50Tm9kZSIsImhhcyIsImZpbGxjb2xvciIsImFzQ29sb3IiLCJnZXQiLCJjb2xvcjIiLCJjb2xvciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7OzBCQUNiO0FBQUE7O0FBQ04sT0FBSUMsNElBQXdCQyxTQUF4QixDQUFKO0FBQ0FELFlBQVNFLE9BQVQsQ0FBaUIsVUFBQ0MsQ0FBRDtBQUFBLFdBQUtBLEVBQUVDLEtBQUYsR0FBUSxPQUFLQyxJQUFMLENBQVVELEtBQXZCO0FBQUEsSUFBakI7QUFDQSxVQUFPSixRQUFQO0FBQ0E7OztzQ0FDa0I7QUFDbEIsT0FBSU0sV0FBUyxDQUFDLEtBQUtELElBQUwsQ0FBVUUsT0FBVixDQUFrQixRQUFsQixFQUE0QkMsZUFBN0IsRUFBNkMsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUE3QyxDQUFiO0FBQ0EsT0FBSUMsWUFBVSxLQUFLTixJQUFMLENBQVVFLE9BQVYsQ0FBa0Isb0JBQWxCLENBQWQ7QUFDQSxPQUFHSSxTQUFILEVBQ0NMLFNBQVNNLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0JELFVBQVVILGVBQTlCO0FBQ0QsVUFBT0YsUUFBUDtBQUNBOztBQUVEOzs7Ozs7O3VDQUlvQjtBQUNuQixPQUFJTyxLQUFHLEtBQUtKLElBQUwsQ0FBVUMsRUFBVixDQUFhLGFBQWIsQ0FBUDtBQUNBLE9BQUlJLFVBQVEsSUFBSSxpQkFBTUMsVUFBVixDQUFxQkYsRUFBckIsRUFBd0IsS0FBS1IsSUFBN0IsRUFBa0MsSUFBbEMsQ0FBWjtBQUNBLE9BQUdRLEVBQUgsRUFBTTtBQUNMLFFBQUlHLE9BQUssS0FBS1AsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixDQUFUO0FBQ0EsUUFBR00sSUFBSCxFQUFRO0FBQ1AsU0FBSUMsT0FBSyx1QkFBVDtBQUNBRCxVQUFLRSxVQUFMLENBQWdCaEIsT0FBaEIsQ0FBd0I7QUFBQSxhQUFHZSxLQUFLRSxHQUFMLENBQVNoQixFQUFFaUIsU0FBWCxFQUFxQmpCLEVBQUVrQixLQUF2QixDQUFIO0FBQUEsTUFBeEI7QUFDQUwsVUFBS00sVUFBTCxDQUFnQkosVUFBaEIsQ0FBMkJoQixPQUEzQixDQUFtQztBQUFBLGFBQUdlLEtBQUtFLEdBQUwsQ0FBU2hCLEVBQUVpQixTQUFYLEVBQXFCakIsRUFBRWtCLEtBQXZCLENBQUg7QUFBQSxNQUFuQztBQUNBLFNBQUdKLEtBQUtNLEdBQUwsQ0FBUyxXQUFULENBQUgsRUFDQ04sS0FBS08sU0FBTCxHQUFlVixRQUFRVyxPQUFSLENBQWdCUixLQUFLUyxHQUFMLENBQVMsV0FBVCxDQUFoQixDQUFmO0FBQ0QsU0FBR1QsS0FBS00sR0FBTCxDQUFTLFFBQVQsQ0FBSCxFQUNDTixLQUFLVSxNQUFMLEdBQVliLFFBQVFXLE9BQVIsQ0FBZ0JSLEtBQUtTLEdBQUwsQ0FBUyxRQUFULENBQWhCLENBQVo7O0FBRUQsWUFBT1QsSUFBUDtBQUNBLEtBVkQsTUFVSztBQUNKLFlBQU9ILFFBQVFjLEtBQVIsQ0FBY2YsRUFBZCxDQUFQO0FBQ0E7QUFDRDtBQUNEOzs7c0JBRWdCO0FBQUMsVUFBTyxVQUFQO0FBQWtCOzs7RUF2Q0NnQixRQUFRLFVBQVIsQzs7a0JBQWpCOUIsUSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL2lubGluZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgcmVxdWlyZSgnLi4vbW9kZWwnKXtcclxuXHRwYXJzZSgpe1xyXG5cdFx0dmFyIHZpc2l0b3JzPXN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cylcclxuXHRcdHZpc2l0b3JzLmZvckVhY2goKGEpPT5hLnByb3BzPXRoaXMud0RvYy5wcm9wcylcclxuXHRcdHJldHVybiB2aXNpdG9yc1xyXG5cdH1cclxuXHRfZ2V0VmFsaWRDaGlsZHJlbigpe1xyXG5cdFx0dmFyIGNoaWxkcmVuPVt0aGlzLndEb2MuZ2V0UGFydCgnc3R5bGVzJykuZG9jdW1lbnRFbGVtZW50LHRoaXMud1htbC4kMSgnYm9keScpXVxyXG5cdFx0dmFyIG51bWJlcmluZz10aGlzLndEb2MuZ2V0UGFydCgnd29yZC9udW1iZXJpbmcueG1sJylcclxuXHRcdGlmKG51bWJlcmluZylcclxuXHRcdFx0Y2hpbGRyZW4uc3BsaWNlKDEsMCxudW1iZXJpbmcuZG9jdW1lbnRFbGVtZW50KVxyXG5cdFx0cmV0dXJuIGNoaWxkcmVuXHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCogcmV0dXJuIGNvbG9yIHN0cmluZywgb3JcclxuXHQqIFdlYWtNYXA6e2J3bW9kZSxmaWxsY29sb3IsdGFyZ2V0c2NyZWVzaXplLGNvbG9yMixhbmdsZSxmb2N1cyx0eXBlfVxyXG5cdCovXHJcblx0Z2V0QmFja2dyb3VuZFN0eWxlKCl7XHJcblx0XHR2YXIgcHI9dGhpcy53WG1sLiQxKCc+YmFja2dyb3VuZCcpXHJcblx0XHR2YXIgc3R5bGVQcj1uZXcgU3R5bGUuUHJvcGVydGllcyhwcix0aGlzLndEb2MsdGhpcylcclxuXHRcdGlmKHByKXtcclxuXHRcdFx0bGV0IGZpbGw9dGhpcy53WG1sLiQxKCdmaWxsJylcclxuXHRcdFx0aWYoZmlsbCl7XHJcblx0XHRcdFx0bGV0IGF0dHI9bmV3IFdlYWtNYXAoKVxyXG5cdFx0XHRcdGZpbGwuYXR0cmlidXRlcy5mb3JFYWNoKGE9PmF0dHIuc2V0KGEubG9jYWxOYW1lLGEudmFsdWUpKVxyXG5cdFx0XHRcdGZpbGwucGFyZW50Tm9kZS5hdHRyaWJ1dGVzLmZvckVhY2goYT0+YXR0ci5zZXQoYS5sb2NhbE5hbWUsYS52YWx1ZSkpXHJcblx0XHRcdFx0aWYoYXR0ci5oYXMoJ2ZpbGxjb2xvcicpKVxyXG5cdFx0XHRcdFx0YXR0ci5maWxsY29sb3I9c3R5bGVQci5hc0NvbG9yKGF0dHIuZ2V0KCdmaWxsY29sb3InKSlcclxuXHRcdFx0XHRpZihhdHRyLmhhcygnY29sb3IyJykpXHJcblx0XHRcdFx0XHRhdHRyLmNvbG9yMj1zdHlsZVByLmFzQ29sb3IoYXR0ci5nZXQoJ2NvbG9yMicpKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBhdHRyXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiBzdHlsZVByLmNvbG9yKHByKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2RvY3VtZW50J31cclxufVxyXG5cclxuIl19