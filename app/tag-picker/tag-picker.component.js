(function () {
   'use strict';

    angular.module('todo').component('tagPicker', {
        templateUrl: 'tag-picker/tag-picker.html',
        controller: TagPickerController,
        bindings: {
            tags: '='
        }

    });

    function TagPickerController() {
        let vm = this;

        vm.tag = '';

        vm.addTag = function () {
            if (!isTagAlreadyExist() && vm.tag.length !== 0){
                vm.tags.push(vm.tag);
            }
            vm.tag = '';
        };

        vm.removeTag = function (tag) {
          vm.tags = vm.tags.filter(t => t !== tag);
        };

        function isTagAlreadyExist() {
            let tagExist = false;
            vm.tags.forEach(tag => {
                if(vm.tag.toLowerCase() === tag.toLowerCase()){
                    tagExist = true;
                }
            });
            return tagExist;
        }

    }
})();
