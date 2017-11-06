(function () {
    'use strict';

    angular.module('todo').component('toDoList', {
        templateUrl: 'todo-list/todo-list.html',
        controller: TodoListController

    });

    TodoListController.$inject = ['TodoService'];

    function TodoListController(toDoService){
        let vm = this;

        vm.$onInit = loadTodoList;

        vm.point = {content: '' , tags: []};

        function loadTodoList() {
            toDoService.getTodoList().then(initTodoList);
        }

        function initTodoList(points) {
            vm.points = points;
        }

        vm.addTodoPoint = function() {
            toDoService.addTodoPoint(vm.point).then(vm.points.push.bind(vm.points));
            vm.point = {content: '', tags:[]};
        };

        vm.deleteTodoPoint = function(pointId) {
            toDoService.deleteTodoPoint(pointId).then(loadTodoList);
        };
    }
})();
