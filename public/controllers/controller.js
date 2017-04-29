var myApp = angular.module('myApp', ['angular-svg-round-progressbar']);
myApp.controller('AppCtrl', ['$scope','$http',
    function ($scope , $http) {
        console.log('TestZER')

        $scope.addUser = function () {
            console.log($scope.User)

        };

}]);







