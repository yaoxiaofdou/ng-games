/*
 *
 *     xiaofeng.yao     2015.8.15     app module nav list
 *
 */

appdemo.directive("indexNav", function() {
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: './js/nav/mainnav.html'
    }
});

appdemo.directive('listsubcomponent', function() {
    return {
        restrict: 'EA',
        repeat: true,
        transclude: true,
        templateUrl: './js/nav/navlist.html',
        link: function(scope, element, attrs) {
            scope.componentshow = false;
            scope.listsubcomponent = function listsubcomponent() {
                var this_li = element.find("li");
                this_li.bind("click", function(e) {
                    e.stopPropagation();
                });
                scope.componentshow = !scope.componentshow;
            }
        },
    };
});

// Nav link icon name

appdemo.controller("mainnav", ['$scope', '$http', function($scope, $http) {
    // nav list
    $http.get('data/navlist.json').success(function(data) {
        $scope.lists = data;
    }).then(function() {
        // 单击遍历，清除所有样式
        $scope.clearLiClass = function(listarr) {
            angular.forEach(listarr, function(listobj, index) {
                angular.forEach(listobj.subcomponent, function(obj, index) {
                    obj.isActive = false;
                });
            });
        };
    })
}]);