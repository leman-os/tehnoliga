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
		items: 4,
		loop: true,
		dots: false,
		autoplay: true
	});
});
// carousel-main-end
});
