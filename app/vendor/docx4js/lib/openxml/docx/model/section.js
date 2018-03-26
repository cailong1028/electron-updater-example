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

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _section = require('./style/section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var section = function (_Model) {
	(0, _inherits3.default)(section, _Model);

	function section(wXml, wDoc, mParent) {
		(0, _classCallCheck3.default)(this, section);

		var _this = (0, _possibleConstructorReturn3.default)(this, (section.__proto__ || (0, _getPrototypeOf2.default)(section)).apply(this, arguments));

		mParent.content.pop();
		_this.wFirst = mParent.content.length ? mParent.content[mParent.content.length - 1].wLast.nextSibling : mParent.wXml.firstChild;

		_this.wLast = wXml;
		while (_this.wLast.parentNode != mParent.wXml) {
			_this.wLast = _this.wLast.parentNode;
		}if (_this.wLast == wXml) _this.wLast = wXml.previousSibling;

		mParent.content.push(_this);

		wDoc.parseContext.section.current = _this;
		return _this;
	}

	(0, _createClass3.default)(section, [{
		key: '_iterate',
		value: function _iterate(f, visitorFactories) {
			this._iterateHeaderFooter(visitorFactories, 'header');
			var current = this.wFirst;
			do {
				f(current);
				current = current == this.wLast ? null : current.nextSibling;
			} while (current);
			this._iterateHeaderFooter(visitorFactories, 'footer');
		}
	}, {
		key: '_iterateHeaderFooter',
		value: function _iterateHeaderFooter(visitorFactories, refType) {
			for (var refs = this.wXml.$(refType + 'Reference'), i = 0, len = refs.length; i < len; i++) {
				var part = this.wDoc.parseContext.part.current = this.wDoc.getRel(refs[i].attr('r:id'));
				var model = new (require('./' + refType))(part.documentElement, this.wDoc, this, refs[i].attr('w:type'));
				model.parse(visitorFactories);
				this.wDoc.parseContext.part.current = this.wDoc.partMain;
			}
		}
	}, {
		key: 'getDirectStyle',
		value: function getDirectStyle() {
			return new _section2.default(this.wXml, this.wDoc, this);
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'section';
		}
	}]);
	return section;
}(_model2.default);

