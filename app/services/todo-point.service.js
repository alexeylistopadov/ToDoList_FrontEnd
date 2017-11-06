(function () {
    'use strict';

    angular
        .module('todo')
        .factory('TodoService', TodoService);

    TodoService.$inject = ['$http'];

    function TodoService($http) {

        const TODO_COLLECTION_URL = 'api/todos';

        return {
            getTodoList: getTodoList,
            addTodoPoint: addTodoPoint,
            deleteTodoPoint: deleteTodoPoint
        };

        function getTodoList() {
            return $http.get(TODO_COLLECTION_URL).then(res => res.data);
        }

        function addTodoPoint(point) {
            return $http.post(TODO_COLLECTION_URL, point).then(res => res.data);
        }

        function deleteTodoPoint(pointId) {
            return $http.delete(TODO_COLLECTION_URL + '/' + pointId);
        }
    }
})();