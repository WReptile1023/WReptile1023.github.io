let info = "不可以哦！"
window.onload = function () {
    document.onkeydown = function () {
        var e = window.event || arguments[0];
        if (e.keyCode == 123) {
            alert(info);
            return false;
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            alert(info);
            return false;
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {//追加

            return false;
        }
    };
    document.oncontextmenu = function () {
        alert(info);
        return false;
    }
    initAnimate();
};