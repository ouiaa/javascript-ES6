var that;
class Tab {
    constructor(id) {
        that = this
        // 获取元素
        this.box = document.querySelector(id)
        // 添加功能 获取+号,li的父元素ul,section的父元素
        this.add = this.box.querySelector('.tab-add')
        this.ul = this.box.querySelector('.tab-list ul:first-child')
        this.fsection = this.box.querySelector('.tab-con')
        this.init()
    }
    init() {
        // 因为我们是动态添加元素，所以需要重新获得对应的元素
        // 切换功能 获取选项卡和内容模块元素
        this.lis = this.box.querySelectorAll('li')
        this.sections = this.box.querySelectorAll('section')
        // 删除功能，获得x号元素
        this.dels = this.box.querySelectorAll('.icon-cross')
        // 编辑功能，获得文字元素
        this.spans = this.box.querySelectorAll('.tab-list li span:first-child')

        // 初始化操作，让相关的元素绑定事件
        // 切换事件绑定li
        for (var i = 0; i < this.lis.length; i++) {
            // 切换功能，给选项卡li绑定事件，并添加索引号
            this.lis[i].index = i
            // 切换功能应放入toggleTab方法内，在此处调用toggleTab方法
            this.lis[i].onclick = this.toggleTab
            // 删除功能，给x绑定事件,调用删除方法
            this.dels[i].onclick = this.removeTab
            // 编辑功能，给选项卡里的文字与下面的内容模块绑定事件，调用编辑方法
            this.spans[i].ondblclick = this.updateTab
            this.sections[i].ondblclick = this.updateTab
        }
        // 添加事件绑定+号
        this.add.onclick = this.addTab
    }
    // 清除选项卡和内容的选中状态
    removeClass() {
        that.box.querySelector('.liactive').classList.remove('liactive')
        that.box.querySelector('.conactive').classList.remove('conactive')
    }
    // 1.切换功能
    toggleTab() {
        // 注意此时的this指向上面的调用者lis[i],当前选中的li
        // 使用classList添加和移除类，注意移除类是在that下移除，this中只有当前选中的li，无法找到其他元素
        // tab-list切换需要的添加和移除类
        that.removeClass()
        this.classList.add('liactive')
        // tab-con切换需要的添加和移除类     
        that.sections[this.index].classList.add('conactive')
    }
    // 2.添加功能
    addTab() {
        // 新添加的选项卡和内容默认处于被选中状态，那么需要清除其他选项卡和内容的选中状态
        // console.log(that.lis.length);
        if (that.lis.length != 0) {
            that.removeClass()
        }
        var random = Math.random()
        // 1)创建新的选项卡li和新的内容section
        var li = '<li class="liactive"><span>新选项卡</span><span class="icon-cross"></span></li>'
        var section = '<section class="conactive">测试' + random + '</section>'
        // 2)把创建的两个元素追加到对应的父元素中
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)
        // 初始化，让新增的li绑定事件
        that.init()
    }
    // 3.删除功能
    removeTab(e) {
        e.stopPropagation()//阻止冒泡，防止触发li的切换事件
        var index = this.parentNode.index
        // console.log(index);
        // 删除当前索引号对应的li和section,remove()方法可以直接删除指定的元素 
        that.lis[index].remove()
        that.sections[index].remove()
        // 删除后，选项卡个数改变，重新获得当前li数量，及初始化
        that.init()
        // 删除后，让其默认选中删除li的前一个选项卡
        // 如果我们删除的不是选中状态的li，那么让原来选中状态的li保持不变,即如果有选中状态的li则使用return结束代码，不执行后面的点击事件
        if (document.querySelector('.liactive')) return false;
        // 通过手动调用触发点击事件，而不是为前一个li和section添加类，这样更方便
        index--
        // 注意：删除第一个选项卡时，没有前一个选项卡，则不触发点击事件，利用与逻辑中断实现
        that.lis[index] && that.lis[index].click()
    }
    // 4.修改功能
    updateTab() {
        // 禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 1）双击文字的时候，在里面生成一个文本框
        // 将选中的选项卡内容放入input表单内
        var str = this.innerHTML;
        // this指向当前选中的span，在span里面插入input表单
        this.innerHTML = '<input type="text">'
        var input = this.children[0]
        input.value = str;
        input.select()//文本框里面的文字处于选中状态
        // 失去焦点即离开文本框时，将文本框里面的值给span
        input.onblur = function () {
            // this指代input，span是input的父级
            this.parentNode.innerHTML = this.value
        }
        // 按下回车键时也可以将文本框里面的值给span
        input.onkeyup = function (e) {
            if (e.keyCode == 13) {
                // 手动调用表单失去焦点事件，更方便，也可以复制上面的代码
                this.blur()
            }
        }
    }
}



new Tab('#tab')