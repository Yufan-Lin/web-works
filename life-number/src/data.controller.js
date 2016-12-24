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
    ctrl.type = [];
    ctrl.resultDetail = [];
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
      DataService.numIntoType(ctrl.innateNum, ctrl.acquiredNum, ctrl.lifeNum, ctrl.type);
    }

    ctrl.exp = function (index) {
      var promise_1 = DataService.getSpiritNumExplanation();
      var promise_2 = DataService.getInAcExplanation();
      promise_1.then(function (response) {
        ctrl.data = response.data[index];
      });
      promise_2.then(function (response) {
        ctrl.data2 = response.data;
        ctrl.getDetailData();
      });

    }

    ctrl.getDetailData = function () {
      for (var i = 0; i < 10; i++) {
        var typeList = ctrl.type[i];
        var dataNum = ctrl.data2[i].type;
        ctrl.resultDetail[i] = dataNum[typeList];
      }
    }

    // ctrl.getNumberDetail = DataService.numIntoType(ctrl.innateNum, ctrl.acquiredNum, ctrl.type);

    ctrl.getLifeNum = function () {
      return DataService.arrayIntoNum(ctrl.lifeNum);
    }

    ctrl.gotoTop = function (position) {
      $location.hash(position);
      $anchorScroll();
    }


  }
})();
