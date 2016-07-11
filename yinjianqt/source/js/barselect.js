function initDeceleration($,mui){
//阻尼系数
	var deceleration = mui.os.ios?0.003:0.0009;
	mui('.mui-scroll-wrapper').scroll({
		bounce: false,
		indicators: true, //是否显示滚动条
		deceleration:deceleration
	});
	mui.ready(function() {
		// 循环初始化所有下拉刷新，上拉加载。
		mui.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
			if(index == 0){
				mui(pullRefreshEl).pullToRefresh({
					down: {
						callback: function() {
                            // 首页的获取最新的10条
							var self = this;
							$.when(getNewestMainData(10)).done(function(data){
								self.endPullDownToRefresh();
							});
						}
					},
					up: {
						callback: function() {
                            // 首页的加载更多
							var self = this;
                            var nowPage = Math.ceil($(self.element).find(".mui-table-view .mui-table-view-cell").length/10) + 1;
                            $.when(getMoreMainData(nowPage,10)).done(function(data){
                                if(data&&data.length){
                                    self.endPullUpToRefresh(false);
                                }
                                else{
                                    self.endPullUpToRefresh(true);
                                }
                            });
						}
					} 
				});
			}
			else{
                mui(pullRefreshEl).pullToRefresh({
                    down: {
                        callback: function() {
                            // 其他页的获取最新的10条
                            var self = this;
                            var pageId = $(self.element).closest(".mui-slider-item").attr("data-id");
                            $.when(getNewestOtherData(pageId,10)).done(function(data){
                                self.endPullDownToRefresh();
                            });
                        }
                    },
                    up: {
                        callback: function() {
                            // 其他页面的加载更多
                            var self = this;
                            var pageId = $(self.element).closest(".mui-slider-item").attr("data-id");
                            var nowPage = Math.ceil($(self.element).find(".mui-table-view .mui-table-view-cell").length/10) + 1;
                            $.when(getMoreOtherData(pageId,nowPage,10)).done(function(data){
                                if(data&&data.length){
                                    self.endPullUpToRefresh(false);
                                }
                                else{
                                    self.endPullUpToRefresh(true);
                                }
                            });
                        }
                    } 
                });
			}
		});
	});
}






