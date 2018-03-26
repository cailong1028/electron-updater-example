"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var part = function () {
	function part(name, doc) {
		(0, _classCallCheck3.default)(this, part);

		this.name = name;
		this.doc = doc;
		this.documentElement = doc.parts[name] && $.parseXML(doc.parts[name].asText()).documentElement;
		this.rels = {};

		var folder = "",
		    relName = "_rels/" + name + ".rels",
		    i = name.lastIndexOf('/');
		if (i !== -1) {
			folder = name.substring(0, i);
			relName = folder + "/_rels/" + name.substring(i + 1) + ".rels";
		}

		if (!doc.parts[relName]) return;
		this.relName = relName;
		//console.log("part:"+name+",relName:"+relName+",folder:"+folder+", text:"+doc.parts[relName].asText())
		$.parseXML(doc.parts[relName].asText()).documentElement.$("Relationship").asArray().forEach(function (a, i) {
			this.rels[a.getAttribute('Id')] = {
				type: a.getAttribute('Type').split('/').pop(),
				targetMode: a.getAttribute('TargetMode'),
				target: (a.getAttribute('TargetMode') != "External" ? folder ? folder + "/" : '' : '') + a.getAttribute('Target') };
		}, this);
	}

	(0, _createClass3.default)(part, [{
		key: "getRel",
		value: function getRel(id) {
			var rel = this.rels[id];
			if (rel.targetMode == 'External') return rel.target;
			switch (rel.type) {
				case 'image':
					return this.doc.getImagePart(rel.target);
				default:
					return this.doc.getPart(rel.target);
			}
		}
	}], [{
		key: "is",
		value: function is(o) {
			return o && o.getRel;
		}
	}]);
	return part;
}();

