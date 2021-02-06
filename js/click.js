/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("能天使", "黑", "W", "迷迭香", "早露", "空弦", "小火龙", "银灰", "斯卡蒂", "赫拉格", "煌", "荆棘",
        "艾雅法拉", "莫斯提马", "刻俄柏", "推进之王", "风迪", "夕", "陈", "嵯峨", "山", "史尔特尔", "塞雷娅", 
        "星熊", "年", "森蚺", "瑕光", "泥岩", "夜莺", "闪灵", "安洁莉娜", "麦哲伦", "铃兰", "阿", "温蒂", 
        "傀影");
        a_idx = Math.floor(Math.random()*a.length);
        var $i = $("<span/>").text(a[a_idx]);
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
