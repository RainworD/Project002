window.addEventListener('load', function () { 
      var url = location.hash.slice(2);
      if (url!=""){
      $(".content").load(url)}
      else{
      $(".content").load("summaryz.html")
      };
    }); 
    // hash变化时的处理 
    window.addEventListener('hashchange', function () { 
      var url = location.hash.slice(2);
      if (url!=""){
      $(".content").load(url)}
      else{
      $(".content").load("summaryz.html")
      };
    }); 
// var content = document.querySelectorAll('.content'); 
// 测试函数，这里可以放一些ajax处理之类的 
function loadContent ( a ) { 
	$(".content").load(a);
} 




$(function(){
	var h =  $(window).height()-$(".header").height();
       $(".content").css("height",h+"px");
       $(".left").css("max-height",h+"px");
      $(".client").click(function(){
      	if($(".dropdown-menu").is(":hidden")){
      		$(".dropdown-menu").show();}
      	else{
      		$(".dropdown-menu").hide();
      	}

      	
      })
      $(".xl").click(function(){
      	if($("#zh").is(".leftmenu.lixiao")){
            
      	}
      	else{$(this).next("ul").slideToggle();}
      });

        

      $(".button01").click(function(){
      	
      	$(".leftmenu>li span").toggle();
      	$(".xl").next("ul").hide();
      	// $(".leftmenu>ul").toggleClass("list")
      	$("#xiala01").toggle();
      	$("#xiala02").toggle();
      	$("#xiala03").toggle();
      	$("#xiala04").toggle();
      	$("#xiala05").toggle();
      	$("#xiala06").toggle();
      	$("#zh").toggleClass("lixiao");
      	$(".cont").toggleClass("cont1");
        $(".left").toggleClass("left1");
        // $("#form").unbind("click");
      })


       function isSmall(){
       		return $("#zh").hasClass("lixiao")&&$("#zh").hasClass("leftmenu");
       }
     

        $(".xl").hover(
        	function(){
      	       
               isSmall()&&$(this).find("span").show();    

            },
            
            function(){
      	       
      	         isSmall()&&$(this).find("span").hide();
            }
        	)

        $("#bi,#fo").hover(
          function(){
             isSmall()&&$("#bi").addClass("hhh");
               isSmall()&&$("#fo").addClass("list");
               isSmall()&&$("#fo").show();
               isSmall()&&$("#xiala01").show();
               isSmall()&&$("#bi>span").show(); 


            },
            
            function(){
               isSmall()&&$("#bi").removeClass("hhh");
               isSmall()&&$("#fo").hide();
               isSmall()&&$("#fo").removeClass("list");
               isSmall()&&$("#xiala01").hide(); 
               isSmall()&&$("#bi>span").hide();
            }
            );
       	$("#form,#guanli").hover(
       		function(){
       		   isSmall()&&$("#form").addClass("hhh");
      	       isSmall()&&$("#guanli").addClass("list");
      	       isSmall()&&$("#guanli").show();
               isSmall()&&$("#xiala06").show();
               isSmall()&&$("#form>span").show(); 


            },
            
            function(){
               isSmall()&&$("#form").removeClass("hhh");
               isSmall()&&$("#guanli").hide();
      	       isSmall()&&$("#guanli").removeClass("list");
      	       isSmall()&&$("#xiala06").hide(); 
      	       isSmall()&&$("#form>span").hide();
            }
            );
       	
        $("#eiw,#ei").hover(
        	function(){
        	isSmall()&&$("#eiw").addClass("hhh");
      	    isSmall()&&$("#ei").addClass("list");
      	    isSmall()&&$("#ei").show();
      	    isSmall()&&$("#xiala02").show();
      	    isSmall()&&$("#eiw>span").show();
            },
            function(){
            isSmall()&&$("#eiw").removeClass("hhh");
      	    isSmall()&&$("#ei").removeClass("list");
      	    isSmall()&&$("#ei").hide();
      	    isSmall()&&$("#xiala02").hide(); 
      	    isSmall()&&$("#eiw>span").hide();
            });
        $("#com,#co").hover(
         	function(){
      	    isSmall()&&$("#com").addClass("hhh");
      	    isSmall()&&$("#co").addClass("list");
      	    isSmall()&&$("#co").show();
      	    isSmall()&&$("#xiala03").show();
      	    isSmall()&&$("#com>span").show();
            },
            function(){
      	    isSmall()&&$("#com").removeClass("hhh");
      	    isSmall()&&$("#co").removeClass("list");
      	    isSmall()&&$("#co").hide();
      	    isSmall()&&$("#xiala03").hide(); 
      	    isSmall()&&$("#com>span").hide();
            }
            );
        $("#gaoxiao,#gaoxiaoshuju").hover(
          function(){
            isSmall()&&$("#gaoxiao").addClass("hhh");
            isSmall()&&$("#gaoxiaoshuju").addClass("list");
            isSmall()&&$("#gaoxiaoshuju").show();
            isSmall()&&$("#xiala05").show();
            isSmall()&&$("#gaoxiao>span").show();
            },
            function(){
            isSmall()&&$("#gaoxiao").removeClass("hhh");
            isSmall()&&$("#gaoxiaoshuju").removeClass("list");
            isSmall()&&$("#gaoxiaoshuju").hide();
            isSmall()&&$("#xiala05").hide(); 
            isSmall()&&$("#gaoxiao>span").hide();
            }
            );
        $("#biaoqk,#biaoqianku").hover(
          function(){
            isSmall()&&$("#biaoqk").addClass("hhh");
            isSmall()&&$("#biaoqianku").addClass("list");
            isSmall()&&$("#biaoqianku").show();
            isSmall()&&$("#xiala07").show();
            isSmall()&&$("#biaoqk>span").show();
            },
            function(){
            isSmall()&&$("#biaoqk").removeClass("hhh");
            isSmall()&&$("#biaoqianku").removeClass("list");
            isSmall()&&$("#biaoqianku").hide();
            isSmall()&&$("#xiala07").hide(); 
            isSmall()&&$("#biaoqk>span").hide();
            }
            );
        $("#newpage,#newpa").hover(
          function(){
            isSmall()&&$("#newpage").addClass("hhh");
            isSmall()&&$("#newpa").addClass("list");
            isSmall()&&$("#newpa").show();
            isSmall()&&$("#xiala08").show();
            isSmall()&&$("#newpage>span").show();
            },
            function(){
            isSmall()&&$("#newpage").removeClass("hhh");
            isSmall()&&$("#newpa").removeClass("list");
            isSmall()&&$("#newpa").hide();
            isSmall()&&$("#xiala08").hide(); 
            isSmall()&&$("#newpage>span").hide();
            }
            );

          
            // Router.route('/summaryz', function () { 
            //    loadContent("summaryz.html"); 
            // }); 

            // Router.route('/article', function () { 
            //  loadContent("article.html"); 
            // }); 

            // Router.route('/comment', function () { 
            //  loadContent("comment.html"); 
            // });

            // Router.route('/question', function () { 
            //  loadContent("question.html"); 
            // });

            // Router.route('/answer', function () { 
            //  loadContent("answer.html"); 
            // });

            // Router.route('/supply', function () { 
            //  loadContent("supply.html"); 
            // });

            // Router.route('/Authority_management', function () { 
            //  loadContent("Authority_management.html"); 
            // });

            // Router.route('/image_management', function () { 
            //  loadContent("image_management.html"); 
            // });

            // Router.route('/selectimage_management', function () { 
            //  loadContent("selectimage_management.html"); 
            // });

            // Router.route('/blockmanagement_index', function () { 
            //  loadContent("blockmanagement_index.html"); 
            // });

            // Router.route('/blockmanagement_selected', function () { 
            //  loadContent("blockmanagement_selected.html"); 
            // });
            // Router.route('/blockmanagement_data', function () { 
            //  loadContent("blockmanagement_data.html"); 
            // });
            // Router.route('/blockmanagement_move', function () { 
            //  loadContent("blockmanagement_move.html"); 
            // });
            // Router.route('/blockmanagement_aaq', function () { 
            //  loadContent("blockmanagement_aaq.html"); 
            // });
            // Router.route('/blockmanagement_list', function () { 
            //  loadContent("blockmanagement_list.html"); 
            // });

            // Router.route('/bottom_management', function () { 
            //  loadContent("bottom_management.html"); 
            // });

            // Router.route('/college_data', function () { 
            //  loadContent("college_data.html"); 
            // });

            // Router.route('/college_model', function () { 
            //  loadContent("college_model.html"); 
            // });

            // Router.route('/college_plus', function () { 
            //  loadContent("college_plus.html"); 
            // });

            // Router.route('/label_management', function () { 
            //  loadContent("label_management.html"); 
            // });
            // Router.route('/school_label_management', function () { 
            //  loadContent("school_label_management.html"); 
            // });

            // Router.route('/managementor', function () { 
            //  loadContent("managementor.html"); 
            // });
            // Router.route('/waiting_article', function () { 
            //  loadContent("waiting_article.html"); 
            // });
            // Router.route('/finished_article', function () { 
            //  loadContent("finished_article.html"); 
            // });
            // Router.route('/college_pass', function () { 
            //  loadContent("college_pass.html"); 
            // });
            // Router.route('/new_page', function () { 
            //  loadContent("new_page.html"); 
            // });
            // Router.route('/newpagelist', function () { 
            //  loadContent("newpagelist.html"); 
            // });
            // Router.route('/college_article', function () { 
            //  loadContent("college_article.html"); 
            // });
            
            $(document).keydown(function(event){ 
           if(event.keyCode==13){ 
            $("#searching").click(); 
            } 
            })




            if(window.location.hash==""){
              loadContent("summaryz.html")
            }
            

            $(".dropdown-menu>li").click(function(){
              $(".dropdown-menu").hide();
            })

    //         window.addEventListener('load', function () { 
    //   var url = location.hash.slice(2);
    //   if (url!=""){
    //   $(".content").load(url)}
    //   // else{
    //   // $(".content").load("charts.html")
    //   // };
    // }); 
    // // hash变化时的处理 
    // window.addEventListener('hashchange', function () { 
    //   var url = location.hash.slice(2);
    //   if (url!=""){
    //   $(".content").load(url)}
    //   // else{
    //   // $(".content").load("charts.html")
    //   // };
    // }); 

})
$(function(){
  $(".left a").bind('click',function(){
      if($(this).attr("href")==window.location.hash){
        loadContent(window.location.hash.slice(2));
      }
  });
  $(".content").on("click",".icon_lqy",function(){
    loadContent(window.location.hash.slice(2));
  });
    function getTagList(baseurl,key){
        var ajax = $.ajax({
          url: baseurl+"/article_tagssearchapi",
          type: "POST",
          data:{
            "key":key
          }
        });
        return ajax;
    }
    function getTagListschool(baseurl,key){
        var ajax = $.ajax({
          url: baseurl+"/school_labelsearchapi",
          type: "POST",
          data:{
            "key":key
          }
        });
        return ajax;
    }
    function getBase64(){}
    $(document).bind('click',function(e){
        var t = e.target || e.srcElement;
        $(".onlyfocus").removeClass("show");
    });
    $(document).on('click',".onlyfocus",function(e){
        e.stopPropagation();
    });
    window.getTagList = getTagList;
});