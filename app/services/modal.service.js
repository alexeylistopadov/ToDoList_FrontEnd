(function () {
    angular
        .module('todo')
        .factory('TodoModalService', TodoModalService)

    TodoModalService.$inject = ['$mdDialog'];

    function TodoModalService($mdDialog) {

        return {
            showAdd: showAdd,
            showEdit: showEdit,
            showDelete: showDelete
        };

         function showAdd(event) {
            return $mdDialog.show({
                controller: SaveController,
                templateUrl: 'todo-list/modal/todo-save.html',
                targetEvent: event,
                clickOutsideToClose: true,
                locals: {
                    point: {content: '', tags: []}
                }
            })
        }

         function showEdit(event, point) {
            return $mdDialog.show({
                controller: SaveController,
                templateUrl: 'todo-list/modal/todo-save.html',
                targetEvent: event,
                clickOutsideToClose: true,
                locals: {
                    point: point
                }
            })
        }

        function showDelete(event) {
            let confirm = $mdDialog.confirm()
                .title('Delete')
                .textContent('Delete this point?')
                .targetEvent(event)
                .ok('Yes')
                .cancel('No');
            return $mdDialog.show(confirm);
        }

        function SaveController($scope,$mdDialog, point) {

            $scope.mode = point.content === '' ? 'New point' : 'Edit point';
            $scope.point = point;

            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.save = function(point) {
                if (point.content.length >= 3){
                    $mdDialog.hide(point);
                }
            };
        }
    }
})();