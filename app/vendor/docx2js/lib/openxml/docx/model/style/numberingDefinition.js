'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//<w:numbering><w:abstractNum w:abstractNumId="0">
var NumberingDefinition = function (_Style) {
	_inherits(NumberingDefinition, _Style);

	function NumberingDefinition(wXml) {
		_classCallCheck(this, NumberingDefinition);

		var _this = _possibleConstructorReturn(this, (NumberingDefinition.__proto__ || Object.getPrototypeOf(NumberingDefinition)).apply(this, arguments));

		_this.levels = new Map();

		_this.name = _this.id = _this.constructor.asStyleId(wXml.attr('w:abstractNumId'));
		_this.wDoc.style.set(_this);
		var link = wXml.$1('numStyleLink');
		if (link) _this.link = link.attr('w:val');
		return _this;
	}

	_createClass(NumberingDefinition, [{
		key: '_iterate',
		value: function _iterate(f, factories, visitors) {
			for (var i = 0, children = this.wXml.$('lvl'), l = children.length, t; i < l; i++) {
				t = new this.constructor.Level(children[i], this.wDoc, this);
				this.levels.set(t.level, t);
				t.parse(visitors);
			}
		}
	}, {
		key: 'getDefinitionId',
		value: function getDefinitionId() {
			return this.wXml.attr('w:abstractNumId');
		}
	}, {
		key: 'getLabel',
		value: function getLabel() {
			var _this2 = this;

			for (var _len = arguments.length, indexes = Array(_len), _key = 0; _key < _len; _key++) {
				indexes[_key] = arguments[_key];
			}

			var _indexes = _slicedToArray(indexes[indexes.length - 1], 1),
			    level = _indexes[0];

			indexes = new Map(indexes);
			var lvlText = this.levels.get(level).values.lvlText;
			var label = lvlText.replace(/%(\d+)/g, function (a, index) {
				var current = parseInt(index) - 1;
				return _this2.levels.get(current).getLabel(indexes.get(current) - 1);
			});
			return label;
		}
	}, {
		key: 'getLabelStyle',
		value: function getLabelStyle(level) {}
	}], [{
		key: 'asStyleId',
		value: function asStyleId(absNumId) {
			return '_numberingDefinition' + absNumId;
		}
	}, {
		key: 'type',
		get: function get() {
			return 'style.numbering.definition';
		}
	}, {
		key: 'Level',
		get: function get() {
			return Level;
		}
	}]);

	return NumberingDefinition;
}(_style2.default);

exports.default = NumberingDefinition;

