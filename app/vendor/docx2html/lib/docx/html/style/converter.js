'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _converter = require('../converter');

var _converter2 = _interopRequireDefault(_converter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lines = 'dotted,dashed,inset,outset,solid'.split();
var browsers = ',-webkit-,-moz-'.split(','),
    cssID = _converter2.default.asCssID;

var StyleConverter = function (_Converter) {
	(0, _inherits3.default)(StyleConverter, _Converter);

	function StyleConverter() {
		(0, _classCallCheck3.default)(this, StyleConverter);

		var _this = (0, _possibleConstructorReturn3.default)(this, (StyleConverter.__proto__ || (0, _getPrototypeOf2.default)(StyleConverter)).apply(this, arguments));

		var parentStyle = _this.wordModel.getParentStyle();
		parentStyle && _this.doc.stylePath(cssID(_this.wordModel.id), cssID(parentStyle.id));
		return _this;
	}

	(0, _createClass3.default)(StyleConverter, [{
		key: 'convert',
		value: function convert(value, name, category) {
			var converter = this._getPropertiesConverter(category);
			converter && converter[name] && converter[name](value);
		}
	}, {
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter() {}
	}]);
	return StyleConverter;
}(_converter2.default);

exports.default = StyleConverter;


StyleConverter.Properties = function () {
	function Properties(style, parent) {
		(0, _classCallCheck3.default)(this, Properties);

		this.style = style;
		this.parent = parent;
		parent && (this.doc = parent.doc);
	}

	(0, _createClass3.default)(Properties, [{
		key: 'visit',
		value: function visit() {
			this.convert.apply(this, arguments);
		}
	}, {
		key: 'convert',
		value: function convert(value, name) {
			this[name] && this[name](value);
		}
	}, {
		key: '_border',
		value: function _border(border) {
			if (border.val == 'none' || border.val == 'nil') return '0';else return (border.sz < 1 && border.sz > 0 ? 1 : border.sz) + 'pt ' + (Lines.indexOf(border.val.toLowerCase()) != -1 ? border.val : 'solid') + ' ' + (border.color || '');
		}
	}, {
		key: 'equalObj',
		value: function equalObj(a, b) {
			var keys = (0, _keys2.default)(a);
			if (!b || keys.length != (0, _keys2.default)(b).length) return false;
			if (keys.length != 0) {
				for (var i = 0, len = keys.length; i < len; i++) {
					if (a[keys[i]] != b[keys[i]]) return false;
				}
			}

			for (var i = 2, len = arguments.length; i < len; i++) {
				if (!this.equalObj(a, arguments[i])) return false;
			}return true;
		}
	}, {
		key: 'upperFirst',
		value: function upperFirst(type) {
			return type[0].toUpperCase() + type.slice(1);
		}
	}, {
		key: 'styless',
		value: function styless(name, value, style) {
			browsers.forEach(function (a) {
				this[a + name] = value;
			}.bind(style || this.style));
		}
	}, {
		key: 'lineStyle',
		value: function lineStyle(x) {
			if (!x) return 'solid';
			x = x.toLowerCase();
			if (x.indexOf('dot') != -1) return 'dotted';else if (x.indexOf('dash') != -1) return 'dashed';else if (x.indexOf('double') != -1 || x.indexOf('gap') != -1) return 'double';else if (x.indexOf('emboss') != -1) return 'ridge';else if (x.indexOf('grave') != -1) return 'groove';else if (x.indexOf('outset') != -1) return 'outset';else if (x.indexOf('inset') != -1) return 'inset';else return 'solid';
		}
	}]);
	return Properties;
}();
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvc3R5bGUvY29udmVydGVyLmpzIl0sIm5hbWVzIjpbIkxpbmVzIiwic3BsaXQiLCJicm93c2VycyIsImNzc0lEIiwiYXNDc3NJRCIsIlN0eWxlQ29udmVydGVyIiwiYXJndW1lbnRzIiwicGFyZW50U3R5bGUiLCJ3b3JkTW9kZWwiLCJnZXRQYXJlbnRTdHlsZSIsImRvYyIsInN0eWxlUGF0aCIsImlkIiwidmFsdWUiLCJuYW1lIiwiY2F0ZWdvcnkiLCJjb252ZXJ0ZXIiLCJfZ2V0UHJvcGVydGllc0NvbnZlcnRlciIsIlByb3BlcnRpZXMiLCJzdHlsZSIsInBhcmVudCIsImNvbnZlcnQiLCJib3JkZXIiLCJ2YWwiLCJzeiIsImluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsImNvbG9yIiwiYSIsImIiLCJrZXlzIiwibGVuZ3RoIiwiaSIsImxlbiIsImVxdWFsT2JqIiwidHlwZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmb3JFYWNoIiwiYmluZCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxRQUFNLG1DQUFtQ0MsS0FBbkMsRUFBVjtBQUNBLElBQUlDLFdBQVMsa0JBQWtCRCxLQUFsQixDQUF3QixHQUF4QixDQUFiO0FBQUEsSUFBMkNFLFFBQU0sb0JBQVVDLE9BQTNEOztJQUVxQkMsYzs7O0FBQ3BCLDJCQUFhO0FBQUE7O0FBQUEscUpBQ0hDLFNBREc7O0FBRVosTUFBSUMsY0FBWSxNQUFLQyxTQUFMLENBQWVDLGNBQWYsRUFBaEI7QUFDQUYsaUJBQWUsTUFBS0csR0FBTCxDQUFTQyxTQUFULENBQW1CUixNQUFNLE1BQUtLLFNBQUwsQ0FBZUksRUFBckIsQ0FBbkIsRUFBNkNULE1BQU1JLFlBQVlLLEVBQWxCLENBQTdDLENBQWY7QUFIWTtBQUlaOzs7OzBCQUNPQyxLLEVBQU1DLEksRUFBS0MsUSxFQUFTO0FBQzNCLE9BQUlDLFlBQVUs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RixFQUFGO0FBQ0EsT0FBR2MsRUFBRWYsT0FBRixDQUFVLEtBQVYsS0FBa0IsQ0FBQyxDQUF0QixFQUNDLE9BQU8sUUFBUCxDQURELEtBRUssSUFBR2UsRUFBRWYsT0FBRixDQUFVLE1BQVYsS0FBbUIsQ0FBQyxDQUF2QixFQUNKLE9BQU8sUUFBUCxDQURJLEtBRUEsSUFBR2UsRUFBRWYsT0FBRixDQUFVLFFBQVYsS0FBcUIsQ0FBQyxDQUF0QixJQUEyQmUsRUFBRWYsT0FBRixDQUFVLEtBQVYsS0FBa0IsQ0FBQyxDQUFqRCxFQUNKLE9BQU8sUUFBUCxDQURJLEtBRUEsSUFBR2UsRUFBRWYsT0FBRixDQUFVLFFBQVYsS0FBcUIsQ0FBQyxDQUF6QixFQUNKLE9BQU8sT0FBUCxDQURJLEtBRUEsSUFBR2UsRUFBRWYsT0FBRixDQUFVLE9BQVYsS0FBb0IsQ0FBQyxDQUF4QixFQUNKLE9BQU8sUUFBUCxDQURJLEtBRUEsSUFBR2UsRUFBRWYsT0FBRixDQUFVLFFBQVYsS0FBcUIsQ0FBQyxDQUF6QixFQUNKLE9BQU8sUUFBUCxDQURJLEtBRUEsSUFBR2UsRUFBRWYsT0FBRixDQUFVLE9BQVYsS0FBb0IsQ0FBQyxDQUF4QixFQUNKLE9BQU8sT0FBUCxDQURJLEtBR0osT0FBTyxPQUFQO0FBQ0Q7QUFoRUY7QUFBQTtBQUFBIiwiZmlsZSI6ImNvbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJ0ZXIgZnJvbSAnLi4vY29udmVydGVyJ1xyXG5cclxudmFyIExpbmVzPSdkb3R0ZWQsZGFzaGVkLGluc2V0LG91dHNldCxzb2xpZCcuc3BsaXQoKVxyXG52YXIgYnJvd3NlcnM9Jywtd2Via2l0LSwtbW96LScuc3BsaXQoJywnKSwgY3NzSUQ9Q29udmVydGVyLmFzQ3NzSUQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUNvbnZlcnRlciBleHRlbmRzIENvbnZlcnRlcntcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dmFyIHBhcmVudFN0eWxlPXRoaXMud29yZE1vZGVsLmdldFBhcmVudFN0eWxlKCk7XHJcblx0XHRwYXJlbnRTdHlsZSAmJiB0aGlzLmRvYy5zdHlsZVBhdGgoY3NzSUQodGhpcy53b3JkTW9kZWwuaWQpLCBjc3NJRChwYXJlbnRTdHlsZS5pZCkpXHJcblx0fVxyXG5cdGNvbnZlcnQodmFsdWUsbmFtZSxjYXRlZ29yeSl7XHJcblx0XHR2YXIgY29udmVydGVyPXRoaXMuX2dldFByb3BlcnRpZXNDb252ZXJ0ZXIoY2F0ZWdvcnkpO1xyXG5cdFx0Y29udmVydGVyICYmIGNvbnZlcnRlcltuYW1lXSAmJiBjb252ZXJ0ZXJbbmFtZV0odmFsdWUpXHJcblx0fVxyXG5cdF9nZXRQcm9wZXJ0aWVzQ29udmVydGVyKCl7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcblN0eWxlQ29udmVydGVyLlByb3BlcnRpZXM9Y2xhc3MgUHJvcGVydGllc3tcclxuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQpe1xyXG5cdFx0dGhpcy5zdHlsZT1zdHlsZVxyXG5cdFx0dGhpcy5wYXJlbnQ9cGFyZW50XHJcblx0XHRwYXJlbnQgJiYgKHRoaXMuZG9jPXBhcmVudC5kb2MpXHJcblx0fVxyXG5cdHZpc2l0KCl7XHJcblx0XHR0aGlzLmNvbnZlcnQoLi4uYXJndW1lbnRzKVxyXG5cdH1cclxuXHRcclxuXHRjb252ZXJ0KHZhbHVlLCBuYW1lKXtcclxuXHRcdHRoaXNbbmFtZV0gJiYgdGhpc1tuYW1lXSh2YWx1ZSlcclxuXHR9XHJcblx0XHJcblx0X2JvcmRlcihib3JkZXIpe1xyXG5cdFx0aWYoYm9yZGVyLnZhbD09J25vbmUnIHx8IGJvcmRlci52YWw9PSduaWwnKVxyXG5cdFx0XHRyZXR1cm4gJzAnXHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAoYm9yZGVyLnN6PDEgJiYgYm9yZGVyLnN6PjAgPyAxIDogYm9yZGVyLnN6KSsncHQgJysoTGluZXMuaW5kZXhPZihib3JkZXIudmFsLnRvTG93ZXJDYXNlKCkpIT0tMSA/IGJvcmRlci52YWwgOiAnc29saWQnKSsnICcrKGJvcmRlci5jb2xvcnx8JycpXHJcblx0fVxyXG5cdGVxdWFsT2JqKGEsYil7XHJcblx0XHR2YXIga2V5cz1PYmplY3Qua2V5cyhhKVxyXG5cdFx0aWYoIWIgfHwga2V5cy5sZW5ndGghPU9iamVjdC5rZXlzKGIpLmxlbmd0aClcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRpZihrZXlzLmxlbmd0aCE9MCl7XHRcdFx0XHRcdFxyXG5cdFx0XHRmb3IodmFyIGk9MCxsZW49a2V5cy5sZW5ndGg7aTxsZW47aSsrKXtcclxuXHRcdFx0XHRpZihhW2tleXNbaV1dIT1iW2tleXNbaV1dKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBpPTIsbGVuPWFyZ3VtZW50cy5sZW5ndGg7aTxsZW47aSsrKVxyXG5cdFx0XHRpZighdGhpcy5lcXVhbE9iaihhLGFyZ3VtZW50c1tpXSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRyZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHR1cHBlckZpcnN0KHR5cGUpe1xyXG5cdFx0cmV0dXJuIHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSlcclxuXHR9XHJcblx0c3R5bGVzcyhuYW1lLHZhbHVlLCBzdHlsZSl7XHJcblx0XHRicm93c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKGEpe1xyXG5cdFx0XHR0aGlzW2ErbmFtZV09dmFsdWVcclxuXHRcdH0uYmluZChzdHlsZXx8dGhpcy5zdHlsZSkpXHJcblx0fVxyXG5cdGxpbmVTdHlsZSh4KXtcclxuXHRcdGlmKCF4KVxyXG5cdFx0XHRyZXR1cm4gJ3NvbGlkJ1xyXG5cdFx0eD14LnRvTG93ZXJDYXNlKClcclxuXHRcdGlmKHguaW5kZXhPZignZG90JykhPS0xKVxyXG5cdFx0XHRyZXR1cm4gJ2RvdHRlZCdcclxuXHRcdGVsc2UgaWYoeC5pbmRleE9mKCdkYXNoJykhPS0xKVxyXG5cdFx0XHRyZXR1cm4gJ2Rhc2hlZCdcclxuXHRcdGVsc2UgaWYoeC5pbmRleE9mKCdkb3VibGUnKSE9LTEgfHwgeC5pbmRleE9mKCdnYXAnKSE9LTEpXHJcblx0XHRcdHJldHVybiAnZG91YmxlJ1xyXG5cdFx0ZWxzZSBpZih4LmluZGV4T2YoJ2VtYm9zcycpIT0tMSlcclxuXHRcdFx0cmV0dXJuICdyaWRnZSdcclxuXHRcdGVsc2UgaWYoeC5pbmRleE9mKCdncmF2ZScpIT0tMSlcclxuXHRcdFx0cmV0dXJuICdncm9vdmUnXHJcblx0XHRlbHNlIGlmKHguaW5kZXhPZignb3V0c2V0JykhPS0xKVxyXG5cdFx0XHRyZXR1cm4gJ291dHNldCdcclxuXHRcdGVsc2UgaWYoeC5pbmRleE9mKCdpbnNldCcpIT0tMSlcclxuXHRcdFx0cmV0dXJuICdpbnNldCdcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuICdzb2xpZCdcclxuXHR9XHJcbn1cclxuXHJcbiJdfQ==