(function () {
  'use strict';

  angular.module('DivinationApp')
  .service('DataService', DataService);

  DataService.$inject = ['$http'];
  function DataService ($http) {
    var service = this;

    service.getNumber = function (inputDate) {
      var birthdayData = {};
      var birthdayDataArray;
      birthdayData = inputDate;

      var yearNum = service.intoArray(birthdayData.year);
      var monthNum = service.intoArray(service.digitalConvert(birthdayData.month));
      var dayNum = service.intoArray(service.digitalConvert(birthdayData.day));

      birthdayDataArray = service.conbineArray(yearNum, monthNum, dayNum);

      return birthdayDataArray;

    }

    service.intoArray = function (data) {
      var output = [];
      var stringData = data.toString();

      for (var i = 0, len = stringData.length; i < len; i ++) {
        output.push(+stringData.charAt(i));
      }
      return output;
    }

    service.conbineArray = function (data1, data2, data3) {
      var allNum
      allNum = data1.concat(data2).concat(data3);
      return allNum;
    }

    service.getData = function (data) {
      return data;
    }

    service.digitalConvert = function (d) {
      return (d < 10) ? '0' + d.toString(): d.toString();
    }

    service.sumUp = function (data) {
      for (var i = 0, sum = 0; i < data.length; sum += data[i++]);
      return sum;
    }

    service.numSorting = function (data1, data2) {
      for (var i = 0; i < data1.length; i++) {
        switch (data1[i]) {
          case 0:
            data2[0] += 1;
            break;
          case 1:
            data2[1] += 1;
            break;
          case 2:
            data2[2] += 1;
            break;
          case 3:
            data2[3] += 1;
            break;
          case 4:
            data2[4] += 1;
            break;
          case 5:
            data2[5] += 1;
            break;
          case 6:
            data2[6] += 1;
            break;
          case 7:
            data2[7] += 1;
            break;
          case 8:
            data2[8] += 1;
            break;
          case 9:
            data2[9] += 1;
            break;
    }
  }
    }

    service.aqcAndLifeNum = function (oriData, aqcNum, lifeNum) {
      var metaData = oriData;
      metaData = service.intoArray(service.sumUp(metaData));

      for (;metaData.length > 1;) {
        service.numSorting(metaData, aqcNum);
        metaData = service.intoArray(service.sumUp(metaData));
      }

      service.numSorting(metaData, lifeNum);

    }

    service.getSpiritNumExplanation = function () {
      return $http.get("data/spirit-number-explanation.json");
    }

    service.arrayIntoNum = function (data) {
      var num;
          for (var i = 0; i < data.length; i++) {
            if (data[i] !== 0) {
              num = i;
            }
          }
      return num;
    }

  }
})();
