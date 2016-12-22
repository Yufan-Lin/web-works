(function () {
  'use strict';

  angular.module('DivinationApp')
  .controller('DataController', DataController);

  DataController.$inject = ['DataService', 'NumToImgFilter'];
  function DataController (DataService, NumToImgFilter) {
    var ctrl = this;
    ctrl.innateNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ctrl.acquiredNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ctrl.lifeNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ctrl.birthDate = {
      year: null,
      month: null,
      day: null
    };

    ctrl.getBirthData = function () {
      ctrl.innateNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ctrl.acquiredNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ctrl.lifeNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      ctrl.testArray =  DataService.getNumber(ctrl.birthDate);
      DataService.numSorting(ctrl.testArray, ctrl.innateNum);
      DataService.aqcAndLifeNum(ctrl.testArray ,ctrl.acquiredNum, ctrl.lifeNum);



    }





  }
})();
