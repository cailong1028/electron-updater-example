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

var Field = function (_require) {
	(0, _inherits3.default)(Field, _require);

	function Field(instruct, doc, parent, type) {
		(0, _classCallCheck3.default)(this, Field);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Field.__proto__ || (0, _getPrototypeOf2.default)(Field)).apply(this, arguments));

		_this.command = new _this.constructor.FieldCode(instruct);
		_this.command.parse();
		if (type) _this.type = 'field.' + type;
		return _this;
	}

	(0, _createClass3.default)(Field, [{
		key: 'getCommand',
		value: function getCommand() {
			return this.command;
		}
	}], [{
		key: 'type',
		get: function get() {
			return 'field';
		}
	}, {
		key: 'Command',
		get: function get() {
			return Command;
		}
	}, {
		key: 'Switch',
		get: function get() {
			return Switch;
		}
	}, {
		key: 'FieldCode',
		get: function get() {
			return FieldCode;
		}
	}]);
	return Field;
}(require('../../model'));

exports.default = Field;

var Command = function () {
	function Command(instruct) {
		(0, _classCallCheck3.default)(this, Command);

		this.data = instruct;
	}

	(0, _createClass3.default)(Command, [{
		key: 'nextUntil',
		value: function nextUntil(seperators) {
			if (this.data.length == 0) return "";
			var i = -1,
			    len = this.data.length;
			//find any one of seperator chars
			while (++i < len && seperators.indexOf(this.data.charAt(i)) == -1) {}

			var node = this.data.substring(0, i).trim();

			//ignore all seperator chars
			if (i < len) while (++i < len && seperators.indexOf(this.data.charAt(i)) != -1) {}

			//left this.data
			this.data = this.data.substring(i).trim();
			return node;
		}
	}, {
		key: 'nextNode',
		value: function nextNode() {
			return this.nextUntil(" \\");
		}
	}, {
		key: 'asInt',
		value: function asInt(s, defaultValue) {
			try {
				return parseInt(s);
			} catch (error) {
				return defaultValue || 0;
			}
		}
	}]);
	return Command;
}();

var Switch = function (_Command) {
	(0, _inherits3.default)(Switch, _Command);

	function Switch(cmd) {
		(0, _classCallCheck3.default)(this, Switch);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).apply(this, arguments));

		_this2.withQuote = false;
		_this2.type = cmd.charAt(0).toLowerCase;
		if (cmd.length > 1 && _this2.type != '*' && cmd.charAt(1) != ' ') {
			if (type.match(/\w/)) {
				//word case: \s1=\s 1
				try {
					parseInt(cmd.substring(1).trim());
					_this2.data = cmd.substring(1).trim();
					return (0, _possibleConstructorReturn3.default)(_this2);
				} catch (e) {}
			}
			_this2.type = '!';
		} else {
			if (_this2.data.length > 1) _this2.data = _this2.data.substring(1).trim();else _this2.data = "";
		}
		_this2.__removeQuote();
		return _this2;
	}

	(0, _createClass3.default)(Switch, [{
		key: '__removeQuote',
		value: function __removeQuote() {
			if (this.data.length == 0) return;
			var a = this.data.charAt(0);
			if (a == '"' || a == '\'') {
				this.data = this.data.substring(1);
				this.withQuote = true;
			}
			if (this.data.length == 0) return;
			a = this.data.charAt(this.data.length - 1);
			if (a == '"' || a == '\'') {
				this.data = this.data.substring(0, this.data.length - 1);
				this.withQuote = true;
			}
		}
	}, {
		key: '_split2Int',
		value: function _split2Int() {
			if (this.data == null || this.data.length == 0) return null;
			var a = data.split("-");
			if (a.length == 0) return null;
			var b = [];
			for (var i = 0, len = a.length; i < len; i++) {
				try {
					b[i] = parseInt(a[i]);
				} catch (e) {
					b[i] = 0;
				}
			}
			return b;
		}
	}]);
	return Switch;
}(Command);

