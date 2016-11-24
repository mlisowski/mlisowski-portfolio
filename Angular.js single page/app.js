/*  Tworzymy modu� 'myProject', kt�ry nast�pnie podpinamy poprzez dyrektyw� ng-app do tagu <html>
	Dzi�ki temu, mamy mo�liwo�� u�ywania angulara w ca�ym drzewie DOM pocz�wszy od tagu <html> i jego dzieciach
*/
var app = angular.module('myProject', []); 


/*  Tworzymy g��wny kontroler, kt�ry zajmie si� routingiem - pozowli nam na zmian� podstron wed�ug naszych zale�no�ci.
	Jako pierwszy argument metody .controller() przekazujemy nazw� kontrolera, kt�ry zostanie przypisany poprzez ng-controller do danego elementu. Drugim argumentem jest tablica zale�no�ci, kt�ra jako ostatni argument (tablicy) przyjmuje funkcj� kontrolera.
 */
app.controller('mainController', ['$scope', function($scope) {
	
	/* $scope jako argument reprezentuje przestrze� nazw dost�pn� w danym kontrolerze. */
    
    /* Tworzymy obiekt, w kt�rym przetrzymujemy nasze podstrony. Na chwil� obecn� mamy dwie warto�ci - clients oraz data, reprezentuj�ce r�ne podstrony w naszym projekcie.  */
    $scope.menu = [
		{ name: 'clients', commonName: 'Klienci', enabled: false },
		{ name: 'data', commonName: 'Nicolas Cage', enabled: false }
	];
    
	/* Nast�pnie tworzymy metod�, kt�ra zmieni nasz� aktualn� podstron�. Metoda przyjmuje jeden argument, kt�rym jest klucz - nazwa strony. Metod� podpinamy w kodzie html (widoku) poprzez dyrektyw� ng-click. */
    $scope.changeSite = function(site) {
		/* Do nowoutworzonej zmiennej 'keys' pzypisujemy tablic� kluczy z obiektu 'menu' */
		/* Iterujemy si� przez tablic� kluczy: */
		console.log('site: ' + site);
        for(var i in $scope.menu) {
			if( $scope.menu[i].name === site) {
				$scope.menu[i].enabled = true;
			} else {
				$scope.menu[i].enabled = false;
			}
		}
		
		
		/* Ustawiamy widoczno�� podstrony przekazanej jako argument na 'true' - strona przekazana jako argument zostanie pokazana. */
        //$scope.menu[ site ] = true;
    };
    
}]);

