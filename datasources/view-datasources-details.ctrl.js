(function() {
    'use strict';

    angular
        .module('wams.forms')
        .controller('ViewDatasourcesDetailsCtrl', ViewDatasourcesDetailsCtrl);



    /* @ngInject */
    function ViewDatasourcesDetailsCtrl() {
        var vm = this;
        vm.title = 'View Datasources Details';

        activate();

        ////////////////

        function activate() {
        }
    }
})();