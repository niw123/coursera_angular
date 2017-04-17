(function() {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  
  $scope.checkIfTooMuch = function() {
    if ($scope.text) {
      var foodCount = $scope.text.split(',');
      if (foodCount.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    } else {
      $scope.message = "Please enter data first";
    }
  }
}

})();
