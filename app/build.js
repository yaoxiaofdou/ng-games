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
/*
 *
 *     xiaofeng.yao     2016.9.14     add tab
 *
 */
appdemo.controller('addtabcontroller', ['$scope', '$http', function($scope, $http) {
    $scope.AddtabNav = ['101', '202', '303', '404', '505', '606', '701', '702', '703', '704', '705', '706', '707', '708', '709'];
    $scope.tabArray = [];
    $scope.clicknavli = function(obj) {
        var navWidth = 600,
            maxWidth;
        if ($scope.tabArray.length < 6) {
            maxWidth = 120;
            console.log(maxWidth);
        } else if () {

        } else {
            maxWidth = navWidth / $scope.tabArray.length;
            console.log(maxWidth);
        }
        if ($scope.tabArray.indexOf(obj) == -1) {
            $scope.tabArray.push(obj);
        }
    }
}]);
/*
 *
 *     xiaofeng.yao     2015.8.15     toggleshow module
 *
 */

appdemo.controller("Assembly", function($scope) {
    $scope.message = '这是欢迎页面';
});

appdemo.controller("selectctrl",function($scope){
    $scope.sports = [
	    {id:1,label:'Basketball',selected:'YES'},
	    {id:2,label:'Cricket',selected:'NO'},
	    {id:3,label:'Soccer',selected:'NO'},
	    {id:4,label:'Swimming',selected:'YES'}
    ];
});



// 自定义服务测试
appdemo.controller("MainCtrl",[function(){
	var self = this;
	self.tab='first';
	self.open = function(tab){
        self.tab=tab;
	}
}])

.controller("SubCtrl",['ItemService',function(ItemService){

    var self = this;
    self.list = function(){
    	return ItemService.list();
    }
	self.add = function(){
		ItemService.add({
			id:self.list().length+1,
			label:'item'+self.list().length
		});
	};
}])

.factory('ItemService',[function(){
	var items = [
        {id:1,label:'Item 0'},
        {id:2,label:'Item 1'}
	];
	return {
		list:function(){
			return items;
		},
		add:function(item){
			items.push(item);
		}
	}
}]);

/*
 *
 *     xiaofeng.yao     2016.8.23     ui-router
 *
 */

