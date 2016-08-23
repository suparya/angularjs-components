(function() {
    'use strict';

    angular
        .module('app')
        .component('checkComponent', {
            templateUrl: 'checkexistingfoodItems/check-component.tpl.html',
            controller: CheckExistingItemCtrl
        });

    function CheckExistingItemCtrl() {
        var vm = this;
        vm.splitFooditems = {};
        vm.foodItems = {
            "2": "Veg Plain Sandwich Special",
            "3": "Cheese Plain Sandwich Special",
            "4": "Aloo Paratha",
            "5": "Bread Butter Plain",
            "6": "Bread Jam Plain",
            "7": "Bread Butter Jam Plain",
            "8": "Veg Grill Sandwich",
            "9": "Aloo Palak Paratha",
            "10": "Gobi Paratha"
        };

        angular.forEach(vm.foodItems, function(value, key) {
            vm.splitFooditems[key] = value.toLowerCase().split(" ");
        });
        console.log('splitFooditems ' + JSON.stringify(vm.splitFooditems));

        vm.checkExistingFooditems = function() {
            if (!angular.isDefined(vm.foodName)) {
                return;
            }
            vm.resultingData = {}
            vm.tempName = vm.foodName.toLowerCase().split(" ");
            angular.forEach(vm.splitFooditems, function(value, key) {
                var result = value.filter(function(n) {
                    return vm.tempName.indexOf(n) != -1;
                });
                console.log(result);
                if (angular.isDefined(result) && (result.length > 0)) {
                    vm.resultingData[key] = vm.foodItems[key];
                }
                console.log(vm.resultingData);
            });
        }



        // vm.checkExistingFooditems = function() {
        //     if (!angular.isDefined(vm.foodName)) {
        //         return;
        //     }
        //     vm.isItemChecked = true;
        //     vm.resultingData = {};
        //     vm.tempName = vm.foodName.toLowerCase().split(" ");
        //     angular.forEach(vm.splitFooditems, function(value, key) {
        //         console.log('string match-' + value + key);
        //         angular.forEach(value, function(item) {
        //             vm.matchString = stringMatch(item);
        //             if (angular.isDefined(vm.matchString) && (vm.matchString.length > 0)) {
        //                 vm.resultingData[key] = vm.foodItems[key];
        //             }
        //         });
        //         console.log(vm.resultingData);
        //     });
        // }

        // function stringMatch(item) {
        //     console.log(item);
        //     var temp = [];
        //     angular.forEach(vm.tempName, function(val) {
        //         if (item === val) {
        //             temp.push(item);
        //         }
        //     });
        //     return temp;
        // }
    }
})();
