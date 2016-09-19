/*
 *
 *     xiaofeng.yao     2016.9.9     bobin
 *
 */

appdemo.controller('ngbobin', ['$scope', '$timeout', function($scope, $timeout) {

    // 默认的跑动图片
    $scope.dice_a = 'move.gif';
    $scope.dice_b = 'move.gif';
    $scope.dice_c = 'move.gif';
    $scope.dice_d = 'move.gif';
    $scope.dice_e = 'move.gif';
    $scope.dice_f = 'move.gif';
    // 功能实现函数
    $scope.bobinFun = function() {
        // title 显示隐藏开关
        $scope.titleshow = false;

        // 默认的跑动图片
        $scope.dice_a = 'move.gif';
        $scope.dice_b = 'move.gif';
        $scope.dice_c = 'move.gif';
        $scope.dice_d = 'move.gif';
        $scope.dice_e = 'move.gif';
        $scope.dice_f = 'move.gif';

        var level = {
                one: '状元插金花~~~~~3000元大奖啊！',
                two: '六红',
                three: '五红',
                four: '普通状元',
                five: '对堂',
                six: '三红',
                seven: '四进',
                eight: '二举',
                nine: '一秀',
                ten: '没有奖哦亲~~~~~'
            },
            this_level; // 存储当前等级
        var NumberArr = [];
        var a = Math.floor(Math.random() * 6) + 1,
            b = Math.floor(Math.random() * 6) + 1,
            c = Math.floor(Math.random() * 6) + 1,
            d = Math.floor(Math.random() * 6) + 1,
            e = Math.floor(Math.random() * 6) + 1,
            f = Math.floor(Math.random() * 6) + 1;

        // 数据进入数组，排序
        NumberArr.push(a, b, c, d, e, f);
        NumberArr.sort();

        var isfour = 0; //存储当前的四的个数

        for (var i = 0; i < NumberArr.length; i++) {
            if (NumberArr[i] == 4) {
                isfour = isfour + 1;
            }
        }
        // 基础的对4进行判断一遍;
        switch (isfour) {
            case 1:
                for (var i = 0; i < NumberArr.length; i++) {
                    var ContrastArr = []; //存储当前相同的数量，判断是否为四进
                    for (var j = 0; j < NumberArr.length; j++) {
                        if (NumberArr[i] == NumberArr[j]) {
                            ContrastArr.push(NumberArr[j]);
                        }
                    }
                }
                // 等到上面遍历执行完再进行判断属于哪个级别
                if (ContrastArr.length === 4) {
                    this_level = level.seven;
                    break;
                } else if (ContrastArr.length === 5) {
                    this_level = level.three;
                    break;
                } else if (ContrastArr.length === 6) {
                    this_level = level.two;
                    break;
                } else {
                    // 判断一下，是 "对堂"" or ”一秀“，对堂就是顺子，123456，一秀就是一个只有4；
                    var isContinuityArray = false;
                    var array = NumberArr;
                    var arrayCount = array.length;
                    for (var i = 0; i < arrayCount; i++) {
                        var currentArr = Number(array[i]) + 1;
                        var nestArr = Number(array[i + 1]);
                        if (i + 1 == arrayCount) {
                            currentArr = Number(array[i]);
                            nestArr = Number(array[i]);
                        }
                        if (currentArr != nestArr) {
                            isContinuityArray = false;
                            break;
                        } else {
                            isContinuityArray = true;
                        }
                    }
                    if (isContinuityArray) {
                        this_level = level.five;
                        break;
                    } else {
                        this_level = level.nine;
                        break;
                    }
                };
                break;
            case 2:
                for (var i = 0; i < NumberArr.length; i++) {
                    var ContrastArr = [];
                    for (var j = 0; j < NumberArr.length; j++) {
                        if (NumberArr[i] == NumberArr[j]) {
                            ContrastArr.push(NumberArr[j]);
                        }
                    }
                    // 判断4进,二举
                    if (ContrastArr.length === 4) {
                        this_level = level.seven;
                        break;
                    } else {
                        this_level = level.eight;
                    }
                };
                break;
            case 3:
                this_level = level.six;
                break;
            case 4:
                // 判断是 "普通状元" or "状元插金花"，普通就是4个四，插金花就是  4个四 + 2个1 ；
                var one = 0;
                for (var i = 0; i < NumberArr.length; i++) {
                    if (NumberArr[i] === 1) {
                        one = one + 1;
                    }
                }
                if (one == 2) {
                    this_level = level.one;
                } else {
                    this_level = level.four;
                }
                break;
            case 5:
                this_level = level.three;
                break;
            case 6:
                this_level = level.two;
                break;
            default:
                // 就是页面都没有四,来判断是否属于 “对堂” 和 “四进” 中的哪一种;
                for (var i = 0; i < NumberArr.length; i++) {
                    var ContrastArr = [];
                    for (var j = 0; j < NumberArr.length; j++) {
                        if (NumberArr[i] == NumberArr[j]) {
                            ContrastArr.push(NumberArr[j]);
                        }
                    }
                    if (ContrastArr.length === 4) {
                        this_level = level.seven;
                        break;
                    } else if (ContrastArr.length === 5) {
                        this_level = level.three;
                        break;
                    } else if (ContrastArr.length === 6) {
                        this_level = level.two;
                        break;
                    } else {
                        this_level = level.ten;
                    }
                };
                break;
        }

        // 定时设置最终显示的骰子图片
        var timeout = $timeout(function() {
            $scope.dice_a = a + '.png';
            $scope.dice_b = b + '.png';
            $scope.dice_c = c + '.png';
            $scope.dice_d = d + '.png';
            $scope.dice_e = e + '.png';
            $scope.dice_f = f + '.png';
            // 设置 title 显示
            $scope.titleshow = true;
            // 显示 level
            $scope.title = this_level;
        }, 2000);

        //$scope.bobinnumber = NumberArr;
    }
}]);