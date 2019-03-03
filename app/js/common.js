$(function() {

// slider
$(document).ready(function(){
    $('.slider').bxSlider({
		controls: false,
		speed: 600
	  });
  });
// slider-end

// carousel-main
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
		responsive:{
			0:{
					items:1
			},
			600:{
					items:2
			},
			1100:{
					items:3
			},
			1300:{
				items:4
		}
	},
		loop: true,
		dots: false,
		autoplay: true
	});
});
// carousel-main-end
});
