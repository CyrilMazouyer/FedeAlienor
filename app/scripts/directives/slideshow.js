'use strict';

// Directive pour le slideshow
app.directive('ngSlideshow', function(){
	
	return {
		restrict : 'C',
		link : function(scope, element, attrs){
	 		
	 		var loadCarousel = function(element){
				$(element).owlCarousel({
					items              : 1,
					autoplay           : true,
					autoplayTimeout    : 3000,
					autoplayHoverPause : true,
					smartSpeed         : 1000,
					loop               : true,
					nav                : false,
					dots               : false
				});
			};

			// Lorsque les images sont totalement chargées
			scope.$on('ngRepeatSlideshowFinished', function(ngRepeatFinishedSlideshowEvent) {
				loadCarousel(element);
    		});
		}
	};
});
