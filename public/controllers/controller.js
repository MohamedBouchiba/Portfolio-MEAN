var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope','$http',
    function ($scope , $http) {
        console.log('TestZER')

        $scope.addUser = function () {
            console.log($scope.User)

        };
        
}]);







