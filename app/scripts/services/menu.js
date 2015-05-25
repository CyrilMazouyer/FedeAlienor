'use strict';

// Modèle du menu
app.provider('MenuProvider', function(){

	this.menu = false;

	this.$get = ['$q', '$http', function($q, $http) {
		
		var deferred = $q.defer();
		
		if(this.menu) {
			deferred.resolve(this.menu);
		} else {
			var _this = this;
			$http.get('scripts/datas/menu.json')
				.success(function(data, status){
					_this.menu = data;
					deferred.resolve(_this.menu);
				})
				.error(function(data, status) {
					deferred.reject('Impossible de récuérer les données');
				});
		}
		
		return deferred.promise;
	}];
	
});
