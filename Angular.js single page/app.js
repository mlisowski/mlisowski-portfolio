
var app = angular.module('myProject', []); 


app.controller('mainController', ['$scope', function($scope) {
	
	   $scope.menu = [
		{ name: 'clients', commonName: 'Klienci', enabled: false },
		{ name: 'data', commonName: 'Nicolas Cage', enabled: false }
	];
    
    $scope.changeSite = function(site) {
			console.log('site: ' + site);
        for(var i in $scope.menu) {
			if( $scope.menu[i].name === site) {
				$scope.menu[i].enabled = true;
			} else {
				$scope.menu[i].enabled = false;
			}
		}
		
		  };
    
}]);

app.controller('userController', ['$scope', function($scope) {
        $scope.currentUser = null;
    $scope.isEdited = false;
    $scope.isAdded = false;
    $scope.newUser = {};
    
    $scope.avatars = [];
    $scope.avatarsOtherWay = [];
	
   for(var i = 1; i <= 8; i++) {
      $scope.avatars.push('img/av' + i + '.jpg');
    }
    
    $scope.users = [
        { login: 'billg', name: 'Bill', lastName: 'Gates', salary: 1000, avatar: 'img/av1.jpg' },
        { login: 'elonm', name: 'Elon', lastName: 'Musk', salary: 1500, avatar: 'img/av2.jpg' },
        { login: 'kaz2', name: 'Kazimierz', lastName: 'II Wielki', salary: 123.23, avatar: 'img/av3.jpg' },
        { login: 'mieszko', name: 'Mieszko', lastName: 'I', salary: 9999.12, avatar: 'img/av4.jpg' },
        { login: 'hford', name: 'Henry', lastName: 'Ford', salary: 3465.12, avatar: 'img/av5.jpg' },
        { login: 'mercu', name: 'Mercedes', lastName: 'Benz', salary: 876.12, avatar: 'img/av6.jpg' },
        { login: 'jaroB', name: 'Jarosław', lastName: 'Bezrobotny', salary: 7353.12, avatar: 'img/av7.jpg' },
        { login: 'donek', name: 'Donald', lastName: 'Tusk', salary: 777, avatar: 'img/av8.jpg' }
    ];
    
	    for(var i in $scope.users) {
	     if($scope.avatarsOtherWay.indexOf($scope.users[i].avatar) === -1) { 
          $scope.avatarsOtherWay.push($scope.users[i].avatar);
        }
    }
    
    $scope.deleteUser = function(login) {
      for(var i in $scope.users) {
          if($scope.users[i].login === login) {
              $scope.users.splice(i, 1);
	             break;
            }
        }
    };
    
  $scope.editUser = function(id) {
       $scope.currentUser = $scope.users[id];
        $scope.isEdited = true;
    };
     $scope.saveUserEdit = function() {
      $scope.isEdited = false;
      $scope.currentUser = null;
    }
    
    $scope.saveUser = function() {
		var salaryVal = $('#newsalary').val();
		$scope.error = [];
		
		$scope.newUser['salary'] = (isNaN(parseFloat(salaryVal))) ? 0 : parseFloat(salaryVal);
		
		if( angular.isUndefined($scope.newUser.login) ) {
			$scope.error.push('Nie podano loginu.');
		}
		if( angular.isUndefined($scope.newUser.name) ) {
			$scope.error.push('Nie podano imienia.');
		}
		if( angular.isUndefined($scope.newUser.lastName) ) {
			$scope.error.push('Nie podano nazwiska.');
		}
		
		if( $scope.error.length > 0 ) {
			$scope.error = $scope.error.join("\n");
			return;
		}
		
      $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.isAdded = false;
		
    };
    
  $scope.addNewUser = function() {
        $scope.isAdded = true;
    };
    
    
}]);
