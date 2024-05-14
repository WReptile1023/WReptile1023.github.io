// 使用请前引入jq库

var index = 0;
jQuery(document).ready(function () {
    $(window).click(function (e) {
        var string = "WReptile";
        var strings = string.split('');
        var span = $("<span>").text(strings[index]);
        index = (index + 1) % strings.length;
        var x = e.pageX,
            y = e.pageY;
        var color = "随机";
        if (color == "随机") {
            var colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
            var colorArray = colorValue.split(",");
            color = "#";
            for (var i = 0; i < 6; i++) {
                color += colorArray[Math.floor(Math.random() * 16)];
            }
        }
        span.css({
            "z-index": 999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": color,
            "font-size": "20px"
        });
        $("body").append(span);
        var styles = {
            "top": y - 160,
            "opacity": 0
        };
        span.animate(styles, 3000, function () {
            span.remove();
        });
    });
});