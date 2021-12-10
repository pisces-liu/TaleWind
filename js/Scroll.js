$(function () {
    // 0. 定义保存偏移量
    let step = 0;
    // 1. 让图片滚起来
    let timer;

    function autoPlay() {
        timer = setInterval(function () {
            // 设置偏移量
            step += -2;

            // 判断重置滚动的时间
            if (step <= -1050) {
                step = 0;
            }
            $('.scroll_ul').css('marginLeft', step);

        }, 40)
    }

    autoPlay();

    // 监听 li 的移入移除事件.hover() 接受两个参数，第一个参数是移入的方法，第二个参数是移除的方法
    $('.scroll_ul_li').hover(function () {
        // 当鼠标移入时，停止我们的滚动
        clearInterval(timer)
    }, function () {
        // 当鼠标移除时，继续我们的滚动
        autoPlay()
    })
})
