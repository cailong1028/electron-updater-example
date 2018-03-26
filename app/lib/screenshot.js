const Pageres = require('pageres');
const path = require('path');
function doScreenShot(options){
    const defaultOptions = {
        url: '../../other/a.html',
        dest: 'cc',
        delay: 0,
        dimensions: ['480*320', '1024*768', 'iphone 5s'],
        filename: 'test.png',
        crop: true,
        timeout: 60, //second
        selector: 'body'
    };
    options = Object.assign({}, defaultOptions, options);
    const pageres = new Pageres({delay: options.delay}).src(options.url, options.dimensions, {crop: options.crop})
        .dest(options.dest)
        .run().then(() => {
            console.log('screen shot done');
            console.log(`screen shot done, dest file is ${options.dest}`);
        }).catch((err) => {
            console.log('error '+err);
            console.error(err.stack);
        });
    // pageres.on('warning', (warn) => {
    //     console.log(warn);
    // });
    return pageres;
}

module.exports = doScreenShot;


// const pageres = new Pageres({delay: 0, crop: true})
//     .src('C:\\Users\\banquanjia\\bqj-screenshot\\sss.docx\\sss.docx.html', ['1366x768'])
//     .dest('./dd')
//     .run().then(() => {
//         console.log('screen shot done');
//         console.log(`screen shot done, dest file is `);
//     }).catch((err) => {
//         console.log('error '+err);
//         console.error(err.stack);
//     });
//
// const pageres = new Pageres({delay: 2})
//     .src('yeoman.io', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
//     .src('todomvc.com', ['1280x1024', '1920x1080'])
//     .src('data:text/html;base64,PGgxPkZPTzwvaDE+', ['1024x768'])
//     .dest('./dd')
//     .run()
//     .then(() => console.log('done'));
