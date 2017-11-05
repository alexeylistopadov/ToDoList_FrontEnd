(function () {
    'use strict';

    angular
        .module('todo')
        .factory('ToDoService', ToDoService);

    ToDoService.$inject = ['$http'];

    function ToDoService($http) {

        return {
            getTodoList: getToDoList,
            addTodoPoint: addToDoPoint,
            deleteTodoPoint: deleteToDoPoint
        };

        function getToDoList() {
            return $http.get('api/todo').then(res => res.data);
        }

        function addToDoPoint(point) {
            return $http.post('api/todo', point).then(res => res.data);
        }

        function deleteToDoPoint(point) {
            return $http.delete('api/todo?' + point);
        }
    }
})();