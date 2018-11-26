(function ($) {
"use strict";

   jQuery('#mobile-menu').meanmenu({
	   meanScreenWidth: "767",
	   meanMenuContainer: '.main-menu'
   });


$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
	margin:2,
	navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	autoplay:true,
	autoplayTimeout: 2500,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.test-popup-link').magnificPopup({
  type: 'image',
    gallery: {
    enabled: true
  },
});

})(jQuery);