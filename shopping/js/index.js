window.addEventListener('load', function () {
	var ser = document.querySelector('#search');
	ser.onfocus = function () {
		if (this.value == '语言开发') {
			this.value = '';
			this.style.color = '#333';
		}
	};
	ser.onblur = function () {
		if (this.value == '') {
			this.value = '语言开发';
			this.style.color = '#999';
		}
	};
	var shopcar = document.querySelector('.shopcar');
	shopcar.addEventListener('click', function () {
		location.href = 'shopcar.html';
	});
});

$(function () {
	// 当我们点击了小li，此时不需要执行页面滚动事件里面的li的背景选择添加current类
	// 节流阀  互斥锁
	var flag = true;
	// 1. 显示隐藏电梯导航
	var toolTop = $('.recom').offset().top;
	function toggleTool() {
		if ($(document).scrollTop() >= toolTop) {
			$('.fixedtool').fadeIn();
		} else {
			$('.fixedtool').fadeOut();
		}
	}
	toggleTool();
	$(window).scroll(function () {
		toggleTool();
		if (flag) {
			$('.floor .w1').each(function (i, ele) {
				if ($(document).scrollTop() >= $(ele).offset().top) {
					// console.log(i);
					$('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
				}
			});
		}
	});
	// 2. 点击电梯导航页面可以滚动到相应内容区域
	$('.fixedtool li').click(function () {
		flag = false;
		// 当我们每次点击li 就需要计算出页面要去往的位置
		// 选出对应索引号的内容区的盒子，计算他的 offset().toolTop
		var current = $('.floor .w1').eq($(this).index()).offset().top;
		// 页面动画滚动效果
		$('body, html').stop().animate({
			scrollTop: current,
		}, function() {
			flag = true;
		});
		$(this).addClass('current').siblings().removeClass('current');
	});
});
