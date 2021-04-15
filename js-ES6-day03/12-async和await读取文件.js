// 引入fs模块
let fs = require('fs')

// 读取文件函数封装
function dream() {
    return new Promise((reslove, reject) => {
        fs.readFile("./resources/梦想.txt", (err, data) => {
            // 如果失败
            if (err) reject(err)
            // 如果成功
            reslove(data)
        })
    })
}

function goal() {
    return new Promise((reslove, reject) => {
        fs.readFile("./resources/目标.txt", (err, data) => {
            // 如果失败
            if (err) reject(err)
            // 如果成功
            reslove(data)
        })
    })
}

function ming() {
    return new Promise((reslove, reject) => {
        fs.readFile("./resources/座右铭.txt", (err, data) => {
            // 如果失败
            if (err) reject(err)
            // 如果成功
            reslove(data)
        })
    })
}

// 定义一个async函数
async function main() {
    try {
        let res1 = await dream()
        let res2 = await goal()
        let res3 = await ming()
        console.log(res1.toString());
        console.log(res2.toString());
        console.log(res3.toString());
    } catch (e) {
        console.log(e);
    }

}
main()