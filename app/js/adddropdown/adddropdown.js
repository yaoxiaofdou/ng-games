/*
 *
 *     xiaofeng.yao     2016.9.18     add dropdown - duo
 *
 */
appdemo.controller('adddropdowncontroller', ['$scope', function($scope) {
    // 关联面料菜单
    $scope.fabric_list = [{
        fabric: '按产品标签',
        sub_menu: [{
            one: '冬装',
            list: [
                '大衣'
            ]
        }, {
            one: '春装',
            list: [
                '长袖'
            ]
        }, {
            one: '夏装',
            list: [
                '短袖'
            ]
        }]
    }, {
        fabric: '按面料类型',
        sub_menu: [{
            one: '坯布',
            list: [
                '全棉坯布',
                '化纤坯布',
                '人棉坯布'
            ]
        }, {
            one: '皮/革',
            list: [
                '真皮'
            ]
        }, {
            one: '丝绸',
            list: [
                '真丝滑',
                '假的'
            ]
        }, {
            one: '其他面料',
            list: [
                '真的',
                '假的'
            ]
        }, {
            one: '化纤面料',
            list: [
                '真丝',
                '假丝'
            ]
        }]
    }];

    $scope.clickfabric = function(dataobj) {
        $scope.fabrictwolist = dataobj.sub_menu;
        $scope.fabricthreelist = null;
    };
    $scope.fabricLi = function(dataobj) {
        $scope.fabricthreelist = dataobj.list;
    };
    $scope.fabricArray = [];
    $scope.fabricaddarray = function() {
        var threeli = this.threeli;
        // 重复不添加
        if ($scope.fabricArray.indexOf(threeli) == -1) {
            $scope.fabricArray.push(threeli);
        }
        console.log($scope.fabricArray);
    };
    // 关闭nav li 标签
    $scope.delete = function(i) {
        $scope.fabricArray.splice(i, 1);
    };
}]);