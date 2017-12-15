/**
 * 本函数功能为使页面上某元素可动过鼠标左击而移动
 * 1. 传入的参数为要移动的dom对象
 * 2. 该dom对象必须要有position的定位样式，不然是不能移动的
 * 3. 改函数返回一个对象，该对象有enable和disable两个方法：
 *      enable: 触发移动的功能（绑定一系列事件）
 *      disable: 解除移动的功能（解绑一系列事件）
*/


function Drag(ele) {
    var detaX = -100;
    var detaY = -100;
    var can_move = false;

    function mousedown(event) {
        if(event.button === 0) {
            //计算点击点与元素左上角的距离
            detaX = event.clientX - this.offsetLeft;
            detaY = event.clientY - this.offsetTop;
            can_move = true;
        }
    }
    function mousemove(event) {
        if(can_move) {
            event.preventDefault();
            ele.style.left = event.clientX - detaX + "px";
            ele.style.top = event.clientY - detaY + "px";
        }
    }
    function mouseup(event) {
        can_move = false;
    }
    
    return {
        enable: function() {
            ele.addEventListener("mousedown", mousedown, false);
            document.addEventListener("mousemove", mousemove, false);
            document.addEventListener("mouseup", mouseup, false);
        },
        disable: function() {
            ele.removeEventListener("mousedown", mousedown, false);
            document.removeEventListener("mousemove", mousemove, false);
            document.removeEventListener("mouseup", mouseup, false)
        }
    };
}