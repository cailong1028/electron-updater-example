'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = function (_require) {
	_inherits(model, _require);

	function model(wXml, wDoc, mParent) {
		_classCallCheck(this, model);

		var _this = _possibleConstructorReturn(this, (model.__proto__ || Object.getPrototypeOf(model)).apply(this, arguments));

		_this.mParent = mParent;
		_this.content = [];
		if (mParent) mParent.content.push(_this);
		_this.type = _this.constructor.type;
		return _this;
	}

	_createClass(model, [{
		key: 'parse',
		value: function parse(visitFactories) {
			var _this2 = this;

			var visitors = [];
			var paramizedVisitFactories = [];
			$.map(visitFactories, function (visitFactory) {
				var visitor = visitFactory(this);
				if (visitor && visitor.visit() !== false) {
					visitors.push(visitor);
					paramizedVisitFactories.push(visitFactory.with(visitor));
				}
			}.bind(this));

			if (visitors.length > 0) {
				var factory = this.wDoc.factory.bind(this.wDoc);
				this._iterate(function (wXml) {
					return factory(wXml, _this2.wDoc, _this2).parse(paramizedVisitFactories);
				}, paramizedVisitFactories, visitors);
			}

			return visitors;
		}
	}, {
		key: '_iterate',
		value: function _iterate(f, paramizedVisitFactories) {
			for (var i = 0, children = this._getValidChildren(), l = children ? children.length : 0; i < l; i++) {
				!this._shouldIgnore(children[i]) && f(children[i]);
			}
		}
	}, {
		key: '_getValidChildren',
		value: function _getValidChildren() {
			return this.wXml.childNodes;
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore(wXml) {
			return false;
		}
	}, {
		key: '_attr',
		value: function _attr(selector, key) {
			var n = arguments.length == 1 ? (key = selector, this.wXml) : this.wXml.$1(selector);
			return n ? n.attr(key) : null;
		}
	}, {
		key: '_val',
		value: function _val(selector) {
			return this._attr(selector, 'w:val');
		}
	}]);

	return model;
}(require('../parser'));