appdemo.config(function($stateProvider, $urlRouterProvider) {

    // 默认路径
    $urlRouterProvider.when("/", 'hello');
    // 指定路径
    $stateProvider
        .state("hello", {
            url: '/hello',
            templateUrl: 'js/Assembly-controller/Assembly.html',
            controller: "Assembly"
        })
        // select 页面路由
        .state("select", {
            url: '/select',
            templateUrl: 'js/select/select.html',
            controller: "AssemblySelect"
        })
        // switch 页面路由
        .state("switch", {
            url: '/switch',
            templateUrl: 'js/switch/switch.html',
            controller: "AssemblySwitch"
        })
        // tab 页面路由
        .state("tab", {
            url: '/tab',
            templateUrl: 'js/tab/tab.html',
            controller: "AssemblyTab"
        })
        .state("tab.data1", {
            url: '/data1',
            templateUrl: 'js/tab/datahtml/data1.html',
        })
        .state("tab.data2", {
            url: '/data2',
            templateUrl: 'js/tab/datahtml/data2.html',
        })
        .state("tab.data3", {
            url: '/data3',
            templateUrl: 'js/tab/datahtml/data3.html',
        })
        .state("tab.data4", {
            url: '/data4',
            templateUrl: 'js/tab/datahtml/data4.html',
        })
        // dropdowns 页面路由
        .state("dropdowns", {
            url: '/dropdowns',
            templateUrl: 'js/dropdowns/dropdowns.html',
            controller: "Assemblydropdowns"
        })
        // toggle 页面路由
        .state("togglecontrolle", {
            url: '/togglecontrolle',
            templateUrl: 'js/toggleshow/toggleshow.html',
            controller: 'togglecontrolle'
        })
        .state("addtab", {
            url: '/addtab',
            templateUrl: 'js/addtab/addtab.html',
            controller: 'addtabcontroller'
        })
        .state("adddropdown", {
            url: '/adddropdown',
            templateUrl: 'js/adddropdown/adddropdown.html',
            controller: 'adddropdowncontroller'
        })
        // ui-bootstrap 页面路由
        .state("uibootstrap-button", {
            url: '/uibootstrap-button',
            templateUrl: 'js/ui-bootstrap/uibootstrap-button/uibootstrap-button.html',
            controller: ''
        })
        .state("uibootstrap-accordion", {
            url: '/uibootstrap-accordion',
            templateUrl: 'js/ui-bootstrap/uibootstrap-accordion/uibootstrap-accordion.html',
            controller: ''
        })
        .state("uibootstrap-alert", {
            url: '/uibootstrap-alert',
            templateUrl: 'js/ui-bootstrap/alert/demo.html',
            controller: ''
        })
        .state("uibootstrap-carousel", {
            url: '/uibootstrap-carousel',
            templateUrl: 'js/ui-bootstrap/carousel/demo.html',
            controller: ''
        })
        .state("uibootstrap-collapse", {
            url: '/uibootstrap-collapse',
            templateUrl: 'js/ui-bootstrap/collapse/demo.html',
            controller: ''
        })
        .state("uibootstrap-dateparser", {
            url: '/uibootstrap-dateparser',
            templateUrl: 'js/ui-bootstrap/dateparser/demo.html',
            controller: ''
        })
        .state("uibootstrap-datepicker", {
            url: '/uibootstrap-datepicker',
            templateUrl: 'js/ui-bootstrap/datepicker/demo.html',
            controller: ''
        })
        .state("uibootstrap-datepickerPopup", {
            url: '/uibootstrap-datepickerPopup',
            templateUrl: 'js/ui-bootstrap/datepickerPopup/demo.html',
            controller: ''
        })
        .state("uibootstrap-dropdown", {
            url: '/uibootstrap-dropdown',
            templateUrl: 'js/ui-bootstrap/dropdown/demo.html',
            controller: ''
        })
        .state("uibootstrap-modal", {
            url: '/uibootstrap-modal',
            templateUrl: 'js/ui-bootstrap/modal/demo.html',
            controller: ''
        })
        .state("uibootstrap-pager", {
            url: '/uibootstrap-pager',
            templateUrl: 'js/ui-bootstrap/pager/demo.html',
            controller: ''
        })
        .state("uibootstrap-pagination", {
            url: '/uibootstrap-pagination',
            templateUrl: 'js/ui-bootstrap/pagination/demo.html',
            controller: ''
        })
        .state("uibootstrap-popover", {
            url: '/uibootstrap-popover',
            templateUrl: 'js/ui-bootstrap/popover/demo.html',
            controller: ''
        })
        .state("uibootstrap-position", {
            url: '/uibootstrap-position',
            templateUrl: 'js/ui-bootstrap/position/demo.html',
            controller: ''
        })
        .state("uibootstrap-progressbar", {
            url: '/uibootstrap-progressbar',
            templateUrl: 'js/ui-bootstrap/progressbar/demo.html',
            controller: ''
        })
        .state("uibootstrap-rating", {
            url: '/uibootstrap-rating',
            templateUrl: 'js/ui-bootstrap/rating/demo.html',
            controller: ''
        })
        .state("uibootstrap-tabs", {
            url: '/uibootstrap-tabs',
            templateUrl: 'js/ui-bootstrap/tabs/demo.html',
            controller: ''
        })
        .state("uibootstrap-timepicker", {
            url: '/uibootstrap-timepicker',
            templateUrl: 'js/ui-bootstrap/timepicker/demo.html',
            controller: ''
        })
        .state("uibootstrap-tooltip", {
            url: '/uibootstrap-tooltip',
            templateUrl: 'js/ui-bootstrap/tooltip/demo.html',
            controller: ''
        })
        .state("uibootstrap-typeahead", {
            url: '/uibootstrap-typeahead',
            templateUrl: 'js/ui-bootstrap/typeahead/demo.html',
            controller: ''
        })
        // form 页面路由
        .state("form", {
            url: '/form',
            templateUrl: 'js/form/form.html',
            controller: ''
        })
        .state("registerform", {
            url: '/registerform',
            templateUrl: 'js/form/registerform.html',
            controller: 'registerform'
        })
        // ui-calendar 页面路由
        .state("UI-Calendar", {
            url: '/ui-calendar',
            templateUrl: 'js/UI-Calendar/ui-calendar.html',
            controller: ''
        })
        // object-table 页面路由
        .state("object-table", {
            url: '/object-table',
            templateUrl: 'js/object-table/object-table.html',
            controller: ''
        })
        // sweetalert 页面路由
        .state("sweetalert", {
            url: '/sweetalert',
            templateUrl: 'js/sweetalert/sweetalert.html',
            controller: ''
        })
        // ngdialog 页面路由
        .state("ngdialog", {
            url: '/ngdialog',
            templateUrl: 'js/ngdialog/ngdialog.html',
            controller: ''
        })
        // chart 页面路由
        .state("chart", {
            url: '/chart',
            templateUrl: 'js/chart/chart.html',
            controller: ''
        })
        .state("chart.LineCtrl", {
            url: '/LineCtrl',
            templateUrl: 'js/chart/tabhtml/LineCtrl.html',
            controller: 'LineCtrl'
        })
        .state("chart.BarCtrl", {
            url: '/BarCtrl',
            templateUrl: 'js/chart/tabhtml/BarCtrl.html',
            controller: 'BarCtrl'
        })
        .state("chart.RadarCtrl", {
            url: '/RadarCtrl',
            templateUrl: 'js/chart/tabhtml/RadarCtrl.html',
            controller: 'RadarCtrl'
        })
        .state("chart.DoughnutCtrl", {
            url: '/DoughnutCtrl',
            templateUrl: 'js/chart/tabhtml/DoughnutCtrl.html',
            controller: 'DoughnutCtrl'
        })
        .state("chart.PieCtrl", {
            url: '/PieCtrl',
            templateUrl: 'js/chart/tabhtml/PieCtrl.html',
            controller: 'PieCtrl'
        })
        .state("chart.PolarAreaCtrl", {
            url: '/PolarAreaCtrl',
            templateUrl: 'js/chart/tabhtml/PolarAreaCtrl.html',
            controller: 'PolarAreaCtrl'
        })
        .state("chart.MixedChartCtrl", {
            url: '/MixedChartCtrl',
            templateUrl: 'js/chart/tabhtml/MixedChartCtrl.html',
            controller: 'MixedChartCtrl'
        })
        // mobile
        .state("mobile", {
            url: '/mobile',
            templateUrl: 'js/mobile/mobile.html',
            controller: ''
        })
        // 打豆豆 "博饼"
        .state("bobin", {
            url: '/bobin',
            templateUrl: 'js/bobin/bobin.html',
            controller: ''
        })
});
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
/*!
 * angular-chart.js - An angular.js wrapper for Chart.js
 * http://jtblin.github.io/angular-chart.js/
 * Version: 1.0.0
 *
 * Copyright 2016 Jerome Touffe-Blin
 * Released under the BSD-2-Clause license
 * https://github.com/jtblin/angular-chart.js/blob/master/LICENSE
 */
