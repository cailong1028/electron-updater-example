'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _hyperlink = require('./field/hyperlink');

var _hyperlink2 = _interopRequireDefault(_hyperlink);

var _date = require('./field/date');

var _date2 = _interopRequireDefault(_date);

var _ref = require('./field/ref');

var _ref2 = _interopRequireDefault(_ref);

var _pageref = require('./field/pageref');

var _pageref2 = _interopRequireDefault(_pageref);

var _toc = require('./field/toc');

var _toc2 = _interopRequireDefault(_toc);

var _page = require('./field/page');

var _page2 = _interopRequireDefault(_page);

var _field = require('./field/field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fields = { hyperlink: _hyperlink2.default, date: _date2.default, ref: _ref2.default, pageref: _pageref2.default, toc: _toc2.default, page: _page2.default };

var fieldBegin = function (_require) {
	_inherits(fieldBegin, _require);

	function fieldBegin() {
		_classCallCheck(this, fieldBegin);

		var _this = _possibleConstructorReturn(this, (fieldBegin.__proto__ || Object.getPrototypeOf(fieldBegin)).apply(this, arguments));

		_this.commands = [];
		return _this;
	}

	_createClass(fieldBegin, [{
		key: 'parse',
		value: function parse() {
			this.wDoc.parseContext.field.push(this);
			_get(fieldBegin.prototype.__proto__ || Object.getPrototypeOf(fieldBegin.prototype), 'parse', this).apply(this, arguments);
		}
	}, {
		key: 'instruct',
		value: function instruct(t) {
			this.commands.push(t);
		}
	}, {
		key: 'seperate',
		value: function seperate(seperator) {}
	}, {
		key: 'end',
		value: function end(endModel, endVisitors) {}
	}, {
		key: '_iterate',
		value: function _iterate(f, factories, visitors) {
			//delay to find real model
			this.end = function (endModel, endVisitors) {
				this.endModel = endModel;
				var instruct = this.commands.join('').trim(),
				    index = instruct.indexOf(' '),
				    type = (index != -1 ? instruct.substring(0, index) : instruct).toLowerCase();

				this.field = this.constructor.factory(instruct, this.wDoc, this, type);
				if (!this.field) this.field = new _field2.default(instruct, this.wDoc, this, type);

				this.field.parse(factories);
			};
		}
	}, {
		key: '_getValidChildren',
		value: function _getValidChildren() {
			return [];
		}
	}], [{
		key: 'factory',
		value: function factory(instruct, wDoc, mParent, type) {
			try {
				return new fields[type](instruct, wDoc, mParent);
			} catch (e) {
				return null;
			}
		}
	}, {
		key: 'type',
		get: function get() {
			return 'fieldBegin';
		}
	}]);

	return fieldBegin;
}(require('../model'));

exports.default = fieldBegin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGRCZWdpbi5qcyJdLCJuYW1lcyI6WyJmaWVsZHMiLCJoeXBlcmxpbmsiLCJkYXRlIiwicmVmIiwicGFnZXJlZiIsInRvYyIsInBhZ2UiLCJmaWVsZEJlZ2luIiwiYXJndW1lbnRzIiwiY29tbWFuZHMiLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwiZmllbGQiLCJwdXNoIiwidCIsInNlcGVyYXRvciIsImVuZE1vZGVsIiwiZW5kVmlzaXRvcnMiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJlbmQiLCJpbnN0cnVjdCIsImpvaW4iLCJ0cmltIiwiaW5kZXgiLCJpbmRleE9mIiwidHlwZSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwiY29uc3RydWN0b3IiLCJmYWN0b3J5IiwicGFyc2UiLCJtUGFyZW50IiwiZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBTyxFQUFDQyw4QkFBRCxFQUFZQyxvQkFBWixFQUFrQkMsa0JBQWxCLEVBQXVCQywwQkFBdkIsRUFBZ0NDLGtCQUFoQyxFQUFxQ0Msb0JBQXJDLEVBQVg7O0lBQ3FCQyxVOzs7QUFDcEIsdUJBQWE7QUFBQTs7QUFBQSx1SEFDSEMsU0FERzs7QUFFWixRQUFLQyxRQUFMLEdBQWMsRUFBZDtBQUZZO0FBR1o7Ozs7MEJBRU07QUFDTixRQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJDLEtBQXZCLENBQTZCQyxJQUE3QixDQUFrQyxJQUFsQztBQUNBLGtIQUFlTCxTQUFmO0FBQ0E7OzsyQkFDUU0sQyxFQUFFO0FBQ1YsUUFBS0wsUUFBTCxDQUFjSSxJQUFkLENBQW1CQyxDQUFuQjtBQUNBOzs7MkJBQ1FDLFMsRUFBVSxDQUVsQjs7O3NCQUNHQyxRLEVBQVNDLFcsRUFBWSxDQUV4Qjs7OzJCQUNRQyxDLEVBQUdDLFMsRUFBV0MsUSxFQUFTO0FBQUM7QUFDaEMsUUFBS0MsR0FBTCxHQUFTLFVBQVNMLFFBQVQsRUFBbUJDLFdBQW5CLEVBQStCO0FBQ3ZDLFNBQUtELFFBQUwsR0FBY0EsUUFBZDtBQUNBLFFBQUlNLFdBQVMsS0FBS2IsUUFBTCxDQUFjYyxJQUFkLENBQW1CLEVBQW5CLEVBQXVCQyxJQUF2QixFQUFiO0FBQUEsUUFDQ0MsUUFBTUgsU0FBU0ksT0FBVCxDQUFpQixHQUFqQixDQURQO0FBQUEsUUFFQ0MsT0FBSyxDQUFDRixTQUFPLENBQUMsQ0FBUixHQUFhSCxTQUFTTSxTQUFULENBQW1CLENBQW5CLEVBQXFCSCxLQUFyQixDQUFiLEdBQTJDSCxRQUE1QyxFQUFzRE8sV0FBdEQsRUFGTjs7QUFJQSxTQUFLakIsS0FBTCxHQUFXLEtBQUtrQixXQUFMLENBQWlCQyxPQUFqQixDQUF5QlQsUUFBekIsRUFBa0MsS0FBS1osSUFBdkMsRUFBNkMsSUFBN0MsRUFBbURpQixJQUFuRCxDQUFYO0FBQ0EsUUFBRyxDQUFDLEtBQUtmLEtBQVQsRUFDQyxLQUFLQSxLQUFMLEdBQVcsb0JBQVVVLFFBQVYsRUFBbUIsS0FBS1osSUFBeEIsRUFBNkIsSUFBN0IsRUFBa0NpQixJQUFsQyxDQUFYOztBQUVELFNBQUtmLEtBQUwsQ0FBV29CLEtBQVgsQ0FBaUJiLFNBQWpCO0FBQ0EsSUFYRDtBQVlBOzs7c0NBRWtCO0FBQ2xCLFVBQU8sRUFBUDtBQUNBOzs7MEJBSWNHLFEsRUFBVVosSSxFQUFNdUIsTyxFQUFTTixJLEVBQUs7QUFDNUMsT0FBRztBQUNGLFdBQU8sSUFBSzNCLE9BQU8yQixJQUFQLENBQUwsQ0FBbUJMLFFBQW5CLEVBQTZCWixJQUE3QixFQUFtQ3VCLE9BQW5DLENBQVA7QUFDQSxJQUZELENBRUMsT0FBTUMsQ0FBTixFQUFRO0FBQ1IsV0FBTyxJQUFQO0FBQ0E7QUFDRDs7O3NCQVJnQjtBQUFDLFVBQU8sWUFBUDtBQUFvQjs7OztFQXRDQ0MsUUFBUSxVQUFSLEM7O2tCQUFuQjVCLFUiLCJmaWxlIjoiZmllbGRCZWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoeXBlcmxpbmsgZnJvbSAnLi9maWVsZC9oeXBlcmxpbmsnXHJcbmltcG9ydCBkYXRlIGZyb20gJy4vZmllbGQvZGF0ZSdcclxuaW1wb3J0IHJlZiBmcm9tICcuL2ZpZWxkL3JlZidcclxuaW1wb3J0IHBhZ2VyZWYgZnJvbSAnLi9maWVsZC9wYWdlcmVmJ1xyXG5pbXBvcnQgdG9jIGZyb20gJy4vZmllbGQvdG9jJ1xyXG5pbXBvcnQgcGFnZSBmcm9tICcuL2ZpZWxkL3BhZ2UnXHJcbmltcG9ydCBiYXNpYyBmcm9tICcuL2ZpZWxkL2ZpZWxkJ1xyXG5cclxudmFyIGZpZWxkcz17aHlwZXJsaW5rLCBkYXRlLCByZWYsIHBhZ2VyZWYsIHRvYywgcGFnZX1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmllbGRCZWdpbiBleHRlbmRzIHJlcXVpcmUoJy4uL21vZGVsJyl7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMuY29tbWFuZHM9W11cclxuXHR9XHJcblxyXG5cdHBhcnNlKCl7XHJcblx0XHR0aGlzLndEb2MucGFyc2VDb250ZXh0LmZpZWxkLnB1c2godGhpcylcclxuXHRcdHN1cGVyLnBhcnNlKC4uLmFyZ3VtZW50cylcclxuXHR9XHJcblx0aW5zdHJ1Y3QodCl7XHJcblx0XHR0aGlzLmNvbW1hbmRzLnB1c2godClcclxuXHR9XHJcblx0c2VwZXJhdGUoc2VwZXJhdG9yKXtcclxuXHJcblx0fVxyXG5cdGVuZChlbmRNb2RlbCxlbmRWaXNpdG9ycyl7XHJcblxyXG5cdH1cclxuXHRfaXRlcmF0ZShmLCBmYWN0b3JpZXMsIHZpc2l0b3JzKXsvL2RlbGF5IHRvIGZpbmQgcmVhbCBtb2RlbFxyXG5cdFx0dGhpcy5lbmQ9ZnVuY3Rpb24oZW5kTW9kZWwsIGVuZFZpc2l0b3JzKXtcclxuXHRcdFx0dGhpcy5lbmRNb2RlbD1lbmRNb2RlbFxyXG5cdFx0XHRsZXQgaW5zdHJ1Y3Q9dGhpcy5jb21tYW5kcy5qb2luKCcnKS50cmltKCksXHJcblx0XHRcdFx0aW5kZXg9aW5zdHJ1Y3QuaW5kZXhPZignICcpLFxyXG5cdFx0XHRcdHR5cGU9KGluZGV4IT0tMSA/ICBpbnN0cnVjdC5zdWJzdHJpbmcoMCxpbmRleCkgOiBpbnN0cnVjdCkudG9Mb3dlckNhc2UoKVxyXG5cclxuXHRcdFx0dGhpcy5maWVsZD10aGlzLmNvbnN0cnVjdG9yLmZhY3RvcnkoaW5zdHJ1Y3QsdGhpcy53RG9jLCB0aGlzLCB0eXBlKVxyXG5cdFx0XHRpZighdGhpcy5maWVsZClcclxuXHRcdFx0XHR0aGlzLmZpZWxkPW5ldyBiYXNpYyhpbnN0cnVjdCx0aGlzLndEb2MsdGhpcyx0eXBlKVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5maWVsZC5wYXJzZShmYWN0b3JpZXMpXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdF9nZXRWYWxpZENoaWxkcmVuKCl7XHJcblx0XHRyZXR1cm4gW11cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgdHlwZSgpe3JldHVybiAnZmllbGRCZWdpbid9XHJcblxyXG5cdHN0YXRpYyBmYWN0b3J5KGluc3RydWN0LCB3RG9jLCBtUGFyZW50LCB0eXBlKXtcclxuXHRcdHRyeXtcclxuXHRcdFx0cmV0dXJuIG5ldyAoZmllbGRzW3R5cGVdKShpbnN0cnVjdCwgd0RvYywgbVBhcmVudClcclxuXHRcdH1jYXRjaChlKXtcclxuXHRcdFx0cmV0dXJuIG51bGxcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19