"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.default = convert;

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

/***************************************************/

var os = require('os');
var path = require('path');
var fs = require('fs');

//级联生成目录
function mkdirP(dirPath) {
    var absolutePath = path.resolve(dirPath); //resolve路径
    var normalizedPath = path.normalize(absolutePath); //normalize路径
    if (!fs.existsSync(normalizedPath)) {
        //existsSync 判断路径是否存在
        var parentPath = void 0;
        if ('win32' === process.platform) {
            //process.platform 等同于 os.platform 判断操作系统类型
            parentPath = normalizedPath.substring(0, normalizedPath.lastIndexOf('\\'));
        } else {
            parentPath = normalizedPath.substring(0, normalizedPath.lastIndexOf('/'));
        }

        if (fs.existsSync(parentPath)) {
            //existsSync 判断父级路径是否存在
            var state = fs.lstatSync(parentPath); // lstatSync 获取stat对象 (lstat和stat以及fstat的区别)
            if (!state.isDirectory()) {
                //stat.isDirectory() 父级是否为路径
                throw new Error(parentPath + ' already exists and is not a directory'); //父级存在但不是路径，不允许
            }
            return fs.mkdirSync(normalizedPath); //mkdirSync 父级存在，直接创建子路径
        }
        mkdirP(parentPath); //以父级路径为子路径，继续上次判断
        return fs.mkdirSync(normalizedPath); //mkdirSync 创建本次路径
    }
}
//遍历目录和文件
function iteratorDir(dirPath, options) {
    var absolutePath = path.resolve(dirPath);
    options = (0, _assign2.default)({}, {
        whenFile: function whenFile(path) {
            // console.log(path)
        },
        whenDirectory: function whenDirectory(path) {
            // console.log(path)
        },
        afterDirectory: function afterDirectory(path) {
            // console.log('after '+path);
        }
    }, options);
    _iteratorDir(absolutePath, options);
    function _iteratorDir(dirPath, options) {
        if (!fs.existsSync(dirPath)) throw new Error(dirPath + ' not exists');
        var state = fs.lstatSync(dirPath);
        if (state.isFile()) {
            //isFile() 是否为文件
            options.whenFile(dirPath);
        } else if (state.isDirectory()) {
            options.whenDirectory(dirPath);
            var children = fs.readdirSync(dirPath); //readdir 读取目录下所有的目录和文件
            for (var i = 0; i < children.length; i++) {
                var currPath = path.resolve(dirPath, children[i]);
                var _state = fs.lstatSync(currPath);
                if (_state.isDirectory()) {
                    _iteratorDir(currPath, options);
                } else if (_state.isFile()) {
                    options.whenFile(currPath);
                } else {
                    //TODO not directory and file
                }
            }
            options.afterDirectory(dirPath);
        } else {
            //TODO not directory and file
        }
    }
}
//级联删除目录和文件
function rmP(dirPath) {
    iteratorDir(dirPath, {
        whenFile: function whenFile(path) {
            fs.unlinkSync(path); //unlink(path) 删除文件
        },
        whenDirectory: function whenDirectory(path) {
            console.log(path);
        },
        afterDirectory: function afterDirectory(path) {
            fs.rmdirSync(path); //rmdir 删除目录，前提是空目录
        }
    });
}

