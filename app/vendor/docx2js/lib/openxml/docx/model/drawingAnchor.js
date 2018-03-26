'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _drawing = require('./drawing');

var _drawing2 = _interopRequireDefault(_drawing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawingAnchor = function (_Drawing) {
	(0, _inherits3.default)(drawingAnchor, _Drawing);

	function drawingAnchor(wXml) {
		(0, _classCallCheck3.default)(this, drawingAnchor);

		var _this = (0, _possibleConstructorReturn3.default)(this, (drawingAnchor.__proto__ || (0, _getPrototypeOf2.default)(drawingAnchor)).apply(this, arguments));

		_this.wDrawing = wXml.$1('drawing>:first-child');
		return _this;
	}

	(0, _createClass3.default)(drawingAnchor, [{
		key: '_getValidChildren',
		value: function _getValidChildren() {
			return this.wDrawing.$('wsp');
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'drawing.anchor';
		}
	}, {
		key: 'Properties',
		get: function get() {
			return Properties;
		}
	}]);
	return drawingAnchor;
}(_drawing2.default);

exports.default = drawingAnchor;


var naming = (0, _assign2.default)({}, _drawing2.default.Properties.naming, {
	wrapNone: 'wrap',
	wrapSquare: 'wrap',
	wrapTopAndBottom: 'wrap',
	wrapTight: 'wrap',
	wrapThrough: 'wrap'
});

var Properties = function (_Drawing$Properties) {
	(0, _inherits3.default)(Properties, _Drawing$Properties);

	function Properties() {
		(0, _classCallCheck3.default)(this, Properties);
		return (0, _possibleConstructorReturn3.default)(this, (Properties.__proto__ || (0, _getPrototypeOf2.default)(Properties)).apply(this, arguments));
	}

	(0, _createClass3.default)(Properties, [{
		key: '_getValidChildren',
		value: function _getValidChildren() {
			var _this3 = this;

			var t,
			    children = (0, _get3.default)(Properties.prototype.__proto__ || (0, _getPrototypeOf2.default)(Properties.prototype), '_getValidChildren', this).apply(this, arguments);
			'positionH,positionV,wrapNone,wrapSquare,wrapTopAndBottom,wrapTight,wrapThrough'.split(',').forEach(function (a) {
				(t = _this3.wXml.$1(a)) && children.push(t);
			});
			return children;
		}
	}, {
		key: 'positionH',
		value: function positionH(x) {
			var o = { relativeFrom: x.attr('relativeFrom') };
			o[x.firstChild.localName] = x.firstChild.localName == 'posOffset' ? this.pt2Px(this.asPt(x.firstChild.textContent.trim(), 'cm')) : x.firstChild.textContent.trim();
			return o;
		}
	}, {
		key: 'positionV',
		value: function positionV(x) {
			var o = { relativeFrom: x.attr('relativeFrom') };
			o[x.firstChild.localName] = x.firstChild.localName == 'posOffset' ? this.pt2Px(this.asPt(x.firstChild.textContent.trim(), 'cm')) : x.firstChild.textContent.trim();
			return o;
		}
	}, {
		key: 'wrapNone',
		value: function wrapNone() {
			return 'none';
		}
	}, {
		key: 'wrapSquare',
		value: function wrapSquare() {
			return 'square';
		}
	}, {
		key: 'wrapTopAndBottom',
		value: function wrapTopAndBottom() {
			return 'topAndBottom';
		}
	}, {
		key: 'wrapTight',
		value: function wrapTight() {
			return 'tight';
		}
	}, {
		key: 'wrapThrough',
		value: function wrapThrough() {
			return 'through';
		}
	}, {
		key: 'behindDoc',
		value: function behindDoc(x) {
			return x.value == '0' ? this.EMPTY : true;
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'shape';
		}
	}, {
		key: 'naming',
		get: function get() {
			return naming;
		}
	}]);
	return Properties;
}(_drawing2.default.Properties);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZHJhd2luZ0FuY2hvci5qcyJdLCJuYW1lcyI6WyJkcmF3aW5nQW5jaG9yIiwid1htbCIsImFyZ3VtZW50cyIsIndEcmF3aW5nIiwiJDEiLCIkIiwiUHJvcGVydGllcyIsIm5hbWluZyIsIndyYXBOb25lIiwid3JhcFNxdWFyZSIsIndyYXBUb3BBbmRCb3R0b20iLCJ3cmFwVGlnaHQiLCJ3cmFwVGhyb3VnaCIsInQiLCJjaGlsZHJlbiIsInNwbGl0IiwiZm9yRWFjaCIsImEiLCJwdXNoIiwieCIsIm8iLCJyZWxhdGl2ZUZyb20iLCJhdHRyIiwiZmlyc3RDaGlsZCIsImxvY2FsTmFtZSIsInB0MlB4IiwiYXNQdCIsInRleHRDb250ZW50IiwidHJpbSIsInZhbHVlIiwiRU1QVFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxhOzs7QUFDcEIsd0JBQVlDLElBQVosRUFBaUI7QUFBQTs7QUFBQSxtSkFDUEMsU0FETzs7QUFFaEIsUUFBS0MsUUFBTCxHQUFjRixLQUFLRyxFQUFMLENBQVEsc0JBQVIsQ0FBZDtBQUZnQjtBQUdoQjs7OztzQ0FFa0I7QUFDbEIsVUFBTyxLQUFLRCxRQUFMLENBQWNFLENBQWQsQ0FBZ0IsS0FBaEIsQ0FBUDtBQUNBOzs7c0JBRWdCO0FBQUMsVUFBTyxnQkFBUDtBQUF3Qjs7O3NCQUVuQjtBQUFDLFVBQU9DLFVBQVA7QUFBa0I7Ozs7O2tCQVp0Qk4sYTs7O0FBZXJCLElBQUlPLFNBQU8sc0JBQWMsRUFBZCxFQUFpQixrQkFBUUQsVUFBUixDQUFtQkMsTUFBcEMsRUFBMkM7QUFDckRDLFdBQVMsTUFENEM7QUFFckRDLGFBQVcsTUFGMEM7QUFHckRDLG1CQUFpQixNQUhvQztBQUlyREMsWUFBVSxNQUoyQztBQUtyREMsY0FBWTtBQUx5QyxDQUEzQyxDQUFYOztJQU9NTixVOzs7Ozs7Ozs7O3NDQUtjO0FBQUE7O0FBQ2xCLE9BQUlPLENBQUo7QUFBQSxPQUFPQyw0SkFBb0NaLFNBQXBDLENBQVA7QUFDQSxvRkFDRWEsS0FERixDQUNRLEdBRFIsRUFDYUMsT0FEYixDQUNxQixVQUFDQyxDQUFELEVBQUs7QUFBQyxLQUFDSixJQUFFLE9BQUtaLElBQUwsQ0FBVUcsRUFBVixDQUFhYSxDQUFiLENBQUgsS0FBdUJILFNBQVNJLElBQVQsQ0FBY0wsQ0FBZCxDQUF2QjtBQUF3QyxJQURuRTtBQUVBLFVBQU9DLFFBQVA7QUFDQTs7OzRCQUVTSyxDLEVBQUU7QUFDWCxPQUFJQyxJQUFFLEVBQUNDLGNBQWFGLEVBQUVHLElBQUYsQ0FBTyxjQUFQLENBQWQsRUFBTjtBQUNBRixLQUFFRCxFQUFFSSxVQUFGLENBQWFDLFNBQWYsSUFBMkJMLEVBQUVJLFVBQUYsQ0FBYUMsU0FBYixJQUF3QixXQUF4QixHQUFzQyxLQUFLQyxLQUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVUCxFQUFFSSxVQUFGLENBQWFJLFdBQWIsQ0FBeUJDLElBQXpCLEVBQVYsRUFBMEMsSUFBMUMsQ0FBWCxDQUF0QyxHQUFvR1QsRUFBRUksVUFBRixDQUFhSSxXQUFiLENBQXlCQyxJQUF6QixFQUEvSDtBQUNBLFVBQU9SLENBQVA7QUFDQTs7OzRCQUNTRCxDLEVBQUU7QUFDWCxPQUFJQyxJQUFFLEVBQUNDLGNBQWFGLEVBQUVHLElBQUYsQ0FBTyxjQUFQLENBQWQsRUFBTjtBQUNBRixLQUFFRCxFQUFFSSxVQUFGLENBQWFDLFNBQWYsSUFBMkJMLEVBQUVJLFVBQUYsQ0FBYUMsU0FBYixJQUF3QixXQUF4QixHQUFzQyxLQUFLQyxLQUFMLENBQVcsS0FBS0MsSUFBTCxDQUFVUCxFQUFFSSxVQUFGLENBQWFJLFdBQWIsQ0FBeUJDLElBQXpCLEVBQVYsRUFBMEMsSUFBMUMsQ0FBWCxDQUF0QyxHQUFvR1QsRUFBRUksVUFBRixDQUFhSSxXQUFiLENBQXlCQyxJQUF6QixFQUEvSDtBQUNBLFVBQU9SLENBQVA7QUFDQTs7OzZCQUNTO0FBQ1QsVUFBTyxNQUFQO0FBQ0E7OzsrQkFDVztBQUNYLFVBQU8sUUFBUDtBQUNBOzs7cUNBQ2lCO0FBQ2pCLFVBQU8sY0FBUDtBQUNBOzs7OEJBQ1U7QUFDVixVQUFPLE9BQVA7QUFDQTs7O2dDQUNZO0FBQ1osVUFBTyxTQUFQO0FBQ0E7Ozs0QkFDU0QsQyxFQUFFO0FBQ1gsVUFBT0EsRUFBRVUsS0FBRixJQUFTLEdBQVQsR0FBZSxLQUFLQyxLQUFwQixHQUE0QixJQUFuQztBQUNBOzs7c0JBdENnQjtBQUFDLFVBQU8sT0FBUDtBQUFlOzs7c0JBRWQ7QUFBQyxVQUFPdkIsTUFBUDtBQUFjOzs7RUFIVCxrQkFBUUQsVSIsImZpbGUiOiJkcmF3aW5nQW5jaG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdpbmcgZnJvbSAnLi9kcmF3aW5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJhd2luZ0FuY2hvciBleHRlbmRzIERyYXdpbmd7XHJcblx0Y29uc3RydWN0b3Iod1htbCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLndEcmF3aW5nPXdYbWwuJDEoJ2RyYXdpbmc+OmZpcnN0LWNoaWxkJylcclxuXHR9XHJcblxyXG5cdF9nZXRWYWxpZENoaWxkcmVuKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53RHJhd2luZy4kKCd3c3AnKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdkcmF3aW5nLmFuY2hvcid9XHJcblxyXG5cdHN0YXRpYyBnZXQgUHJvcGVydGllcygpe3JldHVybiBQcm9wZXJ0aWVzfVxyXG59XHJcblxyXG52YXIgbmFtaW5nPU9iamVjdC5hc3NpZ24oe30sRHJhd2luZy5Qcm9wZXJ0aWVzLm5hbWluZyx7XHJcblx0d3JhcE5vbmU6J3dyYXAnLFxyXG5cdHdyYXBTcXVhcmU6J3dyYXAnLFxyXG5cdHdyYXBUb3BBbmRCb3R0b206J3dyYXAnLFxyXG5cdHdyYXBUaWdodDond3JhcCcsXHJcblx0d3JhcFRocm91Z2g6J3dyYXAnXHJcbn0pXHJcbmNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyAgRHJhd2luZy5Qcm9wZXJ0aWVze1xyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnc2hhcGUnfVxyXG5cclxuXHRzdGF0aWMgZ2V0IG5hbWluZygpe3JldHVybiBuYW1pbmd9XHJcblxyXG5cdF9nZXRWYWxpZENoaWxkcmVuKCl7XHJcblx0XHR2YXIgdCwgY2hpbGRyZW49c3VwZXIuX2dldFZhbGlkQ2hpbGRyZW4oLi4uYXJndW1lbnRzKTtcclxuXHRcdCdwb3NpdGlvbkgscG9zaXRpb25WLHdyYXBOb25lLHdyYXBTcXVhcmUsd3JhcFRvcEFuZEJvdHRvbSx3cmFwVGlnaHQsd3JhcFRocm91Z2gnXHJcblx0XHRcdC5zcGxpdCgnLCcpLmZvckVhY2goKGEpPT57KHQ9dGhpcy53WG1sLiQxKGEpKSAmJiBjaGlsZHJlbi5wdXNoKHQpfSlcclxuXHRcdHJldHVybiBjaGlsZHJlblxyXG5cdH1cclxuXHJcblx0cG9zaXRpb25IKHgpe1xyXG5cdFx0dmFyIG89e3JlbGF0aXZlRnJvbTp4LmF0dHIoJ3JlbGF0aXZlRnJvbScpfVxyXG5cdFx0b1t4LmZpcnN0Q2hpbGQubG9jYWxOYW1lXT0geC5maXJzdENoaWxkLmxvY2FsTmFtZT09J3Bvc09mZnNldCcgPyB0aGlzLnB0MlB4KHRoaXMuYXNQdCh4LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpLCdjbScpKSA6IHguZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKClcclxuXHRcdHJldHVybiBvXHJcblx0fVxyXG5cdHBvc2l0aW9uVih4KXtcclxuXHRcdHZhciBvPXtyZWxhdGl2ZUZyb206eC5hdHRyKCdyZWxhdGl2ZUZyb20nKX1cclxuXHRcdG9beC5maXJzdENoaWxkLmxvY2FsTmFtZV09IHguZmlyc3RDaGlsZC5sb2NhbE5hbWU9PSdwb3NPZmZzZXQnID8gdGhpcy5wdDJQeCh0aGlzLmFzUHQoeC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKSwnY20nKSkgOiB4LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpXHJcblx0XHRyZXR1cm4gb1xyXG5cdH1cclxuXHR3cmFwTm9uZSgpe1xyXG5cdFx0cmV0dXJuICdub25lJ1xyXG5cdH1cclxuXHR3cmFwU3F1YXJlKCl7XHJcblx0XHRyZXR1cm4gJ3NxdWFyZSdcclxuXHR9XHJcblx0d3JhcFRvcEFuZEJvdHRvbSgpe1xyXG5cdFx0cmV0dXJuICd0b3BBbmRCb3R0b20nXHJcblx0fVxyXG5cdHdyYXBUaWdodCgpe1xyXG5cdFx0cmV0dXJuICd0aWdodCdcclxuXHR9XHJcblx0d3JhcFRocm91Z2goKXtcclxuXHRcdHJldHVybiAndGhyb3VnaCdcclxuXHR9XHJcblx0YmVoaW5kRG9jKHgpe1xyXG5cdFx0cmV0dXJuIHgudmFsdWU9PScwJyA/IHRoaXMuRU1QVFkgOiB0cnVlXHJcblx0fVxyXG59XHJcbiJdfQ==