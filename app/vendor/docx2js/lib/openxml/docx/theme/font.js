'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var font = function () {
	function font(wXml, xLang) {
		(0, _classCallCheck3.default)(this, font);

		this.wXml = wXml;
		this.xLang = xLang;
	}

	(0, _createClass3.default)(font, [{
		key: 'get',
		value: function get(name) {
			switch (name) {
				case 'minorHAnsi':
				case 'minorAscii':
					return this.minorHAnsi || (this.minorHAnsi = this.minorAscii = this.wXml.$1('minorFont>latin').attr('typeface'));
				case 'majorHAnsi':
				case 'majorAscii':
					return this.majorHAnsi || (this.majorHAnsi = this.majorAscii = this.wXml.$1('majorFont>latin').attr('typeface'));
				case 'majorEastAsia':
					if (this.majorEastAsia) return this.majorEastAsia;
					var t = this.wXml.$1('majorFont>ea').attr('typeface');
					if (t.length == 0) t = this.wXml.$1('majorFont>font[script="' + this.xLang.attr('w:eastAsia') + '"]');
					return this.majorEastAsia = t;
				case 'majorEastAsia':
					if (this.majorEastAsia) return this.majorEastAsia;
					var t = this.wXml.$1('minorFont>ea').attr('typeface');
					if (t.length == 0) t = this.wXml.$1('minorFont>font[script="' + this.xLang.attr('w:eastAsia') + '"]');
					return this.majorEastAsia = t;
				case 'majorBidi':
					if (this.majorBidi) return this.majorBidi;
					var t = this.wXml.$1('majorFont>cs').attr('typeface');
					if (t.length == 0) t = this.wXml.$1('majorFont>font[script="' + this.xLang.attr('w:bidi') + '"]');
					return this.majorBidi = t;
				case 'majorBidi':
					if (this.majorBidi) return this.majorBidi;
					var t = this.wXml.$1('minorFont>cs').attr('typeface');
					if (t.length == 0) t = this.wXml.$1('minorFont>font[script="' + this.xLang.attr('w:bidi') + '"]');
					return this.majorBidi = t;
			}
		}
	}]);
	return font;
}();

