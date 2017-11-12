(function () {
    'use strict';

    angular
        .module('todo', ['ngRoute','ngMaterial'])
        .config(todoConfig);

    todoConfig.$inject = [
        '$routeProvider'
    ];

    function todoConfig($routeProvider) {
        $routeProvider
            .when("/", {
                template: '<todo-list></todo-list>'
            });
    }
})();

