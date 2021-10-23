// Anchor Slide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({

			behavior: 'smooth'
		});
	});
});


//Header BURGER
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});



//Acordeon
$(".question__title").on("click", function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this)
			.siblings(".question__content")
			.slideUp(200);
		$(this).find(".question__icon")
			.removeClass("clicked")
	} else {
		$(this).find(".question__icon")
			.removeClass("clicked")
		$(this)
			.find(".question__icon")
			.addClass("clicked");
		$(".set > a").removeClass("active");
		$(this).addClass("active");
		$(".content").slideUp(200);
		$(this)
			.siblings(".question__content")
			.slideDown(200);
	}
});


//Adaptive SlickSlider REVIEW
$(window).on('resize', function (e) {
	// Переменная, по которой узнаем запущен слайдер или нет.
	// Храним её в data
	var init = $(".review__slider").data('init-slider');
	// Если мобильный
	if (window.innerWidth < 775) {
		// Если слайдер не запущен
		if (init != 1) {
			// Запускаем слайдер и записываем в data init-slider = 1
			$('.review__slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				adaptiveHeight: true,

			}).data({ 'init-slider': 1 });
		}
	}
	// Если десктоп
	else {
		// Если слайдер запущен
		if (init == 1) {
			// Разрушаем слайдер и записываем в data init-slider = 0
			$('.review__slider').slick('unslick').data({ 'init-slider': 0 });
		}
	}
}).trigger('resize');



//Adaptive SlickSlider ALLIES
$(window).on('resize', function (e) {
	// Переменная, по которой узнаем запущен слайдер или нет.
	// Храним её в data
	var init = $(".question__allies").data('init-slider');
	// Если мобильный
	if (window.innerWidth < 775) {
		// Если слайдер не запущен
		if (init != 1) {
			// Запускаем слайдер и записываем в data init-slider = 1
			$('.question__allies').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				adaptiveHeight: true,
				fade: true,
			}).data({ 'init-slider': 1 });
		}
	}
	// Если десктоп
	else {
		// Если слайдер запущен
		if (init == 1) {
			// Разрушаем слайдер и записываем в data init-slider = 0
			$('.question__allies').slick('unslick').data({ 'init-slider': 0 });
		}
	}
}).trigger('resize');



