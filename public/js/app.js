var FanApp = angular.module('FanApp', []);

FanApp.controller('FanController', ['$scope', '$http', function($scope, $http){
  //kinda like a private constructor
  $scope.ajaxDone = false;
  $scope.biggestFans = [];
  $scope.numCards = 0;
  $scope.init = function(endpoint) {
    $http.get('http://localhost:8000' + endpoint)
    .then(function(response) {
      var biggestFansObj = response['data'];
      $scope.biggestFans = biggestFansObj;
      $scope.numCards = biggestFansObj.length;
      $scope.ajaxDone = true;
    });
  };
}])
