(function() {
    'use strict';

    angular
        .module('app')
        .component('appComponent', {
            templateUrl: 'components/app-component.tpl.html',
            controller: AppComponentCtrl
        });

    function AppComponentCtrl() {
        var vm = this;
        vm.userDetails = {
            name: undefined,
            password: undefined,
            email: undefined
        };
        vm.users = [];
        // console.log('userDetails' + vm.userDetails);
        vm.saveUser = function(user) {
            console.log('userDetails' + user);
            vm.users.push(user);
            console.log('userDetails' + JSON.stringify(vm.userDetails));
        }
        vm.removeRow = function(indx) {
            console.log('indx' + indx);
            // vm.users = _.difference(vm.users, [vm.users[indx]]);
            // console.log('indx' + JSON.stringify(vm.users));
        }
    }

})();
