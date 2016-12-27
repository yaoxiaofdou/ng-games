/*
 *
 *     xiaofeng.yao     2016.8.25     sweetalert
 *
 */

appdemo.controller('sweetalert', ['$scope', function($scope) {
    // 提示语句
    $scope.alertmessage = function() {
        swal($scope.alertDiv.text);
    };
    // 标题 + 提示语句
    $scope.alertactive = function() {
        swal("Here's a message!", $scope.alertDiv.text);
    };
    // 成功提示
    $scope.alertsuccess = function() {
        swal("Good job!", $scope.alertDiv.text, "success");
    };
    // 选择判断
    $scope.alertjudge = function() {
        swal({
            title: "Are you sure?",
            text: $scope.alertDiv.text,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function() {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    };
    // 取消动画 + 选择判断
    $scope.alertcanceljudge = function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    };
    // 图片
    $scope.alertimgmessage = function() {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "./images/img_1.jpg"
        });
    };
    // HTML代码
    $scope.alerthtml = function() {
        swal({
            title: "HTML <small>Title</small>!",
            text: "A custom <span style='color:#F8BB86'>html<span> message.",
            html: true
        });
    };
    // 定时关闭
    $scope.alertsetTimeout = function() {
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        });
    };
    // 输入 && 判断
    $scope.alertinputjudge = function() {
        swal({
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }
            swal("Nice!", "You wrote: " + inputValue, "success");
        });
    };
    // ajax
    $scope.alertAjax = function() {
        swal({
            title: "Ajax request example",
            text: "Submit to run ajax request",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        }, function() {
            setTimeout(function() {
                swal("Ajax request finished!");
            }, 2000);
        });
    };
}]);

appdemo.controller('AlertImg', ['$scope', function($scope) {

}])

appdemo.directive('showimg', function() {
    return {
        scope: {},
        restrict: 'EA',
        template: "<div class='showimgMask' ng-click='showimg.isShowImg =! showimg.isShowImg;' ng-show='showimg.isShowImg'><img class='alertimg' ng-src='{{showimg.imgsrc}}'/></div><button type='button' class='btn btn-default' ng-click='showimgFun();'>ShowImg</button>",
        transclude: true,
        link: function($scope, iElm, iAttrs, controller) {
            $scope.$watch(iAttrs.imgSrc, function(newVal, oldVal) {
                if (oldVal === newVal) {
                    return
                }
                $scope.showimg.imgsrc = newVal;
            });
            $scope.showimgFun = function() {
                $scope.showimg.isShowImg = !$scope.showimg.isShowImg;
            }

        }
    };
});