/* Tworzymy drugi kontroler, s�u��cy do pracy z u�ytkownikami (zak�adka klienci) */
app.controller('userController', ['$scope', function($scope) {
    
	/* W lokalnej dla kontrolera przestrzeni nazw definiujemy zmienne, reprezentuj�ce: 
		> currentUser - aktualnie edytowany u�ytkownik
		> isEdited, isAdded - flagi s�u��ce wy�wietleniu odpowiedniego formularza do edycji b�d� dodania nowego u�ytkownika
		> newUser - obiekt reprezentuj�cy nowego u�ytkownika, kt�ry zostanie dodany do listy u�ytkownik�w.
	*/
    $scope.currentUser = null;
    $scope.isEdited = false;
    $scope.isAdded = false;
    $scope.newUser = {};
    
	/* Deklarujemy zmienne, kt�re pos�u�� do definicji tablicy z avatarami u�ytkownik�w. */
    $scope.avatars = [];
    $scope.avatarsOtherWay = [];
	
	/* Uzupe�niamy tablic� avatar�w warto�ciami 1..8 wraz ze �cie�k� dost�pu. */
    for(var i = 1; i <= 8; i++) {
		/* Metod� .push() dodajemy na ko�cu tablicy kolejn� warto��. */
        $scope.avatars.push('img/av' + i + '.jpg');
    }
    
	/* Definiujemy tablic� u�ytkownik�w - ka�dy u�ytkownik reprezentowany jest jako nowy obiekt. */
    $scope.users = [
        { login: 'billg', name: 'Bill', lastName: 'Gates', salary: 1000, avatar: 'img/av1.jpg' },
        { login: 'elonm', name: 'Elon', lastName: 'Musk', salary: 1500, avatar: 'img/av2.jpg' },
        { login: 'kaz2', name: 'Kazimierz', lastName: 'II Wielki', salary: 123.23, avatar: 'img/av3.jpg' },
        { login: 'mieszko', name: 'Mieszko', lastName: 'I', salary: 9999.12, avatar: 'img/av4.jpg' },
        { login: 'hford', name: 'Henry', lastName: 'Ford', salary: 3465.12, avatar: 'img/av5.jpg' },
        { login: 'mercu', name: 'Mercedes', lastName: 'Benz', salary: 876.12, avatar: 'img/av6.jpg' },
        { login: 'jaroB', name: 'Jaros�aw', lastName: 'Bezrobotny', salary: 7353.12, avatar: 'img/av7.jpg' },
        { login: 'donek', name: 'Donald', lastName: 'Tusk', salary: 777, avatar: 'img/av8.jpg' }
    ];
    
	/* Uzupe�niamy drug� tablic� z avatarami, innym sposobem. Iteruj�c si� poprzez wszystkich u�ytkownik�w, sprawdzamy metod� .indexOf(), czy taki element (avatar) ju� istnieje w tablicy, je�eli tak, nie dodajemy go ponownie.
		> Metoda .indexOf() zwraca -1 kiedy nie znajdzie elementu i warto�� nieujemn�, kiedy taki element znajduje si� ju� w tablicy.
	*/
    for(var i in $scope.users) {
		/* Sprawdzamy czy element istnieje w tablicy, je�eli nie, to: */
        if($scope.avatarsOtherWay.indexOf($scope.users[i].avatar) === -1) { 
			/* dodajemy go do tablicy */
            $scope.avatarsOtherWay.push($scope.users[i].avatar);
        }
    }
    
	/* Tworzymy metod� s�u��c� do usuwania u�ytkownika po loginie.  */
    $scope.deleteUser = function(login) {
		/* iterujemy si� przez wszystkich u�ytkownik�w */
        for(var i in $scope.users) {
			/* je�eli napotkamy login pasuj�cy do przekazanego argumentu */
            if($scope.users[i].login === login) {
				/* usuwamy jeden element z tablicy (naszego u�ytkownika) */
                $scope.users.splice(i, 1);
				/* przerywamy petle iteracyjna, gdy� usun�li�my ju� u�ytkownika */
                break;
            }
        }
    };
    
	/* tworzymy metod� editUser(), kt�ra zmienia flag� tak, aby pokaza� nam si� formularz edycji u�ytkownika */
    $scope.editUser = function(id) {
		/* jednocze�nie do zmiennej currentUser przypisujemy obiekt aktualnie edytowanego u�ytkownika - pozowli on na p�niejsze nadpisanie u�ytkownika */
        $scope.currentUser = $scope.users[id];
        $scope.isEdited = true;
    };
    
	/* Tworzymy metod� zeruj�c� akcj edycji. */
    $scope.saveUserEdit = function() {
		/* zmieniamy flag� na false */
        $scope.isEdited = false;
		/* oraz jako aktualnie edytowanego u�ytkownika ustawiamy warto�� null */
        $scope.currentUser = null;
    }
    
	/* Tworzymy metod� saveUser(), kt�ra pos�u�y zapisaniu nowego u�ytkownika */
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
		
		/* dodajemy do tablicy u�ytkownik�w obiekt z nowym u�ytkownikiem */
        $scope.users.push($scope.newUser);
		/* resetujemy zmienn� reprezentuj�c� nowego u�ytkownika, tak aby�my mogli doda� ponownie kolejnego */
        $scope.newUser = {};
        $scope.isAdded = false;
		
    };
    
	/* Tworzymy metod�, kt�ra pos�u�y do wewn�trznego routingu - odkryje formularz dla dodawania nowego u�ytkownika. */
    $scope.addNewUser = function() {
        $scope.isAdded = true;
    };
    
    
}]);