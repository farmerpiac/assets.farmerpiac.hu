let windowWidth=window.innerWidth;function productDetailGallery(e){function t(){var e=$(".thumb.active").closest("div").next("div").find(".thumb");0==e.length&&(e=$(".thumb:first")),i(e)}function i(e){$(".thumb").removeClass("active");var t=e.attr("href");e.addClass("active"),$("#mainImage img").attr("src",t)}$(".thumb:first").addClass("active"),timer=setInterval(t,e),$(".thumb").click((function(o){i($(this)),clearInterval(timer),timer=setInterval(t,e),o.preventDefault()})),$("#mainImage").hover((function(){clearInterval(timer)}),(function(){timer=setInterval(t,e)}))}function utils(){$("#checkout").on("click",".box.shipping-method, .box.payment-method",(function(e){$(this).find(":radio").prop("checked",!0)})),$(".box.clickable").on("click",(function(e){window.location=$(this).find("a").attr("href")})),$(".external").on("click",(function(e){e.preventDefault(),window.open($(this).attr("href"))})),$(".scroll-to, .scroll-to-top").click((function(e){var t=this.href;t.split("#").length>1&&(!function(e){var t=e.split("#")[1],i=$("#"+t).offset().top-100;i<0&&(i=0);$("html, body").animate({scrollTop:i},1e3)}(t),e.preventDefault())}))}function hideCookie(){$("#cookieAccept").hide("slow",(function(){$("#cookieAccept").css("display","none")}))}function setCookie(e,t,i){var o=new Date;o.setTime(o.getTime()+3600*i*1e3);var n="expires="+o.toGMTString();document.cookie=e+"="+t+";"+n+";path=/"}function cookieAccept(){setCookie("acceptCookie",1,2),hideCookie()}function getCookie(e){let t=document.cookie.split(";"),i="";for(let o=0;o<t.length;o++)if(t[o]==e)return i=t[o],i;return!1}function setExpiry(e){const t=new Date;localStorage.setItem("ttl",t.getTime()+3600*e*1e3)}function deleteExpiry(){const e=localStorage.getItem("ttl");if(!e)return null;return(new Date).getTime()>e?($.ajax({url:"https://"+window.location.hostname+"/kosar/torles",type:"POST",async:!0,success:function(){localStorage.clear(),$("#cart").text("0"),$("#getCart").text("0")},error:function(){}}),null):void 0}function putCart(e){let t=parseInt($("#cart").text());if(setExpiry(2),null==localStorage.getItem(e))localStorage.setItem(e,1),$("#cart").text(++t),localStorage.setItem("cartValue",t);else if(null!=localStorage.getItem(e)){let t=localStorage.getItem(e);localStorage.setItem(e,++t)}}function deleteCart(){localStorage.clear()}windowWidth<1200?$(".lazy").removeClass("img-big"):$(".lazy").removeClass("img-small"),window.onresize=function(){let e=Math.round(window.innerHeight/3);$(".megamenu").css("height",e)},$((function(){$(".shop-detail-carousel").owlCarousel({lazyLoad:!0,items:1,thumbs:!0,nav:!1,dots:!1,loop:!0,autoplay:!0,thumbsPrerendered:!0}),$("#main-slider").owlCarousel({lazyLoad:!0,items:1,nav:!1,dots:!0,autoplay:!0,autoplayHoverPause:!0,dotsSpeed:400}),$("#get-inspired").owlCarousel({lazyLoad:!0,items:1,nav:!1,dots:!0,autoplay:!0,autoplayHoverPause:!0,dotsSpeed:400}),$(".product-slider").owlCarousel({lazyLoad:!0,items:1,dots:!0,nav:!1,responsive:{480:{items:1},765:{items:2},991:{items:3},1200:{items:5}}}),utils();var e=$("link#theme-stylesheet");$("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(e);var t=$("link#new-stylesheet");$.cookie("theme_csspath")&&t.attr("href",$.cookie("theme_csspath")),$("#colour").change((function(){if(""!==$(this).val()){var e="css/style."+$(this).val()+".css";t.attr("href",e),$.cookie("theme_csspath",e,{expires:365,path:document.URL.substr(0,document.URL.lastIndexOf("/"))})}return!1}))})),$(window).on("load",(function(){$(this).alignElementsSameHeight()})),$(window).resize((function(){setTimeout((function(){$(this).alignElementsSameHeight()}),150)})),$.fn.alignElementsSameHeight=function(){$(".same-height-row").each((function(){var e=0,t=$(this).find(".same-height");t.height("auto"),$(document).width()>768&&(t.each((function(){$(this).innerHeight()>e&&(e=$(this).innerHeight())})),t.innerHeight(e)),e=0,(t=$(this).find(".same-height-always")).height("auto"),t.each((function(){$(this).innerHeight()>e&&(e=$(this).innerHeight())})),t.innerHeight(e)}))},getCookie(" acceptCookie=1")&&$("#cookieAccept").css("display","none"),deleteExpiry(),null!=localStorage.getItem("cartValue")&&$("#cart").text(localStorage.getItem("cartValue"));
