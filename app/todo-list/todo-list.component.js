(function () {
    'use strict';

    angular.module('todo').component('toDoList', {
        templateUrl: 'todo-list/todo-list.html',
        controller: TodoListController

    });

    TodoListController.$inject = ['TodoService'];

    function TodoListController(toDoService){
        let vm = this;

        vm.$onInit = onInit;

        vm.point = {content: '' , tags: []};

        function onInit() {
            toDoService.getTodoList().then(initTodoList);
        }

        function initTodoList(points) {
            vm.points = points;
            console.log(vm.points)
        }

        vm.addTodoPoint = function() {
            toDoService.addTodoPoint(vm.point).then(vm.points.push.bind(vm.points));
            vm.point = {content: '', tags:[]};
        };

        vm.deleteTodoPoint = function(pointId) {
            toDoService.deleteTodoPoint(pointId).then(initTodoList);
        };
    }
})();
