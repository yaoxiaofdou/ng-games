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