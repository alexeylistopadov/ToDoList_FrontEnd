angular.module('todo')
    .factory('TodoService', ['$http', function ($http){

        return {
            getTodoList: getTodoList,
            addTodoPoint: addTodoPoint,
            deleteTodoPoint: deleteTodoPoint
        };

        function getTodoList(){
            return $http.get('api/todo').then( res =>{return res.data} );
        }

        function addTodoPoint(point){
            return $http.post('api/todo',point);
        }

        function deleteTodoPoint(point) {
            return $http.delete('api/todo', {id: point});
        }
    }]);