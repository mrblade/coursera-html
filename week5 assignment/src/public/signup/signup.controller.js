(function(){
	'use strict';
	angular.module('public')
.controller('signupController', sController);

sController.$inject=['MenuService'];

function sController(MenuService) {

	var s =this;
	s.firstname="";
	s.lastname="";
	s.email="";
	s.phone="";
	s.shortname="";
	s.success=false;
	
	s.cleardata=function(){
		s.firstname="";
		s.lastname="";
		s.email="";
		s.phone="";
		s.shortname="";
		
	};
	
	s.work = function(){
		
		 var a= MenuService.getmenu(s.shortname);
	a.then(function(rsp){
		//success
		MenuService.user.firstname=s.firstname;
		MenuService.user.lastname=s.lastname;
		MenuService.user.email=s.email;
		MenuService.user.phone=s.phone;
		MenuService.user.fav=rsp.data.name;
		MenuService.user.itmdesc=rsp.data.description;
		MenuService.user.img=MenuService.imgpath + s.shortname + ".jpg";
		s.success=true;
		s.cleardata();
		s.noitem=false;
		},
	function(){
		//fail
		s.success=false;
		s.noitem=true;
		});
	};
}


	
	
	})();