exports.default = part;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVueG1sL3BhcnQuanMiXSwibmFtZXMiOlsicGFydCIsIm5hbWUiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJ0cyIsIiQiLCJwYXJzZVhNTCIsImFzVGV4dCIsInJlbHMiLCJmb2xkZXIiLCJyZWxOYW1lIiwiaSIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwiYXNBcnJheSIsImZvckVhY2giLCJhIiwiZ2V0QXR0cmlidXRlIiwidHlwZSIsInNwbGl0IiwicG9wIiwidGFyZ2V0TW9kZSIsInRhcmdldCIsImlkIiwicmVsIiwiZ2V0SW1hZ2VQYXJ0IiwiZ2V0UGFydCIsIm8iLCJnZXRSZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7QUFDcEIsZUFBWUMsSUFBWixFQUFpQkMsR0FBakIsRUFBcUI7QUFBQTs7QUFDcEIsT0FBS0QsSUFBTCxHQUFVQSxJQUFWO0FBQ0EsT0FBS0MsR0FBTCxHQUFTQSxHQUFUO0FBQ0EsT0FBS0MsZUFBTCxHQUFxQkQsSUFBSUUsS0FBSixDQUFVSCxJQUFWLEtBQW1CSSxFQUFFQyxRQUFGLENBQVdKLElBQUlFLEtBQUosQ0FBVUgsSUFBVixFQUFnQk0sTUFBaEIsRUFBWCxFQUFxQ0osZUFBN0U7QUFDQSxPQUFLSyxJQUFMLEdBQVUsRUFBVjs7QUFFQSxNQUFJQyxTQUFPLEVBQVg7QUFBQSxNQUNDQyxVQUFRLFdBQVNULElBQVQsR0FBYyxPQUR2QjtBQUFBLE1BRUNVLElBQUVWLEtBQUtXLFdBQUwsQ0FBaUIsR0FBakIsQ0FGSDtBQUdBLE1BQUdELE1BQUksQ0FBQyxDQUFSLEVBQVU7QUFDVEYsWUFBT1IsS0FBS1ksU0FBTCxDQUFlLENBQWYsRUFBaUJGLENBQWpCLENBQVA7QUFDQUQsYUFBUUQsU0FBTyxTQUFQLEdBQWlCUixLQUFLWSxTQUFMLENBQWVGLElBQUUsQ0FBakIsQ0FBakIsR0FBcUMsT0FBN0M7QUFDQTs7QUFFRCxNQUFHLENBQUNULElBQUlFLEtBQUosQ0FBVU0sT0FBVixDQUFKLEVBQXdCO0FBQ3hCLE9BQUtBLE9BQUwsR0FBYUEsT0FBYjtBQUNBO0FBQ0FMLElBQUVDLFFBQUYsQ0FBV0osSUFBSUUsS0FBSixDQUFVTSxPQUFWLEVBQW1CSCxNQUFuQixFQUFYLEVBQ0VKLGVBREYsQ0FFRUUsQ0FGRixDQUVJLGNBRkosRUFHRVMsT0FIRixHQUlFQyxPQUpGLENBSVUsVUFBU0MsQ0FBVCxFQUFZTCxDQUFaLEVBQWM7QUFDdEIsUUFBS0gsSUFBTCxDQUFVUSxFQUFFQyxZQUFGLENBQWUsSUFBZixDQUFWLElBQWdDO0FBQy9CQyxVQUFLRixFQUFFQyxZQUFGLENBQWUsTUFBZixFQUF1QkUsS0FBdkIsQ0FBNkIsR0FBN0IsRUFBa0NDLEdBQWxDLEVBRDBCO0FBRS9CQyxnQkFBWUwsRUFBRUMsWUFBRixDQUFlLFlBQWYsQ0FGbUI7QUFHL0JLLFlBQU8sQ0FBQ04sRUFBRUMsWUFBRixDQUFlLFlBQWYsS0FBOEIsVUFBOUIsR0FBNENSLFNBQVVBLFNBQU8sR0FBakIsR0FBd0IsRUFBcEUsR0FBMEUsRUFBM0UsSUFBK0VPLEVBQUVDLFlBQUYsQ0FBZSxRQUFmLENBSHZELEVBQWhDO0FBSUEsR0FURixFQVNHLElBVEg7QUFVQTs7Ozt5QkFDTU0sRSxFQUFHO0FBQ1QsT0FBSUMsTUFBSSxLQUFLaEIsSUFBTCxDQUFVZSxFQUFWLENBQVI7QUFDQSxPQUFHQyxJQUFJSCxVQUFKLElBQWdCLFVBQW5CLEVBQ0MsT0FBT0csSUFBSUYsTUFBWDtBQUNELFdBQU9FLElBQUlOLElBQVg7QUFDQSxTQUFLLE9BQUw7QUFDQyxZQUFPLEtBQUtoQixHQUFMLENBQVN1QixZQUFULENBQXNCRCxJQUFJRixNQUExQixDQUFQO0FBQ0Q7QUFDQyxZQUFPLEtBQUtwQixHQUFMLENBQVN3QixPQUFULENBQWlCRixJQUFJRixNQUFyQixDQUFQO0FBSkQ7QUFNQTs7O3FCQUVTSyxDLEVBQUU7QUFDWCxVQUFPQSxLQUFLQSxFQUFFQyxNQUFkO0FBQ0E7Ozs7O2tCQTNDbUI1QixJIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBwYXJ0e1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsZG9jKXtcclxuXHRcdHRoaXMubmFtZT1uYW1lXHJcblx0XHR0aGlzLmRvYz1kb2NcclxuXHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50PWRvYy5wYXJ0c1tuYW1lXSAmJiAkLnBhcnNlWE1MKGRvYy5wYXJ0c1tuYW1lXS5hc1RleHQoKSkuZG9jdW1lbnRFbGVtZW50XHJcblx0XHR0aGlzLnJlbHM9e31cclxuXHJcblx0XHR2YXIgZm9sZGVyPVwiXCIsXHJcblx0XHRcdHJlbE5hbWU9XCJfcmVscy9cIituYW1lK1wiLnJlbHNcIixcclxuXHRcdFx0aT1uYW1lLmxhc3RJbmRleE9mKCcvJyk7XHJcblx0XHRpZihpIT09LTEpe1xyXG5cdFx0XHRmb2xkZXI9bmFtZS5zdWJzdHJpbmcoMCxpKVxyXG5cdFx0XHRyZWxOYW1lPWZvbGRlcitcIi9fcmVscy9cIituYW1lLnN1YnN0cmluZyhpKzEpK1wiLnJlbHNcIjtcclxuXHRcdH1cclxuXHJcblx0XHRpZighZG9jLnBhcnRzW3JlbE5hbWVdKSByZXR1cm47XHJcblx0XHR0aGlzLnJlbE5hbWU9cmVsTmFtZVxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcInBhcnQ6XCIrbmFtZStcIixyZWxOYW1lOlwiK3JlbE5hbWUrXCIsZm9sZGVyOlwiK2ZvbGRlcitcIiwgdGV4dDpcIitkb2MucGFydHNbcmVsTmFtZV0uYXNUZXh0KCkpXHJcblx0XHQkLnBhcnNlWE1MKGRvYy5wYXJ0c1tyZWxOYW1lXS5hc1RleHQoKSlcclxuXHRcdFx0LmRvY3VtZW50RWxlbWVudFxyXG5cdFx0XHQuJChcIlJlbGF0aW9uc2hpcFwiKVxyXG5cdFx0XHQuYXNBcnJheSgpXHJcblx0XHRcdC5mb3JFYWNoKGZ1bmN0aW9uKGEsIGkpe1xyXG5cdFx0XHRcdHRoaXMucmVsc1thLmdldEF0dHJpYnV0ZSgnSWQnKV09e1xyXG5cdFx0XHRcdFx0dHlwZTphLmdldEF0dHJpYnV0ZSgnVHlwZScpLnNwbGl0KCcvJykucG9wKCksXHJcblx0XHRcdFx0XHR0YXJnZXRNb2RlOiBhLmdldEF0dHJpYnV0ZSgnVGFyZ2V0TW9kZScpLFxyXG5cdFx0XHRcdFx0dGFyZ2V0OihhLmdldEF0dHJpYnV0ZSgnVGFyZ2V0TW9kZScpIT1cIkV4dGVybmFsXCIgPyAoZm9sZGVyID8gKGZvbGRlcitcIi9cIikgOiAnJykgOiAnJykrYS5nZXRBdHRyaWJ1dGUoJ1RhcmdldCcpfVxyXG5cdFx0XHR9LHRoaXMpXHJcblx0fVxyXG5cdGdldFJlbChpZCl7XHJcblx0XHR2YXIgcmVsPXRoaXMucmVsc1tpZF1cclxuXHRcdGlmKHJlbC50YXJnZXRNb2RlPT0nRXh0ZXJuYWwnKVxyXG5cdFx0XHRyZXR1cm4gcmVsLnRhcmdldFxyXG5cdFx0c3dpdGNoKHJlbC50eXBlKXtcclxuXHRcdGNhc2UgJ2ltYWdlJzpcclxuXHRcdFx0cmV0dXJuIHRoaXMuZG9jLmdldEltYWdlUGFydChyZWwudGFyZ2V0KVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHRoaXMuZG9jLmdldFBhcnQocmVsLnRhcmdldClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpcyhvKXtcclxuXHRcdHJldHVybiBvICYmIG8uZ2V0UmVsXHJcblx0fVxyXG59XHJcbiJdfQ==