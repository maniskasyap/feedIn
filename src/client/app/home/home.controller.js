(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', 'dataservice', 'logger', '$scope', '$sce'];
    /* @ngInject */
    function HomeController($q, dataservice, logger, $scope, $sce) {
        $scope.where = 'home...';
        $scope.AreaChanged = function(item, model) {
            dataservice.getTopTrending_twitter(item.woeid).then(function(data) {
                $scope.trending_twitter = data;
            });
        }

        function init() {
            // dataservice.getCountries().then(function(data) {
            //     $scope.places = data.filter(getPlaces);
            //     $scope.selectedCountry = $scope.places[0];
            //     dataservice.getTopTrending_twitter($scope.selectedCountry.woeid).then(function(data) {
            //         $scope.trending_twitter = data;
            //     });
            // });
            // dataservice.getTrendingVideos_youtube('AU').then(function(data) {
            //     $scope.ytubeVideos = data;
            // })
            dataservice.qotd().then(function(data) {
                $scope.quot = data;
            });
        }

        function getPlaces(item) {
            return item.placeType.code === 12 || item.placeType.code === 19;
        }

        init();
    }
})();
