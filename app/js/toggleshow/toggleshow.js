/*
 *
 *     xiaofeng.yao     2015.8.15     toggleshow module
 *
 */
appdemo.directive('expander', function() {
    return {
        restrict: 'EA',
        repeat: true,
        transclude: true,
        scope: {
            title: '=expanderTitle'
        },
        template: '<div>' + '<div class="title" ng-click="toggle()">{{title}}</div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
        link: function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        },
    };
});
appdemo.controller('togglecontrolle', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {
    $scope.title = 'click title';
    $scope.text = 'this is content';
    $scope.timertitle = '定时器案例';
    $scope.countNum = 10;
    $scope.countDown = function() {
        var timer = $interval(function() {
            $scope.countNum--;
            if ($scope.countNum == 0) {
                $interval.cancel(timer);
                // 重置属性
                $scope.countNum = 10;
                $scope.timertitle = '定时器案例';
            }
        }, 1000);
        var timeout = $timeout(function() {
            $scope.timertitle = '已经三秒了'
        }, 3000)
    };
}]);