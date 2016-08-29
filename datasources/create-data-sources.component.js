(function () {
  'use strict';

  angular
    .module('wams.forms')
    .component('createDataSources', {
      bindings: {
        onSave: '&'
      },
      templateUrl: 'forms/create/datasources/create-data-sources.tpl.html',
      controller: Controller
    });

  Controller.$inject = ['$q', 'createFormSvc'];

  function Controller($q, createFormSvc) {
    var vm = this;
    vm.title = 'Create/Edit a Data Sources';
    vm.isArray = false;
    vm.isKeyValueIndex = false;
    vm.variables = [];
    activate();

    function activate() {}
    vm.add = function () {
      if (vm.variable.updateMode == true) {
        var index = _.indexOf(vm.variables, vm.currentRowcopy);
        vm.variables[index] = vm.variable;
        vm.variable = undefined;
      } else {
        if (angular.isDefined(vm.variable)) {
          vm.variables.push(vm.variable);
          console.log('variables :' + vm.variables);
          vm.variable = undefined;
        }
      }
    }

    vm.remove = function (row) {
      var temp = _.find(vm.variables, ['name', row.name]);
      console.log(temp);
      vm.variables = _.differenceWith(vm.variables, [temp], _.isEqual);
      console.log(vm.variables);
    }

    vm.updateRow = function (row) {
      row.updateMode = true;
      vm.currentRowcopy = row;
      vm.variable = row;
    }

    vm.cancel = function (row) {}
    vm.reset = function () {
      vm.urlName = undefined;
      vm.variable = undefined;
      vm.isArray = false;
      vm.isKeyValueIndex = false;
    }

    vm.addData = function () {
      var temp = {
        api: vm.urlName,
        variable: vm.variables,
        isArray: vm.isArray,
        isKeyValueIndex: vm.isKeyValueIndex
      };
      vm.onSave({
        data: temp
      });
    }
  }
})();
