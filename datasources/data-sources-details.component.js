(function () {
  'use strict';

  angular
    .module('wams.forms')
    .component('dataSourcesDetails', {
      // bindings: {
      //   details: '=',
      //   onDelete: '&',
      //   onEdit: '&'
      // },
      templateUrl: 'forms/create/datasources/data-sources-details.tpl.html',
      controller: DataSourcesDetailsCtrl
    });

  DataSourcesDetailsCtrl.$inject = ['$q', 'createFormSvc', '$modal'];

  function DataSourcesDetailsCtrl($q, createFormSvc, $modal) {
    var vm = this;
    vm.title = 'datasources Details';

    activate();

    function activate() {}
    // vm.viewGroupDetails = function () {
    //   var modalInstance = $modal.open({
    //     animation: true,
    //     templateUrl: 'forms/create/datasources/view-datasources-details.tpl.html',
    //     controller: 'ViewDatasourcesDetailsCtrl as vm',
    //     windowClass: 'app-modal-window',
    //     resolve: {
    //       data: function () {
    //         return vm.details;
    //       }
    //     }
    //   });
    // }

  }
})();
