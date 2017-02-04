(function() {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'home',
            config: {
                url: '/',
                title: 'home',
                controller: 'HomeController',
                controllerAs: 'vm',
                views: {
                    logos: {
                        templateUrl: "app/home/home.html"
                    }
                }
            }
        }];
    }
})();
