/*
 *
 *     xiaofeng.yao     2016.8.23     w5c.validator
 *
 */

//  表单插件
appdemo.config(["w5cValidatorProvider", function(w5cValidatorProvider) {

    // 全局配置
    w5cValidatorProvider.config({
        blurTrig: true,
        showError: true,
        removeError: true

    });

    w5cValidatorProvider.setRules({
        email: {
            required: "输入的邮箱地址不能为空",
            email: "输入邮箱地址格式不正确"
        },
        username: {
            required: "输入的用户名不能为空",
            pattern: "用户名必须输入字母、数字、下划线,以字母开头",
            w5cuniquecheck: "输入用户名已经存在，请重新输入"
        },
        password: {
            required: "密码不能为空",
            minlength: "密码长度不能小于{minlength}",
            maxlength: "密码长度不能大于{maxlength}"
        },
        repeatPassword: {
            required: "重复密码不能为空",
            repeat: "两次密码输入不一致"
        },
        phone: {
            required: "手机号码不能为空",
            pattern: "必须以 13|14|15|18|17 开头的11位手机号"
        },
        sex: {
            required: "性别必须选择",
        },
        customizer: {
            customizer: "自定义验证数字必须大于上面的数字"
        },
        dynamicName: {
            required: "动态Name不能为空"
        },
        dynamic: {
            required: "动态元素不能为空"
        }
    });
}]);

appdemo.controller("validateCtrl", ["$scope", "$http", function($scope, $http) {
    var vm = $scope.vm = {
        htmlSource: "",
        showErrorType: "1",
        showDynamicElement: true,
        dynamicName: "dynamicName",
        entity: {}
    };

    vm.saveEntity = function($event) {
        //do somethings for bz
        alert("Save Successfully!!!");
    };

    vm.customizer = function() {
        return vm.entity.customizer > vm.entity.number;
    };

    vm.changeShowType = function() {
        if (vm.showErrorType == 2) {
            vm.validateOptions.showError = false;
            vm.validateOptions.removeError = false;
        } else {
            vm.validateOptions.showError = true;
            vm.validateOptions.removeError = true;
        }
    };

    vm.types = [{
        value: 1,
        text: "选择框"
    }, {
        value: 2,
        text: "输入框"
    }];

    $http.get("index.js").success(function(result) {
        vm.jsSource = result;
    });
    $http.get("validate.form.html").success(function(result) {
        vm.htmlSource = result;
    });
    $http.get("validate.form.html").success(function(result) {
        vm.htmlSource = result;
    });

    $http.get("css/style.less").success(function(result) {
        vm.lessSource = result;
    });

}]);