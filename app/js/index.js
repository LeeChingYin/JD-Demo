import 'normalize.css';
import '../css/style.css';
import '../tpl/index.html';

// banner 人物循环播放
var sliders = function() {
	var _index = 0,
		_selector = $('.banner-layer-5-stars').eq(_index),
		_src = _selector.attr('data-src');
	if (_selector.css('background-image') == 'none') {
		_selector.css('background', 'url("' + _src + '") no-repeat').fadeIn('slow');
	} else {
		_selector.fadeIn('slow');
	}

	var run = function() {
		setInterval(cycle, 5000);
	}
	var cycle = function() {
		if (_index == $('.banner-layer-5-stars').length) {
			_index = 0;
		}

		var _selector = $('.banner-layer-5-stars').eq(_index),
			_src = _selector.attr('data-src');

		_selector.siblings().fadeOut('slow');

		if (_selector.css('background-image') == 'none') {
			_selector.css('background', 'url("' + _src + '") no-repeat').fadeIn('slow');
		} else {
			_selector.fadeIn('slow');
		}

		_index++;
	}

	run();
}


// 设置时间段状态
var setTabState = function() {
	var currentDate = new Date();
	var currentHour = currentDate.getHours();
	var _arr = $('.s-timeSlot');
	for (let i = 0; i < _arr.length; i++) {
		var _this = _arr.eq(i);
		var timeSlot = _this.attr('timeSlot').split(",");
		_this.parent().removeClass('sgreen');
		_this.parent().removeClass('sred');
		$("#s-tab-" + i).hide();
		if (timeSlot[0] > currentHour) {
			_this.parent().addClass('sgreen');
			_this.siblings('em').html("即将开始");
		} else if (timeSlot[0] <= currentHour && timeSlot[1] > currentHour) {
			_this.parent().addClass('sred');
			getSTab($("#s-tab-" + i));
			$("#s-tab-" + i).show();
			_this.siblings('em').html("正在进行");
		} else if (timeSlot[1] <= currentHour) {
			_this.parent().addClass('sgreen');
			_this.parent().attr('status', 'end');
			_this.siblings('em').html("已结束");
			saleOut($("#s-tab-" + i));
		}
	}
}

// 已结束模块，商品设置为已抢完。
var saleOut = function(_tab) {
	_tab.find('li').each(function(i, el) {
		var _this = $(this);
		if (!_this.attr('flag')) {
			_this.attr('flag', "saleout");
			_this.find('.s-item-img-wrap').append('<div class="s-item-saleout-cover"></div>')
			$('.seckill-btn', _this).removeClass('seckill-btn-sale');
			$('.seckill-btn', _this).addClass('seckill-btn-salout');
		}
		$('.seckill-btn', _this).html('已抢光');
	})
}

// tab
var tabShow = function() {
	$('.seckill-tab a').each(function(index) {
		$(this).click(function() {

			var _el = $('#s-tab-' + index);
			if (_el.find('li').length == 0) {
				console.log(_el)
				getSTab(_el);
			}

			if ($(this).attr('status') == 'end') {
				saleOut(_el);
			}
			_el.show();

			_el.siblings().hide();
		})
	})
}

// 动态生成tab的items
function getSTab(_tabId) {
	var tpl = '<li><div class="s-item"><div class="s-item-img-wrap"><img src="../app/images/seckill/seckill_headphone.jpg" alt=""><div class="remain-time"> <em>剩余时间：</em></div></div><p class="s-item-name">FIIL头戴式无线降噪耳机 魔影红</p><div class="s-item-price"><span>秒杀价:</span><span class="s-item-price-now">￥1999</span></div><a href="javascript:void(0)" class="seckill-btn seckill-btn-sale">立即秒杀</a></div></li>';

	for (let i = 0; i < 8; i++) {
		_tabId.append(tpl);
	}
}



// 进度条
var setProcess = function(_data) {
	$(".process-block em").html(_data);
	$(".process").animate({
		width: _data / 100 + '%',
	}, 1000);

	$(".process-block").animate({
		left: _data / 100 + '%',
	}, 1000);
}

// 活动规则
var rulesShow = function() {
	$(".w-btn").click(function() {
		if ($('.w-shuoming img').css('background-image') == 'none') {
			var _src = $('.w-shuoming img').attr('data-src');
			$('.w-shuoming img').attr("src", _src);
		}
		$('.w-shuoming').show();
	});

	$('.hot-link-close').click(function() {
		$('.w-shuoming').hide();
	})
}


