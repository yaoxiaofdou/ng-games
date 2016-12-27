/*
 *
 *     xiaofeng.yao     2016.8.31     dropdowns
 *
 */
appdemo.controller('Assemblydropdowns', ['$scope', function($scope) {

}])
appdemo.directive('dropdowns', ['$http', function($http) {
    return {
        restrict: 'EA',
        template: '<div><button class="btn {{dpClass}}" ng-mouseenter="slideoption();option.isActive = true;">{{dpname}} <span class="caret"></span></button><div style="{{optionClass}}" ng-mouseleave="option.isActive=false;" ng-if="option.isActive" class="list-group"><a class="{{liClass}}" ng-repeat="option in options" style="cursor:pointer;">{{option}}</a></div></div>',
        //replace: true,
        link: function($scope, iElm, iAttrs, controller) {
            var dropdownObj = {
                name: iAttrs.name,
                option: iAttrs.options,
                dpClass: iAttrs.classname,
                liClass: iAttrs.optionclass,
                dataurl: iAttrs.dataurl
            };

            $scope.dpname = dropdownObj.name;
            $scope.dpClass = dropdownObj.dpClass;
            $scope.liClass = dropdownObj.liClass;

            $scope.slideoption = function() {
                // 截取字符串形成数组
                if (dropdownObj.option !== undefined) {
                    $scope.options = dropdownObj.option.split(',');
                } else {
                    $http.get("" + dropdownObj.dataurl + "").success(function(data) {
                        $scope.dataarray = data;
                    }).then(function() {
                        var array = $scope.dataarray;
                        $scope.options = [];
                        for (var i = 0; i < array.length; i++) {
                            $scope.options.push(array[i].productName)
                        }
                    })
                }
            }
        }
    }
}])