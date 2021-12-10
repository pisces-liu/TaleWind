// 二级导航栏效果

$(function () {
    $('.nav-left li').hover(function () {
        $(this).find('.sub-item').show()
    },function () {
        $(this).find('.sub-item').hide()
    })
})