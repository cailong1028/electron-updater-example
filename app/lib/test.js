const fs = require('fs');
const path = require('path');
const mime = require('mime');
const iconv = require('iconv-lite');
const det = require('jschardet');
const screenshot = require('./screenshot');

const filePath = 'license.txt';
// const filePath = '文档.docx';
const states = fs.stat(filePath, (err, stat) => {
    //console.log(stat);
});
console.log(states); //undefined
const afd = fs.openSync(filePath, 'r');
const fstate = fs.fstatSync(afd);
console.log(fstate);

const content = fs.readFileSync(filePath);
console.log(content);



const fd2 = fs.openSync(filePath, 'r');
const mineType = mime.lookup(filePath);
const fileType = mime.extension(mineType);

console.log(mineType);
console.log(fileType);

const buf = new Buffer(8);
fs.read(fd2, buf, 0, 8, 0, (err, bytesRead, buffer) => {
    const buf2 = buf.slice(0, 4);
    const head1 = buf2[0].toString(16);
    const head2 = buf2[1].toString(16);
    const head3 = buf2[2].toString(16);
    const head4 = buf2[3].toString(16);
    const headIden = head1 + head2;
    console.log(headIden);
    console.log(buf2.toString('hex'));
});


//txt文件
function txt(){
    const buf2 = new Buffer(1000);
    fs.read(fd2, buf2, 0, 1000, 0, (err, bytesRead, buffer) => {
        //det检测文件编码
        const fileEncode = det.detect(buffer);
        const info = JSON.stringify(fileEncode);
        console.log(`+++++> ${info}`);
        //iconv解码
        const String = iconv.decode(buf2, fileEncode.encoding);
        console.log(String);
        //txt写入生成html
        const generateFilePath = './_/'+path.basename(filePath)+'.html';
        let htmlStr = '<!DOCTYPE html>\n' +
            '<html lang="en">\n' +
            '<head>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <title>Title</title>\n' +
            '</head>\n' +
            '<body>\n' +
            String+
            '\n' +
            '</body>\n' +
            '</html>';
        fs.writeFile(generateFilePath, htmlStr, {encoding: 'utf8'}, (err) => {
            if(err){
                return console.log(err);
            }
            //pager
            screenshot({url: path.resolve(__dirname,generateFilePath), dest: path.resolve(__dirname, './dd')});
        });
    });
}

function docx(filePath){
    //开发引用项目
    const convert = require('../../../docx2html/test/testImg');
    //打包引用本地
    // const convert = require('../vendor/docx2html/test/testImg');
    convert(filePath)
    .then(htmlPath => {
        screenshot({url: htmlPath, dimensions: ['1024x768'], dest: path.resolve(__dirname, './dd')});
    }).catch(e => {
        console.log(e);
    });
}

function bufferTest(){
    //测试字符串和buf转换
    const b = 'bbb中文测试';
    const encode = 'utf8';
    const encode2 = 'gbk';
    const buf3 = Buffer.alloc(Buffer.byteLength(b, encode), b, encode);
    console.log(buf3.toString(encode));
    //转成gbk编码然后输出
    const b_gbk_buffer = iconv.encode(b, encode2);
    const b_gbk_str = iconv.decode(b_gbk_buffer, encode2);
    console.log(`${b_gbk_str}`);

    //buffer字符串
    const buf4 = Buffer.alloc(Buffer.byteLength(b, encode), b, encode);
    const gbkDefaultUnicodeString = '�';
    const gbkDefaultGbkString = iconv.decode(new Buffer(gbkDefaultUnicodeString), 'gbk');
    console.log(`---> ${gbkDefaultGbkString}`);
    //Buffer.byteLength(str, 'base64')
}

// txt();
docx(path.resolve(__dirname, './docx/sss.docx'));
