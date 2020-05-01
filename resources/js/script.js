$(document).ready(function() {

	/* ----- STICKY NAVIGATION ----- */
	$('.js--section-features').waypoint(function(direction) {
		if (direction === 'down') {
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

	/* ----- SCROLL ON BUTTONS ----- */
	// $('.js--scroll-to-plans').click(function() {
	// 	$('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
	// });

	// $('.js--scroll-to-start').click(function() {
	// 	$('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
	// });

	/* ----- ANIMATION ON SCROLL ----- */
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	},
	{
		offset: '50%;'
	});

	$('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	},
	{
		offset: '50%;'
	});

	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated fadeIn');
	},
	{
		offset: '50%;'
	});

	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated pulse');
	},
	{
		offset: '50%;'
	});

	/* ----- MOBILE NAVIGATION ----- */
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.icon');

		nav.slideToggle(200);

		if (icon.attr('name') == 'menu-outline') {
    		icon.attr('name', 'close-outline');
 		}
 		else {
    		icon.attr('name', 'menu-outline');
   		}
	});

});