function convert(filePath, config) {
    config = (0, _assign2.default)({}, {
        htmlFileSuffix: '.html',
        outPut: path.resolve(os.homedir(), 'bqj-screenshot'),
        asImageURL: function asImageURL(buffer) {
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
    var htmlDirPath = path.resolve(config.outPut, path.basename(filePath));
    mkdirP(htmlDirPath);
    return new _promise2.default(function (res, rej) {
        docx2html(filePath, { asImageURL: config.asImageURL }).then(function (html) {
            // console.log(html.toString());
            var generateFilePath = path.resolve(htmlDirPath, path.basename(filePath) + config.htmlFileSuffix);
            fs.writeFile(generateFilePath, html, { encoding: 'utf8' }, function (err) {
                if (err) {
                    rej(err);
                    return console.error(err);
                }
                console.log("generate file [" + generateFilePath + "] done");
                //返回路径
                res(generateFilePath);
            });
        }).catch(function (e) {
            console.error(e);
            throw e;
        });
    });
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0IiwiZG9jeDJodG1sIiwiZmlsZSIsIm9wdCIsImxvYWQiLCJ0aGVuIiwiZG9jeCIsInBhcnNlIiwiY3JlYXRlVmlzaXRvckZhY3RvcnkiLCJwYXJzZXIiLCJjb252ZXJ0ZXJzIiwib3MiLCJyZXF1aXJlIiwicGF0aCIsImZzIiwibWtkaXJQIiwiZGlyUGF0aCIsImFic29sdXRlUGF0aCIsInJlc29sdmUiLCJub3JtYWxpemVkUGF0aCIsIm5vcm1hbGl6ZSIsImV4aXN0c1N5bmMiLCJwYXJlbnRQYXRoIiwicHJvY2VzcyIsInBsYXRmb3JtIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJzdGF0ZSIsImxzdGF0U3luYyIsImlzRGlyZWN0b3J5IiwiRXJyb3IiLCJta2RpclN5bmMiLCJpdGVyYXRvckRpciIsIm9wdGlvbnMiLCJ3aGVuRmlsZSIsIndoZW5EaXJlY3RvcnkiLCJhZnRlckRpcmVjdG9yeSIsIl9pdGVyYXRvckRpciIsImlzRmlsZSIsImNoaWxkcmVuIiwicmVhZGRpclN5bmMiLCJpIiwibGVuZ3RoIiwiY3VyclBhdGgiLCJybVAiLCJ1bmxpbmtTeW5jIiwiY29uc29sZSIsImxvZyIsInJtZGlyU3luYyIsImZpbGVQYXRoIiwiY29uZmlnIiwiaHRtbEZpbGVTdWZmaXgiLCJvdXRQdXQiLCJob21lZGlyIiwiYXNJbWFnZVVSTCIsImJ1ZmZlciIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwicG5nUGF0aCIsImh0bWxEaXJQYXRoIiwid3JpdGVGaWxlU3luYyIsImJhc2VuYW1lIiwicmVzIiwicmVqIiwiaHRtbCIsImdlbmVyYXRlRmlsZVBhdGgiLCJ3cml0ZUZpbGUiLCJlbmNvZGluZyIsImVyciIsImVycm9yIiwiY2F0Y2giLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztrQkFnR3dCQSxPOztBQS9GeEI7Ozs7QUFDQTs7Ozs7O0FBRkE7QUFJQSxTQUFTQyxTQUFULENBQW1C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b0JBQUdBLEdBQUgsRUFBTztBQUNITCx3QkFBSUssR0FBSjtBQUNBLDJCQUFPdkIsUUFBUXdCLEtBQVIsQ0FBY0QsR0FBZCxDQUFQO0FBQ0g7QUFDRHZCLHdCQUFRQyxHQUFSLHFCQUE4Qm1CLGdCQUE5QjtBQUNBO0FBQ0FILG9CQUFJRyxnQkFBSjtBQUNILGFBUkQ7QUFTSCxTQVpELEVBWUdLLEtBWkgsQ0FZUyxhQUFLO0FBQ1Z6QixvQkFBUXdCLEtBQVIsQ0FBY0UsQ0FBZDtBQUNBLGtCQUFNQSxDQUFOO0FBQ0gsU0FmRDtBQWdCSCxLQWpCTSxDQUFQO0FBa0JIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGRvY3g0anMgZnJvbSBcImRvY3g0anNcIlxyXG5pbXBvcnQgZG9jeDRqcyBmcm9tIFwiLi4vLi4vZG9jeDRqcy9saWIvb3BlbnhtbC9kb2N4L2RvY3VtZW50LmpzXCJcclxuaW1wb3J0IGNvbnZlcnRlcnMgZnJvbSBcIi4vZG9jeC9odG1sL2ZhY3RvcnlcIlxyXG5cclxuZnVuY3Rpb24gZG9jeDJodG1sKGZpbGUsIG9wdCl7XHJcblx0cmV0dXJuIGRvY3g0anMubG9hZChmaWxlKVxyXG5cdFx0LnRoZW4oZG9jeD0+ZG9jeC5wYXJzZShkb2N4NGpzLmNyZWF0ZVZpc2l0b3JGYWN0b3J5KGNvbnZlcnRlcnMsb3B0KSkpLnRoZW4oKVxyXG59XHJcblxyXG5kb2N4Mmh0bWwucGFyc2VyPWRvY3g0anNcclxuZG9jeDJodG1sLmNvbnZlcnRlcnM9Y29udmVydGVyc1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5cclxuLy/nuqfogZTnlJ/miJDnm67lvZVcclxuZnVuY3Rpb24gbWtkaXJQKGRpclBhdGgpe1xyXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aC5yZXNvbHZlKGRpclBhdGgpOyAvL3Jlc29sdmXot6/lvoRcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gcGF0aC5ub3JtYWxpemUoYWJzb2x1dGVQYXRoKTsgLy9ub3JtYWxpemXot6/lvoRcclxuICAgIGlmKCFmcy5leGlzdHNTeW5jKG5vcm1hbGl6ZWRQYXRoKSl7IC8vZXhpc3RzU3luYyDliKTmlq3ot6/lvoTmmK/lkKblrZjlnKhcclxuICAgICAgICBsZXQgcGFyZW50UGF0aDtcclxuICAgICAgICBpZignd2luMzInID09PSBwcm9jZXNzLnBsYXRmb3JtKXsgLy9wcm9jZXNzLnBsYXRmb3JtIOetieWQjOS6jiBvcy5wbGF0Zm9ybSDliKTmlq3mk43kvZzns7vnu5/nsbvlnotcclxuICAgICAgICAgICAgcGFyZW50UGF0aCA9IG5vcm1hbGl6ZWRQYXRoLnN1YnN0cmluZygwLCBub3JtYWxpemVkUGF0aC5sYXN0SW5kZXhPZignXFxcXCcpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcGFyZW50UGF0aCA9IG5vcm1hbGl6ZWRQYXRoLnN1YnN0cmluZygwLCBub3JtYWxpemVkUGF0aC5sYXN0SW5kZXhPZignLycpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGZzLmV4aXN0c1N5bmMocGFyZW50UGF0aCkpeyAvL2V4aXN0c1N5bmMg5Yik5pat54i257qn6Lev5b6E5piv5ZCm5a2Y5ZyoXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZnMubHN0YXRTeW5jKHBhcmVudFBhdGgpOyAvLyBsc3RhdFN5bmMg6I635Y+Wc3RhdOWvueixoSAobHN0YXTlkoxzdGF05Lul5Y+KZnN0YXTnmoTljLrliKspXHJcbiAgICAgICAgICAgIGlmKCFzdGF0ZS5pc0RpcmVjdG9yeSgpKXsgLy9zdGF0LmlzRGlyZWN0b3J5KCkg54i257qn5piv5ZCm5Li66Lev5b6EXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocGFyZW50UGF0aCsnIGFscmVhZHkgZXhpc3RzIGFuZCBpcyBub3QgYSBkaXJlY3RvcnknKTsgLy/niLbnuqflrZjlnKjkvYbkuI3mmK/ot6/lvoTvvIzkuI3lhYHorrhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZnMubWtkaXJTeW5jKG5vcm1hbGl6ZWRQYXRoKTsgLy9ta2RpclN5bmMg54i257qn5a2Y5Zyo77yM55u05o6l5Yib5bu65a2Q6Lev5b6EXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1rZGlyUChwYXJlbnRQYXRoKTsgLy/ku6XniLbnuqfot6/lvoTkuLrlrZDot6/lvoTvvIznu6fnu63kuIrmrKHliKTmlq1cclxuICAgICAgICByZXR1cm4gZnMubWtkaXJTeW5jKG5vcm1hbGl6ZWRQYXRoKTsvL21rZGlyU3luYyDliJvlu7rmnKzmrKHot6/lvoRcclxuICAgIH1cclxufVxyXG4vL+mBjeWOhuebruW9leWSjOaWh+S7tlxyXG5mdW5jdGlvbiBpdGVyYXRvckRpcihkaXJQYXRoLCBvcHRpb25zKXtcclxuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGgucmVzb2x2ZShkaXJQYXRoKTtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LHtcclxuICAgICAgICB3aGVuRmlsZTogKHBhdGgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0aClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdoZW5EaXJlY3Rvcnk6IChwYXRoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdGgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlckRpcmVjdG9yeTogKHBhdGgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyICcrcGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICBfaXRlcmF0b3JEaXIoYWJzb2x1dGVQYXRoLCBvcHRpb25zKTtcclxuICAgIGZ1bmN0aW9uIF9pdGVyYXRvckRpcihkaXJQYXRoLCBvcHRpb25zKXtcclxuICAgICAgICBpZighZnMuZXhpc3RzU3luYyhkaXJQYXRoKSkgdGhyb3cgbmV3IEVycm9yKGRpclBhdGgrJyBub3QgZXhpc3RzJyk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBmcy5sc3RhdFN5bmMoZGlyUGF0aCk7XHJcbiAgICAgICAgaWYoc3RhdGUuaXNGaWxlKCkpeyAvL2lzRmlsZSgpIOaYr+WQpuS4uuaWh+S7tlxyXG4gICAgICAgICAgICBvcHRpb25zLndoZW5GaWxlKGRpclBhdGgpO1xyXG4gICAgICAgIH1lbHNlIGlmKHN0YXRlLmlzRGlyZWN0b3J5KCkpe1xyXG4gICAgICAgICAgICBvcHRpb25zLndoZW5EaXJlY3RvcnkoZGlyUGF0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZnMucmVhZGRpclN5bmMoZGlyUGF0aCk7IC8vcmVhZGRpciDor7vlj5bnm67lvZXkuIvmiYDmnInnmoTnm67lvZXlkozmlofku7ZcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJQYXRoID0gcGF0aC5yZXNvbHZlKGRpclBhdGgsIGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZnMubHN0YXRTeW5jKGN1cnJQYXRoKTtcclxuICAgICAgICAgICAgICAgIGlmKHN0YXRlLmlzRGlyZWN0b3J5KCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckRpcihjdXJyUGF0aCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihzdGF0ZS5pc0ZpbGUoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aGVuRmlsZShjdXJyUGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE8gbm90IGRpcmVjdG9yeSBhbmQgZmlsZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJEaXJlY3RvcnkoZGlyUGF0aCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAvL1RPRE8gbm90IGRpcmVjdG9yeSBhbmQgZmlsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL+e6p+iBlOWIoOmZpOebruW9leWSjOaWh+S7tlxyXG5mdW5jdGlvbiBybVAoZGlyUGF0aCl7XHJcbiAgICBpdGVyYXRvckRpcihkaXJQYXRoLCB7XHJcbiAgICAgICAgd2hlbkZpbGUocGF0aCl7XHJcbiAgICAgICAgICAgIGZzLnVubGlua1N5bmMocGF0aCk7Ly91bmxpbmsocGF0aCkg5Yig6Zmk5paH5Lu2XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aGVuRGlyZWN0b3J5KHBhdGgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyRGlyZWN0b3J5KHBhdGgpe1xyXG4gICAgICAgICAgICBmcy5ybWRpclN5bmMocGF0aCk7IC8vcm1kaXIg5Yig6Zmk55uu5b2V77yM5YmN5o+Q5piv56m655uu5b2VXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnZlcnQoZmlsZVBhdGgsIGNvbmZpZyl7XHJcbiAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB7XHJcbiAgICAgICAgaHRtbEZpbGVTdWZmaXg6Jy5odG1sJyxcclxuICAgICAgICBvdXRQdXQ6IHBhdGgucmVzb2x2ZShvcy5ob21lZGlyKCksICdicWotc2NyZWVuc2hvdCcpLFxyXG4gICAgICAgIGFzSW1hZ2VVUkw6IChidWZmZXIpPT57XHJcbiAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIHBuZ1BhdGggPSBwYXRoLnJlc29sdmUoaHRtbERpclBhdGgsIG5vdyArICcucG5nJyk7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocG5nUGF0aCwgYnVmZmVyKTtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdyArICcucG5nJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJpbWFnZTovL25vdHN1cHBvcnRcIjtcclxuICAgICAgICB9XHJcbiAgICB9LCBjb25maWcgfHwge30pO1xyXG4gICAgZmlsZVBhdGggPSBwYXRoLm5vcm1hbGl6ZShwYXRoLnJlc29sdmUoZmlsZVBhdGgpKTtcclxuICAgIG1rZGlyUChjb25maWcub3V0UHV0KTtcclxuICAgIGxldCBodG1sRGlyUGF0aCA9IHBhdGgucmVzb2x2ZShjb25maWcub3V0UHV0LCBwYXRoLmJhc2VuYW1lKGZpbGVQYXRoKSk7XHJcbiAgICBta2RpclAoaHRtbERpclBhdGgpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgIGRvY3gyaHRtbChmaWxlUGF0aCwge2FzSW1hZ2VVUkw6IGNvbmZpZy5hc0ltYWdlVVJMfSkudGhlbihmdW5jdGlvbihodG1sKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaHRtbC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShodG1sRGlyUGF0aCwgcGF0aC5iYXNlbmFtZShmaWxlUGF0aCkrY29uZmlnLmh0bWxGaWxlU3VmZml4KTtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGdlbmVyYXRlRmlsZVBhdGgsIGh0bWwsIHtlbmNvZGluZzogJ3V0ZjgnfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICByZWooZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGdlbmVyYXRlIGZpbGUgWyR7Z2VuZXJhdGVGaWxlUGF0aH1dIGRvbmVgKTtcclxuICAgICAgICAgICAgICAgIC8v6L+U5Zue6Lev5b6EXHJcbiAgICAgICAgICAgICAgICByZXMoZ2VuZXJhdGVGaWxlUGF0aCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4iXX0=