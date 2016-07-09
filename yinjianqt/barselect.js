function initDeceleration($) {
    var deceleration = mui.os.ios?0.003:0.0009;
                $('.mui-scroll-wrapper').scroll({
                    bounce: false,
                    indicators: true, //是否显示滚动条
                    deceleration:deceleration
                });
                $.ready(function() {
                    //循环初始化所有下拉刷新，上拉加载。
                    $.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
                        $(pullRefreshEl).pullToRefresh({
                            down: {
                                callback: function() {
                                    var self = this;
                                    setTimeout(function() {
                                        var ul = self.element.querySelector('.mui-table-view');
                                        ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
                                        self.endPullDownToRefresh();
                                    }, 1000);
                                }
                            },
                            up: {
                                callback: function() {
                                    var self = this;
                                    setTimeout(function() {
                                        var ul = self.element.querySelector('.mui-table-view');
                                        ul.appendChild(createFragment(ul, index, 5));
                                        self.endPullUpToRefresh();
                                    }, 1000);
                                }
                            }
                        });
                    });
                    var createFragment = function(ul, index, count, reverse) {
                        var length = ul.querySelectorAll('li').length;
                        var fragment = document.createDocumentFragment();
                        var li;
                        for (var i = 0; i < count; i++) {
                            li = document.createElement('li');
                            li.className = 'mui-table-view-cell';
                            li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
                            fragment.appendChild(li);
                        }
                        return fragment;
                    };
                });
    //阻尼系数
    // var deceleration = mui.os.ios ? 0.003 : 0.0009;
    // $('.mui-scroll-wrapper').scroll({
    //     bounce: false,
    //     indicators: true, //是否显示滚动条
    //     deceleration: deceleration
    // });
    // $.ready(function() {
    //     //循环初始化所有下拉刷新，上拉加载。
    //         $.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
    //             $(pullRefreshEl).pullToRefresh({
    //                 down: {
    //                     callback: function() {
    //                         var self = this;
    //                         setTimeout(function() {
    //                             var ul = self.element.querySelector('.mui-table-view');
    //                             ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
    //                             self.endPullDownToRefresh();
    //                         }, 1000);
    //                     }
    //                 },
    //                 up: {
    //                     callback: function() {
    //                         var self = this;
    //                         setTimeout(function() {
    //                             var ul = self.element.querySelector('.mui-table-view');
    //                             ul.appendChild(createFragment(ul, index, 5));
    //                             self.endPullUpToRefresh();
    //                         }, 1000);
    //                     }
    //                 }
    //             });
    //         });
    //         var count = 0;
    //         var createFragment = function(ul, index, count, reverse) {
    //             var length = ul.querySelectorAll('li').length;
    //             var fragment = document.createDocumentFragment();
    //             var li1;
    //             var li2;
    //             for (var i = 0; i < count; i++) {
    //                 li1 = document.createElement('li');
    //                 li1.className = 'mui-table-view-cell';
    //                 li2 = document.createElement('li');
    //                 li2.className = 'mui-table-view-cell';
    //                 li1.innerHTML = '<div class="item-content-whole"><p class="item-vedio-title">军方：中国军舰正常通过日临近海域 符合国际法</p><p class="article-sorts">政策法规&nbsp;中国银监会&nbsp;203评论&nbsp;400赞</p></div>';
    //                 li2.innerHTML = '<div class="item-content-whole"><p class="item-vedio-title">这是个测试</p><p class="article-sorts">青年心得&nbsp;上海银监会&nbsp;203评论&nbsp;400赞</p></div>';

    //                 fragment.appendChild(li1);
    //                 fragment.appendChild(li2);

    //             }
    //             return fragment;
    //         };
    //     });

}