var FieldCode = function (_Command2) {
	(0, _inherits3.default)(FieldCode, _Command2);

	function FieldCode(instruct) {
		(0, _classCallCheck3.default)(this, FieldCode);

		var _this3 = (0, _possibleConstructorReturn3.default)(this, (FieldCode.__proto__ || (0, _getPrototypeOf2.default)(FieldCode)).apply(this, arguments));

		_this3.mergeFormat = _this3.parseKeyWord("MERGEFORMAT");
		_this3.type = _this3.nextNode();
		return _this3;
	}

	(0, _createClass3.default)(FieldCode, [{
		key: 'parseKeyWord',
		value: function parseKeyWord(key) {
			if (this.data.length == 0) return false;
			var len = this.data.length;
			this.data = this.data.replace(new RegExp("\\*\\s*" + key + "\\s*", "ig"), "");
			return this.data.length != len;
		}
	}, {
		key: 'nextSwitch',
		value: function nextSwitch() {
			var option = this.nextUntil("\\");
			if (option == null || option.length == 0) return null;

			return new Switch(option);
		}
	}, {
		key: 'parse',
		value: function parse() {}
	}]);
	return FieldCode;
}(Command);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvZmllbGQvZmllbGQuanMiXSwibmFtZXMiOlsiRmllbGQiLCJpbnN0cnVjdCIsImRvYyIsInBhcmVudCIsInR5cGUiLCJhcmd1bWVudHMiLCJjb21tYW5kIiwiY29uc3RydWN0b3IiLCJGaWVsZENvZGUiLCJwYXJzZSIsIkNvbW1hbmQiLCJTd2l0Y2giLCJyZXF1aXJlIiwiZGF0YSIsInNlcGVyYXRvcnMiLCJsZW5ndGgiLCJpIiwibGVuIiwiaW5kZXhPZiIsImNoYXJBdCIsIm5vZGUiLCJzdWJzdHJpbmciLCJ0cmltIiwibmV4dFVudGlsIiwicyIsImRlZmF1bHRWYWx1ZSIsInBhcnNlSW50IiwiZXJyb3IiLCJjbWQiLCJ3aXRoUXVvdGUiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiZSIsIl9fcmVtb3ZlUXVvdGUiLCJhIiwic3BsaXQiLCJiIiwibWVyZ2VGb3JtYXQiLCJwYXJzZUtleVdvcmQiLCJuZXh0Tm9kZSIsImtleSIsInJlcGxhY2UiLCJSZWdFeHAiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEs7OztBQUNwQixnQkFBWUMsUUFBWixFQUFxQkMsR0FBckIsRUFBMEJDLE1BQTFCLEVBQWlDQyxJQUFqQyxFQUFzQztBQUFBOztBQUFBLG1JQUM1QkMsU0FENEI7O0FBRXJDLFFBQUtDLE9BQUwsR0FBYSxJQUFJLE1BQUtDLFdBQUwsQ0FBaUJDLFNBQXJCLENBQStCUCxRQUEvQixDQUFiO0FBQ0EsUUFBS0ssT0FBTCxDQUFhRyxLQUFiO0FBQ0EsTUFBR0wsSUFBSCxFQUNDLE1BQUtBLElBQUwsY0FBbUJBLElBQW5CO0FBTG9DO0FBTXJDOzs7OytCQUVXO0FBQ1gsVUFBTyxLQUFLRSxPQUFaO0FBQ0E7OztzQkFFZ0I7QUFBQyxVQUFPLE9BQVA7QUFBZTs7O3NCQUViO0FBQUMsVUFBT0ksT0FBUDtBQUFlOzs7c0JBRWpCO0FBQUMs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QUFFcEIsU0FBS2dDLFdBQUwsR0FBaUIsT0FBS0MsWUFBTCxDQUFrQixhQUFsQixDQUFqQjtBQUNBLFNBQUtsQyxJQUFMLEdBQVUsT0FBS21DLFFBQUwsRUFBVjtBQUhvQjtBQUlwQjs7OzsrQkFDWUMsRyxFQUFJO0FBQ2hCLE9BQUcsS0FBSzNCLElBQUwsQ0FBVUUsTUFBVixJQUFrQixDQUFyQixFQUNDLE9BQU8sS0FBUDtBQUNELE9BQUlFLE1BQUksS0FBS0osSUFBTCxDQUFVRSxNQUFsQjtBQUNBLFFBQUtGLElBQUwsR0FBVSxLQUFLQSxJQUFMLENBQVU0QixPQUFWLENBQWtCLElBQUlDLE1BQUosQ0FBVyxZQUFVRixHQUFWLEdBQWMsTUFBekIsRUFBaUMsSUFBakMsQ0FBbEIsRUFBeUQsRUFBekQsQ0FBVjtBQUNBLFVBQU8sS0FBSzNCLElBQUwsQ0FBVUUsTUFBVixJQUFrQkUsR0FBekI7QUFDQTs7OytCQUNXO0FBQ1gsT0FBSTBCLFNBQU8sS0FBS3BCLFNBQUwsQ0FBZSxJQUFmLENBQVg7QUFDQSxPQUFHb0IsVUFBUSxJQUFSLElBQWdCQSxPQUFPNUIsTUFBUCxJQUFlLENBQWxDLEVBQ0MsT0FBTyxJQUFQOztBQUVELFVBQU8sSUFBSUosTUFBSixDQUFXZ0MsTUFBWCxDQUFQO0FBQ0E7OzswQkFDTSxDQUFFOzs7RUFwQmNqQyxPIiwiZmlsZSI6ImZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgZXh0ZW5kcyByZXF1aXJlKCcuLi8uLi9tb2RlbCcpe1xyXG5cdGNvbnN0cnVjdG9yKGluc3RydWN0LGRvYywgcGFyZW50LHR5cGUpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5jb21tYW5kPW5ldyB0aGlzLmNvbnN0cnVjdG9yLkZpZWxkQ29kZShpbnN0cnVjdClcclxuXHRcdHRoaXMuY29tbWFuZC5wYXJzZSgpXHJcblx0XHRpZih0eXBlKVxyXG5cdFx0XHR0aGlzLnR5cGU9YGZpZWxkLiR7dHlwZX1gXHJcblx0fVxyXG5cclxuXHRnZXRDb21tYW5kKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ2ZpZWxkJ31cclxuXHJcblx0c3RhdGljIGdldCBDb21tYW5kKCl7cmV0dXJuIENvbW1hbmR9XHJcblxyXG5cdHN0YXRpYyBnZXQgU3dpdGNoKCl7cmV0dXJuIFN3aXRjaH1cclxuXHJcblx0c3RhdGljIGdldCBGaWVsZENvZGUoKXtyZXR1cm4gRmllbGRDb2RlfVxyXG59XHJcblxyXG5jbGFzcyBDb21tYW5ke1xyXG5cdGNvbnN0cnVjdG9yKGluc3RydWN0KXtcclxuXHRcdHRoaXMuZGF0YT1pbnN0cnVjdFxyXG5cdH1cclxuXHJcblx0bmV4dFVudGlsKHNlcGVyYXRvcnMpe1xyXG5cdFx0aWYodGhpcy5kYXRhLmxlbmd0aD09MClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHR2YXIgaT0tMSwgbGVuPXRoaXMuZGF0YS5sZW5ndGg7XHJcblx0XHQvL2ZpbmQgYW55IG9uZSBvZiBzZXBlcmF0b3IgY2hhcnNcclxuXHRcdHdoaWxlKCgrK2kpPGxlbiAmJiBzZXBlcmF0b3JzLmluZGV4T2YodGhpcy5kYXRhLmNoYXJBdChpKSk9PS0xKTtcclxuXHJcblx0XHR2YXIgbm9kZT10aGlzLmRhdGEuc3Vic3RyaW5nKDAsIGkpLnRyaW0oKTtcclxuXHJcblx0XHQvL2lnbm9yZSBhbGwgc2VwZXJhdG9yIGNoYXJzXHJcblx0XHRpZihpPGxlbilcclxuXHRcdFx0d2hpbGUoKytpPGxlbiAmJiBzZXBlcmF0b3JzLmluZGV4T2YodGhpcy5kYXRhLmNoYXJBdChpKSkhPS0xKTtcclxuXHJcblx0XHQvL2xlZnQgdGhpcy5kYXRhXHJcblx0XHR0aGlzLmRhdGE9dGhpcy5kYXRhLnN1YnN0cmluZyhpKS50cmltKCk7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblx0bmV4dE5vZGUoKXtcclxuXHRcdHJldHVybiB0aGlzLm5leHRVbnRpbChcIiBcXFxcXCIpXHJcblx0fVxyXG5cdGFzSW50KHMsIGRlZmF1bHRWYWx1ZSl7XHJcblx0XHR0cnl7XHJcblx0XHRcdHJldHVybiBwYXJzZUludChzKVxyXG5cdFx0fWNhdGNoKGVycm9yKXtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZXx8MFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBDb21tYW5ke1xyXG5cdGNvbnN0cnVjdG9yKGNtZCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLndpdGhRdW90ZT1mYWxzZVxyXG5cdFx0dGhpcy50eXBlPWNtZC5jaGFyQXQoMCkudG9Mb3dlckNhc2VcclxuXHRcdGlmKGNtZC5sZW5ndGg+MSAmJiB0aGlzLnR5cGUhPScqJyAmJiBjbWQuY2hhckF0KDEpIT0nICcpe1xyXG5cdFx0XHRpZih0eXBlLm1hdGNoKC9cXHcvKSl7Ly93b3JkIGNhc2U6IFxcczE9XFxzIDFcclxuXHRcdFx0XHQgdHJ5IHtcclxuXHRcdFx0XHRcdHBhcnNlSW50KGNtZC5zdWJzdHJpbmcoMSkudHJpbSgpKTtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YT1jbWQuc3Vic3RyaW5nKDEpLnRyaW0oKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnR5cGU9JyEnO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmKHRoaXMuZGF0YS5sZW5ndGg+MSlcclxuXHRcdFx0XHR0aGlzLmRhdGE9dGhpcy5kYXRhLnN1YnN0cmluZygxKS50cmltKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmRhdGE9XCJcIjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX19yZW1vdmVRdW90ZSgpO1xyXG5cdH1cclxuXHRfX3JlbW92ZVF1b3RlKCl7XHJcblx0XHRpZih0aGlzLmRhdGEubGVuZ3RoPT0wKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR2YXIgYT10aGlzLmRhdGEuY2hhckF0KDApO1xyXG5cdFx0aWYoYT09J1wiJyB8fCBhPT0nXFwnJyl7XHJcblx0XHRcdHRoaXMuZGF0YT10aGlzLmRhdGEuc3Vic3RyaW5nKDEpO1xyXG5cdFx0XHR0aGlzLndpdGhRdW90ZT10cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5kYXRhLmxlbmd0aD09MClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0YT10aGlzLmRhdGEuY2hhckF0KHRoaXMuZGF0YS5sZW5ndGgtMSk7XHJcblx0XHRpZihhPT0nXCInIHx8IGE9PSdcXCcnKXtcclxuXHRcdFx0dGhpcy5kYXRhPXRoaXMuZGF0YS5zdWJzdHJpbmcoMCx0aGlzLmRhdGEubGVuZ3RoLTEpO1xyXG5cdFx0XHR0aGlzLndpdGhRdW90ZT10cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfc3BsaXQySW50KCl7XHJcblx0XHRpZih0aGlzLmRhdGE9PW51bGwgfHwgdGhpcy5kYXRhLmxlbmd0aD09MClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR2YXIgYT1kYXRhLnNwbGl0KFwiLVwiKTtcclxuXHRcdGlmKGEubGVuZ3RoPT0wKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdHZhciBiPVtdXHJcblx0XHRmb3IodmFyIGk9MCwgbGVuPWEubGVuZ3RoOyBpPGxlbjsgaSsrKXtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRiW2ldPXBhcnNlSW50KGFbaV0pO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0YltpXT0wO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYjtcclxuXHR9XHJcbn1cclxuY2xhc3MgRmllbGRDb2RlIGV4dGVuZHMgQ29tbWFuZHtcclxuXHRjb25zdHJ1Y3RvcihpbnN0cnVjdCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLm1lcmdlRm9ybWF0PXRoaXMucGFyc2VLZXlXb3JkKFwiTUVSR0VGT1JNQVRcIilcclxuXHRcdHRoaXMudHlwZT10aGlzLm5leHROb2RlKClcclxuXHR9XHJcblx0cGFyc2VLZXlXb3JkKGtleSl7XHJcblx0XHRpZih0aGlzLmRhdGEubGVuZ3RoPT0wKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR2YXIgbGVuPXRoaXMuZGF0YS5sZW5ndGg7XHJcblx0XHR0aGlzLmRhdGE9dGhpcy5kYXRhLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFwqXFxcXHMqXCIra2V5K1wiXFxcXHMqXCIsIFwiaWdcIiksXCJcIik7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCE9bGVuO1xyXG5cdH1cclxuXHRuZXh0U3dpdGNoKCl7XHJcblx0XHR2YXIgb3B0aW9uPXRoaXMubmV4dFVudGlsKFwiXFxcXFwiKTtcclxuXHRcdGlmKG9wdGlvbj09bnVsbCB8fCBvcHRpb24ubGVuZ3RoPT0wKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFN3aXRjaChvcHRpb24pO1xyXG5cdH1cclxuXHRwYXJzZSgpe31cclxufVxyXG4iXX0=