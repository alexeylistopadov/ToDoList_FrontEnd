angular.module('todo')
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when("/", {
                template: '<to-do-list></to-do-list>'
            })
    }]);