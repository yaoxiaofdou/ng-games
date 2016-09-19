/*
 *
 *     xiaofeng.yao     2015.8.15     select
 *
 */
appdemo.controller("AssemblySelect", ['$scope', '$http','$log', function($scope, $http,$log) {

    // 下拉列表
    $scope.Assemblyselected = '';
    $scope.btncolor = "btn-default";
    $scope.selectdata = [];
    $http.get('data/select.json').success(function(data) {
        $scope.selectdata = data;
    },function(errResponse){
        $log.log('Error while fetching notes');
    });
    $scope.bsselectedvalue = '点击我改变颜色哦';
    $scope.bsselectedFun = function(obj) {

        $scope.bsselectedvalue = obj.productName;
        $scope.bsoptioned = obj;
        $scope.btncolor = obj.btncolor;
    };

}]);

appdemo.controller("Selectulli", ['$scope', '$http', '$window', '$log', function($scope, $http, $window, $log) {
    // 下拉列表
    $scope.Assemblyselected = '';
    $scope.btncolor = "btn-default";
    $scope.selectdata = [];
    $http.get('data/select.json').success(function(data) {
        $scope.selectdata = data;
    });
    $scope.bsselectedvalue = '点击我改变颜色哦';
    $scope.bsselectedFun = function(obj) {
        $scope.bsselectedvalue = obj.productName;
        $scope.bsoptioned = obj;
        $scope.btncolor = obj.btncolor;
    };

}]);

appdemo.controller("AssemblyDataSelect", ['$scope', '$http', function($scope, $http) {
    // 日期选择控件数据
    $scope.datalists = [];
    $http.get('data/DataList.json').success(function(data) {
        $scope.datalists = data;
    });
}]);

appdemo.controller("AssemblyLinkageSelect", ['$scope', '$http', function($scope, $http) {

    // 省市联动
    //         原生写法
    $scope.error = {};
    $scope.list = [];
    $http.get('data/list.json').success(function(data) {
        $scope.list = data;
    });
    $scope.c = function() {
        $scope.error.province = false;
        $scope.error.city = false;
        $scope.error.area = false;
        $scope.selected2 = "";
        $scope.selected3 = "";
    };

    $scope.c2 = function() {
        $scope.error.city = false;
        $scope.error.area = false;
        $scope.selected3 = "";
    };

    $scope.c3 = function() {
        $scope.error.area = false;
    };

    $scope.submit = function() {
        $scope.error.province = $scope.selected ? false : true;
        $scope.error.city = $scope.selected2 ? false : true;
        $scope.error.area = $scope.selected3 ? false : true;
    };

    // 用bootstrap 自制一个 select 

    $scope.LinkageSelectValue = '--请选择--'; // 省
    $scope.LinkageSelectValueChild = '--请选择--'; // 市
    $scope.LinkageSelectValueChildTwo = '--请选择--'; // 县/区

    $scope.ChildArray = []; // 存储 市
    $scope.childTwoArray = []; // 存储 区/县

    $scope.LinkageSelectFun = function(obj) {
        $scope.LinkageSelectValue = obj.name;
        $scope.LinkageSelectValueChild = '--请选择--';
        $scope.ChildArray = obj.child;
    }
    $scope.LinkageSelectChildFun = function(obj) {
        $scope.LinkageSelectValueChild = obj.name;
        $scope.childTwoArray = obj.child;
        $scope.LinkageSelectValueChildTwo = '--请选择--';
    }
    $scope.LinkageSelectChildTwoFun = function(obj) {
        $scope.LinkageSelectValueChildTwo = obj.value;
    }

}]);