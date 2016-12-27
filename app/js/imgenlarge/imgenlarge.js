/*
 *
 *#     xiaofeng.yao     2016.9.30     imgenlarge
 *
 */
appdemo.directive('imgEnlarge', function() {
    return {
        scope: {},
        restrict: 'EA',
        templateUrl: '../app/js/imgenlarge/imgenlargehtml.html',
        link: function(scope, iElm, iAttrs, controller) {
            // img src
            var img = new Image();
            img.src = '../app/images/img_1.jpg';
            scope.imgsrc = img.src;

            // 默认的小黑框位置 top:0 left:0
            scope.mouseleft = 0;
            scope.mousetop = 0;

            // 鼠标滑动执行函数
            scope.imgmouseover = function(mouse) {

                // min img
                scope.mouseleft = mouse.offsetX - 15;
                scope.mousetop = mouse.offsetY - 15;

                // max img
                scope.maximgleft = scope.mouseleft * 10 * -1;
                scope.maximgtop = scope.mousetop * 10 * -1;

            }
        }
    };
});