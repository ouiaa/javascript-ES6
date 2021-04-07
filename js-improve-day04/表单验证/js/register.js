window.onload = function () {
    // 手机号码的正则表达式，前两位只有13/14/15/17/18开头的，共11位
    var regtel = /^1[3|4|5|7|8]\d{9}$/
    // QQ号码从10000开始
    var regqq = /^[1-9]\d{4,}$/
    // 昵称是中文，2-8个汉字
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/
    // 短信验证码是6位数字
    var regmsg = /^\d{6}$/
    // 密码
    var regpwd = /^[a-zA-Z0-9-_]{6,16}$/
    var tel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var surepwd = document.querySelector('#surepwd')
    regexp(tel, regtel) //手机号码
    regexp(qq, regqq) //qq号码
    regexp(nc, regnc) //昵称
    regexp(msg, regmsg) //短信验证
    regexp(pwd, regpwd) //密码

    // 表单验证函数
    function regexp(ele, reg) {
        ele.addEventListener('blur', function () {
            if (reg.test(this.value)) {
                // console.log('right');
                // console.log(this.nextElementSibling);
                // 正确的，修改图标、文字内容和样式类
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您，输入正确 '
            } else {
                // console.log('error');
                // 错误的，修改图标、文字内容和样式类
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入不正确，请重新输入 '
            }
        })
    }
    surepwd.addEventListener('blur', function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您，输入正确 '
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码输入不一致 '
        }
    })
    pwd.addEventListener('blur', function () {
        if (this.value == surepwd.value) {
            surepwd.nextElementSibling.className = 'success'
            surepwd.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您，输入正确 '
        } else {
            surepwd.nextElementSibling.className = 'error'
            surepwd.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码输入不一致 '
        }
    })

}