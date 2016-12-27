/*
 *
 *     xiaofeng.yao     2016.9.14     add tab
 *
 */
appdemo.controller('addtabcontroller', ['$scope', '$http', function($scope, $http) {
    $scope.AddtabNav = ['101', '202', '303', '404', '505', '606', '701', '702', '703', '704', '705', '706', '707', '708', '709'];
    $scope.tabArray = [];
    $scope.clicknavli = function(obj) {
        var navWidth = 600,
            maxWidth;
        if ($scope.tabArray.indexOf(obj) == -1) {
            $scope.tabArray.push(obj);
            if ($scope.tabArray.length < 5) {
                maxWidth = 120;
                console.log(maxWidth);
            } else {
                console.log($scope.tabArray.length)
                maxWidth = navWidth / $scope.tabArray.length;
                console.log(maxWidth);
            }
            $scope.tabwidth = maxWidth;
            console.log($scope.tabArray)
        };
    }
}]);