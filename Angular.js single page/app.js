/*  Tworzymy modu³ 'myProject', który nastêpnie podpinamy poprzez dyrektywê ng-app do tagu <html>
	Dziêki temu, mamy mo¿liwoœæ u¿ywania angulara w ca³ym drzewie DOM pocz¹wszy od tagu <html> i jego dzieciach
*/
var app = angular.module('myProject', []); 


/*  Tworzymy g³ówny kontroler, który zajmie siê routingiem - pozowli nam na zmianê podstron wed³ug naszych zale¿noœci.
	Jako pierwszy argument metody .controller() przekazujemy nazwê kontrolera, który zostanie przypisany poprzez ng-controller do danego elementu. Drugim argumentem jest tablica zale¿noœci, która jako ostatni argument (tablicy) przyjmuje funkcjê kontrolera.
 */
app.controller('mainController', ['$scope', function($scope) {
	
	/* $scope jako argument reprezentuje przestrzeñ nazw dostêpn¹ w danym kontrolerze. */
    
    /* Tworzymy obiekt, w którym przetrzymujemy nasze podstrony. Na chwilê obecn¹ mamy dwie wartoœci - clients oraz data, reprezentuj¹ce ró¿ne podstrony w naszym projekcie.  */
    $scope.menu = [
		{ name: 'clients', commonName: 'Klienci', enabled: false },
		{ name: 'data', commonName: 'Nicolas Cage', enabled: false }
	];
    
	/* Nastêpnie tworzymy metodê, która zmieni nasz¹ aktualn¹ podstronê. Metoda przyjmuje jeden argument, którym jest klucz - nazwa strony. Metodê podpinamy w kodzie html (widoku) poprzez dyrektywê ng-click. */
    $scope.changeSite = function(site) {
		/* Do nowoutworzonej zmiennej 'keys' pzypisujemy tablicê kluczy z obiektu 'menu' */
		/* Iterujemy siê przez tablicê kluczy: */
		console.log('site: ' + site);
        for(var i in $scope.menu) {
			if( $scope.menu[i].name === site) {
				$scope.menu[i].enabled = true;
			} else {
				$scope.menu[i].enabled = false;
			}
		}
		
		
		/* Ustawiamy widocznoœæ podstrony przekazanej jako argument na 'true' - strona przekazana jako argument zostanie pokazana. */
        //$scope.menu[ site ] = true;
    };
    
}]);

