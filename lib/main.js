// Initiate Angular JS library
var app = angular.module('myApp', ['ngMaterial', 'angularUtils.directives.dirPagination']);
app
.controller('MyController', function ($scope) {
	$scope.cntCustomer = 150000;
	$scope.cntCompany = 12000;
	$scope.cntFarmer = 1500;
	
});

/*
app
.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: 'home.html'
	})
	.when('/posts', {
		templateUrl: 'posts.html'
	})
	.when('/contact', {
		templateUrl: 'contact.html'
	})
	.otherwise({ redirectTo: '/' })
});*/
/*
app
.controller('PostsController', function ($scope, $http) {
	$http.get('lib/listPosts.json')
	.then(function(res) {
		$scope.posts = res.data;
	}) .catch(function(err) {
		console.error(err);
	})
}); */

jQuery(document).ready(function( $ ) {
	// Initiate the wowjs animation library
	new WOW().init();

	// jQuery counterUp
	$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
		time: 1000
	});

	// Back to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
		return false;
	});

  	// Screen carousel (uses the Owl Carousel library)
  	$(".screen-carousel").owlCarousel({
    	autoplay: false,
    	dots: true,
    	loop: false,
    	responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
	});
});

/*  ========= FOR HOME SECTION ======== */
function displayHowItWorks() {
	var tmp = document.getElementById('howItWorks').style.display;
	if (tmp == 'none') {
	  document.getElementById('howItWorks').style.display = 'block';
	}
	else {
	  document.getElementById('howItWorks').style.display = 'none';
	}
}