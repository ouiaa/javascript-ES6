// 入口文件

// 模块引入
import * as m1 from "./m1.js"
// 引入m2.js模块内容
import * as m2 from "./m2.js"
// 引入m3.js模块内容
import * as m3 from "./m3.js"

/* console.log(m1);
console.log(m2);
console.log(m3); */

// 修改背景颜色
// 导入jquery $是变量名 'jquery'是模块的名字
import $ from 'jquery';
$('body').css('background', 'pink')