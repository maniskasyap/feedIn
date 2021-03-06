(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getCountries: getCountries,
            getTopTrending_twitter: getTopTrending_twitter,
            getTrendingVideos_youtube: getTrendingVideos_youtube,
            qotd: qotd
        };

        return service;

        function getMessageCount() {
            return $q.when(72);
        }

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }

        function qotd() {
            return $http.get('/api/qotd')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getTopTrending_twitter')(e);
            }
        }

        function getTopTrending_twitter(countryId) {
            return $http.get('/api/feeds/twitter/' + countryId)
                //return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getTopTrending_twitter')(e);
            }
        }

        function getTrendingVideos_youtube(countryId) {
            return $http.get('/api/videos/trending/youtube/' + countryId)
                //return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getTopTrending_twitter')(e);
            }
        }

        function getCountries() {
            return $http.get('/api/countries/twitter')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getCountries')(e);
            }
        }

        function getWeather(countryId) {
            return $http.get('/api/weather/' + countryId)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getCountries')(e);
            }
        }
    }
})();
