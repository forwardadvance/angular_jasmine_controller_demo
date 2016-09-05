angular.module('app', [])
  .controller('volcanoController', function($scope) {
    $scope.volcano = {name: 'E15'}
    $scope.erupt = function() {
      $scope.volcano.erupting = true;
    }
  });


// karma requires node
// Node is JavaScript in your command line
//
// karma init
