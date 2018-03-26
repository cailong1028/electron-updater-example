'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('./tool');

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  document parser
 *
 *  @example
 *  Document.load(file)
 *  	.then(doc=>doc.parse([visitors]))
 */
var Document = function () {
	function Document(parts, raw, props) {
		(0, _classCallCheck3.default)(this, Document);

		this.parts = parts;
		this.raw = raw;
		this.props = props;
	}

	(0, _createClass3.default)(Document, [{
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
			return new _promise2.default(function (resolve, reject) {
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
		(0, _classCallCheck3.default)(this, _class);
	}

	(0, _createClass3.default)(_class, [{
		key: 'create',
		value: function create(wordXml, docParser, parentParser) {}
	}]);
	return _class;
}();

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsInBhcnRzIiwicmF3IiwicHJvcHMiLCJuYW1lIiwicGFydCIsImNyYzMyIiwiX2RhdGEiLCJidWZmZXIiLCJzdXBwb3J0Iiwibm9kZWJ1ZmZlciIsInZpc2l0b3JGYWN0b3JpZXMiLCJ3b3JkWG1sIiwiZG9jUGFyc2VyIiwicGFyZW50UGFyc2VyIiwiX2ZhY3RvcnkiLCJhIiwiY29uc3RydWN0b3IiLCJGYWN0b3J5IiwiY3JlYXRlIiwiYXJndW1lbnRzIiwiZG9jIiwiaW5wdXRGaWxlIiwiRG9jdW1lbnRTZWxmIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlIiwiZGF0YSIsImZpbHRlciIsInBhdGgiLCJmaWxlIiwiJCIsImlzTm9kZSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImVycm9yIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlIiwiQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwidGFyZ2V0IiwicmVzdWx0IiwibGFzdE1vZGlmaWVkIiwic2l6ZSIsInJlYWRBc0FycmF5QnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7SUFPcUJBLFE7QUFDcEIsbUJBQVlDLEtBQVosRUFBa0JDLEdBQWxCLEVBQXNCQyxLQUF0QixFQUE0QjtBQUFBOztBQUMzQixPQUFLRixLQUFMLEdBQVdBLEtBQVg7QUFDQSxPQUFLQyxHQUFMLEdBQVNBLEdBQVQ7QUFDQSxPQUFLQyxLQUFMLEdBQVdBLEtBQVg7QUFDQTs7OzswQkFDT0MsSSxFQUFLO0FBQ1osVUFBTyxLQUFLSCxLQUFMLENBQVdHLElBQVgsQ0FBUDtBQUNBOzs7K0JBQ1lBLEksRUFBSztBQUNqQixPQUFJQyxPQUFLLEtBQUtKLEtBQUwsQ0FBV0csSUFBWCxDQUFUO0FBQ0E7QUFDQSxPQUFHLENBQUNDLElBQUosRUFBVTtBQUNWLE9BQUlDLFFBQU1E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LE1BVU07QUFDTEksWUFBTUosU0FBTjtBQUNBO0FBQ0Q7QUFFRCxJQXRDTSxDQUFQO0FBdUNBOzs7OztBQWxHbUJ0QixRLENBb0dia0IsTzs7Ozs7Ozt5QkFDQ04sTyxFQUFTQyxTLEVBQVdDLFksRUFBYSxDQUV2Qzs7Ozs7a0JBdkdrQmQsUSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdG9vbFwiXHJcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCdcclxuXHJcbi8qKlxyXG4gKiAgZG9jdW1lbnQgcGFyc2VyXHJcbiAqXHJcbiAqICBAZXhhbXBsZVxyXG4gKiAgRG9jdW1lbnQubG9hZChmaWxlKVxyXG4gKiAgXHQudGhlbihkb2M9PmRvYy5wYXJzZShbdmlzaXRvcnNdKSlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50e1xyXG5cdGNvbnN0cnVjdG9yKHBhcnRzLHJhdyxwcm9wcyl7XHJcblx0XHR0aGlzLnBhcnRzPXBhcnRzXHJcblx0XHR0aGlzLnJhdz1yYXdcclxuXHRcdHRoaXMucHJvcHM9cHJvcHNcclxuXHR9XHJcblx0Z2V0UGFydChuYW1lKXtcclxuXHRcdHJldHVybiB0aGlzLnBhcnRzW25hbWVdXHJcblx0fVxyXG5cdGdldEltYWdlUGFydChuYW1lKXtcclxuXHRcdHZhciBwYXJ0PXRoaXMucGFydHNbbmFtZV1cclxuXHRcdC8vY2wgMTgwMzIxXHJcblx0XHRpZighcGFydCkgcmV0dXJuO1xyXG5cdFx0dmFyIGNyYzMyPXBhcnQuX2RhdGEuY3JjMzJcclxuXHRcdHZhciBidWZmZXI9cGFydFtKU1ppcC5zdXBwb3J0Lm5vZGVidWZmZXIgPyAnYXNOb2RlQnVmZmVyJyA6ICdhc0FycmF5QnVmZmVyJ10oKVxyXG5cdFx0YnVmZmVyLmNyYzMyPXBhcnQuX2RhdGEuY3JjMzI9Y3JjMzJcclxuXHRcdHJldHVybiBidWZmZXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqICBwYXJzZSBkb2N4IHdpdGggdmlzaXRvcnMgY3JlYXRlZCBmcm9tIHZpc2l0b3IgZmFjdG9yaWVzIG9uZSBieSBvbmVcclxuXHQgKi9cclxuXHRwYXJzZSh2aXNpdG9yRmFjdG9yaWVzKXtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiByZWxlYXNlIHJlc291cmNlcyBhZnRlciBwYXJzZVxyXG5cdCAqL1xyXG5cdHJlbGVhc2UoKXtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiAgY3JlYXRlIHBhcnNlciBmb3IgYSB3b3JkIG1vZGVsXHJcblx0ICovXHJcblx0ZmFjdG9yeSh3b3JkWG1sLCBkb2NQYXJzZXIsIHBhcmVudFBhcnNlcil7XHJcblx0XHRpZighdGhpcy5fZmFjdG9yeSl7XHJcblx0XHRcdGxldCBhPW5ldyB0aGlzLmNvbnN0cnVjdG9yLkZhY3RvcnlcclxuXHRcdFx0dGhpcy5fZmFjdG9yeT1mdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJldHVybiBhLmNyZWF0ZSguLi5hcmd1bWVudHMpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9mYWN0b3J5KC4uLmFyZ3VtZW50cylcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjbG9uZShkb2Mpe1xyXG5cdFx0bGV0IHtwYXJ0cyxyYXcscHJvcHN9PWRvY1xyXG5cdFx0cmV0dXJuIG5ldyBEb2N1bWVudChwYXJ0cyxyYXcscHJvcHMpXHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqICBhIGhlbHBlciB0byBsb2FkIGRvY3VtZW50IGZpbGVcclxuXHJcblx0ICogIEBwYXJhbSBpbnB1dEZpbGUge0ZpbGV9IC0gYSBodG1sIGlucHV0IGZpbGUsIG9yIG5vZGVqcyBmaWxlXHJcblx0ICogIEByZXR1cm4ge1Byb21pc2V9XHJcblx0ICovXHJcblxyXG5cdHN0YXRpYyBsb2FkKGlucHV0RmlsZSl7XHJcblx0XHR2YXIgRG9jdW1lbnRTZWxmPXRoaXNcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG5cdFx0XHRmdW5jdGlvbiBwYXJzZShkYXRhLCBwcm9wcz17fSl7XHJcblx0XHRcdFx0dmFyIHJhdz1uZXcgSlNaaXAoZGF0YSkscGFydHM9e31cclxuXHRcdFx0XHRyYXcuZmlsdGVyKGZ1bmN0aW9uKHBhdGgsZmlsZSl7XHJcblx0XHRcdFx0XHRwYXJ0c1twYXRoXT1maWxlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXNvbHZlKG5ldyBEb2N1bWVudFNlbGYocGFydHMscmF3LHByb3BzKSlcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdGlmKCQuaXNOb2RlKXsvL25vZGVcclxuXHRcdFx0XHRpZih0eXBlb2YgaW5wdXRGaWxlPT0nc3RyaW5nJyl7Ly9maWxlIG5hbWVcclxuXHRcdFx0XHRcdHJlcXVpcmUoJ2ZzJykucmVhZEZpbGUoaW5wdXRGaWxlLGZ1bmN0aW9uKGVycm9yLCBkYXRhKXtcclxuXHRcdFx0XHRcdFx0aWYoZXJyb3IpXHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHRcdFx0XHRcdFx0ZWxzZSBpZihkYXRhKXtcclxuXHRcdFx0XHRcdFx0XHRwYXJzZShkYXRhLCB7bmFtZTppbnB1dEZpbGUuc3BsaXQoL1tcXC9cXFxcXS8pLnBvcCgpLnJlcGxhY2UoL1xcLmRvY3gkL2ksJycpfSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHRwYXJzZShpbnB1dEZpbGUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXsvL2Jyb3dzZXJcclxuXHRcdFx0XHRpZihpbnB1dEZpbGUgaW5zdGFuY2VvZiBCbG9iKXtcclxuXHRcdFx0XHRcdHZhciByZWFkZXI9bmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdFx0XHRcdHJlYWRlci5vbmxvYWQ9ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRcdHBhcnNlKGUudGFyZ2V0LnJlc3VsdCwge1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTppbnB1dEZpbGUubmFtZS5yZXBsYWNlKC9cXC5kb2N4JC9pLCcnKSxcclxuXHRcdFx0XHRcdFx0XHRcdGxhc3RNb2RpZmllZDppbnB1dEZpbGUubGFzdE1vZGlmaWVkLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZTppbnB1dEZpbGUuc2l6ZVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoaW5wdXRGaWxlKTtcclxuXHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHRwYXJzZShpbnB1dEZpbGUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBGYWN0b3J5PWNsYXNzIHtcclxuXHRcdGNyZWF0ZSh3b3JkWG1sLCBkb2NQYXJzZXIsIHBhcmVudFBhcnNlcil7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=