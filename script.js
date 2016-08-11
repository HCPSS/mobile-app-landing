$(function() {
    // run test on initial page load
    checkSize();
    // run test on resize of the window
    $(window).resize(checkSize); 
});

var $fadeScroll = function(i) {
	var scrollVar = $(window).scrollTop();
	if (scrollVar >= 50) {
			$('.fixed-chevron-scroll').css({
				'opacity' : '0',
		    '-webkit-transition' : 'opacity 0.5s',
		    '-moz-transition' : 'opacity 0.5s',
		    'transition' : 'opacity 0.5s'			
			})
			$('.jumbo-nav--fixed').css({
			'background-color': 'rgba(87, 87, 87, 1)',
		    '-webkit-transition' : 'background-color 0.5s',
		    '-moz-transition' : 'background-color 0.5s',
		    'transition' : 'background-color 0.5s',	
	    	'box-shadow': '0 9px 39px -31px rgba(0,0,0,.34)'
			})
		}
		else {
		$('.jumbo-nav--fixed').css({
		'background-color' : 'rgba(82, 82, 82, 0.4)',
	    '-webkit-transition' : 'background-color 0.5s',
	    '-moz-transition' : 'background-color 0.5s',
	    'transition' : 'background-color 0.5s',
	    'box-shadow' : 'initial'
		})	
		$('.fixed-chevron-scroll').css({
		'opacity' : '1',
	    '-webkit-transition' : 'opacity 0.5s',
	    '-moz-transition' : 'opacity 0.5s',
	    'transition' : 'opacity 0.5s'			
		})
	}
}

function checkSize() {
	if (window.matchMedia("(max-width: 700px)").matches) {
		$('.jumbo-nav--fixed').css({'background-color' : 'rgba(82, 82, 82, 1)'})
		$(window).off("scroll", $fadeScroll);
	} else {
		$('.jumbo-nav--fixed').css({'background-color' : 'rgba(82, 82, 82, 0.4)'})
		$(window).on("scroll", $fadeScroll);
	}
}
