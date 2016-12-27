/*
 *
 *     xiaofeng.yao     2015.8.16     form
 *
 */

appdemo.controller('loginform', ['$scope', function($scope) {
    $scope.vm = {
        entity: {}
    };
    $scope.loginsubmit = function() {
        var user = {
            'email': $scope.vm.entity.email,
            'password': $scope.vm.entity.password
        };
        $scope.user = user;
    }
}])