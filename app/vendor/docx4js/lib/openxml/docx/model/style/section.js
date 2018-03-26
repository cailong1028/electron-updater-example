'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

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

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var naming = (0, _assign2.default)({}, _style2.default.Properties.naming, {
	pgSz: 'size',
	pgMar: 'margin'
});

var section = function (_Style$Properties) {
	(0, _inherits3.default)(section, _Style$Properties);

	function section() {
		(0, _classCallCheck3.default)(this, section);
		return (0, _possibleConstructorReturn3.default)(this, (section.__proto__ || (0, _getPrototypeOf2.default)(section)).apply(this, arguments));
	}

	(0, _createClass3.default)(section, [{
		key: 'pgSz',
		value: function pgSz(x) {
			return { width: this.pt2Px(this.asPt(x.attr('w:w'))), height: this.pt2Px(this.asPt(x.attr('w:h'))) };
		}
	}, {
		key: 'pgMar',
		value: function pgMar(x) {
			var _this2 = this;

			var value = this.asObject(x, function (v) {
				return _this2.pt2Px(_this2.asPt(v));
			});
			if (value.gutter && this.wDoc.getPart('settings').documentElement.$1('gutterAtTop')) value.gutterAtRight = 1;
			return value;
		}
	}, {
		key: 'cols',
		value: function cols(x) {
			var _this3 = this;

			var o = this.asObject(x, parseInt);
			o.space && (o.space = this.pt2Px(this.asPt(o.space)));

			var data = (0, _from2.default)(x.$('col')).map(function (a) {
				return {
					width: _this3.pt2Px(_this3.asPt(a.attr('w:w'))),
					space: _this3.pt2Px(_this3.asPt(a.attr('w:space')))
				};
			});

			if (data && data.length) o.data = data;

			return o;
		}
	}], [{
		key: 'naming',
		get: function get() {
			return naming;
		}
	}, {
		key: 'type',
		get: function get() {
			return 'section';
		}
	}]);
	return section;
}(_style2.default.Properties);

