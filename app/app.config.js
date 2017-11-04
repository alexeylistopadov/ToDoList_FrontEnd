angular.module('todo')
    .config(['$locationProvider', '$routeProvider', '$http', function ($locationProvider, $routeProvider, $http) {
        $locationProvider.hashPrefix('!');
    }]);