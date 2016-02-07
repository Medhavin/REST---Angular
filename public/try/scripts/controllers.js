'use strict';

angular.module('tryApp')

	.controller('tryController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {

			$scope.id = 101;

            // var feedback = feedbackFactory.get({id : $scope.id},
            // 	function() {
            // 		$scope.feedback = feedback;
            // 		console.log (feedback);
            // 		console.log ("Get method is successful");
            // 	}
            // )


            // var feedbacks = feedbackFactory.query(
            // 	function() {
            // 		$scope.feedbacks = feedbacks;
            // 		console.log (feedbacks);
            // 		console.log ("Query method is successful");
            // 	}
            // )


            // $scope.newfeedback = new feedbackFactory();
            // // $scope.newfeedback = {firstName:"Random", lastName:"Kumar", tel: {areaCode:"+91", number:"9876543210"}, email:"agprashant@gmail.com", agree:false, mychannel:"email", comments:"Uggh!"};
            // $scope.newfeedback = {first_name:"Random", last_name:"Kumar"};

            // var feedback = feedbackFactory.save($scope.newfeedback,
            // 	function(){
            // 		console.log ($scope.newfeedback);
            // 		console.log ("Save method is successful");
            // 		console.log (feedback);
            // 	}
            // );

	            // Equivalent to above
	            // $scope.newfeedback.$save(
	            // 	function(){
	            // 		console.log ($scope.newfeedback);
	            //		console.log ("Save method is successful");
	            // 	}
	            // );


			// var feedback = feedbackFactory.get({id : $scope.id},
			// 	function() {
			// 		$scope.feedback = feedback;
			// 		// $scope.feedback.lastName = 'Singh';
			// 		$scope.feedback.last_name = 'Singh';
			// 		var feedbackresponse = $scope.feedback.$update(
			// 		 	function() {
			// 		 		console.log ($scope.feedback);
			// 		 		console.log ("Put method is successful");
			// 		 		console.log (feedbackresponse);
			// 		 	} 	
			// 		);
			// 		console.log (feedbackresponse);
			// 	}
			// );


			// $scope.feedback = feedbackFactory.get({ id : $scope.id},
			// 	function() {
			// 		var feedback = $scope.feedback.$delete(
			// 			function() {
			// 				console.log($scope.feedback);
			// 		 		console.log ("Delete method is successful");
			// 		 		console.log (feedback);
			// 			}
			// 		);
			// 	}
			// );

        }])

;