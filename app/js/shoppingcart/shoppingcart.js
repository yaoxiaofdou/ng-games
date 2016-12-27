/*
 *
 *#    xiaofeng.yao     2016.9.30     shopping cart
 *
 */
appdemo.directive('shoppingCart', function() {
    // Runs during compile
    return {
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, $element, $attrs, $transclude) {
            // 商品数据
            $scope.commodityArr = [{
                key: 'OBJ001',
                isActive:false,
                imgsrc: '../app/images/iphone7.jpg',
                name: 'iphone 7 plus',
                title: '老板娘跟人跑了。。',
                price: 998
            }, {
                key: 'OBJ002',
                isActive:false,
                imgsrc: '../app/images/iphone7.jpg',
                name: 'iphone 6S',
                title: '员工把公款都卷跑了。。',
                price: 848
            }, {
                key: 'OBJ003',
                isActive:false,
                imgsrc: '../app/images/iphone7.jpg',
                name: 'iphone 7',
                title: '房东要来收租了。。',
                price: 968
            }, {
                key: 'OBJ004',
                isActive:false,
                imgsrc: '../app/images/iphone7.jpg',
                name: 'iphone 5',
                title: '老板儿子跟人跑了。。',
                price: 288
            }];
            // 购物车数组
            $scope.shoppingcartArr = [];

            // 点击的商品写入数组
            $scope.setShoppingCartArr = function(obj) {
                switch ($scope.shoppingcartArr.length) {
                    case 0:
                        // 重置默认checkbox为不选中状态
                        obj.isActive = false;
                        $scope.shoppingcartArr.push(obj);
                        break;
                    default:
                        if ($scope.shoppingcartArr.indexOf(obj) == -1) {
                            // 重置默认checkbox为不选中状态
                            obj.isActive = false;
                            $scope.shoppingcartArr.push(obj);
                        }
                        break;
                }
            };
            // 点击全选
            $scope.carcheckboxFun = function(cararr){
                angular.forEach(cararr,function(obj,index){
                    obj.isActive = $scope.allchecked;
                })
            };
            // 删除
            Array.prototype.remove = function (val) {  
                var index = this.indexOf(val);  
                if (index > -1) {  
                    this.splice(index, 1);  
                }  
            };
            $scope.newArr = [];
            // 点击删除选中
            $scope.removeChecked = function(arr){
                // 判断全选按钮是不是选中 
                // 是 直接删除数组
                // 否 删除指定选项
                if($scope.allchecked == true){
                    $scope.shoppingcartArr = [];
                    // 重置checkbox为未选中状态
                    $scope.allchecked = false;
                }else{
                    // 理论上可执行的多选删除，不能直接执行删除操作,原因未知
                    // for(var i = 0;i<$scope.shoppingcartArr.length;i++){
                    //     (function(obj){
                    //         if($scope.shoppingcartArr[obj].isActive == true){
                    //             $scope.shoppingcartArr.remove($scope.shoppingcartArr[obj]);
                    //         }
                    //     })(i)
                    // };

                    // 实际解决的多选删除
                    var arr = [];

                    // 把购物车选中的push到新数组存起来
                    angular.forEach($scope.shoppingcartArr,function(obj,index){
                        if(obj.isActive == true){
                            arr.push(obj);  
                        }
                    });

                    // 遍历后对比删除选中的
                    for(var i = 0;i<$scope.shoppingcartArr.length;i++){
                        for(var j=0;j<arr.length;j++){
                            if($scope.shoppingcartArr[i].key == arr[j].key){
                                $scope.shoppingcartArr.remove($scope.shoppingcartArr[i]);
                            }
                        }                        
                    };            
                }
            };
            //  商品总价计算
            //  默认的价格
            $scope.monerysum = 0;
            //  每次点击后计算当前价格 分别有（选中商品时，增加数量时，删除选中商品时都要进行计算总价。）
            $scope.sumpriceFun = function(){
                var sum = 0; // 存储总价
                //  抽取页面中的所有价格
                var priceobj = angular.element('#mytable').find('.price');
                //  遍历累加
                for(var i=0;i<priceobj.length;i++){
                    var m = Number(priceobj[i].innerText) ;
                    sum += m;                
                }
                $scope.monerysum = sum;
            }

        },
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '../app/js/shoppingcart/cart.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function(scope, iElm, iAttrs, controller) {}
    };
});