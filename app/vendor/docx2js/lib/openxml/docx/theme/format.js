'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _shape = require('../model/shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = function () {
	function format(wXml, wDoc) {
		(0, _classCallCheck3.default)(this, format);

		this.wXml = wXml;
		this.wDoc = wDoc;
		this._converter = new _shape2.default.Properties(null, wDoc, null);
		this._line = {};
		this._fill = { 0: {}, 1000: {} };
		this._bgFill = {};
		this._effect = {};
		this._font = {};
	}

	(0, _createClass3.default)(format, [{
		key: 'line',
		value: function line(idx, t) {
			if (t = this._line[idx]) return t;
			return (t = this.wXml.$1('ln:nth-child(' + (parseInt(idx) + 1) + ')')) && (this._line[idx] = this._converter.ln(t));
		}
	}, {
		key: 'fill',
		value: function fill(idx, t) {
			idx = parseInt(idx);
			if (idx > 1000) return this.bgFill(idx - 1000);

			if (t = this._fill[idx]) return t;
			return (t = this.wXml.$1('bgFillStyleLst>:nth-child(' + (parseInt(idx) + 1) + ')')) && (this._fill[idx] = this._converter[t.localName](t));
		}
	}, {
		key: 'bgFill',
		value: function bgFill(idx, t) {
			if (t = this._bgFill[idx]) return t;
			return (t = this.wXml.$1('bgFillStyleLst>:nth-child(' + (parseInt(idx) + 1) + ')')) && (this._bgFill[idx] = this._converter[t.localName](t));
		}
	}, {
		key: 'effect',
		value: function effect(idx, t) {
			if (t = this._effect[idx]) return t;
			return (t = this.wXml.$1('effectStyle:nth-child(' + (parseInt(idx) + 1) + ')>effectLst')) && (this._effect[idx] = this._converter.effectLst(t));
		}
	}, {
		key: 'font',
		value: function font(idx, t) {
			if (t = this._font[idx]) return t;
			return (t = this.wXml.$1('fontScheme>' + idx + 'Font>latin')) && (this._effect[idx] = t.attr('typeface'));
		}
	}]);
	return format;
}();

