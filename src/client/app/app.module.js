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
                $rootScope.places = data.filter(getPlaces);
                $rootScope.selectedCountry = $rootScope.places[0];
                // dataservice.getWeather($rootScope.selectedCountry.woeid).then(function(weather) {
                // 	$rootScope.weatherData = weather;
                // });
                dataservice.getTopTrending_twitter($rootScope.selectedCountry.woeid).then(function(data) {
                    $rootScope.trending_twitter = data;
                });
            });

            function getPlaces(item) {
                return item.placeType.code === 12 || item.placeType.code === 19;
            }
        });

})();
