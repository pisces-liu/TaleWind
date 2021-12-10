{

// 获取轮播图容器
    let $oSlider = $('.slider_new_book');
// 获取所有的列表
    let $aLis = $('.slider_new_book>.slider_new_book_ul>.slider_new_book_ul_li');
// 获取向左的箭头
    let $oLeft = $('.slider_new_book .btn-left');
// 获取向右的箭头
    let $oRight = $('.slider_new_book .btn-group');
// 获取底部小圆点
    let $aDots = $('.slider_new_book .dots li');
// 定义定时器
    let timer = null;
// 定义当前的图片索引
    let index = 0;

    function play(index) {
        // index % 当前 li 元素的长度之后，index 的范围就保持在了 0,1,2,3,4
        index = index % 5;
        $aLis.eq(index) // eq() 进行过滤，获取 当前索引为 index 的元素
            .stop()
            .fadeIn(500) // 让当前元素 渐入
            .siblings() // 获取兄弟元素
            .fadeOut(1000); // 让兄弟元素渐出
        $aDots.eq(index).addClass('active').siblings().removeClass('active')

    }

    function autoPlay() {
        timer = setInterval(function () {
            index++;
            play(index);
        }, 2000)
    }

    autoPlay();

// 当鼠标悬浮到 Slider 上面的时候，清除定时器。离开 Slider 的时候，继续轮播
    $oSlider.hover(function () {
        clearInterval(timer);
    }, function () {
        autoPlay();
    })

    $oLeft.click(function () {
        index--;
        play(index);
    })

    $oRight.click(function () {
        index++;
        play(index);
    })

    $aDots.click(function () {
        index = $(this).index();
        $aLis.eq(index).stop().fadeIn(500).siblings().fadeOut(1000);
        $aDots.eq(index).addClass('active').siblings().removeClass('active');
    })
}
