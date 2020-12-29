myApp.controller("MainController", function($scope,$http){
$scope.movies=[];
$scope.date = new Date();
$scope.newContent;

$scope.plot;
const url='http://www.omdbapi.com/?apikey=71e65200&t=';

let first ={
  title:''

}

$scope.movies.push(first);

$scope.addOne=()=>{
	let obj={
		title: $scope.data.Title,
		dbId: $scope.data.imdbID
	}
	$scope.movies.push(obj);
	console.log($scope.movies);
}
$scope.takeTitle=()=>{
	$scope.newContent=$scope.data.Title;
	$scope.imdbID=$scope.data.imdbID;
}
$scope.search=()=>{
	// console.log($scope.newContent);
	$http.get(url+$scope.newContent)
	.then(function(response) {
	      // console.log(response);

	      $scope.data=response.data;
	      console.log($scope.data);

	}, function myError(response) {
	    $scope.myWelcome = response;
	 	console.log(response);
	    
	});
}


if($scope.data){
console.log($scope.data);
}







});


