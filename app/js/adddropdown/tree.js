/*
 *
 *#     xiaofeng.yao     2016.9.27     treelist
 *
 */

appdemo.directive("treelist", ['$http', function($http) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: "../app/js/adddropdown/tree.html",
        link: function(scope) {
            $http.get('data/tree.json').success(function(data) {
                scope.treelist = data;
            }).then(function() {
                scope.listclickfun = function(obj) {
                    obj.isActive = !obj.isActive;
                }
            });
        }
    }
}]);