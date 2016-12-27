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