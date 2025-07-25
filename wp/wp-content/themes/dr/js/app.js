/* COMMON */

$(function(){
	$('.fancybox').fancybox({
		'width' : 800,
		'height' : 600,
		'autoSize' : false
	});

	if ( navigator.userAgent.indexOf('Android') > 0 ) {
		$("body").addClass("Android");
	};

});

$(function(){

	setSize();
	navInit();

	if($('body').is('.home,.page-id-2452')){
		HomeInit();
	}
	
	if($('body').is('.concept')){
		ConceptInit();
	}

	if($('body').is('.products')){
		ProductsInit();
	}
	$('.tab-n a[href^=#]').click(function(){
		var headerH = 110;
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position - headerH}, speed, "swing");
		return false;
	});

	$('a.scrolltop[href^=#]').click(function(){
		var headerH = 110;
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position - headerH}, speed, "swing");
		return false;
	});

	path = location.pathname
	hash = location.hash
	if($('body').is('.home,.page-id-2452')){
		$('.mainNav li.n_home').addClass('active');
	}
	if(path.match("/about/")){
		$('.mainNav li.n_about').addClass('active');
	}
	if(path.match("/menu/")){
		$('.mainNav li.n_menu').addClass('active');
	}
	if(path.match("/trouble/")){
		$('.mainNav li.n_trouble').addClass('active');
	}
	if(path.match("/information/")){
		$('.mainNav li.n_information').addClass('active');
	}
	if(path.match("/products/")){
		$('.mainNav li.n_products').addClass('active');
	}
	if(path.match("/news/")){
		$('.mainNav li.n_news').addClass('active');
	}
});

$(window).on('load', function() {
	var hash = window.location.hash;
	var position = $(hash).length ? $(hash).offset().top : 90;
	var headerH = 90;
	function scroll(position){
		$('html, body').animate({
			scrollTop : position - headerH
		}, 100);
	}
	scroll(position);
});

function setSize(){
	var ratio = 2 / 3;
	var $photo = $('.parallax_bg');
	wW = $(window).width();
	wH = $(window).height();
	if($(window).width() > 980) {
		$('.fixed').css({'height':wH/3});
	} else {
		$('.fixed').css({'height':wH/2});
	}
	$('.hero').css({'height':wH});

}

$(window).load(function() {
$('.flexslider').flexslider({
	animation: 'fade',
	controlNav: false,
	directionNav: false,
	animationSpeed: 1800,
	slideshowSpeed: 4000
	});
});

$(window).on('resize', function() {
	setSize();
});

function navInit() {
	$('.nav-trigger').on('click', function (e) {
		$('body').toggleClass('show');
		e.preventDefault();
	});
	if ($(window).width() > 980) {
		if($('body').is('.home,.page-id-2452')){
			$('body').addClass('bg-header')
			$(window).scroll(function () {
				var scrollPos = $(window).scrollTop();
				if (scrollPos > 30){
					$('body').removeClass('bg-header')
				} else{
					$('body').addClass('bg-header')
				}
			});
		}
		$('.drop').on('mouseenter', function (e) {
			$(this).addClass('showdrop');
			$(this).find('ul').slideDown(300);
		});
		$('.drop').on('mouseleave', function (e) {
			$(this).removeClass('showdrop');
			$(this).find('ul').slideUp(100);
		});
	} else {
		$('.drop>a').on('click', function (e) {
			$(this).parent('.drop').toggleClass('showdrop');
			$(this).parent('.drop').find('ul').slideToggle();
		});
	}

	$(".footer-anchor-open").click(function() { 
		$(this).parent(".col-inner").addClass("open");
	});
	$(".footer-anchor-close").click(function() { 
		$(this).parent(".col-inner").removeClass("open");
	});

	$(window).scroll(function () {
		wH = $(window).height();
		var scrollPos = $(window).scrollTop();
		if (scrollPos > wH){
			$('.scrolltop').addClass("show");
		} else{
			$('.scrolltop').removeClass("show");
		};
	});
};


