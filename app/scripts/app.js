'use strict';

/**
 * @ngdoc overview
 * @name alienorAngularApp
 * @description
 * # alienorAngularApp
 *
 * Main module of the application.
 */

// Initialisation de l'application et des dépendences
var app = angular.module('alienorAngularApp', ['ui.router']);

// Configuration des routes
app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
	
	//$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('app', {
			//url : '/',
			//templateUrl : 'app/view/templates/home.html',
			views : {
				'header' : {
					templateUrl : 'views/partials/header.html',
					//controller  : 'HeaderController'
				},
				'menu' : {
					templateUrl : 'views/partials/menu.html',
					controller  : 'MenuController'
				},
				'slideshow' : {
					templateUrl : 'views/partials/slideshow.html',
					controller  : 'SlideshowController'
				},
				'footer' : {
					templateUrl : 'views/partials/footer.html',
					//controller  : 'FooterController'
				},
			}
		})
		.state('app.index', {
			url : '/',
			views : {
				'content' : {
					templateUrl : 'views/home.html'
				}
			}
		});
		
					/*templateUrl : 'app/view/templates/slideshow.html',
					controller : 'SlideshowController'*/


}]);


//(function($){

	/**
	*
	* TOPBAR
	*
	*/	
	/*$("#topbar-icon-search").click(function(e){
		e.preventDefault();

		// Décaler l'icône
		$("#topbar-icon-search").addClass("topbar-icon-search-is-active");

		// Faire apparaître la barre
		$("#topbar-search").addClass("topbar-search-is-active");
		$("#topbar-search-btncancel").show();

		// Cacher les icônes restants
		$("#topbar-icon-menu").hide();
		$("#topbar-logo").hide();
		$("#topbar-icon-bell").hide();
	});

	$("#topbar-search-btncancel").click(function(e){
		e.preventDefault();

		// Décaler l'icône
		$("#topbar-icon-search").removeClass("topbar-icon-search-is-active");

		// Faire disparaître la barre
		$("#topbar-search").removeClass("topbar-search-is-active");
		$("#topbar-search-btncancel").hide();

		// Afficher les icônes restants
		$("#topbar-icon-menu").show();
		$("#topbar-logo").show();
		$("#topbar-icon-bell").show();
	}); */

	/**
	*
	* MENUBAR
	*
	**/
	/*$("#topbar-icon-menu").click(function(e){
		e.preventDefault();
		$("#menubar").toggleClass("menubar-is-active");
		$("#topbar").toggleClass("topbar-is-inactive");
		$("#content").toggleClass("content-is-inactive");

	});

	$("#content").click(function(e){
		e.preventDefault();
		if($("#menubar").hasClass("menubar-is-active")) {
			$("#menubar").removeClass("menubar-is-active");
			$("#topbar").removeClass("topbar-is-inactive");
			$("#content").removeClass("content-is-inactive");
		}
	});
*/
