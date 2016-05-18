var walmartAssn= angular.module('myApp', ['ngResource']);
//Create a controller
walmartAssn.controller('walmartAssnController', function($scope,$resource) {
    //define the API urls
    var urlSearchProductApi= 'http://api.walmartlabs.com/v1/search';
    var urlRecProductApi='http://api.walmartlabs.com/v1/nbp';
    //define API key
    var keyApi='qgkr3hn2umewtbmnrnz4xmfn';

    $scope.searchProductMethod= function(){
        //pass the value from the user input text box
        $scope.searchItem = $scope.item ;
                   $scope.productId;
              
              searchRequest = $resource(urlSearchProductApi, { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
              //pass the input text as a parameter through a GET request
              $scope.searchedProducts = searchRequest.get({ apiKey: keyApi, query: $scope.searchItem });
              console.log($scope.searchedProducts);
              $scope.searchedProducts.$promise.then(function(eventDetail){

                //fetch the ID of the first item
                $scope.productId = eventDetail.items[0].itemId;
                console.log($scope.productId);
                console.log(eventDetail);

              });

                  
              recommendRequest = $resource(urlRecProductApi, { callback:"JSON_CALLBACK" }, { get: { method: "JSONP" , isArray:true}});
              console.log(recommendRequest);

              $scope.recommendedProducts = recommendRequest.get({ apiKey:keyApi, itemId: productId });


                //console.log(recommendRequest);
                $scope.recommendedProducts.$promise.then(function(eventDetail2){
                  console.log("this is data");
                  console.log(eventDetail2);
                  console.log($scope.recommendedProducts);
                });
      }

});
