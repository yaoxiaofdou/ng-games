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