var Level = function (_Style$Properties) {
	_inherits(Level, _Style$Properties);

	function Level(wXml) {
		_classCallCheck(this, Level);

		var _this3 = _possibleConstructorReturn(this, (Level.__proto__ || Object.getPrototypeOf(Level)).apply(this, arguments));

		_this3.level = parseInt(wXml.attr('w:ilvl'));
		return _this3;
	}

	_createClass(Level, [{
		key: 'parse',
		value: function parse(visitors) {
			_get(Level.prototype.__proto__ || Object.getPrototypeOf(Level.prototype), 'parse', this).apply(this, arguments);
			var t, pr;
			if (t = this.wXml.$1('>pPr')) {
				var _pr;

				pr = new (require('./paragraph').Properties)(t, this.wDoc, this);
				pr.type = this.level + ' ' + pr.type;
				(_pr = pr).parse.apply(_pr, arguments);
			}

			if (t = this.wXml.$1('>rPr')) {
				var _pr2;

				pr = new _inline2.default.Properties(t, this.wDoc, this);
				pr.type = this.level + ' ' + pr.type;
				(_pr2 = pr).parse.apply(_pr2, arguments);
			}
		}
	}, {
		key: 'start',
		value: function start(x) {
			return parseInt(x.attr('w:val'));
		}
	}, {
		key: 'numFm',
		value: function numFm(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'lvlText',
		value: function lvlText(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'lvlJc',
		value: function lvlJc(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'lvlPicBulletId',
		value: function lvlPicBulletId(x) {
			return x.attr('w:val');
		}
	}, {
		key: 'getLabel',
		value: function getLabel(index) {
			switch (this.values.numFm) {
				default:
					return new String(this.values.start + index);
			}
		}
		/* number type:
  decimal
  upperRoman
  lowerRoman
  upperLetter
  lowerLetter
  ordinal
  cardinalText
  ordinalText
  hex
  chicago
  ideographDigital
  japaneseCounting
  aiueo
  iroha
  decimalFullWidth
  decimalHalfWidth
  japaneseLegal
  japaneseDigitalTenThousand
  decimalEnclosedCircle
  decimalFullWidth2
  aiueoFullWidth
  irohaFullWidth
  decimalZero
  bullet
  ganada
  chosung
  decimalEnclosedFullstop
  decimalEnclosedParen
  decimalEnclosedCircleChinese
  ideographEnclosedCircle
  ideographTraditional
  ideographZodiac
  ideographZodiacTraditional
  taiwaneseCounting
  ideographLegalTraditional
  taiwaneseCountingThousand
  taiwaneseDigital
  chineseCounting
  chineseLegalSimplified
  chineseCountingThousand
  koreanDigital
  koreanCounting
  koreanLegal
  koreanDigital2
  vietnameseCounting
  russianLower
  russianUpper
  none
  numberInDash
  hebrew1
  hebrew2
  arabicAlpha
  arabicAbjad
  hindiVowels
  hindiConsonants
  hindiNumbers
  hindiCounting
  thaiLetters
  thaiNumbers
  thaiCounting
  */

	}]);

	return Level;
}(_style2.default.Properties);

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvbnVtYmVyaW5nRGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJOdW1iZXJpbmdEZWZpbml0aW9uIiwid1htbCIsImFyZ3VtZW50cyIsImxldmVscyIsIk1hcCIsIm5hbWUiLCJpZCIsImNvbnN0cnVjdG9yIiwiYXNTdHlsZUlkIiwiYXR0ciIsIndEb2MiLCJzdHlsZSIsInNldCIsImxpbmsiLCIkMSIsImYiLCJmYWN0b3JpZXMiLCJ2aXNpdG9ycyIsImkiLCJjaGlsZHJlbiIsIiQiLCJsIiwibGVuZ3RoIiwidCIsIkxldmVsIiwibGV2ZWwiLCJwYXJzZSIsImluZGV4ZXMiLCJsdmxUZXh0IiwiZ2V0IiwidmFsdWVzIiwibGFiZWwiLCJyZXBsYWNlIiwiYSIsImluZGV4IiwiY3VycmVudCIsInBhcnNlSW50IiwiZ2V0TGFiZWwiLCJhYnNOdW1JZCIsInByIiwicmVxdWlyZSIsIlByb3BlcnRpZXMiLCJ0eXBlIiwieCIsIm51bUZtIiwiU3RyaW5nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxtQjs7O0FBQ3BCLDhCQUFZQyxJQUFaLEVBQWlCO0FBQUE7O0FBQUEseUlBQ1BDLFNBRE87O0FBRWhCLFFBQUtDLE1BQUwsR0FBWSxJQUFJQyxHQUFKLEVBQVo7O0FBRUEsUUFBS0MsSUFBTCxHQUFVLE1BQUtDLEVBQUwsR0FBUSxNQUFLQyxXQUFMLENBQWlCQyxTQUFqQixDQUEyQlAsS0FBS1EsSUFBTCxDQUFVLGlCQUFWLENBQTNCLENBQWxCO0FBQ0EsUUFBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUFoQjtBQUNBLE1BQUlDLE9BQUtaLEtBQUthLEVBQUwsQ0FBUSxjQUFSLENBQVQ7QUFDQSxNQUFHRCxJQUFILEVBQ0MsTUFBS0EsSUFBTCxHQUFVQSxLQUFLSixJQUFMLENBQVUsT0FBVixDQUFWO0FB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QkFDS3lDLEMsRUFBRTtBQUNQLFVBQU9QLFNBQVNPLEVBQUVsQyxJQUFGLENBQU8sT0FBUCxDQUFULENBQVA7QUFDQTs7O3dCQUNLa0MsQyxFQUFFO0FBQ1AsVUFBT0EsRUFBRWxDLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDQTs7OzBCQUNPa0MsQyxFQUFFO0FBQ1QsVUFBT0EsRUFBRWxDLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDQTs7O3dCQUNLa0MsQyxFQUFFO0FBQ1AsVUFBT0EsRUFBRWxDLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDQTs7O2lDQUNja0MsQyxFQUFFO0FBQ2hCLFVBQU9BLEVBQUVsQyxJQUFGLENBQU8sT0FBUCxDQUFQO0FBQ0E7OzsyQkFFUXlCLEssRUFBTTtBQUNkLFdBQU8sS0FBS0osTUFBTCxDQUFZYyxLQUFuQjtBQUNBO0FBQ0MsWUFBTyxJQUFJQyxNQUFKLENBQVcsS0FBS2YsTUFBTCxDQUFZZ0IsS0FBWixHQUFrQlosS0FBN0IsQ0FBUDtBQUZEO0FBSUE7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUNvQixnQkFBTU8sVSIsImZpbGUiOiJudW1iZXJpbmdEZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4uL3N0eWxlJ1xyXG5pbXBvcnQgSW5saW5lIGZyb20gJy4vaW5saW5lJ1xyXG5cclxuLy88dzpudW1iZXJpbmc+PHc6YWJzdHJhY3ROdW0gdzphYnN0cmFjdE51bUlkPVwiMFwiPlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJpbmdEZWZpbml0aW9uIGV4dGVuZHMgU3R5bGV7XHJcblx0Y29uc3RydWN0b3Iod1htbCl7XHJcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXHJcblx0XHR0aGlzLmxldmVscz1uZXcgTWFwKClcclxuXHJcblx0XHR0aGlzLm5hbWU9dGhpcy5pZD10aGlzLmNvbnN0cnVjdG9yLmFzU3R5bGVJZCh3WG1sLmF0dHIoJ3c6YWJzdHJhY3ROdW1JZCcpKVxyXG5cdFx0dGhpcy53RG9jLnN0eWxlLnNldCh0aGlzKVxyXG5cdFx0dmFyIGxpbms9d1htbC4kMSgnbnVtU3R5bGVMaW5rJylcclxuXHRcdGlmKGxpbmspXHJcblx0XHRcdHRoaXMubGluaz1saW5rLmF0dHIoJ3c6dmFsJylcclxuXHR9XHJcblx0XHJcblx0X2l0ZXJhdGUoZiwgZmFjdG9yaWVzLCB2aXNpdG9ycyl7XHJcblx0XHRmb3IodmFyIGk9MCxjaGlsZHJlbj10aGlzLndYbWwuJCgnbHZsJyksbD1jaGlsZHJlbi5sZW5ndGgsIHQ7IGk8bDsgaSsrKXtcclxuXHRcdFx0dD1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5MZXZlbChjaGlsZHJlbltpXSx0aGlzLndEb2MsIHRoaXMpXHJcblx0XHRcdHRoaXMubGV2ZWxzLnNldCh0LmxldmVsLHQpXHJcblx0XHRcdHQucGFyc2UodmlzaXRvcnMpXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGdldERlZmluaXRpb25JZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMud1htbC5hdHRyKCd3OmFic3RyYWN0TnVtSWQnKVxyXG5cdH1cclxuXHRcclxuXHRnZXRMYWJlbCguLi5pbmRleGVzKXtcclxuXHRcdGxldCBbbGV2ZWxdPWluZGV4ZXNbaW5kZXhlcy5sZW5ndGgtMV1cclxuXHRcdGluZGV4ZXM9bmV3IE1hcChpbmRleGVzKVxyXG5cdFx0bGV0IGx2bFRleHQ9dGhpcy5sZXZlbHMuZ2V0KGxldmVsKS52YWx1ZXMubHZsVGV4dFxyXG5cdFx0bGV0IGxhYmVsPWx2bFRleHQucmVwbGFjZSgvJShcXGQrKS9nLChhLGluZGV4KT0+e1xyXG5cdFx0XHRsZXQgY3VycmVudD1wYXJzZUludChpbmRleCktMVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5sZXZlbHMuZ2V0KGN1cnJlbnQpLmdldExhYmVsKGluZGV4ZXMuZ2V0KGN1cnJlbnQpLTEpXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIGxhYmVsXHJcblx0fVxyXG5cdFxyXG5cdGdldExhYmVsU3R5bGUobGV2ZWwpe1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXNTdHlsZUlkKGFic051bUlkKXtcclxuXHRcdHJldHVybiAnX251bWJlcmluZ0RlZmluaXRpb24nK2Fic051bUlkXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IHR5cGUoKXtyZXR1cm4gJ3N0eWxlLm51bWJlcmluZy5kZWZpbml0aW9uJ31cclxuXHJcblx0c3RhdGljIGdldCBMZXZlbCgpe3JldHVybiBMZXZlbH1cclxufVxyXG5cclxuY2xhc3MgTGV2ZWwgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xyXG5cdGNvbnN0cnVjdG9yKHdYbWwpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5sZXZlbD1wYXJzZUludCh3WG1sLmF0dHIoJ3c6aWx2bCcpKVxyXG5cdH1cclxuXHRwYXJzZSh2aXNpdG9ycyl7XHJcblx0XHRzdXBlci5wYXJzZSguLi5hcmd1bWVudHMpXHJcblx0XHR2YXIgdCxwcjtcclxuXHRcdGlmKHQ9dGhpcy53WG1sLiQxKCc+cFByJykpe1xyXG5cdFx0XHRwcj1uZXcgKHJlcXVpcmUoJy4vcGFyYWdyYXBoJykuUHJvcGVydGllcykodCx0aGlzLndEb2MsdGhpcylcclxuXHRcdFx0cHIudHlwZT10aGlzLmxldmVsKycgJytwci50eXBlXHJcblx0XHRcdHByLnBhcnNlKC4uLmFyZ3VtZW50cylcclxuXHRcdH1cclxuXHJcblx0XHRpZih0PXRoaXMud1htbC4kMSgnPnJQcicpKXtcclxuXHRcdFx0cHI9bmV3IElubGluZS5Qcm9wZXJ0aWVzKHQsdGhpcy53RG9jLHRoaXMpXHJcblx0XHRcdHByLnR5cGU9dGhpcy5sZXZlbCsnICcrcHIudHlwZVxyXG5cdFx0XHRwci5wYXJzZSguLi5hcmd1bWVudHMpXHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXJ0KHgpe1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KHguYXR0cigndzp2YWwnKSlcclxuXHR9XHJcblx0bnVtRm0oeCl7XHJcblx0XHRyZXR1cm4geC5hdHRyKCd3OnZhbCcpXHJcblx0fVxyXG5cdGx2bFRleHQoeCl7XHJcblx0XHRyZXR1cm4geC5hdHRyKCd3OnZhbCcpXHJcblx0fVxyXG5cdGx2bEpjKHgpe1xyXG5cdFx0cmV0dXJuIHguYXR0cigndzp2YWwnKVxyXG5cdH1cclxuXHRsdmxQaWNCdWxsZXRJZCh4KXtcclxuXHRcdHJldHVybiB4LmF0dHIoJ3c6dmFsJylcclxuXHR9XHJcblx0XHJcblx0Z2V0TGFiZWwoaW5kZXgpe1xyXG5cdFx0c3dpdGNoKHRoaXMudmFsdWVzLm51bUZtKXtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBuZXcgU3RyaW5nKHRoaXMudmFsdWVzLnN0YXJ0K2luZGV4KVxyXG5cdFx0fVxyXG5cdH1cclxuLyogbnVtYmVyIHR5cGU6XHJcbmRlY2ltYWxcclxudXBwZXJSb21hblxyXG5sb3dlclJvbWFuXHJcbnVwcGVyTGV0dGVyXHJcbmxvd2VyTGV0dGVyXHJcbm9yZGluYWxcclxuY2FyZGluYWxUZXh0XHJcbm9yZGluYWxUZXh0XHJcbmhleFxyXG5jaGljYWdvXHJcbmlkZW9ncmFwaERpZ2l0YWxcclxuamFwYW5lc2VDb3VudGluZ1xyXG5haXVlb1xyXG5pcm9oYVxyXG5kZWNpbWFsRnVsbFdpZHRoXHJcbmRlY2ltYWxIYWxmV2lkdGhcclxuamFwYW5lc2VMZWdhbFxyXG5qYXBhbmVzZURpZ2l0YWxUZW5UaG91c2FuZFxyXG5kZWNpbWFsRW5jbG9zZWRDaXJjbGVcclxuZGVjaW1hbEZ1bGxXaWR0aDJcclxuYWl1ZW9GdWxsV2lkdGhcclxuaXJvaGFGdWxsV2lkdGhcclxuZGVjaW1hbFplcm9cclxuYnVsbGV0XHJcbmdhbmFkYVxyXG5jaG9zdW5nXHJcbmRlY2ltYWxFbmNsb3NlZEZ1bGxzdG9wXHJcbmRlY2ltYWxFbmNsb3NlZFBhcmVuXHJcbmRlY2ltYWxFbmNsb3NlZENpcmNsZUNoaW5lc2VcclxuaWRlb2dyYXBoRW5jbG9zZWRDaXJjbGVcclxuaWRlb2dyYXBoVHJhZGl0aW9uYWxcclxuaWRlb2dyYXBoWm9kaWFjXHJcbmlkZW9ncmFwaFpvZGlhY1RyYWRpdGlvbmFsXHJcbnRhaXdhbmVzZUNvdW50aW5nXHJcbmlkZW9ncmFwaExlZ2FsVHJhZGl0aW9uYWxcclxudGFpd2FuZXNlQ291bnRpbmdUaG91c2FuZFxyXG50YWl3YW5lc2VEaWdpdGFsXHJcbmNoaW5lc2VDb3VudGluZ1xyXG5jaGluZXNlTGVnYWxTaW1wbGlmaWVkXHJcbmNoaW5lc2VDb3VudGluZ1Rob3VzYW5kXHJcbmtvcmVhbkRpZ2l0YWxcclxua29yZWFuQ291bnRpbmdcclxua29yZWFuTGVnYWxcclxua29yZWFuRGlnaXRhbDJcclxudmlldG5hbWVzZUNvdW50aW5nXHJcbnJ1c3NpYW5Mb3dlclxyXG5ydXNzaWFuVXBwZXJcclxubm9uZVxyXG5udW1iZXJJbkRhc2hcclxuaGVicmV3MVxyXG5oZWJyZXcyXHJcbmFyYWJpY0FscGhhXHJcbmFyYWJpY0FiamFkXHJcbmhpbmRpVm93ZWxzXHJcbmhpbmRpQ29uc29uYW50c1xyXG5oaW5kaU51bWJlcnNcclxuaGluZGlDb3VudGluZ1xyXG50aGFpTGV0dGVyc1xyXG50aGFpTnVtYmVyc1xyXG50aGFpQ291bnRpbmdcclxuKi9cclxufVxyXG4iXX0=