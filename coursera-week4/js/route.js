(function(){
	
	'use strict';
	angular.module('MenuApp')
	.config(RouterConfig);
	
	RouterConfig.$inject=['$stateProvider','$urlRouterProvider'];
	
	function RouterConfig($stateProvider,$urlRouterProvider){
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		
		.state('home',{
			templateUrl:'template/home.html',
			url:'/'})
			
		.state('categories',{
			templateUrl:'template/categories.ui.html',
			url:'/categories',
			controller:'categoriesctrl as cctrl',
		
			resolve:{
				allcategories:['MenuDataService', function(MenuDataService){
				
					return MenuDataService.getAllCategories();
				}]
					
			}
				
			})
			.state('items',{
				templateUrl:'template/items.ui.html',
				url:'/items/{short_name}',
				controller:'itemsctrl as ictrl',
				resolve:{
				items:['MenuDataService','$stateParams', function(MenuDataService,$stateParams){
				
					return MenuDataService.getItemsForCategory($stateParams.short_name);
				}]
					
			}
				
			});
			
			
			
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	})();