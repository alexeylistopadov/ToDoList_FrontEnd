(function () {
    'use strict';

    angular.module('todo', ['ngRoute']).config(todoConfig);

    todoConfig.$inject = ['$routeProvider'];

    function todoConfig($routeProvider) {
        $routeProvider
            .when("/", {
                template: '<to-do-list></to-do-list>'
            });
    }
})();

