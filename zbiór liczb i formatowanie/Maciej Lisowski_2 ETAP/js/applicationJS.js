/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
//Pierwsze polecenie

    $('#checkButton').click(function () {
        var fullArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var checkedNumbersArray = $('input:checkbox:checked.checkboxNumberToArray').map(function () {
            return this.value;
        }).get();

        for (var i = 0; i < checkedNumbersArray.length; i++) {

            checkedNumbersArray[i] = parseInt(checkedNumbersArray[i]);
        }
        ;

        var arrayFinal = $(fullArray).not(checkedNumbersArray).get();

        if (checkedNumbersArray.length === fullArray.length) {
            $('#insertNumberInput').val("wprowadzona tablica zawiera liczby wszystkie liczby {1,10}");
        } else {
            $('#insertNumberInput').val(arrayFinal);

        }
    });


// Drugie polecenie

    var inputNumber = $('#formatNumberInput');

    $('#formatNumberInput').focus(function () {
        inputNumber.val("");
    })
            .blur(function () {

                var numberArray = [];
                numberArray = $.trim(inputNumber.val()).split('');
                if (numberArray.length > 2)
                {
                    var i = 2;
                    numberArray.splice(i, 0, " ");
                    var l = Math.floor((numberArray.length - 3) / 4);
                    for (j = 1; j <= l; j++)
                    {
                        numberArray.splice(2 + j * 5, 0, " ");
                    }
                    inputNumber.val(numberArray.join(''));

                }
                ;
            });
});