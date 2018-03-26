'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _part = require('./part');

var _part2 = _interopRequireDefault(_part);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Document = function (_require) {
	(0, _inherits3.default)(Document, _require);

	function Document() {
		(0, _classCallCheck3.default)(this, Document);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).apply(this, arguments));

		var rels = _this.rels = {};
		$.each(new _part2.default("", _this).rels, function (id, rel) {
			rels[rel.type] = rel.target;
		});
		_this.partMain = new _part2.default(_this.rels['officeDocument'], _this);
		return _this;
	}

	(0, _createClass3.default)(Document, [{
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
			(0, _get3.default)(Document.prototype.__proto__ || (0, _getPrototypeOf2.default)(Document.prototype), 'parse', this).apply(this, arguments);
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
			switch (typeof _factory === 'undefined' ? 'undefined' : (0, _typeof3.default)(_factory)) {
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
		(0, _classCallCheck3.default)(this, Visitor);

		this.srcModel = srcModel;
		this.parent = targetParent;
	}

	(0, _createClass3.default)(Visitor, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVueG1sL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiYXJndW1lbnRzIiwicmVscyIsIiQiLCJlYWNoIiwiaWQiLCJyZWwiLCJ0eXBlIiwidGFyZ2V0IiwicGFydE1haW4iLCJuYW1lIiwicGFydCIsInBhcnRzIiwiaXMiLCJnZXRQYXJ0IiwiZG9jdW1lbnRFbGVtZW50IiwiZm9yRWFjaCIsIngiLCJ2IiwidGV4dENvbnRlbnQiLCJ0cmltIiwibGVuZ3RoIiwibG9jYWxOYW1lIiwicHJvcHMiLCJrZXl3b3JkcyIsInNwbGl0IiwiZmFjdG9yeSIsIm9wdCIsIkFueSIsIlZpc2l0b3IiLCJyYXdNYXAiLCJzcmNNb2RlbCIsInRhcmdldFBhcmVudCIsIm1hcCIsInZpc2l0b3IiLCJ0IiwicG9wIiwiam9pbiIsIl9zaG91bGRJZ25vcmUiLCJfcmF3IiwiY29udmVydGVyIiwiYXBwbHkiLCJvcHRpb25zIiwid2l0aCIsInBhcmFtaXplZEZhY3RvcnkiLCJyZXF1aXJlIiwicGFyZW50IiwiY29uc29sZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRXFCQSxROzs7QUFDcEIscUJBQWE7QUFBQTs7QUFBQSx5SUFDSEMsU0FERzs7QUFFWixNQUFJQyxPQUFLLE1BQUtBLElBQUwsR0FBVSxFQUFuQjtBQUNBQyxJQUFFQyxJQUFGLENBQU8sbUJBQVMsRUFBVCxTQUFrQkYsSUFBekIsRUFBOEIsVUFBU0csRUFBVCxFQUFZQyxHQUFaLEVBQWdCO0FBQzdDSixRQUFLSSxJQUFJQyxJQUFULElBQWVELElBQUlFLE1BQW5CO0FBQ0EsR0FGRDtBQUdBLFFBQUtDLFFBQUwsR0FBYyxtQkFBUyxNQUFLUCxJQUFMLENBQVUsZ0JBQVYsQ0FBVCxRQUFkO0FBTlk7QUFPWjs7OzswQkFLT1EsSSxFQUFLO0FBQ1osT0FBSUMsT0FBSyxLQUFLQyxLQUFMLENBQVdGLElBQVgs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Q0FDYztBQUNkLFVBQU8sS0FBUDtBQUNBIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnQgZnJvbSAnLi9wYXJ0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKCcuLi9kb2N1bWVudCcpe1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR2YXIgcmVscz10aGlzLnJlbHM9e31cclxuXHRcdCQuZWFjaChuZXcgUGFydChcIlwiLHRoaXMpLnJlbHMsZnVuY3Rpb24oaWQscmVsKXtcclxuXHRcdFx0cmVsc1tyZWwudHlwZV09cmVsLnRhcmdldFxyXG5cdFx0fSlcclxuXHRcdHRoaXMucGFydE1haW49bmV3IFBhcnQodGhpcy5yZWxzWydvZmZpY2VEb2N1bWVudCddLHRoaXMpXHJcblx0fVxyXG5cdGdldCB2ZW5kZXIoKXtcIk1pY3Jvc29mdFwifVxyXG5cclxuXHRnZXQgcHJvZHVjdCgpe3JldHVybiAnT2ZmaWNlIDIwMTAnfVxyXG5cclxuXHRnZXRQYXJ0KG5hbWUpe1xyXG5cdFx0dmFyIHBhcnQ9dGhpcy5wYXJ0c1tuYW1lXSB8fCAoKG5hbWU9dGhpcy5yZWxzW25hbWVdKSYmdGhpcy5wYXJ0c1tuYW1lXSlcclxuXHRcdGlmKCFwYXJ0KVxyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cclxuXHRcdGlmKFBhcnQuaXMocGFydCkpXHJcblx0XHRcdHJldHVybiBwYXJ0XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucGFydHNbbmFtZV09bmV3IFBhcnQobmFtZSx0aGlzKVxyXG5cdH1cclxuXHRwYXJzZSgpe1xyXG5cdFx0c3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5nZXRQYXJ0KCdjb3JlLXByb3BlcnRpZXMnKS5kb2N1bWVudEVsZW1lbnRcclxuXHRcdC4kKCdrZXl3b3JkcyxkZXNjcmlwdGlvbix0aXRsZScpLmZvckVhY2goZnVuY3Rpb24oeCl7XHJcblx0XHRcdHZhciB2PXgudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR2Lmxlbmd0aCAmJiAodGhpc1t4LmxvY2FsTmFtZV09dilcclxuXHRcdH0sdGhpcy5wcm9wcylcclxuXHRcdHR5cGVvZiB0aGlzLnByb3BzLmtleXdvcmRzIT0ndW5kZWZpbmVkJyAmJiAodGhpcy5wcm9wcy5rZXl3b3Jkcz10aGlzLnByb3BzLmtleXdvcmRzLnNwbGl0KCcsJykpO1xyXG5cclxuXHRcdHRoaXMuZ2V0UGFydCgnZXh0ZW5kZWQtcHJvcGVydGllcycpLmRvY3VtZW50RWxlbWVudFxyXG5cdFx0LiQoJ1RlbXBsYXRlJykuZm9yRWFjaChmdW5jdGlvbih4KXtcclxuXHRcdFx0dmFyIHY9eC50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdHYubGVuZ3RoICYmICh0aGlzW3gubG9jYWxOYW1lXT12KVxyXG5cdFx0fSx0aGlzLnByb3BzKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBWaXNpdG9yKCl7IHJldHVybiBWaXNpdG9yfVxyXG5cclxuXHQvKipcclxuXHQgKiAgVG8gY3JlYXRlIGEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHRvIGNyZWF0ZSBhIHZpc2l0b3Igc3BlY2lmaWMgdG8gd29yZCBtb2RlbCB0eXBlc1xyXG5cdCAqICBmYWN0b3J5OiBpdCBjb3VsZCBiZSBmb2xsb3dpbmcgdHlwZVxyXG5cdCAqICBcdCogZnVuY3Rpb24od29yZE1vZGVsLCB0YXJnZXRQYXJlbnQpIDpcclxuXHQgKiAgXHRcdFx0d29yZE1vZGVsOiBpZGVudGlmaWVkIHdvcmQgbW9kZWxcclxuXHQgKiAgXHRcdFx0dGFyZ2V0UGFyZW50OiB0aGUgcmVzdWx0IGNyZWF0ZWQgYnkgdmlzaXRvciBvZiBzcmNNb2RlbCdzIHBhcmVudCBtb2RlbFxyXG5cdCAqICBcdCogb2JqZWN0OiB7J3dvcmQgbW9kZWwgdHlwZSBuYW1lJzogVmlzaXRvciBDbGFzc31cclxuXHQgKiAgXHQqIHVuZGVmaW5lZDogYSBkZWZhdWx0IGZhY3RvcnkganVzdCB0byBpbmZvIHR5cGUgb2Ygd29yZCBtb2RlbCBpbiBjb25zb2xlXHJcblx0ICogIG9wdDogYSBnbG9iYWwgb3B0aW9uIHRvIGFsbCB2aXNpdG9yIGluc3RhbmNlcyBjcmVhdGVkIGJ5IHRoZSBmYWN0b3J5LCByZWZlcmVkIGJ5IHZpc2l0b3Iub3B0aW9uc1xyXG5cdCAqL1xyXG5cdHN0YXRpYyBjcmVhdGVWaXNpdG9yRmFjdG9yeShmYWN0b3J5LCBvcHQpe1xyXG5cdFx0dmFyIEFueT10aGlzLlZpc2l0b3JcclxuXHRcdHN3aXRjaCh0eXBlb2YgZmFjdG9yeSl7XHJcblx0XHRjYXNlICdmdW5jdGlvbic6XHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICdvYmplY3QnOlxyXG5cdFx0XHR2YXIgcmF3TWFwPWZhY3Rvcnk7XHJcblx0XHRcdGZhY3Rvcnk9ZnVuY3Rpb24oc3JjTW9kZWwsIHRhcmdldFBhcmVudCl7XHJcblx0XHRcdFx0dmFyIG1hcD1mYWN0b3J5Lm1hcFxyXG5cdFx0XHRcdGlmKG1hcFsnKiddKVxyXG5cdFx0XHRcdFx0QW55PW1hcFsnKiddO1xyXG5cdFx0XHRcdHZhciBWaXNpdG9yPW1hcFtzcmNNb2RlbC50eXBlXSwgdmlzaXRvciwgdDtcclxuXHRcdFx0XHRpZighc3JjTW9kZWwudHlwZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRlbHNlIGlmKFZpc2l0b3IpXHJcblx0XHRcdFx0XHR2aXNpdG9yPW5ldyBWaXNpdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXHJcblx0XHRcdFx0ZWxzZSBpZigodD1zcmNNb2RlbC50eXBlLnNwbGl0KCcuJykpLmxlbmd0aD4xKXtcclxuXHRcdFx0XHRcdGRve1xyXG5cdFx0XHRcdFx0XHR0LnBvcCgpXHJcblx0XHRcdFx0XHRcdGlmKChWaXNpdG9yPW1hcFt0LmpvaW4oJy4nKV0pKXtcclxuXHRcdFx0XHRcdFx0XHR2aXNpdG9yPW5ldyBWaXNpdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXHJcblx0XHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fXdoaWxlKHQubGVuZ3RoPjEpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZighdmlzaXRvcilcclxuXHRcdFx0XHRcdHZpc2l0b3I9bmV3IEFueShzcmNNb2RlbCwgdGFyZ2V0UGFyZW50KTtcclxuXHJcblx0XHRcdFx0aWYoIXZpc2l0b3IuX3Nob3VsZElnbm9yZSgpKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHZpc2l0b3JcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmFjdG9yeS5tYXA9cmF3TWFwXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICd1bmRlZmluZWQnOlxyXG5cdFx0XHRmYWN0b3J5PWZ1bmN0aW9uKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpe1xyXG5cdFx0XHRcdHJldHVybiBuZXcgQW55KHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpXHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93ICd1bnN1cHBvcnRlZCBmYWN0b3J5J1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKG9wdCl7XHJcblx0XHRcdHZhciBfcmF3PWZhY3RvcnlcclxuXHRcdFx0ZmFjdG9yeT1mdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciBjb252ZXJ0ZXI9X3Jhdy5hcHBseShudWxsLGFyZ3VtZW50cylcclxuXHRcdFx0XHRcdGNvbnZlcnRlciAmJiAoY29udmVydGVyLm9wdGlvbnM9b3B0KTtcclxuXHRcdFx0XHRyZXR1cm4gY29udmVydGVyXHJcblx0XHRcdH1cclxuXHRcdFx0aWYodHlwZW9mKF9yYXcubWFwKSE9J3VuZGVmaW5lZCcpXHJcblx0XHRcdFx0ZmFjdG9yeS5tYXA9X3Jhdy5tYXBcclxuXHRcdH1cclxuXHJcblx0XHRmYWN0b3J5LndpdGg9ZnVuY3Rpb24odGFyZ2V0UGFyZW50KXtcclxuXHRcdFx0ZnVuY3Rpb24gcGFyYW1pemVkRmFjdG9yeShzcmNNb2RlbCl7XHJcblx0XHRcdFx0cmV0dXJuIGZhY3Rvcnkoc3JjTW9kZWwsIHRhcmdldFBhcmVudClcclxuXHRcdFx0fVxyXG5cdFx0XHRwYXJhbWl6ZWRGYWN0b3J5LndpdGg9ZmFjdG9yeS53aXRoXHJcblx0XHRcdHJldHVybiBwYXJhbWl6ZWRGYWN0b3J5XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhY3RvcnlcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQSB2aXNpdG9yIHRvIHZpc2l0IGEgdHlwZSBvZiB3b3JkIG1vZGVsXHJcbiAqICBzcmNNb2RlbDogaWRlbnRpZmllZCB3b3JkIG1vZGVsXHJcbiAqICB0YXJnZXRQYXJlbnQ6IHRoZSByZXN1bHQgY3JlYXRlZCBieSB2aXNpdG9yIG9mIHNyY01vZGVsJ3MgcGFyZW50IG1vZGVsXHJcbiAqL1xyXG5jbGFzcyBWaXNpdG9ye1xyXG5cdGNvbnN0cnVjdG9yKHNyY01vZGVsLCB0YXJnZXRQYXJlbnQpe1xyXG5cdFx0dGhpcy5zcmNNb2RlbD1zcmNNb2RlbFxyXG5cdFx0dGhpcy5wYXJlbnQ9dGFyZ2V0UGFyZW50XHJcblx0fVxyXG5cdHZpc2l0KCl7XHJcblx0XHRjb25zb2xlLmluZm8odGhpcy5zcmNNb2RlbC50eXBlKVxyXG5cdH1cclxuXHRfc2hvdWxkSWdub3JlKCl7XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9XHJcbn1cclxuIl19