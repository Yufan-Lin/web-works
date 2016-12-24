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
        data2[data1[i]] += 1;
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

    service.getInAcExplanation = function () {
      return $http.get('data/innate-acquired-number-explanation.json');
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

    service.numIntoType = function (innate, acquired, rec, result) {
      for (var i = 0; i < innate.length; i++) {
        if (innate[i] === 0 && acquired[i] === 0) {
          if (rec[i] !== 0) {
            result[i] = "rec";
          }
          else {
            result[i] = "empty";
          }
        }
        else if (innate[i] !== 0 && acquired[i] !== 0) {
          result[i] = "mix";
        }
        else {
          if (innate[i] !== 0) {
            result[i] = "c" + innate[i].toString();
            }
          else {
              result[i] = "t" + acquired[i].toString();
          }
        }
      }
    }



  }
})();
