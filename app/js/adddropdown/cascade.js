/*
 *
 *#     xiaofeng.yao     2016.9.27     cascade  级联
 *
 */

appdemo.directive("cascade", ['$http', function($http) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: "../app/js/adddropdown/cascade.html",
        link: function(scope) {
            $http.get('data/tree.json').success(function(data) {
                scope.treelist = data;
            }).then(function() {
                scope.listclickfun = function(obj) {
                    obj.isActive = !obj.isActive;
                };
                // 级联 单独操作 一级
                scope.clickcheckboxone = function(obj) {
                    obj.isCheckbox = !obj.isCheckbox;
                    if (obj.isCheckbox) {
                        // 遍历 子 选项全部选中
                        angular.forEach(obj.sub_menu, function(li, i) {
                            li.isCheckbox = true;
                            // 遍历 孙子 选项全部选中
                            angular.forEach(li.list, function(list, i) {
                                list.isCheckbox = true;
                            });
                        });
                    } else {
                        angular.forEach(obj.sub_menu, function(li, i) {
                            li.isCheckbox = false;
                            angular.forEach(li.list, function(list, i) {
                                list.isCheckbox = false;
                            });
                        });
                    }

                };
                // 级联 单独操作 二级
                scope.clickcheckboxtwo = function(obj) {
                    obj.isCheckbox = !obj.isCheckbox;
                    if (obj.isCheckbox) {
                        angular.forEach(obj.list, function(list, i) {
                            list.isCheckbox = true;
                        });
                    } else {
                        angular.forEach(obj.list, function(list, i) {
                            list.isCheckbox = false;
                        });
                    }

                };

            });
        }
    }
}]);