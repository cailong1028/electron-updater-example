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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var fields = { hyperlink: _hyperlink2.default, date: _date2.default, ref: _ref2.default, pageref: _pageref2.default, toc: _toc2.default, page: _page2.default };

var fieldBegin = function (_require) {
	(0, _inherits3.default)(fieldBegin, _require);

	function fieldBegin() {
		(0, _classCallCheck3.default)(this, fieldBegin);

		var _this = (0, _possibleConstructorReturn3.default)(this, (fieldBegin.__proto__ || (0, _getPrototypeOf2.default)(fieldBegin)).apply(this, arguments));

		_this.commands = [];
		return _this;
	}

	(0, _createClass3.default)(fieldBegin, [{
		key: 'parse',
		value: function parse() {
			this.wDoc.parseContext.field.push(this);
			(0, _get3.default)(fieldBegin.prototype.__proto__ || (0, _getPrototypeOf2.default)(fieldBegin.prototype), 'parse', this).apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGRCZWdpbi5qcyJdLCJuYW1lcyI6WyJmaWVsZHMiLCJoeXBlcmxpbmsiLCJkYXRlIiwicmVmIiwicGFnZXJlZiIsInRvYyIsInBhZ2UiLCJmaWVsZEJlZ2luIiwiYXJndW1lbnRzIiwiY29tbWFuZHMiLCJ3RG9jIiwicGFyc2VDb250ZXh0IiwiZmllbGQiLCJwdXNoIiwidCIsInNlcGVyYXRvciIsImVuZE1vZGVsIiwiZW5kVmlzaXRvcnMiLCJmIiwiZmFjdG9yaWVzIiwidmlzaXRvcnMiLCJlbmQiLCJpbnN0cnVjdCIsImpvaW4iLCJ0cmltIiwiaW5kZXgiLCJpbmRleE9mIiwidHlwZSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwiY29uc3RydWN0b3IiLCJmYWN0b3J5IiwicGFyc2UiLCJtUGFyZW50IiwiZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxTQUFPLEVBQUNDLDhCQUFELEVBQVlDLG9CQUFaLEVBQWtCQyxrQkFBbEIsRUFBdUJDLDBCQUF2QixFQUFnQ0Msa0JBQWhDLEVBQXFDQyxvQkFBckMsRUFBWDs7SUFDcUJDLFU7OztBQUNwQix1QkFBYTtBQUFBOztBQUFBLDZJQUNIQyxTQURHOztBQUVaLFFBQUtDLFFBQUwsR0FBYyxFQUFkO0FBRlk7QUFHWjs7OzswQkFFTTtBQUNOLFFBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkMsS0FBdkIsQ0FBNkJDLElBQTdCLENBQWtDLElBQWxDO0FBQ0Esd0lBQWVMLFNBQWY7QUFDQTs7OzJCQUNRTSxDLEVBQUU7QUFDVixRQUFLTCxRQUFMLENBQWNJLElBQWQsQ0FBbUJDLENBQW5CO0FBQ0E7OzsyQkFDUUMsUyxFQUFVLENBRWxCOzs7c0JBQ0dDLFEsRUFBU0MsVyxFQUFZLENBRXhCOzs7MkJBQ1FDLEMsRUFBR0MsUyxFQUFXQyxRLEVBQVM7QUFBQztBQUNoQyxRQUFLQyxHQUFMLEdBQVMsVUFBU0wsUUFBVCxFQUFtQkMsV0FBbkIsRUFBK0I7QUFDdkMsU0FBS0QsUUFBTCxHQUFjQSxRQUFkO0FBQ0EsUUFBSU0sV0FBUyxLQUFLYixRQUFMLENBQWNjLElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJDLElBQXZCLEVBQWI7QUFBQSxRQUNDQyxRQUFNSCxTQUFTSSxPQUFULENBQWlCLEdBQWpCLENBRFA7QUFBQSxRQUVDQyxPQUFLLENBQUNGLFNBQU8sQ0FBQyxDQUFSLEdBQWFILFNBQVNNLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBcUJILEtBQXJCLENBQWIsR0FBMkNILFFBQTVDLEVBQXNETyxXQUF0RCxFQUZOOztBQUlBLFNBQUtqQixLQUFMLEdBQVcsS0FBS2tCLFdBQUwsQ0FBaUJDLE9BQWpCLENBQXlCVCxRQUF6QixFQUFrQyxLQUFLWixJQUF2QyxFQUE2QyxJQUE3QyxFQUFtRGlCLElBQW5ELENBQVg7QUFDQSxRQUFHLENBQUMsS0FBS2YsS0FBVCxFQUNDLEtBQUtBLEtBQUwsR0FBVyxvQkFBVVUsUUFBVixFQUFtQixLQUFLWixJQUF4QixFQUE2QixJQUE3QixFQUFrQ2lCLElBQWxDLENBQVg7O0FBRUQsU0FBS2YsS0FBTCxDQUFXb0IsS0FBWCxDQUFpQmIsU0FBakI7QUFDQSxJQVhEO0FBWUE7OztzQ0FFa0I7QUFDbEIsVUFBTyxFQUFQO0FBQ0E7OzswQkFJY0csUSxFQUFVWixJLEVBQU11QixPLEVBQVNOLEksRUFBSztBQUM1QyxPQUFHO0FBQ0YsV0FBTyxJQUFLM0IsT0FBTzJCLElBQVAsQ0FBTCxDQUFtQkwsUUFBbkIsRUFBNkJaLElBQTdCLEVBQW1DdUIsT0FBbkMsQ0FBUDtBQUNBLElBRkQsQ0FFQyxPQUFNQyxDQUFOLEVBQVE7QUFDUixXQUFPLElBQVA7QUFDQTtBQUNEOzs7c0JBUmdCO0FBQUMsVUFBTyxZQUFQO0FBQW9COzs7RUF0Q0NDLFFBQVEsVUFBUixDOztrQkFBbkI1QixVIiwiZmlsZSI6ImZpZWxkQmVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHlwZXJsaW5rIGZyb20gJy4vZmllbGQvaHlwZXJsaW5rJ1xyXG5pbXBvcnQgZGF0ZSBmcm9tICcuL2ZpZWxkL2RhdGUnXHJcbmltcG9ydCByZWYgZnJvbSAnLi9maWVsZC9yZWYnXHJcbmltcG9ydCBwYWdlcmVmIGZyb20gJy4vZmllbGQvcGFnZXJlZidcclxuaW1wb3J0IHRvYyBmcm9tICcuL2ZpZWxkL3RvYydcclxuaW1wb3J0IHBhZ2UgZnJvbSAnLi9maWVsZC9wYWdlJ1xyXG5pbXBvcnQgYmFzaWMgZnJvbSAnLi9maWVsZC9maWVsZCdcclxuXHJcbnZhciBmaWVsZHM9e2h5cGVybGluaywgZGF0ZSwgcmVmLCBwYWdlcmVmLCB0b2MsIHBhZ2V9XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZpZWxkQmVnaW4gZXh0ZW5kcyByZXF1aXJlKCcuLi9tb2RlbCcpe1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLmNvbW1hbmRzPVtdXHJcblx0fVxyXG5cclxuXHRwYXJzZSgpe1xyXG5cdFx0dGhpcy53RG9jLnBhcnNlQ29udGV4dC5maWVsZC5wdXNoKHRoaXMpXHJcblx0XHRzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpXHJcblx0fVxyXG5cdGluc3RydWN0KHQpe1xyXG5cdFx0dGhpcy5jb21tYW5kcy5wdXNoKHQpXHJcblx0fVxyXG5cdHNlcGVyYXRlKHNlcGVyYXRvcil7XHJcblxyXG5cdH1cclxuXHRlbmQoZW5kTW9kZWwsZW5kVmlzaXRvcnMpe1xyXG5cclxuXHR9XHJcblx0X2l0ZXJhdGUoZiwgZmFjdG9yaWVzLCB2aXNpdG9ycyl7Ly9kZWxheSB0byBmaW5kIHJlYWwgbW9kZWxcclxuXHRcdHRoaXMuZW5kPWZ1bmN0aW9uKGVuZE1vZGVsLCBlbmRWaXNpdG9ycyl7XHJcblx0XHRcdHRoaXMuZW5kTW9kZWw9ZW5kTW9kZWxcclxuXHRcdFx0bGV0IGluc3RydWN0PXRoaXMuY29tbWFuZHMuam9pbignJykudHJpbSgpLFxyXG5cdFx0XHRcdGluZGV4PWluc3RydWN0LmluZGV4T2YoJyAnKSxcclxuXHRcdFx0XHR0eXBlPShpbmRleCE9LTEgPyAgaW5zdHJ1Y3Quc3Vic3RyaW5nKDAsaW5kZXgpIDogaW5zdHJ1Y3QpLnRvTG93ZXJDYXNlKClcclxuXHJcblx0XHRcdHRoaXMuZmllbGQ9dGhpcy5jb25zdHJ1Y3Rvci5mYWN0b3J5KGluc3RydWN0LHRoaXMud0RvYywgdGhpcywgdHlwZSlcclxuXHRcdFx0aWYoIXRoaXMuZmllbGQpXHJcblx0XHRcdFx0dGhpcy5maWVsZD1uZXcgYmFzaWMoaW5zdHJ1Y3QsdGhpcy53RG9jLHRoaXMsdHlwZSlcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuZmllbGQucGFyc2UoZmFjdG9yaWVzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRfZ2V0VmFsaWRDaGlsZHJlbigpe1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2ZpZWxkQmVnaW4nfVxyXG5cclxuXHRzdGF0aWMgZmFjdG9yeShpbnN0cnVjdCwgd0RvYywgbVBhcmVudCwgdHlwZSl7XHJcblx0XHR0cnl7XHJcblx0XHRcdHJldHVybiBuZXcgKGZpZWxkc1t0eXBlXSkoaW5zdHJ1Y3QsIHdEb2MsIG1QYXJlbnQpXHJcblx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdHJldHVybiBudWxsXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==