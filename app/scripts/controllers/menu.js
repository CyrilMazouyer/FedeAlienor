'use strict';

// Contrôleur du menu
app.controller('MenuController', ['$scope', 'MenuProvider', function($scope, MenuProvider){
	
	MenuProvider.then(function(menu){
		$scope.menu = menu;
	}, function(msg){
		alert(msg);
	});

}]);
