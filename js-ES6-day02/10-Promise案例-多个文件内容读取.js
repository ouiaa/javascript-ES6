let fs = require('fs')
// 读取resources下的三个文件
// 回调地狱的做法，注意修改参数防止弄混
/* fs.readFile('resources/座右铭.txt', (err, data1) => {
    fs.readFile('resources/梦想.txt', (err, data2) => {
        fs.readFile('resources/目标.txt', (err, data3) => {
            console.log(data1 + '\n' + data2 + '\n' + data3);
        })
    })
}) */
// Promise链式调用实现
let p = new Promise((resolve, reject) => {
    fs.readFile('resources/座右铭.txt', (err, data) => {
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('resources/梦想.txt', (err, data) => {
            // 使用模板字符串拼接
            resolve(`${value}\r\n${data}`)
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('resources/目标.txt', (err, data) => {
            resolve(`${value}\r\n${data}`)
        })
    })
}).then(value => {
    console.log(value);
})