exports.default = format;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvdGhlbWUvZm9ybWF0LmpzIl0sIm5hbWVzIjpbImZvcm1hdCIsIndYbWwiLCJ3RG9jIiwiX2NvbnZlcnRlciIsIlByb3BlcnRpZXMiLCJfbGluZSIsIl9maWxsIiwiX2JnRmlsbCIsIl9lZmZlY3QiLCJfZm9udCIsImlkeCIsInQiLCIkMSIsInBhcnNlSW50IiwibG4iLCJiZ0ZpbGwiLCJsb2NhbE5hbWUiLCJlZmZlY3RMc3QiLCJhdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFcUJBLE07QUFDcEIsaUJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXVCO0FBQUE7O0FBQ3RCLE9BQUtELElBQUwsR0FBVUEsSUFBVjtBQUNBLE9BQUtDLElBQUwsR0FBVUEsSUFBVjtBQUNBLE9BQUtDLFVBQUwsR0FBZ0IsSUFBSSxnQkFBTUMsVUFBVixDQUFxQixJQUFyQixFQUEwQkYsSUFBMUIsRUFBK0IsSUFBL0IsQ0FBaEI7QUFDQSxPQUFLRyxLQUFMLEdBQVcsRUFBWDtBQUNBLE9BQUtDLEtBQUwsR0FBVyxFQUFDLEdBQUUsRUFBSCxFQUFNLE1BQUssRUFBWCxFQUFYO0FBQ0EsT0FBS0MsT0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLQyxPQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtDLEtBQUwsR0FBVyxFQUFYO0FBRUE7Ozs7dUJBQ0lDLEcsRUFBSUMsQyxFQUFFO0FBQ1YsT0FBR0EsSUFBRSxLQUFLTixLQUFMLENBQVdLLEdBQVgsQ0FBTCxFQUNDLE9BQU9DLENBQVA7QUFDRCxVQUFPLENBQUNBLElBQUUsS0FBS1YsSUFBTCxDQUFVVyxFQUFWLENBQWEsbUJBQWlCQyxTQUFTSCxHQUFULElBQWMsQ0FBL0IsSUFBa0MsR0FBL0MsQ0FBSCxNQUE0RCxLQUFLTCxLQUFMLENBQVdLLEdBQVgsSUFBZ0IsS0FBS1AsVUFBTCxDQUFnQlcsRUFBaEIsQ0FBbUJILENBQW5CLENBQTVFLENBQVA7QUFDQTs7O3VCQUNJRCxHLEVBQUtDLEMsRUFBRTtBQUNYRCxTQUFJRyxTQUFTSCxHQUFULENBQUo7QUFDQSxPQUFHQSxNQUFJLElBQVAsRUFDQyxPQUFPLEtBQUtLLE1BQUwsQ0FBWUwsTUFBSSxJQUFoQixDQUFQOztBQUVELE9BQUdDLElBQUUsS0FBS0wsS0FBTCxDQUFXSSxHQUFYLENBQUwsRUFDQyxPQUFPQyxDQUFQO0FBQ0QsVUFBTyxDQUFDQSxJQUFFLEtBQUtWLElBQUwsQ0FBVVcsRUFBVixDQUFhLGdDQUE4QkMsU0FBU0gsR0FBVCxJQUFjLENBQTVDLElBQStDLEdBQTVELENBQUgsTUFBeUUsS0FBS0osS0FBTCxDQUFXSSxHQUFYLElBQWdCLEtBQUtQLFVBQUwsQ0FBZ0JRLEVBQUVLLFNBQWxCLEVBQTZCTCxDQUE3QixDQUF6RixDQUFQO0FBQ0E7Ozt5QkFDTUQsRyxFQUFLQyxDLEVBQUU7QUFDYixPQUFHQSxJQUFFLEtBQUtKLE9BQUwsQ0FBYUcsR0FBYixDQUFMLEVBQ0MsT0FBT0MsQ0FBUDtBQUNELFVBQU8sQ0FBQ0EsSUFBRSxLQUFLVixJQUFMLENBQVVXLEVBQVYsQ0FBYSxnQ0FBOEJDLFNBQVNILEdBQVQsSUFBYyxDQUE1QyxJQUErQyxHQUE1RCxDQUFILE1BQXlFLEtBQUtILE9BQUwsQ0FBYUcsR0FBYixJQUFrQixLQUFLUCxVQUFMLENBQWdCUSxFQUFFSyxTQUFsQixFQUE2QkwsQ0FBN0IsQ0FBM0YsQ0FBUDtBQUNBOzs7eUJBQ01ELEcsRUFBS0MsQyxFQUFFO0FBQ2IsT0FBR0EsSUFBRSxLQUFLSCxPQUFMLENBQWFFLEdBQWIsQ0FBTCxFQUNDLE9BQU9DLENBQVA7QUFDRCxVQUFPLENBQUNBLElBQUUsS0FBS1YsSUFBTCxDQUFVVyxFQUFWLENBQWEsNEJBQTBCQyxTQUFTSCxHQUFULElBQWMsQ0FBeEMsSUFBMkMsYUFBeEQsQ0FBSCxNQUErRSxLQUFLRixPQUFMLENBQWFFLEdBQWIsSUFBa0IsS0FBS1AsVUFBTCxDQUFnQmMsU0FBaEIsQ0FBMEJOLENBQTFCLENBQWpHLENBQVA7QUFDQTs7O3VCQUNJRCxHLEVBQUtDLEMsRUFBRTtBQUNYLE9BQUdBLElBQUUsS0FBS0YsS0FBTCxDQUFXQyxHQUFYLENBQUwsRUFDQyxPQUFPQyxDQUFQO0FBQ0QsVUFBTyxDQUFDQSxJQUFFLEtBQUtWLElBQUwsQ0FBVVcsRUFBVixDQUFhLGdCQUFjRixHQUFkLEdBQWtCLFlBQS9CLENBQUgsTUFBcUQsS0FBS0YsT0FBTCxDQUFhRSxHQUFiLElBQWtCQyxFQUFFTyxJQUFGLENBQU8sVUFBUCxDQUF2RSxDQUFQO0FBQ0E7Ozs7O2tCQXhDbUJsQixNIiwiZmlsZSI6ImZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFwZSBmcm9tICcuLi9tb2RlbC9zaGFwZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvcm1hdHtcclxuXHRjb25zdHJ1Y3Rvcih3WG1sLCB3RG9jKXtcclxuXHRcdHRoaXMud1htbD13WG1sXHJcblx0XHR0aGlzLndEb2M9d0RvY1xyXG5cdFx0dGhpcy5fY29udmVydGVyPW5ldyBTaGFwZS5Qcm9wZXJ0aWVzKG51bGwsd0RvYyxudWxsKVxyXG5cdFx0dGhpcy5fbGluZT17fVxyXG5cdFx0dGhpcy5fZmlsbD17MDp7fSwxMDAwOnt9fVxyXG5cdFx0dGhpcy5fYmdGaWxsPXt9XHJcblx0XHR0aGlzLl9lZmZlY3Q9e31cclxuXHRcdHRoaXMuX2ZvbnQ9e31cclxuXHJcblx0fVxyXG5cdGxpbmUoaWR4LHQpe1xyXG5cdFx0aWYodD10aGlzLl9saW5lW2lkeF0pXHJcblx0XHRcdHJldHVybiB0XHJcblx0XHRyZXR1cm4gKHQ9dGhpcy53WG1sLiQxKCdsbjpudGgtY2hpbGQoJysocGFyc2VJbnQoaWR4KSsxKSsnKScpKSAmJiAodGhpcy5fbGluZVtpZHhdPXRoaXMuX2NvbnZlcnRlci5sbih0KSlcclxuXHR9XHJcblx0ZmlsbChpZHgsIHQpe1xyXG5cdFx0aWR4PXBhcnNlSW50KGlkeClcclxuXHRcdGlmKGlkeD4xMDAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5iZ0ZpbGwoaWR4LTEwMDApXHJcblxyXG5cdFx0aWYodD10aGlzLl9maWxsW2lkeF0pXHJcblx0XHRcdHJldHVybiB0XHJcblx0XHRyZXR1cm4gKHQ9dGhpcy53WG1sLiQxKCdiZ0ZpbGxTdHlsZUxzdD46bnRoLWNoaWxkKCcrKHBhcnNlSW50KGlkeCkrMSkrJyknKSkgJiYgKHRoaXMuX2ZpbGxbaWR4XT10aGlzLl9jb252ZXJ0ZXJbdC5sb2NhbE5hbWVdKHQpKVxyXG5cdH1cclxuXHRiZ0ZpbGwoaWR4LCB0KXtcclxuXHRcdGlmKHQ9dGhpcy5fYmdGaWxsW2lkeF0pXHJcblx0XHRcdHJldHVybiB0XHJcblx0XHRyZXR1cm4gKHQ9dGhpcy53WG1sLiQxKCdiZ0ZpbGxTdHlsZUxzdD46bnRoLWNoaWxkKCcrKHBhcnNlSW50KGlkeCkrMSkrJyknKSkgJiYgKHRoaXMuX2JnRmlsbFtpZHhdPXRoaXMuX2NvbnZlcnRlclt0LmxvY2FsTmFtZV0odCkpXHJcblx0fVxyXG5cdGVmZmVjdChpZHgsIHQpe1xyXG5cdFx0aWYodD10aGlzLl9lZmZlY3RbaWR4XSlcclxuXHRcdFx0cmV0dXJuIHRcclxuXHRcdHJldHVybiAodD10aGlzLndYbWwuJDEoJ2VmZmVjdFN0eWxlOm50aC1jaGlsZCgnKyhwYXJzZUludChpZHgpKzEpKycpPmVmZmVjdExzdCcpKSAmJiAodGhpcy5fZWZmZWN0W2lkeF09dGhpcy5fY29udmVydGVyLmVmZmVjdExzdCh0KSlcclxuXHR9XHJcblx0Zm9udChpZHgsIHQpe1xyXG5cdFx0aWYodD10aGlzLl9mb250W2lkeF0pXHJcblx0XHRcdHJldHVybiB0XHJcblx0XHRyZXR1cm4gKHQ9dGhpcy53WG1sLiQxKCdmb250U2NoZW1lPicraWR4KydGb250PmxhdGluJykpICYmICh0aGlzLl9lZmZlY3RbaWR4XT10LmF0dHIoJ3R5cGVmYWNlJykpXHJcblx0fVxyXG59XHJcbiJdfQ==