'use strict';

// Contrôleur du slideshow
app.controller('SlideshowController', ['$scope', 'SlideshowProvider', function($scope, SlideshowProvider){

	SlideshowProvider.then(function(slideshow){
		$scope.slideshow = slideshow;
	}, function(msg){
		alert(msg);
	});

}]);
