// 1.引入fs模块
let fs = require('fs')
// 2.调用方法异步读取文件
/* fs.readFile('resources/座右铭.txt', (err, data) => {
    // 读取失败，则抛出错误
    if (err) throw err
    // 读取成功，则输出内容
    console.log(data.toString());
}) */
// 3.使用Promise封装
let p = new Promise(function (reslove, reject) {
    fs.readFile('resources/座右铭.txt', (err, data) => {
        // 异步操作失败即读取失败
        if (err) reject(err)
        // 读取成功
        reslove(data)
    })
})

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('读取失败');
})