'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDocument, CSSStyleDeclaration;

var Document = function (_Converter) {
	(0, _inherits3.default)(Document, _Converter);

	function Document() {
		(0, _classCallCheck3.default)(this, Document);
		return (0, _possibleConstructorReturn3.default)(this, (Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).apply(this, arguments));
	}

	(0, _createClass3.default)(Document, [{
		key: 'convert',
		value: function convert() {
			this.doc = this.constructor.create(this.options);
			this.content = this.doc;
			var contentStyle = this.content.style;
			contentStyle.backgroundColor = 'transparent';
			contentStyle.minHeight = '1000px';
			contentStyle.width = '100%';
			contentStyle.paddingTop = '20px';
			contentStyle.overflow = 'auto';

			var style = this.doc.createStyle('*');
			style.margin = '0';
			style.border = '0';
			style.padding = '0';
			style.boxSizing = 'border-box';

			style = this.doc.createStyle('table');
			style.width = '100%';
			style.borderCollapse = 'collapse';
			style.wordBreak = 'break-word';

			style = this.doc.createStyle('section');
			style.margin = 'auto';
			style.backgroundColor = 'white';
			style.color = 'black';
			style.position = 'relative';
			style.zIndex = 0;

			style = this.doc.createStyle('p:empty:before');
			style.content = '""';
			style.display = 'inline-block';

			style = this.doc.createStyle('ul');
			style.listStyle = "none";

			style = this.doc.createStyle('ul>li>p');
			style.position = 'relative';

			style = this.doc.createStyle('ul .marker');
			style.position = 'absolute';

			style = this.doc.createStyle('a');
			style.textDecoration = 'none';

			style = this.doc.createStyle('.unsupported');
			style.outline = "2px red solid";

			style = this.doc.createStyle('.warning');
			style.outline = "1px yellow solid";
			this.convertStyle();
		}
	}, {
		key: 'convertStyle',
		value: function convertStyle() {
			var bgStyle = this.wordModel.getBackgroundStyle();
			if (!bgStyle) return;

			var style = this.doc.createStyle('section');
			switch (typeof bgStyle === 'undefined' ? 'undefined' : (0, _typeof3.default)(bgStyle)) {
				case 'object':
					// fill
					console.warn('not support fill color on document background yet');
					break;
				default:
					style.backgroundColor = bgStyle;
					break;
			}
		}
		/**
  * opt: {
  * 	template: function(style, html, props){ return (html)},
  	extendScript: "http://a.com/a.js"
  	}
  */

	}, {
		key: 'toString',
		value: function toString(opt) {
			return this.doc.toString(opt, this.props);
		}
	}, {
		key: 'release',
		value: function release() {
			this.doc.release();
		}
	}, {
		key: 'asZip',
		value: function asZip(opt) {
			return this.doc.asZip(opt, this.props);
		}
	}, {
		key: 'download',
		value: function download(opt) {
			return this.doc.download(opt, this.props);
		}
		/**
  * opt=extend(toString.opt,{
  	saveImage: function(arrayBuffer, doc.props): promise(url) {},
  	saveHtml: function(){}
  })
  */

	}, {
		key: 'save',
		value: function save(opt) {
			return this.doc.save(opt, this.props);
		}
	}, {
		key: 'tag',
		get: function get() {
			return 'html';
		}
	}], [{
		key: 'create',
		value: function create(opt) {
			var selfConverter = this;
			return function (document) {
				var doc = function browserDoc() {
					var _uid = 0;
					var root = (0, _assign2.default)(document.createElement('div'), {
						id: "A",
						section: null,
						createElement: document.createElement.bind(document),
						createTextNode: document.createTextNode.bind(document),
						createStyleSheet: function createStyleSheet() {
							if (this.stylesheet) return this.stylesheet;
							var elStyle = this.createElement('style');
							this.body.appendChild(elStyle, null);
							return this.stylesheet = elStyle.sheet;
						},
						getStyleText: function getStyleText() {
							var styles = [];
							for (var i = 0, rules = this.stylesheet.cssRules, len = rules.length; i < len; i++) {
								styles.push(rules[i].cssText);
							}return styles.join('\r\n');
						},
						uid: function uid() {
							return this.id + _uid++;
						},
						toString: function toString(opt, props) {
							if (opt && typeof opt.template != "undefined" && $.isFunction(opt.template)) return opt.template(this.getStyleText(), this._html(), props);
							var html = ['<!doctype html>\r\n<html><head><meta charset=utf-8><meta key="generator" value="docx2html"><title>' + (props.name || '') + '</title><style>'];
							html.push(this.getStyleText());
							html.push('</style></head><body>');
							html.push(this._html());
							opt && opt.extendScript && html.push('<script src="' + opt.extendScript + '"></script>');
							html.push('</body><html>');
							return html.join('\r\n');
						},
						_html: function _html() {
							var divs = this.querySelectorAll('p>div, span>div');
							if (divs.length == 0) return this.outerHTML;

							/**
       * illegal <p> <div/> </p>
       * DOM operation directly in onload
       */
							var divcontainer = doc.createElement('div'),
							    uid = 0;
							divcontainer.id = 'divcontainer';
							divcontainer.style.display = "none";
							this.appendChild(divcontainer);
							for (var i = divs.length - 1; i > -1; i--) {
								var div = divs[i],
								    parent = div.parentNode;

								if (!div.id) div.id = '_z' + ++uid;

								if (!parent.id) parent.id = '_y' + uid;

								div.setAttribute('data-parent', parent.id);
								div.setAttribute('data-index', indexOf(div, parent.childNodes));

								divcontainer.appendChild(divs[i]);
							}

							var html = this.outerHTML + '\n\r<script>(' + this._transformer.toString() + ')();</script>';
							this._transformer();
							return html;
						},
						_transformer: function _transformer() {
							var a = document.querySelector('#divcontainer');
							for (var divs = a.childNodes, i = divs.length - 1; i > -1; i--) {
								var div = divs[i],
								    parentId = div.getAttribute('data-parent'),
								    index = parseInt(div.getAttribute('data-index')),
								    parent = document.querySelector('#' + parentId);
								parent.insertBefore(div, parent.childNodes[index]);
							}
							a.parentNode.removeChild(a);
						}
					});

					function indexOf(el, els) {
						for (var i = els.length - 1; i > 0; i--) {
							if (el == els[i]) return i;
						}return 0;
					}

					(opt && opt.container || document.body).appendChild(root);
					root.body = root;
					return root;
				}();

				return function mixin(doc) {
					var stylesheet = doc.createStyleSheet();
					var relStyles = {},
					    styles = {};

					return (0, _assign2.default)(selfConverter[$.isNode ? 'nodefy' : 'browserify'](doc, stylesheet, opt), {
						createStyle: function createStyle(selector) {
							if (styles[selector]) return styles[selector];
							var rules = stylesheet.cssRules,
							    len = rules.length;
							stylesheet.insertRule(selector.split(',').map(function (a) {
								return a.trim()[0] == '#' ? a : '#' + this.id + ' ' + a;
							}.bind(this)).join(',') + '{}', len);
							return styles[selector] = stylesheet.cssRules[len].style;
						},
						stylePath: function stylePath(a, parent) {
							if (parent) return relStyles[a] = parent;
							var paths = [a],
							    parent = a;
							while (parent = relStyles[parent]) {
								paths.unshift(parent);
							}return paths.join(' ');
						},
						release: function release() {
							delete this.section;
							this._release();
						}
					});
				}(doc);
			}($.isNode ? createDocument() : document);
		}
	}, {
		key: 'nodefy',
		value: function nodefy(doc, stylesheet, opt) {
			return (0, _assign2.default)(doc, {
				_release: function _release() {},
				asImageURL: function asImageURL(buffer) {
					if (opt && typeof opt.asImageURL != 'undefined') return opt.asImageURL(buffer);
					return "image://notsupport";
				},
				asZip: function asZip() {
					throw new Error('not support');
				},
				download: function download() {
					throw new Error('not support');
				},
				save: function save() {
					throw new Error('not support');
				}
			});
		}
	}, {
		key: 'browserify',
		value: function browserify(doc, stylesheet, opt) {
			var Proto_Blob = function (a) {
				a = URL.createObjectURL(new Blob()).split('/');
				a.pop();
				return a.join('/');
			}(),
			    Reg_Proto_Blob = new RegExp(Proto_Blob + "/([\\w\\d-]+)", "gi");

			return (0, _assign2.default)(doc, {
				asZip: function asZip(opt, props) {
					var zip = new _jszip2.default(),
					    hasImage = false;
					var f = zip.folder('images');
					(0, _keys2.default)(this.images).forEach(function (a) {
						hasImage = true;
						f.file(a.split('/').pop(), this[a]);
					}, this.images);
					zip.file('props.json', (0, _stringify2.default)(props));
					zip.file('main.html', hasImage ? this.toString(opt).replace(Proto_Blob, 'images') : this.toString());
					return zip;
				},
				download: function download(opt, props) {
					var a = document.createElement("a");
					document.body.appendChild(a);
					a.href = URL.createObjectURL(this.asZip(opt, props).generate({ type: 'blob' }));
					a.download = (props.name || "document") + '.zip';
					a.click();
					URL.revokeObjectURL(a.href);
					document.body.removeChild(a);
				},
				save: function save(opt, props) {
					var hasImage = false,
					    images = {},
					    me = this;
					return $.Deferred.when((this.images && (0, _keys2.default)(this.images) || []).map(function (a) {
						hasImage = true;
						return opt.saveImage(this[a], props).then(function (url) {
							return images[a] = url;
						});
					}, this.images)).then(function () {
						var html = me.toString(opt, props);
						if (hasImage) html = html.replace(Reg_Proto_Blob, function (a, id) {
							return images[a];
						});
						return opt.saveHtml(html, props);
					});
				},

				images: {},
				asImageURL: function asImageURL(arrayBuffer) {
					var url = URL.createObjectURL(new Blob([arrayBuffer], { type: "image/" + (typeof arrayBuffer == 'string' ? 'svg+xml' : '*') }));
					this.images[url] = arrayBuffer;
					return url;
				},
				_release: function _release() {
					(0, _keys2.default)(this.images).forEach(function (b) {
						URL.revokeObjectURL(b);
					});
					delete this.images;
				}
			});
		}
	}]);
	return Document;
}(_converter2.default);

