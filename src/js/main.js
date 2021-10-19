//HEADER slide
(function () {
	var header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 22) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	};
}());

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
		// $(".set > a").removeClass("active");
		$(this).addClass("active");
		$(".content").slideUp(200);
		$(this)
			.siblings(".question__content")
			.slideDown(200);
	}
});


