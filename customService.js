var app = angular.module('customServiceApp', []);
app.controller('ctrl1', function($scope, articelsService) {
    $scope.articles1 = articelsService.articleDataSrc;
    //$scope.articles1[0].title = 'title No. 1 changed by controller1 !!!';
})
app.controller('ctrl2', function($scope, articelsService) {
		$scope.articles2 = articelsService.articleDataSrc;
})
app.factory('articelsService', function() {
		var service = {};
		service.articleDataSrc = [
        {
          title: 'title No. 1',
          content: 'content No. 1'
        },
        {
          title: 'title No. 2',
          content: 'content No. 2'
        },
        {
          title: 'title No. 3',
          content: 'content No. 3'
        },
        {
          title: 'title No. 4',
          content: 'content No. 4'
        }
    ];
    return service;
})