exports.default = Document;


(function (isNode, m) {
	if (!isNode) return;

	createDocument = require(m).jsdom;
	var window = createDocument().defaultView;

	global.btoa = window.btoa;
	CSSStyleDeclaration = window.CSSStyleDeclaration;
})($.isNode, "jsdom");
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N4L2h0bWwvZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiY3JlYXRlRG9jdW1lbnQiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiRG9jdW1lbnQiLCJkb2MiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIm9wdGlvbnMiLCJjb250ZW50IiwiY29udGVudFN0eWxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImNyZWF0ZVN0eWxlIiwibWFyZ2luIiwiYm9yZGVyIiwicGFkZGluZyIsImJveFNpemluZyIsImJvcmRlckNvbGxhcHNlIiwid29yZEJyZWFrIiwiY29sb3IiLCJwb3NpdGlvbiIsInpJbmRleCIsImRpc3BsYXkiLCJsaXN0U3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm91dGxpbmUiLCJjb252ZXJ0U3R5bGUiLCJiZ1N0eWxlIiwid29yZE1vZGVsIiwiZ2V0QmFja2dyb3VuZFN0eWxlIiwiY29uc29sZSIsIndhcm4iLCJvcHQiLCJ0b1N0cmluZyIsInByb3BzIiwicmVsZWFzZSIsImFzWmlwIiwiZG93bmxvYWQiLCJzYXZlIiwic2VsZkNvbnZlcnRlciIsImRvY3VtZW50IiwiYnJvd3NlckRvYyIsInVpZCIsInJvb3QiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzZWN0aW9uIiwiYmluZCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlU3R5bGVTaGVldCIsInN0eWxlc2hlZXQiLCJlbFN0eWxlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2hlZXQiLCJnZXRTdHlsZVRleHQiLCJzdHlsZXMiLCJpIiwicnVsZXMiLCJjc3NSdWxlcyIsImxlbiIsImxlbmd0aCIsInB1c2giLCJjc3NUZXh0Iiwiam9pbiIsInRlbXBsYXRlIiwiJCIsImlzRnVuY3Rpb24iLCJfaHRtbCIsImh0bWwiLCJuYW1lIiwiZXh0ZW5kU2NyaXB0IiwiZGl2cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvdXRlckhUTUwiLCJkaXZjb250YWluZXIiLCJkaXYiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwic2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsImNoaWxkTm9kZXMiLCJfdHJhbnNmb3JtZXIiLCJhIiwicXVlcnlTZWxlY3RvciIsInBhcmVudElkIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXgiLCJwYXJzZUludCIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiZWwiLCJlbHMiLCJjb250YWluZXIiLCJtaXhpbiIsInJlbFN0eWxlcyIsImlzTm9kZSIsInNlbGVjdG9yIiwiaW5zZXJ0UnVsZSIsInNwbGl0IiwibWFwIiwidHJpbSIsInN0eWxlUGF0aCIsInBhdGhzIiwidW5zaGlmdCIsIl9yZWxlYXNlIiwiYXNJbWFnZVVSTCIsImJ1ZmZlciIsIkVycm9yIiwiUHJvdG9fQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJwb3AiLCJSZWdfUHJvdG9fQmxvYiIsIlJlZ0V4cCIsInppcCIsImhhc0ltYWdlIiwiZiIsImZvbGRlciIsImltYWdlcyIsImZvckVhY2giLCJmaWxlIiwicmVwbGFjZSIsImhyZWYiLCJnZW5lcmF0ZSIsInR5cGUiLCJjbGljayIsInJldm9rZU9iamVjdFVSTCIsIm1lIiwiRGVmZXJyZWQiLCJ3aGVuIiwic2F2ZUltYWdlIiwidGhlbiIsInVybCIsInNhdmVIdG1sIiwiYXJyYXlCdWZmZXIiLCJiIiwibSIsInJlcXVpcmUiLCJqc2RvbSIsIndpbmRvdyIsImRlZmF1bHRWaWV3IiwiZ2xvYmFsIiwiYnRvYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsY0FBSixFQUFvQkMsbUJBQXBCOztJQUVxQkMsUTs7Ozs7Ozs7Ozs0QkFHWDtBQUNSLFFBQUtDLEdBQUwsR0FBUyxLQUFLQyxXQUFMLENBQWlCQyxNQUFqQixDQUF3QixLQUFLQyxPQUE3QixD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LHNCQW9DYjhCLFdBcENhLEVBb0NEO0FBQ3RCLFNBQUlGLE1BQUl4QixJQUFJQyxlQUFKLENBQW9CLElBQUlDLElBQUosQ0FBUyxDQUFDd0IsV0FBRCxDQUFULEVBQzNCLEVBQUNWLE1BQUssWUFBVSxPQUFPVSxXQUFQLElBQXFCLFFBQXJCLEdBQWdDLFNBQWhDLEdBQTRDLEdBQXRELENBQU4sRUFEMkIsQ0FBcEIsQ0FBUjtBQUVBLFVBQUtoQixNQUFMLENBQVljLEdBQVosSUFBaUJFLFdBQWpCO0FBQ0EsWUFBT0YsR0FBUDtBQUNBLEtBekN1QjtBQTBDeEI3QixZQTFDd0Isc0JBMENkO0FBQ1QseUJBQVksS0FBS2UsTUFBakIsRUFBeUJDLE9BQXpCLENBQWlDLFVBQVNnQixDQUFULEVBQVc7QUFDM0MzQixVQUFJa0IsZUFBSixDQUFvQlMsQ0FBcEI7QUFDQSxNQUZEO0FBR0EsWUFBTyxLQUFLakIsTUFBWjtBQUNBO0FBL0N1QixJQUFsQixDQUFQO0FBaURBOzs7OztrQkEvU21CekgsUTs7O0FBa1RyQixDQUFDLFVBQVNpRyxNQUFULEVBQWlCMEMsQ0FBakIsRUFBbUI7QUFDbkIsS0FBRyxDQUFDMUMsTUFBSixFQUFZOztBQUVabkcsa0JBQWU4SSxRQUFRRCxDQUFSLEVBQVdFLEtBQTFCO0FBQ0EsS0FBSUMsU0FBT2hKLGlCQUFpQmlKLFdBQTVCOztBQUVBQyxRQUFPQyxJQUFQLEdBQVlILE9BQU9HLElBQW5CO0FBQ0FsSix1QkFBb0IrSSxPQUFPL0ksbUJBQTNCO0FBQ0EsQ0FSRCxFQVFHb0UsRUFBRThCLE1BUkwsRUFRYSxPQVJiIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnZlcnRlciBmcm9tICcuL2NvbnZlcnRlcidcclxuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJ1xyXG5cclxudmFyIGNyZWF0ZURvY3VtZW50LCBDU1NTdHlsZURlY2xhcmF0aW9uXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIENvbnZlcnRlcntcclxuXHRnZXQgdGFnKCl7cmV0dXJuICdodG1sJ31cclxuXHJcblx0Y29udmVydCgpe1xyXG5cdFx0dGhpcy5kb2M9dGhpcy5jb25zdHJ1Y3Rvci5jcmVhdGUodGhpcy5vcHRpb25zKVxyXG5cdFx0dGhpcy5jb250ZW50PXRoaXMuZG9jXHJcblx0XHRsZXQgY29udGVudFN0eWxlPXRoaXMuY29udGVudC5zdHlsZVxyXG5cdFx0Y29udGVudFN0eWxlLmJhY2tncm91bmRDb2xvcj0ndHJhbnNwYXJlbnQnXHJcblx0XHRjb250ZW50U3R5bGUubWluSGVpZ2h0PScxMDAwcHgnXHJcblx0XHRjb250ZW50U3R5bGUud2lkdGg9JzEwMCUnXHJcblx0XHRjb250ZW50U3R5bGUucGFkZGluZ1RvcD0nMjBweCdcclxuXHRcdGNvbnRlbnRTdHlsZS5vdmVyZmxvdz0nYXV0bydcclxuXHJcblx0XHR2YXIgc3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJyonKVxyXG5cdFx0c3R5bGUubWFyZ2luPScwJ1xyXG5cdFx0c3R5bGUuYm9yZGVyPScwJ1xyXG5cdFx0c3R5bGUucGFkZGluZz0nMCdcclxuXHRcdHN0eWxlLmJveFNpemluZz0nYm9yZGVyLWJveCdcclxuXHJcblx0XHRzdHlsZT10aGlzLmRvYy5jcmVhdGVTdHlsZSgndGFibGUnKVxyXG5cdFx0c3R5bGUud2lkdGg9JzEwMCUnXHJcblx0XHRzdHlsZS5ib3JkZXJDb2xsYXBzZT0nY29sbGFwc2UnXHJcblx0XHRzdHlsZS53b3JkQnJlYWs9J2JyZWFrLXdvcmQnXHJcblxyXG5cdFx0c3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJ3NlY3Rpb24nKVxyXG5cdFx0c3R5bGUubWFyZ2luPSdhdXRvJ1xyXG5cdFx0c3R5bGUuYmFja2dyb3VuZENvbG9yPSd3aGl0ZSdcclxuXHRcdHN0eWxlLmNvbG9yPSdibGFjaydcclxuXHRcdHN0eWxlLnBvc2l0aW9uPSdyZWxhdGl2ZSdcclxuXHRcdHN0eWxlLnpJbmRleD0wXHJcblxyXG5cdFx0c3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJ3A6ZW1wdHk6YmVmb3JlJylcclxuXHRcdHN0eWxlLmNvbnRlbnQ9J1wiXCInXHJcblx0XHRzdHlsZS5kaXNwbGF5PSdpbmxpbmUtYmxvY2snXHJcblxyXG5cdFx0c3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJ3VsJylcclxuXHRcdHN0eWxlLmxpc3RTdHlsZT1cIm5vbmVcIlxyXG5cclxuXHRcdHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKCd1bD5saT5wJylcclxuXHRcdHN0eWxlLnBvc2l0aW9uPSdyZWxhdGl2ZSdcclxuXHJcblx0XHRzdHlsZT10aGlzLmRvYy5jcmVhdGVTdHlsZSgndWwgLm1hcmtlcicpXHJcblx0XHRzdHlsZS5wb3NpdGlvbj0nYWJzb2x1dGUnXHJcblxyXG5cdFx0c3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJ2EnKVxyXG5cdFx0c3R5bGUudGV4dERlY29yYXRpb249J25vbmUnXHJcblxyXG5cdFx0c3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJy51bnN1cHBvcnRlZCcpXHJcblx0XHRzdHlsZS5vdXRsaW5lPVwiMnB4IHJlZCBzb2xpZFwiXHJcblxyXG5cdFx0c3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJy53YXJuaW5nJylcclxuXHRcdHN0eWxlLm91dGxpbmU9XCIxcHggeWVsbG93IHNvbGlkXCJcclxuXHRcdHRoaXMuY29udmVydFN0eWxlKClcclxuXHR9XHJcblx0XHJcblx0Y29udmVydFN0eWxlKCl7XHJcblx0XHR2YXIgYmdTdHlsZT10aGlzLndvcmRNb2RlbC5nZXRCYWNrZ3JvdW5kU3R5bGUoKVxyXG5cdFx0aWYoIWJnU3R5bGUpXHJcblx0XHRcdHJldHVyblxyXG5cdFx0XHJcblx0XHR2YXIgc3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUoJ3NlY3Rpb24nKVxyXG5cdFx0c3dpdGNoKHR5cGVvZiBiZ1N0eWxlKXtcclxuXHRcdGNhc2UgJ29iamVjdCc6Ly8gZmlsbFxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ25vdCBzdXBwb3J0IGZpbGwgY29sb3Igb24gZG9jdW1lbnQgYmFja2dyb3VuZCB5ZXQnKVxyXG5cdFx0YnJlYWtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHN0eWxlLmJhY2tncm91bmRDb2xvcj1iZ1N0eWxlXHJcblx0XHRicmVha1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKipcclxuXHQqIG9wdDoge1xyXG5cdCogXHR0ZW1wbGF0ZTogZnVuY3Rpb24oc3R5bGUsIGh0bWwsIHByb3BzKXsgcmV0dXJuIChodG1sKX0sXHJcblx0XHRleHRlbmRTY3JpcHQ6IFwiaHR0cDovL2EuY29tL2EuanNcIlxyXG5cdFx0fVxyXG5cdCovXHJcblx0dG9TdHJpbmcob3B0KXtcclxuXHRcdHJldHVybiB0aGlzLmRvYy50b1N0cmluZyhvcHQsdGhpcy5wcm9wcylcclxuXHR9XHJcblx0cmVsZWFzZSgpe1xyXG5cdFx0dGhpcy5kb2MucmVsZWFzZSgpXHJcblx0fVxyXG5cdGFzWmlwKG9wdCl7XHJcblx0XHRyZXR1cm4gdGhpcy5kb2MuYXNaaXAob3B0LHRoaXMucHJvcHMpXHJcblx0fVxyXG5cdGRvd25sb2FkKG9wdCl7XHJcblx0XHRyZXR1cm4gdGhpcy5kb2MuZG93bmxvYWQob3B0LCB0aGlzLnByb3BzKVxyXG5cdH1cclxuXHQvKipcclxuXHQqIG9wdD1leHRlbmQodG9TdHJpbmcub3B0LHtcclxuXHRcdHNhdmVJbWFnZTogZnVuY3Rpb24oYXJyYXlCdWZmZXIsIGRvYy5wcm9wcyk6IHByb21pc2UodXJsKSB7fSxcclxuXHRcdHNhdmVIdG1sOiBmdW5jdGlvbigpe31cclxuXHR9KVxyXG5cdCovXHJcblx0c2F2ZSAob3B0KXtcclxuXHRcdHJldHVybiB0aGlzLmRvYy5zYXZlKG9wdCwgdGhpcy5wcm9wcylcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUob3B0KXtcclxuXHRcdHZhciBzZWxmQ29udmVydGVyPXRoaXNcclxuXHRcdHJldHVybiAoZnVuY3Rpb24oZG9jdW1lbnQpe1xyXG5cdFx0XHR2YXIgZG9jPShmdW5jdGlvbiBicm93c2VyRG9jKCl7XHJcblx0XHRcdFx0dmFyIHVpZD0wO1xyXG5cdFx0XHRcdHZhciByb290PU9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykse1xyXG5cdFx0XHRcdFx0aWQgOiBcIkFcIixcclxuXHRcdFx0XHRcdHNlY3Rpb246IG51bGwsXHJcblx0XHRcdFx0XHRjcmVhdGVFbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpLFxyXG5cdFx0XHRcdFx0Y3JlYXRlVGV4dE5vZGU6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlLmJpbmQoZG9jdW1lbnQpLFxyXG5cdFx0XHRcdFx0Y3JlYXRlU3R5bGVTaGVldCgpe1xyXG5cdFx0XHRcdFx0XHRpZih0aGlzLnN0eWxlc2hlZXQpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuc3R5bGVzaGVldDtcclxuXHRcdFx0XHRcdFx0dmFyIGVsU3R5bGU9dGhpcy5jcmVhdGVFbGVtZW50KCdzdHlsZScpXHJcblx0XHRcdFx0XHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChlbFN0eWxlLG51bGwpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zdHlsZXNoZWV0PWVsU3R5bGUuc2hlZXRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRnZXRTdHlsZVRleHQoKXtcclxuXHRcdFx0XHRcdFx0dmFyIHN0eWxlcz1bXVxyXG5cdFx0XHRcdFx0XHRmb3IodmFyIGk9MCwgcnVsZXM9dGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLCBsZW49cnVsZXMubGVuZ3RoO2k8bGVuO2krKylcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMucHVzaChydWxlc1tpXS5jc3NUZXh0KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gc3R5bGVzLmpvaW4oJ1xcclxcbicpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dWlkKCl7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmlkKyh1aWQrKylcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0b1N0cmluZyhvcHQsIHByb3BzKXtcclxuXHRcdFx0XHRcdFx0aWYob3B0ICYmIHR5cGVvZiBvcHQudGVtcGxhdGUhPVwidW5kZWZpbmVkXCIgJiYgJC5pc0Z1bmN0aW9uKG9wdC50ZW1wbGF0ZSkpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG9wdC50ZW1wbGF0ZSh0aGlzLmdldFN0eWxlVGV4dCgpLCB0aGlzLl9odG1sKCksIHByb3BzKVxyXG5cdFx0XHRcdFx0XHR2YXIgaHRtbD1bJzwhZG9jdHlwZSBodG1sPlxcclxcbjxodG1sPjxoZWFkPjxtZXRhIGNoYXJzZXQ9dXRmLTg+PG1ldGEga2V5PVwiZ2VuZXJhdG9yXCIgdmFsdWU9XCJkb2N4Mmh0bWxcIj48dGl0bGU+JysocHJvcHMubmFtZXx8JycpKyc8L3RpdGxlPjxzdHlsZT4nXVxyXG5cdFx0XHRcdFx0XHRodG1sLnB1c2godGhpcy5nZXRTdHlsZVRleHQoKSlcclxuXHRcdFx0XHRcdFx0aHRtbC5wdXNoKCc8L3N0eWxlPjwvaGVhZD48Ym9keT4nKVxyXG5cdFx0XHRcdFx0XHRodG1sLnB1c2godGhpcy5faHRtbCgpKVxyXG5cdFx0XHRcdFx0XHRvcHQgJiYgb3B0LmV4dGVuZFNjcmlwdCAmJiBodG1sLnB1c2goJzxzY3JpcHQgc3JjPVwiJytvcHQuZXh0ZW5kU2NyaXB0KydcIj48L3NjcmlwdD4nKVxyXG5cdFx0XHRcdFx0XHRodG1sLnB1c2goJzwvYm9keT48aHRtbD4nKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaHRtbC5qb2luKCdcXHJcXG4nKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdF9odG1sKCl7XHJcblx0XHRcdFx0XHRcdHZhciBkaXZzPXRoaXMucXVlcnlTZWxlY3RvckFsbCgncD5kaXYsIHNwYW4+ZGl2JylcclxuXHRcdFx0XHRcdFx0aWYoZGl2cy5sZW5ndGg9PTApXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3V0ZXJIVE1MXHJcblxyXG5cdFx0XHRcdFx0XHQvKipcclxuXHRcdFx0XHRcdFx0KiBpbGxlZ2FsIDxwPiA8ZGl2Lz4gPC9wPlxyXG5cdFx0XHRcdFx0XHQqIERPTSBvcGVyYXRpb24gZGlyZWN0bHkgaW4gb25sb2FkXHJcblx0XHRcdFx0XHRcdCovXHJcblx0XHRcdFx0XHRcdHZhciBkaXZjb250YWluZXI9ZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB1aWQ9MFxyXG5cdFx0XHRcdFx0XHRkaXZjb250YWluZXIuaWQ9J2RpdmNvbnRhaW5lcidcclxuXHRcdFx0XHRcdFx0ZGl2Y29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZChkaXZjb250YWluZXIpXHJcblx0XHRcdFx0XHRcdGZvcih2YXIgaT1kaXZzLmxlbmd0aC0xO2k+LTE7aS0tKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZGl2PWRpdnNbaV0sXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnQ9ZGl2LnBhcmVudE5vZGU7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKCFkaXYuaWQpXHJcblx0XHRcdFx0XHRcdFx0XHRkaXYuaWQ9J196JysoKyt1aWQpXHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKCFwYXJlbnQuaWQpXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnQuaWQ9J195Jyt1aWRcclxuXHJcblx0XHRcdFx0XHRcdFx0ZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnLHBhcmVudC5pZClcclxuXHRcdFx0XHRcdFx0XHRkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyxpbmRleE9mKGRpdixwYXJlbnQuY2hpbGROb2RlcykpXHJcblxyXG5cdFx0XHRcdFx0XHRcdGRpdmNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZzW2ldKVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaHRtbD10aGlzLm91dGVySFRNTCsnXFxuXFxyPHNjcmlwdD4oJyt0aGlzLl90cmFuc2Zvcm1lci50b1N0cmluZygpKycpKCk7PC9zY3JpcHQ+J1xyXG5cdFx0XHRcdFx0XHR0aGlzLl90cmFuc2Zvcm1lcigpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaHRtbFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdF90cmFuc2Zvcm1lcigpe1xyXG5cdFx0XHRcdFx0XHR2YXIgYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGl2Y29udGFpbmVyJylcclxuXHRcdFx0XHRcdFx0Zm9yKHZhciBkaXZzPWEuY2hpbGROb2RlcywgaT1kaXZzLmxlbmd0aC0xO2k+LTE7aS0tKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZGl2PWRpdnNbaV0sXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRJZD1kaXYuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg9cGFyc2VJbnQoZGl2LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSxcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJytwYXJlbnRJZCk7XHJcblx0XHRcdFx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShkaXYscGFyZW50LmNoaWxkTm9kZXNbaW5kZXhdKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiBpbmRleE9mKGVsLCBlbHMpe1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBpPWVscy5sZW5ndGgtMTtpPjA7aS0tKVxyXG5cdFx0XHRcdFx0XHRpZihlbD09ZWxzW2ldKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpXHJcblx0XHRcdFx0XHRyZXR1cm4gMFxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0KG9wdCAmJiBvcHQuY29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHJvb3QpO1xyXG5cdFx0XHRcdHJvb3QuYm9keT1yb290XHJcblx0XHRcdFx0cmV0dXJuIHJvb3RcclxuXHRcdFx0fSkoKTtcclxuXHJcblx0XHRcdHJldHVybiAoZnVuY3Rpb24gbWl4aW4oZG9jKXtcclxuXHRcdFx0XHR2YXIgc3R5bGVzaGVldD1kb2MuY3JlYXRlU3R5bGVTaGVldCgpXHJcblx0XHRcdFx0dmFyIHJlbFN0eWxlcz17fSwgc3R5bGVzPXt9XHJcblxyXG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHNlbGZDb252ZXJ0ZXJbJC5pc05vZGUgPyAnbm9kZWZ5JyA6ICdicm93c2VyaWZ5J10oZG9jLHN0eWxlc2hlZXQsIG9wdCkse1xyXG5cdFx0XHRcdFx0Y3JlYXRlU3R5bGUoc2VsZWN0b3Ipe1xyXG5cdFx0XHRcdFx0XHRpZihzdHlsZXNbc2VsZWN0b3JdKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdHlsZXNbc2VsZWN0b3JdXHJcblx0XHRcdFx0XHRcdHZhciBydWxlcz1zdHlsZXNoZWV0LmNzc1J1bGVzLGxlbj1ydWxlcy5sZW5ndGhcclxuXHRcdFx0XHRcdFx0c3R5bGVzaGVldC5pbnNlcnRSdWxlKHNlbGVjdG9yLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKGEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGEudHJpbSgpWzBdPT0nIycgPyBhIDogJyMnK3RoaXMuaWQrJyAnK2FcclxuXHRcdFx0XHRcdFx0XHR9LmJpbmQodGhpcykpLmpvaW4oJywnKSsne30nLGxlbilcclxuXHRcdFx0XHRcdFx0cmV0dXJuICBzdHlsZXNbc2VsZWN0b3JdPXN0eWxlc2hlZXQuY3NzUnVsZXNbbGVuXS5zdHlsZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN0eWxlUGF0aChhLCBwYXJlbnQpe1xyXG5cdFx0XHRcdFx0XHRpZihwYXJlbnQpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlbFN0eWxlc1thXT1wYXJlbnRcclxuXHRcdFx0XHRcdFx0dmFyIHBhdGhzPVthXSxwYXJlbnQ9YVxyXG5cdFx0XHRcdFx0XHR3aGlsZShwYXJlbnQ9cmVsU3R5bGVzW3BhcmVudF0pXHJcblx0XHRcdFx0XHRcdFx0cGF0aHMudW5zaGlmdChwYXJlbnQpXHJcblx0XHRcdFx0XHRcdHJldHVybiBwYXRocy5qb2luKCcgJylcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRyZWxlYXNlKCl7XHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLnNlY3Rpb25cclxuXHRcdFx0XHRcdFx0dGhpcy5fcmVsZWFzZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSkoZG9jKVxyXG5cdFx0fSkoJC5pc05vZGUgPyBjcmVhdGVEb2N1bWVudCgpIDogZG9jdW1lbnQpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbm9kZWZ5KGRvYywgc3R5bGVzaGVldCwgb3B0KXtcclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKGRvYyx7XHJcblx0XHRcdF9yZWxlYXNlKCl7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc0ltYWdlVVJMKGJ1ZmZlcil7XHJcblx0XHRcdFx0aWYob3B0ICYmIHR5cGVvZihvcHQuYXNJbWFnZVVSTCkhPSd1bmRlZmluZWQnKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG9wdC5hc0ltYWdlVVJMKGJ1ZmZlcilcclxuXHRcdFx0XHRyZXR1cm4gXCJpbWFnZTovL25vdHN1cHBvcnRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc1ppcCgpe1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignbm90IHN1cHBvcnQnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb3dubG9hZCgpe1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignbm90IHN1cHBvcnQnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzYXZlKCl7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdub3Qgc3VwcG9ydCcpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYnJvd3NlcmlmeShkb2MsIHN0eWxlc2hlZXQsIG9wdCl7XHJcblx0XHR2YXIgUHJvdG9fQmxvYj0oZnVuY3Rpb24oYSl7XHJcblx0XHRcdFx0YT1VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKCkpLnNwbGl0KCcvJyk7XHJcblx0XHRcdFx0YS5wb3AoKTtcclxuXHRcdFx0XHRyZXR1cm4gYS5qb2luKCcvJylcclxuXHRcdFx0fSkoKSxcclxuXHRcdFx0UmVnX1Byb3RvX0Jsb2I9bmV3IFJlZ0V4cChQcm90b19CbG9iK1wiLyhbXFxcXHdcXFxcZC1dKylcIixcImdpXCIpO1xyXG5cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKGRvYyx7XHJcblx0XHRcdGFzWmlwKG9wdCwgcHJvcHMpe1xyXG5cdFx0XHRcdHZhciB6aXA9bmV3IEpTWmlwKCksaGFzSW1hZ2U9ZmFsc2U7XHJcblx0XHRcdFx0dmFyIGY9emlwLmZvbGRlcignaW1hZ2VzJylcclxuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLmltYWdlcykuZm9yRWFjaChmdW5jdGlvbihhKXtcclxuXHRcdFx0XHRcdGhhc0ltYWdlPXRydWVcclxuXHRcdFx0XHRcdGYuZmlsZShhLnNwbGl0KCcvJykucG9wKCksdGhpc1thXSlcclxuXHRcdFx0XHR9LHRoaXMuaW1hZ2VzKVxyXG5cdFx0XHRcdHppcC5maWxlKCdwcm9wcy5qc29uJyxKU09OLnN0cmluZ2lmeShwcm9wcykpO1xyXG5cdFx0XHRcdHppcC5maWxlKCdtYWluLmh0bWwnLGhhc0ltYWdlID8gdGhpcy50b1N0cmluZyhvcHQpLnJlcGxhY2UoUHJvdG9fQmxvYiwnaW1hZ2VzJykgOiB0aGlzLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0cmV0dXJuIHppcFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb3dubG9hZChvcHQsIHByb3BzKXtcclxuXHRcdFx0XHR2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSlcclxuXHRcdFx0XHRhLmhyZWY9VVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmFzWmlwKG9wdCxwcm9wcykuZ2VuZXJhdGUoe3R5cGU6J2Jsb2InfSkpXHJcblx0XHRcdFx0YS5kb3dubG9hZD0ocHJvcHMubmFtZXx8XCJkb2N1bWVudFwiKSsnLnppcCdcclxuXHRcdFx0XHRhLmNsaWNrKClcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKGEuaHJlZilcclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNhdmUob3B0LCBwcm9wcyl7XHJcblx0XHRcdFx0dmFyIGhhc0ltYWdlPWZhbHNlLCBpbWFnZXM9e30sIG1lPXRoaXM7XHJcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQud2hlbigodGhpcy5pbWFnZXMgJiYgT2JqZWN0LmtleXModGhpcy5pbWFnZXMpfHxbXSkubWFwKGZ1bmN0aW9uKGEpe1xyXG5cdFx0XHRcdFx0aGFzSW1hZ2U9dHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuIG9wdC5zYXZlSW1hZ2UodGhpc1thXSxwcm9wcylcclxuXHRcdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24odXJsKXtyZXR1cm4gaW1hZ2VzW2FdPXVybH0pXHJcblx0XHRcdFx0fSx0aGlzLmltYWdlcykpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHZhciBodG1sPW1lLnRvU3RyaW5nKG9wdCwgcHJvcHMpO1xyXG5cdFx0XHRcdFx0aWYoaGFzSW1hZ2UpXHJcblx0XHRcdFx0XHRcdGh0bWw9aHRtbC5yZXBsYWNlKFJlZ19Qcm90b19CbG9iLGZ1bmN0aW9uKGEsaWQpe3JldHVybiBpbWFnZXNbYV19KTtcclxuXHRcdFx0XHRcdHJldHVybiBvcHQuc2F2ZUh0bWwoaHRtbCwgcHJvcHMpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0aW1hZ2VzOnt9LFxyXG5cdFx0XHRhc0ltYWdlVVJMKGFycmF5QnVmZmVyKXtcclxuXHRcdFx0XHR2YXIgdXJsPVVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2FycmF5QnVmZmVyXSxcclxuXHRcdFx0XHRcdHt0eXBlOlwiaW1hZ2UvXCIrKHR5cGVvZihhcnJheUJ1ZmZlcik9PSdzdHJpbmcnID8gJ3N2Zyt4bWwnIDogJyonKX0pKTtcclxuXHRcdFx0XHR0aGlzLmltYWdlc1t1cmxdPWFycmF5QnVmZmVyXHJcblx0XHRcdFx0cmV0dXJuIHVybFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRfcmVsZWFzZSgpe1xyXG5cdFx0XHRcdE9iamVjdC5rZXlzKHRoaXMuaW1hZ2VzKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe1xyXG5cdFx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChiKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuaW1hZ2VzXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG4oZnVuY3Rpb24oaXNOb2RlLCBtKXtcclxuXHRpZighaXNOb2RlKVx0cmV0dXJuO1xyXG5cclxuXHRjcmVhdGVEb2N1bWVudD1yZXF1aXJlKG0pLmpzZG9tXHJcblx0bGV0IHdpbmRvdz1jcmVhdGVEb2N1bWVudCgpLmRlZmF1bHRWaWV3XHJcblxyXG5cdGdsb2JhbC5idG9hPXdpbmRvdy5idG9hXHJcblx0Q1NTU3R5bGVEZWNsYXJhdGlvbj13aW5kb3cuQ1NTU3R5bGVEZWNsYXJhdGlvblxyXG59KSgkLmlzTm9kZSwgXCJqc2RvbVwiKVxyXG4iXX0=