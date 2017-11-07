(function () {
    'use strict';

    angular.module('todo').component('todoList', {
        templateUrl: 'todo-list/todo-list.html',
        controller: TodoListController

    });

    TodoListController.$inject = ['TodoService'];

    function TodoListController(todoService){
        let vm = this;

        vm.$onInit = loadTodoList;

        vm.point = {content: '' , tags: []};

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

        vm.deleteTodoPoint = function(pointId) {
            todoService.deleteTodoPoint(pointId).then(loadTodoList);
        };
    }
})();
