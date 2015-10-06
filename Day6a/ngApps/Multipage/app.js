var MultiPageApp;
(function (MultiPageApp) {
    angular.module('MultiPageApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApps/MultiPage/page1.html',
            controller: 'Page1Controller as vm'
        })
            .when('/page1', {
            templateUrl: '/ngApps/MultiPage/page1.html',
            controller: 'Page1Controller as vm'
        })
            .when('/page2', {
            templateUrl: '/ngApps/MultiPage/page2.html',
            controller: 'Page2Controller as vm'
        })
            .when('/page3', {
            templateUrl: '/ngApps/MultiPage/page3.html',
            controller: 'Page3Controller as vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MultiPageApp || (MultiPageApp = {}));