exports.default = section;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uIiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiYXJndW1lbnRzIiwiY29udGVudCIsInBvcCIsIndGaXJzdCIsImxlbmd0aCIsIndMYXN0IiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsInB1c2giLCJwYXJzZUNvbnRleHQiLCJjdXJyZW50IiwiZiIsInZpc2l0b3JGYWN0b3JpZXMiLCJfaXRlcmF0ZUhlYWRlckZvb3RlciIsInJlZlR5cGUiLCJyZWZzIiwiJCIsImkiLCJsZW4iLCJwYXJ0IiwiZ2V0UmVsIiwiYXR0ciIsIm1vZGVsIiwicmVxdWlyZSIsImRvY3VtZW50RWxlbWVudCIsInBhcnNlIiwicGFydE1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsTzs7O0FBQ3BCLGtCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBZ0M7QUFBQTs7QUFBQSx1SUFDdEJDLFNBRHNCOztBQUUvQkQsVUFBUUUsT0FBUixDQUFnQkMsR0FBaEI7QUFDQSxRQUFLQyxNQUFMLEdBQVlKLFFBQVFFLE9BQVIsQ0FBZ0JHLE1BQWhCLEdBQXlCTCxRQUFRRSxPQUFSLENBQWdCRixRQUFRRSxPQUFSLENBQWdCRyxNQUFoQixHQUF1QixDQUF2QyxFQUEwQ0MsS0FBMUMsQ0FBZ0RDLFdBQXpFLEdBQXVGUCxRQUFRRixJQUFSLENBQWFVLFVBQWhIOztBQUVBLFFBQUtGLEtBQUwsR0FBV1IsSUFBWDtBQUNBLFNBQU0sTUFBS1EsS0FBTCxDQUFXRyxVQUFYLElBQXVCVCxRQUFRRixJQUFyQztBQUNDLFNBQUtRLEtBQUwsR0FBVyxNQUFLQSxLQUFMLENBQVdHLFVBQXRCO0FBREQsR0FFQSxJQUFHLE1BQUtILEtBQUwsSUFBWVIsSUFBZixFQUNDLE1BQUtRLEtBQUwsR0FBV1IsS0FBS1ksZUFBaEI7O0FBRURWLFVBQVFFLE9BQVIsQ0FBZ0JTLElBQWhCOztBQUVBWixPQUFLYSxZQUFMLENBQWtCZixPQUFsQixDQUEwQmdCLE9BQTFCO0FBYitCO0FBYy9COzs7OzJCQUVRQyxDLEVBQUdDLGdCLEVBQWlCO0FBQzVCLFFBQUtDLG9CQUFMLENBQTBCRCxnQkFBMUIsRUFBMkMsUUFBM0M7QUFDQSxPQUFJRixVQUFRLEtBQUtULE1BQWpCO0FBQ0EsTUFBRTtBQUNEVSxNQUFFRCxPQUFGO0FBQ0FBLGNBQVFBLFdBQVMsS0FBS1AsS0FBZCxHQUFzQixJQUF0QixHQUE2Qk8sUUFBUU4sV0FBN0M7QUFDQSxJQUhELFFBR09NLE9BSFA7QUFJQSxRQUFLRyxvQkFBTCxDQUEwQkQsZ0JBQTFCLEVBQTJDLFFBQTNDO0FBQ0E7Ozt1Q0FFb0JBLGdCLEVBQWlCRSxPLEVBQVE7QUFDN0MsUUFBSSxJQUFJQyxPQUFLLEtBQUtwQixJQUFMLENBQVVxQixDQUFWLENBQVlGLFVBQVEsV0FBcEIsQ0FBVCxFQUEwQ0csSUFBRSxDQUE1QyxFQUE4Q0MsTUFBSUgsS0FBS2IsTUFBM0QsRUFBa0VlLElBQUVDLEdBQXBFLEVBQXdFRCxHQUF4RSxFQUE0RTtBQUMzRSxRQUFJRSxPQUFLLEtBQUt2QixJQUFMLENBQVVhLFlBQVYsQ0FBdUJVLElBQXZCLENBQTRCVCxPQUE1QixHQUFvQyxLQUFLZCxJQUFMLENBQVV3QixNQUFWLENBQWlCTCxLQUFLRSxDQUFMLEVBQVFJLElBQVIsQ0FBYSxNQUFiLENBQWpCLENBQTdDO0FBQ0EsUUFBSUMsUUFBTSxLQUFLQyxRQUFRLE9BQUtULE9BQWIsQ0FBTCxFQUE0QkssS0FBS0ssZUFBakMsRUFBa0QsS0FBSzVCLElBQXZELEVBQTZELElBQTdELEVBQW1FbUIsS0FBS0UsQ0FBTCxFQUFRSSxJQUFSLENBQWEsUUFBYixDQUFuRSxDQUFWO0FBQ0FDLFVBQU1HLEtBQU4sQ0FBWWIsZ0JBQVo7QUFDQSxTQUFLaEIsSUFBTCxDQUFVYSxZQUFWLENBQXVCVSxJQUF2QixDQUE0QlQsT0FBNUIsR0FBb0MsS0FBS2QsSUFBTCxDQUFVOEIsUUFBOUM7QUFDQTtBQUNEOzs7bUNBQ2U7QUFDZixVQUFPLHNCQUFVLEtBQUsvQixJQUFmLEVBQW9CLEtBQUtDLElBQXpCLEVBQStCLElBQS9CLENBQVA7QUFDQTs7O3NCQUVnQjtBQUFDLFVBQU8sU0FBUDtBQUFpQjs7Ozs7a0JBdkNmRixPIiwiZmlsZSI6InNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IE1vZGVsIGZyb20gJy4uL21vZGVsJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS9zZWN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VjdGlvbiBleHRlbmRzIE1vZGVse1xyXG5cdGNvbnN0cnVjdG9yKHdYbWwsIHdEb2MsIG1QYXJlbnQpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0bVBhcmVudC5jb250ZW50LnBvcCgpXHJcblx0XHR0aGlzLndGaXJzdD1tUGFyZW50LmNvbnRlbnQubGVuZ3RoID8gbVBhcmVudC5jb250ZW50W21QYXJlbnQuY29udGVudC5sZW5ndGgtMV0ud0xhc3QubmV4dFNpYmxpbmcgOiBtUGFyZW50LndYbWwuZmlyc3RDaGlsZFxyXG5cclxuXHRcdHRoaXMud0xhc3Q9d1htbFxyXG5cdFx0d2hpbGUodGhpcy53TGFzdC5wYXJlbnROb2RlIT1tUGFyZW50LndYbWwpXHJcblx0XHRcdHRoaXMud0xhc3Q9dGhpcy53TGFzdC5wYXJlbnROb2RlXHJcblx0XHRpZih0aGlzLndMYXN0PT13WG1sKVxyXG5cdFx0XHR0aGlzLndMYXN0PXdYbWwucHJldmlvdXNTaWJsaW5nXHJcblxyXG5cdFx0bVBhcmVudC5jb250ZW50LnB1c2godGhpcylcclxuXHJcblx0XHR3RG9jLnBhcnNlQ29udGV4dC5zZWN0aW9uLmN1cnJlbnQ9dGhpc1xyXG5cdH1cclxuXHJcblx0X2l0ZXJhdGUoZiwgdmlzaXRvckZhY3Rvcmllcyl7XHJcblx0XHR0aGlzLl9pdGVyYXRlSGVhZGVyRm9vdGVyKHZpc2l0b3JGYWN0b3JpZXMsJ2hlYWRlcicpXHJcblx0XHR2YXIgY3VycmVudD10aGlzLndGaXJzdFxyXG5cdFx0ZG97XHJcblx0XHRcdGYoY3VycmVudClcclxuXHRcdFx0Y3VycmVudD1jdXJyZW50PT10aGlzLndMYXN0ID8gbnVsbCA6IGN1cnJlbnQubmV4dFNpYmxpbmdcclxuXHRcdH13aGlsZShjdXJyZW50KVxyXG5cdFx0dGhpcy5faXRlcmF0ZUhlYWRlckZvb3Rlcih2aXNpdG9yRmFjdG9yaWVzLCdmb290ZXInKVxyXG5cdH1cclxuXHJcblx0X2l0ZXJhdGVIZWFkZXJGb290ZXIodmlzaXRvckZhY3RvcmllcyxyZWZUeXBlKXtcclxuXHRcdGZvcih2YXIgcmVmcz10aGlzLndYbWwuJChyZWZUeXBlKydSZWZlcmVuY2UnKSxpPTAsbGVuPXJlZnMubGVuZ3RoO2k8bGVuO2krKyl7XHJcblx0XHRcdHZhciBwYXJ0PXRoaXMud0RvYy5wYXJzZUNvbnRleHQucGFydC5jdXJyZW50PXRoaXMud0RvYy5nZXRSZWwocmVmc1tpXS5hdHRyKCdyOmlkJykpXHJcblx0XHRcdHZhciBtb2RlbD1uZXcgKHJlcXVpcmUoJy4vJytyZWZUeXBlKSkocGFydC5kb2N1bWVudEVsZW1lbnQsIHRoaXMud0RvYywgdGhpcywgcmVmc1tpXS5hdHRyKCd3OnR5cGUnKSlcclxuXHRcdFx0bW9kZWwucGFyc2UodmlzaXRvckZhY3RvcmllcylcclxuXHRcdFx0dGhpcy53RG9jLnBhcnNlQ29udGV4dC5wYXJ0LmN1cnJlbnQ9dGhpcy53RG9jLnBhcnRNYWluXHJcblx0XHR9XHJcblx0fVxyXG5cdGdldERpcmVjdFN0eWxlKCl7XHJcblx0XHRyZXR1cm4gbmV3IFN0eWxlKHRoaXMud1htbCx0aGlzLndEb2MsIHRoaXMpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3NlY3Rpb24nfVxyXG59XHJcbiJdfQ==