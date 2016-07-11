$(function(){
	$.when(getBlank(), getCarousel(), getNewestMainData(10)).done(function(data) {
        $.when(postBranch()).done(function(data) {
            mui.init();
            initDeceleration($,mui);
            eventBind();
        });
    });
});
function eventBind() {
    var slider = mui(".mui-slider-overflowb");
    slider.slider({
        interval: 5000
    });
    $(".plusi").bind('tap', function() {
        mui.openWindow({
            url: 'book.html',
            class: 'plusi'
        })
    })
    $(".searchLink").bind('tap', function() {
        mui.openWindow({
            url: 'search.html',
            class: 'searchLink'
        })
    })
    $("#obema").bind('tap', function() {
        mui.openWindow({
            url: 'newsDetail.html',
            id: 'obema'
        })
    })
    $(".mui-table-view").on('tap', '.commentsFont', function() {
        mui.openWindow({
            url: 'moreComments.html',
            class: 'commentsFont'
        })
    });
    $(".mui-table-view").on('tap', '.goDetail', function() {
        var myid = $(this).attr("data-id");
        var myfun = $(this).attr("data-fun");
        mui.openWindow({
            url: 'newsDetail.html?id=' + myid + ',' + 'function=' + myfun,
            class: 'goDetail'
        })
    })
    $(".mui-slider-overflowb").on('tap', '.lunbodiv', function() {
        var myid = $(this).attr("data-id");
        var myfun = $(this).attr("data-fun");
        mui.openWindow({
            url: 'newsDetail.html?id=' + myid + ',' + 'function=' + myfun,
            class: 'lunbodiv'
        })
    })
}











