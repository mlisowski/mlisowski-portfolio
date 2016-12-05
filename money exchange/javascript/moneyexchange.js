(function(){
    window.onload = function(){

var exchangeBtn = document.getElementById("exchangeBtn");

exchangeBtn.addEventListener("click", exchangeAmountLog);

var nominalValues = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];





function exchangeAmountLog() {
        var amountInput = document.getElementById("amountInput").value;

    console.log(amountInput);
    var result = document.getElementById("result");

if (!result.innerText && !amountInput) 
{result.innerText += "Type your amount please...";}

else if (!isNaN(amountInput)){
 
var usedNominals = "You should use following nominals:\r\n";
var i = 0;
var nominalQuantity;
 
while (amountInput>0 && i<=nominalValues.length) {
if (amountInput >= nominalValues[i]) {
nominalQuantity=Math.floor(amountInput/nominalValues[i]);                   
amountInput=Math.round(100*(amountInput-(nominalValues[i]*nominalQuantity)))/100;     
usedNominals += nominalValues[i] + " PLN x " + nominalQuantity + "\r\n";
}

i++;
}
 
result.innerText = usedNominals;
}
else  {
alert('Error! Incorrect input value');
}
return false;
}

};

})();
