(function($, document){

	$(document).ready(function(){

		// Band Background Slider
		$("[data-background]").each(function(){
			var bg = $(this).data("background");
			$(this).css("background-image","url("+bg+")");
		});

		$(".slider").flexslider({
			//animation: "fade",
			directionNav: false,
			controlNav: true,
			slideshowSpeed: 5000,
			animationSpeed: 600
		});

		// Events Slider
		var eventCarousel = $(".event-carousel");
		eventCarousel.owlCarousel({
			autoPlay: false, 
			rewindNav: false,
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});
		
		$("#event-next").click(function(e){
			e.preventDefault();
			eventCarousel.trigger('owl.next');
		});
		$("#event-prev").click(function(e){
			e.preventDefault();
			eventCarousel.trigger('owl.prev');
		});

		var $container = $('.filterable-items');
		$container.imagesLoaded(function(){
		    $container.isotope({
		        filter: '*',
		        layoutMode: 'fitRows',
		        animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    });
		});
		$('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });

	    initLightbox({
	    	selector : '.filterable-item a',
	    	overlay: true,
	    	closeButton: true,
	    	arrow: true
	    });

	    $(".mobile-menu").append($(".main-navigation .menu").clone());
	    $(".toggle-menu").click(function(){
	    	$(".mobile-menu").slideToggle();
	    });

	});

})(jQuery, document);
