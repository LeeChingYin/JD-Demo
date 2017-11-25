import 'normalize.css';
import '../css/style.css';

// banner 人物循环播放
var sliders = function() {
	var _index = 0;
	$('.banner-layer-5-stars').eq(_index).fadeIn('slow');


	var run = function() {
		setInterval(cycle, 3000);
	}
	var cycle = function() {
		if (_index == $('.banner-layer-5-stars').length) {
			_index = 0;
		}
		$('.banner-layer-5-stars').eq(_index).siblings().fadeOut('slow');
		$('.banner-layer-5-stars').eq(_index).fadeIn('slow');

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
		_this.parent().removeClass('sred');
		$("#s-tab-" + i).hide();
		if (timeSlot[0] > currentHour) {
			_this.siblings('em').html("即将开始");
		} else if (timeSlot[0] <= currentHour && timeSlot[1] > currentHour) {
			_this.parent().addClass('sred');
			$("#s-tab-" + i).show();
			_this.siblings('em').html("正在进行");
		} else if (timeSlot[1] <= currentHour) {
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
			$("#s-tab-" + index).show();
			$("#s-tab-" + index).siblings().hide();
		})
	})
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



$(function() {
	setTabState();
	setInterval(setTabState, 1200000);
	tabShow();
	var data = 0;
	var countData = setInterval(function() {
		data = data + 1000;
		setProcess(data);
		if (data >= 10000) {
			clearInterval(countData)
		}
	}, 6000);

	rulesShow();

	animate();
})