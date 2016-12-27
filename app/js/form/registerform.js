/*
 *
 *     xiaofeng.yao     2015.8.23     form register
 *
 */

appdemo.controller("registerform", ['$scope', '$http', function($scope, $http) {
    // 初始化数据对象
    $scope.vm = {
        entity: {},
    };
    // 重置数据
    $scope.formdatareset = function() {
        $scope.vm = {
            entity: {},
        }
    };
    // 写入数据
    $scope.setformdata = function() {
        // 如果你在AngularJS上下文之外的任何地方修改了model，那么你就需要通过手动调用$apply()来通知AngularJS。
        // $scope.$apply(function(){

        // })

        // 设置默认数据
        $scope.vm.entity.email = '871213171@qq.com';
        $scope.vm.entity.name = 'yao123oneniub';
        $scope.vm.entity.password = 'yaoxiaodou';
        $scope.vm.entity.repeatPassword = 'yaoxiaodou';
        $scope.vm.entity.phone = '18650314709';
        $scope.vm.entity.sex = '男';
        $scope.vm.entity.favoriteColor = {
            red: true,
            blue: true
        };
        $scope.vm.entity.address = '湖里区湖滨南路';
    };
    $scope.formdata = function() {
        var userobj = {
            email: $scope.vm.entity.email,
            name: $scope.vm.entity.name,
            password: $scope.vm.entity.password,
            phone: $scope.vm.entity.phone,
            sex: $scope.vm.entity.sex,
            favoriteColor: $scope.vm.entity.favoriteColor,
            birthday: $scope.vm.entity.dataselects.year + ',' + $scope.vm.entity.dataselects1.mouth + ',' + $scope.vm.entity.dataselects2.day,
            address: $scope.vm.entity.selected.name + $scope.vm.entity.selected2.name + $scope.vm.entity.selected1.value + $scope.vm.entity.address
        };
        // 页面打印出数据
        $scope.registeruser = userobj;
    };
}]);