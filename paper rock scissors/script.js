var user;
var computerChoice = "";
var choose = function (choice) {
    randomizeNumber();
    user = choice;
    console.log(user);
    checkResult(computerChoice, user)
};
    
    function randomizeNumber() {
 
    var randomNumber = Math.random();
    if (randomNumber < 0.34) {
        computerChoice = "rock"
        console.log(computerChoice);
    } else if (randomNumber >= 0.34 && randomNumber < 0.67) {
        computerChoice = "paper";
                console.log(computerChoice);
    } else if (randomNumber >= 0.67) {
        computerChoice = "scissors";
                console.log(computerChoice);
    }
};

function checkResult(computerChoice, user) {
   if (computerChoice === user) {
        document.getElementById("result").innerHTML = "computer's choice is:" + computerChoice + " ...so we have a " + "tie!";
    } else if (user === "rock") {
        if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "computer's choice is:" + computerChoice + " ...so " + "you Win!";
        } else {
            document.getElementById("result").innerHTML = "computer's choice is:" + computerChoice + " ...so " + "You lose!";
        }
    } else if (user === "paper") {
        if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "computer's choice is:" + computerChoice + " ...so " + "you Win!";
        } else if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "computer's choice is:" + computerChoice + " ...so " + "you Lose!";
        }
    } else if (user === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "computer's choice is:" + computerChoice + " ...so " + "you Lose!";
        } else if (computerChoice === "paper") {
            document.getElementById("result").innerHTML = "computer's choice is:" + computerChoice + " ...so " + "you Win!";
        }
    } else {
        document.getElementById("result").innerHTML = "Houston, we have a problem... something went wrong...";
    };
};