(function (factory) {
  'use strict';
  if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(
      typeof angular !== 'undefined' ? angular : require('angular'),
      typeof Chart !== 'undefined' ? Chart : require('chart.js'));
  }  else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular', 'chart'], factory);
  } else {
    // Browser globals
    if (typeof angular === 'undefined' || typeof Chart === 'undefined')
      throw new Error('Chart.js library needs to included, see http://jtblin.github.io/angular-chart.js/');
    factory(angular, Chart);
  }
}(function (angular, Chart) {
  'use strict';

  Chart.defaults.global.multiTooltipTemplate = '<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>';
  Chart.defaults.global.tooltips.mode = 'label';
  Chart.defaults.global.elements.line.borderWidth = 2;
  Chart.defaults.global.elements.rectangle.borderWidth = 2;
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.colors = [
    '#97BBCD', // blue
    '#DCDCDC', // light grey
    '#F7464A', // red
    '#46BFBD', // green
    '#FDB45C', // yellow
    '#949FB1', // grey
    '#4D5360'  // dark grey
  ];

  var useExcanvas = typeof window.G_vmlCanvasManager === 'object' &&
    window.G_vmlCanvasManager !== null &&
    typeof window.G_vmlCanvasManager.initElement === 'function';

  if (useExcanvas) Chart.defaults.global.animation = false;

  return angular.module('chart.js', [])
    .provider('ChartJs', ChartJsProvider)
    .factory('ChartJsFactory', ['ChartJs', '$timeout', ChartJsFactory])
    .directive('chartBase', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory(); }])
    .directive('chartLine', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('line'); }])
    .directive('chartBar', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('bar'); }])
    .directive('chartHorizontalBar', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('horizontalBar'); }])
    .directive('chartRadar', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('radar'); }])
    .directive('chartDoughnut', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('doughnut'); }])
    .directive('chartPie', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('pie'); }])
    .directive('chartPolarArea', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('polarArea'); }])
    .directive('chartBubble', ['ChartJsFactory', function (ChartJsFactory) { return new ChartJsFactory('bubble'); }])
    .name;

  /**
   * Wrapper for chart.js
   * Allows configuring chart js using the provider
   *
   * angular.module('myModule', ['chart.js']).config(function(ChartJsProvider) {
   *   ChartJsProvider.setOptions({ responsive: false });
   *   ChartJsProvider.setOptions('Line', { responsive: true });
   * })))
   */
  function ChartJsProvider () {
    var options = { responsive: true };
    var ChartJs = {
      Chart: Chart,
      getOptions: function (type) {
        var typeOptions = type && options[type] || {};
        return angular.extend({}, options, typeOptions);
      }
    };

    /**
     * Allow to set global options during configuration
     */
    this.setOptions = function (type, customOptions) {
      // If no type was specified set option for the global object
      if (! customOptions) {
        customOptions = type;
        options = angular.extend(options, customOptions);
        return;
      }
      // Set options for the specific chart
      options[type] = angular.extend(options[type] || {}, customOptions);
    };

    this.$get = function () {
      return ChartJs;
    };
  }

  function ChartJsFactory (ChartJs, $timeout) {
    return function chart (type) {
      return {
        restrict: 'CA',
        scope: {
          chartGetColor: '=?',
          chartType: '=',
          chartData: '=?',
          chartLabels: '=?',
          chartOptions: '=?',
          chartSeries: '=?',
          chartColors: '=?',
          chartClick: '=?',
          chartHover: '=?',
          chartDatasetOverride: '=?'
        },
        link: function (scope, elem/*, attrs */) {
          if (useExcanvas) window.G_vmlCanvasManager.initElement(elem[0]);

          // Order of setting "watch" matter
          scope.$watch('chartData', watchData, true);
          scope.$watch('chartSeries', watchOther, true);
          scope.$watch('chartLabels', watchOther, true);
          scope.$watch('chartOptions', watchOther, true);
          scope.$watch('chartColors', watchOther, true);
          scope.$watch('chartDatasetOverride', watchOther, true);
          scope.$watch('chartType', watchType, false);

          scope.$on('$destroy', function () {
            destroyChart(scope);
          });

          scope.$on('$resize', function () {
            if (scope.chart) scope.chart.resize();
          });

          function watchData (newVal, oldVal) {
            if (! newVal || ! newVal.length || (Array.isArray(newVal[0]) && ! newVal[0].length)) {
              destroyChart(scope);
              return;
            }
            var chartType = type || scope.chartType;
            if (! chartType) return;

            if (scope.chart && canUpdateChart(newVal, oldVal))
              return updateChart(newVal, scope);

            createChart(chartType, scope, elem);
          }

          function watchOther (newVal, oldVal) {
            if (isEmpty(newVal)) return;
            if (angular.equals(newVal, oldVal)) return;
            var chartType = type || scope.chartType;
            if (! chartType) return;

            // chart.update() doesn't work for series and labels
            // so we have to re-create the chart entirely
            createChart(chartType, scope, elem);
          }

          function watchType (newVal, oldVal) {
            if (isEmpty(newVal)) return;
            if (angular.equals(newVal, oldVal)) return;
            createChart(newVal, scope, elem);
          }
        }
      };
    };

    function createChart (type, scope, elem) {
      var options = getChartOptions(type, scope);
      if (! hasData(scope) || ! canDisplay(type, scope, elem, options)) return;

      var cvs = elem[0];
      var ctx = cvs.getContext('2d');

      scope.chartGetColor = getChartColorFn(scope);
      var data = getChartData(type, scope);

      // Destroy old chart if it exists to avoid ghost charts issue
      // https://github.com/jtblin/angular-chart.js/issues/187
      destroyChart(scope);

      scope.chart = new ChartJs.Chart(ctx, {
        type: type,
        data: data,
        options: options
      });
      scope.$emit('chart-create', scope.chart);
      bindEvents(cvs, scope);
    }

    function canUpdateChart (newVal, oldVal) {
      if (newVal && oldVal && newVal.length && oldVal.length) {
        return Array.isArray(newVal[0]) ?
        newVal.length === oldVal.length && newVal.every(function (element, index) {
          return element.length === oldVal[index].length; }) :
          oldVal.reduce(sum, 0) > 0 ? newVal.length === oldVal.length : false;
      }
      return false;
    }

    function sum (carry, val) {
      return carry + val;
    }

    function getEventHandler (scope, action, triggerOnlyOnChange) {
      var lastState = null;
      return function (evt) {
        var atEvent = scope.chart.getElementsAtEvent || scope.chart.getPointsAtEvent;
        if (atEvent) {
          var activePoints = atEvent.call(scope.chart, evt);
          if (triggerOnlyOnChange === false || angular.equals(lastState, activePoints) === false) {
            lastState = activePoints;
            scope[action](activePoints, evt);
          }
        }
      };
    }

    function getColors (type, scope) {
      var colors = angular.copy(scope.chartColors ||
        ChartJs.getOptions(type).chartColors ||
        Chart.defaults.global.colors
      );
      var notEnoughColors = colors.length < scope.chartData.length;
      while (colors.length < scope.chartData.length) {
        colors.push(scope.chartGetColor());
      }
      // mutate colors in this case as we don't want
      // the colors to change on each refresh
      if (notEnoughColors) scope.chartColors = colors;
      return colors.map(convertColor);
    }

    function convertColor (color) {
      if (typeof color === 'object' && color !== null) return color;
      if (typeof color === 'string' && color[0] === '#') return getColor(hexToRgb(color.substr(1)));
      return getRandomColor();
    }

    function getRandomColor () {
      var color = [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
      return getColor(color);
    }

    function getColor (color) {
      return {
        backgroundColor: rgba(color, 0.2),
        pointBackgroundColor: rgba(color, 1),
        pointHoverBackgroundColor: rgba(color, 0.8),
        borderColor: rgba(color, 1),
        pointBorderColor: '#fff',
        pointHoverBorderColor: rgba(color, 1)
      };
    }

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function rgba (color, alpha) {
      // rgba not supported by IE8
      return useExcanvas ? 'rgb(' + color.join(',') + ')' : 'rgba(' + color.concat(alpha).join(',') + ')';
    }

    // Credit: http://stackoverflow.com/a/11508164/1190235
    function hexToRgb (hex) {
      var bigint = parseInt(hex, 16),
        r = (bigint >> 16) & 255,
        g = (bigint >> 8) & 255,
        b = bigint & 255;

      return [r, g, b];
    }

    function hasData (scope) {
      return scope.chartData && scope.chartData.length;
    }

    function getChartColorFn (scope) {
      return typeof scope.chartGetColor === 'function' ? scope.chartGetColor : getRandomColor;
    }

    function getChartData (type, scope) {
      var colors = getColors(type, scope);
      return Array.isArray(scope.chartData[0]) ?
        getDataSets(scope.chartLabels, scope.chartData, scope.chartSeries || [], colors, scope.chartDatasetOverride) :
        getData(scope.chartLabels, scope.chartData, colors, scope.chartDatasetOverride);
    }

    function getDataSets (labels, data, series, colors, datasetOverride) {
      return {
        labels: labels,
        datasets: data.map(function (item, i) {
          var dataset = angular.extend({}, colors[i], {
            label: series[i],
            data: item
          });
          if (datasetOverride && datasetOverride.length >= i) {
            angular.merge(dataset, datasetOverride[i]);
          }
          return dataset;
        })
      };
    }

    function getData (labels, data, colors, datasetOverride) {
      var dataset = {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors.map(function (color) {
            return color.pointBackgroundColor;
          }),
          hoverBackgroundColor: colors.map(function (color) {
            return color.backgroundColor;
          })
        }]
      };
      if (datasetOverride) {
        angular.merge(dataset.datasets[0], datasetOverride);
      }
      return dataset;
    }

    function getChartOptions (type, scope) {
      return angular.extend({}, ChartJs.getOptions(type), scope.chartOptions);
    }

    function bindEvents (cvs, scope) {
      cvs.onclick = scope.chartClick ? getEventHandler(scope, 'chartClick', false) : angular.noop;
      cvs.onmousemove = scope.chartHover ? getEventHandler(scope, 'chartHover', true) : angular.noop;
    }

    function updateChart (values, scope) {
      if (Array.isArray(scope.chartData[0])) {
        scope.chart.data.datasets.forEach(function (dataset, i) {
          dataset.data = values[i];
        });
      } else {
        scope.chart.data.datasets[0].data = values;
      }

      scope.chart.update();
      scope.$emit('chart-update', scope.chart);
    }

    function isEmpty (value) {
      return ! value ||
        (Array.isArray(value) && ! value.length) ||
        (typeof value === 'object' && ! Object.keys(value).length);
    }

    function canDisplay (type, scope, elem, options) {
      // TODO: check parent?
      if (options.responsive && elem[0].clientHeight === 0) {
        $timeout(function () {
          createChart(type, scope, elem);
        }, 50, false);
        return false;
      }
      return true;
    }

    function destroyChart(scope) {
      if(! scope.chart) return;
      scope.chart.destroy();
      scope.$emit('chart-destroy', scope.chart);
    }
  }
}));

