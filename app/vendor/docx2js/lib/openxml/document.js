'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _part = require('./part');

var _part2 = _interopRequireDefault(_part);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
	_inherits(Document, _require);

	function Document() {
		_classCallCheck(this, Document);

		var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));

		var rels = _this.rels = {};
		$.each(new _part2.default("", _this).rels, function (id, rel) {
			rels[rel.type] = rel.target;
		});
		_this.partMain = new _part2.default(_this.rels['officeDocument'], _this);
		return _this;
	}

	_createClass(Document, [{
		key: 'getPart',
		value: function getPart(name) {
			var part = this.parts[name] || (name = this.rels[name]) && this.parts[name];
			if (!part) return null;

			if (_part2.default.is(part)) return part;

			return this.parts[name] = new _part2.default(name, this);
		}
	}, {
		key: 'parse',
		value: function parse() {
			_get(Document.prototype.__proto__ || Object.getPrototypeOf(Document.prototype), 'parse', this).apply(this, arguments);
			this.getPart('core-properties').documentElement.$('keywords,description,title').forEach(function (x) {
				var v = x.textContent.trim();
				v.length && (this[x.localName] = v);
			}, this.props);
			typeof this.props.keywords != 'undefined' && (this.props.keywords = this.props.keywords.split(','));

			this.getPart('extended-properties').documentElement.$('Template').forEach(function (x) {
				var v = x.textContent.trim();
				v.length && (this[x.localName] = v);
			}, this.props);
		}
	}, {
		key: 'vender',
		get: function get() {
			"Microsoft";
		}
	}, {
		key: 'product',
		get: function get() {
			return 'Office 2010';
		}
	}], [{
		key: 'createVisitorFactory',


		/**
   *  To create a factory function that to create a visitor specific to word model types
   *  factory: it could be following type
   *  	* function(wordModel, targetParent) :
   *  			wordModel: identified word model
   *  			targetParent: the result created by visitor of srcModel's parent model
   *  	* object: {'word model type name': Visitor Class}
   *  	* undefined: a default factory just to info type of word model in console
   *  opt: a global option to all visitor instances created by the factory, refered by visitor.options
   */
		value: function createVisitorFactory(_factory, opt) {
			var Any = this.Visitor;
			switch (typeof _factory === 'undefined' ? 'undefined' : _typeof(_factory)) {
				case 'function':
					break;
				case 'object':
					var rawMap = _factory;
					_factory = function factory(srcModel, targetParent) {
						var map = _factory.map;
						if (map['*']) Any = map['*'];
						var Visitor = map[srcModel.type],
						    visitor,
						    t;
						if (!srcModel.type) ;else if (Visitor) visitor = new Visitor(srcModel, targetParent);else if ((t = srcModel.type.split('.')).length > 1) {
							do {
								t.pop();
								if (Visitor = map[t.join('.')]) {
									visitor = new Visitor(srcModel, targetParent);
									break;
								}
							} while (t.length > 1);
						}

						if (!visitor) visitor = new Any(srcModel, targetParent);

						if (!visitor._shouldIgnore()) return visitor;
					};

					_factory.map = rawMap;
					break;
				case 'undefined':
					_factory = function _factory(srcModel, targetParent) {
						return new Any(srcModel, targetParent);
					};
					break;
				default:
					throw 'unsupported factory';
			}

			if (opt) {
				var _raw = _factory;
				_factory = function _factory() {
					var converter = _raw.apply(null, arguments);
					converter && (converter.options = opt);
					return converter;
				};
				if (typeof _raw.map != 'undefined') _factory.map = _raw.map;
			}

			_factory.with = function (targetParent) {
				function paramizedFactory(srcModel) {
					return _factory(srcModel, targetParent);
				}
				paramizedFactory.with = _factory.with;
				return paramizedFactory;
			};

			return _factory;
		}
	}, {
		key: 'Visitor',
		get: function get() {
			return Visitor;
		}
	}]);

	return Document;
}(require('../document'));

/**
 *  A visitor to visit a type of word model
 *  srcModel: identified word model
 *  targetParent: the result created by visitor of srcModel's parent model
 */


exports.default = Document;