/* Tworzymy drugi kontroler, s³u¿¹cy do pracy z u¿ytkownikami (zak³adka klienci) */
app.controller('userController', ['$scope', function($scope) {
    
	/* W lokalnej dla kontrolera przestrzeni nazw definiujemy zmienne, reprezentuj¹ce: 
		> currentUser - aktualnie edytowany u¿ytkownik
		> isEdited, isAdded - flagi s³u¿¹ce wyœwietleniu odpowiedniego formularza do edycji b¹dŸ dodania nowego u¿ytkownika
		> newUser - obiekt reprezentuj¹cy nowego u¿ytkownika, który zostanie dodany do listy u¿ytkowników.
	*/
    $scope.currentUser = null;
    $scope.isEdited = false;
    $scope.isAdded = false;
    $scope.newUser = {};
    
	/* Deklarujemy zmienne, które pos³u¿¹ do definicji tablicy z avatarami u¿ytkowników. */
    $scope.avatars = [];
    $scope.avatarsOtherWay = [];
	
	/* Uzupe³niamy tablicê avatarów wartoœciami 1..8 wraz ze œcie¿k¹ dostêpu. */
    for(var i = 1; i <= 8; i++) {
		/* Metod¹ .push() dodajemy na koñcu tablicy kolejn¹ wartoœæ. */
        $scope.avatars.push('img/av' + i + '.jpg');
    }
    
	/* Definiujemy tablicê u¿ytkowników - ka¿dy u¿ytkownik reprezentowany jest jako nowy obiekt. */
    $scope.users = [
        { login: 'billg', name: 'Bill', lastName: 'Gates', salary: 1000, avatar: 'img/av1.jpg' },
        { login: 'elonm', name: 'Elon', lastName: 'Musk', salary: 1500, avatar: 'img/av2.jpg' },
        { login: 'kaz2', name: 'Kazimierz', lastName: 'II Wielki', salary: 123.23, avatar: 'img/av3.jpg' },
        { login: 'mieszko', name: 'Mieszko', lastName: 'I', salary: 9999.12, avatar: 'img/av4.jpg' },
        { login: 'hford', name: 'Henry', lastName: 'Ford', salary: 3465.12, avatar: 'img/av5.jpg' },
        { login: 'mercu', name: 'Mercedes', lastName: 'Benz', salary: 876.12, avatar: 'img/av6.jpg' },
        { login: 'jaroB', name: 'Jaros³aw', lastName: 'Bezrobotny', salary: 7353.12, avatar: 'img/av7.jpg' },
        { login: 'donek', name: 'Donald', lastName: 'Tusk', salary: 777, avatar: 'img/av8.jpg' }
    ];
    
	/* Uzupe³niamy drug¹ tablicê z avatarami, innym sposobem. Iteruj¹c siê poprzez wszystkich u¿ytkowników, sprawdzamy metod¹ .indexOf(), czy taki element (avatar) ju¿ istnieje w tablicy, je¿eli tak, nie dodajemy go ponownie.
		> Metoda .indexOf() zwraca -1 kiedy nie znajdzie elementu i wartoœæ nieujemn¹, kiedy taki element znajduje siê ju¿ w tablicy.
	*/
    for(var i in $scope.users) {
		/* Sprawdzamy czy element istnieje w tablicy, je¿eli nie, to: */
        if($scope.avatarsOtherWay.indexOf($scope.users[i].avatar) === -1) { 
			/* dodajemy go do tablicy */
            $scope.avatarsOtherWay.push($scope.users[i].avatar);
        }
    }
    
	/* Tworzymy metodê s³u¿¹c¹ do usuwania u¿ytkownika po loginie.  */
    $scope.deleteUser = function(login) {
		/* iterujemy siê przez wszystkich u¿ytkowników */
        for(var i in $scope.users) {
			/* je¿eli napotkamy login pasuj¹cy do przekazanego argumentu */
            if($scope.users[i].login === login) {
				/* usuwamy jeden element z tablicy (naszego u¿ytkownika) */
                $scope.users.splice(i, 1);
				/* przerywamy petle iteracyjna, gdy¿ usunêliœmy ju¿ u¿ytkownika */
                break;
            }
        }
    };
    
	/* tworzymy metodê editUser(), która zmienia flagê tak, aby pokaza³ nam siê formularz edycji u¿ytkownika */
    $scope.editUser = function(id) {
		/* jednoczeœnie do zmiennej currentUser przypisujemy obiekt aktualnie edytowanego u¿ytkownika - pozowli on na póŸniejsze nadpisanie u¿ytkownika */
        $scope.currentUser = $scope.users[id];
        $scope.isEdited = true;
    };
    
	/* Tworzymy metodê zeruj¹c¹ akcj edycji. */
    $scope.saveUserEdit = function() {
		/* zmieniamy flagê na false */
        $scope.isEdited = false;
		/* oraz jako aktualnie edytowanego u¿ytkownika ustawiamy wartoœæ null */
        $scope.currentUser = null;
    }
    
	/* Tworzymy metodê saveUser(), która pos³u¿y zapisaniu nowego u¿ytkownika */
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
		
		/* dodajemy do tablicy u¿ytkowników obiekt z nowym u¿ytkownikiem */
        $scope.users.push($scope.newUser);
		/* resetujemy zmienn¹ reprezentuj¹c¹ nowego u¿ytkownika, tak abyœmy mogli dodaæ ponownie kolejnego */
        $scope.newUser = {};
        $scope.isAdded = false;
		
    };
    
	/* Tworzymy metodê, która pos³u¿y do wewnêtrznego routingu - odkryje formularz dla dodawania nowego u¿ytkownika. */
    $scope.addNewUser = function() {
        $scope.isAdded = true;
    };
    
    
}]);