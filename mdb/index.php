<!DOCTYPE html>
<html lang="en" data-ng-app='myApp' >
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta charset="utf-8" />
		<title id='title'>my App</title>
		<link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
		<script src="lib/angular.min.js"></script>
		<script src="node_modules/angular-resource/angular-resource.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
		
		<!-- // <script src="titleScript.js"></script> -->
	</head>
	<body>
		<br>
<main class="container">
			<div ng-view></div>
</main>
	<script>
		var myApp = angular.module('myApp',["ngRoute"]);
	</script>
<script src="ngroute.js"></script>
<script src="ctrl/MainController.js"></script>

	</body>
</html>