/*
 *
 *     xiaofeng.yao    2016.8.25     chart
 *
 */

appdemo.controller("LineCtrl", function($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function(points, evt) {
        console.log(points, evt);
    };
});

appdemo.controller("BarCtrl", function($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
});

appdemo.controller("DoughnutCtrl", function($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
});

appdemo.controller("RadarCtrl", function($scope) {
    $scope.labels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
    $scope.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];
});

appdemo.controller("PieCtrl", function($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
});

appdemo.controller("PolarAreaCtrl", function($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data = [300, 500, 100, 40, 120];
});

appdemo.controller("MixedChartCtrl",
  function ($scope) {
    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.data = [
      [65, -59, 80, 81, -56, 55, -40],
      [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.datasetOverride = [
      {
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];
});
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
/*
 *
 *     xiaofeng.yao     2015.8.16     form
 *
 */

appdemo.controller('loginform', ['$scope', function($scope) {
    $scope.vm = {
        entity: {}
    };
    $scope.loginsubmit = function() {
        var user = {
            'email': $scope.vm.entity.email,
            'password': $scope.vm.entity.password
        };
        $scope.user = user;
    }
}])
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
/*
 *
 *     xiaofeng.yao     2016.9.1     mobile
 *
 */
/*
 *
 *     xiaofeng.yao     2015.8.15     app module nav list
 *
 */

appdemo.directive("indexNav", function() {
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: './js/nav/mainnav.html'
    }
});

appdemo.directive('listsubcomponent', function() {
    return {
        restrict: 'EA',
        repeat: true,
        transclude: true,
        templateUrl: './js/nav/navlist.html',
        link: function(scope, element, attrs) {
            scope.componentshow = false;
            scope.listsubcomponent = function listsubcomponent() {
                var this_li = element.find("li");
                this_li.bind("click", function(e) {
                    e.stopPropagation();
                });
                scope.componentshow = !scope.componentshow;
            }
        },
    };
});

// Nav link icon name

appdemo.controller("mainnav", ['$scope', '$http', function($scope, $http) {
    // nav list
    $http.get('data/navlist.json').success(function(data) {
        $scope.lists = data;
    }).then(function() {
        // 单击遍历，清除所有样式
        $scope.clearLiClass = function(listarr) {
            angular.forEach(listarr, function(listobj, index) {
                angular.forEach(listobj.subcomponent, function(obj, index) {
                    obj.isActive = false;
                });
            });
        };
    })
}]);
/*
 *
 *     xiaofeng.yao     2016.9.1     ng-dialog
 *
 */
appdemo.run(['$templateCache', function($templateCache) {
    $templateCache.put('templateId', 'template content');
}]);

appdemo.controller('ngdialogctrl', ['$scope', 'ngDialog', function($scope, ngDialog) {

    $scope.ifdialogbtn = function() {
        ngDialog.open({
            template: 'templateId',
            preCloseCallback: function(value) {
                var nestedConfirmDialog = ngDialog.openConfirm({
                    template: '\
                        <p>Are you sure you want to close the parent dialog?</p>\
                        <div class="ngdialog-buttons">\
                            <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                            <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>\
                        </div>',
                    plain: true
                });

                // NOTE: return the promise from openConfirm
                return nestedConfirmDialog;
            }
        });
    }

    $scope.dialogbtntwo = function() {
        ngDialog.open({
            template: 'templateId',
            preCloseCallback: function(value) {
                if (confirm('Are you sure you want to close without saving your changes?')) {
                    return true;
                }
                return false;
            }
        });
    }

    $scope.dialogbtnthree = function() {
        ngDialog.open({
            template: '<p>把提示语句直接写template里也可以</p>',
            plain: true
        });
    }

    $scope.value = true;
    $scope.dialogbtnfour = function() {
        ngDialog.open({
            template: 'externalTemplate.html',
            className: 'ngdialog-theme-plain',
            scope: $scope
        });
    }

    $scope.dialogbtnfive = function() {
        ngDialog.open({
            template: 'modifyMobileDialogTemplate'
        })
    }
}]);
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
/*
 *
 *     xiaofeng.yao     2015.8.15     switch
 *
 */
appdemo.controller("AssemblySwitch", function($scope) {

});
appdemo.controller("personalityswitchone", function($scope) {
    $scope.psswitch = [{
        title: 'ON',
        switchclass: 'switch-left'
    }, {
        title: 'OFF',
        switchclass: 'switch-right'
    }];
    $scope.psswitch[0].isActive = false;
    $scope.psswitchone = 'OFF';
    $scope.psswitchclick = function(lr, pas) {
        $scope.psswitchone = pas.title;
        angular.forEach(lr, function(obj) {
            obj.isActive = false;
        });;
    }
});
/*
 *
 *     xiaofeng.yao     2015.8.15     tab
 *
 */
appdemo.controller("AssemblyTab", ['$scope', '$http', function($scope, $http) {
    // 请求数据
    $scope.tabtitle = [];
    $http.get('data/tab.json').success(function(data) {
        $scope.tabtitle = data;
    }).then(function() {
        // 默认第一条数据
        $scope.showcontent = $scope.tabtitle[0].content;
        $scope.tabclearshwo = function(titlearr, contentobj) {
            angular.forEach(titlearr, function(title) {
                title.isActive = false;
            });
            $scope.showcontent = contentobj.content;
        }
    });
}]);

// routertab
appdemo.controller("RouterTab", ['$scope', '$http', function($scope, $http) {
    // 请求数据    
    $scope.routertabtitle = [{
        title: 'RT1',
        href: '.data1'
    }, {
        title: 'RT2',
        href: '.data2'
    }, {
        title: 'RT3',
        href: '.data3'
    }, {
        title: 'RT4',
        href: '.data4'
    }];
    $scope.Routertabclearshwo = function(titlearr, contentobj) {
        angular.forEach(titlearr, function(title) {
            title.isActive = false;
        });
    }
}]);
/*
 *
 *     xiaofeng.yao     2015.8.15     toggleshow module
 *
 */
appdemo.directive('expander', function() {
    return {
        restrict: 'EA',
        repeat: true,
        transclude: true,
        scope: {
            title: '=expanderTitle'
        },
        template: '<div>' + '<div class="title" ng-click="toggle()">{{title}}</div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
        link: function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        },
    };
});
appdemo.controller('togglecontrolle', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {
    $scope.title = 'click title';
    $scope.text = 'this is content';
    $scope.timertitle = '定时器案例';
    $scope.countNum = 10;
    $scope.countDown = function() {
        var timer = $interval(function() {
            $scope.countNum--;
            if ($scope.countNum == 0) {
                $interval.cancel(timer);
            }
        }, 1000);
        var timeout = $timeout(function() {
            $scope.timertitle = '已经三秒了'
        }, 3000)
    };
}]);
/*
 *
 *     calendarDemoApp - 0.9.0     2016.8.24     calendar
 *
 */
