'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./tool');

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  document parser
 *
 *  @example
 *  Document.load(file)
 *  	.then(doc=>doc.parse([visitors]))
 */
var Document = function () {
	function Document(parts, raw, props) {
		_classCallCheck(this, Document);

		this.parts = parts;
		this.raw = raw;
		this.props = props;
	}

	_createClass(Document, [{
		key: 'getPart',
		value: function getPart(name) {
			return this.parts[name];
		}
	}, {
		key: 'getImagePart',
		value: function getImagePart(name) {
			var part = this.parts[name];
			//cl 180321
			if (!part) return;
			var crc32 = part._data.crc32;
			var buffer = part[_jszip2.default.support.nodebuffer ? 'asNodeBuffer' : 'asArrayBuffer']();
			buffer.crc32 = part._data.crc32 = crc32;
			return buffer;
		}

		/**
   *  parse docx with visitors created from visitor factories one by one
   */

	}, {
		key: 'parse',
		value: function parse(visitorFactories) {}

		/**
   * release resources after parse
   */

	}, {
		key: 'release',
		value: function release() {}

		/**
   *  create parser for a word model
   */

	}, {
		key: 'factory',
		value: function factory(wordXml, docParser, parentParser) {
			if (!this._factory) {
				var a = new this.constructor.Factory();
				this._factory = function () {
					return a.create.apply(a, arguments);
				};
			}
			return this._factory.apply(this, arguments);
		}
	}], [{
		key: 'clone',
		value: function clone(doc) {
			var parts = doc.parts,
			    raw = doc.raw,
			    props = doc.props;

			return new Document(parts, raw, props);
		}
		/**
   *  a helper to load document file
  
   *  @param inputFile {File} - a html input file, or nodejs file
   *  @return {Promise}
   */

	}, {
		key: 'load',
		value: function load(inputFile) {
			var DocumentSelf = this;
			return new Promise(function (resolve, reject) {
				function parse(data) {
					var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

					var raw = new _jszip2.default(data),
					    parts = {};
					raw.filter(function (path, file) {
						parts[path] = file;
					});
					resolve(new DocumentSelf(parts, raw, props));
				}

				if ($.isNode) {
					//node
					if (typeof inputFile == 'string') {
						//file name
						require('fs').readFile(inputFile, function (error, data) {
							if (error) reject(error);else if (data) {
								parse(data, { name: inputFile.split(/[\/\\]/).pop().replace(/\.docx$/i, '') });
							}
						});
					} else {
						parse(inputFile);
					}
				} else {
					//browser
					if (inputFile instanceof Blob) {
						var reader = new FileReader();
						reader.onload = function (e) {
							parse(e.target.result, {
								name: inputFile.name.replace(/\.docx$/i, ''),
								lastModified: inputFile.lastModified,
								size: inputFile.size
							});
						};
						reader.readAsArrayBuffer(inputFile);
					} else {
						parse(inputFile);
					}
				}
			});
		}
	}]);

	return Document;
}();

