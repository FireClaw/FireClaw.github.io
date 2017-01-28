var PortfolioApp = angular.module('portfolioApp', []);
PortfolioApp.controller('NavBar', ['$scope', function($scope) {
  $scope.pages = [
    {name: 'Home', url:'index.html'},
    {name:'Works', url:'works.html'},
    {name: 'About', url:'about.html'}
  ];
}]);

PortfolioApp.directive('navBar', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/navbar.html'
  }
});

PortfolioApp.directive("content", function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '../templates/content.html'
  }
})