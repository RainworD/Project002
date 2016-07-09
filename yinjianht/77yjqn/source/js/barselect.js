function initDeceleration($) {
    //阻尼系数
    var deceleration = mui.os.ios ? 0.003 : 0.0009;
    $('.mui-scroll-wrapper').scroll({
        bounce: false,
        indicators: true, //是否显示滚动条
        deceleration: deceleration
    });
    $.ready(function() {
        //循环初始化所有下拉刷新，上拉加载。
        $.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
            if (index == 0) {
                $(pullRefreshEl).pullToRefresh({
                    down: {
                        callback: function() {
                            var self = this;
                            setTimeout(function() {
                                var ul = self.element.querySelector('.mui-table-view');
                                ul.insertBefore(createFragmentdownmain(ul, index, 10, true), ul.firstChild);
                                self.endPullDownToRefresh(true);
                                self.refresh(true);
                            }, 1000);
                        }
                    },
                    up: {
                    	height:50,//可选.默认50.触发上拉加载拖动距离
      					auto:false,
            			contentnomore:'没有更多数据了',
                		contentrefresh: '正在加载...',
                        callback: function() {
                            var self = this;
                            setTimeout(function() {
                                var ul = self.element.querySelector('.mui-table-view');
                                ul.appendChild(createFragmentupmain(ul, index, 5));
                                self.endPullUpToRefresh();
                                 self.refresh(true);
                            }, 1000);
                        }
                    }
                });

            } 
            else {
                $(pullRefreshEl).pullToRefresh({
                    down: {
                        callback: function() {
                            var self = this;
                            setTimeout(function() {
                                var ul = self.element.querySelector('.mui-table-view');
                                ul.insertBefore(createFragmentdownbranch(ul, index, 10, true), ul.firstChild);
                                self.endPullDownToRefresh();
                            }, 1000);
                        }
                    },
                    up: {
                    	height:50,//可选.默认50.触发上拉加载拖动距离
      					auto:false,
            			contentnomore:'没有更多数据了',
                		contentrefresh: '正在加载...',
                        callback: function() {
                            var self = this;
                            setTimeout(function() {
                                var ul = self.element.querySelector('.mui-table-view');
                                ul.appendChild(createFragmentupbranch(ul, index, 5));
                                self.endPullUpToRefresh(true);
                            }, 1000);
                        }
                    }
                });

            }

        });
        var createFragmentdownmain = function(ul, index, count, reverse) {
            var length = ul.querySelectorAll('li').length;
            var fragment = document.createDocumentFragment();
            var myul=jQuery(fragment);
            var li;
            for (var j = 0; j < count; j++) {
                mui.ajax({
                    url: '/home/index/main',
                    type: 'post',
                    data: {
                        number: '10',
                    },
                    success: function(data) {
                        for (i = 0; i < data.length; i++) {
                            li = document.createElement('li');
                            var sorts = data[i].function;
                            var sortsNum = Number(sorts);
                            var id = data[i].id;
                            var title = data[i].title;
                            var theme = data[i].theme;
                            var author = data[i].author;
                            var comment_count = data[i].comment_count;
                            var like_count = data[i].like_count;
                            switch (sortsNum) {
                                case 1:
                                    if (data[i].photo = "") {
                                        li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML = '<div class="item-content-whole">' +
                                            '<p class="item-vedio-title"></p>' +
                                            '<p class="article-sorts">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>';
                                        var news = jQuery(li);
                                        news.find(".item-vedio-title").text(data[i].title);
                                        news.find(".mui-table-view-cell").attr("id", data[i].id);
                                        news.find("columnSorts").text(data[i].theme);
                                        news.find(".unitSorts").text(data[i].author);
                                        news.find(".commentsNum").text(data[i].comment_count);
                                        news.find(".likesNum").text(data[i].like_count);

                                        //window.localStorage.setItem("newsid",id);
                                        //news.find('.goDetail').attr("data-id",id);
                                        // window.localStorage.setItem("newsid",id);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                        myul.prepend(news);
                                    } else {
                                        li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML =
                                            '<div class="item-container newsDetail">' +
                                            '<img class="item-img">' +
                                            '<div class="item-content">' +
                                            '<p class="item-title"></p>' +
                                            '<p class="article-sorts2">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>' +
                                            '</div>';
                                        var news = jQuery(li);
                                        news.find(".item-title").text(data[i].title);
                                        news.find(".item-img").attr("src", data[i].photo);
                                        news.find(".mui-table-view-cell").attr("id", data[i].id);
                                        news.find("columnSorts").text(data[i].theme);
                                        news.find(".unitSorts").text(data[i].author);
                                        news.find(".commentsNum").text(data[i].comment_count);
                                        news.find(".likesNum").text(data[i].like_count);

                                        //window.localStorage.setItem("newsid",id);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                        myul.prepend(news);
                                        // window.localStorage.setItem("newsid",id);
                                    }
                                    break;
                                case 2:
                                    li.className = 'mui-table-view-cell notgodetail';
                                    li.innerHTML =
                                        '<p class="item-vedio-title"></p>' +
                                        '<div class="item-vedio-img">' +

                                        '</div>' +
                                        '<p class="article-sorts">' +
                                        '<span class="columnSorts"></span>&nbsp;' +
                                        '<span class="unitSorts"></span>&nbsp;' +
                                        '<span class="commentsNum"></span>评论&nbsp;' +
                                        '<span class="likesNum"></span>赞' +
                                        '</p>';
                                    var news = jQuery(li);
                                    myAjaxImg(id, news);
                                    news.find(".item-vedio-title").text(title);
                                    news.find(".mui-table-view-cell").attr("id", id);
                                    news.find(".columnSorts").text(theme);
                                    news.find(".unitSorts").text(author);
                                    news.find(".commentsNum").text(data[i].comment_count);
                                    news.find(".likesNum").text(data[i].like_count);
                                    // window.localStorage.setItem("newsid",id);
                                    news.attr("data-id", id);
                                    news.attr("data-fun", sorts);
                                    myul.prepend(news);
                                    break;
                                case 3:

                                    break;
                            }
                        }

                        function myAjaxImg(id, news) {
                            mui.post('/home/index/photo_news', { id: id }, function(ganma, textStatus, xhr) {
                                console.log(ganma);
                                for (var k = 0; k < ganma.length; k++) {

                                    var detail = ganma[k].detail;


                                    // window.localStorage.setItem("newsid",id);
                                    news.attr("data-id", id);
                                    news.attr("data-fun", sorts);
                                    for (var w = 0; w < detail.length; w++) {
                                        var imglar = jQuery('<img class="imageLar" data-preview-src="" data-preview-group="2" data-content="">');
                                        var imglar = jQuery(imglar);



                                        imglar.attr("src", detail[w].photo_photo);
                                        imglar.attr("data-content", detail[w].photo_text);
                                        news.find(".item-vedio-img").append(imglar);
                                    }
                                    news.find(".item-vedio-title").text(ganma[k].title);
                                    news.attr("id", "lili" + ganma[k].id);
                                    news.find(".unitSorts").text(ganma[k].author);
                                    news.find(".commentsNum").text(ganma[k].comment_count);
                                    news.find(".likesNum").text(ganma[k].like_count);
                                    myul.prepend(news);
                                }
                                jQuery(".imageLar").bind('click', function() {
                                    mui.previewImage();
                                })
                            });
                        }
                    }
                });
            }

        return fragment;
        }
        var createFragmentupmain = function(ul, index, count) {
            var length = ul.querySelectorAll('li').length;
            var fragment = document.createDocumentFragment();
            var myul=jQuery(fragment);
            var li;
            var page = "2";
            var stop = true;
            for (var j = 0; j < count; j++) {
            	if(stop==true){
            		stop=false;
            		mui.ajax({
                    url: '/home/index/ajaxmain_list',
                    type: 'post',
                    data: {
                        number: '5',
                        page: page,
                    },
                    success: function(data) {
                    	stop=true;
                        for (i = 0; i < data.length; i++) {
                            li = document.createElement('li');
                            var sorts = data[i].function;
                            var sortsNum = Number(sorts);
                            var id = data[i].id;
                            var title = data[i].title;
                            var theme = data[i].theme;
                            var author = data[i].author;
                            var comment_count = data[i].comment_count;
                            var like_count = data[i].like_count;
                            switch (sortsNum) {
                                case 1:
                                    if (data[i].photo = "") {
                                        li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML = '<div class="item-content-whole">' +
                                            '<p class="item-vedio-title"></p>' +
                                            '<p class="article-sorts">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>';
                                        var news = jQuery(li);
                                        news.find(".item-vedio-title").text(data[i].title);
                                        news.find(".mui-table-view-cell").attr("id", data[i].id);
                                        news.find("columnSorts").text(data[i].theme);
                                        news.find(".unitSorts").text(data[i].author);
                                        news.find(".commentsNum").text(data[i].comment_count);
                                        news.find(".likesNum").text(data[i].like_count);

                                        //window.localStorage.setItem("newsid",id);
                                        //news.find('.goDetail').attr("data-id",id);
                                        // window.localStorage.setItem("newsid",id);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                        myul.prepend(news);
                                    } else {
                                        li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML =
                                            '<div class="item-container newsDetail">' +
                                            '<img class="item-img">' +
                                            '<div class="item-content">' +
                                            '<p class="item-title"></p>' +
                                            '<p class="article-sorts2">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>' +
                                            '</div>';
                                        var news = jQuery(li);
                                        news.find(".item-title").text(data[i].title);
                                        news.find(".item-img").attr("src", data[i].photo);
                                        news.find(".mui-table-view-cell").attr("id", data[i].id);
                                        news.find("columnSorts").text(data[i].theme);
                                        news.find(".unitSorts").text(data[i].author);
                                        news.find(".commentsNum").text(data[i].comment_count);
                                        news.find(".likesNum").text(data[i].like_count);

                                        //window.localStorage.setItem("newsid",id);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                       myul.prepend(news);
                                        // window.localStorage.setItem("newsid",id);
                                    }
                                    break;
                                case 2:
                                    li.className = 'mui-table-view-cell notgodetail';
                                    li.innerHTML =
                                        '<p class="item-vedio-title"></p>' +
                                        '<div class="item-vedio-img">' +

                                        '</div>' +
                                        '<p class="article-sorts">' +
                                        '<span class="columnSorts"></span>&nbsp;' +
                                        '<span class="unitSorts"></span>&nbsp;' +
                                        '<span class="commentsNum"></span>评论&nbsp;' +
                                        '<span class="likesNum"></span>赞' +
                                        '</p>';
                                    var news = jQuery(li);
                                    myAjaxImg(id, news);
                                    news.find(".item-vedio-title").text(title);
                                    news.find(".mui-table-view-cell").attr("id", id);
                                    news.find(".columnSorts").text(theme);
                                    news.find(".unitSorts").text(author);
                                    news.find(".commentsNum").text(data[i].comment_count);
                                    news.find(".likesNum").text(data[i].like_count);
                                    // window.localStorage.setItem("newsid",id);
                                    news.attr("data-id", id);
                                    news.attr("data-fun", sorts);
                                    myul.prepend(news);
                                    break;
                                case 3:

                                    break;
                            }
                        }

                        function myAjaxImg(id, news) {
                            mui.post('/home/index/photo_news', { id: id }, function(ganma, textStatus, xhr) {
                                for (var k = 0; k < ganma.length; k++) {

                                    var detail = ganma[k].detail;


                                    // window.localStorage.setItem("newsid",id);
                                    news.attr("data-id", id);
                                    news.attr("data-fun", sorts);
                                    for (var w = 0; w < detail.length; w++) {
                                        var imglar = jQuery('<img class="imageLar" data-preview-src="" data-preview-group="2" data-content="">');
                                        var imglar = jQuery(imglar);



                                        imglar.attr("src", detail[w].photo_photo);
                                        imglar.attr("data-content", detail[w].photo_text);
                                        news.find(".item-vedio-img").append(imglar);
                                    }
                                    news.find(".item-vedio-title").text(ganma[k].title);
                                    news.attr("id", "lili" + ganma[k].id);
                                    news.find(".unitSorts").text(ganma[k].author);
                                    news.find(".commentsNum").text(ganma[k].comment_count);
                                    news.find(".likesNum").text(ganma[k].like_count);
                                    //jQuery("#mainList").append(news);
                                }
                                jQuery(".imageLar").bind('click', function() {
                                    mui.previewImage();
                                })
                            });
                        }
                        page++;
                    }
                });
            	}
            }
            return fragment;
        };
        var createFragmentdownbranch = function(ul, index, count) {
            console.log(count);
            var length = ul.querySelectorAll('li').length;
            var fragment = document.createDocumentFragment();
            var ulist=jQuery(fragment);
            var li;
            var themeid = jQuery(".mui-control-item").eq(index).attr("data-id");
            for (var j = 0; j < count; j++) {
                mui.ajax({
                    url: '/home/index/lists',
                    type: 'post',
                    data: {
                        theme_id: themeid,
                        number: '10',
                    },
                    success: function(data) {
                        for (var j = 0; j < data.length; j++) {
                            var sorts = data[j].function;
                            var sortsNum = Number(sorts);
                            var id = data[j].id;
                            var title = data[j].title;
                            var theme = data[j].theme;
                            var author = data[j].author;
                            var comment_count = data[j].comment_count;
                            var like_count = data[j].like_count;
                            switch (sortsNum) {
                                case 1:
                                    if (data[j].photo = "") {
                                    	li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML =
                                       
                                            '<div class="item-content-whole">' +
                                            '<p class="item-vedio-title"></p>' +
                                            '<p class="article-sorts">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>' 
                                            ;
                                        var news = jQuery(li);  
                                        news.find(".item-vedio-title").text(data[j].title);
                                        news.attr("id", "lili" + data[j].id);
                                        news.find(".columnSorts").text(data[j].theme);
                                        news.find(".unitSorts").text(data[j].author);
                                        news.find(".commentsNum").text(data[j].comment_count);
                                        news.find(".likesNum").text(data[j].like_count);
                                        //jQuery("#item" + themeid + "mobile").find(".branchList").append(news);
                                        ulist.prepend(news);
                                        //$('#mainList').append(news);
                                        //$('#mainList').children("mui-table-view-cell").find(".goDetail").attr("moreComments.html");
                                        //window.localStorage.setItem("newsid",id);
                                        //news.find('.goDetail').attr("data-id",id);
                                        // window.localStorage.setItem("newsid",id);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                    } else {
                                        li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML =
                                            '<div class="item-container newsDetail">' +
                                            '<img class="item-img">' +
                                            '<div class="item-content">' +
                                            '<p class="item-title"></p>' +
                                            '<p class="article-sorts2">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>' +
                                            '</div>'
                                            ;
                                        var news = jQuery(li);  
                                        news.find(".item-title").text(data[j].title);
                                        news.find(".item-img").attr("src", data[j].photo);
                                        news.attr("id", "lili" + data[j].id);
                                        news.find("columnSorts").text(data[j].theme);
                                        news.find(".unitSorts").text(data[j].author);
                                        news.find(".commentsNum").text(data[j].comment_count);
                                        news.find(".likesNum").text(data[j].like_count);
                                        //listContainer.find("#branchList").append(news);
                                        //window.localStorage.setItem("newsid",id);
                                        //$("#item" + themeid + "mobile").find(".branchList").append(news);
                                        ulist.prepend(news);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                        // window.localStorage.setItem("newsid",id);
                                    }
                                    break;
                                case 2:
                                    var count = 100;
                                    li.className = 'mui-table-view-cell goDetail';
                                    li.innerHTML =
                                        '<p class="item-vedio-title"></p>' +
                                        '<div class="item-vedio-img">' +

                                        '</div>' +
                                        '<p class="article-sorts">' +
                                        '<span class="columnSorts"></span>&nbsp;' +
                                        '<span class="unitSorts"></span>&nbsp;' +
                                        '<span class="commentsNum"></span>评论&nbsp;' +
                                        '<span class="likesNum"></span>赞' +
                                        '</p>' 
                                        ;
                                        var news = jQuery(li); 
                                    // news.find(".item-vedio-title").text(data[j].title);
                                    // news.attr("id", "lili"+data[j].id);
                                    // news.find(".unitSorts").text(data[j].author);
                                    // news.find(".commentsNum").text(data[j].comment_count);
                                    // news.find(".likesNum").text(data[j].like_count);
                                    //listContainer.find("#branchList").append(news);
                                    // window.localStorage.setItem("newsid",id);
                                    //$("#item" + themeid + "mobile").find(".branchList").append(news);
                                    news.attr("data-id", id);
                                    news.attr("data-fun", sorts);
                                    myAjaxImg(id, news);
                                    ulist.prepend(news);

                                    break;
                                case 3:

                                    break;
                            }
                            /*optional stuff to do after success */
                        }

                        function myAjaxImg(id, news) {
                            $.post('/home/index/photo_news', { id: id }, function(ganma, textStatus, xhr) {
                                for (var k = 0; k < ganma.length; k++) {
                                    var detail = ganma[k].detail;
                                    for (var w = 0; w < detail.length; w++) {
                                        var imglar = $('<img class="imageLar" data-preview-src="" data-preview-group="3" data-content="">');
                                        imglar.attr("src", detail[w].photo_photo);
                                        imglar.attr("data-content", detail[w].photo_text);
                                        news.find(".item-vedio-img").append(imglar);
                                        imglar.attr("data-preview-group", count);
                                        var imgnum = imglar.attr("data-preview-group");
                                    }
                                    count++;
                                    news.find(".item-vedio-title").text(ganma[k].title);
                                    news.attr("id", "lili" + ganma[k].id);
                                    news.find(".unitSorts").text(ganma[k].author);
                                    news.find(".commentsNum").text(ganma[k].comment_count);
                                    news.find(".likesNum").text(ganma[k].like_count);
                                }
                                $(".imageLar").bind('click', function() {
                                    mui.previewImage();
                                })
                            });
                        }
                    }
                });
            }
            return fragment;

        }
        var createFragmentupbranch = function(ul, index, count, reverse) {
            var length = ul.querySelectorAll('li').length;
            var fragment = document.createDocumentFragment();
            var ulist=jQuery(fragment);
            var li;
            var themeid = jQuery(".mui-control-item").eq(index).attr("data-id");
            for (var j = 0; j < count; j++) {
                mui.ajax({
                    url: '/home/index/ajaxlists',
                    type: 'post',
                    data: {
                        theme_id: themeid,
                        number: '5',
                    },
                    success: function(data) {
                        for (var j = 0; j < data.length; j++) {
                            var sorts = data[j].function;
                            var sortsNum = Number(sorts);
                            var id = data[j].id;
                            var title = data[j].title;
                            var theme = data[j].theme;
                            var author = data[j].author;
                            var comment_count = data[j].comment_count;
                            var like_count = data[j].like_count;
                            switch (sortsNum) {
                                case 1:
                                    if (data[j].photo = "") {
                                    	li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML =
                                       
                                            '<div class="item-content-whole">' +
                                            '<p class="item-vedio-title"></p>' +
                                            '<p class="article-sorts">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>'
                                            ;
                                        var news = jQuery(li);  
                                        news.find(".item-vedio-title").text(data[j].title);
                                        news.attr("id", "lili" + data[j].id);
                                        news.find(".columnSorts").text(data[j].theme);
                                        news.find(".unitSorts").text(data[j].author);
                                        news.find(".commentsNum").text(data[j].comment_count);
                                        news.find(".likesNum").text(data[j].like_count);
                                        //jQuery("#item" + themeid + "mobile").find(".branchList").append(news);
                                        ulist.append(news);
                                        //$('#mainList').append(news);
                                        //$('#mainList').children("mui-table-view-cell").find(".goDetail").attr("moreComments.html");
                                        //window.localStorage.setItem("newsid",id);
                                        //news.find('.goDetail').attr("data-id",id);
                                        // window.localStorage.setItem("newsid",id);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                    } else {
                                        li.className = 'mui-table-view-cell goDetail';
                                        li.innerHTML =
                                            '<div class="item-container newsDetail">' +
                                            '<img class="item-img">' +
                                            '<div class="item-content">' +
                                            '<p class="item-title"></p>' +
                                            '<p class="article-sorts2">' +
                                            '<span class="columnSorts"></span>&nbsp;' +
                                            '<span class="unitSorts"></span>&nbsp;' +
                                            '<span class="commentsNum"></span>评论&nbsp;' +
                                            '<span class="likesNum"></span>赞' +
                                            '</p>' +
                                            '</div>' +
                                            '</div>'
                                            ;
                                        var news = jQuery(li);  
                                        news.find(".item-title").text(data[j].title);
                                        news.find(".item-img").attr("src", data[j].photo);
                                        news.attr("id", "lili" + data[j].id);
                                        news.find("columnSorts").text(data[j].theme);
                                        news.find(".unitSorts").text(data[j].author);
                                        news.find(".commentsNum").text(data[j].comment_count);
                                        news.find(".likesNum").text(data[j].like_count);
                                        //listContainer.find("#branchList").append(news);
                                        //window.localStorage.setItem("newsid",id);
                                        //$("#item" + themeid + "mobile").find(".branchList").append(news);
                                        ulist.append(news);
                                        news.attr("data-id", id);
                                        news.attr("data-fun", sorts);
                                        // window.localStorage.setItem("newsid",id);
                                    }
                                    break;
                                case 2:
                                    var count = 100;
                                    li.className = 'mui-table-view-cell goDetail';
                                    li.innerHTML =
                                        '<p class="item-vedio-title"></p>' +
                                        '<div class="item-vedio-img">' +

                                        '</div>' +
                                        '<p class="article-sorts">' +
                                        '<span class="columnSorts"></span>&nbsp;' +
                                        '<span class="unitSorts"></span>&nbsp;' +
                                        '<span class="commentsNum"></span>评论&nbsp;' +
                                        '<span class="likesNum"></span>赞' +
                                        '</p>' 
                                        ;
                                        var news = jQuery(li); 
                                    // news.find(".item-vedio-title").text(data[j].title);
                                    // news.attr("id", "lili"+data[j].id);
                                    // news.find(".unitSorts").text(data[j].author);
                                    // news.find(".commentsNum").text(data[j].comment_count);
                                    // news.find(".likesNum").text(data[j].like_count);
                                    //listContainer.find("#branchList").append(news);
                                    // window.localStorage.setItem("newsid",id);
                                    //$("#item" + themeid + "mobile").find(".branchList").append(news);
                                    ulist.append(news);
                                    news.attr("data-id", id);
                                    news.attr("data-fun", sorts);
                                    myAjaxImg(id, news);

                                    break;
                                case 3:

                                    break;
                            }
                            /*optional stuff to do after success */
                        }

                        function myAjaxImg(id, news) {
                            $.post('/home/index/photo_news', { id: id }, function(ganma, textStatus, xhr) {
                                console.log(ganma);
                                for (var k = 0; k < ganma.length; k++) {
                                    var detail = ganma[k].detail;
                                    for (var w = 0; w < detail.length; w++) {
                                        var imglar = $('<img class="imageLar" data-preview-src="" data-preview-group="3" data-content="">');
                                        imglar.attr("src", detail[w].photo_photo);
                                        imglar.attr("data-content", detail[w].photo_text);
                                        news.find(".item-vedio-img").append(imglar);
                                        imglar.attr("data-preview-group", count);
                                        var imgnum = imglar.attr("data-preview-group");
                                    }
                                    count++;
                                    news.find(".item-vedio-title").text(ganma[k].title);
                                    news.attr("id", "lili" + ganma[k].id);
                                    news.find(".unitSorts").text(ganma[k].author);
                                    news.find(".commentsNum").text(ganma[k].comment_count);
                                    news.find(".likesNum").text(ganma[k].like_count);
                                }
                                $(".imageLar").bind('click', function() {
                                    mui.previewImage();
                                })
                            });
                        }
                    }
                });
            }
            return fragment;

        }
    });
}
