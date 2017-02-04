(function() {
    'use strict';

    angular
        .module('app.trends')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'trends',
            config: {
                url: '/trends',
                title: 'trends',
                views: {
                    twitter: {
                        controller: 'TrendsController',
                        controllerAs: 'vm',
                        templateUrl: "app/trends/twitter.html"
                    },
                    youtube: {
                        controller: 'TrendsController',
                        controllerAs: 'vm',
                        templateUrl: "app/trends/youtube.html"
                    },
                    weather: {
                        controller: 'TrendsController',
                        controllerAs: 'vm',
                        templateUrl: "app/trends/weather.html"
                    }
                }
            }
        }];
    }
})();