appdemo.controller('calendarDemoApp', function($scope, $compile, uiCalendarConfig) {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $scope.changeTo = 'Hungarian';
  /* event source that pulls from google.com */
  $scope.eventSource = {
    url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
    className: 'gcal-event', // an option!
    currentTimezone: 'America/Chicago' // an option!
  };
  /* event source that contains custom events on the scope */
  $scope.events = [{
    title: 'All Day Event',
    start: new Date(y, m, 1)
  }, {
    title: 'Long Event',
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2)
  }, {
    id: 999,
    title: 'Repeating Event',
    start: new Date(y, m, d - 3, 16, 0),
    allDay: false
  }, {
    id: 999,
    title: 'Repeating Event',
    start: new Date(y, m, d + 4, 16, 0),
    allDay: false
  }, {
    title: 'Birthday Party',
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false
  }, {
    title: 'Click for Google',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: 'http://google.com/'
  }];
  /* event source that calls a function on every view switch */
  $scope.eventsF = function(start, end, timezone, callback) {
    var s = new Date(start).getTime() / 1000;
    var e = new Date(end).getTime() / 1000;
    var m = new Date(start).getMonth();
    var events = [{
      title: 'Feed Me ' + m,
      start: s + (50000),
      end: s + (100000),
      allDay: false,
      className: ['customFeed']
    }];
    callback(events);
  };

  $scope.calEventsExt = {
    color: '#f00',
    textColor: 'yellow',
    events: [{
      type: 'party',
      title: 'Lunch',
      start: new Date(y, m, d, 12, 0),
      end: new Date(y, m, d, 14, 0),
      allDay: false
    }, {
      type: 'party',
      title: 'Lunch 2',
      start: new Date(y, m, d, 12, 0),
      end: new Date(y, m, d, 14, 0),
      allDay: false
    }, {
      type: 'party',
      title: 'Click for Google',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://google.com/'
    }]
  };
  /* alert on eventClick */
  $scope.alertOnEventClick = function(date, jsEvent, view) {
    $scope.alertMessage = (date.title + ' was clicked ');
  };
  /* alert on Drop */
  $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
  };
  /* alert on Resize */
  $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };
  /* add and removes an event source of choice */
  $scope.addRemoveEventSource = function(sources, source) {
    var canAdd = 0;
    angular.forEach(sources, function(value, key) {
      if (sources[key] === source) {
        sources.splice(key, 1);
        canAdd = 1;
      }
    });
    if (canAdd === 0) {
      sources.push(source);
    }
  };
  /* add custom event*/
  $scope.addEvent = {};
  $scope.addEvent = function() {
    $scope.events.push({
      title: $scope.addEvent.title,
      start: new Date(y, m, $scope.addEvent.start.day, $scope.addEvent.start.hour, $scope.addEvent.start.minute),
      end: new Date(y, m, $scope.addEvent.end.day, $scope.addEvent.end.hour, $scope.addEvent.end.minute),
      className: ['openSesame']
    });
  };
  /* remove event */
  $scope.remove = function(index) {
    $scope.events.splice(index, 1);
  };
  /* Change View */
  $scope.changeView = function(view, calendar) {
    uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
  };
  /* Change View */
  $scope.renderCalender = function(calendar) {
    if (uiCalendarConfig.calendars[calendar]) {
      uiCalendarConfig.calendars[calendar].fullCalendar('render');
    }
  };
  /* Render Tooltip */
  $scope.eventRender = function(event, element, view) {
    element.attr({
      'tooltip': event.title,
      'tooltip-append-to-body': true
    });
    $compile(element)($scope);
  };
  /* config object */
  $scope.uiConfig = {
    calendar: {
      height: 450,
      editable: true,
      header: {
        left: 'title',
        center: '',
        right: 'today prev,next'
      },
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
    }
  };

  $scope.changeLang = function() {
    if ($scope.changeTo === 'Hungarian') {
      $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
      $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
      $scope.changeTo = 'English';
    } else {
      $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      $scope.changeTo = 'Hungarian';
    }
  };
  /* event sources array*/
  $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
  $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
});

