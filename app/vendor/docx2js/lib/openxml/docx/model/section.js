'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _section = require('./style/section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var section = function (_Model) {
	_inherits(section, _Model);

	function section(wXml, wDoc, mParent) {
		_classCallCheck(this, section);

		var _this = _possibleConstructorReturn(this, (section.__proto__ || Object.getPrototypeOf(section)).apply(this, arguments));

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

	_createClass(section, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uIiwid1htbCIsIndEb2MiLCJtUGFyZW50IiwiYXJndW1lbnRzIiwiY29udGVudCIsInBvcCIsIndGaXJzdCIsImxlbmd0aCIsIndMYXN0IiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwicGFyZW50Tm9kZSIsInByZXZpb3VzU2libGluZyIsInB1c2giLCJwYXJzZUNvbnRleHQiLCJjdXJyZW50IiwiZiIsInZpc2l0b3JGYWN0b3JpZXMiLCJfaXRlcmF0ZUhlYWRlckZvb3RlciIsInJlZlR5cGUiLCJyZWZzIiwiJCIsImkiLCJsZW4iLCJwYXJ0IiwiZ2V0UmVsIiwiYXR0ciIsIm1vZGVsIiwicmVxdWlyZSIsImRvY3VtZW50RWxlbWVudCIsInBhcnNlIiwicGFydE1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBQ3BCLGtCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBZ0M7QUFBQTs7QUFBQSxpSEFDdEJDLFNBRHNCOztBQUUvQkQsVUFBUUUsT0FBUixDQUFnQkMsR0FBaEI7QUFDQSxRQUFLQyxNQUFMLEdBQVlKLFFBQVFFLE9BQVIsQ0FBZ0JHLE1BQWhCLEdBQXlCTCxRQUFRRSxPQUFSLENBQWdCRixRQUFRRSxPQUFSLENBQWdCRyxNQUFoQixHQUF1QixDQUF2QyxFQUEwQ0MsS0FBMUMsQ0FBZ0RDLFdBQXpFLEdBQXVGUCxRQUFRRixJQUFSLENBQWFVLFVBQWhIOztBQUVBLFFBQUtGLEtBQUwsR0FBV1IsSUFBWDtBQUNBLFNBQU0sTUFBS1EsS0FBTCxDQUFXRyxVQUFYLElBQXVCVCxRQUFRRixJQUFyQztBQUNDLFNBQUtRLEtBQUwsR0FBVyxNQUFLQSxLQUFMLENBQVdHLFVBQXRCO0FBREQsR0FFQSxJQUFHLE1BQUtILEtBQUwsSUFBWVIsSUFBZixFQUNDLE1BQUtRLEtBQUwsR0FBV1IsS0FBS1ksZUFBaEI7O0FBRURWLFVBQVFFLE9BQVIsQ0FBZ0JTLElBQWhCOztBQUVBWixPQUFLYSxZQUFMLENBQWtCZixPQUFsQixDQUEwQmdCLE9BQTFCO0FBYitCO0FBYy9COzs7OzJCQUVRQyxDLEVBQUdDLGdCLEVBQWlCO0FBQzVCLFFBQUtDLG9CQUFMLENBQTBCRCxnQkFBMUIsRUFBMkMsUUFBM0M7QUFDQSxPQUFJRixVQUFRLEtBQUtULE1BQWpCO0FBQ0EsTUFBRTtBQUNEVSxNQUFFRCxPQUFGO0FBQ0FBLGNBQVFBLFdBQVMsS0FBS1AsS0FBZCxHQUFzQixJQUF0QixHQUE2Qk8sUUFBUU4sV0FBN0M7QUFDQSxJQUhELFFBR09NLE9BSFA7QUFJQSxRQUFLRyxvQkFBTCxDQUEwQkQsZ0JBQTFCLEVBQTJDLFFBQTNDO0FBQ0E7Ozt1Q0FFb0JBLGdCLEVBQWlCRSxPLEVBQVE7QUFDN0MsUUFBSSxJQUFJQyxPQUFLLEtBQUtwQixJQUFMLENBQVVxQixDQUFWLENBQVlGLFVBQVEsV0FBcEIsQ0FBVCxFQUEwQ0csSUFBRSxDQUE1QyxFQUE4Q0MsTUFBSUgsS0FBS2IsTUFBM0QsRUFBa0VlLElBQUVDLEdBQXBFLEVBQXdFRCxHQUF4RSxFQUE0RTtBQUMzRSxRQUFJRSxPQUFLLEtBQUt2QixJQUFMLENBQVVhLFlBQVYsQ0FBdUJVLElBQXZCLENBQTRCVCxPQUE1QixHQUFvQyxLQUFLZCxJQUFMLENBQVV3QixNQUFWLENBQWlCTCxLQUFLRSxDQUFMLEVBQVFJLElBQVIsQ0FBYSxNQUFiLENBQWpCLENBQTdDO0FBQ0EsUUFBSUMsUUFBTSxLQUFLQyxRQUFRLE9BQUtULE9BQWIsQ0FBTCxFQUE0QkssS0FBS0ssZUFBakMsRUFBa0QsS0FBSzVCLElBQXZELEVBQTZELElBQTdELEVBQW1FbUIsS0FBS0UsQ0FBTCxFQUFRSSxJQUFSLENBQWEsUUFBYixDQUFuRSxDQUFWO0FBQ0FDLFVBQU1HLEtBQU4sQ0FBWWIsZ0JBQVo7QUFDQSxTQUFLaEIsSUFBTCxDQUFVYSxZQUFWLENBQXVCVSxJQUF2QixDQUE0QlQsT0FBNUIsR0FBb0MsS0FBS2QsSUFBTCxDQUFVOEIsUUFBOUM7QUFDQTtBQUNEOzs7bUNBQ2U7QUFDZixVQUFPLHNCQUFVLEtBQUsvQixJQUFmLEVBQW9CLEtBQUtDLElBQXpCLEVBQStCLElBQS9CLENBQVA7QUFDQTs7O3NCQUVnQjtBQUFDLFVBQU8sU0FBUDtBQUFpQjs7Ozs7O2tCQXZDZkYsTyIsImZpbGUiOiJzZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9tb2RlbCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvc2VjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlY3Rpb24gZXh0ZW5kcyBNb2RlbHtcclxuXHRjb25zdHJ1Y3Rvcih3WG1sLCB3RG9jLCBtUGFyZW50KXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdG1QYXJlbnQuY29udGVudC5wb3AoKVxyXG5cdFx0dGhpcy53Rmlyc3Q9bVBhcmVudC5jb250ZW50Lmxlbmd0aCA/IG1QYXJlbnQuY29udGVudFttUGFyZW50LmNvbnRlbnQubGVuZ3RoLTFdLndMYXN0Lm5leHRTaWJsaW5nIDogbVBhcmVudC53WG1sLmZpcnN0Q2hpbGRcclxuXHJcblx0XHR0aGlzLndMYXN0PXdYbWxcclxuXHRcdHdoaWxlKHRoaXMud0xhc3QucGFyZW50Tm9kZSE9bVBhcmVudC53WG1sKVxyXG5cdFx0XHR0aGlzLndMYXN0PXRoaXMud0xhc3QucGFyZW50Tm9kZVxyXG5cdFx0aWYodGhpcy53TGFzdD09d1htbClcclxuXHRcdFx0dGhpcy53TGFzdD13WG1sLnByZXZpb3VzU2libGluZ1xyXG5cclxuXHRcdG1QYXJlbnQuY29udGVudC5wdXNoKHRoaXMpXHJcblxyXG5cdFx0d0RvYy5wYXJzZUNvbnRleHQuc2VjdGlvbi5jdXJyZW50PXRoaXNcclxuXHR9XHJcblxyXG5cdF9pdGVyYXRlKGYsIHZpc2l0b3JGYWN0b3JpZXMpe1xyXG5cdFx0dGhpcy5faXRlcmF0ZUhlYWRlckZvb3Rlcih2aXNpdG9yRmFjdG9yaWVzLCdoZWFkZXInKVxyXG5cdFx0dmFyIGN1cnJlbnQ9dGhpcy53Rmlyc3RcclxuXHRcdGRve1xyXG5cdFx0XHRmKGN1cnJlbnQpXHJcblx0XHRcdGN1cnJlbnQ9Y3VycmVudD09dGhpcy53TGFzdCA/IG51bGwgOiBjdXJyZW50Lm5leHRTaWJsaW5nXHJcblx0XHR9d2hpbGUoY3VycmVudClcclxuXHRcdHRoaXMuX2l0ZXJhdGVIZWFkZXJGb290ZXIodmlzaXRvckZhY3RvcmllcywnZm9vdGVyJylcclxuXHR9XHJcblxyXG5cdF9pdGVyYXRlSGVhZGVyRm9vdGVyKHZpc2l0b3JGYWN0b3JpZXMscmVmVHlwZSl7XHJcblx0XHRmb3IodmFyIHJlZnM9dGhpcy53WG1sLiQocmVmVHlwZSsnUmVmZXJlbmNlJyksaT0wLGxlbj1yZWZzLmxlbmd0aDtpPGxlbjtpKyspe1xyXG5cdFx0XHR2YXIgcGFydD10aGlzLndEb2MucGFyc2VDb250ZXh0LnBhcnQuY3VycmVudD10aGlzLndEb2MuZ2V0UmVsKHJlZnNbaV0uYXR0cigncjppZCcpKVxyXG5cdFx0XHR2YXIgbW9kZWw9bmV3IChyZXF1aXJlKCcuLycrcmVmVHlwZSkpKHBhcnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLndEb2MsIHRoaXMsIHJlZnNbaV0uYXR0cigndzp0eXBlJykpXHJcblx0XHRcdG1vZGVsLnBhcnNlKHZpc2l0b3JGYWN0b3JpZXMpXHJcblx0XHRcdHRoaXMud0RvYy5wYXJzZUNvbnRleHQucGFydC5jdXJyZW50PXRoaXMud0RvYy5wYXJ0TWFpblxyXG5cdFx0fVxyXG5cdH1cclxuXHRnZXREaXJlY3RTdHlsZSgpe1xyXG5cdFx0cmV0dXJuIG5ldyBTdHlsZSh0aGlzLndYbWwsdGhpcy53RG9jLCB0aGlzKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdzZWN0aW9uJ31cclxufVxyXG4iXX0=