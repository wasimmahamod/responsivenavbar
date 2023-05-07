
(function( $ ){
	$.fn.grtmobile = function () {
		if ($(window).width() < 768) {
			$('.grt-mobile-button').on('click', function(){
				$(this).toggleClass("grt-mobile-button-open");
				$("ul.grt-menu").toggleClass("open-grt-menu ");
				$("html, body").toggleClass("body-overflow");
			});
			$('li.grt-dropdown').on('click', function(e){
				$(this).toggleClass("active-dropdown");
			});
		}
	}
})( jQuery );

$.fn.grtmobile();

var resizeTimer;

$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
     $.fn.grtmobile();
  }, 250);
})

$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

$('li.grt-dropdown > a').on('click', function(e){
	e.preventDefault();
});