var animate = function() {

	var showSubTitle = function() {
		$('.banner-layer-3-topTitle').fadeIn(500);
	}
	var moveFontLeft = function() {
		$('.banner-layer-3-titleLeft').fadeIn().animate({
			'marginLeft': '-81px'
		}, 'fast');
	}
	var moveFontRight = function() {
		$('.banner-layer-3-titleRight').fadeIn().animate({
			'marginRight': '-45px'
		}, 'fast');
	}
	var showLay4Sub = function() {
		$('.banner-layer-4-subTitle').fadeIn('fast').css("display", "inline-block");
	}
	setTimeout(showSubTitle, 1500);
	setTimeout(moveFontLeft, 2200);
	setTimeout(moveFontRight, 2800);
	setTimeout(showLay4Sub, 4000);
	setTimeout(sliders, 4500);
}


// 简单的节流函数
function throttle(func, wait, mustRun) {
	var timeout,
		startTime = new Date();

	return function() {
		var context = this,
			args = arguments,
			curTime = new Date();

		clearTimeout(timeout);
		// 如果达到了规定的触发时间间隔，触发 handler
		if (curTime - startTime >= mustRun) {
			func.apply(context, args);
			startTime = curTime;
			// 没达到触发间隔，重新设定定时器
		} else {
			timeout = setTimeout(func, wait);
		}
	};
};

// 懒加载优惠券
function lazyloadYHQ(_scrollPosition) {
	if (850 < _scrollPosition) {
		if (!$('.banner-layer-4-q').parent().attr('loadyhq')) {
			$('.banner-layer-4-q').each(function() {
				var _src = $(this).find('img').attr('data-src');
				$(this).find('img').attr('src', _src);
			});
			$('.banner-layer-4-q').parent().attr('loadyhq', 'true');
		}
	}
}

// 懒加载“整点秒杀”，“爆款必备”，“下单实时赢大奖”
function lazyload() {
	var scrollTop = $(window).scrollTop();
	var scrollPosition = scrollTop + $(window).height();

	var sections = $('.lazyload-container');
	var n = 0;

	lazyloadYHQ(scrollPosition);

	for (let i = n; i < sections.length; i++) {
		if (sections.eq(i).offset().top < scrollPosition) {

			if (sections.eq(i).css('background-image') == 'none') {
				var _src = sections.eq(i).attr('data-src');
				sections.eq(i).css('background', 'url("' + _src + '") no-repeat center');

				switch (n) {
					case 0:
						getSeckill();
						break;
					case 1:
						getBuy();
						break;
					case 2:
						getWinAwards();
						break;
				}
			}

			n++;
		}
	}
}

// “整点秒杀”
function getSeckill() {
	tabShow();
	setTabState();
	setInterval(setTabState, 1200000);
}

// “爆款必备”
function getBuy() {
	var tpl = '<li><div class="buy-item"> <i class="buy-item-saling">直降</i><div class="b-item-wrap"><img src="../app/images/buy/buy_headphones.png" alt=""><div class="begin-time"></div></div><div class="b-item-price"><span>惊爆价:</span><span class="b-item-price-now">￥1???</span></div><p class="b-item-name">Meqafeis E30运动蓝牙耳机</p><a href="javascript:void(0)" class="buy-btn buy-btn-buy">立即购买</a></div></li>';

	for (let i = 0; i < 12; i++) {
		$('.buy-items-container').append(tpl);
	}
}

//“下单实时赢大奖”
function getWinAwards() {
	var _pbgsrc = $('.process').attr('data-src');
	$('.process').css('background', 'url("' + _pbgsrc + '")');

	var _psrc = $('.process-block').attr('data-src');
	$('.process-block').css('background', 'url("' + _psrc + '") no-repeat');


	var _witems = $('.winAwards-items').find('img');

	_witems.each(function() {
		var _imgSrc = $(this).attr('data-src');
		$(this).attr('src', _imgSrc);
	});

	var _wbtnsrc = $('.w-btn').attr('data-src');
	$('.w-btn').css('background', 'url("' + _wbtnsrc + '") no-repeat');


	$('.winAwards-content').show();

	var data = 0;
	var countData = setInterval(function() {
		data = data + 1000;
		setProcess(data);
		if (data >= 10000) {
			clearInterval(countData)
		}
	}, 6000);

	rulesShow();
}

$(window).on('scroll', throttle(lazyload, 500, 1000));

var showSection = lazyload();
lazyload(); //初始化首页的页面图片
$(window).on('scroll', throttle(lazyload, 500, 1000));



$(function() {
	animate();
});