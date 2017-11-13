(function () {
    'use strict';

    angular
        .module('todo')
        .factory('TodoService', TodoService);

    TodoService.$inject = ['$http'];

    function TodoService($http) {

        const TODO_COLLECTION_URL = 'api/todos';

        return {
            addTodoPoint: addTodoPoint,
            getTodoList: getTodoList,
            getTodoPoint: getTodoPoint,
            updateTodoPoint: updateTodoPoint,
            patchTodoPoint: patchTodoPoint,
            deleteTodoPoint: deleteTodoPoint
        };

        function addTodoPoint(point) {
            return $http.post(TODO_COLLECTION_URL, point);
        }

        function getTodoList() {
            return $http.get(TODO_COLLECTION_URL).then(res => res.data);
        }

        function getTodoPoint(id) {
            return $http.get(TODO_COLLECTION_URL + '/' + id).then(res => res.data);
        }

        function updateTodoPoint(point) {
            return $http.put(TODO_COLLECTION_URL, point);
        }

        function deleteTodoPoint(id) {
            return $http.delete(TODO_COLLECTION_URL + '/' + id);
        }

        function patchTodoPoint(id,field) {
            return $http.patch(TODO_COLLECTION_URL + '/' + id, field);
        }
    }
})();