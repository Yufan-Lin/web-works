(function () {
  'use strict'

  angular.module('DivinationApp')
  .filter('NumToImg', function () {
    return function (input, img) {
      input = input;
      var output = "";

      for (var i = input; i > 0; i--) {
        output += img;
      }

      return output;
    };
  })

  .filter('lifeNumber', function () {
    return function (lifeNum) {
      var result;

      for (var i = 0; i < lifeNum.length; i++) {
        if (lifeNum[i] != 0) {
          result = i;
        }
      }
      return result;
    };
  });


})();
