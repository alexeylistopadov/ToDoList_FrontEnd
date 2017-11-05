(function () {
    'use strict';

    angular
        .module('todo')
        .factory('TodoService', TodoService);

    TodoService.$inject = ['$http'];

    function TodoService($http) {

        return {
            getTodoList: getTodoList,
            addTodoPoint: addTodoPoint,
            deleteTodoPoint: deleteTodoPoint
        };

        function getTodoList() {
            return $http.get('api/todo').then(res => res.data);
        }

        function addTodoPoint(point) {
            return $http.post('api/todo', point).then(res => res.data);
        }

        function deleteTodoPoint(pointId) {
            return $http.delete('api/todo?id=' + pointId).then(res => res.data);
        }
    }
})();