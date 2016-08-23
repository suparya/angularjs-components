(function() {
    'use strict';

    angular
        .module('app')
        .component('formComp', {
            bindings: {
                name: '=',
                email: "=",
                password: "=",
                onSave: '&'
            },
            templateUrl: 'components/form-component.html',
            controller: function() {
                var vm = this;
                vm.save = function() {
                    // vm.details = { name: vm.name, email: vm.email, password: vm.password };
                    // console.log('email:' + JSON.stringify(vm.details));

                    vm.onSave({ user: { name: vm.name, email: vm.email, password: vm.password } });
                    vm.reset();
                };

                vm.reset = function() {
                    vm.name = undefined;
                    vm.email = undefined;
                    vm.password = undefined;
                };
            }
        });

    // .component('userDataTable', {
    //     require: {
    //         'parent': '^displayDetails',
    //         templateUrl: 'components/userDataTableComponents.html',
    //         controller: function() {
    //             var vm = this;
    //         }
    //     }

    // });

})();
