// import docx4js from "docx4js"
import docx4js from "../../docx4js/lib/openxml/docx/document.js"
import converters from "./docx/html/factory"

export default function docx2html(file, opt){
	return docx4js.load(file)
		.then(docx=>docx.parse(docx4js.createVisitorFactory(converters,opt))).then()
}

docx2html.parser=docx4js
docx2html.converters=converters
