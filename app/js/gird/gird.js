/*
*
*#     xiaofeng.yao     2016.10.12     gird 
*
*/
appdemo.controller('assemblyGird', ['$scope','$http', function($scope,$http){
	// 对象初始化
	$scope.gird = {
		girdlists:[]  // 存放所有页数据
	};

	$scope.currentPage = 1;//初始当前页
	$scope.maxSize = 4;//最多显示3页其他的用···代替
    $scope.girdselect=5; // 单页显示数量
	$http.get('data/gird.json').success(function(data) {
        if(data&&data.status !==1 ){
        	
            $scope.addr = data;

            var num = $scope.addr.length;

            $scope.totalItems = num;//共有多少条数据
            for(var i=0;i<num;i+=$scope.girdselect){
                $scope.gird.girdlists.push($scope.addr.slice(i,i+$scope.girdselect))
            }
        //此方法可以将一个数组分成多个数组并且放在了一个大数组里面，按每个数组10条数据
        //【因为组件默认为10条数据一页】存放，假如41条数据的话我们将分成5页
        
        }else{
        	alert('数据请求出错');
        }   
    }).then(function(){

    });
}])

appdemo.filter('paging', function() {
  return function (items, index, pageSize) {
    if (!items)
      return [];

    var offset = (index - 1) * pageSize;
    return items.slice(offset, offset + pageSize);
  }
})

appdemo.filter('size', function() {
  return function (items) {
    if (!items)
      return 0;

    return items.length || 0
  }
});