exports.default = section;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJuYW1pbmciLCJQcm9wZXJ0aWVzIiwicGdTeiIsInBnTWFyIiwic2VjdGlvbiIsIngiLCJ3aWR0aCIsInB0MlB4IiwiYXNQdCIsImF0dHIiLCJoZWlnaHQiLCJ2YWx1ZSIsImFzT2JqZWN0IiwidiIsImd1dHRlciIsIndEb2MiLCJnZXRQYXJ0IiwiZG9jdW1lbnRFbGVtZW50IiwiJDEiLCJndXR0ZXJBdFJpZ2h0IiwibyIsInBhcnNlSW50Iiwic3BhY2UiLCJkYXRhIiwiJCIsIm1hcCIsImEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBTyxzQkFBYyxFQUFkLEVBQWlCLGdCQUFNQyxVQUFOLENBQWlCRCxNQUFsQyxFQUF5QztBQUNsREUsT0FBSyxNQUQ2QztBQUVsREMsUUFBTTtBQUY0QyxDQUF6QyxDQUFYOztJQUtxQkMsTzs7Ozs7Ozs7Ozt1QkFHZkMsQyxFQUFFO0FBQ04sVUFBTyxFQUFDQyxPQUFNLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxJQUFMLENBQVVILEVBQUVJLElBQUYsQ0FBTyxLQUFQLENBQVYsQ0FBWCxDQUFQLEVBQTZDQyxRQUFPLEtBQUtILEtBQUwsQ0FBVyxLQUFLQyxJQUFMLENBQVVILEVBQUVJLElBQUYsQ0FBTyxLQUFQLENBQVYsQ0FBWCxDQUFwRCxFQUFQO0FBQ0E7Ozt3QkFDS0osQyxFQUFFO0FBQUE7O0FBQ1AsT0FBSU0sUUFBTSxLQUFLQyxRQUFMLENBQWNQLENBQWQsRUFBaUI7QUFBQSxXQUFHLE9BQUtFLEtBQUwsQ0FBVyxPQUFLQyxJQUFMLENBQVVLLENBQVYsQ0FBWCxDQUFIO0FBQUEsSUFBakIsQ0FBVjtBQUNBLE9BQUdGLE1BQU1HLE1BQU4sSUFBZ0IsS0FBS0MsSUFBTCxDQUFVQyxPQUFWLENBQWtCLFVBQWxCLEVBQThCQyxlQUE5QixDQUE4Q0MsRUFBOUMsQ0FBaUQsYUFBakQsQ0FBbkIsRUFDQ1AsTUFBTVEsYUFBTixHQUFvQixDQUFwQjtBQUNELFVBQU9SLEtBQVA7QUFDQTs7O3VCQUNJTixDLEVBQUU7QUFBQTs7QUFDTixPQUFJZSxJQUFFLEtBQUtSLFFBQUwsQ0FBY1AsQ0FBZCxFQUFpQmdCLFFBQWpCLENBQU47QUFDQUQsS0FBRUUsS0FBRixLQUFZRixFQUFFRSxLQUFGLEdBQVEsS0FBS2YsS0FBTCxDQUFXLEtBQUtDLElBQUwsQ0FBVVksRUFBRUUsS0FBWixDQUFYLENBQXBCOztBQUVBLE9BQUlDLE9BQUssb0JBQVdsQixFQUFFbUIsQ0FBRixDQUFJLEtBQUosQ0FBWCxFQUF1QkMsR0FBdkIsQ0FBMkIsYUFBRztBQUN0QyxXQUFPO0FBQ05uQixZQUFNLE9BQUtDLEtBQUwsQ0FBVyxPQUFLQyxJQUFMLENBQVVrQixFQUFFakIsSUFBRixDQUFPLEtBQVAsQ0FBVixDQUFYLENBREE7QUFFTmEsWUFBTSxPQUFLZixLQUFMLENBQVcsT0FBS0MsSUFBTCxDQUFVa0IsRUFBRWpCLElBQUYsQ0FBTyxTQUFQLENBQVYsQ0FBWDtBQUZBLEtBQVA7QUFJQSxJQUxRLENBQVQ7O0FBT0EsT0FBR2MsUUFBUUEsS0FBS0ksTUFBaEIsRUFDQ1AsRUFBRUcsSUFBRixHQUFPQSxJQUFQOztBQUVELFVBQU9ILENBQVA7QUFDQTs7O3NCQTFCa0I7QUFBQyxVQUFPcEIsTUFBUDtBQUFjOzs7c0JBMkJqQjtBQUFDLFVBQU8sU0FBUDtBQUFpQjs7O0VBNUJDLGdCQUFNQyxVOztrQkFBdEJHLE8iLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZSdcclxuXHJcbnZhciBuYW1pbmc9T2JqZWN0LmFzc2lnbih7fSxTdHlsZS5Qcm9wZXJ0aWVzLm5hbWluZyx7XHJcblx0XHRwZ1N6OidzaXplJyxcclxuXHRcdHBnTWFyOidtYXJnaW4nXHJcblx0fSlcclxuXHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VjdGlvbiBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XHJcblx0c3RhdGljIGdldCBuYW1pbmcoKXtyZXR1cm4gbmFtaW5nfVxyXG5cdFxyXG5cdHBnU3ooeCl7XHJcblx0XHRyZXR1cm4ge3dpZHRoOnRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzp3JykpKSwgaGVpZ2h0OnRoaXMucHQyUHgodGhpcy5hc1B0KHguYXR0cigndzpoJykpKX1cclxuXHR9XHJcblx0cGdNYXIoeCl7XHJcblx0XHR2YXIgdmFsdWU9dGhpcy5hc09iamVjdCh4LCB2PT50aGlzLnB0MlB4KHRoaXMuYXNQdCh2KSkpXHJcblx0XHRpZih2YWx1ZS5ndXR0ZXIgJiYgdGhpcy53RG9jLmdldFBhcnQoJ3NldHRpbmdzJykuZG9jdW1lbnRFbGVtZW50LiQxKCdndXR0ZXJBdFRvcCcpKVxyXG5cdFx0XHR2YWx1ZS5ndXR0ZXJBdFJpZ2h0PTE7XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cdGNvbHMoeCl7XHJcblx0XHR2YXIgbz10aGlzLmFzT2JqZWN0KHgsIHBhcnNlSW50KVxyXG5cdFx0by5zcGFjZSAmJiAoby5zcGFjZT10aGlzLnB0MlB4KHRoaXMuYXNQdChvLnNwYWNlKSkpO1xyXG5cdFx0XHJcblx0XHRsZXQgZGF0YT1BcnJheS5mcm9tKHguJCgnY29sJykpLm1hcChhPT57XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2lkdGg6dGhpcy5wdDJQeCh0aGlzLmFzUHQoYS5hdHRyKCd3OncnKSkpLFxyXG5cdFx0XHRcdHNwYWNlOnRoaXMucHQyUHgodGhpcy5hc1B0KGEuYXR0cigndzpzcGFjZScpKSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0aWYoZGF0YSAmJiBkYXRhLmxlbmd0aClcclxuXHRcdFx0by5kYXRhPWRhdGFcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG9cclxuXHR9XHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdzZWN0aW9uJ31cclxufVxyXG4iXX0=