'use strict';

// Modèle du slideshow
app.provider('SlideshowProvider', function(){

	this.slideshow = false;

	this.$get = ['$q', '$http', function($q, $http) {
		
		var deferred = $q.defer();
		
		if(this.slideshow) {
			deferred.resolve(this.slideshow);
		} else {
			var _this = this;
			$http.get('scripts/datas/slideshow.json')
				.success(function(data, status){
					_this.slideshow = data;
					deferred.resolve(_this.slideshow);
				})
				.error(function(data, status) {
					deferred.reject('Impossible de récuérer les données');
				});
		}
		
		return deferred.promise;
	}];
	
});
