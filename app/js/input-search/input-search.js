/*
 *
 *#     xiaofeng.yao     2016.9.28     input search 
 *
 */
appdemo.controller('searchController', ['$scope', function($scope) {
    $scope.searcharr = [{
        li: 12323243
    }, {
        li: 41324
    }, {
        li: 63422
    }, {
        li: 43233
    }, {
        li: 233222
    }, {
        li: 643221
    }, {
        li: 778445
    }, {
        li: 34533
    }];
    $scope.searchValue = '输入搜索内容';
    $scope.svalue = '';
    // 鼠标划过增加状态
    $scope.SearchArrMouseover = function(obj) {
        angular.forEach(obj, function(list, i) {
            list.isActive = false;
        });
    };
    // 鼠标点击改变输入
    $scope.SearchArrClick = function(obj) {
        if ($scope.search == obj.li) {
            //关闭提示框
            $scope.searchid = 2;
        } else {
            $scope.search = obj.li;
        }
    }

    // search keydown 键盘事件
    $scope.searchfocus = function($event) {
        // 40 下  38 上   13 回车
        switch ($event.keyCode) {
            case 13:
                //关闭提示框
                $scope.searchid = 2;
                break;
            case 40:
                break;
            case 38:
                break;
        }
    };

}]);