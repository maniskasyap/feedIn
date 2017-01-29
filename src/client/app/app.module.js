(function() {
    'use strict';

    angular.module('app', [
            'app.core',
            'app.widgets',
            'app.admin',
            'app.dashboard',
            'app.layout'
        ])
        .run(function($rootScope, dataservice) {
        	$rootScope.AreaChanged = function(item, model) {
        		dataservice.getTopTrending_twitter(item.woeid).then(function(data) {
                    $rootScope.trending_twitter = data;
                });
        	}
            dataservice.getCountries().then(function(data) {
            	$rootScope.places = data;
            	$rootScope.selectedCountry = data[0];
                dataservice.getTopTrending_twitter($rootScope.selectedCountry.woeid).then(function(data) {
                    $rootScope.trending_twitter = data;
                });
            });

            function getPlaces(data) {
            	for (var i = data.length - 1; i >= 0; i--) {
            		console.log(data[i]);
            	}
            }
            // console.log(trending_twitter);
        });

})();