var Visitor = function () {
	function Visitor(srcModel, targetParent) {
		_classCallCheck(this, Visitor);

		this.srcModel = srcModel;
		this.parent = targetParent;
	}

	_createClass(Visitor, [{
		key: 'visit',
		value: function visit() {
			console.info(this.srcModel.type);
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore() {
			return false;
		}
	}]);

	return Visitor;
}();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVueG1sL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiYXJndW1lbnRzIiwicmVscyIsIiQiLCJlYWNoIiwiaWQiLCJyZWwiLCJ0eXBlIiwidGFyZ2V0IiwicGFydE1haW4iLCJuYW1lIiwicGFydCIsInBhcnRzIiwiaXMiLCJnZXRQYXJ0IiwiZG9jdW1lbnRFbGVtZW50IiwiZm9yRWFjaCIsIngiLCJ2IiwidGV4dENvbnRlbnQiLCJ0cmltIiwibGVuZ3RoIiwibG9jYWxOYW1lIiwicHJvcHMiLCJrZXl3b3JkcyIsInNwbGl0IiwiZmFjdG9yeSIsIm9wdCIsIkFueSIsIlZpc2l0b3IiLCJyYXdNYXAiLCJzcmNNb2RlbCIsInRhcmdldFBhcmVudCIsIm1hcCIsInZpc2l0b3IiLCJ0IiwicG9wIiwiam9pbiIsIl9zaG91bGRJZ25vcmUiLCJfcmF3IiwiY29udmVydGVyIiwiYXBwbHkiLCJvcHRpb25zIiwid2l0aCIsInBhcmFtaXplZEZhY3RvcnkiLCJyZXF1aXJlIiwicGFyZW50IiwiY29uc29sZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNwQixxQkFBYTtBQUFBOztBQUFBLG1IQUNIQyxTQURHOztBQUVaLE1BQUlDLE9BQUssTUFBS0EsSUFBTCxHQUFVLEVBQW5CO0FBQ0FDLElBQUVDLElBQUYsQ0FBTyxtQkFBUyxFQUFULFNBQWtCRixJQUF6QixFQUE4QixVQUFTRyxFQUFULEVBQVlDLEdBQVosRUFBZ0I7QUFDN0NKLFFBQUtJLElBQUlDLElBQVQsSUFBZUQsSUFBSUUsTUFBbkI7QUFDQSxHQUZEO0FBR0EsUUFBS0MsUUFBTCxHQUFjLG1CQUFTLE1BQUtQLElBQUwsQ0FBVSxnQkFBVixDQUFULFFBQWQ7QUFOWTtBQU9aOzs7OzBCQUtPUSxJLEVBQUs7QUFDWixPQUFJQyxPQUFLLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxLQUFxQixDQUFDQSxPQUFL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S0FBUDtBQUNBIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnQgZnJvbSAnLi9wYXJ0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKCcuLi9kb2N1bWVudCcpe1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR2YXIgcmVscz10aGlzLnJlbHM9e31cclxuXHRcdCQuZWFjaChuZXcgUGFydChcIlwiLHRoaXMpLnJlbHMsZnVuY3Rpb24oaWQscmVsKXtcclxuXHRcdFx0cmVsc1tyZWwudHlwZV09cmVsLnRhcmdldFxyXG5cdFx0fSlcclxuXHRcdHRoaXMucGFydE1haW49bmV3IFBhcnQodGhpcy5yZWxzWydvZmZpY2VEb2N1bWVudCddLHRoaXMpXHJcblx0fVxyXG5cdGdldCB2ZW5kZXIoKXtcIk1pY3Jvc29mdFwifVxyXG5cclxuXHRnZXQgcHJvZHVjdCgpe3JldHVybiAnT2ZmaWNlIDIwMTAnfVxyXG5cclxuXHRnZXRQYXJ0KG5hbWUpe1xyXG5cdFx0dmFyIHBhcnQ9dGhpcy5wYXJ0c1tuYW1lXSB8fCAoKG5hbWU9dGhpcy5yZWxzW25hbWVdKSYmdGhpcy5wYXJ0c1tuYW1lXSlcclxuXHRcdGlmKCFwYXJ0KVxyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cclxuXHRcdGlmKFBhcnQuaXMocGFydCkpXHJcblx0XHRcdHJldHVybiBwYXJ0XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucGFydHNbbmFtZV09bmV3IFBhcnQobmFtZSx0aGlzKVxyXG5cdH1cclxuXHRwYXJzZSgpe1xyXG5cdFx0c3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5nZXRQYXJ0KCdjb3JlLXByb3BlcnRpZXMnKS5kb2N1bWVudEVsZW1lbnRcclxuXHRcdC4kKCdrZXl3b3JkcyxkZXNjcmlwdGlvbix0aXRsZScpLmZvckVhY2goZnVuY3Rpb24oeCl7XHJcblx0XHRcdHZhciB2PXgudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR2Lmxlbmd0aCAmJiAodGhpc1t4LmxvY2FsTmFtZV09dilcclxuXHRcdH0sdGhpcy5wcm9wcylcclxuXHRcdHR5cGVvZiB0aGlzLnByb3BzLmtleXdvcmRzIT0ndW5kZWZpbmVkJyAmJiAodGhpcy5wcm9wcy5rZXl3b3Jkcz10aGlzLnByb3BzLmtleXdvcmRzLnNwbGl0KCcsJykpO1xyXG5cclxuXHRcdHRoaXMuZ2V0UGFydCgnZXh0ZW5kZWQtcHJvcGVydGllcycpLmRvY3VtZW50RWxlbWVudFxyXG5cdFx0LiQoJ1RlbXBsYXRlJykuZm9yRWFjaChmdW5jdGlvbih4KXtcclxuXHRcdFx0dmFyIHY9eC50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdHYubGVuZ3RoICYmICh0aGlzW3gubG9jYWxOYW1lXT12KVxyXG5cdFx0fSx0aGlzLnByb3BzKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBWaXNpdG9yKCl7IHJldHVybiBWaXNpdG9yfVxyXG5cclxuXHQvKipcclxuXHQgKiAgVG8gY3JlYXRlIGEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHRvIGNyZWF0ZSBhIHZpc2l0b3Igc3BlY2lmaWMgdG8gd29yZCBtb2RlbCB0eXBlc1xyXG5cdCAqICBmYWN0b3J5OiBpdCBjb3VsZCBiZSBmb2xsb3dpbmcgdHlwZVxyXG5cdCAqICBcdCogZnVuY3Rpb24od29yZE1vZGVsLCB0YXJnZXRQYXJlbnQpIDpcclxuXHQgKiAgXHRcdFx0d29yZE1vZGVsOiBpZGVudGlmaWVkIHdvcmQgbW9kZWxcclxuXHQgKiAgXHRcdFx0dGFyZ2V0UGFyZW50OiB0aGUgcmVzdWx0IGNyZWF0ZWQgYnkgdmlzaXRvciBvZiBzcmNNb2RlbCdzIHBhcmVudCBtb2RlbFxyXG5cdCAqICBcdCogb2JqZWN0OiB7J3dvcmQgbW9kZWwgdHlwZSBuYW1lJzogVmlzaXRvciBDbGFzc31cclxuXHQgKiAgXHQqIHVuZGVmaW5lZDogYSBkZWZhdWx0IGZhY3RvcnkganVzdCB0byBpbmZvIHR5cGUgb2Ygd29yZCBtb2RlbCBpbiBjb25zb2xlXHJcblx0ICogIG9wdDogYSBnbG9iYWwgb3B0aW9uIHRvIGFsbCB2aXNpdG9yIGluc3RhbmNlcyBjcmVhdGVkIGJ5IHRoZSBmYWN0b3J5LCByZWZlcmVkIGJ5IHZpc2l0b3Iub3B0aW9uc1xyXG5cdCAqL1xyXG5cdHN0YXRpYyBjcmVhdGVWaXNpdG9yRmFjdG9yeShmYWN0b3J5LCBvcHQpe1xyXG5cdFx0dmFyIEFueT10aGlzLlZpc2l0b3JcclxuXHRcdHN3aXRjaCh0eXBlb2YgZmFjdG9yeSl7XHJcblx0XHRjYXNlICdmdW5jdGlvbic6XHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICdvYmplY3QnOlxyXG5cdFx0XHR2YXIgcmF3TWFwPWZhY3Rvcnk7XHJcblx0XHRcdGZhY3Rvcnk9ZnVuY3Rpb24oc3JjTW9kZWwsIHRhcmdldFBhcmVudCl7XHJcblx0XHRcdFx0dmFyIG1hcD1mYWN0b3J5Lm1hcFxyXG5cdFx0XHRcdGlmKG1hcFsnKiddKVxyXG5cdFx0XHRcdFx0QW55PW1hcFsnKiddO1xyXG5cdFx0XHRcdHZhciBWaXNpdG9yPW1hcFtzcmNNb2RlbC50eXBlXSwgdmlzaXRvciwgdDtcclxuXHRcdFx0XHRpZighc3JjTW9kZWwudHlwZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRlbHNlIGlmKFZpc2l0b3IpXHJcblx0XHRcdFx0XHR2aXNpdG9yPW5ldyBWaXNpdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXHJcblx0XHRcdFx0ZWxzZSBpZigodD1zcmNNb2RlbC50eXBlLnNwbGl0KCcuJykpLmxlbmd0aD4xKXtcclxuXHRcdFx0XHRcdGRve1xyXG5cdFx0XHRcdFx0XHR0LnBvcCgpXHJcblx0XHRcdFx0XHRcdGlmKChWaXNpdG9yPW1hcFt0LmpvaW4oJy4nKV0pKXtcclxuXHRcdFx0XHRcdFx0XHR2aXNpdG9yPW5ldyBWaXNpdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXHJcblx0XHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fXdoaWxlKHQubGVuZ3RoPjEpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZighdmlzaXRvcilcclxuXHRcdFx0XHRcdHZpc2l0b3I9bmV3IEFueShzcmNNb2RlbCwgdGFyZ2V0UGFyZW50KTtcclxuXHJcblx0XHRcdFx0aWYoIXZpc2l0b3IuX3Nob3VsZElnbm9yZSgpKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHZpc2l0b3JcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmFjdG9yeS5tYXA9cmF3TWFwXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICd1bmRlZmluZWQnOlxyXG5cdFx0XHRmYWN0b3J5PWZ1bmN0aW9uKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpe1xyXG5cdFx0XHRcdHJldHVybiBuZXcgQW55KHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93ICd1bnN1cHBvcnRlZCBmYWN0b3J5J1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKG9wdCl7XHJcblx0XHRcdHZhciBfcmF3PWZhY3RvcnlcclxuXHRcdFx0ZmFjdG9yeT1mdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciBjb252ZXJ0ZXI9X3Jhdy5hcHBseShudWxsLGFyZ3VtZW50cylcclxuXHRcdFx0XHRcdGNvbnZlcnRlciAmJiAoY29udmVydGVyLm9wdGlvbnM9b3B0KTtcclxuXHRcdFx0XHRyZXR1cm4gY29udmVydGVyXHJcblx0XHRcdH1cclxuXHRcdFx0aWYodHlwZW9mKF9yYXcubWFwKSE9J3VuZGVmaW5lZCcpXHJcblx0XHRcdFx0ZmFjdG9yeS5tYXA9X3Jhdy5tYXBcclxuXHRcdH1cclxuXHJcblx0XHRmYWN0b3J5LndpdGg9ZnVuY3Rpb24odGFyZ2V0UGFyZW50KXtcclxuXHRcdFx0ZnVuY3Rpb24gcGFyYW1pemVkRmFjdG9yeShzcmNNb2RlbCl7XHJcblx0XHRcdFx0cmV0dXJuIGZhY3Rvcnkoc3JjTW9kZWwsIHRhcmdldFBhcmVudClcclxuXHRcdFx0fVxyXG5cdFx0XHRwYXJhbWl6ZWRGYWN0b3J5LndpdGg9ZmFjdG9yeS53aXRoXHJcblx0XHRcdHJldHVybiBwYXJhbWl6ZWRGYWN0b3J5XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhY3RvcnlcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQSB2aXNpdG9yIHRvIHZpc2l0IGEgdHlwZSBvZiB3b3JkIG1vZGVsXHJcbiAqICBzcmNNb2RlbDogaWRlbnRpZmllZCB3b3JkIG1vZGVsXHJcbiAqICB0YXJnZXRQYXJlbnQ6IHRoZSByZXN1bHQgY3JlYXRlZCBieSB2aXNpdG9yIG9mIHNyY01vZGVsJ3MgcGFyZW50IG1vZGVsXHJcbiAqL1xyXG5jbGFzcyBWaXNpdG9ye1xyXG5cdGNvbnN0cnVjdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpe1xyXG5cdFx0dGhpcy5zcmNNb2RlbD1zcmNNb2RlbFxyXG5cdFx0dGhpcy5wYXJlbnQ9dGFyZ2V0UGFyZW50XHJcblx0fVxyXG5cdHZpc2l0KCl7XHJcblx0XHRjb25zb2xlLmluZm8odGhpcy5zcmNNb2RlbC50eXBlKVxyXG5cdH1cclxuXHRfc2hvdWxkSWdub3JlKCl7XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9XHJcbn1cclxuIl19