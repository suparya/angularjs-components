(function () {
  'use strict';

  angular
    .module('wams.forms')
    .component('selectDatasources', {
      templateUrl: 'forms/create/datasources/template.tpl.html',
      controller: Controller
    });

  Controller.$inject = ['$q', 'createFormSvc'];

  /* @ngInject */
  function Controller($q, createFormSvc) {
    var vm = this;
    vm.title = 'Create Datasources';
    vm.dataSources = [];

    activate();

    ////////////////

    function activate() {}
    vm.saveData = function (data) {
      console.log(data);
      vm.dataSources.push(data);
      console.log( vm.dataSources);
    }
  }
})();
