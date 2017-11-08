(function () {
    'use strict';

    angular.module('todo').component('todoList', {
        templateUrl: 'todo-list/todo-list.html',
        css: 'todo-list/todo-list.css',
        controller: TodoListController

    });

    TodoListController.$inject = ['TodoService'];

    function TodoListController(todoService){
        let vm = this;

        vm.$onInit = loadTodoList;

        vm.point = {content: '' , tags: []};
        vm.selectedPoint = {};

        function loadTodoList() {
            todoService.getTodoList().then(initTodoList);
        }

        function initTodoList(points) {
            vm.points = points;
        }

        vm.addTodoPoint = function() {
            todoService.addTodoPoint(vm.point).then(loadTodoList);
            vm.point = {content: '', tags:[]};
        };

        vm.updateTodoPoint = function (point) {
            todoService.updateTodoPoint(point)
        };

        vm.deleteTodoPoint = function(pointId) {
            todoService.deleteTodoPoint(pointId).then(loadTodoList);
        };
        
        vm.selectPoint = function (point) {
            vm.selectedPoint = point;
        }
    }
})();
