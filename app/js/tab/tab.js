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