(function() {
    'use strict';

    angular
        .module('app.trends')
        .controller('TrendsController', TrendsController);

    TrendsController.$inject = ['$q', 'dataservice', 'logger', '$scope'];
    /* @ngInject */
    function TrendsController($q, dataservice, logger, $scope) {
        $scope.AreaChanged = function(item, model) {
            dataservice.getTopTrending_twitter(item.woeid).then(function(data) {
                $scope.trending_twitter = data;
            });
        }

        function init() {
            // body...
            // }
            dataservice.getCountries().then(function(data) {
                $scope.places = data.filter(getPlaces);
                $scope.selectedCountry = $scope.places[0];
                // dataservice.getWeather($rootScope.selectedCountry.woeid).then(function(weather) {
                //  $rootScope.weatherData = weather;
                // });
                dataservice.getTopTrending_twitter($scope.selectedCountry.woeid).then(function(data) {
                    $scope.trending_twitter = data;
                });
            });
            dataservice.getTrendingVideos_youtube().then(function(data) {
                $scope.ytubeVideos = data;
            })
        }

        function getPlaces(item) {
            return item.placeType.code === 12 || item.placeType.code === 19;
        }

        init();
    }
})();
