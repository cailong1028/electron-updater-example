'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

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

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//<w:numbering><w:abstractNum w:abstractNumId="0">
var NumberingDefinition = function (_Style) {
	(0, _inherits3.default)(NumberingDefinition, _Style);

	function NumberingDefinition(wXml) {
		(0, _classCallCheck3.default)(this, NumberingDefinition);

		var _this = (0, _possibleConstructorReturn3.default)(this, (NumberingDefinition.__proto__ || (0, _getPrototypeOf2.default)(NumberingDefinition)).apply(this, arguments));

		_this.levels = new _map2.default();

		_this.name = _this.id = _this.constructor.asStyleId(wXml.attr('w:abstractNumId'));
		_this.wDoc.style.set(_this);
		var link = wXml.$1('numStyleLink');
		if (link) _this.link = link.attr('w:val');
		return _this;
	}

	(0, _createClass3.default)(NumberingDefinition, [{
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

			var _indexes = (0, _slicedToArray3.default)(indexes[indexes.length - 1], 1),
			    level = _indexes[0];

			indexes = new _map2.default(indexes);
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
	(0, _inherits3.default)(Level, _Style$Properties);

	function Level(wXml) {
		(0, _classCallCheck3.default)(this, Level);

		var _this3 = (0, _possibleConstructorReturn3.default)(this, (Level.__proto__ || (0, _getPrototypeOf2.default)(Level)).apply(this, arguments));

		_this3.level = parseInt(wXml.attr('w:ilvl'));
		return _this3;
	}

	(0, _createClass3.default)(Level, [{
		key: 'parse',
		value: function parse(visitors) {
			(0, _get3.default)(Level.prototype.__proto__ || (0, _getPrototypeOf2.default)(Level.prototype), 'parse', this).apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9vcGVueG1sL2RvY3gvbW9kZWwvc3R5bGUvbnVtYmVyaW5nRGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJOdW1iZXJpbmdEZWZpbml0aW9uIiwid1htbCIsImFyZ3VtZW50cyIsImxldmVscyIsIm5hbWUiLCJpZCIsImNvbnN0cnVjdG9yIiwiYXNTdHlsZUlkIiwiYXR0ciIsIndEb2MiLCJzdHlsZSIsInNldCIsImxpbmsiLCIkMSIsImYiLCJmYWN0b3JpZXMiLCJ2aXNpdG9ycyIsImkiLCJjaGlsZHJlbiIsIiQiLCJsIiwibGVuZ3RoIiwidCIsIkxldmVsIiwibGV2ZWwiLCJwYXJzZSIsImluZGV4ZXMiLCJsdmxUZXh0IiwiZ2V0IiwidmFsdWVzIiwibGFiZWwiLCJyZXBsYWNlIiwiYSIsImluZGV4IiwiY3VycmVudCIsInBhcnNlSW50IiwiZ2V0TGFiZWwiLCJhYnNOdW1JZCIsInByIiwicmVxdWlyZSIsIlByb3BlcnRpZXMiLCJ0eXBlIiwieCIsIm51bUZtIiwiU3RyaW5nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7SUFDcUJBLG1COzs7QUFDcEIsOEJBQVlDLElBQVosRUFBaUI7QUFBQTs7QUFBQSwrSkFDUEMsU0FETzs7QUFFaEIsUUFBS0MsTUFBTCxHQUFZLG1CQUFaOztBQUVBLFFBQUtDLElBQUwsR0FBVSxNQUFLQyxFQUFMLEdBQVEsTUFBS0MsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkJOLEtBQUtPLElBQUwsQ0FBVSxpQkFBVixDQUEzQixDQUFsQjtBQUNBLFFBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsR0FBaEI7QUFDQSxNQUFJQyxPQUFLWCxLQUFLWSxFQUFMLENBQVEsY0FBUixDQUFUO0FBQ0EsTUFBR0QsSUFBSCxFQUNDLE1BQUtBLElBQUwsR0FBVUEsS0FBS0osSUFBTCxDQUFVLE9BQVYsQ0FB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QUFFO0FBQ1AsVUFBT1AsU0FBU08sRUFBRWxDLElBQUYsQ0FBTyxPQUFQLENBQVQsQ0FBUDtBQUNBOzs7d0JBQ0trQyxDLEVBQUU7QUFDUCxVQUFPQSxFQUFFbEMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNBOzs7MEJBQ09rQyxDLEVBQUU7QUFDVCxVQUFPQSxFQUFFbEMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNBOzs7d0JBQ0trQyxDLEVBQUU7QUFDUCxVQUFPQSxFQUFFbEMsSUFBRixDQUFPLE9BQVAsQ0FBUDtBQUNBOzs7aUNBQ2NrQyxDLEVBQUU7QUFDaEIsVUFBT0EsRUFBRWxDLElBQUYsQ0FBTyxPQUFQLENBQVA7QUFDQTs7OzJCQUVReUIsSyxFQUFNO0FBQ2QsV0FBTyxLQUFLSixNQUFMLENBQVljLEtBQW5CO0FBQ0E7QUFDQyxZQUFPLElBQUlDLE1BQUosQ0FBVyxLQUFLZixNQUFMLENBQVlnQixLQUFaLEdBQWtCWixLQUE3QixDQUFQO0FBRkQ7QUFJQTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFDb0IsZ0JBQU1PLFUiLCJmaWxlIjoibnVtYmVyaW5nRGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuLi9zdHlsZSdcclxuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSdcclxuXHJcbi8vPHc6bnVtYmVyaW5nPjx3OmFic3RyYWN0TnVtIHc6YWJzdHJhY3ROdW1JZD1cIjBcIj5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyaW5nRGVmaW5pdGlvbiBleHRlbmRzIFN0eWxle1xyXG5cdGNvbnN0cnVjdG9yKHdYbWwpe1xyXG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxyXG5cdFx0dGhpcy5sZXZlbHM9bmV3IE1hcCgpXHJcblxyXG5cdFx0dGhpcy5uYW1lPXRoaXMuaWQ9dGhpcy5jb25zdHJ1Y3Rvci5hc1N0eWxlSWQod1htbC5hdHRyKCd3OmFic3RyYWN0TnVtSWQnKSlcclxuXHRcdHRoaXMud0RvYy5zdHlsZS5zZXQodGhpcylcclxuXHRcdHZhciBsaW5rPXdYbWwuJDEoJ251bVN0eWxlTGluaycpXHJcblx0XHRpZihsaW5rKVxyXG5cdFx0XHR0aGlzLmxpbms9bGluay5hdHRyKCd3OnZhbCcpXHJcblx0fVxyXG5cdFxyXG5cdF9pdGVyYXRlKGYsIGZhY3RvcmllcywgdmlzaXRvcnMpe1xyXG5cdFx0Zm9yKHZhciBpPTAsY2hpbGRyZW49dGhpcy53WG1sLiQoJ2x2bCcpLGw9Y2hpbGRyZW4ubGVuZ3RoLCB0OyBpPGw7IGkrKyl7XHJcblx0XHRcdHQ9bmV3IHRoaXMuY29uc3RydWN0b3IuTGV2ZWwoY2hpbGRyZW5baV0sdGhpcy53RG9jLCB0aGlzKVxyXG5cdFx0XHR0aGlzLmxldmVscy5zZXQodC5sZXZlbCx0KVxyXG5cdFx0XHR0LnBhcnNlKHZpc2l0b3JzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRnZXREZWZpbml0aW9uSWQoKXtcclxuXHRcdHJldHVybiB0aGlzLndYbWwuYXR0cigndzphYnN0cmFjdE51bUlkJylcclxuXHR9XHJcblx0XHJcblx0Z2V0TGFiZWwoLi4uaW5kZXhlcyl7XHJcblx0XHRsZXQgW2xldmVsXT1pbmRleGVzW2luZGV4ZXMubGVuZ3RoLTFdXHJcblx0XHRpbmRleGVzPW5ldyBNYXAoaW5kZXhlcylcclxuXHRcdGxldCBsdmxUZXh0PXRoaXMubGV2ZWxzLmdldChsZXZlbCkudmFsdWVzLmx2bFRleHRcclxuXHRcdGxldCBsYWJlbD1sdmxUZXh0LnJlcGxhY2UoLyUoXFxkKykvZywoYSxpbmRleCk9PntcclxuXHRcdFx0bGV0IGN1cnJlbnQ9cGFyc2VJbnQoaW5kZXgpLTFcclxuXHRcdFx0cmV0dXJuIHRoaXMubGV2ZWxzLmdldChjdXJyZW50KS5nZXRMYWJlbChpbmRleGVzLmdldChjdXJyZW50KS0xKVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBsYWJlbFxyXG5cdH1cclxuXHRcclxuXHRnZXRMYWJlbFN0eWxlKGxldmVsKXtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFzU3R5bGVJZChhYnNOdW1JZCl7XHJcblx0XHRyZXR1cm4gJ19udW1iZXJpbmdEZWZpbml0aW9uJythYnNOdW1JZFxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCB0eXBlKCl7cmV0dXJuICdzdHlsZS5udW1iZXJpbmcuZGVmaW5pdGlvbid9XHJcblxyXG5cdHN0YXRpYyBnZXQgTGV2ZWwoKXtyZXR1cm4gTGV2ZWx9XHJcbn1cclxuXHJcbmNsYXNzIExldmVsIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHRjb25zdHJ1Y3Rvcih3WG1sKXtcclxuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcclxuXHRcdHRoaXMubGV2ZWw9cGFyc2VJbnQod1htbC5hdHRyKCd3OmlsdmwnKSlcclxuXHR9XHJcblx0cGFyc2UodmlzaXRvcnMpe1xyXG5cdFx0c3VwZXIucGFyc2UoLi4uYXJndW1lbnRzKVxyXG5cdFx0dmFyIHQscHI7XHJcblx0XHRpZih0PXRoaXMud1htbC4kMSgnPnBQcicpKXtcclxuXHRcdFx0cHI9bmV3IChyZXF1aXJlKCcuL3BhcmFncmFwaCcpLlByb3BlcnRpZXMpKHQsdGhpcy53RG9jLHRoaXMpXHJcblx0XHRcdHByLnR5cGU9dGhpcy5sZXZlbCsnICcrcHIudHlwZVxyXG5cdFx0XHRwci5wYXJzZSguLi5hcmd1bWVudHMpXHJcblx0XHR9XHJcblxyXG5cdFx0aWYodD10aGlzLndYbWwuJDEoJz5yUHInKSl7XHJcblx0XHRcdHByPW5ldyBJbmxpbmUuUHJvcGVydGllcyh0LHRoaXMud0RvYyx0aGlzKVxyXG5cdFx0XHRwci50eXBlPXRoaXMubGV2ZWwrJyAnK3ByLnR5cGVcclxuXHRcdFx0cHIucGFyc2UoLi4uYXJndW1lbnRzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGFydCh4KXtcclxuXHRcdHJldHVybiBwYXJzZUludCh4LmF0dHIoJ3c6dmFsJykpXHJcblx0fVxyXG5cdG51bUZtKHgpe1xyXG5cdFx0cmV0dXJuIHguYXR0cigndzp2YWwnKVxyXG5cdH1cclxuXHRsdmxUZXh0KHgpe1xyXG5cdFx0cmV0dXJuIHguYXR0cigndzp2YWwnKVxyXG5cdH1cclxuXHRsdmxKYyh4KXtcclxuXHRcdHJldHVybiB4LmF0dHIoJ3c6dmFsJylcclxuXHR9XHJcblx0bHZsUGljQnVsbGV0SWQoeCl7XHJcblx0XHRyZXR1cm4geC5hdHRyKCd3OnZhbCcpXHJcblx0fVxyXG5cdFxyXG5cdGdldExhYmVsKGluZGV4KXtcclxuXHRcdHN3aXRjaCh0aGlzLnZhbHVlcy5udW1GbSl7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gbmV3IFN0cmluZyh0aGlzLnZhbHVlcy5zdGFydCtpbmRleClcclxuXHRcdH1cclxuXHR9XHJcbi8qIG51bWJlciB0eXBlOlxyXG5kZWNpbWFsXHJcbnVwcGVyUm9tYW5cclxubG93ZXJSb21hblxyXG51cHBlckxldHRlclxyXG5sb3dlckxldHRlclxyXG5vcmRpbmFsXHJcbmNhcmRpbmFsVGV4dFxyXG5vcmRpbmFsVGV4dFxyXG5oZXhcclxuY2hpY2Fnb1xyXG5pZGVvZ3JhcGhEaWdpdGFsXHJcbmphcGFuZXNlQ291bnRpbmdcclxuYWl1ZW9cclxuaXJvaGFcclxuZGVjaW1hbEZ1bGxXaWR0aFxyXG5kZWNpbWFsSGFsZldpZHRoXHJcbmphcGFuZXNlTGVnYWxcclxuamFwYW5lc2VEaWdpdGFsVGVuVGhvdXNhbmRcclxuZGVjaW1hbEVuY2xvc2VkQ2lyY2xlXHJcbmRlY2ltYWxGdWxsV2lkdGgyXHJcbmFpdWVvRnVsbFdpZHRoXHJcbmlyb2hhRnVsbFdpZHRoXHJcbmRlY2ltYWxaZXJvXHJcbmJ1bGxldFxyXG5nYW5hZGFcclxuY2hvc3VuZ1xyXG5kZWNpbWFsRW5jbG9zZWRGdWxsc3RvcFxyXG5kZWNpbWFsRW5jbG9zZWRQYXJlblxyXG5kZWNpbWFsRW5jbG9zZWRDaXJjbGVDaGluZXNlXHJcbmlkZW9ncmFwaEVuY2xvc2VkQ2lyY2xlXHJcbmlkZW9ncmFwaFRyYWRpdGlvbmFsXHJcbmlkZW9ncmFwaFpvZGlhY1xyXG5pZGVvZ3JhcGhab2RpYWNUcmFkaXRpb25hbFxyXG50YWl3YW5lc2VDb3VudGluZ1xyXG5pZGVvZ3JhcGhMZWdhbFRyYWRpdGlvbmFsXHJcbnRhaXdhbmVzZUNvdW50aW5nVGhvdXNhbmRcclxudGFpd2FuZXNlRGlnaXRhbFxyXG5jaGluZXNlQ291bnRpbmdcclxuY2hpbmVzZUxlZ2FsU2ltcGxpZmllZFxyXG5jaGluZXNlQ291bnRpbmdUaG91c2FuZFxyXG5rb3JlYW5EaWdpdGFsXHJcbmtvcmVhbkNvdW50aW5nXHJcbmtvcmVhbkxlZ2FsXHJcbmtvcmVhbkRpZ2l0YWwyXHJcbnZpZXRuYW1lc2VDb3VudGluZ1xyXG5ydXNzaWFuTG93ZXJcclxucnVzc2lhblVwcGVyXHJcbm5vbmVcclxubnVtYmVySW5EYXNoXHJcbmhlYnJldzFcclxuaGVicmV3MlxyXG5hcmFiaWNBbHBoYVxyXG5hcmFiaWNBYmphZFxyXG5oaW5kaVZvd2Vsc1xyXG5oaW5kaUNvbnNvbmFudHNcclxuaGluZGlOdW1iZXJzXHJcbmhpbmRpQ291bnRpbmdcclxudGhhaUxldHRlcnNcclxudGhhaU51bWJlcnNcclxudGhhaUNvdW50aW5nXHJcbiovXHJcbn1cclxuIl19