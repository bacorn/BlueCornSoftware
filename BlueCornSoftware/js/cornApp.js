var cornApp = angular.module("cornApp",[]);

cornApp.controller("formCtrl",["$scope",function($scope){
        $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    }]);