webpackJsonp([0],[,function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t){function a(t){for(let a=0;a<8;a++)t.append('<li><div class="s-item"><div class="s-item-img-wrap"><img src="../app/images/seckill/seckill_headphone.jpg" alt=""><div class="remain-time"> <em>剩余时间：</em></div></div><p class="s-item-name">FIIL头戴式无线降噪耳机 魔影红</p><div class="s-item-price"><span>秒杀价:</span><span class="s-item-price-now">￥1999</span></div><a href="javascript:void(0)" class="seckill-btn seckill-btn-sale">立即秒杀</a></div></li>')}function e(){if("none"==t(".seckill-container").css("background-image")){var a=t(".seckill-container").attr("data-src");t(".seckill-container").css("background",'url("'+a+'") no-repeat center'),p(),c(),setInterval(c,12e5)}}var n=s(2),i=(s.n(n),s(3)),l=(s.n(i),s(4)),r=(s.n(l),function(){var a=0,s=t(".banner-layer-5-stars").eq(a),e=s.attr("data-src");"none"==s.css("background-image")?s.css("background",'url("'+e+'") no-repeat').fadeIn("slow"):s.fadeIn("slow");var n=function(){a==t(".banner-layer-5-stars").length&&(a=0);var s=t(".banner-layer-5-stars").eq(a),e=s.attr("data-src");s.siblings().fadeOut("slow"),"none"==s.css("background-image")?s.css("background",'url("'+e+'") no-repeat').fadeIn("slow"):s.fadeIn("slow"),a++};setInterval(n,5e3)}),c=function(){var s=(new Date).getHours(),e=t(".s-timeSlot");for(let l=0;l<e.length;l++){var n=e.eq(l),i=n.attr("timeSlot").split(",");n.parent().removeClass("sgreen"),n.parent().removeClass("sred"),t("#s-tab-"+l).hide(),i[0]>s?(n.parent().addClass("sgreen"),n.siblings("em").html("即将开始")):i[0]<=s&&i[1]>s?(n.parent().addClass("sred"),a(t("#s-tab-"+l)),t("#s-tab-"+l).show(),n.siblings("em").html("正在进行")):i[1]<=s&&(n.parent().addClass("sgreen"),n.parent().attr("status","end"),n.siblings("em").html("已结束"),o(t("#s-tab-"+l)))}},o=function(a){a.find("li").each(function(a,s){var e=t(this);e.attr("flag")||(e.attr("flag","saleout"),e.find(".s-item-img-wrap").append('<div class="s-item-saleout-cover"></div>'),t(".seckill-btn",e).removeClass("seckill-btn-sale"),t(".seckill-btn",e).addClass("seckill-btn-salout")),t(".seckill-btn",e).html("已抢光")})},p=function(){t(".seckill-tab a").each(function(s){t(this).click(function(){var e=t("#s-tab-"+s);0==e.find("li").length&&(console.log(e),a(e)),"end"==t(this).attr("status")&&o(e),e.show(),e.siblings().hide()})})};t(window).on("scroll",function(t,a,s){var e,n=new Date;return function(){var i=arguments,l=new Date;clearTimeout(e),l-n>=s?(t.apply(this,i),n=l):e=setTimeout(t,a)}}(e,500,1e3)),t(function(){var a=0,s=setInterval(function(){(function(a){t(".process-block em").html(a),t(".process").animate({width:a/100+"%"},1e3),t(".process-block").animate({left:a/100+"%"},1e3)})(a+=1e3),a>=1e4&&clearInterval(s)},6e3);t(".w-btn").click(function(){t(".w-shuoming").show()}),t(".hot-link-close").click(function(){t(".w-shuoming").hide()}),setTimeout(function(){t(".banner-layer-3-topTitle").fadeIn(500)},1500),setTimeout(function(){t(".banner-layer-3-titleLeft").fadeIn().animate({marginLeft:"-81px"},"fast")},2200),setTimeout(function(){t(".banner-layer-3-titleRight").fadeIn().animate({marginRight:"-45px"},"fast")},2800),setTimeout(function(){t(".banner-layer-4-subTitle").fadeIn("fast").css("display","inline-block")},4e3),setTimeout(r,4500)})}.call(a,s(0))},function(t,a){},function(t,a){},function(t,a,s){t.exports='<!DOCTYPE html><html lang="en"><head>\t<meta charset="UTF-8">\t<title>Document</title></head><body>\t<nav>\t\t<img src='+JSON.stringify(s(5))+' alt=""></nav>\t<div class="banner">\t\t<div class="banner-layer-1">\t\t\t<div class="banner-layer-1-sounds">\t\t\t\t<div class="banner-sound banner-soundLeft">\t\t\t\t\t<img src='+JSON.stringify(s(6))+' alt=""></div>\t\t\t\t<div class="banner-sound banner-soundRight">\t\t\t\t\t<img src='+JSON.stringify(s(7))+' alt=""></div>\t\t\t</div>\t\t</div>\t\t<div class="banner-layer-2">\t\t\t<div class="clearfix banner-layer-2-smog">\t\t\t\t<img src='+JSON.stringify(s(8))+' alt=""></div>\t\t\t<div class="banner-layer-2-hdphones">\t\t\t\t<img src='+JSON.stringify(s(9))+' alt=""></div>\t\t</div>\t\t<div class="banner-layer-3">\t\t\t<div class="banner-layer-3-topTitle">\t\t\t\t<img src='+JSON.stringify(s(10))+' alt=""></div>\t\t\t<div class="banner-layer-3-title clearfix">\t\t\t\t<span class="banner-layer-3-titleLeft">\t\t\t\t\t<img src='+JSON.stringify(s(11))+' alt=""></span>\t\t\t\t<span class="banner-layer-3-titleRight">\t\t\t\t\t<img src='+JSON.stringify(s(12))+' alt=""></span>\t\t\t</div>\t\t</div>\t\t<div class="banner-layer-4">\t\t\t<div class="banner-layer-4-subTitle">\t\t\t\t<img src='+JSON.stringify(s(13))+' alt=""></div>\t\t\t<div>\t\t\t\t<a href="javascript:void(0)" class="banner-layer-4-q banner-layer-4-q1">\t\t\t\t\t<img src='+JSON.stringify(s(14))+' alt=""></a>\t\t\t\t<a href="javascript:void(0)" class="banner-layer-4-q banner-layer-4-q2">\t\t\t\t\t<img src='+JSON.stringify(s(15))+' alt=""></a>\t\t\t\t<a href="javascript:void(0)" class="banner-layer-4-q banner-layer-4-q3">\t\t\t\t\t<img src='+JSON.stringify(s(16))+' alt=""></a>\t\t\t\t<a href="javascript:void(0)" class="banner-layer-4-q banner-layer-4-q4">\t\t\t\t\t<img src='+JSON.stringify(s(17))+' alt=""></a>\t\t\t</div>\t\t</div>\t\t<ul class="banner-layer-5">\t\t\t<li class="banner-layer-5-stars banner-layer-5-luhan" data-src="../app/images/banner/luhan.png"></li>\t\t\t<li class="banner-layer-5-stars banner-layer-5-william" data-src="../app/images/banner/william.png"></li>\t\t\t<li class="banner-layer-5-stars banner-layer-5-wangfeng" data-src="../app/images/banner/wangfeng.png"></li>\t\t\t<li class="banner-layer-5-stars banner-layer-5-SNH48" data-src="../app/images/banner/SNH48.png"></li>\t\t\t<li class="banner-layer-5-stars banner-layer-5-Cluo" data-src="../app/images/banner/Cluo.png"></li>\t\t</ul>\t</div>\t<div class="seckill-container lazyload-container" data-src="../app/images/seckill_bg.jpg">\t\t<div class="seckill-tabs-container container">\t\t\t<ul class="seckill-tabs clearfix">\t\t\t\t<li class="seckill-tab">\t\t\t\t\t<a href="javascript:void(0)" class=" seckill-status">\t\t\t\t\t\t<p class="s-timeSlot" timeSlot="0,10">0:00-10:00</p> <em></em>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t\t<li class="seckill-tab">\t\t\t\t\t<a href="javascript:void(0)" class="seckill-status">\t\t\t\t\t\t<p class="s-timeSlot" timeSlot="10,14">10:00-14:00</p> <em></em>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t\t<li class="seckill-tab">\t\t\t\t\t<a href="javascript:void(0)" class="seckill-status">\t\t\t\t\t\t<p class="s-timeSlot" timeSlot="14,20">14:00-20:00</p>\t\t\t\t\t\t<em></em>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t\t<li class="seckill-tab">\t\t\t\t\t<a href="javascript:void(0)" class="seckill-status">\t\t\t\t\t\t<p class="s-timeSlot" timeSlot="20,24">20:00-23:59</p>\t\t\t\t\t\t<em></em>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t</ul>\t\t\t<div class="seckill-tabs-contents container">\t\t\t\t<ul class="clearfix" id="s-tab-0"></ul>\t\t\t\t<ul class="clearfix" id="s-tab-1"></ul>\t\t\t\t<ul class="clearfix" id="s-tab-2"></ul>\t\t\t\t<ul class="clearfix" id="s-tab-3"></ul>\t\t\t</div>\t\t</div>\t</div></body></html>'},function(t,a,s){t.exports=s.p+"images/nav.jpg"},function(t,a,s){t.exports=s.p+"images/soundLeft.png"},function(t,a,s){t.exports=s.p+"images/soundRight.png"},function(t,a,s){t.exports=s.p+"images/smog.png"},function(t,a,s){t.exports=s.p+"images/headphones.png"},function(t,a,s){t.exports=s.p+"images/topTitle.png"},function(t,a,s){t.exports=s.p+"images/titleLeft.png"},function(t,a,s){t.exports=s.p+"images/titleRight.png"},function(t,a,s){t.exports=s.p+"images/subTitle.png"},function(t,a,s){t.exports=s.p+"images/yhq001.png"},function(t,a,s){t.exports=s.p+"images/yhq002.png"},function(t,a,s){t.exports=s.p+"images/yhq003.png"},function(t,a,s){t.exports=s.p+"images/yhq004.png"}],[1]);