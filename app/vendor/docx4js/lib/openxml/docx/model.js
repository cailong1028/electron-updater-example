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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = function (_require) {
	(0, _inherits3.default)(model, _require);

	function model(wXml, wDoc, mParent) {
		(0, _classCallCheck3.default)(this, model);

		var _this = (0, _possibleConstructorReturn3.default)(this, (model.__proto__ || (0, _getPrototypeOf2.default)(model)).apply(this, arguments));

		_this.mParent = mParent;
		_this.content = [];
		if (mParent) mParent.content.push(_this);
		_this.type = _this.constructor.type;
		return _this;
	}

	(0, _createClass3.default)(model, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwuanMiXSwibmFtZXMiOlsibW9kZWwiLCJ3WG1sIiwid0RvYyIsIm1QYXJlbnQiLCJhcmd1bWVudHMiLCJjb250ZW50IiwicHVzaCIsInR5cGUiLCJjb25zdHJ1Y3RvciIsInZpc2l0RmFjdG9yaWVzIiwidmlzaXRvcnMiLCJwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcyIsIiQiLCJtYXAiLCJ2aXNpdEZhY3RvcnkiLCJ2aXNpdG9yIiwidmlzaXQiLCJ3aXRoIiwiYmluZCIsImxlbmd0aCIsImZhY3RvcnkiLCJfaXRlcmF0ZSIsInBhcnNlIiwiZiIsImkiLCJjaGlsZHJlbiIsIl9nZXRWYWxpZENoaWxkcmVuIiwibCIsIl9zaG91bGRJZ25vcmUiLCJjaGlsZE5vZGVzIiwic2VsZWN0b3IiLCJrZXkiLCJuIiwiJDEiLCJhdHRyIiwiX2F0dHIiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxLOzs7QUFDcEIsZ0JBQVlDLElBQVosRUFBaUJDLElBQWpCLEVBQXNCQyxPQUF0QixFQUE4QjtBQUFBOztBQUFBLG1JQUNwQkMsU0FEb0I7O0FBRTdCLFFBQUtELE9BQUwsR0FBYUEsT0FBYjtBQUNBLFFBQUtFLE9BQUwsR0FBYSxFQUFiO0FBQ0EsTUFBR0YsT0FBSCxFQUNDQSxRQUFRRSxPQUFSLENBQWdCQyxJQUFoQjtBQUNELFFBQUtDLElBQUwsR0FBVSxNQUFLQyxXQUFMLENBQWlCRCxJQUEzQjtBQU42QjtBQU83Qjs7Ozt3QkFDS0UsYyxFQUFlO0FBQUE7O0FBQ3BCLE9BQUlDLFdBQVMsRUFBYjtBQUNBLE9BQUlDLDBCQUF3QixFQUE1QjtBQUNBQyxLQUFFQyxHQUFGLENBQU1KLGNBQU4sRUFBc0IsVUFBU0ssWUFBVCxFQUFzQjtBQUMzQyxRQUFJQyxVQUFRRCxhQUFhLElBQWIsQ0FBWjtBQUNBLFFBQUdDLFdBQVdBLFFBQVFDLEtBQVIsT0FBa0IsS0FBaEMsRUFBc0M7QUFDckNOLGNBQVNKLElBQVQsQ0FBY1MsT0FBZDtBQUNBSiw2QkFBd0JMLElBQXhCLENBQTZCUSxhQUFhRyxJQUFiLENBQWtCRixPQUFsQixDQUE3QjtBQUNBO0FBQ0QsSUFOcUIsQ0FNcEJHLElBTm9CLENBTWYsSUFOZSxDQUF0Qjs7QUFRQSxPQUFHUixTQUFTUyxNQUFULEdBQWdCLENBQW5CLEVBQXFCO0FBQ3BCLFFBQUlDLFVBQVEsS0FBS2xCLElBQUwsQ0FBVWtCLE9BQVYsQ0FBa0JGLElBQWxCLENBQXVCLEtBQUtoQixJQUE1QixDQUFaO0FBQ0EsU0FBS21CLFFBQUwsQ0FDQyxVQUFDcEIsSUFBRDtBQUFBLFlBQVFtQixRQUFRbkIsSUFBUixFQUFhLE9BQUtDLElBQWxCLFVBQTZCb0IsS0FBN0IsQ0FBbUNYLHVCQUFuQyxDQUFSO0FBQUEsS0FERCxFQUVFQSx1QkFGRixFQUUyQkQsUUFGM0I7QUFHQTs7QUFFRCxVQUFPQSxRQUFQO0FBQ0E7OzsyQkFDUWEsQyxFQUFFWix1QixFQUF3QjtBQUNsQyxRQUFJLElBQUlhLElBQUUsQ0FBTixFQUFRQyxXQUFTLEtBQUtDLGlCQUFMLEVBQWpCLEVBQTBDQyxJQUFFRixXQUFTQSxTQUFTTixNQUFsQixHQUF5QixDQUF6RSxFQUE0RUssSUFBRUcsQ0FBOUUsRUFBaUZILEdBQWpGO0FBQ0UsS0FBQyxLQUFLSSxhQUFMLENBQW1CSCxTQUFTRCxDQUFULENBQW5CLENBQUYsSUFBc0NELEVBQUVFLFNBQVNELENBQVQsQ0FBRixDQUF0QztBQUREO0FBRUE7OztzQ0FDa0I7QUFDbEIsVUFBTyxLQUFLdkIsSUFBTCxDQUFVNEIsVUFBakI7QUFDQTs7O2dDQUNhNUIsSSxFQUFLO0FBQ2xCLFVBQU8sS0FBUDtBQUNBOzs7d0JBQ0s2QixRLEVBQVVDLEcsRUFBSTtBQUNuQixPQUFJQyxJQUFFNUIsVUFBVWUsTUFBVixJQUFrQixDQUFsQixJQUF1QlksTUFBSUQsUUFBSixFQUFjLEtBQUs3QixJQUExQyxJQUFrRCxLQUFLQSxJQUFMLENBQVVnQyxFQUFWLENBQWFILFFBQWIsQ0FBeEQ7QUFDQSxVQUFPRSxJQUFJQSxFQUFFRSxJQUFGLENBQU9ILEdBQVAsQ0FBSixHQUFrQixJQUF6QjtBQUNBOzs7dUJBQ0lELFEsRUFBUztBQUNiLFVBQU8sS0FBS0ssS0FBTCxDQUFXTCxRQUFYLEVBQW9CLE9BQXBCLENBQVA7QUFDQTs7O0VBN0NpQ00sUUFBUSxXQUFSLEM7O2tCQUFkcEMsSyIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1vZGVsIGV4dGVuZHMgcmVxdWlyZSgnLi4vcGFyc2VyJyl7XHJcblx0Y29uc3RydWN0b3Iod1htbCx3RG9jLG1QYXJlbnQpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5tUGFyZW50PW1QYXJlbnRcclxuXHRcdHRoaXMuY29udGVudD1bXVxyXG5cdFx0aWYobVBhcmVudClcclxuXHRcdFx0bVBhcmVudC5jb250ZW50LnB1c2godGhpcylcclxuXHRcdHRoaXMudHlwZT10aGlzLmNvbnN0cnVjdG9yLnR5cGVcclxuXHR9XHJcblx0cGFyc2UodmlzaXRGYWN0b3JpZXMpe1xyXG5cdFx0dmFyIHZpc2l0b3JzPVtdXHJcblx0XHR2YXIgcGFyYW1pemVkVmlzaXRGYWN0b3JpZXM9W107XHJcblx0XHQkLm1hcCh2aXNpdEZhY3RvcmllcywgZnVuY3Rpb24odmlzaXRGYWN0b3J5KXtcclxuXHRcdFx0dmFyIHZpc2l0b3I9dmlzaXRGYWN0b3J5KHRoaXMpXHJcblx0XHRcdGlmKHZpc2l0b3IgJiYgdmlzaXRvci52aXNpdCgpIT09ZmFsc2Upe1xyXG5cdFx0XHRcdHZpc2l0b3JzLnB1c2godmlzaXRvcilcclxuXHRcdFx0XHRwYXJhbWl6ZWRWaXNpdEZhY3Rvcmllcy5wdXNoKHZpc2l0RmFjdG9yeS53aXRoKHZpc2l0b3IpKVxyXG5cdFx0XHR9XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cclxuXHRcdGlmKHZpc2l0b3JzLmxlbmd0aD4wKXtcclxuXHRcdFx0bGV0IGZhY3Rvcnk9dGhpcy53RG9jLmZhY3RvcnkuYmluZCh0aGlzLndEb2MpXHJcblx0XHRcdHRoaXMuX2l0ZXJhdGUoXHJcblx0XHRcdFx0KHdYbWwpPT5mYWN0b3J5KHdYbWwsdGhpcy53RG9jLHRoaXMpLnBhcnNlKHBhcmFtaXplZFZpc2l0RmFjdG9yaWVzKVxyXG5cdFx0XHRcdCxwYXJhbWl6ZWRWaXNpdEZhY3RvcmllcywgdmlzaXRvcnMpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHZpc2l0b3JzXHJcblx0fVxyXG5cdF9pdGVyYXRlKGYscGFyYW1pemVkVmlzaXRGYWN0b3JpZXMpe1xyXG5cdFx0Zm9yKHZhciBpPTAsY2hpbGRyZW49dGhpcy5fZ2V0VmFsaWRDaGlsZHJlbigpLGw9Y2hpbGRyZW4/Y2hpbGRyZW4ubGVuZ3RoOjA7IGk8bDsgaSsrKVxyXG5cdFx0XHQoIXRoaXMuX3Nob3VsZElnbm9yZShjaGlsZHJlbltpXSkpICYmIGYoY2hpbGRyZW5baV0pXHJcblx0fVxyXG5cdF9nZXRWYWxpZENoaWxkcmVuKCl7XHJcblx0XHRyZXR1cm4gdGhpcy53WG1sLmNoaWxkTm9kZXNcclxuXHR9XHJcblx0X3Nob3VsZElnbm9yZSh3WG1sKXtcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH1cclxuXHRfYXR0cihzZWxlY3Rvciwga2V5KXtcclxuXHRcdHZhciBuPWFyZ3VtZW50cy5sZW5ndGg9PTEgPyAoa2V5PXNlbGVjdG9yLCB0aGlzLndYbWwpIDogdGhpcy53WG1sLiQxKHNlbGVjdG9yKVxyXG5cdFx0cmV0dXJuIG4gPyBuLmF0dHIoa2V5KSA6IG51bGxcclxuXHR9XHJcblx0X3ZhbChzZWxlY3Rvcil7XHJcblx0XHRyZXR1cm4gdGhpcy5fYXR0cihzZWxlY3Rvciwndzp2YWwnKVxyXG5cdH1cclxuXHJcbn1cclxuIl19