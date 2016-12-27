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