function HomeInit(){
	var ratio = 2 / 3,
		ratiosp = 3 / 2,
		overtime,
		ww,
		wh,
		playing = false;

	$('.photos').find($('.photo')).css('opacity','0');
	$('.photos').first().find($('.photo')).eq(0).css('opacity','1');
	function _initRolloverSlideshow() {
		var index = $(this).index(),
		max = $('.photos').find($('.photo')).length,
		i = 0;
		clearInterval(overtime);
		$('.timer-strip').find('.all').text(max);
		function _nextRolloverSlideShow() {
			$('.photos').find('.active-photo').removeClass('active-photo').stop().animate({opacity: '0'}, 500, 'easeInOutQuad');
			$('.photos').find($('.photo')).eq(i).addClass('active-photo').stop().animate({opacity: '1'}, 500, 'easeInOutQuad');
			$('.timer-strip').find('.now').text(i+1);
			i++;
			if(i === max) i = 0;
		};
		_nextRolloverSlideShow();
		overtime = setInterval(_nextRolloverSlideShow, 4000);
		$('.timer-strip').on('click', function (e) {
			_nextRolloverSlideShow();
			clearInterval(overtime);
			overtime = setInterval(_nextRolloverSlideShow, 4000);
		});

	};
	function _windowResize() {
		ww = $(window).width();
		wh = $(window).height();
		if ($(window).width() > 920) {
			$('.hero-home').height(wh-120);
			if ((wh / ww) > ratio) {
				$('.photo img').height(wh);
				$('.photo img').width(wh/ratio);
			} else {
				$('.photo img').width(ww);
				$('.photo img').height(ww*ratio);
			};
		}else{
			$('.hero-home').height(wh-60);
			if ((wh / ww) > ratiosp) {
				$('.photo img').height(wh);
				$('.photo img').width(wh/ratiosp);
			} else {
				$('.photo img').height(ww*ratiosp);
				$('.photo img').width(ww);
			}
		}
		$('.photo img').css('margin-left', (- $('.photo img').width()) / 2);
		$('.photo img').css('margin-top', (- $('.photo img').height()) / 2);
	};
	$(window).on('resize', function() {
		_windowResize()
	});
	_windowResize()
	_initRolloverSlideshow()

	$(window).scroll(function () {
		wH = $(window).height();
		var scrollPos = $(window).scrollTop();
		if (scrollPos > wH){
			$('body').addClass("show-n");
		} else{
			$('body').removeClass("show-n");
		};
	});

	$(".menu-tab li").click(function() {
		var num = $(".menu-tab li").index(this);
		$(".menu-sec").removeClass('active');
		$(".menu-sec").eq(num).addClass('active');
		$(".menu-tab li").removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$(".menu-sec-nav li").click(function() {
		var parent = $(this).parents(".menu-sec");
		var num = parent.find(".menu-sec-nav li").index(this);
		parent.find(".section-menu").removeClass('active');
		parent.find(".section-menu").eq(num).addClass('active');
		parent.find(".menu-sec-nav li").removeClass('active');
		$(this).addClass('active');
		return false;
	});
};

function ProductsInit(){
	var modelsTitle = $('.colorways').find('.color_name span');
	modelsTitle.text($('.colorways a.active').attr('title'));
	$('.colorways a').on('mouseenter', function() {
		var el = $(this);
		var title = el.attr('title');
		modelsTitle.text(title);
	});
	$('.colorways a').on('mouseleave', function() {
		var title = $('.colorways a.active').attr('title');
		modelsTitle.text(title);
	});
}

/****************************************

	電話番号にリンクを付ける

	* [syncer-tel]というクラス名が付いた要素にリンクを付けます。
	* [data-number]の属性値に、電話番号を指定して下さい。
	* Aタグでも、それ以外のタグでも、大丈夫です。
	[例] <a class="syncer-tel" data-number="09012345678">090-1234-5678</a>

****************************************/

/* DOMの読み込み完了後に処理 */
if(window.addEventListener){
	window.addEventListener( "load" , syncerTelephoneLink, false );
} else {
	window.attachEvent( "onload", syncerTelephoneLink );
}

function syncerTelephoneLink() {
	var width = window.innerWidth ;
	if( width>=480 ){ return false ; }
	var elms = document.getElementsByClassName( "syncer-tel" ) ;
	for( var i=0,l=elms.length; l>i; i++ )
	{
		var elm = elms[i] ;
		var number = elm.getAttribute( "data-number" ) ;
		if( number!=null )
		{
			if( elm.tagName == "A" )
			{
				elm.href = "tel:" + number ;
			}
			else
			{
				var text = elm.innerHTML ;
				elm.innerHTML = '<a href="tel:' + number + '">' + text + '</a>' ;
			}
		}
	}
};
