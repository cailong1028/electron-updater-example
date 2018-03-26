"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = docx2html;

var _document = require("../../docx4js/lib/openxml/docx/document.js");

var _document2 = _interopRequireDefault(_document);

var _factory = require("./docx/html/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import docx4js from "docx4js"
function docx2html(file, opt) {
	return _document2.default.load(file).then(function (docx) {
		return docx.parse(_document2.default.createVisitorFactory(_factory2.default, opt));
	}).then();
}

docx2html.parser = _document2.default;
docx2html.converters = _factory2.default;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkb2N4Mmh0bWwiLCJmaWxlIiwib3B0IiwibG9hZCIsInRoZW4iLCJkb2N4IiwicGFyc2UiLCJjcmVhdGVWaXNpdG9yRmFjdG9yeSIsInBhcnNlciIsImNvbnZlcnRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUl3QkEsUzs7QUFIeEI7Ozs7QUFDQTs7Ozs7O0FBRkE7QUFJZSxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QkMsR0FBekIsRUFBNkI7QUFDM0MsUUFBTyxtQkFBUUMsSUFBUixDQUFhRixJQUFiLEVBQ0xHLElBREssQ0FDQTtBQUFBLFNBQU1DLEtBQUtDLEtBQUwsQ0FBVyxtQkFBUUMsb0JBQVIsb0JBQXdDTCxHQUF4QyxDQUFYLENBQU47QUFBQSxFQURBLEVBQ2dFRSxJQURoRSxFQUFQO0FBRUE7O0FBRURKLFVBQVVRLE1BQVY7QUFDQVIsVUFBVVMsVUFBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBkb2N4NGpzIGZyb20gXCJkb2N4NGpzXCJcclxuaW1wb3J0IGRvY3g0anMgZnJvbSBcIi4uLy4uL2RvY3g0anMvbGliL29wZW54bWwvZG9jeC9kb2N1bWVudC5qc1wiXHJcbmltcG9ydCBjb252ZXJ0ZXJzIGZyb20gXCIuL2RvY3gvaHRtbC9mYWN0b3J5XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3gyaHRtbChmaWxlLCBvcHQpe1xyXG5cdHJldHVybiBkb2N4NGpzLmxvYWQoZmlsZSlcclxuXHRcdC50aGVuKGRvY3g9PmRvY3gucGFyc2UoZG9jeDRqcy5jcmVhdGVWaXNpdG9yRmFjdG9yeShjb252ZXJ0ZXJzLG9wdCkpKS50aGVuKClcclxufVxyXG5cclxuZG9jeDJodG1sLnBhcnNlcj1kb2N4NGpzXHJcbmRvY3gyaHRtbC5jb252ZXJ0ZXJzPWNvbnZlcnRlcnNcclxuIl19