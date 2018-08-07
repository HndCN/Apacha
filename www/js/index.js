$(function() {
    $(".shoppingcar").fullpage({
        sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#8ac060", "#f3d2c4"],
        navigation: true,
        afterLoad: function(a, index) {
            //把所有的js动画清掉, 如果动画没有执行完的， 要终止掉
            $(".section>div img, .section>div div").attr("style", "").stop();

            //先把所有的css动画清除， 再给当前屏添加动画
            $(".section").removeClass("animation").eq(index-1).addClass("animation");
            
            //如果是第二屏
            if (index == 2) {
                //右边的搜索框移动到中间
                $(".section2 .search01").animate({marginLeft: -111}, 1000, "easeOutBack", function() {
                    //右边的搜索框移动到中间后隐藏
                    $(".section2 .search01").hide();
                    //中间的搜索框显示， 停留0.5秒之后，移动到右上角
                    $(".section2 .search02").show().delay(500).animate({marginLeft: 130, bottom: 450, height: 30}, 1000);

                    //沙发慢慢变大
                    $(".section2 .sofas").delay(500).animate({height: 218}, 1000);
                });
            }

            //如果是第四屏
            if (index == 4) {
                $(".section4 .cardiv").animate({marginLeft: 1500}, 3000, "easeInElastic", function(){
                    $(".section4 .keyboard").fadeIn(500);
                });
            }

            //如果是第六屏
            if (index == 6) {
                //盒子掉下来
                $(".section6 .sofabox").animate({bottom: 100}, 1000, function() {
                    //开车
                    $(".section6 .street").animate({left: -1300}, 6000, function() {
                        //男人下车
                        $(".section6 .man").animate({height: 120}, 1000, function() {
                            //往前移动
                            $(".section6 .man").animate({right: -100}, 1000, function() {
                                //1. 开门
                                $(".section6 .door").show();
                                //2. 出门
                                //延迟多长时间做某事
                                setTimeout(function() {
                                    $(".section6 .girl").show();
                                }, 500);
                            });
                        });
                    });
                });
            }

            //屏幕的高度
            var h = $(window).height();
            //如果是第8屏
            if (index == 8) {
                $(".section8").mousemove(function(event) {
                    // console.log(event.pageX);
                    //1. 拿到鼠标的x值
                    var x = event.pageX;
                    var left = x - 70;
                    //2. 拿到鼠标的y的值
                    var y = event.pageY;
                    //console.log(y);
                    var bottom = h - y - 449 > 0 ? 0 : h - y - 449;
                    $(".section8 .hand").css({left: left, bottom: bottom});
                });

                $(".section8 .again").click(function() {
                    //alert("a");
                    //滚动到第一屏
                    $.fn.fullpage.moveTo(1);
                });
            }
        }
    });
});