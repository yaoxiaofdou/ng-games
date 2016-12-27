/*
 *
 *     xiaofeng.yao     2016.9.18     add dropdown - duo
 *
 */
appdemo.directive("relationFabricPopup", ['$http', function($http) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: "../app/js/adddropdown/relationFabricPopup.html",
        link: function(scope) {
            $http.get('data/tree.json').success(function(data) {
                scope.fabric_list = data;
            }).then(function() {
                // 选中显示数组
                var fabricArray = [];
                // 爷爷标签
                scope.clickfabric = function(dataobj, datatitle) {
                    angular.forEach(datatitle, function(title) {
                        title.isActive = false;
                    });
                    scope.fabrictwolist = dataobj.sub_menu;
                    scope.fabricthreelist = null;
                };
                scope.fabricthreelist = null;
                // 父类标签
                scope.fabricLi = function(dataobj, datatitle) {
                    angular.forEach(datatitle, function(title) {
                        title.isActive = false;
                    });
                    scope.fabricthreelist = dataobj.list;

                    var arrone = scope.fabricthreelist;
                    for (var i = 0; i < arrone.length; i++) {
                        for (var j = 0; j < fabricArray.length; j++) {
                            if (arrone[i] == fabricArray[j]) {
                                arrone[i].isActive = true;
                            }
                        }
                    }
                };

                // 数组删除方法
                Array.prototype.remove = function(val) {
                    var index = this.indexOf(val);
                    if (index > -1) {
                        this.splice(index, 1);
                    }
                };

                //子类标签
                scope.fabricaddarray = function(datatitle, threeli) {
                    if (fabricArray.indexOf(threeli) == -1) {
                        fabricArray.push(threeli);
                    } else {
                        fabricArray.remove(threeli);
                    }
                    scope.fabricArray = fabricArray;
                };

                // 关闭nav li 标签
                scope.delete = function(data) {
                    // 删除指定数组对象
                    fabricArray.remove(data);
                    // 删除对应的LI中的选中状态
                    data.isActive = false;
                };
            })
        }
    }
}]);