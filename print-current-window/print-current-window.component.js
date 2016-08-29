(function() {
    'use strict';

    angular
        .module('app')
        .component('printCurrentWindow', {
            templateUrl: 'print-current-window/print-current-window.tpl.html',
            controller: controller
        });

    function controller() {
        var vm = this;
        vm.title = 'print current screen ';
        vm.printCurrentWindow = function() {
            window.print();
            console.log('hi');
        }
    }



})();
