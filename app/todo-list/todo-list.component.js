(function () {
    'use strict';

    angular.module('todo').component('toDoList', {
        templateUrl: 'todo-list/todo-list.html',
        controller: ToDoListController

    });

    ToDoListController.$inject = ['ToDoService'];

    function ToDoListController(toDoService){
        let vm = this;

        vm.$onInit = onInit;

        vm.point = {content: '' , tags: []};

        function onInit() {
            toDoService.getTodoList().then(initToDoList);
        }

        function initToDoList(points) {
            vm.points = points;
        }

        vm.deleteToDoPoint = function(point) {
            toDoService.deleteTodoPoint(point);
        };

        vm.addTodoPoint = function() {
            toDoService.addTodoPoint(vm.point).then(vm.points.push.bind(vm.points));
            vm.point = {content: '', tags:[]};
        }
    }
})()
