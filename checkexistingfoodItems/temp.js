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
            "4": "Aloo Paratha"
                // "5": "Bread Butter Plain",
                // "6": "Bread Jam Plain",
                // "7": "Bread Butter Jam Plain",
                // "8": "Veg Grill Sandwich",
                // "9": "Aloo Palak Paratha",
                // "10": "Gobi Paratha"
        };

        angular.forEach(vm.foodItems, function(value, key) {
            vm.splitFooditems[key] = value.split(" ");
        });
        console.log('splitFooditems ' + JSON.stringify(vm.splitFooditems));

        vm.checkExistingFooditems = function() {
            if (!angular.isDefined(vm.foodName)) {
                return;
            }
            vm.isItemChecked = true;
            vm.tempName = vm.foodName.toLowerCase().split(" ");
            // console.log('splitFoodname ' + tempName);
            angular.forEach(vm.splitFooditems, function(value, key) {
                // var result = value.find(vm.chkAvailable);
                // console.log('string match-');

            });
        }

        // vm.chkAvailable = function(v) {
        //     console.log(v);
        //     angular.forEach(vm.tempName, function(val) {
        //         if (val.indexOf(v) === 0) {
        //             console.log('string match-' + v + 'with ' + val);
        //             return val
        //         }
        //     });
        // }
    }
})();



// var tempCheck = _.reduce(foodNameSplitArray, function(result, value, key) {
//     var size = _.size(_.intersection(value, tempName));
//     if (size > 0) {
//         (result[size] || (result[size] = [])).push(key);
//     }
//     return result;
// }, {});


// var temp = value.reduce(function(result, v, k) {
//  console.log('result'+result)
//     console.log('value  ' + v);
//     console.log('key  ' + k);

// });


// var item;
// for (item in vm.foodItems) {
//     vm.splitFooditems[item] = vm.foodItems[item].split(' ')
// };
// console.log('splitFooditems ' + JSON.stringify(vm.splitFooditems));
// console.log('splitFooditems ' + JSON.stringify(vm.foodItems));
