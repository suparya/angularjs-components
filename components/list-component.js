(function() {
    'use strict';

    angular
        .module('app')
        .component('listComp', {
            bindings: {
                userList: "=",
                onDelete: "&"
            },
            templateUrl: 'components/list-component.html',
            controller: Controller
        });

    function Controller() {
        var vm = this;
        vm.remove = function(rowindex) {
            vm.onDelete({ index: rowindex });

        }
    }
})();
