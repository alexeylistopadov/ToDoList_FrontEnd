angular.module('todo').component('toDoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: ['TodoService', ToDoListController]

});

function ToDoListController(todoService){
    let vm = this;

    vm.$onInit = onInit;

    function onInit() {
        todoService.getTodoList().then(initToDoList);
    }

    function initToDoList(points) {
        vm.points = points;
        todoService.addTodoPoint(points[0]);
    }
}
