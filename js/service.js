m1.factory('myHttpRequest',['$http', function($http){
	return {
		registerLogin:function(mydata,successcallback,errorcallback){
			$http({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				method:"get",
				params:mydata,
			}).success(function(data){
				successcallback(data);
			})
		},

		goodsHttp:function(myurl,mydata,successcallback,errorcallback){
			$http({
				url:myurl,
				method:"get",
				params:mydata,
			}).success(function(data){
				successcallback(data);
			})
		},

		goodsListHttp:function(myurl,mydata,successcallback,errorcallback){
			$http({
				url:myurl+"?callback=JSON_CALLBACK",
				method:"jsonp",
				params:mydata,
			}).success(function(data){
				successcallback(data);
			})
		}
	}
}])