// import docx4js from "docx4js"
import docx4js from "../../docx4js/lib/openxml/docx/document.js"
import converters from "./docx/html/factory"

function docx2html(file, opt){
	return docx4js.load(file)
		.then(docx=>docx.parse(docx4js.createVisitorFactory(converters,opt))).then()
}

docx2html.parser=docx4js
docx2html.converters=converters

/***************************************************/

const os = require('os');
const path = require('path');
const fs = require('fs');

//级联生成目录
function mkdirP(dirPath){
    const absolutePath = path.resolve(dirPath); //resolve路径
    const normalizedPath = path.normalize(absolutePath); //normalize路径
    if(!fs.existsSync(normalizedPath)){ //existsSync 判断路径是否存在
        let parentPath;
        if('win32' === process.platform){ //process.platform 等同于 os.platform 判断操作系统类型
            parentPath = normalizedPath.substring(0, normalizedPath.lastIndexOf('\\'));
        }else{
            parentPath = normalizedPath.substring(0, normalizedPath.lastIndexOf('/'));
        }

        if(fs.existsSync(parentPath)){ //existsSync 判断父级路径是否存在
            const state = fs.lstatSync(parentPath); // lstatSync 获取stat对象 (lstat和stat以及fstat的区别)
            if(!state.isDirectory()){ //stat.isDirectory() 父级是否为路径
                throw new Error(parentPath+' already exists and is not a directory'); //父级存在但不是路径，不允许
            }
            return fs.mkdirSync(normalizedPath); //mkdirSync 父级存在，直接创建子路径
        }
        mkdirP(parentPath); //以父级路径为子路径，继续上次判断
        return fs.mkdirSync(normalizedPath);//mkdirSync 创建本次路径
    }
}
//遍历目录和文件
function iteratorDir(dirPath, options){
    const absolutePath = path.resolve(dirPath);
    options = Object.assign({},{
        whenFile: (path) => {
            // console.log(path)
        },
        whenDirectory: (path) => {
            // console.log(path)
        },
        afterDirectory: (path) => {
            // console.log('after '+path);
        }
    }, options);
    _iteratorDir(absolutePath, options);
    function _iteratorDir(dirPath, options){
        if(!fs.existsSync(dirPath)) throw new Error(dirPath+' not exists');
        const state = fs.lstatSync(dirPath);
        if(state.isFile()){ //isFile() 是否为文件
            options.whenFile(dirPath);
        }else if(state.isDirectory()){
            options.whenDirectory(dirPath);
            const children = fs.readdirSync(dirPath); //readdir 读取目录下所有的目录和文件
            for(let i = 0; i < children.length; i++){
                const currPath = path.resolve(dirPath, children[i]);
                const state = fs.lstatSync(currPath);
                if(state.isDirectory()){
                    _iteratorDir(currPath, options);
                }else if(state.isFile()){
                    options.whenFile(currPath);
                }else{
                    //TODO not directory and file
                }
            }
            options.afterDirectory(dirPath);
        }else {
            //TODO not directory and file
        }
    }
}
//级联删除目录和文件
function rmP(dirPath){
    iteratorDir(dirPath, {
        whenFile(path){
            fs.unlinkSync(path);//unlink(path) 删除文件
        },
        whenDirectory(path){
            console.log(path);
        },
        afterDirectory(path){
            fs.rmdirSync(path); //rmdir 删除目录，前提是空目录
        }
    });
}

export default function convert(filePath, config){
    config = Object.assign({}, {
        htmlFileSuffix:'.html',
        outPut: path.resolve(os.homedir(), 'bqj-screenshot'),
        asImageURL: (buffer)=>{
            var now = new Date().getTime();
            var pngPath = path.resolve(htmlDirPath, now + '.png');
            fs.writeFileSync(pngPath, buffer);
            if (buffer) {
                return now + '.png';
            }
            return "image://notsupport";
        }
    }, config || {});
    filePath = path.normalize(path.resolve(filePath));
    mkdirP(config.outPut);
    let htmlDirPath = path.resolve(config.outPut, path.basename(filePath));
    mkdirP(htmlDirPath);
    return new Promise((res, rej) => {
        docx2html(filePath, {asImageURL: config.asImageURL}).then(function(html){
            // console.log(html.toString());
            const generateFilePath = path.resolve(htmlDirPath, path.basename(filePath)+config.htmlFileSuffix);
            fs.writeFile(generateFilePath, html, {encoding: 'utf8'}, (err) => {
                if(err){
                    rej(err);
                    return console.error(err);
                }
                console.log(`generate file [${generateFilePath}] done`);
                //返回路径
                res(generateFilePath);
            });
        }).catch(e => {
            console.error(e);
            throw e;
        });
    });
}


