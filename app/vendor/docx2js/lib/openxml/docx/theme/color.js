'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RGB = /([a-fA-F0-9]{2}?){3}?/;

var color = function () {
	function color(wXml, xMapping) {
		(0, _classCallCheck3.default)(this, color);

		this.wXml = wXml;
		this.map = {};
		for (var i = 0, map = xMapping.attributes, len = map.length, attr; i < len; i++) {
			this.map[(attr = xMapping.attributes[i]).localName] = attr.value;
		}
	}

	(0, _createClass3.default)(color, [{
		key: 'get',
		value: function get(name, t) {
			if (name == 'phClr') //placeholder color, witch will be replaced with direct style
				return name;
			name = this.map[name] || name;
			if (t = this.wXml.$1(name)) {
				switch (t.firstChild.localName) {
					case 'sysClr':
						return '#' + t.firstChild.attr('lastClr');
					default:
						return '#' + t.firstChild.attr('val');
				}
			} else return 'black';
		}
	}]);
	return color;
}();

exports.default = color;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvdGhlbWUvY29sb3IuanMiXSwibmFtZXMiOlsiUkdCIiwiY29sb3IiLCJ3WG1sIiwieE1hcHBpbmciLCJtYXAiLCJpIiwiYXR0cmlidXRlcyIsImxlbiIsImxlbmd0aCIsImF0dHIiLCJsb2NhbE5hbWUiLCJ2YWx1ZSIsIm5hbWUiLCJ0IiwiJDEiLCJmaXJzdENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBSSx1QkFBUjs7SUFDcUJDLEs7QUFDcEIsZ0JBQVlDLElBQVosRUFBa0JDLFFBQWxCLEVBQTJCO0FBQUE7O0FBQzFCLE9BQUtELElBQUwsR0FBVUEsSUFBVjtBQUNBLE9BQUtFLEdBQUwsR0FBUyxFQUFUO0FBQ0EsT0FBSSxJQUFJQyxJQUFFLENBQU4sRUFBUUQsTUFBSUQsU0FBU0csVUFBckIsRUFBZ0NDLE1BQUlILElBQUlJLE1BQXhDLEVBQWdEQyxJQUFwRCxFQUF5REosSUFBRUUsR0FBM0QsRUFBK0RGLEdBQS9EO0FBQ0MsUUFBS0QsR0FBTCxDQUFTLENBQUNLLE9BQUtOLFNBQVNHLFVBQVQsQ0FBb0JELENBQXBCLENBQU4sRUFBOEJLLFNBQXZDLElBQWtERCxLQUFLRSxLQUF2RDtBQUREO0FBRUE7Ozs7c0JBQ0dDLEksRUFBTUMsQyxFQUFFO0FBQ1gsT0FBR0QsUUFBTSxPQUFULEVBQWlCO0FBQ2hCLFdBQU9BLElBQVA7QUFDREEsVUFBSyxLQUFLUixHQUFMLENBQVNRLElBQVQsS0FBZ0JBLElBQXJCO0FBQ0EsT0FBR0MsSUFBRSxLQUFLWCxJQUFMLENBQVVZLEVBQVYsQ0FBYUYsSUFBYixDQUFMLEVBQXdCO0FBQ3ZCLFlBQU9DLEVBQUVFLFVBQUYsQ0FBYUwsU0FBcEI7QUFDQSxVQUFLLFFBQUw7QUFDQyxhQUFPLE1BQUlHLEVBQUVFLFVBQUYsQ0FBYU4sSUFBYixDQUFrQixTQUFsQixDQUFYO0FBQ0Q7QUFDQyxhQUFPLE1BQUlJLEVBQUVFLFVBQUYsQ0FBYU4sSUFBYixDQUFrQixLQUFsQixDQUFYO0FBSkQ7QUFNQSxJQVBELE1BUUMsT0FBTyxPQUFQO0FBQ0Q7Ozs7O2tCQXBCbUJSLEsiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUkdCPS8oW2EtZkEtRjAtOV17Mn0/KXszfT8vO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb2xvciB7XHJcblx0Y29uc3RydWN0b3Iod1htbCwgeE1hcHBpbmcpe1xyXG5cdFx0dGhpcy53WG1sPXdYbWxcclxuXHRcdHRoaXMubWFwPXt9XHJcblx0XHRmb3IodmFyIGk9MCxtYXA9eE1hcHBpbmcuYXR0cmlidXRlcyxsZW49bWFwLmxlbmd0aCwgYXR0cjtpPGxlbjtpKyspXHJcblx0XHRcdHRoaXMubWFwWyhhdHRyPXhNYXBwaW5nLmF0dHJpYnV0ZXNbaV0pLmxvY2FsTmFtZV09YXR0ci52YWx1ZVxyXG5cdH1cclxuXHRnZXQobmFtZSwgdCl7XHJcblx0XHRpZihuYW1lPT0ncGhDbHInKS8vcGxhY2Vob2xkZXIgY29sb3IsIHdpdGNoIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBkaXJlY3Qgc3R5bGVcclxuXHRcdFx0cmV0dXJuIG5hbWVcclxuXHRcdG5hbWU9dGhpcy5tYXBbbmFtZV18fG5hbWVcclxuXHRcdGlmKHQ9dGhpcy53WG1sLiQxKG5hbWUpKXtcclxuXHRcdFx0c3dpdGNoKHQuZmlyc3RDaGlsZC5sb2NhbE5hbWUpe1xyXG5cdFx0XHRjYXNlICdzeXNDbHInOlxyXG5cdFx0XHRcdHJldHVybiAnIycrdC5maXJzdENoaWxkLmF0dHIoJ2xhc3RDbHInKVxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiAnIycrdC5maXJzdENoaWxkLmF0dHIoJ3ZhbCcpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZVxyXG5cdFx0XHRyZXR1cm4gJ2JsYWNrJ1xyXG5cdH1cclxufVxyXG4iXX0=