exports.default = font;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvdGhlbWUvZm9udC5qcyJdLCJuYW1lcyI6WyJmb250Iiwid1htbCIsInhMYW5nIiwibmFtZSIsIm1pbm9ySEFuc2kiLCJtaW5vckFzY2lpIiwiJDEiLCJhdHRyIiwibWFqb3JIQW5zaSIsIm1ham9yQXNjaWkiLCJtYWpvckVhc3RBc2lhIiwidCIsImxlbmd0aCIsIm1ham9yQmlkaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsSTtBQUNwQixlQUFZQyxJQUFaLEVBQWlCQyxLQUFqQixFQUF1QjtBQUFBOztBQUN0QixPQUFLRCxJQUFMLEdBQVVBLElBQVY7QUFDQSxPQUFLQyxLQUFMLEdBQVdBLEtBQVg7QUFDQTs7OztzQkFDR0MsSSxFQUFLO0FBQ1IsV0FBT0EsSUFBUDtBQUNBLFNBQUssWUFBTDtBQUNBLFNBQUssWUFBTDtBQUNDLFlBQU8sS0FBS0MsVUFBTCxLQUFvQixLQUFLQSxVQUFMLEdBQWdCLEtBQUtDLFVBQUwsR0FBZ0IsS0FBS0osSUFBTCxDQUFVSyxFQUFWLENBQWEsaUJBQWIsRUFBZ0NDLElBQWhDLENBQXFDLFVBQXJDLENBQXBELENBQVA7QUFDRCxTQUFLLFlBQUw7QUFDQSxTQUFLLFlBQUw7QUFDQyxZQUFPLEtBQUtDLFVBQUwsS0FBb0IsS0FBS0EsVUFBTCxHQUFnQixLQUFLQyxVQUFMLEdBQWdCLEtBQUtSLElBQUwsQ0FBVUssRUFBVixDQUFhLGlCQUFiLEVBQWdDQyxJQUFoQyxDQUFxQyxVQUFyQyxDQUFwRCxDQUFQO0FBQ0QsU0FBSyxlQUFMO0FBQ0MsU0FBRyxLQUFLRyxhQUFSLEVBQ0MsT0FBTyxLQUFLQSxhQUFaO0FBQ0QsU0FBSUMsSUFBRSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixDQUFrQyxVQUFsQyxDQUFOO0FBQ0EsU0FBR0ksRUFBRUMsTUFBRixJQUFVLENBQWIsRUFDQ0QsSUFBRSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSw0QkFBMEIsS0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLFlBQWhCLENBQTFCLEdBQXdELElBQXJFLENBQUY7QUFDRCxZQUFPLEtBQUtHLGFBQUwsR0FBbUJDLENBQTFCO0FBQ0QsU0FBSyxlQUFMO0FBQ0MsU0FBRyxLQUFLRCxhQUFSLEVBQ0MsT0FBTyxLQUFLQSxhQUFaO0FBQ0QsU0FBSUMsSUFBRSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixDQUFrQyxVQUFsQyxDQUFOO0FBQ0EsU0FBR0ksRUFBRUMsTUFBRixJQUFVLENBQWIsRUFDQ0QsSUFBRSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSw0QkFBMEIsS0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLFlBQWhCLENBQTFCLEdBQXdELElBQXJFLENBQUY7QUFDRCxZQUFPLEtBQUtHLGFBQUwsR0FBbUJDLENBQTFCO0FBQ0QsU0FBSyxXQUFMO0FBQ0MsU0FBRyxLQUFLRSxTQUFSLEVBQ0MsT0FBTyxLQUFLQSxTQUFaO0FBQ0QsU0FBSUYsSUFBRSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSxjQUFiLEVBQTZCQyxJQUE3QixDQUFrQyxVQUFsQyxDQUFOO0FBQ0EsU0FBR0ksRUFBRUMsTUFBRixJQUFVLENBQWIsRUFDQ0QsSUFBRSxLQUFLVixJQUFMLENBQVVLLEVBQVYsQ0FBYSw0QkFBMEIsS0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLFFBQWhCLENBQTFCLEdBQW9ELElBQWpFLENBQUY7QUFDRCxZQUFPLEtBQUtNLFNBQUwsR0FBZUYsQ0FBdEI7QUFDRCxTQUFLLFdBQUw7QUFDQyxTQUFHLEtBQUtFLFNBQVIsRUFDQyxPQUFPLEtBQUtBLFNBQVo7QUFDRCxTQUFJRixJQUFFLEtBQUtWLElBQUwsQ0FBVUssRUFBVixDQUFhLGNBQWIsRUFBNkJDLElBQTdCLENBQWtDLFVBQWxDLENBQU47QUFDQSxTQUFHSSxFQUFFQyxNQUFGLElBQVUsQ0FBYixFQUNDRCxJQUFFLEtBQUtWLElBQUwsQ0FBVUssRUFBVixDQUFhLDRCQUEwQixLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsUUFBaEIsQ0FBMUIsR0FBb0QsSUFBakUsQ0FBRjtBQUNELFlBQU8sS0FBS00sU0FBTCxHQUFlRixDQUF0QjtBQWxDRDtBQW9DQTs7Ozs7a0JBMUNtQlgsSSIsImZpbGUiOiJmb250LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9udHtcclxuXHRjb25zdHJ1Y3Rvcih3WG1sLHhMYW5nKXtcclxuXHRcdHRoaXMud1htbD13WG1sXHJcblx0XHR0aGlzLnhMYW5nPXhMYW5nXHJcblx0fVxyXG5cdGdldChuYW1lKXtcclxuXHRcdHN3aXRjaChuYW1lKXtcclxuXHRcdGNhc2UgJ21pbm9ySEFuc2knOlxyXG5cdFx0Y2FzZSAnbWlub3JBc2NpaSc6XHJcblx0XHRcdHJldHVybiB0aGlzLm1pbm9ySEFuc2kgfHwgKHRoaXMubWlub3JIQW5zaT10aGlzLm1pbm9yQXNjaWk9dGhpcy53WG1sLiQxKCdtaW5vckZvbnQ+bGF0aW4nKS5hdHRyKCd0eXBlZmFjZScpKVxyXG5cdFx0Y2FzZSAnbWFqb3JIQW5zaSc6XHJcblx0XHRjYXNlICdtYWpvckFzY2lpJzpcclxuXHRcdFx0cmV0dXJuIHRoaXMubWFqb3JIQW5zaSB8fCAodGhpcy5tYWpvckhBbnNpPXRoaXMubWFqb3JBc2NpaT10aGlzLndYbWwuJDEoJ21ham9yRm9udD5sYXRpbicpLmF0dHIoJ3R5cGVmYWNlJykpXHJcblx0XHRjYXNlICdtYWpvckVhc3RBc2lhJzpcclxuXHRcdFx0aWYodGhpcy5tYWpvckVhc3RBc2lhKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1ham9yRWFzdEFzaWFcclxuXHRcdFx0dmFyIHQ9dGhpcy53WG1sLiQxKCdtYWpvckZvbnQ+ZWEnKS5hdHRyKCd0eXBlZmFjZScpXHJcblx0XHRcdGlmKHQubGVuZ3RoPT0wKVxyXG5cdFx0XHRcdHQ9dGhpcy53WG1sLiQxKCdtYWpvckZvbnQ+Zm9udFtzY3JpcHQ9XCInK3RoaXMueExhbmcuYXR0cigndzplYXN0QXNpYScpKydcIl0nKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5tYWpvckVhc3RBc2lhPXRcclxuXHRcdGNhc2UgJ21ham9yRWFzdEFzaWEnOlxyXG5cdFx0XHRpZih0aGlzLm1ham9yRWFzdEFzaWEpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFqb3JFYXN0QXNpYVxyXG5cdFx0XHR2YXIgdD10aGlzLndYbWwuJDEoJ21pbm9yRm9udD5lYScpLmF0dHIoJ3R5cGVmYWNlJylcclxuXHRcdFx0aWYodC5sZW5ndGg9PTApXHJcblx0XHRcdFx0dD10aGlzLndYbWwuJDEoJ21pbm9yRm9udD5mb250W3NjcmlwdD1cIicrdGhpcy54TGFuZy5hdHRyKCd3OmVhc3RBc2lhJykrJ1wiXScpXHJcblx0XHRcdHJldHVybiB0aGlzLm1ham9yRWFzdEFzaWE9dFxyXG5cdFx0Y2FzZSAnbWFqb3JCaWRpJzpcclxuXHRcdFx0aWYodGhpcy5tYWpvckJpZGkpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFqb3JCaWRpXHJcblx0XHRcdHZhciB0PXRoaXMud1htbC4kMSgnbWFqb3JGb250PmNzJykuYXR0cigndHlwZWZhY2UnKVxyXG5cdFx0XHRpZih0Lmxlbmd0aD09MClcclxuXHRcdFx0XHR0PXRoaXMud1htbC4kMSgnbWFqb3JGb250PmZvbnRbc2NyaXB0PVwiJyt0aGlzLnhMYW5nLmF0dHIoJ3c6YmlkaScpKydcIl0nKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5tYWpvckJpZGk9dFxyXG5cdFx0Y2FzZSAnbWFqb3JCaWRpJzpcclxuXHRcdFx0aWYodGhpcy5tYWpvckJpZGkpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFqb3JCaWRpXHJcblx0XHRcdHZhciB0PXRoaXMud1htbC4kMSgnbWlub3JGb250PmNzJykuYXR0cigndHlwZWZhY2UnKVxyXG5cdFx0XHRpZih0Lmxlbmd0aD09MClcclxuXHRcdFx0XHR0PXRoaXMud1htbC4kMSgnbWlub3JGb250PmZvbnRbc2NyaXB0PVwiJyt0aGlzLnhMYW5nLmF0dHIoJ3c6YmlkaScpKydcIl0nKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5tYWpvckJpZGk9dFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=