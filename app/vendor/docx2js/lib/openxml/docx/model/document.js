'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = require('./style/inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
	_inherits(Document, _require);

	function Document() {
		_classCallCheck(this, Document);

		return _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
	}

	_createClass(Document, [{
		key: 'parse',
		value: function parse() {
			var _this2 = this;

			var visitors = _get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'parse', this).apply(this, arguments);
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
					var attr = new WeakMap();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJ2aXNpdG9ycyIsImFyZ3VtZW50cyIsImZvckVhY2giLCJhIiwicHJvcHMiLCJ3RG9jIiwiY2hpbGRyZW4iLCJnZXRQYXJ0IiwiZG9jdW1lbnRFbGVtZW50Iiwid1htbCIsIiQxIiwibnVtYmVyaW5nIiwic3BsaWNlIiwicHIiLCJzdHlsZVByIiwiUHJvcGVydGllcyIsImZpbGwiLCJhdHRyIiwiV2Vha01hcCIsImF0dHJpYnV0ZXMiLCJzZXQiLCJsb2NhbE5hbWUiLCJ2YWx1ZSIsInBhcmVudE5vZGUiLCJoYXMiLCJmaWxsY29sb3IiLCJhc0NvbG9yIiwiZ2V0IiwiY29sb3IyIiwiY29sb3IiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7MEJBQ2I7QUFBQTs7QUFDTixPQUFJQyxzSEFBd0JDLFNBQXhCLENBQUo7QUFDQUQsWUFBU0UsT0FBVCxDQUFpQixVQUFDQyxDQUFEO0FBQUEsV0FBS0EsRUFBRUMsS0FBRixHQUFRLE9BQUtDLElBQUwsQ0FBVUQsS0FBdkI7QUFBQSxJQUFqQjtBQUNBLFVBQU9KLFFBQVA7QUFDQTs7O3NDQUNrQjtBQUNsQixPQUFJTSxXQUFTLENBQUMsS0FBS0QsSUFBTCxDQUFVRSxPQUFWLENBQWtCLFFBQWxCLEVBQTRCQyxlQUE3QixFQUE2QyxLQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxNQUFiLENBQTdDLENBQWI7QUFDQSxPQUFJQyxZQUFVLEtBQUtOLElBQUwsQ0FBVUUsT0FBVixDQUFrQixvQkFBbEIsQ0FBZDtBQUNBLE9BQUdJLFNBQUgsRUFDQ0wsU0FBU00sTUFBVCxDQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQkQsVUFBVUgsZUFBOUI7QUFDRCxVQUFPRixRQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7dUNBSW9CO0FBQ25CLE9BQUlPLEtBQUcsS0FBS0osSUFBTCxDQUFVQyxFQUFWLENBQWEsYUFBYixDQUFQO0FBQ0EsT0FBSUksVUFBUSxJQUFJLGlCQUFNQyxVQUFWLENBQXFCRixFQUFyQixFQUF3QixLQUFLUixJQUE3QixFQUFrQyxJQUFsQyxDQUFaO0FBQ0EsT0FBR1EsRUFBSCxFQUFNO0FBQ0wsUUFBSUcsT0FBSyxLQUFLUCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxNQUFiLENBQVQ7QUFDQSxRQUFHTSxJQUFILEVBQVE7QUFDUCxTQUFJQyxPQUFLLElBQUlDLE9BQUosRUFBVDtBQUNBRixVQUFLRyxVQUFMLENBQWdCakIsT0FBaEIsQ0FBd0I7QUFBQSxhQUFHZSxLQUFLRyxHQUFMLENBQVNqQixFQUFFa0IsU0FBWCxFQUFxQmxCLEVBQUVtQixLQUF2QixDQUFIO0FBQUEsTUFBeEI7QUFDQU4sVUFBS08sVUFBTCxDQUFnQkosVUFBaEIsQ0FBMkJqQixPQUEzQixDQUFtQztBQUFBLGFBQUdlLEtBQUtHLEdBQUwsQ0FBU2pCLEVBQUVrQixTQUFYLEVBQXFCbEIsRUFBRW1CLEtBQXZCLENBQUg7QUFBQSxNQUFuQztBQUNBLFNBQUdMLEtBQUtPLEdBQUwsQ0FBUyxXQUFULENBQUgsRUFDQ1AsS0FBS1EsU0FBTCxHQUFlWCxRQUFRWSxPQUFSLENBQWdCVCxLQUFLVSxHQUFMLENBQVMsV0FBVCxDQUFoQixDQUFmO0FBQ0QsU0FBR1YsS0FBS08sR0FBTCxDQUFTLFFBQVQsQ0FBSCxFQUNDUCxLQUFLVyxNQUFMLEdBQVlkLFFBQVFZLE9BQVIsQ0FBZ0JULEtBQUtVLEdBQUwsQ0FBUyxRQUFULENBQWhCLENBQVo7O0FBRUQsWUFBT1YsSUFBUDtBQUNBLEtBVkQsTUFVSztBQUNKLFlBQU9ILFFBQVFlLEtBQVIsQ0FBY2hCLEVBQWQsQ0FBUDtBQUNBO0FBQ0Q7QUFDRDs7O3NCQUVnQjtBQUFDLFVBQU8sVUFBUDtBQUFrQjs7OztFQXZDQ2lCLFFBQVEsVUFBUixDOztrQkFBakIvQixRIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvaW5saW5lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXG5cdHBhcnNlKCl7XHJcblx0XHR2YXIgdmlzaXRvcnM9c3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKVxyXG5cdFx0dmlzaXRvcnMuZm9yRWFjaCgoYSk9PmEucHJvcHM9dGhpcy53RG9jLnByb3BzKVxyXG5cdFx0cmV0dXJuIHZpc2l0b3JzXHJcblx0fVxyXG5cdF9nZXRWYWxpZENoaWxkcmVuKCl7XHJcblx0XHR2YXIgY2hpbGRyZW49W3RoaXMud0RvYy5nZXRQYXJ0KCdzdHlsZXMnKS5kb2N1bWVudEVsZW1lbnQsdGhpcy53WG1sLiQxKCdib2R5JyldXHJcblx0XHR2YXIgbnVtYmVyaW5nPXRoaXMud0RvYy5nZXRQYXJ0KCd3b3JkL251bWJlcmluZy54bWwnKVxyXG5cdFx0aWYobnVtYmVyaW5nKVxyXG5cdFx0XHRjaGlsZHJlbi5zcGxpY2UoMSwwLG51bWJlcmluZy5kb2N1bWVudEVsZW1lbnQpXHJcblx0XHRyZXR1cm4gY2hpbGRyZW5cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0KiByZXR1cm4gY29sb3Igc3RyaW5nLCBvclxyXG5cdCogV2Vha01hcDp7Yndtb2RlLGZpbGxjb2xvcix0YXJnZXRzY3JlZXNpemUsY29sb3IyLGFuZ2xlLGZvY3VzLHR5cGV9XHJcblx0Ki9cclxuXHRnZXRCYWNrZ3JvdW5kU3R5bGUoKXtcclxuXHRcdHZhciBwcj10aGlzLndYbWwuJDEoJz5iYWNrZ3JvdW5kJylcclxuXHRcdHZhciBzdHlsZVByPW5ldyBTdHlsZS5Qcm9wZXJ0aWVzKHByLHRoaXMud0RvYyx0aGlzKVxyXG5cdFx0aWYocHIpe1xyXG5cdFx0XHRsZXQgZmlsbD10aGlzLndYbWwuJDEoJ2ZpbGwnKVxyXG5cdFx0XHRpZihmaWxsKXtcclxuXHRcdFx0XHRsZXQgYXR0cj1uZXcgV2Vha01hcCgpXHJcblx0XHRcdFx0ZmlsbC5hdHRyaWJ1dGVzLmZvckVhY2goYT0+YXR0ci5zZXQoYS5sb2NhbE5hbWUsYS52YWx1ZSkpXHJcblx0XHRcdFx0ZmlsbC5wYXJlbnROb2RlLmF0dHJpYnV0ZXMuZm9yRWFjaChhPT5hdHRyLnNldChhLmxvY2FsTmFtZSxhLnZhbHVlKSlcclxuXHRcdFx0XHRpZihhdHRyLmhhcygnZmlsbGNvbG9yJykpXHJcblx0XHRcdFx0XHRhdHRyLmZpbGxjb2xvcj1zdHlsZVByLmFzQ29sb3IoYXR0ci5nZXQoJ2ZpbGxjb2xvcicpKVxyXG5cdFx0XHRcdGlmKGF0dHIuaGFzKCdjb2xvcjInKSlcclxuXHRcdFx0XHRcdGF0dHIuY29sb3IyPXN0eWxlUHIuYXNDb2xvcihhdHRyLmdldCgnY29sb3IyJykpXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIGF0dHJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlUHIuY29sb3IocHIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnZG9jdW1lbnQnfVxyXG59XHJcblxyXG4iXX0=