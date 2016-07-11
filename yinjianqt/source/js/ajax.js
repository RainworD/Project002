function getMoreMainData(page,number){
	var ajax = $.ajax({
		url: "/home/index/ajaxmain_list",
		type: "POST",
		data: {
			"number": number,
			"page":page
		},
		success: function(data){
			for(var i = 0,length = data.length; i < length; i++){
                var html = createHtmlFragmentByType(data[i]);
                $('#mainList').append(html);
            }
		}
	});
	return ajax;
}
function getNewestMainData(number){
	var ajax = $.ajax({
		url: '/home/index/main',
		type: "POST",
		data: {
			"number": number
		},
		success: function(data){
			$('#mainList').empty();
			for(var i = 0,length = data.length; i < length; i++){
                var html = createHtmlFragmentByType(data[i]);
                $('#mainList').append(html);
            }
		}
	})
	return ajax;
}
function getCarousel() {
    var ajax = $.get('/home/index/carousel', function(data) {
        for (var i = 0; i < data.length; i++) {
            var id = data[i].id;
            var fun = data[i].function;
            var lunbo = $('<div class="mui-slider-item lunbodiv">' +
                '<img class="lunboimg">' +
                '<p class="mui-slider-title"></p>' +
                '</div>');
            lunbo.find(".lunboimg").attr("src", data[i].photo);
            lunbo.find(".mui-slider-title").text(data[i].title);
            lunbo.attr("data-id", id);
            lunbo.attr("data-fun", fun);
            $("#lunboContainer").append(lunbo);
            var lunbodot = $('<div class="mui-indicator"></div>');
            $("#lunbodot").append(lunbodot);
        }
        $("#lunbodot").children().eq(0).addClass("mui-active");
        var lunbolast =
            $("#lunboContainer").children().eq(0).clone();
        lunbolast.addClass("mui-slider-item-duplicate");
        $("#lunboContainer").append(lunbolast);
        var lunbofirst =
            $("#lunboContainer").children().eq(data.length - 1).clone();
        lunbofirst.addClass('mui-slider-item-duplicate');
        $("#lunboContainer").prepend(lunbofirst);
    });
    return ajax;
}
function getBlank() {
    var ajax = $.get('/home/index/blank', function(data) {
        for (var i = 0; i < data.length; i++) {
            var column = $(".mui-control-item").first().clone().removeClass("mui-active");
            column.text(data[i].theme);
            column.attr("href", '#item' + data[i].theme_id[0] + 'mobile');
            column.attr("data-id", data[i].theme_id[0]);
            column.attr("id", "");
            $("#scrollBar").append(column);
        }
    });
    return ajax;
}
function postBranch() {
    var length = $(".mui-control-item").length;
    for (var i = 0; i < length; i++) {
        if (i != 0) {
            var theme_id = $(".mui-control-item").eq(i).attr("data-id");
            var listContainer = $('<div id=item' + theme_id + 'mobile class="mui-slider-item mui-control-content">' +
                '<div class="mui-scroll-wrapper">' +
                '<div class="mui-scroll">' +
                '<ul class="mui-table-view branchList">' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>');
            listContainer.attr("data-id", theme_id);
            $("#myscroll").append(listContainer);
            getNewestOtherData(theme_id,10);
        }
    }
    
}
// 除首页外的其他栏目页的刷新
function getNewestOtherData(theme_id,number) {
    var ajax = $.post('/home/index/lists', {
        "theme_id": theme_id,
        "number": number
    }, function(data, textStatus, xhr) {
    	$("#item"+theme_id+"mobile").find(".branchList").empty();
        for (var i = 0; i < data.length; i++) {
            var html = createHtmlFragmentByType(data[i]);
            $("#item"+theme_id+"mobile").find(".branchList").append(html);
        }
        return ajax;
    });
}
// 除首页外的其他栏目页的加载更多
function getMoreOtherData(theme_id,page,number){
	var ajax = $.ajax({
		url: "/home/index/ajaxlists",
		type: "POST",
		data: {
			"theme_id":theme_id,
			"page":page,
			"number":number
		},
		success: function(data){
			for (var i = 0; i < data.length; i++) {
                var html = createHtmlFragmentByType(data[i]);
                $("#item"+themeid+"mobile").find(".branchList").append(html);
            }
		}
	})
}
function createHtmlFragmentByType(data){
	var news;
	var sort = data.function - 0;
    id = data.id;
    switch(sort){
        case 1:
            news=$('<li class="mui-table-view-cell goDetail">'+
                            '<div class="item-content-whole">'+
                                '<p class="item-vedio-title"></p>'+
                                '<p class="article-sorts">'+
                                    '<span class="columnSorts"></span>&nbsp;'+
                                    '<span class="unitSorts"></span>&nbsp;'+
                                    '<span class="commentsNum"></span>评论&nbsp;'+
                                    '<span class="likesNum"></span>赞'+
                                '</p>'+
                            '</div>'+
                        '</li>'); 
            news.find(".item-vedio-title").text(data.title);
            news.find(".mui-table-view-cell").attr("id",data.id);
            news.find(".unitSorts"). text(data.author);
            news.find(".commentsNum").text(data.comment_count);
            news.find(".likesNum").text(data.like_count);
            news.attr("data-id",id);
            news.attr("data-fun",sort);
        break;
        case 2:
           	news=$('<li class="mui-table-view-cell ">'+
                            '<p class="item-vedio-title"></p>'+
                            '<div class="item-vedio-img">'+
                                '<img class="imageLar" data-preview-src="" data-preview-group="1" data-content="">'+
                            '</div>'+
                                '<p class="article-sorts">'+
                                    '<span class="columnSorts"></span>&nbsp;'+
                                    '<span class="unitSorts"></span>&nbsp;'+
                                    '<span class="commentsNum"></span>评论&nbsp;'+
                                    '<span class="likesNum"></span>赞'+
                                '</p>'+
                            '</li>');
            news.find(".item-vedio-title").text(data.title);
            news.find(".imageLar").attr("src",data.photo_photo);
            news.find(".imageLar").attr("data-content",data.photo_text);
            news.find(".mui-table-view-cell").attr("id",data.id);
            //news.find("columnSorts"). text(data.author);
            news.find(".unitSorts"). text(data.author);
            news.find(".commentsNum").text(data.comment_count);
            news.find(".likesNum").text(data.like_count);
            $('#mainList').append(news);
            // window.localStorage.setItem("newsid",id);
            news.attr("data-id",id);
            news.attr("data-fun",sort);
        break;
        case 3:
            news=$( '<li class="mui-table-view-cell goDetail">'+
                        '<div class="item-container newsDetail">'+
                                    '<img class="item-img">'+
                                    '<div class="item-content">'+
                                        '<p class="item-title"></p>'+
                                        '<p class="article-sorts2">'+
                                            '<span class="columnSorts"></span>&nbsp;'+
                                            '<span class="unitSorts"></span>&nbsp;'+
                                            '<span class="commentsNum"></span>评论&nbsp;'+
                                            '<span class="likesNum"></span>赞'+
                                        '</p>'+
                                    '</div>'+
                                '</div>'+
                            '</li>');
            news.find(".item-title").text(data.title);
            news.find(".item-img").attr("src",data.photo);
            news.find(".mui-table-view-cell").attr("id",data.id);
            //news.find("columnSorts"). text(data.author);
            news.find(".unitSorts"). text(data.author);
            news.find(".commentsNum").text(data.comment_count);
            news.find(".likesNum").text(data.like_count);
            $('#mainList').append(news);
            news.attr("data-id",id);
            news.attr("data-fun",sort);
        break;
    }
    return news;
}

                    
   













