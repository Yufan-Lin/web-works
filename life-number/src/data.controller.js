(function () {
  'use strict';

  angular.module('DivinationApp')
  .run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 500;
}])
  .controller('DataController', DataController);

  DataController.$inject = ['DataService', 'NumToImgFilter', '$location', '$anchorScroll'];
  function DataController (DataService, NumToImgFilter, $location, $anchorScroll) {
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

    ctrl.exp = function (index) {
      var promise =  DataService.getSpiritNumExplanation();
      promise.then(function (response) {
        ctrl.data = response.data[index];
      });
    }

    ctrl.getLifeNum = function () {
      return DataService.arrayIntoNum(ctrl.lifeNum);
    }

    ctrl.gotoTop = function (position) {
      $location.hash(position);
      $anchorScroll();
    }


  }
})();