/* EOF */
appdemo.controller('AlertDemoCtrl', function($scope) {
  $scope.alerts = [{
    type: 'danger',
    msg: 'Oh snap! Change a few things up and try submitting again.'
  }, {
    type: 'success',
    msg: 'Well done! You successfully read this important alert message.'
  }];

  $scope.addAlert = function() {
    $scope.alerts.push({
      msg: 'Another alert!'
    });
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});
appdemo.controller('CarouselDemoCtrl', function($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});
appdemo.controller('CollapseDemoCtrl', function($scope) {
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});
appdemo.controller('DateParserDemoCtrl', function($scope, uibDateParser) {
    $scope.format = 'yyyy/MM/dd';
    $scope.date = new Date();
});
appdemo.controller('DatepickerDemoCtrl', function($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [{
    date: tomorrow,
    status: 'full'
  }, {
    date: afterTomorrow,
    status: 'partially'
  }];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
appdemo.controller('DatepickerPopupDemoCtrl', function($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [{
    date: tomorrow,
    status: 'full'
  }, {
    date: afterTomorrow,
    status: 'partially'
  }];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
appdemo.controller('dropdownctrl', function($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

});
appdemo.controller('ModalDemoCtrl', function($uibModal, $log) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function(size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      resolve: {
        items: function() {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $ctrl.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openComponentModal = function() {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function() {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $ctrl.selected = selectedItem;
    }, function() {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function() {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

appdemo.controller('ModalInstanceCtrl', function($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function() {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

appdemo.component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function() {
    var $ctrl = this;

    $ctrl.$onInit = function() {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function() {
      $ctrl.close({
        $value: $ctrl.selected.item
      });
    };

    $ctrl.cancel = function() {
      $ctrl.dismiss({
        $value: 'cancel'
      });
    };
  }
});
appdemo.controller('PagerDemoCtrl', function($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
});
appdemo.controller('PaginationDemoCtrl', function($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function(pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});
appdemo.controller('PopoverDemoCtrl', function($scope, $sce) {
  $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };

  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };

  $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');
});
appdemo.controller('PositionDemoCtrl', function($scope, $window, $uibPosition) {

  $scope.elemVals = {};
  $scope.parentScrollable = true;
  $scope.parentRelative = true;

  $scope.getValues = function() {
    var divEl = $window.document.querySelector('#posdemodiv');
    var btnEl = $window.document.querySelector('#posdemobtn');

    var offsetParent = $uibPosition.offsetParent(divEl);
    $scope.elemVals.offsetParent = 'type: ' + offsetParent.tagName + ', id: ' + offsetParent.id;

    var scrollParent = $uibPosition.scrollParent(divEl);
    $scope.elemVals.scrollParent = 'type: ' + scrollParent.tagName + ', id: ' + scrollParent.id;

    $scope.scrollbarWidth = $uibPosition.scrollbarWidth();

    $scope.elemVals.position = $uibPosition.position(divEl);

    $scope.elemVals.offset = $uibPosition.offset(divEl);

    $scope.elemVals.viewportOffset = $uibPosition.viewportOffset(divEl);

    $scope.elemVals.positionElements = $uibPosition.positionElements(btnEl, divEl, 'auto bottom-left');
  };
});
appdemo.controller('ProgressDemoCtrl', function($scope) {
  $scope.max = 200;

  $scope.random = function() {
    var value = Math.floor(Math.random() * 100 + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    $scope.showWarning = type === 'danger' || type === 'warning';

    $scope.dynamic = value;
    $scope.type = type;
  };

  $scope.random();

  $scope.randomStacked = function() {
    $scope.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
      var index = Math.floor(Math.random() * 4);
      $scope.stacked.push({
        value: Math.floor(Math.random() * 30 + 1),
        type: types[index]
      });
    }
  };

  $scope.randomStacked();
});
appdemo.controller('RatingDemoCtrl', function($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [{
    stateOn: 'glyphicon-ok-sign',
    stateOff: 'glyphicon-ok-circle'
  }, {
    stateOn: 'glyphicon-star',
    stateOff: 'glyphicon-star-empty'
  }, {
    stateOn: 'glyphicon-heart',
    stateOff: 'glyphicon-ban-circle'
  }, {
    stateOn: 'glyphicon-heart'
  }, {
    stateOff: 'glyphicon-off'
  }];
});
appdemo.controller('TabsDemoCtrl', function($scope, $window) {
  $scope.tabs = [{
    title: 'Dynamic Title 1',
    content: 'Dynamic content 1'
  }, {
    title: 'Dynamic Title 2',
    content: 'Dynamic content 2',
    disabled: true
  }];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
});
appdemo.controller('TimepickerDemoCtrl', function($scope, $log) {
  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = !$scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    $scope.mytime = d;
  };

  $scope.changed = function() {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
});
appdemo.controller('TooltipDemoCtrl', function($scope, $sce) {
  $scope.dynamicTooltip = 'Hello, World!';
  $scope.dynamicTooltipText = 'dynamic';
  $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };
});
appdemo.controller('TypeaheadCtrl', function($scope, $http) {

  var _selected;

  $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response) {
      return response.data.results.map(function(item) {
        return item.formatted_address;
      });
    });
  };

  $scope.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      _selected = value;
    } else {
      return _selected;
    }
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };

  $scope.statesWithFlags = [{
    'name': 'Alabama',
    'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
  }, {
    'name': 'Alaska',
    'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
  }, {
    'name': 'Arizona',
    'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
  }, {
    'name': 'Arkansas',
    'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
  }, {
    'name': 'California',
    'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
  }, {
    'name': 'Colorado',
    'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
  }, {
    'name': 'Connecticut',
    'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
  }, {
    'name': 'Delaware',
    'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
  }, {
    'name': 'Florida',
    'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
  }, {
    'name': 'Georgia',
    'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
  }, {
    'name': 'Hawaii',
    'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
  }, {
    'name': 'Idaho',
    'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'
  }, {
    'name': 'Illinois',
    'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
  }, {
    'name': 'Indiana',
    'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
  }, {
    'name': 'Iowa',
    'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'
  }, {
    'name': 'Kansas',
    'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
  }, {
    'name': 'Kentucky',
    'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
  }, {
    'name': 'Louisiana',
    'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
  }, {
    'name': 'Maine',
    'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'
  }, {
    'name': 'Maryland',
    'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
  }, {
    'name': 'Massachusetts',
    'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
  }, {
    'name': 'Michigan',
    'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
  }, {
    'name': 'Minnesota',
    'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
  }, {
    'name': 'Mississippi',
    'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
  }, {
    'name': 'Missouri',
    'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
  }, {
    'name': 'Montana',
    'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
  }, {
    'name': 'Nebraska',
    'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
  }, {
    'name': 'Nevada',
    'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
  }, {
    'name': 'New Hampshire',
    'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
  }, {
    'name': 'New Jersey',
    'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
  }, {
    'name': 'New Mexico',
    'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
  }, {
    'name': 'New York',
    'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
  }, {
    'name': 'North Carolina',
    'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
  }, {
    'name': 'North Dakota',
    'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
  }, {
    'name': 'Ohio',
    'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'
  }, {
    'name': 'Oklahoma',
    'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
  }, {
    'name': 'Oregon',
    'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
  }, {
    'name': 'Pennsylvania',
    'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
  }, {
    'name': 'Rhode Island',
    'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
  }, {
    'name': 'South Carolina',
    'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
  }, {
    'name': 'South Dakota',
    'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
  }, {
    'name': 'Tennessee',
    'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
  }, {
    'name': 'Texas',
    'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'
  }, {
    'name': 'Utah',
    'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'
  }, {
    'name': 'Vermont',
    'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
  }, {
    'name': 'Virginia',
    'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
  }, {
    'name': 'Washington',
    'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
  }, {
    'name': 'West Virginia',
    'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
  }, {
    'name': 'Wisconsin',
    'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
  }, {
    'name': 'Wyoming',
    'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
  }];
});
appdemo.controller('AccordionDemoCtrl', function($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [{
    title: 'Dynamic Group Header - 1',
    content: 'Dynamic Group Body - 1'
  }, {
    title: 'Dynamic Group Header - 2',
    content: 'Dynamic Group Body - 2'
  }];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
appdemo.controller('ButtonsCtrl', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };

    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function() {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function(value, key) {
            if (value) {
                $scope.checkResults.push(key);
            }
        });
    });
});