exports.default = model;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwuanMiXSwibmFtZXMiOlsibW9kZWwiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJhcmd1bWVudHMiLCJjb250ZW50IiwicHVzaCIsInR5cGUiLCJjb25zdHJ1Y3RvciIsInZpc2l0RmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcyIsIiQiLCJtYXAiLCJ2aXNpdEZhY3RvcnkiLCJ2aXNpdG9yIiwidmlzaXQiLCJ3aXRoIiwiYmluZCIsImxlbmd0aCIsImZhY3RvcnkiLCJfaXRlcmF0ZSIsInBhcnNlIiwiZiIsImkiLCJjaGlsZHJlbiIsIl9nZXRWYWxpZENoaWxkcmVuIiwibCIsIl9zaG91bGRJZ25vcmUiLCJjaGlsZE5vZGVzIiwic2VsZWN0b3IiLCJrZXkiLCJuIiwiJDEiLCJhdHRyIiwiX2F0dHIiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQkEsSzs7O0FBQ3BCLGdCQUFZQyxJQUFaLEVBQWlCQyxJQUFqQixFQUFzQkMsT0FBdEIsRUFBOEI7QUFBQTs7QUFBQSw2R0FDcEJDLFNBRG9COztBQUU3QixRQUFLRCxPQUFMLEdBQWFBLE9BQWI7QUFDQSxRQUFLRSxPQUFMLEdBQWEsRUFBYjtBQUNBLE1BQUdGLE9BQUgsRUFDQ0EsUUFBUUUsT0FBUixDQUFnQkMsSUFBaEI7QUFDRCxRQUFLQyxJQUFMLEdBQVUsTUFBS0MsV0FBTCxDQUFpQkQsSUFBM0I7QUFONkI7QUFPN0I7Ozs7d0JBQ0tFLGMsRUFBZTtBQUFBOztBQUNwQixPQUFJQyxXQUFTLEVBQWI7QUFDQSxPQUFJQywwQkFBd0IsRUFBNUI7QUFDQUMsS0FBRUMsR0FBRixDQUFNSixjQUFOLEVBQXNCLFVBQVNLLFlBQVQsRUFBc0I7QUFDM0MsUUFBSUMsVUFBUUQsYUFBYSxJQUFiLENBQVo7QUFDQSxRQUFHQyxXQUFXQSxRQUFRQyxLQUFSLE9BQWtCLEtBQWhDLEVBQXNDO0FBQ3JDTixjQUFTSixJQUFULENBQWNTLE9BQWQ7QUFDQUosNkJBQXdCTCxJQUF4QixDQUE2QlEsYUFBYUcsSUFBYixDQUFrQkYsT0FBbEIsQ0FBN0I7QUFDQTtBQUNELElBTnFCLENBTXBCRyxJQU5vQixDQU1mLElBTmUsQ0FBdEI7O0FBUUEsT0FBR1IsU0FBU1MsTUFBVCxHQUFnQixDQUFuQixFQUFxQjtBQUNwQixRQUFJQyxVQUFRLEtBQUtsQixJQUFMLENBQVVrQixPQUFWLENBQWtCRixJQUFsQixDQUF1QixLQUFLaEIsSUFBNUIsQ0FBWjtBQUNBLFNBQUttQixRQUFMLENBQ0MsVUFBQ3BCLElBQUQ7QUFBQSxZQUFRbUIsUUFBUW5CLElBQVIsRUFBYSxPQUFLQyxJQUFsQixVQUE2Qm9CLEtBQTdCLENBQW1DWCx1QkFBbkMsQ0FBUjtBQUFBLEtBREQsRUFFRUEsdUJBRkYsRUFFMkJELFFBRjNCO0FBR0E7O0FBRUQsVUFBT0EsUUFBUDtBQUNBOzs7MkJBQ1FhLEMsRUFBRVosdUIsRUFBd0I7QUFDbEMsUUFBSSxJQUFJYSxJQUFFLENBQU4sRUFBUUMsV0FBUyxLQUFLQyxpQkFBTCxFQUFqQixFQUEwQ0MsSUFBRUYsV0FBU0EsU0FBU04sTUFBbEIsR0FBeUIsQ0FBekUsRUFBNEVLLElBQUVHLENBQTlFLEVBQWlGSCxHQUFqRjtBQUNFLEtBQUMsS0FBS0ksYUFBTCxDQUFtQkgsU0FBU0QsQ0FBVCxDQUFuQixDQUFGLElBQXNDRCxFQUFFRSxTQUFTRCxDQUFULENBQUYsQ0FBdEM7QUFERDtBQUVBOzs7c0NBQ2tCO0FBQ2xCLFVBQU8sS0FBS3ZCLElBQUwsQ0FBVTRCLFVBQWpCO0FBQ0E7OztnQ0FDYTVCLEksRUFBSztBQUNsQixVQUFPLEtBQVA7QUFDQTs7O3dCQUNLNkIsUSxFQUFVQyxHLEVBQUk7QUFDbkIsT0FBSUMsSUFBRTVCLFVBQVVlLE1BQVYsSUFBa0IsQ0FBbEIsSUFBdUJZLE1BQUlELFFBQUosRUFBYyxLQUFLN0IsSUFBMUMsSUFBa0QsS0FBS0EsSUFBTCxDQUFVZ0MsRUFBVixDQUFhSCxRQUFiLENBQXhEO0FBQ0EsVUFBT0UsSUFBSUEsRUFBRUUsSUFBRixDQUFPSCxHQUFQLENBQUosR0FBa0IsSUFBekI7QUFDQTs7O3VCQUNJRCxRLEVBQVM7QUFDYixVQUFPLEtBQUtLLEtBQUwsQ0FBV0wsUUFBWCxFQUFvQixPQUFwQixDQUFQO0FBQ0E7Ozs7RUE3Q2lDTSxRQUFRLFdBQVIsQzs7a0JBQWRwQyxLIiwiZmlsZSI6Im1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9kZWwgZXh0ZW5kcyByZXF1aXJlKCcuLi9wYXJzZXInKXtcclxuXHRjb25zdHJ1Y3Rvcih3WG1sLHdEb2MsbVBhcmVudCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLm1QYXJlbnQ9bVBhcmVudFxyXG5cdFx0dGhpcy5jb250ZW50PVtdXHJcblx0XHRpZihtUGFyZW50KVxyXG5cdFx0XHRtUGFyZW50LmNvbnRlbnQucHVzaCh0aGlzKVxyXG5cdFx0dGhpcy50eXBlPXRoaXMuY29uc3RydWN0b3IudHlwZVxyXG5cdH1cclxuXHRwYXJzZSh2aXNpdEZhY3Rvcmllcyl7XHJcblx0XHR2YXIgdmlzaXRvcnM9W11cclxuXHRcdHZhciBwYXJhbWl6ZWRWaXNpdEZhY3Rvcmllcz1bXTtcclxuXHRcdCQubWFwKHZpc2l0RmFjdG9yaWVzLCBmdW5jdGlvbih2aXNpdEZhY3Rvcnkpe1xyXG5cdFx0XHR2YXIgdmlzaXRvcj12aXNpdEZhY3RvcnkodGhpcylcclxuXHRcdFx0aWYodmlzaXRvciAmJiB2aXNpdG9yLnZpc2l0KCkhPT1mYWxzZSl7XHJcblx0XHRcdFx0dmlzaXRvcnMucHVzaCh2aXNpdG9yKVxyXG5cdFx0XHRcdHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzLnB1c2godmlzaXRGYWN0b3J5LndpdGgodmlzaXRvcikpXHJcblx0XHRcdH1cclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblxyXG5cdFx0aWYodmlzaXRvcnMubGVuZ3RoPjApe1xyXG5cdFx0XHRsZXQgZmFjdG9yeT10aGlzLndEb2MuZmFjdG9yeS5iaW5kKHRoaXMud0RvYylcclxuXHRcdFx0dGhpcy5faXRlcmF0ZShcclxuXHRcdFx0XHQod1htbCk9PmZhY3Rvcnkod1htbCx0aGlzLndEb2MsdGhpcykucGFyc2UocGFyYW1pemVkVmlzaXRGYWN0b3JpZXMpXHJcblx0XHRcdFx0LHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzLCB2aXNpdG9ycylcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdmlzaXRvcnNcclxuXHR9XHJcblx0X2l0ZXJhdGUoZixwYXJhbWl6ZWRWaXNpdEZhY3Rvcmllcyl7XHJcblx0XHRmb3IodmFyIGk9MCxjaGlsZHJlbj10aGlzLl9nZXRWYWxpZENoaWxkcmVuKCksbD1jaGlsZHJlbj9jaGlsZHJlbi5sZW5ndGg6MDsgaTxsOyBpKyspXHJcblx0XHRcdCghdGhpcy5fc2hvdWxkSWdub3JlKGNoaWxkcmVuW2ldKSkgJiYgZihjaGlsZHJlbltpXSlcclxuXHR9XHJcblx0X2dldFZhbGlkQ2hpbGRyZW4oKXtcclxuXHRcdHJldHVybiB0aGlzLndYbWwuY2hpbGROb2Rlc1xyXG5cdH1cclxuXHRfc2hvdWxkSWdub3JlKHdYbWwpe1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG5cdF9hdHRyKHNlbGVjdG9yLCBrZXkpe1xyXG5cdFx0dmFyIG49YXJndW1lbnRzLmxlbmd0aD09MSA/IChrZXk9c2VsZWN0b3IsIHRoaXMud1htbCkgOiB0aGlzLndYbWwuJDEoc2VsZWN0b3IpXHJcblx0XHRyZXR1cm4gbiA/IG4uYXR0cihrZXkpIDogbnVsbFxyXG5cdH1cclxuXHRfdmFsKHNlbGVjdG9yKXtcclxuXHRcdHJldHVybiB0aGlzLl9hdHRyKHNlbGVjdG9yLCd3OnZhbCcpXHJcblx0fVxyXG5cclxufVxyXG4iXX0=