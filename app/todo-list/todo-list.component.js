(function () {
    'use strict';

    angular.module('todo').component('todoList', {
        templateUrl: 'todo-list/todo-list.html',
        css: 'todo-list/todo-list.css',
        controller: TodoListController

    });

    TodoListController.$inject = ['TodoService','$scope','TodoModalService'];

    function TodoListController(todoService, $scope, TodoModalService){
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

        vm.addTodoPoint = function(point) {
            todoService.addTodoPoint(point).then(loadTodoList);
        };

        vm.updateTodoPoint = function (point) {
            todoService.updateTodoPoint(point).then(loadTodoList)
        };

        vm.deleteTodoPoint = function(pointId) {
            todoService.deleteTodoPoint(pointId).then(loadTodoList);
        };
        
        vm.selectPoint = function (point) {
            vm.selectedPoint = point;
        };

        vm.showAdd = function (event) {
            TodoModalService.showAdd(event)
                .then(vm.addTodoPoint);
        };

        vm.showEdit = function (event, point) {
            TodoModalService.showEdit(event,point)
                .then(vm.updateTodoPoint);
        };

        vm.showDelete = function (event,pointId) {
          TodoModalService.showDelete(event)
              .then(()=> {vm.deleteTodoPoint(pointId)});
        }
    }
})();
