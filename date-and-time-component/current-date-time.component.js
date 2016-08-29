(function() {
    'use strict';

    angular
        .module('app')
        .component('currentDateTime', {
            templateUrl: 'date-and-time-component/current-date-time-component.tpl.html',
            controller: controller
        });

    function controller() {
        var vm = this;
        vm.title = 'Current date and time is :-' ;
        var today = new Date();
        console.log(today);
        vm.day = today.getDay();
        // console.log(day);
        vm.daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
        console.log('today is ' + vm.daylist[vm.day]);
        vm.hour = today.getHours();
        vm.minute = today.getMinutes();
        vm.second = today.getSeconds();
        vm.month = today.getMonth();
        vm.date = today.getDate();
        vm.hour = (vm.hour >= 12) ? vm.hour - 12 : vm.hour;
        vm.monthList = ["Jan", "Feb", "mar", "april", "may", "jun", "july", "aug", "sept", "oct", "nov", "dec"]
        console.log('today is ' + vm.hour + "-" + vm.minute + "-" + vm.second + "-" + vm.monthList[7] + "" + vm.date);

        // var prepand = (hour >= 12) ? " PM " : " AM ";
        // hour = (hour >= 12) ? hour - 12 : hour;

        // if (hour === 0 && prepand === ' PM ') {
        //     if (minute === 0 && second === 0) {
        //         hour = 12;
        //         prepand = ' Noon';
        //     }
        // } else {
        //     hour = 12;
        //     prepand = ' PM';
        // }

        // if (hour === 0 && prepand === ' AM ') {
        //     if (minute === 0 && second === 0) {
        //         hour = 12;
        //         prepand = 'Midnight';
        //     }
        // } else {
        //     hour = 12;
        //     prepand = ' AM';
        // }
        // console.log('current time is ' + hour + prepand + ':' + minute + ':' + second);

    }
})();