Document.Factory = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: 'create',
		value: function create(wordXml, docParser, parentParser) {}
	}]);

	return _class;
}();

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsInBhcnRzIiwicmF3IiwicHJvcHMiLCJuYW1lIiwicGFydCIsImNyYzMyIiwiX2RhdGEiLCJidWZmZXIiLCJzdXBwb3J0Iiwibm9kZWJ1ZmZlciIsInZpc2l0b3JGYWN0b3JpZXMiLCJ3b3JkWG1sIiwiZG9jUGFyc2VyIiwicGFyZW50UGFyc2VyIiwiX2ZhY3RvcnkiLCJhIiwiY29uc3RydWN0b3IiLCJGYWN0b3J5IiwiY3JlYXRlIiwiYXJndW1lbnRzIiwiZG9jIiwiaW5wdXRGaWxlIiwiRG9jdW1lbnRTZWxmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImRhdGEiLCJmaWx0ZXIiLCJwYXRoIiwiZmlsZSIsIiQiLCJpc05vZGUiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJlcnJvciIsInNwbGl0IiwicG9wIiwicmVwbGFjZSIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInRhcmdldCIsInJlc3VsdCIsImxhc3RNb2RpZmllZCIsInNpemUiLCJyZWFkQXNBcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsUTtBQUNwQixtQkFBWUMsS0FBWixFQUFrQkMsR0FBbEIsRUFBc0JDLEtBQXRCLEVBQTRCO0FBQUE7O0FBQzNCLE9BQUtGLEtBQUwsR0FBV0EsS0FBWDtBQUNBLE9BQUtDLEdBQUwsR0FBU0EsR0FBVDtBQUNBLE9BQUtDLEtBQUwsR0FBV0EsS0FBWDtBQUNBOzs7OzBCQUNPQyxJLEVBQUs7QUFDWixVQUFPLEtBQUtILEtBQUwsQ0FBV0csSUFBWCxDQUFQO0FBQ0E7OzsrQkFDWUEsSSxFQUFLO0FBQ2pCLE9BQUlDLE9BQUssS0FBS0osS0FBTCxDQUFXRyxJQUFYLENBQVQ7QUFDQTtBQUNBLE9BQUcsQ0FBQ0MsSUFBSixFQUFVO0FBQ1YsT0FBSUMsUUFB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ekI7QUFDQSxNQVZELE1BVU07QUFDTEssWUFBTUwsU0FBTjtBQUNBO0FBQ0Q7QUFFRCxJQXRDTSxDQUFQO0FBdUNBOzs7Ozs7QUFsR21CdEIsUSxDQW9HYmtCLE87Ozs7Ozs7eUJBQ0NOLE8sRUFBU0MsUyxFQUFXQyxZLEVBQWEsQ0FFdkM7Ozs7OztrQkF2R2tCZCxRIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi90b29sXCJcclxuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJ1xyXG5cclxuLyoqXHJcbiAqICBkb2N1bWVudCBwYXJzZXJcclxuICpcclxuICogIEBleGFtcGxlXHJcbiAqICBEb2N1bWVudC5sb2FkKGZpbGUpXHJcbiAqICBcdC50aGVuKGRvYz0+ZG9jLnBhcnNlKFt2aXNpdG9yc10pKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnR7XHJcblx0Y29uc3RydWN0b3IocGFydHMscmF3LHByb3BzKXtcclxuXHRcdHRoaXMucGFydHM9cGFydHNcclxuXHRcdHRoaXMucmF3PXJhd1xyXG5cdFx0dGhpcy5wcm9wcz1wcm9wc1xyXG5cdH1cclxuXHRnZXRQYXJ0KG5hbWUpe1xyXG5cdFx0cmV0dXJuIHRoaXMucGFydHNbbmFtZV1cclxuXHR9XHJcblx0Z2V0SW1hZ2VQYXJ0KG5hbWUpe1xyXG5cdFx0dmFyIHBhcnQ9dGhpcy5wYXJ0c1tuYW1lXVxyXG5cdFx0Ly9jbCAxODAzMjFcclxuXHRcdGlmKCFwYXJ0KSByZXR1cm47XHJcblx0XHR2YXIgY3JjMzI9cGFydC5fZGF0YS5jcmMzMlxyXG5cdFx0dmFyIGJ1ZmZlcj1wYXJ0W0pTWmlwLnN1cHBvcnQubm9kZWJ1ZmZlciA/ICdhc05vZGVCdWZmZXInIDogJ2FzQXJyYXlCdWZmZXInXSgpXHJcblx0XHRidWZmZXIuY3JjMzI9cGFydC5fZGF0YS5jcmMzMj1jcmMzMlxyXG5cdFx0cmV0dXJuIGJ1ZmZlclxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogIHBhcnNlIGRvY3ggd2l0aCB2aXNpdG9ycyBjcmVhdGVkIGZyb20gdmlzaXRvciBmYWN0b3JpZXMgb25lIGJ5IG9uZVxyXG5cdCAqL1xyXG5cdHBhcnNlKHZpc2l0b3JGYWN0b3JpZXMpe1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJlbGVhc2UgcmVzb3VyY2VzIGFmdGVyIHBhcnNlXHJcblx0ICovXHJcblx0cmVsZWFzZSgpe1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqICBjcmVhdGUgcGFyc2VyIGZvciBhIHdvcmQgbW9kZWxcclxuXHQgKi9cclxuXHRmYWN0b3J5KHdvcmRYbWwsIGRvY1BhcnNlciwgcGFyZW50UGFyc2VyKXtcclxuXHRcdGlmKCF0aGlzLl9mYWN0b3J5KXtcclxuXHRcdFx0bGV0IGE9bmV3IHRoaXMuY29uc3RydWN0b3IuRmFjdG9yeVxyXG5cdFx0XHR0aGlzLl9mYWN0b3J5PWZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmV0dXJuIGEuY3JlYXRlKC4uLmFyZ3VtZW50cylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2ZhY3RvcnkoLi4uYXJndW1lbnRzKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGNsb25lKGRvYyl7XHJcblx0XHRsZXQge3BhcnRzLHJhdyxwcm9wc309ZG9jXHJcblx0XHRyZXR1cm4gbmV3IERvY3VtZW50KHBhcnRzLHJhdyxwcm9wcylcclxuXHR9XHJcblx0LyoqXHJcblx0ICogIGEgaGVscGVyIHRvIGxvYWQgZG9jdW1lbnQgZmlsZVxyXG5cclxuXHQgKiAgQHBhcmFtIGlucHV0RmlsZSB7RmlsZX0gLSBhIGh0bWwgaW5wdXQgZmlsZSwgb3Igbm9kZWpzIGZpbGVcclxuXHQgKiAgQHJldHVybiB7UHJvbWlzZX1cclxuXHQgKi9cclxuXHJcblx0c3RhdGljIGxvYWQoaW5wdXRGaWxlKXtcclxuXHRcdHZhciBEb2N1bWVudFNlbGY9dGhpc1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcblx0XHRcdGZ1bmN0aW9uIHBhcnNlKGRhdGEsIHByb3BzPXt9KXtcclxuXHRcdFx0XHR2YXIgcmF3PW5ldyBKU1ppcChkYXRhKSxwYXJ0cz17fVxyXG5cdFx0XHRcdHJhdy5maWx0ZXIoZnVuY3Rpb24ocGF0aCxmaWxlKXtcclxuXHRcdFx0XHRcdHBhcnRzW3BhdGhdPWZpbGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJlc29sdmUobmV3IERvY3VtZW50U2VsZihwYXJ0cyxyYXcscHJvcHMpKVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0aWYoJC5pc05vZGUpey8vbm9kZVxyXG5cdFx0XHRcdGlmKHR5cGVvZiBpbnB1dEZpbGU9PSdzdHJpbmcnKXsvL2ZpbGUgbmFtZVxyXG5cdFx0XHRcdFx0cmVxdWlyZSgnZnMnKS5yZWFkRmlsZShpbnB1dEZpbGUsZnVuY3Rpb24oZXJyb3IsIGRhdGEpe1xyXG5cdFx0XHRcdFx0XHRpZihlcnJvcilcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRlbHNlIGlmKGRhdGEpe1xyXG5cdFx0XHRcdFx0XHRcdHBhcnNlKGRhdGEsIHtuYW1lOmlucHV0RmlsZS5zcGxpdCgvW1xcL1xcXFxdLykucG9wKCkucmVwbGFjZSgvXFwuZG9jeCQvaSwnJyl9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdHBhcnNlKGlucHV0RmlsZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNley8vYnJvd3NlclxyXG5cdFx0XHRcdGlmKGlucHV0RmlsZSBpbnN0YW5jZW9mIEJsb2Ipe1xyXG5cdFx0XHRcdFx0dmFyIHJlYWRlcj1uZXcgRmlsZVJlYWRlcigpO1xyXG5cdFx0XHRcdFx0cmVhZGVyLm9ubG9hZD1mdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdFx0cGFyc2UoZS50YXJnZXQucmVzdWx0LCB7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOmlucHV0RmlsZS5uYW1lLnJlcGxhY2UoL1xcLmRvY3gkL2ksJycpLFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFzdE1vZGlmaWVkOmlucHV0RmlsZS5sYXN0TW9kaWZpZWQsXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplOmlucHV0RmlsZS5zaXplXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihpbnB1dEZpbGUpO1xyXG5cdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdHBhcnNlKGlucHV0RmlsZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0c3RhdGljIEZhY3Rvcnk9Y2xhc3Mge1xyXG5cdFx0Y3JlYXRlKHdvcmRYbWwsIGRvY1BhcnNlciwgcGFyZW50UGFyc2VyKXtcclxuXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==